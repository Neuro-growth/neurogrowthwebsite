import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArtImage } from "@/components/ui/art-image";
import { Tag } from "@/components/ui/tag";
import { readingTimeLabel } from "@/lib/reading-time";
import type { Article } from "@/content/insights/types";

export interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(article.publishedAt));

  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group grid overflow-hidden rounded-media bg-white lg:grid-cols-12 border border-line transition-shadow hover:shadow-md"
    >
      {/* Image container */}
      <div className="relative min-h-[280px] lg:col-span-7 lg:min-h-[440px] overflow-hidden bg-navy">
        <ArtImage
          src={article.cover.src}
          alt={article.cover.alt}
          fill
          zoomOnHover
          sizes="(min-width:1024px) 55vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Text container */}
      <div className="lg:col-span-5 flex flex-col p-7 lg:p-10">
        <div className="flex items-center justify-between gap-3">
          <Tag tone="light">{article.tag}</Tag>
          <time
            dateTime={article.publishedAt}
            className="text-[13px] text-ink-3 tabular-nums"
          >
            {formattedDate}
          </time>
        </div>

        <h2 className="t-h2-sm mt-5 text-ink transition-colors group-hover:text-cyan-deep">
          {article.title}
        </h2>

        <p className="mt-4 text-[15.5px] leading-relaxed text-ink-2">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-8 flex items-center justify-between text-[13px] text-ink-3 border-t border-line/60">
          <span>{readingTimeLabel(article.body)}</span>
          <span className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors group-hover:text-cyan-deep">
            Read article
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
