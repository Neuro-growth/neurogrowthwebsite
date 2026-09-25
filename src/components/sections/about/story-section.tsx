import * as React from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { StatRow } from "@/components/ui/stat-row";
import { FounderFigure } from "@/components/blocks/founder-figure";
import { aboutPage } from "@/content/about-page";
import { heroStats } from "@/content/stats";

export function StorySection() {
  const verifiedStats = heroStats.filter((s) => s.verified);

  return (
    <section className="section-y container-site">
      <div className="grid grid-cols-12 items-start gap-6">
        {/* Left: Founder Figure */}
        <div className="col-span-12 lg:col-span-5">
          <FounderFigure />
        </div>

        {/* Right: Narrative + Stats */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-6 grid gap-5">
          <Eyebrow>{aboutPage.story.eyebrow}</Eyebrow>

          <h2 className="t-h2-sm mt-1">{aboutPage.story.title}</h2>

          <p className="text-[16px] leading-[1.7] text-ink-2 max-w-[58ch]">
            {aboutPage.story.p1}
          </p>

          <p className="text-[16px] leading-[1.7] text-ink-2 max-w-[58ch]">
            {aboutPage.story.p2Parts.map((part, i) =>
              part.href ? (
                <Link
                  key={i}
                  href={part.href}
                  className="text-ink underline underline-offset-4 decoration-line hover:decoration-ink transition-colors"
                >
                  {part.text}
                </Link>
              ) : (
                <React.Fragment key={i}>{part.text}</React.Fragment>
              )
            )}
          </p>

          <p className="text-[16px] leading-[1.7] text-ink-2 max-w-[58ch]">
            {aboutPage.story.p3}
          </p>

          <div className="mt-4">
            <StatRow
              stats={verifiedStats}
              tone="light"
              className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
