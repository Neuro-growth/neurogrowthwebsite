"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ArtImage } from "@/components/ui/art-image";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import type { Product } from "@/content/types";
import { cn } from "@/lib/utils";

export type ProductShowcaseItem = Pick<
  Product,
  "slug" | "name" | "category" | "status" | "summary" | "heroImage" | "logo"
>;

export interface ProductShowcaseProps {
  products: ProductShowcaseItem[];
  className?: string;
}

export function ProductShowcase({ products, className }: ProductShowcaseProps) {
  const [index, setIndex] = React.useState(0);

  const count = products.length;
  const current = products[index] || products[0];

  const handlePrev = React.useCallback(() => {
    setIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  const handleNext = React.useCallback(() => {
    setIndex((prev) => (prev + 1) % count);
  }, [count]);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (count <= 1) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    },
    [count, handlePrev, handleNext]
  );

  if (!current) return null;

  const statusLabel =
    current.status === "live"
      ? "Live"
      : current.status === "pilot"
      ? "Pilot"
      : "In Development";

  const formattedCurrent = String(index + 1).padStart(2, "0");
  const formattedTotal = String(count).padStart(2, "0");

  return (
    <div
      role="region"
      aria-label="Product showcase"
      onKeyDown={handleKeyDown}
      className={cn(
        "relative grid min-h-[620px] grid-cols-12 items-end overflow-hidden rounded-media bg-navy max-[1100px]:grid-cols-1 max-[1100px]:min-h-0",
        className
      )}
    >
      {/* Background Art */}
      <div className="absolute inset-0 pointer-events-none">
        <ArtImage
          src="/images/art/products.webp"
          alt=""
          fill
          sizes="(min-width:1280px) 1200px, 100vw"
        />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
      </div>

      {/* Visual (order-first on <1100px) */}
      <div className="relative z-10 col-span-12 self-center px-5 pb-5 max-[1100px]:order-first max-[1100px]:pt-10 lg:col-start-7 lg:col-span-6 lg:py-12 lg:pr-10">
        <div className="overflow-hidden rounded-xl border border-white/20 bg-navy-2 shadow-[0_40px_90px_-30px_rgb(0_0_0/0.7)]">
          {/* Top Browser Bar */}
          <div className="flex h-7 items-center gap-1.5 border-b border-white/10 px-3 bg-navy-3/80 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
          </div>

          {/* Screenshot Container */}
          <div className="relative aspect-[1376/768] w-full overflow-hidden bg-navy-2">
            {products.map((p, idx) => {
              const isActive = idx === index;
              return (
                <div
                  key={p.slug}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-300 motion-reduce:transition-none",
                    isActive
                      ? "opacity-100 z-10"
                      : "opacity-0 pointer-events-none z-0"
                  )}
                  aria-hidden={!isActive}
                >
                  <Image
                    src={p.heroImage.src}
                    alt={p.heroImage.alt}
                    width={p.heroImage.width}
                    height={p.heroImage.height}
                    priority={idx === 0}
                    sizes="(min-width:1100px) 45vw, 90vw"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* White Product Card */}
      <div
        id="product-showcase-card"
        aria-live="polite"
        className="relative z-10 col-span-12 m-5 grid gap-3.5 rounded-xl bg-white p-7 lg:col-span-5 lg:m-7"
      >
        {/* Meta row */}
        <div className="flex items-center justify-between text-[13px] text-ink-3">
          <span>{current.category}</span>
          <Tag tone="light" dotClassName="bg-emerald-600">
            {statusLabel}
          </Tag>
        </div>

        {/* Title + Logo */}
        <div className="flex items-center gap-3.5 pt-1">
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md">
            <Image
              src={current.logo.src}
              alt={`${current.name} logo`}
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          </div>
          <h3 className="text-[30px] font-normal leading-tight tracking-[-0.03em] text-ink">
            {current.name}
          </h3>
        </div>

        {/* Summary */}
        <p className="text-[15px] leading-relaxed text-ink-2">
          {current.summary}
        </p>

        {/* Footer Row */}
        <div className="mt-1.5 flex items-center justify-between pt-2">
          <Button
            variant="ink"
            dot
            href={`/products/${current.slug}`}
          >
            View details
          </Button>

          {count > 1 && (
            <div className="flex items-center gap-3">
              <span className="text-[13px] tabular-nums text-ink-3">
                {formattedCurrent} / {formattedTotal}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous product"
                  aria-controls="product-showcase-card"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-mist active:bg-line focus-visible:outline-2 focus-visible:outline-cyan"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next product"
                  aria-controls="product-showcase-card"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-mist active:bg-line focus-visible:outline-2 focus-visible:outline-cyan"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
