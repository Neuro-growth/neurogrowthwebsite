import * as React from "react";
import { cn } from "@/lib/utils";

export interface IntegrationRailProps {
  label?: string;
  items: readonly string[] | string[];
  className?: string;
}

export function IntegrationRail({
  label = "Works with the tools you already use",
  items,
  className,
}: IntegrationRailProps) {
  return (
    <div className={cn("w-full border-y border-line bg-white", className)}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[260px_repeat(6,minmax(0,1fr))]">
        {/* Label cell */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1 flex items-center px-6 py-5 text-[13px] text-ink-3 border-b lg:border-b-0 lg:border-r border-line">
          <span>{label}</span>
        </div>

        {/* Integration cells */}
        {items.map((item, idx) => {
          // 2-column classes (default < md)
          const isOddColMobile = idx % 2 === 0; // col 1 on mobile
          const isTopRowMobile = idx < 2;

          // 3-column classes (md to lg)
          const isNotLastColMd = idx % 3 !== 2;
          const isTopRowMd = idx < 3;

          return (
            <div
              key={item}
              className={cn(
                "flex items-center px-5 py-6 text-base font-medium tracking-[-0.01em] text-ink",
                // Mobile (2-col) borders
                isOddColMobile ? "border-r border-line" : "",
                !isTopRowMobile ? "border-t border-line" : "",
                // Tablet (3-col) overrides
                isNotLastColMd ? "md:border-r md:border-line" : "md:border-r-0",
                isTopRowMd ? "md:border-t-0" : "md:border-t md:border-line",
                // Desktop (6-col) overrides
                "lg:border-t-0 lg:border-r lg:border-line lg:last:border-r-0"
              )}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
