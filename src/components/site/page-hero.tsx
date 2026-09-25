import * as React from "react";
import Link from "next/link";
import { HeroPanel } from "./hero-panel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  image?: string;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  actions,
  image,
  className,
}: PageHeroProps) {
  const hasBreadcrumbs = Boolean(breadcrumbs && breadcrumbs.length > 0);

  return (
    <HeroPanel image={image} className={className}>
      <div className="container-site pt-[clamp(40px,6vw,88px)] pb-[clamp(48px,6vw,80px)]">
        <div className="grid grid-cols-12 gap-6 items-end">
          {/* LEFT: Breadcrumb + Eyebrow + Title */}
          <div className="col-span-12 lg:col-span-8">
            {hasBreadcrumbs && (
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-2 text-[13px] text-on-dark-3">
                  {breadcrumbs!.map((crumb, idx) => {
                    const isLast = idx === breadcrumbs!.length - 1;
                    return (
                      <li key={idx} className="flex items-center gap-2">
                        {idx > 0 && <span aria-hidden="true">/</span>}
                        {crumb.href && !isLast ? (
                          <Link
                            href={crumb.href}
                            className="transition-colors hover:text-white"
                          >
                            {crumb.label}
                          </Link>
                        ) : (
                          <span
                            aria-current={isLast ? "page" : undefined}
                            className={isLast ? "text-white" : undefined}
                          >
                            {crumb.label}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            )}

            <Eyebrow
              tone="dark"
              className={cn(hasBreadcrumbs && "mt-6")}
            >
              {eyebrow}
            </Eyebrow>

            <h1 className="t-h1 mt-5 text-white">{title}</h1>
          </div>

          {/* RIGHT: Intro + Actions */}
          <div className="col-span-12 lg:col-start-9 lg:col-span-4 flex flex-col justify-end">
            {intro && (
              <div className="text-[17px] leading-relaxed text-on-dark-2">
                {intro}
              </div>
            )}
            {actions && <div className="mt-6 flex flex-wrap gap-2">{actions}</div>}
          </div>
        </div>
      </div>
    </HeroPanel>
  );
}

export default PageHero;
