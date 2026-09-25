import * as React from "react";
import Image from "next/image";
import { ArtImage } from "@/components/ui/art-image";
import type { TeamMember } from "@/content/types";

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

export interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const hasPhoto = Boolean(member.photo && member.photo.src);

  return (
    <article className="group flex flex-col">
      {/* Media container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-media bg-navy">
        {hasPhoto ? (
          <Image
            src={member.photo!.src}
            alt={`${member.name}, ${member.role}`}
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="relative flex h-full w-full items-center justify-center overflow-hidden"
            role="img"
            aria-label={member.name}
          >
            <ArtImage
              src="/images/art/approach.webp"
              alt=""
              fill
              sizes="(min-width:1024px) 25vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/70" />
            <span className="relative z-10 text-[clamp(44px,6vw,72px)] font-light tracking-[-0.04em] text-white select-none">
              {member.initials}
            </span>
          </div>
        )}
      </div>

      {/* Info row */}
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-[17px] font-medium leading-snug text-ink">
            {member.name}
          </h3>
          <p className="mt-1 text-[14px] text-ink-3">{member.role}</p>
        </div>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-3 transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-cyan"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}
