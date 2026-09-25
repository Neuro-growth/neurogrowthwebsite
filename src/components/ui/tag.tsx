import * as React from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "light" | "dark";
  dotClassName?: string;
  children: React.ReactNode;
}

export function Tag({
  tone = "light",
  dotClassName,
  className,
  children,
  ...props
}: TagProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 text-[11.5px] font-medium uppercase tracking-[0.06em] select-none",
        tone === "dark" ? "text-on-dark-2" : "text-ink-2",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          "w-1.5 h-1.5 rounded-full shrink-0",
          dotClassName || (tone === "dark" ? "bg-cyan" : "bg-cyan-deep")
        )}
      />
      <span>{children}</span>
    </div>
  );
}
