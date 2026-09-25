import * as React from "react";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { StepGrid } from "@/components/blocks/step-grid";
import { process } from "@/content/process";
import { servicesPage } from "@/content/services-page";

export function ProcessBand() {
  return (
    <Panel tone="dark" className="mt-3">
      <div className="container-site grid grid-cols-12 gap-6 py-[clamp(64px,8vw,112px)] items-start">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-5 flex flex-col items-start">
          <Eyebrow tone="dark">{servicesPage.processBand.eyebrow}</Eyebrow>
          <h2 className="t-h2-sm mt-5 text-white font-normal">
            {servicesPage.processBand.title}
          </h2>
          <p className="mt-4 text-[15.5px] text-on-dark-2 max-w-[44ch] leading-relaxed">
            {servicesPage.processBand.intro}
          </p>
        </div>

        {/* Right Column: Step Grid */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-6">
          <StepGrid steps={process} tone="dark" />
        </div>
      </div>
    </Panel>
  );
}
