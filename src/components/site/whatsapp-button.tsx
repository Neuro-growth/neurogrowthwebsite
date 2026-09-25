"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { waLink } from "@/content/site";

export function WhatsAppButton() {
  const pathname = usePathname();

  // Hide the floating button on the contact page
  if (pathname === "/contact") {
    return null;
  }

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp (opens in a new tab)"
      className="fixed z-50 right-6 bottom-[calc(24px+env(safe-area-inset-bottom,0px))] max-[680px]:right-4 grid size-[52px] place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgb(0_0_0/0.45)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}

export default WhatsAppButton;
