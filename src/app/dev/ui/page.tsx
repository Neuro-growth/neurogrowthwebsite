import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { Eyebrow, Label } from "@/components/ui/eyebrow";
import { Tag } from "@/components/ui/tag";
import { NodeGlyph } from "@/components/ui/node-glyph";
import { Button, IconButton } from "@/components/ui/button";
import { SectionHead } from "@/components/ui/section-head";
import { StatRow } from "@/components/ui/stat-row";
import { ArtImage } from "@/components/ui/art-image";
import { Logo } from "@/components/ui/logo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Image from "next/image";
import { ArrowRight, Phone, Sparkles, Menu } from "lucide-react";
import {
  systems,
  products,
  teamMembers,
  pricingPlans,
  formatKsh,
  pricingNote,
  confirmedTestimonials,
  companyValues,
  homeFaqs,
  integrations,
  heroStats,
} from "@/content";

export const metadata = {
  title: "Design System & UI Preview — NeuroGrowth Tech",
};

export default function DevUiPreviewPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const sampleStats = [
    { value: "48", suffix: "h", caret: true, label: "First operational prototype" },
    { value: "10+", caret: false, label: "Custom AI systems deployed" },
    { value: "6.2", suffix: "x", caret: true, label: "Average client workflow acceleration" },
    { value: "99.8", suffix: "%", caret: false, label: "System reliability and uptime" },
  ];

  return (
    <div className="min-h-screen bg-mist py-10 text-ink">
      <Container className="space-y-16">
        {/* HEADER */}
        <div className="border-b border-line pb-8">
          <Eyebrow tone="light">Design System Foundation</Eyebrow>
          <h1 className="t-h1 mt-3 font-normal text-ink">UI Building Blocks & Tokens</h1>
          <p className="mt-2 text-ink-2 max-w-2xl text-base">
            Living style guide for the NeuroGrowth Tech redesign (&quot;Signal Window&quot; v3).
            Includes tokens, type scale, brand art assets, and foundational components.
          </p>
        </div>

        {/* 1. BRAND LOGO & GLYPHS */}
        <section className="space-y-6">
          <h2 className="t-h3 font-medium text-ink">1. Brand Logo & Glyphs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-[16px] border border-line flex flex-col gap-4">
              <span className="text-xs uppercase tracking-wider text-ink-3 font-medium">Nav Size (46px height)</span>
              <div className="p-4 bg-navy rounded-xl inline-flex items-center">
                <Logo size="nav" href={null} priority />
              </div>
            </div>

            <div className="p-6 bg-white rounded-[16px] border border-line flex flex-col gap-4">
              <span className="text-xs uppercase tracking-wider text-ink-3 font-medium">Footer Size (52px height)</span>
              <div className="p-4 bg-navy rounded-xl inline-flex items-center">
                <Logo size="footer" href={null} priority />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 p-6 bg-white rounded-[16px] border border-line">
            <div className="flex items-center gap-2">
              <NodeGlyph tone="light" />
              <span className="text-xs text-ink-2">NodeGlyph (light tone: cyan-deep)</span>
            </div>
            <div className="flex items-center gap-2 bg-navy px-3 py-1.5 rounded-lg text-white">
              <NodeGlyph tone="dark" />
              <span className="text-xs text-on-dark-2">NodeGlyph (dark tone: cyan)</span>
            </div>
            <div className="flex items-center gap-2">
              <WhatsAppIcon className="text-whatsapp" size={24} />
              <span className="text-xs text-ink-2">WhatsAppIcon (#25D366)</span>
            </div>
          </div>
        </section>

        {/* 2. TYPOGRAPHY SCALE */}
        <section className="space-y-6">
          <h2 className="t-h3 font-medium text-ink">2. Typography Scale (Geist Sans, Weight 400)</h2>
          <div className="p-8 bg-white rounded-[24px] border border-line space-y-8 divide-y divide-line">
            <div>
              <span className="text-xs font-mono text-ink-3">.t-display (Display Home H1) — clamp(44px, 6.2vw, 96px)</span>
              <div className="t-display text-ink mt-1">Accelerating Growth Through Intelligence.</div>
            </div>
            <div className="pt-6">
              <span className="text-xs font-mono text-ink-3">.t-h1 (Page H1) — clamp(40px, 5.2vw, 76px)</span>
              <div className="t-h1 text-ink mt-1">Enterprise AI Engineering Studio.</div>
            </div>
            <div className="pt-6">
              <span className="text-xs font-mono text-ink-3">.t-h2 (Section H2) — clamp(32px, 3.9vw, 54px)</span>
              <div className="t-h2 text-ink mt-1">Systems Built for Compounding Scale.</div>
            </div>
            <div className="pt-6">
              <span className="text-xs font-mono text-ink-3">.t-h2-sm (H2 Split Layouts) — clamp(30px, 3.4vw, 48px)</span>
              <div className="t-h2-sm text-ink mt-1">Direct Engineering Engagement.</div>
            </div>
            <div className="pt-6">
              <span className="text-xs font-mono text-ink-3">.t-h3 (Card H3) — 22px / 400</span>
              <div className="t-h3 text-ink mt-1">Autonomous Customer Support Operations</div>
            </div>
            <div className="pt-6">
              <span className="text-xs font-mono text-ink-3">.t-h4 (Step H4) — 18px / 500</span>
              <div className="t-h4 text-ink mt-1">01. Discovery & Data Architecture Roadmap</div>
            </div>
            <div className="pt-6">
              <span className="text-xs font-mono text-ink-3">.t-num (Stat numeral) — clamp(44px, 4.6vw, 68px) / 300</span>
              <div className="t-num text-ink mt-1">48h^</div>
            </div>
            <div className="pt-6">
              <span className="text-xs font-mono text-ink-3">.t-tag (Tag style) — 11.5px / 500 uppercase</span>
              <div className="t-tag text-ink-2 mt-1">GROWTH SYSTEMS</div>
            </div>
          </div>
        </section>

        {/* 3. LABELS, TAGS & BUTTONS */}
        <section className="space-y-6">
          <h2 className="t-h3 font-medium text-ink">3. Labels, Tags & Buttons</h2>
          <div className="p-8 bg-white rounded-[24px] border border-line space-y-6">
            <div className="flex flex-wrap items-center gap-6">
              <Eyebrow tone="light">AI STRATEGY</Eyebrow>
              <Label tone="light">CUSTOMER INTELLIGENCE</Label>
              <Tag tone="light">VERIFIED CASE STUDY</Tag>
              <Tag tone="light">PILOT STAGE</Tag>
            </div>

            <div className="border-t border-line pt-6 flex flex-wrap items-center gap-4">
              <Button variant="green">Book a call</Button>
              <Button variant="ink">
                Explore systems
              </Button>
              <Button variant="white">
                Learn more
              </Button>
              <Button variant="outline">
                Documentation
              </Button>
              <IconButton variant="ink" aria-label="Next step">
                <ArrowRight className="w-5 h-5" />
              </IconButton>
              <IconButton variant="outline" aria-label="Call studio">
                <Phone className="w-4 h-4" />
              </IconButton>
            </div>

            <div className="bg-navy p-6 rounded-[20px] text-white space-y-4">
              <span className="text-xs uppercase tracking-wider text-on-dark-3 font-medium">On Dark Surface</span>
              <div className="flex flex-wrap items-center gap-4">
                <Eyebrow tone="dark">DATA & PREDICTION</Eyebrow>
                <Tag tone="dark">ACTIVE PIPELINE</Tag>
                <Button variant="glass">Glass button</Button>
                <Button variant="green">Book a call</Button>
                <Button variant="white">White button</Button>
                <IconButton variant="glass" aria-label="Features">
                  <Sparkles className="w-4 h-4 text-cyan" />
                </IconButton>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION HEAD COMPONENT */}
        <section className="space-y-6">
          <h2 className="t-h3 font-medium text-ink">4. SectionHead Component</h2>
          <div className="p-8 bg-white rounded-[24px] border border-line">
            <SectionHead
              eyebrow="CAPABILITIES"
              title="Four modular systems engineered for revenue, retention, and decision precision."
              description="Each system integrates with your existing databases, CRM, and communication channels without requiring legacy rewrites."
              tone="light"
            />
          </div>
        </section>

        {/* 5. INSET PANELS & STAT ROW */}
        <section className="space-y-6">
          <h2 className="t-h3 font-medium text-ink">5. Inset Panels (Light, Dark) & StatRow</h2>
          
          {/* DARK PANEL */}
          <Panel tone="dark" className="p-8 sm:p-12 lg:p-16">
            <SectionHead
              eyebrow="PROVEN PERFORMANCE"
              title="Predictable impact backed by deployed production systems."
              description="Real metrics from active African enterprise deployments across finance, commerce, and field logistics."
              tone="dark"
            />
            <StatRow stats={sampleStats} tone="dark" className="mt-8" />
          </Panel>

          {/* LIGHT PANEL */}
          <Panel tone="light" className="p-8 sm:p-12 border border-line">
            <SectionHead
              eyebrow="LIGHT PANEL METRICS"
              title="Transparent metrics displayed across light surface layouts."
              description="Same component adapted seamlessly with thin line dividers and ink tokens."
              tone="light"
            />
            <StatRow stats={sampleStats} tone="light" className="mt-8" />
          </Panel>
        </section>

        {/* 6. ART IMAGE SYSTEM */}
        <section className="space-y-6">
          <h2 className="t-h3 font-medium text-ink">6. Brand Art Imagery (11 Generated Assets)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-ink-3">hero.webp (rounded=&quot;card&quot; 16px + zoom)</span>
              <div className="aspect-[16/10]">
                <ArtImage
                  src="/images/art/hero.webp"
                  alt="NeuroGrowth Hero Art"
                  fill
                  rounded="card"
                  zoomOnHover
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-ink-3">system-growth.webp (rounded=&quot;card&quot;)</span>
              <div className="aspect-[16/10]">
                <ArtImage
                  src="/images/art/system-growth.webp"
                  alt="Growth Systems Art"
                  fill
                  rounded="card"
                  zoomOnHover
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-ink-3">approach.webp (rounded=&quot;card&quot;)</span>
              <div className="aspect-[16/10]">
                <ArtImage
                  src="/images/art/approach.webp"
                  alt="Approach System Art"
                  fill
                  rounded="card"
                  zoomOnHover
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-ink-3">contact.webp (rounded=&quot;media&quot; 4px)</span>
              <div className="aspect-[16/10]">
                <ArtImage
                  src="/images/art/contact.webp"
                  alt="Contact System Art"
                  fill
                  rounded="media"
                  zoomOnHover
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-ink-3">products.webp (rounded=&quot;card&quot;)</span>
              <div className="aspect-[16/10]">
                <ArtImage
                  src="/images/art/products.webp"
                  alt="Products Art"
                  fill
                  rounded="card"
                  zoomOnHover
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-ink-3">shilla-duotone.webp (team duotone)</span>
              <div className="aspect-[16/10]">
                <ArtImage
                  src="/images/team/shilla-duotone.webp"
                  alt="Founder duotone"
                  fill
                  rounded="card"
                  zoomOnHover
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. SHADCN ACCORDION & SHEET */}
        <section className="space-y-6">
          <h2 className="t-h3 font-medium text-ink">7. shadcn UI Components (Accordion & Sheet)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-white rounded-[24px] border border-line">
            {/* ACCORDION */}
            <div>
              <h3 className="t-h4 text-ink mb-4">Accordion (Interactive FAQ)</h3>
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How quickly can our team deploy an AI system?</AccordionTrigger>
                  <AccordionContent>
                    Our initial sprint produces a functional prototype integrated with your data within 48 to 72 hours. Full operational rollouts typically take 2 to 4 weeks depending on security reviews.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you support local African languages?</AccordionTrigger>
                  <AccordionContent>
                    Yes. We built and maintain custom fine-tuned models for Gikuyu, Swahili, and Sheng, enabling natural conversational interactions across WhatsApp and digital channels.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can systems integrate with our current ERP and CRM?</AccordionTrigger>
                  <AccordionContent>
                    All systems are built API-first. We deploy webhook and REST connectors for Salesforce, HubSpot, SAP, M-Pesa, and custom internal SQL databases.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* SHEET */}
            <div>
              <h3 className="t-h4 text-ink mb-4">Sheet (Mobile Navigation / Drawer)</h3>
              <p className="text-sm text-ink-2 mb-4">
                The full-screen / slide-out navy navigation drawer used in the mobile header.
              </p>
              <Sheet>
                <SheetTrigger
                  render={
                    <Button variant="ink">
                      <Menu className="w-4 h-4 mr-2" />
                      Open Preview Sheet
                    </Button>
                  }
                />
                <SheetContent side="right" className="bg-navy text-white border-line-dark">
                  <SheetHeader>
                    <SheetTitle className="text-white t-h3">Navigation</SheetTitle>
                    <SheetDescription className="text-on-dark-2">
                      NeuroGrowth Tech client portal & navigation drawer.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-8 space-y-4">
                    <div className="py-2 border-b border-line-dark text-lg font-light text-on-dark">
                      Services
                    </div>
                    <div className="py-2 border-b border-line-dark text-lg font-light text-on-dark">
                      Products
                    </div>
                    <div className="py-2 border-b border-line-dark text-lg font-light text-on-dark">
                      About
                    </div>
                    <div className="py-2 border-b border-line-dark text-lg font-light text-on-dark">
                      Pricing
                    </div>
                    <div className="py-2 border-b border-line-dark text-lg font-light text-on-dark">
                      Insights
                    </div>
                    <div className="pt-6">
                      <Button variant="green" className="w-full">
                        Book a call
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </section>

        {/* 8. CONTENT LAYER & PRODUCT ASSETS (Prompt 01A) */}
        <section className="space-y-6">
          <h2 className="t-h3 font-medium text-ink">8. Content Layer &amp; Product Assets (`src/content`)</h2>
          <div className="p-8 bg-white rounded-[24px] border border-line space-y-10">
            {/* Systems */}
            <div>
              <h3 className="t-h4 text-ink mb-4">Systems ({systems.length})</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {systems.map((sys) => (
                  <div key={sys.id} className="p-4 rounded-xl border border-line bg-mist space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-deep font-semibold">{sys.tag}</span>
                      <span className="text-xs bg-white px-2 py-0.5 rounded-full border border-line text-ink-3">
                        {sys.services.length} services
                      </span>
                    </div>
                    <div className="font-medium text-ink text-sm">{sys.name}</div>
                    <div className="relative w-full h-24 rounded-lg overflow-hidden border border-line bg-navy">
                      <Image
                        src={sys.image.src}
                        alt={sys.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <p className="text-xs text-ink-2 line-clamp-2">{sys.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="t-h4 text-ink mb-4">In-House Products ({products.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((p) => (
                  <div key={p.slug} className="p-6 rounded-2xl border border-line bg-mist space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-line relative bg-white shrink-0">
                          <Image
                            src={p.logo.src}
                            alt={p.logo.alt}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-ink">{p.name}</div>
                          <span className="text-xs text-ink-3">{p.category}</span>
                        </div>
                      </div>
                      <Tag tone="light">{p.status.toUpperCase()}</Tag>
                    </div>

                    <p className="text-xs text-ink-2">{p.tagline}</p>

                    <div className="relative w-full h-44 rounded-xl overflow-hidden border border-line bg-navy">
                      <Image
                        src={p.heroImage.src}
                        alt={p.heroImage.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-line text-xs text-ink-2">
                      <span className="bg-white px-2.5 py-1 rounded-md border border-line">
                        <strong>{p.gallery.length}</strong> gallery shots
                      </span>
                      <span className="bg-white px-2.5 py-1 rounded-md border border-line">
                        <strong>{p.features.length}</strong> features
                      </span>
                      {p.sampleContent && (
                        <span className="bg-white px-2.5 py-1 rounded-md border border-line">
                          <strong>{p.sampleContent.length}</strong> phrasebook pairs
                        </span>
                      )}
                    </div>

                    {/* Gallery Thumbnails */}
                    <div className="flex gap-2 overflow-x-auto py-1">
                      {p.gallery.slice(0, 4).map((img, i) => (
                        <div
                          key={i}
                          className="relative w-20 h-14 rounded-lg overflow-hidden border border-line shrink-0 bg-navy"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Members */}
            <div>
              <h3 className="t-h4 text-ink mb-4">Team ({teamMembers.length})</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {teamMembers.map((member) => (
                  <div key={member.slug} className="p-4 rounded-xl border border-line bg-mist text-center space-y-3">
                    <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-line bg-navy flex items-center justify-center">
                      {member.photo ? (
                        <Image
                          src={member.photo.src}
                          alt={member.photo.alt}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      ) : (
                        <span className="text-xl font-medium text-white">{member.initials}</span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-ink text-sm">{member.name}</div>
                      <div className="text-xs text-ink-3">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Plans */}
            <div>
              <h3 className="t-h4 text-ink mb-4">Pricing Plans ({pricingPlans.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`p-5 rounded-xl border ${
                      plan.featured ? "border-cyan bg-white shadow-sm" : "border-line bg-mist"
                    } space-y-2`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-ink text-sm">{plan.name}</span>
                      {plan.featured && <Tag tone="light">FEATURED</Tag>}
                    </div>
                    <div className="text-2xl font-light text-ink">
                      {formatKsh(plan.priceKsh)}
                      {plan.priceKsh && <span className="text-xs text-ink-3">/{plan.period}</span>}
                    </div>
                    <p className="text-xs text-ink-2">{plan.fit}</p>
                    <div className="text-xs text-ink-3 pt-2 border-t border-line">
                      {plan.features.length} features included
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-ink-3 mt-3 italic">{pricingNote}</p>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="t-h4 text-ink mb-4">Verified Testimonials ({confirmedTestimonials.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {confirmedTestimonials.map((t, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-line bg-mist space-y-2">
                    <p className="text-xs text-ink-2 italic line-clamp-3">&quot;{t.quote}&quot;</p>
                    <div className="pt-2 border-t border-line flex items-center justify-between text-xs">
                      <div>
                        <div className="font-medium text-ink">{t.name}</div>
                        <div className="text-ink-3">{t.role}</div>
                      </div>
                      <Tag tone="light">Verified</Tag>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Stats & Integrations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="t-h4 text-ink mb-4">Verified Stats ({heroStats.length})</h3>
                <div className="grid grid-cols-2 gap-3">
                  {heroStats.map((st, i) => (
                    <div key={i} className="p-3 rounded-lg border border-line bg-mist">
                      <div className="text-xl font-light text-ink">
                        {st.caret && <span className="text-cyan-deep mr-0.5">^</span>}
                        {st.value}
                      </div>
                      <div className="text-xs text-ink-3 mt-1">{st.caption}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="t-h4 text-ink mb-4">Supported Integrations ({integrations.length})</h3>
                <div className="flex flex-wrap gap-2">
                  {integrations.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg border border-line bg-mist text-xs font-medium text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Values */}
            <div>
              <h3 className="t-h4 text-ink mb-4">Company Values ({companyValues.length})</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {companyValues.map((v) => (
                  <div key={v.num} className="p-4 rounded-xl border border-line bg-mist space-y-1">
                    <span className="text-xs font-mono text-cyan-deep font-semibold">{v.num}</span>
                    <div className="text-sm font-medium text-ink">{v.title}</div>
                    <p className="text-xs text-ink-2 line-clamp-2">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Home FAQs */}
            <div>
              <h3 className="t-h4 text-ink mb-4">Home FAQs ({homeFaqs.length})</h3>
              <div className="space-y-2">
                {homeFaqs.slice(0, 3).map((faq, i) => (
                  <div key={i} className="p-3 rounded-lg border border-line bg-mist text-xs">
                    <span className="font-medium text-ink">Q: {faq.q}</span>
                    <p className="text-ink-2 mt-1">A: {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
