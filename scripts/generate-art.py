"""
NeuroGrowth brand art generator.
Creates the abstract "liquid silk" images used across the site, the founder
duotone portrait, and a trimmed logo. Deterministic: same seeds -> same images.

Usage (from the repo root):
    python scripts/generate-art.py
Requires: numpy, scipy, pillow  ->  pip install numpy scipy pillow
"""
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter, ImageOps
from scipy.ndimage import gaussian_filter, map_coordinates

ROOT = Path(__file__).resolve().parent.parent
ART = ROOT / "public" / "images" / "art"
TEAM = ROOT / "public" / "images" / "team"
BRAND = ROOT / "public" / "brand"
for d in (ART, TEAM, BRAND):
    d.mkdir(parents=True, exist_ok=True)


def hexc(h):
    h = h.lstrip("#")
    return [int(h[i:i + 2], 16) for i in (0, 2, 4)]


def palette(t, stops):
    t = np.clip(t, 0, 1)
    pos = np.array([s[0] for s in stops])
    cols = np.array([hexc(s[1]) for s in stops], float)
    return np.stack([np.interp(t, pos, cols[:, c]) for c in range(3)], -1)


def noise(rng, n, sigma):
    f = gaussian_filter(rng.standard_normal((n, n)), sigma, mode="wrap")
    return f / f.std()


def sample(f, x, y):
    n = f.shape[0]
    return map_coordinates(f, [y % n, x % n], order=1, mode="wrap")


def fluid(seed, w, h, stops, out, scale=0.12, k=1.2, stretch=(1, 0.5), rot=0.5):
    """Domain-warped noise, shaded as a glossy surface."""
    rng = np.random.default_rng(seed)
    n = 512
    a = noise(rng, n, 28) + 0.5 * noise(rng, n, 12)
    b = noise(rng, n, 28) + 0.5 * noise(rng, n, 12)
    c = noise(rng, n, 36) + 0.4 * noise(rng, n, 14)
    d = noise(rng, n, 36) + 0.4 * noise(rng, n, 14)
    e = noise(rng, n, 22)
    hh, ww = h // 2, w // 2
    y, x = np.mgrid[0:hh, 0:ww].astype(float)
    ca, sa = np.cos(rot), np.sin(rot)
    px = (x * ca - y * sa) * scale * stretch[0]
    py = (x * sa + y * ca) * scale * stretch[1]
    qx, qy = sample(a, px, py), sample(b, px + 80, py + 30)
    rx = sample(c, px + 60 * k * qx, py + 60 * k * qy)
    ry = sample(d, px + 60 * k * qx + 40, py + 60 * k * qy + 90)
    f = gaussian_filter(sample(e, px + 90 * k * rx, py + 90 * k * ry), 2.6)
    gy, gx = np.gradient(f)
    nrm = np.stack([-gx, -gy, np.full_like(f, 0.018)], -1)
    nrm /= np.linalg.norm(nrm, axis=-1, keepdims=True)
    light = np.array([-0.5, -0.6, 0.62])
    light /= np.linalg.norm(light)
    diff = np.clip((nrm * light).sum(-1), 0, 1)
    half = light + np.array([0, 0, 1.0])
    half /= np.linalg.norm(half)
    spec = np.clip((nrm * half).sum(-1), 0, 1) ** 18
    fn = (f - f.min()) / np.ptp(f)
    col = palette(0.55 * fn + 0.45 * diff, stops) + 255 * 0.5 * spec[..., None]
    img = Image.fromarray(np.clip(col, 0, 255).astype(np.uint8))
    img = img.resize((w, h), Image.LANCZOS).filter(ImageFilter.GaussianBlur(0.8))
    grain = np.random.default_rng(seed + 1).standard_normal((h, w, 1)) * 3
    img = Image.fromarray(np.clip(np.asarray(img, float) + grain, 0, 255).astype(np.uint8))
    img.save(out, "WEBP", quality=80, method=6)
    print("wrote", out.relative_to(ROOT))


