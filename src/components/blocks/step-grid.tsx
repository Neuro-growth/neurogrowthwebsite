import * as React from "react";
import type { Step } from "@/content/types";
import { cn } from "@/lib/utils";

export interface StepGridProps {
  steps: Step[];
  tone?: "light" | "dark";
  className?: string;
}

export function StepGrid({
  steps,
  tone = "light",
  className,
}: StepGridProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "grid sm:grid-cols-2 border-t",
        isDark ? "border-line-dark" : "border-line",
        className
      )}
    >
      {steps.map((step, idx) => {
        const isSecondCol = idx % 2 === 1;

        return (
          <div
            key={step.n}
            className={cn(
              "pt-6 pb-7 border-b",
              isDark ? "border-line-dark" : "border-line",
              isSecondCol
                ? isDark
                  ? "sm:pl-6 sm:border-l sm:border-line-dark"
                  : "sm:pl-6 sm:border-l sm:border-line"
                : "sm:pr-6"
            )}
          >
            {/* Number */}
            <span
              className={cn(
                "text-[13px] font-mono tabular-nums",
                isDark ? "text-cyan" : "text-cyan-deep"
              )}
            >
              {step.n}
            </span>

            {/* Title */}
            <h3
              className={cn(
                "t-h4 mt-2.5 mb-2",
                isDark ? "text-white" : "text-ink"
              )}
            >
              {step.title}
            </h3>

            {/* Body */}
            <p
              className={cn(
                "text-[14.5px] leading-relaxed",
                isDark ? "text-on-dark-2" : "text-ink-2"
              )}
            >
              {step.body}
            </p>

            {/* Duration */}
            <span
              className={cn(
                "mt-3 inline-block text-xs",
                isDark ? "text-on-dark-3" : "text-ink-3"
              )}
            >
              {step.duration}
            </span>
          </div>
        );
      })}
    </div>
  );
}
