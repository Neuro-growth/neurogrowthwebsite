import * as React from "react";
import Image from "next/image";
import { parseInline } from "@/lib/inline";
import type { ArticleBlock } from "@/content/insights/types";
import { cn } from "@/lib/utils";

export interface ArticleBodyProps {
  body: ArticleBlock[];
  className?: string;
}

export function ArticleBody({ body, className }: ArticleBodyProps) {
  return (
    <article className={cn("max-w-[68ch] w-full", className)}>
      {body.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={index}
                className="mt-6 text-[17px] leading-[1.75] text-ink-2"
              >
                {parseInline(block.text)}
              </p>
            );

          case "h2":
            return (
              <h2
                key={index}
                id={block.id}
                className="mt-14 scroll-mt-28 text-[clamp(26px,2.6vw,34px)] font-normal leading-tight tracking-[-0.03em] text-ink"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3 key={index} className="mt-10 t-h4 text-ink">
                {block.text}
              </h3>
            );

          case "ul":
            return (
              <ul
                key={index}
                className="mt-6 grid gap-2.5 pl-5 list-disc marker:text-cyan-deep text-[17px] leading-[1.7] text-ink-2"
              >
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{parseInline(item)}</li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol
                key={index}
                className="mt-6 grid gap-2.5 pl-5 list-decimal marker:text-cyan-deep text-[17px] leading-[1.7] text-ink-2"
              >
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{parseInline(item)}</li>
                ))}
              </ol>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="mt-8 border-l-2 border-cyan-deep pl-6 text-[20px] leading-snug text-ink italic"
              >
                <p>{parseInline(block.text)}</p>
                {block.cite && (
                  <cite className="mt-2 block not-italic text-sm text-ink-3">
                    — {parseInline(block.cite)}
                  </cite>
                )}
              </blockquote>
            );

          case "callout":
            return (
              <aside
                key={index}
                className="mt-8 rounded-media bg-white border border-line p-6 shadow-sm"
              >
                {block.title && (
                  <h4 className="t-h4 text-ink">{parseInline(block.title)}</h4>
                )}
                <p className="mt-2 text-[15.5px] leading-relaxed text-ink-2">
                  {parseInline(block.text)}
                </p>
              </aside>
            );

          case "image":
            return (
              <figure key={index} className="mt-10">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  className="rounded-media object-cover w-full h-auto"
                />
                {block.caption && (
                  <figcaption className="mt-3 text-[13px] text-ink-3">
                    {parseInline(block.caption)}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}
