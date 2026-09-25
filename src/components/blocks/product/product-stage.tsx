import * as React from "react";
import Image from "next/image";
import type { ImageRef } from "@/content/types";

export interface ProductStageProps {
  heroImage: ImageRef;
}

export function ProductStage({ heroImage }: ProductStageProps) {
  return (
    <div className="container-site pt-[clamp(40px,5vw,64px)]">
      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_60px_-20px_rgb(5_13_26/0.08)]">
        {/* Browser Top Bar */}
        <div className="flex h-8 items-center gap-1.5 border-b border-line bg-white px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>

        {/* Screenshot Image */}
        <div className="relative w-full bg-mist">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            loading="eager"
            sizes="(min-width:1280px) 1200px, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
