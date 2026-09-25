import * as React from "react";
import Image from "next/image";
import type { TeamMember } from "@/content/types";
import { cn } from "@/lib/utils";

export interface TeamRowProps {
  members: TeamMember[];
  tone?: "light" | "dark";
  className?: string;
}

export function TeamRow({
  members,
  tone = "light",
  className,
}: TeamRowProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "mt-3 grid grid-cols-2 border-t lg:grid-cols-4",
        isDark ? "border-line-dark" : "border-line",
        className
      )}
    >
      {members.map((member, idx) => {
        // Mobile 2-col start of row is idx 0 and 2
        const isStartOfRowMobile = idx % 2 === 0;
        // Desktop 4-col start of row is idx 0
        const isStartOfRowDesktop = idx === 0;

        return (
          <div
            key={member.slug}
            className={cn(
              "flex flex-col gap-2 pt-4 pr-4",
              // Left borders
              !isStartOfRowMobile && (isDark ? "border-l border-line-dark pl-4" : "border-l border-line pl-4"),
              // Desktop overrides
              isStartOfRowMobile && !isStartOfRowDesktop && (isDark ? "lg:border-l lg:border-line-dark lg:pl-4" : "lg:border-l lg:border-line lg:pl-4")
            )}
          >
            {/* 40px round Avatar */}
            <div className="relative h-10 w-10 overflow-hidden rounded-full shrink-0">
              {member.photo ? (
                <Image
                  src={member.photo.src}
                  alt={member.name}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className={cn(
                    "flex h-full w-full items-center justify-center text-[13px] font-medium select-none",
                    isDark ? "bg-navy-3 text-white" : "bg-navy text-white"
                  )}
                >
                  {member.initials}
                </div>
              )}
            </div>

            {/* Name + Role */}
            <div className="flex flex-col">
              <span
                className={cn(
                  "text-[15px] font-medium leading-snug",
                  isDark ? "text-white" : "text-ink"
                )}
              >
                {member.name}
              </span>
              <span
                className={cn(
                  "text-[13px]",
                  isDark ? "text-on-dark-3" : "text-ink-3"
                )}
              >
                {member.role}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
