# Redesign Progress

- [x] 00 — Planning and Redesign Brief
- [x] 01 — Foundation: design tokens, font, images, UI building blocks
- [x] 01A — Client decisions, content layer and real product images (01A done — content layer + real product assets)
- [x] 02 — Site shell: navigation, heroes, footer, WhatsApp button, routes, redirects
- [x] 03 — The new homepage & reusable blocks (Hero, About, Systems, Showcase, Approach, Testimonials, FAQ, ContactSplit)
- [x] 04 — Services page redesign (Systems explorer, process band, FAQ block, CTA band)
- [x] 05 — Products pages (Overview, SmartChama, Gikuyu Translator)
- [x] 06 — About page redesign (About page rebuilt, team cards, founder figure, proof section, JSON-LD)
- [x] 07 — Pricing page redesign (Plans in KSh, PlanCard, NumberedList, billing band, JSON-LD OfferCatalog)
- [x] 08 — Insights & research article layout (Insights index, data-driven [slug] route, TOC, ShareRow, reading time, sitemap)
- [ ] 09 — Contact page redesign & forms
- [ ] 10 — Final polish, SEO verification, legal pages

## Notes

### Adding a new article later
> To publish an article: create `src/content/insights/<slug>.ts` exporting an `Article`, add it to the `articles` array in `src/content/insights/index.ts`, and pick a cover from `public/images/art/`. It appears on `/insights`, gets its own page, and is added to the sitemap automatically.
