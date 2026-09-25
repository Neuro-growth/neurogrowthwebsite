import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { SectionHead } from "@/components/ui/section-head";
import { TestimonialRail } from "@/components/blocks/testimonial-rail";
import { FaqBlock } from "@/components/blocks/faq-block";
import { CtaBand } from "@/components/blocks/cta-band";
import {
  PlansSection,
  IncludesSection,
  BillingSection,
} from "@/components/sections/pricing";
import {
  site,
  plans,
  pricingPage,
  pricingFaqs,
  confirmedTestimonials,
  waLink,
} from "@/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Monthly AI system plans priced in Kenyan shillings: Starter, Growth and Enterprise. Strategy, build and ongoing optimisation included.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const permittedTestimonials = confirmedTestimonials.filter(
    (t) => t.permission
  );

  const pricedPlans = plans.filter(
    (p): p is typeof p & { priceKsh: number } => p.priceKsh !== null
  );

  const offerCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "NeuroGrowth Tech plans",
    itemListElement: pricedPlans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.priceKsh.toString(),
      priceCurrency: "KES",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.priceKsh.toString(),
        priceCurrency: "KES",
        unitText: "MONTH",
      },
      seller: {
        "@type": "Organization",
        name: site.name,
      },
    })),
  };

  const faqAside = (
    <p className="mt-4 text-[15.5px] text-ink-2 leading-relaxed">
      Something else?{" "}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-deep underline underline-offset-4 hover:text-navy transition-colors font-medium"
      >
        Message us on WhatsApp.
      </a>
    </p>
  );

  return (
    <>
      {/* 0. OfferCatalog JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />

      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[{ label: "Pricing" }]}
        eyebrow={pricingPage.hero.eyebrow}
        title={pricingPage.hero.title}
        intro={pricingPage.hero.intro}
        actions={
          <>
            <Button
              variant="white"
              dot
              href={pricingPage.hero.primaryCta.href}
            >
              {pricingPage.hero.primaryCta.label}
            </Button>
            <Button
              variant="glass"
              href={pricingPage.hero.secondaryCta.href}
            >
              {pricingPage.hero.secondaryCta.label}
            </Button>
          </>
        }
      />

      {/* 2. Plans (3 cards + note + "Not sure?" strip) */}
      <PlansSection />

      {/* 3. Every plan includes */}
      <IncludesSection />

      {/* 4. How billing works */}
      <BillingSection />

      {/* 5. Testimonials */}
      {permittedTestimonials.length > 0 && (
        <section className="section-y">
          <div className="container-site">
            <SectionHead
              eyebrow="What clients say"
              title="Worth it, in their words."
            />
          </div>
          <TestimonialRail items={permittedTestimonials} />
        </section>
      )}

      {/* 6. Pricing FAQ */}
      <FaqBlock
        id="faq"
        eyebrow="FAQ"
        title="Pricing questions."
        aside={faqAside}
        items={pricingFaqs}
        background="mist"
      />

      {/* 7. CTA Band */}
      <div className="section-y pt-0 pb-3">
        <CtaBand
          eyebrow="Get started"
          title={pricingPage.cta.title}
          intro={pricingPage.cta.intro}
          primary={pricingPage.cta.primary}
          showWhatsApp
        />
      </div>
    </>
  );
}
