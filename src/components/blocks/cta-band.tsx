import * as React from "react";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ArtImage } from "@/components/ui/art-image";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { waLink } from "@/content/site";
import { cn } from "@/lib/utils";

export interface CtaBandProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  primary?: {
    label: string;
    href: string;
  };
  showWhatsApp?: boolean;
  image?: string;
  className?: string;
}

export function CtaBand({
  eyebrow = "Start here",
  title,
  intro,
  primary = { label: "Book a call", href: "/contact" },
  showWhatsApp = true,
  image = "/images/art/hero.webp",
  className,
}: CtaBandProps) {
  return (
    <Panel
      tone="dark"
      className={cn("relative mt-3 overflow-hidden", className)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <ArtImage
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Hero Scrim */}
      <div className="hero-scrim absolute inset-0 -z-10" aria-hidden="true" />

      {/* Content Container */}
      <div className="container-site grid grid-cols-12 items-end gap-6 py-[clamp(56px,7vw,96px)]">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-7 flex flex-col items-start">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h2 className="t-h2 mt-5 text-white font-normal">{title}</h2>
          {intro && (
            <p className="mt-4 text-[17px] leading-relaxed text-on-dark-2 max-w-[52ch]">
              {intro}
            </p>
          )}
        </div>

        {/* Right Action Buttons */}
        <div className="col-span-12 lg:col-start-9 lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
          <Button variant="green" size="lg" href={primary.href}>
            {primary.label}
          </Button>

          {showWhatsApp && (
            <Button variant="glass" size="lg" href={waLink()} external>
              <WhatsAppIcon className="h-4 w-4 mr-1.5" />
              <span>WhatsApp us</span>
            </Button>
          )}
        </div>
      </div>
    </Panel>
  );
}
