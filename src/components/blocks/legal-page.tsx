import * as React from "react";
import { PageHero } from "@/components/site/page-hero";
import { ArticleToc } from "@/components/blocks/insights/article-toc";
import { ArticleBody } from "@/components/blocks/insights/article-body";
import type { ArticleBlock } from "@/content/insights/types";

export interface LegalSection {
  id: string;
  heading: string;
  body: ArticleBlock[];
}

export interface LegalPageProps {
  title: string;
  intro: string;
  lastUpdated: string; // ISO date
  sections: LegalSection[];
}

export function LegalPage({
  title,
  intro,
  lastUpdated,
  sections,
}: LegalPageProps) {
  const formattedDate = new Intl.DateTimeFormat("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(lastUpdated));

  const tocHeadings = sections.map((s) => ({
    id: s.id,
    text: s.heading,
  }));

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: title }]}
        eyebrow="Legal"
        title={title}
        intro={intro}
      />

      <div className="section-y container-site grid grid-cols-12 gap-6 items-start">
        {/* Left Column: TOC on Desktop */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start">
          <ArticleToc headings={tocHeadings} />
        </aside>

        {/* Main Column */}
        <main className="col-span-12 lg:col-start-4 lg:col-span-8">
          <div className="text-[13px] text-ink-3 mb-8">
            Last updated:{" "}
            <time dateTime={lastUpdated} className="tabular-nums font-medium text-ink-2">
              {formattedDate}
            </time>
          </div>

          <div className="flex flex-col">
            {sections.map((section, idx) => (
              <section
                key={section.id}
                className={idx === 0 ? "scroll-mt-28" : "mt-14 scroll-mt-28"}
              >
                <h2
                  id={section.id}
                  className="text-[clamp(24px,2.4vw,32px)] font-normal leading-tight tracking-[-0.03em] text-ink"
                >
                  {section.heading}
                </h2>
                <ArticleBody body={section.body} />
              </section>
            ))}
          </div>

          {/* Footer Card */}
          <div className="mt-16 rounded-media bg-white border border-line p-7">
            <p className="text-[15.5px] leading-relaxed text-ink-2">
              Questions about this policy? Email{" "}
              <a
                href="mailto:info@neurogrowthtech.com"
                className="text-cyan-deep underline underline-offset-4 hover:text-navy transition-colors font-medium"
              >
                info@neurogrowthtech.com
              </a>
              .
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
