import * as React from "react";
import { cn } from "@/lib/utils";

export interface NumberedListItem {
  num: string;
  title: string;
  body: string;
}

export interface NumberedListProps {
  items: NumberedListItem[];
  columnsClassName?: string;
  className?: string;
}

export function NumberedList({
  items,
  columnsClassName = "sm:grid-cols-2 lg:grid-cols-3",
  className,
}: NumberedListProps) {
  return (
    <div className={cn("grid gap-x-6 gap-y-10", columnsClassName, className)}>
      {items.map((item) => (
        <div key={item.num} className="border-t border-line pt-6">
          <span className="text-[13px] font-mono tabular-nums text-cyan-deep">
            {item.num}
          </span>
          <h3 className="t-h4 mt-3">{item.title}</h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2 max-w-[40ch]">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}
