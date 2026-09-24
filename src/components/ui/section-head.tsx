import * as React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

export interface SectionHeadProps {
  eyebrow?: string | React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHead({
  eyebrow,
  title,
  description,
  tone = "light",
  className,
}: SectionHeadProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "grid grid-cols-12 gap-y-4 gap-x-6 items-end mb-10 sm:mb-12 lg:mb-16",
        className
      )}
    >
      <div className="col-span-12 lg:col-span-7 flex flex-col gap-3 sm:gap-4">
        {eyebrow && (
          typeof eyebrow === "string" ? (
            <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
          ) : (
            eyebrow
          )
        )}
        <h2
          className={cn(
            "t-h2 font-normal",
            isDark ? "text-on-dark" : "text-ink"
          )}
        >
          {title}
        </h2>
      </div>

      {description && (
        <div className="col-span-12 lg:col-start-9 lg:col-span-4">
          <p
            className={cn(
              "text-[15px] sm:text-base leading-relaxed font-normal",
              isDark ? "text-on-dark-2" : "text-ink-2"
            )}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
