import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/content";

export interface ProductOtherProps {
  currentSlug: string;
}

export function ProductOther({ currentSlug }: ProductOtherProps) {
  const other = products.find((p) => p.slug !== currentSlug);
  if (!other) return null;

  return (
    <div className="container-site pb-[clamp(64px,8vw,104px)]">
      <Link
        href={`/products/${other.slug}`}
        className="group relative grid grid-cols-12 items-center gap-6 overflow-hidden rounded-media border border-line/60 bg-white p-6 transition-all duration-300 hover:border-line hover:shadow-lg lg:p-8"
      >
        {/* Top-right arrow icon */}
        <div className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-mist text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-navy group-hover:text-white group-hover:border-navy">
          <ArrowUpRight className="h-4 w-4" />
        </div>

        {/* Left col-span-12 md:col-span-7 */}
        <div className="col-span-12 pr-10 md:col-span-7">
          <span className="text-[13px] font-medium text-ink-3">
            Also built by NeuroGrowth
          </span>

          <div className="mt-3 flex items-center gap-3">
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md bg-mist">
              <Image
                src={other.logo.src}
                alt={`${other.name} logo`}
                width={32}
                height={32}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="t-h3">{other.name}</h3>
          </div>

          <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
            {other.tagline}
          </p>
        </div>

        {/* Right col-span-12 md:col-span-5 */}
        <div className="col-span-12 md:col-span-5">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-navy-2">
            <Image
              src={other.heroImage.src}
              alt={other.heroImage.alt}
              fill
              sizes="(min-width: 768px) 35vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
