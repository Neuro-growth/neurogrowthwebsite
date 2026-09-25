import * as React from "react";
import { SectionHead } from "@/components/ui/section-head";
import { ProductShowcase, type ProductShowcaseItem } from "@/components/blocks/product-showcase";
import { products } from "@/content/products";
import { home } from "@/content/home";

export function ProductsSection() {
  const serialisedProducts: ProductShowcaseItem[] = products.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    status: p.status,
    summary: p.summary,
    heroImage: p.heroImage,
    logo: p.logo,
    liveUrl: p.liveUrl,
    liveLabel: p.liveLabel,
  }));

  return (
    <section id="products" className="scroll-mt-24 section-y container-site">
      <SectionHead
        tone="light"
        eyebrow={home.products.eyebrow}
        title={home.products.title}
        aside={home.products.aside}
      />

      <ProductShowcase products={serialisedProducts} />
    </section>
  );
}
