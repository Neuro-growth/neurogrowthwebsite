# NeuroGrowth Tech — Redesign Brief (v3, "Signal Window")

Source of truth for every redesign prompt. If a prompt and this brief disagree, the prompt wins for that step only; update this brief if the change is permanent.

---

## 1. What this site is

A **B2B lead-generation site for an AI engineering studio in Nairobi that also builds its own products** (SmartChama, Gikuyu AI Translator).

- Primary job: turn a Kenyan / East African business owner into a booked call (contact form or WhatsApp).
- Secondary job: prove delivery. The in-house products are the strongest proof.
- Audience: SME owners, operations leads, chama officials, schools, NGOs. Mostly mobile, often on limited data, WhatsApp-first.

## 2. Design direction

Modern, sleek and restrained. Built from five references:

| Reference | What we use |
|---|---|
| CoolFix | Page content sits in rounded panels inset from the viewport edge. The nav lives inside the hero panel: round menu button + nav links in a pill (left), logo centred, phone pill + primary CTA (right). |
| Capital-Line | Very large, light-weight headlines. Stats row with big light numerals, a `^` marker, a short dash, thin dividers. |
| Vale Capital | Blue duotone photography, small "label" markers above headings, section heads with the heading left and a short paragraph right, product showcase (large image + white card + arrows + counter), 2×2 approach grid, integration rail with vertical dividers, contact split (image left, form right), dark footer with columns. |
| Skincare | Dark panel of cards: image with a frosted "glass" pill on it, small dot + uppercase tag, title, muted description. |
| Aurora | Phone mockups for product UI, giant wordmark at the bottom of the footer. |

Rules that keep it sleek:
- One typeface (Geist). Headlines are **weight 400**, never bold. No serif, no mono labels, no gradient text.
- Colour is used sparingly: navy, white/mist, cyan accents. Green appears **only** on the "Book a call" button.
- Motion is limited to hover transitions, a gentle image zoom on cards, and the product slider. No scroll-reveal, no marquee, no glow.
- Every section aligns to the same 12-column grid and container.

## 3. Tokens

### Colour

| Token | Hex | Use |
|---|---|---|
| navy | `#050D1A` | Dark panels, primary text on light |
| navy-2 | `#0A1628` | Image placeholders on dark |
| navy-3 | `#12213A` | Hover for ink buttons |
| cyan | `#00D4FF` | Accent on dark (highlight word, label glyph, stat `^`, button dots) |
| cyan-deep | `#0069A8` | Accent on light (label glyph, step numbers, links) |
| teal | `#00FFCC` | Rare: success/live states only |
| green | `#00A83A` | "Book a call" button fill only |
| green-hi | `#00C244` | Green hover |
| green-ink | `#03140A` | Text on green (6:1 contrast; white on green fails AA) |
| mist | `#EEF2F6` | Page background |
| white | `#FFFFFF` | Cards, form panel, rails |
| line | `#D6DEE7` | Dividers on light |
| ink | `#050D1A` | Headings on light |
| ink-2 | `#3D4F68` | Body on light |
| ink-3 | `#5A6B82` | Captions on light (≥13px only) |
| on-dark | `#FFFFFF` | Headings on dark |
| on-dark-2 | `#B4C2D6` | Body on dark |
| on-dark-3 | `#8193AD` | Captions on dark |
| line-dark | `rgb(255 255 255 / 0.14)` | Dividers on dark |
| whatsapp | `#25D366` | WhatsApp floating button only |

### Type (Geist, via the `geist` npm package)

| Role | Size | Weight / line-height / tracking |
|---|---|---|
| Display (home H1) | `clamp(44px, 6.2vw, 96px)` | 400 / 1.0 / -0.045em |
| Page H1 (inner pages) | `clamp(40px, 5.2vw, 76px)` | 400 / 1.02 / -0.04em |
| H2 | `clamp(32px, 3.9vw, 54px)` | 400 / 1.06 / -0.035em |
| H2 small (split layouts) | `clamp(30px, 3.4vw, 48px)` | 400 / 1.08 / -0.035em |
| H3 card | 22px | 400 / 1.2 / -0.02em |
| H3 small (steps) | 18px | 500 / 1.3 / -0.01em |
| Body | 16px | 400 / 1.6 |
| Body small | 14.5–15.5px | 400 / 1.6 |
| Label | 13px | 500 |
| Tag | 11.5px | 500, uppercase, +0.06em |
| Stat numeral | `clamp(44px, 4.6vw, 68px)` | 300 / 1 / -0.04em |

### Layout

