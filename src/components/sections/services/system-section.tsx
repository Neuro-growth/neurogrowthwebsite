import * as React from "react";
import { Tag } from "@/components/ui/tag";
import { ArtImage } from "@/components/ui/art-image";
import { ServiceRow } from "./service-row";
import type { System } from "@/content/types";

export interface SystemSectionProps {
  system: System;
  index: number;
}

export function SystemSection({ system, index }: SystemSectionProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <section
      id={system.id}
      className="scroll-mt-28"
      aria-labelledby={`${system.id}-title`}
    >
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <Tag tone="light">{system.tag}</Tag>
          <span className="text-[13px] font-mono tabular-nums text-ink-3">
            {formattedIndex}
          </span>
        </div>

        <h2
          id={`${system.id}-title`}
          className="t-h2-sm mt-4 font-normal text-ink"
        >
          {system.name}
        </h2>

        <p className="mt-4 max-w-[56ch] text-[17px] leading-relaxed text-ink-2">
          {system.summary}
        </p>
      </div>

      {/* Hero Image with Glass Pills */}
      <div className="relative mt-8 aspect-[16/7] max-sm:aspect-[4/3] w-full overflow-hidden rounded-media bg-navy-2">
        <ArtImage
          src={system.image.src}
          alt={system.image.alt || system.name}
          fill
          sizes="(min-width:1024px) 70vw, 100vw"
          className="object-cover"
        />

        {/* Pill Left */}
        <div className="absolute left-5 top-5 whitespace-nowrap rounded-full border border-white/26 bg-white/14 px-4 py-2.5 text-sm text-white backdrop-blur-md">
          {system.pill}
        </div>

        {/* Counter Right */}
        <div className="absolute right-5 top-5 whitespace-nowrap rounded-full border border-white/26 bg-white/14 px-4 py-2.5 text-sm text-white backdrop-blur-md">
          {system.services.length} services
        </div>
      </div>

      {/* Services List */}
      <div className="mt-8 border-t border-line">
        {system.services.map((service) => (
          <ServiceRow key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}
