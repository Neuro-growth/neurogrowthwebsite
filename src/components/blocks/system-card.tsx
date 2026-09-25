import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArtImage } from "@/components/ui/art-image";
import { Tag } from "@/components/ui/tag";
import type { System } from "@/content/types";
import { cn } from "@/lib/utils";

export interface SystemCardProps {
  system: System;
  tone?: "dark" | "light";
  className?: string;
}

export function SystemCard({
  system,
  tone = "dark",
  className,
}: SystemCardProps) {
  const isDark = tone === "dark";

  return (
    <Link
      href={`/services#${system.id}`}
      className={cn(
        "group flex flex-col gap-3.5 rounded-[6px] outline-none focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-4",
        className
      )}
    >
      {/* Image box */}
      <div className="relative aspect-[4/3.6] w-full overflow-hidden rounded-[4px] bg-navy-2">
        <ArtImage
          src={system.image.src}
          alt={system.image.alt || system.name}
          fill
          sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 82vw"
          zoomOnHover
        />
        {/* Glass pill */}
        <div className="absolute left-1/2 top-[22px] -translate-x-1/2 whitespace-nowrap rounded-full border border-white/26 bg-white/14 px-4 py-2.5 text-sm text-white backdrop-blur-md">
          {system.pill}
        </div>
      </div>

      {/* Tag */}
      <Tag tone={tone} className="mt-1.5">
        {system.tag}
      </Tag>

      {/* Name */}
      <h3
        className={cn(
          "t-h3 font-normal transition-colors",
          isDark ? "text-white group-hover:text-cyan" : "text-ink group-hover:text-cyan-deep"
        )}
      >
        {system.name}
      </h3>

      {/* Summary */}
      <p
        className={cn(
          "text-[14.5px] leading-relaxed",
          isDark ? "text-on-dark-3" : "text-ink-2"
        )}
      >
        {system.summary}
      </p>

      {/* Learn more row */}
      <div
        className={cn(
          "mt-auto pt-1.5 inline-flex items-center gap-2 text-sm font-medium transition-colors",
          isDark ? "text-white group-hover:text-cyan" : "text-cyan-deep"
        )}
      >
        <span>Learn more</span>
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-[3px]"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