- Page background: mist.
- **Panels** (dark hero, dark services block, contact, footer): inset `12px` from the viewport on each side (`8px` below 680px), radius `24px` (`20px` below 680px), `overflow: hidden`.
- Container: `max-width: 1280px`, horizontal padding `clamp(20px, 4vw, 56px)`.
- Grid: 12 columns, `gap: 24px`.
- Section vertical padding: `clamp(80px, 10vw, 140px)`.
- Section head: heading block spans columns 1–7, aside paragraph spans columns 9–12, bottom-aligned; margin-bottom `clamp(40px, 5vw, 64px)`.
- Image radius inside sections: 16px (showcase, about, approach), 4px (service cards).
- Buttons: height 48px, fully rounded, 15px/500.

## 4. Components

| Component | Spec |
|---|---|
| `Label` | 14px node glyph (circle outline + filled centre dot) + text. cyan-deep glyph on light, cyan on dark. |
| `Tag` | 6px dot + uppercase 11.5px text. |
| `Button` | Variants: `green` (Book a call only), `ink` (navy, white text, cyan dot at the end), `white` (white, navy text, cyan-deep dot), `glass` (on dark: white 8% fill, white 18% border, blur). Renders `<Link>`, `<a>` or `<button>`. |
| `IconButton` | 48px round, same variants. |
| `Panel` | Rounded inset container; `tone="dark"` or `"light"`. |
| `SiteNav` | Lives inside every hero panel. Desktop: menu button + links pill / centred logo / phone pill + green "Book a call". Tablet and mobile: menu button, logo, "Book". Opens `MobileMenu` (full-screen navy sheet). |
| `StickyNav` | Compact navy bar that appears after the hero scrolls out of view: logo left, links centre, green "Book a call" right. |
| `HomeHero` | Full dark panel, art background with left and bottom darkening, nav, label + H1 (cols 1–8), paragraph + buttons (cols 9–12), stats row. |
| `PageHero` | Same panel, shorter: nav, breadcrumb, label + H1 (cols 1–8), intro (cols 9–12). |
| `SectionHead` | Label + H2 left, aside right. |
| `StatRow` | 4 stats, thin dividers, numeral + optional `^` + dash + caption. |
| `SystemCard` | Skincare card: 4:3.6 image with glass pill, tag, title, description, "Learn more →". |
| `ProductShowcase` | Vale slider: full-width art, white card (meta row, title, text, ink button, counter + arrows), product visual on the right (phone UI or translator UI). |
| `StepGrid` | 2×2 grid with thin dividers: number, title, text, duration. |
| `IntegrationRail` | Full-width white rail, first cell caption, then one cell per tool with vertical dividers. |
| `ContactSplit` | Image left with two glass contact cards, form right on white. |
| `SiteFooter` | Navy panel: logo + blurb + socials (cols 1–4), three link columns (cols 7–12), giant "NeuroGrowth" wordmark (SVG text fitted to width), bottom bar. |
| `WhatsAppButton` | Fixed 52px circle bottom-right, WhatsApp green. Hidden on `/contact`. |

## 5. Pages

| Route | Status | Sections |
|---|---|---|
| `/` | Rebuild | HomeHero + stats · About (duotone founder, story, team row) · Systems (dark panel, 4 SystemCards) · Products (showcase slider) · Approach (image + StepGrid) + IntegrationRail · ContactSplit |
| `/services` | Rebuild | PageHero · 4 system sections (each: art image, description, list of its services with deliverables) · Approach · FAQ · CTA panel |
| `/products` | Live (replaces `/solutions`) | PageHero · ProductShowcase · two product rows (both Live) · CTA |
| `/products/smartchama` | Live | PageHero · problem · features · how it works · phone UI · integrations · CTA |
| `/products/gikuyu-translator` | Live | Same structure with translator UI |
| `/about` | Rebuild | PageHero · story · founder · team · principles · why Nairobi · CTA |
| `/pricing` | Rebuild | PageHero · 3 plans · included · FAQ · CTA |
| `/insights` | Replaces `/resources` | PageHero · article list (real articles only) |
| `/insights/[slug]` | Moved | Article layout |
| `/contact` | Rebuild | PageHero · ContactSplit · what happens next |
| `/privacy` | **New** | Privacy policy (the contact form collects personal data; Kenya Data Protection Act, 2019) |
| `/terms` | **New** | Website terms of use |
| `not-found` | **New** | Branded 404 |

Redirects (308): `/home` → `/`, `/solutions` → `/products`, `/resources` → `/insights`, `/resources/:slug` → `/insights/:slug`.

