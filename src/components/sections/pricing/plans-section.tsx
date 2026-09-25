import * as React from "react";
import { PlanCard } from "@/components/blocks/plan-card";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { plans, pricingNote } from "@/content/pricing";
import { pricingPage } from "@/content/pricing-page";
import { waLink } from "@/content/site";

export function PlansSection() {
  return (
    <section id="plans" className="section-y scroll-mt-24">
      <div className="container-site">
        {/* 3 Plan Cards Grid: Starter -> Growth -> Enterprise */}
        <div className="grid items-stretch gap-3 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Pricing Note */}
        <p className="mt-6 text-[14px] text-ink-3 text-center sm:text-left">
          {pricingNote}
        </p>

        {/* Not Sure Strip */}
        <div className="mt-10 grid items-center gap-6 rounded-media bg-white p-7 md:grid-cols-12 border border-line">
          <div className="md:col-span-8">
            <h3 className="t-h4 text-ink">{pricingPage.notSure.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">
              {pricingPage.notSure.text}
            </p>
          </div>

          <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
            <Button variant="ink" dot href="/contact">
              Book a call
            </Button>
            <Button
              variant="outline"
              href={waLink("Hi! I'd like help choosing a plan.")}
              external
            >
              <WhatsAppIcon className="h-4 w-4 mr-1.5 text-whatsapp" />
              WhatsApp us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
