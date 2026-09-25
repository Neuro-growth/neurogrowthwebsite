import * as React from "react";
import { SectionHead } from "@/components/ui/section-head";
import { Icon } from "@/components/ui/icon";

export interface ProductFeature {
  icon: string;
  title: string;
  body: string;
}

export interface ProductFeaturesProps {
  summary: string;
  features: ProductFeature[];
}

export function ProductFeatures({ summary, features }: ProductFeaturesProps) {
  return (
    <section className="bg-white section-y">
      <div className="container-site">
        <SectionHead
          eyebrow="Features"
          title="What it does."
          aside={summary}
        />

        <div className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="border-b border-line p-7 sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(2n)]:border-line lg:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:border-line"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mist">
                <Icon name={feature.icon} className="text-cyan-deep" size={20} />
              </div>
              <h3 className="t-h4 mt-5">{feature.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
