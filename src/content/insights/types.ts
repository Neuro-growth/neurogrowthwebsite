export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title?: string; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };

export type ArticleTag =
  | "Guide"
  | "Beginner"
  | "Deep dive"
  | "Practical"
  | "Africa focus";

export type Article = {
  slug: string;
  title: string;
  excerpt: string; // <= 160 chars, also used as meta description
  tag: ArticleTag;
  publishedAt: string; // ISO date
  updatedAt?: string;
  author: string; // "NeuroGrowth Team" unless the article names a person
  cover: { src: string; alt: string; width: number; height: number };
  body: ArticleBlock[];
};
