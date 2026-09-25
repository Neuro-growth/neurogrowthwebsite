"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";

export function StickyNav() {
  const [visible, setVisible] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const sentinel = document.getElementById("hero-end");

    if (sentinel && typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          const isPastHero =
            !entry.isIntersecting && entry.boundingClientRect.top < 0;
          setVisible(isPastHero);
        },
        { threshold: 0 }
      );

      observer.observe(sentinel);
      return () => observer.disconnect();
    }

    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        setVisible(window.scrollY > 400);
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return (
    <div
      className={cn(
        "fixed z-40 top-[calc(env(safe-area-inset-top,0px)+12px)] left-2 right-2 min-[681px]:left-3 min-[681px]:right-3 mx-auto max-w-[1280px] transition-[transform,opacity] duration-300 ease-out-soft",
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-[140%] opacity-0 pointer-events-none"
      )}
      inert={!visible}
      aria-hidden={!visible}
    >
      <div className="flex h-14 items-center justify-between gap-3 rounded-full border border-line-dark bg-navy/85 pl-4 pr-2 backdrop-blur-md shadow-lg shadow-black/25">
        {/* Left: Logo size="sm" (32px) */}
        <div className="flex items-center">
          <Logo size="sm" priority={false} />
        </div>

        {/* Centre (>= 1100px only): NavLinks variant="bar" */}
        <div className="hidden min-[1100px]:flex items-center">
          <NavLinks variant="bar" />
        </div>

        {/* Right: Book a call + MobileMenu below 1100px */}
        <div className="flex items-center gap-2">
          <div className="min-[1100px]:hidden">
            <MobileMenu />
          </div>
          <Button variant="green" size="md" href="/contact">
            <span className="max-[680px]:hidden">Book a call</span>
            <span className="min-[681px]:hidden">Book</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StickyNav;
