import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { TeamRow } from "@/components/blocks/team-row";
import { FounderFigure } from "@/components/blocks/founder-figure";
import { home } from "@/content/home";
import { team } from "@/content/team";

export function AboutSection() {

  return (
    <section id="about" className="scroll-mt-24 section-y container-site">
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Eyebrow across full width */}
        <div className="col-span-12 mb-2 lg:mb-4">
          <Eyebrow tone="light">{home.about.eyebrow}</Eyebrow>
        </div>

        {/* Founder Figure */}
        <FounderFigure className="col-span-12 lg:col-span-5" />

        {/* Copy Column */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-6 grid gap-5 pt-2">
          <h2 className="t-h2-sm font-normal text-ink">{home.about.title}</h2>

          <p className="text-[15.5px] leading-relaxed text-ink-2">
            {home.about.p1}
          </p>

          <p className="text-[15.5px] leading-relaxed text-ink-2">
            {home.about.p2}
          </p>

          {/* Team Row */}
          <TeamRow members={team} />

          {/* CTA */}
          <div className="pt-2">
            <Button variant="outline" href="/about">
              <span>{home.about.cta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
