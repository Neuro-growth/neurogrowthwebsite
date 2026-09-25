import * as React from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FaqList } from "./faq-list";
import type { Faq } from "@/content/types";
import { cn } from "@/lib/utils";

export interface FaqBlockProps {
  id?: string;
  eyebrow: string;
  title: string;
  aside?: React.ReactNode;
  items: Faq[];
  background?: "white" | "mist";
  className?: string;
}

export function FaqBlock({
  id,
  eyebrow,
  title,
  aside,
  items,
  background = "white",
  className,
}: FaqBlockProps) {
  if (!items || items.length === 0) {
    return null;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 w-full section-y",
        background === "white" ? "bg-white" : "bg-mist",
        className
      )}
    >
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-site grid grid-cols-12 gap-6 items-start">
        {/* Left Sticky Column */}
        <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 self-start">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h2 className="t-h2-sm font-normal text-ink mt-5">{title}</h2>
          {aside && <div className="mt-4">{aside}</div>}
        </div>

        {/* Right Accordion Column */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-6">
          <FaqList items={items} />
        </div>
      </div>
    </section>
  );
}
