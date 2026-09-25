import * as React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import { site } from "@/content/site";

export function SiteNav() {
  return (
    <nav
      aria-label="Main Site Navigation"
      className="relative z-10 grid grid-cols-[auto_1fr_auto] items-center gap-4 px-[clamp(20px,4vw,56px)] py-5 min-[1100px]:grid-cols-[1fr_auto_1fr]"
    >
      {/* LEFT: Menu button + desktop nav pill */}
      <div className="flex items-center gap-2">
        <MobileMenu />
        <div className="hidden min-[1100px]:flex">
          <NavLinks variant="pill" />
        </div>
      </div>

      {/* CENTRE: Brand Logo */}
      <div className="justify-self-start min-[1100px]:justify-self-center">
        <Link href="/" aria-label="NeuroGrowth Tech home" className="inline-flex items-center">
          <Logo size="nav" href={null} priority />
        </Link>
      </div>

      {/* RIGHT: Phone pill + Book a call CTA */}
      <div className="flex items-center justify-end gap-2">
        <div className="hidden min-[1100px]:flex">
          <Button
            variant="glass"
            href={`tel:${site.phoneE164}`}
            className="gap-2"
          >
            <Phone className="h-4 w-4 text-cyan shrink-0" aria-hidden="true" />
            <span>{site.phoneDisplay}</span>
          </Button>
        </div>

        <Button variant="green" href="/contact">
          <span className="max-[680px]:hidden">Book a call</span>
          <span className="min-[681px]:hidden">Book</span>
        </Button>
      </div>
    </nav>
  );
}

export default SiteNav;
