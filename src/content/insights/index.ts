import type { Article } from "./types";
import { aiFundamentalsArticle } from "./ai-fundamentals";

export * from "./types";
export * from "./ai-fundamentals";

export const articles: Article[] = [aiFundamentalsArticle].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
