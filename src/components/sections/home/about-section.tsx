import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { TeamRow } from "@/components/blocks/team-row";
import { home } from "@/content/home";
import { team } from "@/content/team";

export function AboutSection() {
  const shilla = team.find((m) => m.slug === "shilla") || team[0];
  const photoSrc = shilla.photo?.src || "/images/team/shilla-duotone.webp";

  return (
    <section id="about" className="scroll-mt-24 section-y container-site">
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Eyebrow across full width */}
        <div className="col-span-12 mb-2 lg:mb-4">
          <Eyebrow tone="light">{home.about.eyebrow}</Eyebrow>
        </div>

        {/* Founder Figure */}
        <figure className="col-span-12 lg:col-span-5 relative aspect-[4/4.6] overflow-hidden rounded-media max-lg:max-w-[520px] max-lg:aspect-square bg-navy-2">
          <Image
            src={photoSrc}
            alt="Shilla Swanapole, founder and CEO of NeuroGrowth Tech"
            fill
            sizes="(min-width:1024px) 40vw, 100vw"
            className="object-cover"
          />

          {/* Caption pinned bottom */}
          <figcaption className="absolute inset-x-4 bottom-4 rounded-xl bg-white/90 px-4 py-3 flex justify-between items-center text-[13px] text-ink-2 backdrop-blur-sm shadow-sm">
            <div className="flex items-center gap-1.5 truncate pr-2">
              <span className="font-medium text-ink text-sm">
                {shilla.name}
              </span>
              <span className="text-ink-3">·</span>
              <span className="truncate">{shilla.role}</span>
            </div>
            <span className="text-ink-3 shrink-0">Nairobi</span>
          </figcaption>
        </figure>

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
              <ArrowRight className="h-4 w-4 ml-1.5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
