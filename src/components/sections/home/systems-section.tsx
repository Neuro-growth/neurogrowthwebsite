import * as React from "react";
import { Panel } from "@/components/ui/panel";
import { SectionHead } from "@/components/ui/section-head";
import { Button } from "@/components/ui/button";
import { SystemCard } from "@/components/blocks/system-card";
import { systems } from "@/content/systems";
import { home } from "@/content/home";

export function SystemsSection() {
  return (
    <Panel tone="dark" id="services" className="scroll-mt-24">
      <div className="container-site py-[clamp(64px,8vw,112px)]">
        {/* Section Heading */}
        <SectionHead
          tone="dark"
          eyebrow={home.systems.eyebrow}
          title={home.systems.title}
          aside={home.systems.aside}
        />

        {/* Systems Grid / Scroller on <680px */}
        <div
          tabIndex={0}
          role="region"
          aria-label="Our four systems"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-[680px]:flex max-[680px]:overflow-x-auto max-[680px]:snap-x max-[680px]:snap-mandatory max-[680px]:gap-3 max-[680px]:pb-2 focus-visible:outline-2 focus-visible:outline-cyan rounded-[6px]"
        >
          {systems.map((system) => (
            <div
              key={system.id}
              className="max-[680px]:flex-[0_0_82%] max-[680px]:snap-start"
            >
              <SystemCard system={system} tone="dark" />
            </div>
          ))}
        </div>

        {/* CTA below grid */}
        <div className="mt-10">
          <Button variant="glass" href="/services">
            {home.systems.cta}
          </Button>
        </div>
      </div>
    </Panel>
  );
}
