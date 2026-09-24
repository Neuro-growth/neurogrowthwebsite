"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export interface NavLinksProps {
  variant: "pill" | "bar" | "menu";
  onNavigate?: () => void;
  className?: string;
}

export function NavLinks({ variant, onNavigate, className }: NavLinksProps) {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  if (variant === "menu") {
    return (
      <nav aria-label="Mobile Navigation" className={cn("flex flex-col", className)}>
        {site.nav.map((item) => {
          const active = isLinkActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => onNavigate?.()}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center justify-between border-b border-line-dark py-4 text-[32px] leading-tight tracking-[-0.03em] transition-colors",
                active ? "text-cyan" : "text-white hover:text-cyan"
              )}
            >
              <span>{item.label}</span>
              <ArrowUpRight className="h-5 w-5 text-on-dark-3 shrink-0" aria-hidden="true" />
            </Link>
          );
        })}
      </nav>
    );
  }

  const isPill = variant === "pill";

  return (
    <nav
      aria-label="Primary Navigation"
      className={cn(
        "flex h-12 items-center gap-0.5",
        isPill &&
          "rounded-full border border-white/16 bg-white/8 px-1.5 backdrop-blur-md",
        !isPill && "px-1.5",
        className
      )}
    >
      {site.nav.map((item) => {
        const active = isLinkActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => onNavigate?.()}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-full px-3.5 py-2 text-sm font-medium transition-colors select-none",
              active
                ? "bg-white/10 text-white"
                : "text-on-dark-2 hover:bg-white/8 hover:text-white"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavLinks;
