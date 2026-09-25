export const home = {
  hero: {
    eyebrow: "AI engineering studio · Nairobi",
    title: {
      before: "Intelligent systems for ",
      highlight: "ambitious",
      after: " African businesses.",
    },
    intro:
      "We design, build and run the automation, assistants and prediction models that take work off your team, wired into M-Pesa, WhatsApp and the tools you already use.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our products",
  },
  about: {
    eyebrow: "About NeuroGrowth",
    title: "A practical approach to AI, built for how African businesses actually work.",
    p1: "NeuroGrowth Tech is an AI engineering studio in Nairobi. We build systems that automate operations, understand customers and predict what comes next, designed for mobile money, WhatsApp-first customers and networks that aren't always fast.",
    p2: "We don't sell software licences or one-off campaigns. We build the system, connect it to your tools, and keep improving it after launch.",
    cta: "Meet the team",
  },
  systems: {
    eyebrow: "Services",
    title: "Four systems that take the busy work off your team.",
    aside:
      "Most clients start with one system and add the next once it pays for itself. All ten of our services sit inside these four.",
    cta: "See all services",
  },
  products: {
    eyebrow: "Our products",
    title: "We build our own products, so we know what works here.",
    aside:
      "Both are live in production, built for mobile money, low bandwidth and local languages.",
  },
  approach: {
    eyebrow: "Our approach",
    title: "Clear plans, working systems in weeks, and care after launch.",
  },
  testimonials: {
    eyebrow: "What clients say",
    title: "In their words.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered.",
    aside: "Something else? Message us on WhatsApp.",
  },
  contact: {
    eyebrow: "Let's talk",
    title: "Start a conversation",
    intro: "Tell us what's slowing your business down. We reply within one working day.",
  },
} as const;

export type HomeContent = typeof home;
