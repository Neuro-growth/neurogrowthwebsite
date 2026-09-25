import * as React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import type { Product } from "@/content/types";
import { cn } from "@/lib/utils";

export interface ProductRowProps {
  product: Product;
  index: number;
}

export function ProductRow({ product, index }: ProductRowProps) {
  const isImageFirst = index % 2 === 1;
  const image = product.gallery[1] || product.gallery[0] || product.heroImage;

  return (
    <article className="grid grid-cols-12 overflow-hidden rounded-media border border-line/60 bg-white shadow-sm">
      {/* Text side */}
      <div
        className={cn(
          "col-span-12 flex flex-col p-7 sm:p-8 lg:col-span-5 lg:p-10",
          isImageFirst ? "lg:order-2" : "lg:order-1"
        )}
      >
        {/* Meta row: Logo, Category, Live Chip */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md bg-mist">
            <Image
              src={product.logo.src}
              alt={`${product.name} logo`}
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          </div>
          <Tag tone="light">{product.category}</Tag>
          <div className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs font-medium text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            Live
          </div>
        </div>

        {/* Name & Tagline */}
        <h2 className="t-h2-sm mt-4">{product.name}</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
          {product.tagline}
        </p>

        {/* First 3 Features Checklist */}
        <ul className="mt-6 space-y-2.5 text-[14.5px] text-ink-2">
          {product.features.slice(0, 3).map((feature, fIdx) => (
            <li key={fIdx} className="flex items-start gap-2.5">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span>{feature.title}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="mt-auto pt-8">
          <Button variant="ink" dot href={`/products/${product.slug}`}>
            View details
          </Button>
        </div>
      </div>

      {/* Image side */}
      <div
        className={cn(
          "relative min-h-[300px] sm:min-h-[360px] col-span-12 bg-navy lg:col-span-7",
          isImageFirst ? "lg:order-1" : "lg:order-2"
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width:1024px) 55vw, 100vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}
