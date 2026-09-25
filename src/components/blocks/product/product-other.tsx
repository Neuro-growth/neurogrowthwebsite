import * as React from "react";
import { products } from "@/content";
import { ProductLinkCard } from "./product-link-card";

export interface ProductOtherProps {
  currentSlug: string;
}

export function ProductOther({ currentSlug }: ProductOtherProps) {
  const other = products.find((p) => p.slug !== currentSlug);
  if (!other) return null;

  return (
    <div className="container-site pb-[clamp(64px,8vw,104px)]">
      <ProductLinkCard
        product={other}
        badge="Also built by NeuroGrowth"
        showLiveChip={false}
      />
    </div>
  );
}
