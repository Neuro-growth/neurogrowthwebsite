"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface SystemIndexProps {
  items: { id: string; name: string }[];
  variant: "list" | "pills";
  className?: string;
}

export function SystemIndex({ items, variant, className }: SystemIndexProps) {
  const [activeId, setActiveId] = React.useState<string>(items[0]?.id || "");
  const pillRefs = React.useRef<Map<string, HTMLAnchorElement>>(new Map());

  // Setup intersection observer for scroll spy
  React.useEffect(() => {
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollerRef = React.useRef<HTMLDivElement>(null);

  // Scroll active pill into view horizontally (never vertically)
  React.useEffect(() => {
    if (variant !== "pills") return;
    const activePill = pillRefs.current.get(activeId);
    const scroller = scrollerRef.current;
    if (!activePill || !scroller) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Centre the pill within the scroller
    const target = Math.max(
      0,
      activePill.offsetLeft -
        scroller.offsetWidth / 2 +
        activePill.offsetWidth / 2
    );

    scroller.scrollTo({
      left: target,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [activeId, variant]);

  // Handle click for instant activeId update
  const handleClick = (id: string) => {
    setActiveId(id);
  };

  if (variant === "pills") {
    return (
      <div
        className={cn(
          "sticky top-[76px] z-30 -mx-[clamp(20px,4vw,56px)] border-b border-line bg-mist/90 px-[clamp(20px,4vw,56px)] py-3 backdrop-blur-md",
          className
        )}
      >
        <div
          ref={scrollerRef}
          role="region"
          aria-label="Systems on this page"
          tabIndex={0}
          className="flex gap-2 overflow-x-auto no-scrollbar focus-visible:outline-2 focus-visible:outline-cyan py-0.5"
        >
          {items.map((item) => {
            const isActive = item.id === activeId;

            return (
              <a
                key={item.id}
                ref={(el) => {
                  if (el) pillRefs.current.set(item.id, el);
                  else pillRefs.current.delete(item.id);
                }}
                href={`#${item.id}`}
                onClick={() => handleClick(item.id)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "h-10 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors flex items-center justify-center select-none outline-none focus-visible:outline-2 focus-visible:outline-cyan",
                  isActive
                    ? "border-navy bg-navy text-white"
                    : "border-line bg-white text-ink-2 hover:bg-mist hover:text-ink"
                )}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  // "list" variant for Desktop
  return (
    <nav
      aria-label="Systems on this page"
      className={cn("flex flex-col", className)}
    >
      <div className="flex flex-col">
        {items.map((item, idx) => {
          const isActive = item.id === activeId;
          const formattedIndex = String(idx + 1).padStart(2, "0");

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleClick(item.id)}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "grid grid-cols-[28px_1fr] items-baseline gap-2 border-l-2 py-3 pl-4 text-[15px] transition-colors outline-none focus-visible:outline-2 focus-visible:outline-cyan",
                isActive
                  ? "border-cyan-deep text-ink font-medium"
                  : "border-line text-ink-3 hover:text-ink"
              )}
            >
              <span className="text-[13px] font-mono tabular-nums">
                {formattedIndex}
              </span>
              <span className="leading-snug">{item.name}</span>
            </a>
          );
        })}
      </div>

      {/* Advisory Callout Card */}
      <div className="mt-8 rounded-media bg-white p-5 border border-line">
        <h4 className="text-[15px] font-medium text-ink">
          Not sure where to start?
        </h4>
        <p className="mt-1.5 mb-4 text-[13.5px] leading-relaxed text-ink-2">
          We&apos;ll audit your workflows and suggest the one system that pays off first.
        </p>
        <Button variant="ink" dot href="/contact" size="sm">
          Book a call
        </Button>
      </div>
    </nav>
  );
}
