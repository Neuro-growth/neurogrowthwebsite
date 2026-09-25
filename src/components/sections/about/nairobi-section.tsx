import * as React from "react";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArtImage } from "@/components/ui/art-image";
import { aboutPage } from "@/content/about-page";
import { cn } from "@/lib/utils";

export function NairobiSection() {
  return (
    <Panel tone="dark" className="relative mt-3 overflow-hidden">
      {/* Background Art */}
      <div className="absolute inset-0 -z-10">
        <ArtImage
          src="/images/art/hero.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Scrim */}
      <div className="hero-scrim absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-site py-[clamp(72px,9vw,128px)]">
        <Eyebrow tone="dark">{aboutPage.nairobi.eyebrow}</Eyebrow>

        <p className="mt-6 max-w-[22ch] text-[clamp(30px,4.2vw,58px)] leading-[1.08] tracking-[-0.035em] text-white">
          {aboutPage.nairobi.statement.prefix}
          <span className="text-cyan">{aboutPage.nairobi.statement.emphasis}</span>
        </p>

        <div className="mt-[clamp(48px,6vw,80px)] grid border-t border-line-dark sm:grid-cols-3">
          {aboutPage.nairobi.facts.map((fact, idx) => (
            <div
              key={idx}
              className={cn(
                "pt-6 pb-2 pr-6",
                idx > 0 && "sm:border-l sm:border-line-dark sm:pl-6"
              )}
            >
              <h3 className="text-[15px] font-medium text-white">{fact.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-on-dark-2">
                {fact.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
