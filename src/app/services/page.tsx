import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { SystemsExplorer } from "@/components/sections/services/systems-explorer";
import { ProcessBand } from "@/components/sections/services/process-band";
import { IntegrationRail } from "@/components/blocks/integration-rail";
import { FaqBlock } from "@/components/blocks/faq-block";
import { CtaBand } from "@/components/blocks/cta-band";
import { systems } from "@/content/systems";
import { integrations } from "@/content/integrations";
import { servicesFaqs } from "@/content/faqs";
import { servicesPage } from "@/content/services-page";
import { site, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "AI Services",
  description:
    "AI strategy, marketing automation, chatbots, CRM automation and predictive analytics for African businesses, grouped into four systems by NeuroGrowth Tech.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const allServices = systems.flatMap((s) => s.services);

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NeuroGrowth Tech AI Services",
    description:
      "Ten AI services grouped across four intelligent business systems.",
    itemListElement: allServices.map((service, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        areaServed: "Africa",
      },
    })),
  };

  const heroActions = (
    <>
      <Button variant="white" dot href="/contact">
        {servicesPage.hero.ctaPrimary}
      </Button>
      <Button variant="glass" href="/pricing">
        {servicesPage.hero.ctaSecondary}
      </Button>
    </>
  );

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
      {/* ItemList / Service JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />

      {/* 1. Page Hero */}
      <PageHero
        eyebrow={servicesPage.hero.eyebrow}
        title={servicesPage.hero.title}
        intro={servicesPage.hero.intro}
        actions={heroActions}
      />

      {/* 2. Systems Explorer (Sticky sidebar on desktop, sticky pills on mobile) */}
      <SystemsExplorer />

      {/* 3. Process Band (Dark Panel) */}
      <ProcessBand />

      {/* 4. Integration Rail */}
      <IntegrationRail items={integrations} className="mt-3" />

      {/* 5. Services FAQ */}
      <FaqBlock
        id="faq"
        eyebrow={servicesPage.faq.eyebrow}
        title={servicesPage.faq.title}
        aside={faqAside}
        items={servicesFaqs}
        background="mist"
      />

      {/* 6. CTA Band */}
      <CtaBand
        title={servicesPage.ctaBand.title}
        intro={servicesPage.ctaBand.intro}
        primary={servicesPage.ctaBand.primary}
        className="mb-0"
      />
    </>
  );
}
