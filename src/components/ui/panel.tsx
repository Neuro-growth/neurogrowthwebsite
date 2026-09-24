import * as React from "react";
import { cn } from "@/lib/utils";

export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "dark" | "light" | "white";
  as?: React.ElementType;
  inset?: boolean;
  children?: React.ReactNode;
}

export function Panel({
  tone = "dark",
  as: Component = "section",
  inset = true,
  className,
  children,
  ...props
}: PanelProps) {
  const toneClasses = {
    dark: "bg-navy text-on-dark",
    light: "bg-mist text-ink",
    white: "bg-white text-ink",
  };

  return (
    <Component
      className={cn(
        "relative isolate overflow-hidden",
        inset && "mx-2 sm:mx-3 my-2 sm:my-3 rounded-[20px] sm:rounded-[24px]",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
