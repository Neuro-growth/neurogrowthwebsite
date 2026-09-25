# NeuroGrowth Tech — Website

Marketing website for [NeuroGrowth Tech](https://neurogrowthtech.com), an AI engineering studio in Nairobi building automation, chatbots and prediction systems for African businesses.

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16.2 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Font | Geist Sans (via `next/font/google`) |
| UI primitives | Base UI (`@base-ui/react`) for accordion, dialog, sheet |
| Icons | `lucide-react` |
| Forms | Formspree (`mdavdkee`) |
| Deployment | Vercel |

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (port 3001)
npm run dev

# Production build
npm run build

# Start production server (port 3001)
npm start
```

Open <http://localhost:3001> in your browser.

## Project structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/              # /about
│   ├── contact/            # /contact (dynamic — reads searchParams)
│   ├── insights/           # /insights + /insights/[slug]
│   ├── pricing/            # /pricing
│   ├── privacy/            # /privacy
│   ├── products/           # /products + /products/[slug]
│   ├── services/           # /services
│   ├── terms/              # /terms
│   ├── dev/ui/             # Design system preview (404 in production)
│   ├── globals.css          # Tailwind v4 @theme tokens + utility classes
│   ├── layout.tsx          # Root layout (nav, footer, skip link, structured data)
│   ├── not-found.tsx       # Custom 404 page
│   ├── opengraph-image.tsx # Dynamic OG image generation
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── ui/                 # Design system primitives (Button, Panel, Tag, etc.)
│   ├── site/               # Shell components (SiteNav, SiteFooter, PageHero, etc.)
│   ├── blocks/             # Reusable page blocks (SystemCard, PlanCard, FaqBlock, etc.)
│   └── sections/           # Page-specific section compositions
├── content/                # Typed content layer — all copy lives here
│   ├── site.ts             # Company info, socials, nav links
│   ├── systems.ts          # 4 AI systems (10 services)
│   ├── products.ts         # SmartChama, Gikuyu Translator
│   ├── team.ts             # Team members
│   ├── pricing.ts          # Plans in KSh
│   ├── testimonials.ts     # Client testimonials
│   ├── faqs.ts             # FAQ sets per page
│   ├── insights/           # Article content (data-driven)
│   └── legal/              # Privacy policy, terms of use
├── lib/
│   └── utils.ts            # cn() helper (clsx + tailwind-merge)
└── StructuredData.tsx      # Global JSON-LD (Organization + WebSite)
```

## Content editing

All copy lives in `src/content/*.ts`. Pages import from the content layer — no hard-coded strings in JSX.

### Adding an article

1. Create `src/content/insights/<slug>.ts` exporting an `Article`
2. Add it to the `articles` array in `src/content/insights/index.ts`
3. Pick a cover image from `public/images/art/`
4. The article appears on `/insights`, gets its own page at `/insights/<slug>`, and is added to the sitemap automatically

## Design tokens

Tokens are defined with Tailwind v4's CSS-first `@theme` in `src/app/globals.css`. There is no `tailwind.config` file.

Key colour tokens: `navy`, `navy-2`, `navy-3`, `cyan`, `cyan-deep`, `teal`, `green`, `mist`, `ink`, `ink-2`, `ink-3`, `on-dark`, `on-dark-2`, `on-dark-3`, `whatsapp`.

Key type classes: `t-display`, `t-h1`, `t-h2`, `t-h2-sm`, `t-h3`, `t-h4`, `t-num`, `t-tag`.

Layout classes: `container-site` (max 1280px), `section-y` (vertical padding).

## Images

- **Generated art**: `public/images/art/` — created by `scripts/generate-art.py` (deterministic)
- **Product screenshots**: `public/images/products/` — imported by `scripts/import-product-assets.py`
- **Team photos**: `public/images/team/` — duotone treatment applied by `scripts/generate-art.py`
- **Brand**: `public/brand/neurogrowth-logo.webp`

All images use `next/image`. No external image domains are configured.

## Redirects

| Old URL | New URL | Status |
|---------|---------|--------|
| `/home` | `/` | 308 |
| `/solutions` | `/products` | 308 |
| `/resources` | `/insights` | 308 |
| `/resources/:slug` | `/insights/:slug` | 308 |

## Security headers

Applied via `next.config.ts` `headers()`:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`

## Deployment

The site deploys to **Vercel**. Push to `main` triggers a production deploy.

```bash
# Preview deploy (from any branch)
npx vercel

# Production deploy
npx vercel --prod
```

## License

Proprietary — NeuroGrowth Tech. All rights reserved.
