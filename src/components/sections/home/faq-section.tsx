import * as React from "react";
import { FaqBlock } from "@/components/blocks/faq-block";
import { homeFaqs } from "@/content/faqs";
import { home } from "@/content/home";
import { waLink } from "@/content/site";

export function FaqSection() {
  const asideContent = (
    <p className="text-[15.5px] text-ink-2 leading-relaxed">
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
    <FaqBlock
      id="faq"
      eyebrow={home.faq.eyebrow}
      title={home.faq.title}
      aside={asideContent}
      items={homeFaqs}
      background="white"
    />
  );
}
