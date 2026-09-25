import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroPanel } from "@/components/site/hero-panel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you're looking for isn't here. Explore NeuroGrowth Tech's services, products, pricing and insights.",
  robots: { index: false },
};

const popularPages = [
  {
    href: "/services",
    title: "Services",
    description: "Explore our four AI engineering systems.",
  },
  {
    href: "/products",
    title: "Products",
    description: "See SmartChama and Gikuyu AI Translator.",
  },
  {
    href: "/pricing",
    title: "Pricing",
    description: "Clear monthly plans in Kenyan shillings.",
  },
  {
    href: "/insights",
    title: "Insights",
    description: "Practical guides on building with AI in Africa.",
  },
];

export default function NotFound() {
  return (
    <>
      {/* 1. Hero */}
      <HeroPanel>
        <div className="container-site grid grid-cols-12 items-end gap-6 pt-[clamp(56px,8vw,120px)] pb-[clamp(56px,8vw,112px)]">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-8 flex flex-col items-start">
            <Eyebrow tone="dark">404</Eyebrow>
            <h1 className="t-display mt-6 text-white font-normal">
              This page isn&apos;t here.
            </h1>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-start-9 lg:col-span-4 flex flex-col items-start gap-6">
            <p className="text-[17px] leading-relaxed text-on-dark-2">
              The link may be old, or the page may have moved during our redesign.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="white" dot href="/">
                Go to homepage
              </Button>
              <Button variant="glass" href="/contact">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </HeroPanel>

      {/* 2. Popular Pages */}
      <section className="section-y container-site">
        <h2 className="t-h4 text-ink mb-6">Popular pages</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {popularPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group flex flex-col justify-between rounded-media bg-white p-6 border border-line transition-all duration-200 hover:border-ink hover:shadow-sm focus-visible:outline-2 focus-visible:outline-cyan"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[16px] font-medium text-ink transition-colors group-hover:text-cyan-deep">
                    {page.title}
                  </h3>
                  <ArrowUpRight
                    className="h-4 w-4 text-ink-3 transition-transform duration-200 group-hover:text-cyan-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
                  {page.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
