import * as React from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FaqList } from "./faq-list";
import { homeFaqs } from "@/content/faqs";
import { home } from "@/content/home";
import { waLink } from "@/content/site";

export function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-24 w-full bg-white section-y">
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-site grid grid-cols-12 gap-6 items-start">
        {/* Left Sticky Column */}
        <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 self-start">
          <Eyebrow tone="light">{home.faq.eyebrow}</Eyebrow>
          <h2 className="t-h2-sm font-normal text-ink mt-5">
            {home.faq.title}
          </h2>
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
        </div>

        {/* Right Accordion Column */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-6">
          <FaqList items={homeFaqs} />
        </div>
      </div>
    </section>
  );
}
