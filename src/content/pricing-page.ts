import type { Step } from "./types";

export interface PricingIncludesItem {
  num: string;
  title: string;
  body: string;
}

export const pricingPage = {
  hero: {
    eyebrow: "Pricing",
    title: "Clear plans, priced in shillings.",
    intro:
      "Every plan includes strategy, build and ongoing optimisation. You're paying for a working system, not software access.",
    primaryCta: {
      label: "Book a call",
      href: "/contact?topic=growth",
    },
    secondaryCta: {
      label: "Compare plans",
      href: "#plans",
    },
  },
  includes: {
    eyebrow: "Every plan includes",
    title: "No hidden extras.",
    items: [
      {
        num: "01",
        title: "Custom-Built, Always",
        body: "No off-the-shelf tools or generic templates. Every AI system is architected specifically for your business, data, and growth goals.",
      },
      {
        num: "02",
        title: "Full Onboarding & Integration",
        body: "We handle the entire setup — from auditing your existing stack to integrating all tools and deploying your first AI workflows.",
      },
      {
        num: "03",
        title: "Ongoing Optimization",
        body: "AI systems are continuously monitored, tested, and improved each month so performance compounds rather than plateaus.",
      },
    ] as PricingIncludesItem[],
  },
  billing: {
    eyebrow: "How billing works",
    title: "Simple, monthly, in KSh.",
    // TODO(client): confirm payment methods and notice period
    steps: [
      {
        n: "01",
        title: "Agree the scope",
        body: "We confirm the plan, the system and the numbers we'll track, in writing.",
        duration: "Before you pay",
      },
      {
        n: "02",
        title: "Monthly invoice",
        body: "You're invoiced monthly in KSh. Pay by M-Pesa or bank transfer.",
        duration: "Every month",
      },
      {
        n: "03",
        title: "Review and adjust",
        body: "After the 3-month minimum, move up, down or pause with 30 days' notice.",
        duration: "From month 4",
      },
    ] as Step[],
  },
  notSure: {
    title: "Not sure which plan fits?",
    text: "Tell us how your business runs today. We'll recommend a plan on a 30-minute call, even if it's the smallest one.",
  },
  cta: {
    title: "Ready when you are.",
    intro: "Book a 30-minute call. You'll leave with a written plan and a KSh quote.",
    primary: {
      label: "Book a call",
      href: "/contact?topic=growth",
    },
  },
};
