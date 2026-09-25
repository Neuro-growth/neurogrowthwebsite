import * as React from "react";
import { Panel } from "@/components/ui/panel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArtImage } from "@/components/ui/art-image";
import { ContactForm } from "./contact-form";
import { site, waLink } from "@/content/site";
import { cn } from "@/lib/utils";

export interface ContactSplitProps {
  eyebrow?: string;
  title?: string;
  intro?: string;
  defaultTopic?: string;
  className?: string;
}

export function ContactSplit({
  eyebrow = "Let's talk",
  title = "Start a conversation",
  intro = "Tell us what's slowing your business down. We reply within one working day.",
  defaultTopic,
  className,
}: ContactSplitProps) {
  return (
    <Panel tone="light" className={cn("overflow-hidden", className)}>
      <div className="grid grid-cols-12 max-lg:grid-cols-1">
        {/* Left Visual Column */}
        <div className="col-span-12 lg:col-span-6 relative min-h-[420px] lg:min-h-[640px] overflow-hidden">
          <ArtImage
            src="/images/art/contact.webp"
            alt=""
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
          />

          {/* Bottom Contact Cards */}
          <div className="absolute inset-x-6 bottom-6 grid gap-2 sm:grid-cols-2 z-10">
            {/* WhatsApp Link Card */}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/16 bg-navy/60 p-4 text-white backdrop-blur-md transition-colors hover:bg-navy/75 focus-visible:outline-2 focus-visible:outline-cyan"
            >
              <span className="block text-xs text-on-dark-2">
                WhatsApp · fastest reply
              </span>
              <span className="mt-0.5 block text-sm font-medium text-white">
                {site.phoneDisplay}
              </span>
            </a>

            {/* Email Link Card */}
            <a
              href={`mailto:${site.email}`}
              className="rounded-xl border border-white/16 bg-navy/60 p-4 text-white backdrop-blur-md transition-colors hover:bg-navy/75 focus-visible:outline-2 focus-visible:outline-cyan"
            >
              <span className="block text-xs text-on-dark-2">Email</span>
              <span className="mt-0.5 block text-sm font-medium text-white truncate">
                {site.email}
              </span>
            </a>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-6 p-[clamp(28px,5vw,72px)] flex flex-col justify-center">
          <div className="flex flex-col gap-3 mb-6">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h2 className="t-h2-sm font-normal text-ink mt-1">{title}</h2>
            <p className="text-[15.5px] leading-relaxed text-ink-2 max-w-[48ch]">
              {intro}
            </p>
          </div>

          <ContactForm defaultTopic={defaultTopic} />
        </div>
      </div>
    </Panel>
  );
}
