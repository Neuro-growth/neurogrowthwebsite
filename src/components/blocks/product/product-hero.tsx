import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroPanel } from "@/components/site/hero-panel";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { waLink } from "@/content/site";
import type { Product } from "@/content/types";

export interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  const whatsappHref = waLink(`Hi! I'd like to learn more about ${product.name}.`);

  return (
    <HeroPanel>
      <div className="container-site pt-[clamp(40px,6vw,88px)] pb-[clamp(48px,6vw,80px)]">
        <div className="grid grid-cols-12 items-end gap-6">
          {/* Left col-span-12 lg:col-span-8 */}
          <div className="col-span-12 lg:col-span-8">
            {/* Breadcrumb nav */}
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[13px] text-on-dark-3">
                <li>
                  <Link href="/products" className="transition-colors hover:text-white">
                    Products
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  {product.name}
                </li>
              </ol>
            </nav>

            {/* Row with logo, category, and live status chip */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white/10">
                <Image
                  src={product.logo.src}
                  alt={`${product.name} logo`}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <Tag tone="dark">{product.category}</Tag>
              <div className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Live
              </div>
            </div>

            {/* Product Name H1 */}
            <h1 className="t-h1 mt-5 text-white">{product.name}</h1>
          </div>

          {/* Right col-span-12 lg:col-start-9 lg:col-span-4 */}
          <div className="col-span-12 lg:col-start-9 lg:col-span-4">
            <p className="text-[19px] leading-snug text-white">{product.tagline}</p>
            <p className="mt-3 text-[15.5px] leading-relaxed text-on-dark-2">
              {product.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                variant="green"
                href={`/contact?topic=${product.slug}`}
              >
                {product.cta.primaryLabel}
              </Button>
              <Button
                variant="glass"
                href={whatsappHref}
                external
              >
                <WhatsAppIcon className="h-4 w-4" />
                Ask on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </HeroPanel>
  );
}
