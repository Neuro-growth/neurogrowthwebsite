"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { Faq } from "@/content/types";
import { cn } from "@/lib/utils";

export interface FaqListProps {
  items: Faq[];
  className?: string;
}

export function FaqList({ items, className }: FaqListProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("w-full flex flex-col", className)}
    >
      {items.map((faq, idx) => (
        <AccordionItem
          key={faq.q}
          value={`faq-${idx}`}
          className="border-b border-line first:border-t"
        >
          <AccordionTrigger
            hideChevron
            className="w-full flex items-center justify-between py-5 text-left text-[17px] font-medium text-ink no-underline hover:no-underline focus-visible:outline-2 focus-visible:outline-cyan"
          >
            <span className="pr-4">{faq.q}</span>
            <Plus
              className="h-[18px] w-[18px] shrink-0 text-cyan-deep transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45"
              aria-hidden="true"
            />
          </AccordionTrigger>
          <AccordionContent className="pb-5 pt-0 text-[15.5px] text-ink-2 leading-relaxed max-w-[62ch]">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
