import type { Metadata } from "next";
import { site, aboutPage, team, confirmedTestimonials } from "@/content";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { SectionHead } from "@/components/ui/section-head";
import { TestimonialRail } from "@/components/blocks/testimonial-rail";
import { CtaBand } from "@/components/blocks/cta-band";
import {
  StorySection,
  TeamSection,
  PrinciplesSection,
  NairobiSection,
  ProofSection,
} from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "NeuroGrowth Tech is an AI engineering studio in Nairobi building automation, assistants and prediction systems for African businesses. Meet the team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const permittedTestimonials = confirmedTestimonials.filter((t) => t.permission);

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.address.locality,
        addressCountry: site.address.country,
      },
      founder: {
        "@type": "Person",
        name: "Shilla Swanapole",
        jobTitle: "Founder & CEO",
      },
      employee: team.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        intro={aboutPage.hero.intro}
        actions={
          <>
            <Button
              variant="white"
              dot
              href={aboutPage.hero.primaryCta.href}
            >
              {aboutPage.hero.primaryCta.label}
            </Button>
            <Button
              variant="glass"
              href={aboutPage.hero.secondaryCta.href}
            >
              {aboutPage.hero.secondaryCta.label}
            </Button>
          </>
        }
      />

      {/* 2. Story Section */}
      <StorySection />

      {/* 3. Team Section */}
      <TeamSection />

      {/* 4. Principles Section */}
      <PrinciplesSection />

      {/* 5. Why Nairobi Section */}
      <NairobiSection />

      {/* 6. Proof: In-House Products Section */}
      <ProofSection />

      {/* 7. Testimonials */}
      {permittedTestimonials.length > 0 && (
        <section className="section-y">
          <div className="container-site">
            <SectionHead
              eyebrow={aboutPage.testimonials.eyebrow}
              title={aboutPage.testimonials.title}
            />
          </div>
          <TestimonialRail items={permittedTestimonials} />
        </section>
      )}

      {/* 8. CTA Band */}
      <div className="section-y pt-0 pb-3">
        <CtaBand
          eyebrow="Get started"
          title={aboutPage.cta.title}
          intro={aboutPage.cta.intro}
          primary={aboutPage.cta.primary}
          showWhatsApp
        />
      </div>
    </>
  );
}
