import * as React from "react";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { StepGrid } from "@/components/blocks/step-grid";
import { pricingPage } from "@/content/pricing-page";

export function BillingSection() {
  return (
    <Panel tone="dark" className="mt-3">
      <div className="container-site grid grid-cols-12 gap-6 py-[clamp(64px,8vw,112px)] items-start">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-5 flex flex-col items-start">
          <Eyebrow tone="dark">{pricingPage.billing.eyebrow}</Eyebrow>
          <h2 className="t-h2-sm mt-5 text-white font-normal">
            {pricingPage.billing.title}
          </h2>
        </div>

        {/* Right Column: Step Grid */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-6">
          <StepGrid steps={pricingPage.billing.steps} tone="dark" />
        </div>
      </div>
    </Panel>
  );
}
