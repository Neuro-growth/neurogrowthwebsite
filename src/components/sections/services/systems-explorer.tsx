import * as React from "react";
import { SystemIndex } from "./system-index";
import { SystemSection } from "./system-section";
import { systems } from "@/content/systems";

export function SystemsExplorer() {
  const indexItems = systems.map((s) => ({
    id: s.id,
    name: s.name,
  }));

  return (
    <div className="section-y container-site">
      {/* Mobile / Tablet Pills Navigation (< 1024px) */}
      <div className="block lg:hidden mb-8">
        <SystemIndex items={indexItems} variant="pills" />
      </div>

      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Desktop Sticky Index Sidebar (>= 1024px) */}
        <div className="hidden lg:block lg:col-span-3 sticky top-28 self-start">
          <SystemIndex items={indexItems} variant="list" />
        </div>

        {/* 4 System Sections */}
        <div className="col-span-12 lg:col-start-4 lg:col-span-9 grid gap-[clamp(72px,9vw,120px)]">
          {systems.map((system, idx) => (
            <SystemSection key={system.id} system={system} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
