import * as React from "react";
import { Eyebrow } from "@/components/ui/eyebrow";

export interface SampleItem {
  label: string;
  source: string;
  target: string;
}

export interface ProductSampleProps {
  samples?: SampleItem[];
}

export function ProductSample({ samples }: ProductSampleProps) {
  if (!samples || samples.length === 0) return null;

  return (
    <section className="section-y container-site">
      <div className="grid grid-cols-12 gap-6">
        {/* Left col-span-12 lg:col-span-5 */}
        <div className="col-span-12 lg:col-span-5">
          <Eyebrow>Real output</Eyebrow>
          <h2 className="t-h2-sm mt-5">Straight from the app&apos;s phrasebook.</h2>
          <p className="mt-4 text-ink-2 leading-relaxed">
            Gikuyu uses diacritics that most keyboards and translators get wrong.
            These are the exact strings from the product.
          </p>
        </div>

        {/* Right col-span-12 lg:col-start-7 lg:col-span-6 */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-6 grid gap-3">
          {samples.map((sample, idx) => (
            <div key={idx} className="rounded-media bg-white p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-ink-3">
                English
              </span>
              <p className="mt-1 text-[17px] text-ink leading-snug">
                {sample.source}
              </p>
              <div className="my-4 border-t border-line" />
              <span className="text-xs font-medium uppercase tracking-wider text-ink-3">
                Gikuyu
              </span>
              <p
                lang="ki"
                className="mt-1 text-[22px] tracking-[-0.01em] text-ink leading-snug"
              >
                {sample.target}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
