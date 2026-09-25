import * as React from "react";
import { SectionHead } from "@/components/ui/section-head";
import { ProductLinkCard } from "@/components/blocks/product/product-link-card";
import { aboutPage } from "@/content/about-page";
import { products } from "@/content/products";

export function ProofSection() {
  return (
    <section className="section-y container-site">
      <SectionHead
        eyebrow={aboutPage.proof.eyebrow}
        title={aboutPage.proof.title}
      />

      <div className="grid gap-3 md:grid-cols-2">
        {products.map((product) => (
          <ProductLinkCard
            key={product.slug}
            product={product}
            showLiveChip={true}
          />
        ))}
      </div>
    </section>
  );
}
