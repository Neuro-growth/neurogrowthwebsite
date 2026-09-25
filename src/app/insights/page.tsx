import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { SectionHead } from "@/components/ui/section-head";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/blocks/insights/article-card";
import { ArticleRow } from "@/components/blocks/insights/article-row";
import { CtaBand } from "@/components/blocks/cta-band";
import { articles } from "@/content/insights";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on building with AI in Africa — practical guides from the NeuroGrowth team, written for business owners, not engineers.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={[{ label: "Insights" }]}
        eyebrow="Insights"
        title="Notes on building with AI in Africa."
        intro="Practical guides from the NeuroGrowth team, written for business owners, not engineers."
      />

      {/* 2. Articles Index */}
      <section className="section-y container-site">
        {/* Featured Article */}
        {featuredArticle && <ArticleCard article={featuredArticle} />}

        {/* Other Articles or 'More on the way' */}
        {otherArticles.length > 0 ? (
          <div className="mt-16">
            <SectionHead
              eyebrow="All articles"
              title="More from the team."
            />
            <div className="mt-6 flex flex-col">
              {otherArticles.map((article) => (
                <ArticleRow key={article.slug} article={article} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-16 border-y border-line py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="t-h4 text-ink">More articles are on the way.</h3>
              <p className="mt-1 text-[15px] text-ink-2">
                Follow us on LinkedIn to see them first.
              </p>
            </div>
            <Button
              variant="outline"
              href={
                site.socials.find((s) => s.label === "LinkedIn")?.href ??
                "https://www.linkedin.com/company/neurogrowthtech/"
              }
              external
            >
              Follow on LinkedIn
            </Button>
          </div>
        )}
      </section>

      {/* 3. CTA Band */}
      <div className="section-y pt-0 pb-3">
        <CtaBand
          title="Want to apply this in your business?"
          intro="Book a 30-minute call and we'll show you where AI pays off first."
          primary={{ label: "Book a call", href: "/contact" }}
          showWhatsApp
        />
      </div>
    </>
  );
}
