import * as React from "react";
import { Check, Minus } from "lucide-react";
import { ArtImage } from "@/components/ui/art-image";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { formatKsh } from "@/content/pricing";
import type { Plan } from "@/content/types";
import { cn } from "@/lib/utils";

export interface PlanCardProps {
  plan: Plan;
}

export function PlanCard({ plan }: PlanCardProps) {
  const isFeatured = plan.featured;

  let ctaVariant: "green" | "ink" | "outline" = "outline";
  let ctaDot = false;
  let ctaLabel = plan.cta;
  let ctaHref = `/contact?topic=${plan.id}`;

  if (plan.id === "growth") {
    ctaVariant = "green";
    ctaLabel = "Book a call";
    ctaHref = "/contact?topic=growth";
  } else if (plan.id === "starter") {
    ctaVariant = "ink";
    ctaDot = true;
    ctaLabel = "Get started";
    ctaHref = "/contact?topic=starter";
  } else {
    ctaVariant = "outline";
    ctaLabel = "Talk to us";
    ctaHref = "/contact?topic=enterprise";
  }

  return (
    <article
      aria-labelledby={`plan-${plan.id}-title`}
      className={cn(
        "relative flex flex-col rounded-media p-8 transition-shadow",
        isFeatured
          ? "bg-navy text-on-dark-2 overflow-hidden shadow-xl"
          : "bg-white text-ink border border-line"
      )}
    >
      {/* Background art for featured card */}
      {isFeatured && (
        <div
          className="absolute inset-0 pointer-events-none opacity-35 select-none overflow-hidden"
          aria-hidden="true"
        >
          <ArtImage
            src="/images/art/hero.webp"
            alt=""
            fill
            sizes="(min-width:1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Accessible heading */}
        <h2 id={`plan-${plan.id}-title`} className="sr-only">
          {plan.name} plan
        </h2>

        {/* Top header row */}
        <div className="flex items-start justify-between gap-3">
          <Tag tone={isFeatured ? "dark" : "light"}>{plan.name}</Tag>
          {isFeatured && (
            <span className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white shrink-0">
              Most chosen
            </span>
          )}
        </div>

        {/* Fit line */}
        <p
          className={cn(
            "mt-3 text-[15px] leading-relaxed",
            isFeatured ? "text-on-dark-2" : "text-ink-2"
          )}
        >
          {plan.fit}
        </p>

        {/* Price block */}
        <div className="mt-8">
          {plan.priceKsh !== null ? (
            <div>
              <span
                className={cn(
                  "block text-xs uppercase tracking-wider font-medium",
                  isFeatured ? "text-on-dark-3" : "text-ink-3"
                )}
              >
                From
              </span>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span
                  className={cn(
                    "text-[clamp(34px,3.2vw,46px)] font-light tracking-[-0.03em] tabular-nums leading-none",
                    isFeatured ? "text-white" : "text-ink"
                  )}
                >
                  {formatKsh(plan.priceKsh)}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    isFeatured ? "text-on-dark-3" : "text-ink-3"
                  )}
                >
                  / month
                </span>
              </div>
            </div>
          ) : (
            <div>
              <span
                className={cn(
                  "block text-xs uppercase tracking-wider font-medium",
                  isFeatured ? "text-on-dark-3" : "text-ink-3"
                )}
              >
                Scoped to your project
              </span>
              <div className="mt-1 flex items-baseline">
                <span
                  className={cn(
                    "text-[clamp(34px,3.2vw,46px)] font-light tracking-[-0.03em] tabular-nums leading-none",
                    isFeatured ? "text-white" : "text-ink"
                  )}
                >
                  Custom
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div
          className={cn(
            "my-7 border-t",
            isFeatured ? "border-line-dark" : "border-line"
          )}
        />

        {/* Features list */}
        <ul className="grid gap-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "flex items-start gap-2.5 text-[14.5px] leading-snug",
                isFeatured ? "text-on-dark-2" : "text-ink"
              )}
            >
              <Check
                className={cn(
                  "h-4 w-4 mt-0.5 shrink-0",
                  isFeatured ? "text-teal" : "text-emerald-600"
                )}
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Not included list */}
        {plan.notIncluded && plan.notIncluded.length > 0 && (
          <ul className="mt-4 grid gap-3 opacity-60">
            {plan.notIncluded.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[14.5px] leading-snug text-ink-3"
              >
                <Minus className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <span className="sr-only">Not included: </span>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="mt-auto pt-8">
          <Button
            variant={ctaVariant}
            dot={ctaDot}
            size="lg"
            href={ctaHref}
            className="w-full justify-center"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
