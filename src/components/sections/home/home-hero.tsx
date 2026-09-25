import * as React from "react";
import { HeroPanel } from "@/components/site/hero-panel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { StatRow } from "@/components/ui/stat-row";
import { home } from "@/content/home";
import { heroStats, verified } from "@/content/stats";

export function HomeHero() {
  const verifiedStats = verified(heroStats);

  return (
    <HeroPanel className="flex min-h-[min(900px,calc(100svh-24px))] flex-col">
      {/* Hero Body */}
      <div className="container-site mt-auto grid grid-cols-12 items-end gap-6 pt-[clamp(56px,8vw,120px)] w-full">
        {/* Left Column: Eyebrow + H1 */}
        <div className="col-span-12 lg:col-span-8 flex flex-col">
          <Eyebrow tone="dark">{home.hero.eyebrow}</Eyebrow>
          <h1 className="t-display mt-6 text-white font-normal">
            {home.hero.title.before}
            <span className="text-cyan">{home.hero.title.highlight}</span>
            {home.hero.title.after}
          </h1>
        </div>

        {/* Right Column: Intro + Buttons */}
        <div className="col-span-12 lg:col-start-9 lg:col-span-4 pb-2 flex flex-col justify-end">
          <p className="text-[17px] leading-relaxed text-on-dark-2">
            {home.hero.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Button variant="white" dot href="/contact">
              {home.hero.ctaPrimary}
            </Button>
            <Button variant="glass" href="#products">
              {home.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="container-site mt-[clamp(40px,6vw,80px)] w-full">
        <StatRow
          tone="dark"
          stats={verifiedStats}
          className="border-t border-b-0 border-line-dark"
        />
      </div>
    </HeroPanel>
  );
}
