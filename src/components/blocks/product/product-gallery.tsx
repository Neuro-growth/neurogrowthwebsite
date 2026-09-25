import * as React from "react";
import { SectionHead } from "@/components/ui/section-head";
import { ProductGalleryGrid } from "./product-gallery-grid";
import type { GalleryItem } from "@/content/types";

export interface ProductGalleryProps {
  productName: string;
  gallery: GalleryItem[];
}

export function ProductGallery({ productName, gallery }: ProductGalleryProps) {
  return (
    <section className="section-y container-site">
      <SectionHead
        eyebrow={`Inside ${productName}`}
        title="See it in use."
        aside="Tap any image to view it full size."
      />
      <ProductGalleryGrid productName={productName} images={gallery} />
    </section>
  );
}
