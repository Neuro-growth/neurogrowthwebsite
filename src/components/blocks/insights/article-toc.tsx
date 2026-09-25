"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ArticleHeading {
  id: string;
  text: string;
}

export interface ArticleTocProps {
  headings: ArticleHeading[];
  className?: string;
}

export function ArticleToc({ headings, className }: ArticleTocProps) {
  const [activeId, setActiveId] = React.useState<string>(headings[0]?.id || "");

  React.useEffect(() => {
    if (!headings || headings.length < 2) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length < 2) {
    return null;
  }

  return (
    <nav
      aria-label="On this page"
      className={cn("flex flex-col text-[14px]", className)}
    >
      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-3 mb-3">
        On this page
      </span>

      <div className="flex flex-col">
        {headings.map((heading) => {
          const isActive = heading.id === activeId;

          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={() => setActiveId(heading.id)}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "border-l-2 py-2 pl-3.5 transition-colors outline-none focus-visible:outline-2 focus-visible:outline-cyan leading-snug",
                isActive
                  ? "border-cyan-deep text-ink font-medium"
                  : "border-line text-ink-3 hover:text-ink"
              )}
            >
              {heading.text}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
