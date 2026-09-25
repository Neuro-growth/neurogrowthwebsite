import * as React from "react";
import type { Testimonial } from "@/content/types";
import { cn } from "@/lib/utils";

export interface TestimonialRailProps {
  items: Testimonial[];
  className?: string;
}

export function TestimonialRail({ items, className }: TestimonialRailProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={cn("w-full border-y border-line bg-white", className)}>
      {/* 
        On desktop (lg): 3-column grid with borders between items.
        Below lg (<1024px): horizontal scroller with snap points.
      */}
      <div
        tabIndex={0}
        role="region"
        aria-label="Client testimonials"
        className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 focus-visible:outline-2 focus-visible:outline-cyan"
      >
        {items.map((t, idx) => (
          <figure
            key={t.name}
            className={cn(
              "flex flex-col justify-between p-8 flex-[0_0_85%] sm:flex-[0_0_70%] snap-start border-r border-line",
              "lg:flex-initial lg:snap-align-none lg:border-r-0",
              idx > 0 && "lg:border-l lg:border-line"
            )}
          >
            <blockquote className="text-[19px] leading-snug tracking-[-0.01em] text-ink before:content-['“'] after:content-['”']">
              {t.quote}
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-3">
              <div
                aria-hidden="true"
                className="h-10 w-10 shrink-0 rounded-full bg-navy flex items-center justify-center text-[13px] font-medium text-white select-none"
              >
                {t.initials}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-ink">{t.name}</span>
                <span className="text-[13px] text-ink-3">{t.role}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
