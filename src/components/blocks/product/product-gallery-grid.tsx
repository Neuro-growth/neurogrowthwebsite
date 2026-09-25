"use client";

import * as React from "react";
import Image from "next/image";
import { ImageLightbox } from "@/components/blocks/image-lightbox";
import type { GalleryItem } from "@/content/types";
import { cn } from "@/lib/utils";

export interface ProductGalleryGridProps {
  productName: string;
  images: GalleryItem[];
}

export function ProductGalleryGrid({
  productName,
  images,
}: ProductGalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleOpen = (idx: number) => {
    setSelectedIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
        {images.map((item, idx) => {
          const layout = item.layout || "half";

          let spanClasses = "col-span-12 sm:col-span-1 lg:col-span-6 aspect-[16/9]";
          let imgClasses = "object-cover";
          let sizes = "(min-width: 1024px) 50vw, 100vw";

          if (layout === "wide") {
            spanClasses = "col-span-12 sm:col-span-2 lg:col-span-8 aspect-[16/10]";
            sizes = "(min-width: 1024px) 66vw, 100vw";
          } else if (layout === "tall") {
            spanClasses =
              "col-span-12 sm:col-span-2 lg:col-span-4 aspect-[16/10] lg:aspect-auto min-h-[300px] bg-navy";
            imgClasses = "object-contain p-4";
            sizes = "(min-width: 1024px) 33vw, 100vw";
          } else if (layout === "third") {
            spanClasses = "col-span-12 sm:col-span-1 lg:col-span-4 aspect-[16/10]";
            sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";
          } else if (layout === "half") {
            spanClasses = "col-span-12 sm:col-span-1 lg:col-span-6 aspect-[16/9]";
            sizes = "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw";
          }

          return (
            <button
              key={item.src}
              type="button"
              onClick={() => handleOpen(idx)}
              aria-label={`View larger: ${item.alt || `${productName} image ${idx + 1}`}`}
              className={cn(
                "group relative w-full overflow-hidden rounded-media bg-navy-2 text-left focus-visible:outline-2 focus-visible:outline-cyan cursor-pointer",
                spanClasses
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={sizes}
                className={cn(
                  "transition-transform duration-700 ease-out group-hover:scale-[1.03]",
                  imgClasses
                )}
              />
              <span className="sr-only">Open image in full screen</span>
            </button>
          );
        })}
      </div>

      <ImageLightbox
        images={images}
        initialIndex={selectedIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        productName={productName}
      />
    </>
  );
}
