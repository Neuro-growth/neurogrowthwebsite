import type { Stat } from "./types";

export const heroStats: Stat[] = [
  {
    value: "02",
    caret: true,
    caption: "Products live in production",
    verified: true,
  },
  {
    value: "10",
    caption: "Services across four AI systems",
    verified: true,
  },
  {
    value: "4–8",
    caption: "Weeks from first call to a live system",
    verified: true,
  },
  {
    value: "24/7",
    caption: "Automations working after office hours",
    verified: true,
  },
];

// TODO(client): confirm before use
export const legacyClaims: Stat[] = [
  {
    value: "50+",
    caption: "Businesses served",
    verified: false,
  },
  {
    value: "80%",
    caption: "Avg. efficiency gain",
    verified: false,
  },
  {
    value: "$2B+",
    caption: "Revenue influenced",
    verified: false,
  },
  {
    value: "300%",
    caption: "Avg. ROI increase",
    verified: false,
  },
  {
    value: "10x",
    caption: "Faster growth",
    verified: false,
  },
  {
    value: "12",
    caption: "AI frameworks built",
    verified: false,
  },
];

export function verified<T extends { verified: boolean }>(items: T[]): T[] {
  return items.filter((item) => item.verified);
}
