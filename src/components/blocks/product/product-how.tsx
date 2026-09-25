import * as React from "react";
import { Panel } from "@/components/ui/panel";
import { SectionHead } from "@/components/ui/section-head";

export interface HowStep {
  title: string;
  body: string;
}

export interface ProductHowProps {
  howTitle: string;
  steps: HowStep[];
}

export function ProductHow({ howTitle, steps }: ProductHowProps) {
  return (
    <Panel tone="dark" className="mt-3">
      <div className="container-site py-[clamp(64px,8vw,112px)]">
        <SectionHead
          eyebrow="How it works"
          title={howTitle}
          tone="dark"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative border-t border-line-dark pt-6"
            >
              {/* 9px cyan square sitting on the rule */}
              <span
                className="absolute -top-[5px] left-0 h-[9px] w-[9px] bg-cyan"
                aria-hidden="true"
              />
              <span className="text-[13px] text-cyan tabular-nums font-mono">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="t-h4 mt-3 text-white">{step.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-on-dark-2">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
