"use client";

import * as React from "react";
import { Link as LinkIcon } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { cn } from "@/lib/utils";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export interface ShareRowProps {
  url: string;
  title: string;
  className?: string;
}

export function ShareRow({ url, title, className }: ShareRowProps) {
  const [copyStatus, setCopyStatus] = React.useState<string | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopyStatus("Link copied");
    } catch {
      setCopyStatus("Copy failed");
    }

    setTimeout(() => {
      setCopyStatus(null);
    }, 2000);
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${title} ${url}`);
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const whatsappHref = `https://wa.me/?text=${encodedText}`;

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-3">
        Share
      </span>

      <div className="flex items-center gap-2">
        {/* Copy Link Button */}
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy article link"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-3 transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-cyan"
        >
          <LinkIcon className="h-4 w-4" aria-hidden="true" />
        </button>

        {/* LinkedIn Share */}
        <a
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-3 transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-cyan"
        >
          <LinkedinIcon className="h-4 w-4" />
        </a>

        {/* WhatsApp Share */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-3 transition-colors hover:border-whatsapp hover:text-whatsapp focus-visible:outline-2 focus-visible:outline-cyan"
        >
          <WhatsAppIcon size={16} />
        </a>

        {/* Copy status toast */}
        {copyStatus && (
          <span
            role="status"
            aria-live="polite"
            className="ml-2 text-xs font-medium text-cyan-deep animate-in fade-in duration-200"
          >
            {copyStatus}
          </span>
        )}
      </div>
    </div>
  );
}
