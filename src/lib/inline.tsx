import * as React from "react";
import Link from "next/link";

/**
 * Safely parses tiny inline syntax (**bold** and [label](/path)) without dangerouslySetInnerHTML.
 * All other content is returned as pure React text nodes (escaped by React).
 */
export function parseInline(text: string): React.ReactNode {
  if (!text) {
    return null;
  }

  // Matches either **bold** or [label](href)
  const tokenRegex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Check for **bold**
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} className="font-semibold text-ink">
          {boldText}
        </strong>
      );
    }

    // Check for [label](href)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isExternal =
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("//");

      if (isExternal) {
        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-deep underline underline-offset-4 hover:text-navy transition-colors font-medium"
          >
            {label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        );
      }

      return (
        <Link
          key={index}
          href={href}
          className="text-cyan-deep underline underline-offset-4 hover:text-navy transition-colors font-medium"
        >
          {label}
        </Link>
      );
    }

    // Regular plain text (escaped automatically by React)
    return part;
  });
}
