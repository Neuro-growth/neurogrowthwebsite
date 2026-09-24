#!/usr/bin/env python3
"""
scripts/import-product-assets.py

Converts raw product imagery from the scratch folder (../_ng-assets) into
optimized WebP assets in public/images/products/.
Idempotent and safe to run multiple times.
"""

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SCRATCH = ROOT.parent / "_ng-assets"

SMARTCHAMA_SRC = SCRATCH / "smartchama"
SMARTCHAMA_OUT = ROOT / "public" / "images" / "products" / "smartchama"

TRANSLATOR_SRC = SCRATCH / "gikuyu-translator"
TRANSLATOR_SHOTS = SCRATCH / "shots"
TRANSLATOR_OUT = ROOT / "public" / "images" / "products" / "gikuyu-translator"


def optimize_image(src: Path, out: Path, max_width: int, quality: int, keep_alpha: bool = False):
    out.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as im:
        if keep_alpha:
            im = im.convert("RGBA")
        else:
            im = im.convert("RGB")
        w, h = im.size
        if w > max_width:
            new_h = int(h * (max_width / w))
            im = im.resize((max_width, new_h), Image.LANCZOS)
        im.save(out, "WEBP", quality=quality, method=6)
        print(f"wrote {out.relative_to(ROOT)} ({im.size[0]}x{im.size[1]})")


SMARTCHAMA_IMAGES = [
    ("hero_dashboard.jpg", "dashboard.webp"),
    ("mpesa_confirm.jpg", "mpesa-payment.webp"),
    ("loan_approval.jpg", "loan-approval.webp"),
    ("merrygoround_sched.jpg", "merry-go-round.webp"),
    ("group_members.jpg", "members.webp"),
    ("welfare_claim.jpg", "welfare-claim.webp"),
    ("pdf_statement.jpg", "statement.webp"),
    ("smartgrow_proposal.jpg", "investment-vote.webp"),
    ("chama_women.jpg", "community.webp"),
    ("mobile_splash.jpg", "app-splash.webp"),
]

TRANSLATOR_CAPTURES = [
    ("landing.png", "landing.webp"),
    ("translate.png", "translate.webp"),
    ("speak.png", "text-to-speech.webp"),
    ("dashboard.png", "dashboard.webp"),
    ("translate-mobile.png", "translate-mobile.webp"),
]


def import_smartchama():
    print("\n--- Importing SmartChama Assets ---")
    img_dir = SMARTCHAMA_SRC / "public" / "images"
    if not img_dir.exists():
        print(f"Skipping SmartChama: {img_dir} does not exist")
        return

    for src_name, out_name in SMARTCHAMA_IMAGES:
        src_path = img_dir / src_name
        out_path = SMARTCHAMA_OUT / out_name
        if src_path.exists():
            optimize_image(src_path, out_path, max_width=1600, quality=82)
        else:
            print(f"Warning: {src_path} not found")

    logo_path = SMARTCHAMA_SRC / "public" / "logo.png"
    if logo_path.exists():
        optimize_image(logo_path, SMARTCHAMA_OUT / "logo.webp", max_width=512, quality=90, keep_alpha=True)
    else:
        print(f"Warning: {logo_path} not found")


def import_translator():
    print("\n--- Importing Gikuyu AI Translator Assets ---")
    if not TRANSLATOR_SHOTS.exists():
        print(f"Shots folder {TRANSLATOR_SHOTS} does not exist yet. Run capture script first.")
    else:
        for src_name, out_name in TRANSLATOR_CAPTURES:
            src_path = TRANSLATOR_SHOTS / src_name
            out_path = TRANSLATOR_OUT / out_name
            if src_path.exists():
                optimize_image(src_path, out_path, max_width=1600, quality=85)
            else:
                print(f"Warning: {src_path} not found")

    icon_path = TRANSLATOR_SRC / "public" / "icon.png"
    if icon_path.exists():
        optimize_image(icon_path, TRANSLATOR_OUT / "icon.webp", max_width=512, quality=90, keep_alpha=True)
    else:
        print(f"Warning: {icon_path} not found")


if __name__ == "__main__":
    import_smartchama()
    import_translator()
