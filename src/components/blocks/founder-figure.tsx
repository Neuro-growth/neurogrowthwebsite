import * as React from "react";
import Image from "next/image";
import { team } from "@/content/team";
import { cn } from "@/lib/utils";

export interface FounderFigureProps {
  className?: string;
}

export function FounderFigure({ className }: FounderFigureProps) {
  const shilla = team.find((m) => m.slug === "shilla") || team[0];
  const photoSrc = shilla.photo?.src || "/images/team/shilla-duotone.webp";

  return (
    <figure
      className={cn(
        "relative aspect-[4/4.6] overflow-hidden rounded-media bg-navy-2 max-lg:max-w-[520px] max-lg:aspect-square",
        className
      )}
    >
      <Image
        src={photoSrc}
        alt="Shilla Swanapole, founder and CEO of NeuroGrowth Tech"
        fill
        sizes="(min-width:1024px) 40vw, 100vw"
        className="object-cover"
      />

      {/* Caption pinned bottom */}
      <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl bg-white/90 px-4 py-3 text-[13px] text-ink-2 shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-1.5 truncate pr-2">
          <span className="text-sm font-medium text-ink">{shilla.name}</span>
          <span className="text-ink-3">·</span>
          <span className="truncate">{shilla.role}</span>
        </div>
        <span className="shrink-0 text-ink-3">Nairobi</span>
      </figcaption>
    </figure>
  );
}
