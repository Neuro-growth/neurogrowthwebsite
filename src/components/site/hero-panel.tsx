import * as React from "react";
import { Panel } from "@/components/ui/panel";
import { ArtImage } from "@/components/ui/art-image";
import { SiteNav } from "./site-nav";
import { cn } from "@/lib/utils";

export interface HeroPanelProps {
  image?: string;
  imageAlt?: string;
  className?: string;
  children: React.ReactNode;
}

export function HeroPanel({
  image = "/images/art/hero.webp",
  imageAlt = "",
  className,
  children,
}: HeroPanelProps) {
  return (
    <Panel
      as="header"
      tone="dark"
      className={cn("mt-3 max-[680px]:mt-2", className)}
    >
      {/* 1. Background image */}
      <div className="absolute inset-0 -z-10">
        <ArtImage
          src={image}
          alt={imageAlt}
          fill
          preload
          fetchPriority="high"
          loading="eager"
          quality={60}
          sizes="(min-width: 1440px) 1440px, 100vw"
          className="object-cover"
        />
      </div>

      {/* 2. Hero scrim */}
      <div className="hero-scrim absolute inset-0 -z-10" aria-hidden="true" />

      {/* 3. Navigation inside hero */}
      <SiteNav />

      {/* 4. Hero content */}
      {children}

      {/* 5. Sentinel for sticky nav observer */}
      <div id="hero-end" aria-hidden="true" />
    </Panel>
  );
}

export default HeroPanel;
