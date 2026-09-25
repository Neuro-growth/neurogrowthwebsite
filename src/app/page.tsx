import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/home-hero";
import { AboutSection } from "@/components/sections/home/about-section";
import { SystemsSection } from "@/components/sections/home/systems-section";
import { ProductsSection } from "@/components/sections/home/products-section";
import { ApproachSection } from "@/components/sections/home/approach-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import { ContactSplit } from "@/components/blocks/contact-split";
import { home } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: "NeuroGrowth Tech — AI Systems for African Businesses" },
  description:
    "NeuroGrowth Tech is a Nairobi AI engineering studio building automation, chatbots and prediction systems for African businesses, wired into M-Pesa and WhatsApp.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Home Hero */}
      <HomeHero />

      {/* 2. About (id="about") */}
      <AboutSection />

      {/* 3. Systems, dark panel (id="services") */}
      <SystemsSection />

      {/* 4. Products showcase (id="products") */}
      <ProductsSection />

      {/* 5. Approach + integration rail (id="approach") */}
      <ApproachSection />

      {/* 6. Testimonials (id="testimonials") */}
      <TestimonialsSection />

      {/* 7. FAQ (id="faq") */}
      <FaqSection />

      {/* 8. Contact split (id="contact") */}
      <section id="contact" className="scroll-mt-24">
        <ContactSplit
          eyebrow={home.contact.eyebrow}
          title={home.contact.title}
          intro={home.contact.intro}
        />
      </section>
    </>
  );
}
