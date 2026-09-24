import * as React from "react";
import { cn } from "@/lib/utils";

export interface StatItem {
  value: string;
  caret?: boolean;
  suffix?: string;
  label: string;
}

export interface StatRowProps {
  stats: StatItem[];
  tone?: "light" | "dark";
  className?: string;
}

export function StatRow({
  stats,
  tone = "dark",
  className,
}: StatRowProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "grid grid-cols-2 lg:grid-cols-4 border-y",
        isDark
          ? "border-line-dark divide-line-dark text-on-dark"
          : "border-line divide-line text-ink",
        "divide-y sm:divide-y-0 sm:divide-x",
        className
      )}
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={cn(
            "p-5 sm:p-6 lg:p-8 flex flex-col justify-between",
            idx >= 2 && "border-t sm:border-t-0"
          )}
        >
          <div className="flex items-start">
            <span
              className={cn(
                "t-num font-light tracking-tight",
                isDark ? "text-on-dark" : "text-ink"
              )}
            >
              {stat.value}
              {stat.suffix && (
                <span className="text-[0.7em] font-light ml-0.5">
                  {stat.suffix}
                </span>
              )}
            </span>
            {stat.caret && (
              <sup
                aria-hidden="true"
                className={cn(
                  "text-[0.55em] font-normal ml-0.5 select-none leading-none pt-1",
                  isDark ? "text-cyan" : "text-cyan-deep"
                )}
              >
                ^
              </sup>
            )}
          </div>

          <div
            className={cn(
              "flex items-baseline gap-2 mt-3 sm:mt-4 text-[13px] sm:text-[14px] leading-snug",
              isDark ? "text-on-dark-3" : "text-ink-3"
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "select-none font-mono text-xs opacity-70",
                isDark ? "text-cyan" : "text-cyan-deep"
              )}
            >
              —
            </span>
            <span>{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
