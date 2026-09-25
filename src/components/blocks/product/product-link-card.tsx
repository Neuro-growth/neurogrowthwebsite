import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/content/types";
import { cn } from "@/lib/utils";

export interface ProductLinkCardProps {
  product: Product;
  badge?: string;
  showLiveChip?: boolean;
  className?: string;
}

export function ProductLinkCard({
  product,
  badge,
  showLiveChip = true,
  className,
}: ProductLinkCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group relative grid grid-cols-12 items-center gap-6 overflow-hidden rounded-media border border-line/60 bg-white p-6 transition-all duration-300 hover:border-line hover:shadow-lg lg:p-8",
        className
      )}
    >
      {/* Top-right arrow icon */}
      <div className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-mist text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-navy group-hover:text-white group-hover:border-navy">
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </div>

      {/* Left col-span-12 md:col-span-7 */}
      <div className="col-span-12 pr-10 md:col-span-7">
        {badge && (
          <span className="text-[13px] font-medium text-ink-3">{badge}</span>
        )}

        <div className={cn("flex flex-wrap items-center gap-3", badge ? "mt-3" : "mt-0")}>
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md bg-mist">
            <Image
              src={product.logo.src}
              alt={`${product.name} logo`}
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          </div>
          <h3 className="t-h3">{product.name}</h3>

          {showLiveChip && (
            <div className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Live
            </div>
          )}
        </div>

        <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
          {product.tagline}
        </p>
      </div>

      {/* Right col-span-12 md:col-span-5 */}
      <div className="col-span-12 md:col-span-5">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-navy-2">
          <Image
            src={product.heroImage.src}
            alt={product.heroImage.alt}
            fill
            sizes="(min-width: 768px) 35vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </Link>
  );
}