Nav: Services · Products · About · Pricing · Insights, plus phone pill and "Book a call". Footer adds Contact, Privacy, Terms.

The 4 systems (they contain all 10 existing services):
1. **AI Strategy** — AI Strategy & Consulting.
2. **Growth Systems** — Marketing Automation, Lead Generation Systems, AI Content Generation, Digital Advertising Optimization.
3. **Customer Intelligence** — AI Chatbots & Support Agents, CRM Automation, Customer Personalization.
4. **Data & Prediction** — Predictive Analytics, Marketing Analytics Dashboards.

## 6. Imagery

Generated by `scripts/generate-art.py` (deterministic):
`public/images/art/hero.webp`, `system-strategy.webp`, `system-growth.webp`, `system-customer.webp`, `system-data.webp`, `products.webp`, `approach.webp`, `contact.webp`, `public/images/team/shilla-duotone.webp`, `public/brand/neurogrowth-logo.png|webp`.
When the client supplies real photos, run them through the same duotone treatment so they match.

Product images (imported by `scripts/import-product-assets.py`):
- `public/images/products/smartchama/*.webp`: marketing images from github.com/chillyreward/SmartChama.
- `public/images/products/gikuyu-translator/*.webp`: screenshots captured from github.com/chillyreward/New-translator running locally.
Team duotones: `public/images/team/<slug>-duotone.webp`, generated from `public/team/<slug>.(jpg|png|webp)`.

## 7. Content rules

- All copy lives in `src/content/*.ts`, never hard-coded in JSX.
- Numbers, testimonials and case studies only render when marked `verified: true` / `permission: true`. Unconfirmed items stay in code with `// TODO(client)`.
- Remove template claims: "$2B+ revenue influenced", "300% avg ROI", "10x faster growth", "Trusted by Shopify/OpenAI…", the initials avatar stack.
- Icons: `lucide-react` only. No emojis anywhere in the UI.
- Voice: plain, specific, second person. No repeated "we're not an agency".

## 8. Technical guardrails

- Next.js **16.2** App Router (Turbopack), React 19, TypeScript, Tailwind CSS **v4** (CSS-first `@theme` in `src/app/globals.css`; there is no `tailwind.config`). Read `node_modules/next/dist/docs/` before Next-specific code (AGENTS.md requires it).
- In Next 16, page `params` and `searchParams` are Promises: `await` them.
- Server Components by default. `'use client'` only where state, effects or event handlers are needed. Pages stay server components so `metadata` exports work.
- Read search params in the server page and pass them down as props. Do not use `useSearchParams` (it would need a Suspense boundary).
- No inline `style={{}}` except CSS custom properties. No JS hover handlers. No injected `<style>` tags.
- `next/image` for every image. No `three`, no WebGL, no animation libraries.
- File names: lowercase-kebab-case, no spaces. Imports must match on-disk casing exactly. Case-only renames go through a temporary name (`git mv a.tsx a-tmp.tsx && git mv a-tmp.tsx A.tsx`). Keep the repo **outside OneDrive**.
- Accessibility: visible focus ring, skip link, one `h1` per page, touch targets ≥ 44px, `prefers-reduced-motion` respected.
- Performance targets (Lighthouse mobile): Performance ≥ 90, Accessibility ≥ 95, SEO 100.

## 9. Client decisions (resolved 2026-09-24)

| # | Topic | Decision |
|---|---|---|
| 1 | Metrics | No new figures supplied. Only undeniable facts render (products live, number of services, delivery window, 24/7 automation). The old template figures ($2B+, 300%, 10x, 50+) stay out unless the client confirms them later. |
| 2 | Testimonials | Client confirmed: reuse the three testimonials from the current site (Sarah L., James M., Aisha R.) as published. |
| 3 | Product status | SmartChama: **Live** (in production, active). Gikuyu AI Translator: **Live** (in production). |
| 4 | Currency | **KSh is the primary currency.** USD is not shown. Starter KSh 325,000/month, Growth KSh 840,000/month, Enterprise custom (confirmed). |
| 5 | Team photos | Shilla and Lenny Kidavi (correct spelling) have photos (duotone treatment). Eric and Racheal show initials monograms until photos arrive. |
| 6 | X / Twitter | The current site has no real handle (`href="#"`), so X is removed. Socials: LinkedIn and Instagram only. |
| 7 | Search Console | The current site only has a placeholder code, so the `verification` meta is removed. Verify the domain through DNS in Search Console instead (no code change needed). |
| 8 | Data controller | Registered company: **NeuroGrowth**. Address as on the site: **Nairobi, Kenya**. Contact: info@neurogrowthtech.com. |
