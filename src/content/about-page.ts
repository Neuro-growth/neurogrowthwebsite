export interface StoryTextPart {
  text: string;
  href?: string;
}

export const aboutPage = {
  hero: {
    eyebrow: "About NeuroGrowth",
    title: "An AI engineering studio, built in Nairobi.",
    intro:
      "We build practical AI for how African businesses actually work: mobile money, WhatsApp-first customers and networks that aren't always fast.",
    primaryCta: {
      label: "Work with us",
      href: "/contact",
    },
    secondaryCta: {
      label: "See our products",
      href: "/products",
    },
  },
  story: {
    eyebrow: "Our story",
    title: "We started by building for ourselves.",
    p1: "NeuroGrowth Tech began with a simple frustration: the AI tools everyone talked about were built for markets with fast internet, card payments and English-only customers. Businesses here run on M-Pesa, WhatsApp and relationships.",
    p2Parts: [
      { text: "So we built our own products first. " },
      { text: "SmartChama", href: "/products/smartchama" },
      { text: " brings automated bookkeeping and loans to savings groups. The " },
      { text: "Gikuyu AI Translator", href: "/products/gikuyu-translator" },
      { text: " brings a local language into modern software. Both are live in production." },
    ] as StoryTextPart[],
    p3: "Today we use the same foundations to build automation, assistants and prediction systems for businesses across Africa, and we stay on after launch to keep improving them.",
  },
  team: {
    eyebrow: "The team",
    title: "Engineers, marketers and customer people in one room.",
    aside:
      "A small team on purpose. The people you meet on the first call are the people who build your system.",
  },
  principles: {
    eyebrow: "How we work",
    title: "Six principles we don't bend.",
  },
  nairobi: {
    eyebrow: "Why Nairobi",
    statement: {
      prefix:
        "We build where we live, for mobile money, WhatsApp-first customers and networks that aren't always fast. That isn't a constraint. It's ",
      emphasis: "our edge.",
    },
    facts: [
      {
        title: "M-Pesa native",
        body: "Payments, reconciliation and receipts built around mobile money from day one.",
      },
      {
        title: "WhatsApp-first",
        body: "Assistants and notifications where your customers already are.",
      },
      {
        title: "Low-bandwidth by default",
        body: "Light pages and lean apps that still work on a patchy 3G connection.",
      },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "Products we build and run ourselves.",
  },
  testimonials: {
    eyebrow: "What clients say",
    title: "In their words.",
  },
  cta: {
    title: "Want to work with us?",
    intro:
      "Tell us what you're building. We'll reply within one working day.",
    primary: {
      label: "Book a call",
      href: "/contact",
    },
  },
} as const;
