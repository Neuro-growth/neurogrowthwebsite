import * as React from "react";
import { SectionHead } from "@/components/ui/section-head";
import { aboutPage } from "@/content/about-page";
import { companyValues } from "@/content/values";

import { NumberedList } from "@/components/blocks/numbered-list";

export function PrinciplesSection() {
  return (
    <section className="section-y container-site">
      <SectionHead
        eyebrow={aboutPage.principles.eyebrow}
        title={aboutPage.principles.title}
      />

      <NumberedList
        items={companyValues}
        columnsClassName="sm:grid-cols-2 lg:grid-cols-3"
      />
    </section>
  );
}
