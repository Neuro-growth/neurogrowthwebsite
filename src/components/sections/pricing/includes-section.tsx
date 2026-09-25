import * as React from "react";
import { SectionHead } from "@/components/ui/section-head";
import { NumberedList } from "@/components/blocks/numbered-list";
import { pricingPage } from "@/content/pricing-page";

export function IncludesSection() {
  return (
    <section className="section-y container-site">
      <SectionHead
        eyebrow={pricingPage.includes.eyebrow}
        title={pricingPage.includes.title}
      />

      <NumberedList
        items={pricingPage.includes.items}
        columnsClassName="md:grid-cols-3"
      />
    </section>
  );
}
