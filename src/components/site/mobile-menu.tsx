"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { IconButton, Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { NavLinks } from "./nav-links";
import { site, waLink } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isContactActive = pathname === "/contact";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <IconButton variant="glass" aria-label="Open menu">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="2" y1="3" x2="16" y2="3" />
              <line x1="2" y1="11" x2="11" y2="11" />
            </svg>
          </IconButton>
        }
      />
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full sm:max-w-md bg-navy border-l border-line-dark p-0 text-on-dark-2"
      >
        <SheetTitle className="sr-only">Site Navigation</SheetTitle>
        <SheetDescription className="sr-only">
          Explore services, products, about, pricing, and contact options.
        </SheetDescription>

        <div className="flex flex-col h-full p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-line-dark">
            <Logo size="nav" href="/" priority />
            <SheetClose
              render={
                <button
                  type="button"
                  aria-label="Close menu"
                  className="w-11 h-11 rounded-full border border-white/16 bg-white/8 hover:bg-white/14 flex items-center justify-center text-white transition-colors cursor-pointer outline-none focus-visible:outline-2 focus-visible:outline-cyan"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              }
            />
          </div>

          {/* Navigation Links */}
          <div className="py-4">
            <NavLinks variant="menu" onNavigate={() => setOpen(false)} />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              aria-current={isContactActive ? "page" : undefined}
              className={cn(
                "flex items-center justify-between border-b border-line-dark py-4 text-[32px] leading-tight tracking-[-0.03em] transition-colors",
                isContactActive ? "text-cyan" : "text-white hover:text-cyan"
              )}
            >
              <span>Contact</span>
              <ArrowUpRight className="h-5 w-5 text-on-dark-3 shrink-0" aria-hidden="true" />
            </Link>
          </div>

          {/* Bottom Actions */}
          <div className="mt-auto pt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1 text-sm text-on-dark-2">
              <a
                href={`tel:${site.phoneE164}`}
                className="hover:text-white transition-colors"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-white transition-colors"
              >
                {site.email}
              </a>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <Button
                variant="glass"
                href={waLink()}
                external
                className="w-full justify-center gap-2.5"
              >
                <WhatsAppIcon className="text-whatsapp h-5 w-5" />
                <span>WhatsApp us</span>
              </Button>
              <Button
                variant="green"
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full justify-center"
              >
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
