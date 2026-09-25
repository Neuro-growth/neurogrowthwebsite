import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/content/insights/types";

export interface ArticleRowProps {
  article: Article;
}

export function ArticleRow({ article }: ArticleRowProps) {
  const formattedDate = new Intl.DateTimeFormat("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(article.publishedAt));

  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group grid grid-cols-12 gap-6 border-b border-line py-7 transition-colors hover:bg-mist/30"
    >
      {/* Left: date and tag */}
      <div className="col-span-12 md:col-span-3 flex flex-wrap items-center gap-2 text-[13px] text-ink-3">
        <time dateTime={article.publishedAt} className="tabular-nums">
          {formattedDate}
        </time>
        <span aria-hidden="true">·</span>
        <span className="font-medium text-ink-2">{article.tag}</span>
      </div>

      {/* Middle: heading and excerpt */}
      <div className="col-span-12 md:col-span-7">
        <h3 className="t-h3 text-ink transition-colors group-hover:text-cyan-deep">
          {article.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
          {article.excerpt}
        </p>
      </div>

      {/* Right: arrow */}
      <div className="hidden md:flex md:col-span-2 items-center justify-end">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-3 transition-all duration-200 group-hover:border-cyan-deep group-hover:text-cyan-deep group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
