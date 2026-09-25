import * as React from "react";
import { SectionHead } from "@/components/ui/section-head";
import { aboutPage } from "@/content/about-page";
import { companyValues } from "@/content/values";

export function PrinciplesSection() {
  return (
    <section className="section-y container-site">
      <SectionHead
        eyebrow={aboutPage.principles.eyebrow}
        title={aboutPage.principles.title}
      />

      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {companyValues.map((value) => (
          <div key={value.num} className="border-t border-line pt-6">
            <span className="text-[13px] font-mono tabular-nums text-cyan-deep">
              {value.num}
            </span>
            <h3 className="t-h4 mt-3">{value.title}</h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2 max-w-[40ch]">
              {value.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
