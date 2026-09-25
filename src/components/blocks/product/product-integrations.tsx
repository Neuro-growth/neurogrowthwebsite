import * as React from "react";
import { Eyebrow } from "@/components/ui/eyebrow";

export interface ProductIntegrationsProps {
  integrations: string[];
}

export function ProductIntegrations({ integrations }: ProductIntegrationsProps) {
  if (!integrations || integrations.length === 0) return null;

  return (
    <div className="container-site pb-[clamp(64px,8vw,104px)]">
      <Eyebrow>Built with</Eyebrow>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {integrations.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex h-10 items-center rounded-full border border-line bg-white px-4 text-sm font-medium text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
