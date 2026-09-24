import * as React from "react";
import { cn } from "@/lib/utils";
import { NodeGlyph } from "./node-glyph";

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "light" | "dark";
  children: React.ReactNode;
}

export function Eyebrow({
  tone = "light",
  className,
  children,
  ...props
}: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[13px] font-medium leading-none tracking-normal select-none",
        tone === "dark" ? "text-on-dark-2" : "text-ink-2",
        className
      )}
      {...props}
    >
      <NodeGlyph tone={tone} />
      <span>{children}</span>
    </div>
  );
}

// Alias for convenience
export const Label = Eyebrow;
