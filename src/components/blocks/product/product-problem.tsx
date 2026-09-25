import * as React from "react";
import { Eyebrow } from "@/components/ui/eyebrow";

export interface ProductProblemProps {
  problemTitle: string;
  problem: string;
}

export function ProductProblem({ problemTitle, problem }: ProductProblemProps) {
  return (
    <section className="section-y container-site">
      <div className="grid grid-cols-12 gap-6">
        {/* Left col-span-12 lg:col-span-5 */}
        <div className="col-span-12 lg:col-span-5">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="t-h2-sm mt-5">{problemTitle}</h2>
        </div>

        {/* Right col-span-12 lg:col-start-7 lg:col-span-6 */}
        <div className="col-span-12 lg:col-start-7 lg:col-span-6">
          <p className="text-[19px] leading-relaxed text-ink">{problem}</p>
        </div>
      </div>
    </section>
  );
}
