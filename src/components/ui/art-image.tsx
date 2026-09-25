import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export type ImageRadius = "none" | "card" | "media" | "panel" | "full";

export interface ArtImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  rounded?: ImageRadius;
  zoomOnHover?: boolean;
  containerClassName?: string;
}

const radiusClasses: Record<ImageRadius, string> = {
  none: "rounded-none",
  card: "rounded-[16px]",
  media: "rounded-[16px]",
  panel: "rounded-[20px] sm:rounded-[24px]",
  full: "rounded-full",
};

export function ArtImage({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  priority,
  preload,
  rounded = "none",
  zoomOnHover = false,
  className,
  containerClassName,
  ...props
}: ArtImageProps) {
  const containerRadius = radiusClasses[rounded];
  const isPreload = preload ?? priority;

  const imageElement = (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      sizes={sizes || (fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined)}
      preload={isPreload}
      className={cn(
        "object-cover",
        containerRadius,
        zoomOnHover && "transition-transform duration-700 ease-out-soft group-hover:scale-105",
        className
      )}
      {...props}
    />
  );

  if (fill || zoomOnHover || containerClassName) {
    return (
      <div
        className={cn(
          "relative overflow-hidden",
          containerRadius,
          zoomOnHover && "group",
          fill && "w-full h-full",
          containerClassName
        )}
      >
        {imageElement}
      </div>
    );
  }

  return imageElement;
}
