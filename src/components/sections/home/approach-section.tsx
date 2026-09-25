import * as React from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArtImage } from "@/components/ui/art-image";
import { StepGrid } from "@/components/blocks/step-grid";
import { IntegrationRail } from "@/components/blocks/integration-rail";
import { process } from "@/content/process";
import { integrations } from "@/content/integrations";
import { home } from "@/content/home";

export function ApproachSection() {
  return (
    <section id="approach" className="scroll-mt-24">
      {/* Top Half: Approach Grid inside container-site */}
      <div className="container-site grid grid-cols-12 gap-6 items-start pt-0 pb-[clamp(64px,8vw,104px)]">
        {/* Left Visual */}
        <div className="col-span-12 lg:col-span-5 relative aspect-[4/4.4] max-lg:aspect-video w-full overflow-hidden rounded-media bg-navy-2">
          <ArtImage
            src="/images/art/approach.webp"
            alt=""
            fill
            rounded="media"
            sizes="(min-width:1024px) 40vw, 100vw"
          />
        </div>

        {/* Right Copy + 2x2 Steps */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-6">
          <Eyebrow tone="light">{home.approach.eyebrow}</Eyebrow>
          <h2 className="t-h2-sm font-normal text-ink mt-5 mb-10">
            {home.approach.title}
          </h2>
          <StepGrid steps={process} tone="light" />
        </div>
      </div>

      {/* Bottom Half: Full-width Integration Rail outside container-site */}
      <IntegrationRail items={integrations} />
    </section>
  );
}