JOBS = [
    # seed, w, h, palette stops, filename, scale mult, k, stretch, rotation
    (3, 2400, 1400, [(0, "#02060f"), (.4, "#061a44"), (.66, "#0b5ad6"), (.86, "#3fd9ff"), (1, "#effcff")], "hero.webp", .9, 1.3, (1, .45), .5),
    (33, 1200, 1100, [(0, "#040c30"), (.38, "#0c2f9c"), (.72, "#3a7bff"), (.9, "#cfe3ff"), (1, "#ffffff")], "system-strategy.webp", 1.0, 1.3, (1, .4), 1.6),
    (12, 1200, 1100, [(0, "#02070f"), (.42, "#07305e"), (.74, "#0aa2d9"), (1, "#eafcff")], "system-growth.webp", 1.1, 1.2, (1, .5), 1.3),
    (22, 1200, 1100, [(0, "#010f0e"), (.42, "#04413b"), (.76, "#12c9a7"), (1, "#ecfffa")], "system-customer.webp", 1.1, 1.2, (1, .5), 1.1),
    (44, 1200, 1100, [(0, "#02070f"), (.45, "#0b2342"), (.78, "#22b6e8"), (1, "#e2fdff")], "system-data.webp", 1.2, 1.1, (1, .55), .2),
    (66, 2400, 1300, [(0, "#010610"), (.45, "#071d3f"), (.78, "#0b86c4"), (1, "#caf5ff")], "products.webp", .9, 1.2, (1, .45), .9),
    (77, 1400, 1500, [(0, "#02070f"), (.4, "#062a4a"), (.72, "#0b9fd0"), (.9, "#8fe9ff"), (1, "#f2fdff")], "approach.webp", 1.0, 1.25, (1, .5), 2.8),
    (55, 1400, 1600, [(0, "#02060f"), (.4, "#061a44"), (.7, "#0870d0"), (.9, "#40dcff"), (1, "#f0fcff")], "contact.webp", 1.0, 1.3, (1, .45), 2.2),
]


CROP_OFFSETS = {
    "lenny": 0.0,
}


def duotone_portrait(src, out, width=900, crop_offset=0.0):
    """Vale-style blue duotone with a fine diagonal screen."""
    p = ImageOps.autocontrast(Image.open(src).convert("L"), cutoff=1)
    p = p.resize((width, int(width * p.size[1] / p.size[0])), Image.LANCZOS)
    top = max(0, int(width * (0.06 + crop_offset)))
    p = p.crop((0, top, width, min(p.size[1], top + int(width * 1.15))))
    a = np.asarray(p, float) / 255
    y, x = np.mgrid[0:a.shape[0], 0:a.shape[1]]
    screen = np.sin((x + y) * 0.7) * 0.5 + 0.5
    t = np.clip(a * 1.1 - 0.05 + (screen - 0.5) * 0.18, 0, 1)[..., None]
    dark, mid, light = np.array([5, 13, 40]), np.array([10, 80, 190]), np.array([200, 240, 255])
    col = np.where(t < 0.5, dark + (mid - dark) * (t / 0.5), mid + (light - mid) * ((t - 0.5) / 0.5))
    Image.fromarray(col.astype(np.uint8)).save(out, "WEBP", quality=82, method=6)
    print("wrote", out.relative_to(ROOT))


def trimmed_logo(src, out_png, out_webp, height=250):
    im = Image.open(src).convert("RGBA")
    im = im.crop(im.getbbox())
    im = im.resize((int(im.size[0] * height / im.size[1]), height), Image.LANCZOS)
    im.save(out_png, optimize=True)
    im.save(out_webp, "WEBP", quality=90, method=6)
    print("wrote", out_png.relative_to(ROOT), out_webp.relative_to(ROOT), im.size)


if __name__ == "__main__":
    for seed, w, h, stops, name, sc, k, st, rot in JOBS:
        fluid(seed, w, h, stops, ART / name, scale=sc * 0.12, k=k, stretch=st, rot=rot)
    team_src_dir = ROOT / "public" / "team"
    if team_src_dir.exists():
        seen = set()
        for ext in ("*.jpg", "*.jpeg", "*.png", "*.webp"):
            for img_path in sorted(team_src_dir.glob(ext)):
                stem = img_path.stem.lower()
                if stem in seen:
                    continue
                seen.add(stem)
                offset = CROP_OFFSETS.get(stem, 0.0)
                out_path = TEAM / f"{stem}-duotone.webp"
                duotone_portrait(img_path, out_path, crop_offset=offset)
    else:
        print("skipped team portraits: public/team not found")
    logo_src = ROOT / "public" / "logo.png"
    if logo_src.exists():
        trimmed_logo(logo_src, BRAND / "neurogrowth-logo.png", BRAND / "neurogrowth-logo.webp")
    else:
        print("skipped logo: public/logo.png not found")
