import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HeroPanel } from "@/components/site/hero-panel";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { ArticleBody } from "@/components/blocks/insights/article-body";
import { ArticleToc } from "@/components/blocks/insights/article-toc";
import { ShareRow } from "@/components/blocks/insights/share-row";
import { ArticleRow } from "@/components/blocks/insights/article-row";
import { CtaBand } from "@/components/blocks/cta-band";
import { articles, getArticle } from "@/content/insights";
import { readingTimeLabel } from "@/lib/reading-time";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const coverUrl = `${site.url}${article.cover.src}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/insights/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `/insights/${slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author],
      images: [
        {
          url: coverUrl,
          width: article.cover.width,
          height: article.cover.height,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = `${site.url}/insights/${article.slug}`;
  const readingTime = readingTimeLabel(article.body);

  const formattedPublishedDate = new Intl.DateTimeFormat("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(article.publishedAt));

  const formattedUpdatedDate = article.updatedAt
    ? new Intl.DateTimeFormat("en-KE", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(article.updatedAt))
    : null;

  // Extract h2 headings for TOC
  const h2Headings = article.body
    .filter(
      (block): block is { type: "h2"; text: string; id: string } =>
        block.type === "h2"
    )
    .map((h) => ({ id: h.id, text: h.text }));

  // Find next article by date if available
  const currentIndex = articles.findIndex((a) => a.slug === article.slug);
  const nextArticle =
    articles.length > 1
      ? articles[(currentIndex + 1) % articles.length]
      : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/brand/neurogrowth-logo.png`,
      },
    },
    image: `${site.url}${article.cover.src}`,
    mainEntityOfPage: articleUrl,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${site.url}/insights`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      {/* Article & Breadcrumb JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* 1. Article Hero */}
      <HeroPanel>
        <div className="container-site pt-[clamp(40px,6vw,88px)] pb-[clamp(48px,6vw,80px)] max-w-[900px]">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-2 text-[13px] text-on-dark-3"
          >
            <Link
              href="/insights"
              className="text-on-dark-2 hover:text-white transition-colors"
            >
              Insights
            </Link>
            <span aria-hidden="true">/</span>
            <span
              aria-current="page"
              className="text-white truncate max-w-[32ch]"
            >
              {article.title}
            </span>
          </nav>

          {/* Tag */}
          <Tag tone="dark" className="mt-6">
            {article.tag}
          </Tag>

          {/* Heading */}
          <h1 className="t-h1 mt-5 text-white font-normal">{article.title}</h1>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-on-dark-2">
            <span>{article.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedAt} className="tabular-nums">
              {formattedPublishedDate}
            </time>
            <span aria-hidden="true">·</span>
            <span>{readingTime}</span>
            {formattedUpdatedDate && (
              <>
                <span aria-hidden="true">·</span>
                <span>Updated {formattedUpdatedDate}</span>
              </>
            )}
          </div>
        </div>
      </HeroPanel>

      {/* 2. Cover Image */}
      <div className="container-site pt-[clamp(40px,5vw,64px)]">
        <div className="relative aspect-[4/3] sm:aspect-[21/9] rounded-media overflow-hidden bg-navy">
          <Image
            src={article.cover.src}
            alt={article.cover.alt}
            fill
            priority
            sizes="(min-width:1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* 3. Body Grid */}
      <div className="section-y container-site grid grid-cols-12 gap-6 items-start">
        {/* Left Column (Desktop TOC + Share) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start">
          <ArticleToc headings={h2Headings} />
          <div className="mt-10">
            <ShareRow url={articleUrl} title={article.title} />
          </div>
        </aside>

        {/* Main Column */}
        <main className="col-span-12 lg:col-start-4 lg:col-span-8">
          {/* Excerpt Lead Paragraph */}
          <p className="text-[20px] leading-snug text-ink font-normal">
            {article.excerpt}
          </p>

          {/* Body Content */}
          <ArticleBody body={article.body} />

          {/* Mobile / Tablet Share Row */}
          <div className="mt-12 lg:hidden">
            <ShareRow url={articleUrl} title={article.title} />
          </div>

          {/* Footer Card */}
          <div className="mt-16 rounded-media bg-white border border-line p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="t-h4 text-ink">
                Written by the NeuroGrowth team in Nairobi.
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2 max-w-[48ch]">
                We build intelligent growth systems and AI automation for
                African businesses.
              </p>
            </div>
            <Button variant="ink" dot href="/contact">
              Talk to us
            </Button>
          </div>
        </main>
      </div>

      {/* 4. Next Reading */}
      {nextArticle && nextArticle.slug !== article.slug && (
        <section className="section-y pt-0 container-site">
          <h2 className="t-h3 text-ink mb-6">Read next</h2>
          <ArticleRow article={nextArticle} />
        </section>
      )}

      {/* 5. CTA Band */}
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
