"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ImageRef } from "@/content/types";

export interface ImageLightboxProps {
  images: ImageRef[];
  initialIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string;
}

export function ImageLightbox({
  images,
  initialIndex,
  open,
  onOpenChange,
  productName = "Product",
}: ImageLightboxProps) {
  const [index, setIndex] = React.useState(initialIndex);
  const [prevTracked, setPrevTracked] = React.useState({ open, initialIndex });

  // Adjust state during render when opening or when initialIndex changes
  if (prevTracked.open !== open || prevTracked.initialIndex !== initialIndex) {
    setPrevTracked({ open, initialIndex });
    if (open) {
      setIndex(initialIndex);
    }
  }

  const count = images.length;
  const current = images[index] || images[0];

  const handlePrev = React.useCallback(() => {
    if (count <= 1) return;
    setIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  const handleNext = React.useCallback(() => {
    if (count <= 1) return;
    setIndex((prev) => (prev + 1) % count);
  }, [count]);

  // Arrow key listener
  React.useEffect(() => {
    if (!open || count <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, count, handlePrev, handleNext]);

  if (!current) return null;

  const formattedIndex = String(index + 1).padStart(2, "0");
  const formattedTotal = String(count).padStart(2, "0");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <DialogTitle className="sr-only">
          {productName} gallery
        </DialogTitle>

        {/* Top bar: counter and close button */}
        <div className="absolute top-4 right-4 z-50 flex items-center gap-3 md:top-6 md:right-6">
          <span className="rounded-full border border-white/15 bg-navy-2/80 px-3.5 py-1.5 text-xs tabular-nums text-on-dark-2 backdrop-blur-sm">
            {formattedIndex} / {formattedTotal}
          </span>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label="Close"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 active:bg-white/30 focus-visible:outline-2 focus-visible:outline-cyan"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Main image container */}
        <div className="relative flex flex-col items-center justify-center max-w-[min(92vw,1400px)] w-full">
          <div className="relative flex items-center justify-center h-[75vh] sm:h-[80vh] max-h-[85vh] w-full">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className="max-h-full max-w-full h-auto w-auto object-contain rounded-lg shadow-2xl"
              sizes="min(92vw, 1400px)"
              priority
            />
          </div>

          {/* Caption */}
          {current.alt && (
            <p className="mt-4 text-center text-sm text-on-dark-2 max-w-2xl px-4 line-clamp-2">
              {current.alt}
            </p>
          )}
        </div>

        {/* Previous / Next buttons (desktop/tablet floating on edges, mobile at bottom) */}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 active:bg-white/30 focus-visible:outline-2 focus-visible:outline-cyan"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 active:bg-white/30 focus-visible:outline-2 focus-visible:outline-cyan"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Mobile bottom nav controls */}
            <div className="mt-3 flex items-center gap-4 sm:hidden">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 active:bg-white/30"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 active:bg-white/30"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
