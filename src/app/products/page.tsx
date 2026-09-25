import type { Metadata } from "next";
import { products, productsPage } from "@/content";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { ProductShowcase } from "@/components/blocks/product-showcase";
import { ProductRow } from "@/components/blocks/product/product-row";
import { CtaBand } from "@/components/blocks/cta-band";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore NeuroGrowth Tech's in-house AI platforms: SmartChama for automated community finance and Gikuyu AI Translator for indigenous language preservation.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[{ label: productsPage.hero.breadcrumb }]}
        eyebrow={productsPage.hero.label}
        title={productsPage.hero.title}
        intro={productsPage.hero.intro}
        actions={
          <>
            <Button
              variant="white"
              dot
              href={productsPage.hero.primaryCta.href}
            >
              {productsPage.hero.primaryCta.label}
            </Button>
            <Button
              variant="glass"
              href={productsPage.hero.secondaryCta.href}
            >
              {productsPage.hero.secondaryCta.label}
            </Button>
          </>
        }
      />

      {/* 2. Interactive Product Showcase Slider */}
      <section className="section-y container-site">
        <ProductShowcase products={products} />
      </section>

      {/* 3. Alternating Product Rows */}
      <section className="container-site grid gap-3 pb-[clamp(64px,8vw,104px)]">
        {products.map((product, idx) => (
          <ProductRow key={product.slug} product={product} index={idx} />
        ))}
      </section>

      {/* 4. CTA Band */}
      <div className="section-y pt-0 pb-3">
        <CtaBand
          eyebrow="Custom Platforms"
          title={productsPage.ctaBand.title}
          intro={productsPage.ctaBand.intro}
          primary={productsPage.ctaBand.primary}
          showWhatsApp
        />
      </div>
    </>
  );
}
