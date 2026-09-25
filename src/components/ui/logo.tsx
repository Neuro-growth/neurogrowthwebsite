import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type LogoSize = "nav" | "footer" | "sm" | number;

export interface LogoProps {
  size?: LogoSize;
  className?: string;
  href?: string | null;
  priority?: boolean;
}

const ASPECT_RATIO = 880 / 250; // 3.52

export function Logo({
  size = "nav",
  className,
  href = "/",
  priority = true,
}: LogoProps) {
  let height = 46;
  if (size === "footer") {
    height = 52;
  } else if (size === "sm") {
    height = 32;
  } else if (typeof size === "number") {
    height = size;
  }
  const width = Math.round(height * ASPECT_RATIO);

  const image = (
    <Image
      src="/brand/neurogrowth-logo.webp"
      alt="NeuroGrowth Tech"
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center outline-none focus-visible:outline-2 focus-visible:outline-cyan focus-visible:outline-offset-2 rounded-md"
        aria-label="NeuroGrowth Tech Home"
      >
        {image}
      </Link>
    );
  }

  return image;
}

export default Logo;
