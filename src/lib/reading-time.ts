import type { ArticleBlock } from "@/content/insights/types";

export function readingMinutes(body: ArticleBlock[]): number {
  let wordCount = 0;

  for (const block of body) {
    let text = "";
    switch (block.type) {
      case "p":
      case "h2":
      case "h3":
        text = block.text;
        break;
      case "ul":
      case "ol":
        text = block.items.join(" ");
        break;
      case "quote":
        text = `${block.text} ${block.cite ?? ""}`;
        break;
      case "callout":
        text = `${block.title ?? ""} ${block.text}`;
        break;
      case "image":
        text = block.caption ?? "";
        break;
    }

    if (text) {
      const words = text.trim().split(/\s+/).filter(Boolean);
      wordCount += words.length;
    }
  }

  return Math.max(1, Math.ceil(wordCount / 200));
}

export function readingTimeLabel(body: ArticleBlock[]): string {
  const mins = readingMinutes(body);
  return `${mins} min read`;
}
