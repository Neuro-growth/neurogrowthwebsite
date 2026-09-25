import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import type { Service } from "@/content/types";

export interface ServiceRowProps {
  service: Service;
}

export function ServiceRow({ service }: ServiceRowProps) {
  return (
    <article className="grid grid-cols-12 gap-6 border-b border-line py-7">
      {/* Left Column: Name & One-Liner */}
      <div className="col-span-12 md:col-span-5">
        <h3 className="t-h4 font-medium text-ink">{service.name}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
          {service.oneLiner}
        </p>
      </div>

      {/* Right Column: Description & Deliverables Details */}
      <div className="col-span-12 md:col-start-7 md:col-span-6">
        <p className="text-[15px] leading-relaxed text-ink-2">
          {service.description}
        </p>

        <details className="group mt-4">
          <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-cyan-deep [&::-webkit-details-marker]:hidden outline-none focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-2 rounded-sm select-none transition-colors hover:text-navy">
            <span>What you get ({service.deliverables.length})</span>
            <ChevronDown
              className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>

          <div className="mt-4 grid gap-2.5">
            {service.deliverables.map((d, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-[14.5px] leading-snug text-ink-2"
              >
                <Check
                  className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>{d}</span>
              </div>
            ))}
          </div>
        </details>
      </div>
    </article>
  );
}
