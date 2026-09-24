import * as React from "react";
import { cn } from "@/lib/utils";

export interface NodeGlyphProps extends React.SVGProps<SVGSVGElement> {
  tone?: "light" | "dark";
}

export function NodeGlyph({ tone = "light", className, ...props }: NodeGlyphProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      className={cn(
        "shrink-0",
        tone === "dark" ? "text-cyan" : "text-cyan-deep",
        className
      )}
      {...props}
    >
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.25" fill="none" />
      <circle cx="7" cy="7" r="2.25" fill="currentColor" />
    </svg>
  );
}
