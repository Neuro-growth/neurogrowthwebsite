export const servicesPage = {
  hero: {
    eyebrow: "Services",
    title: "Four AI systems that take the busy work off your team.",
    intro:
      "Ten services, grouped into four systems. Start with one and add the next once it pays for itself.",
    ctaPrimary: "Book a call",
    ctaSecondary: "See pricing",
  },
  processBand: {
    eyebrow: "How we work",
    title: "From first call to a system that runs itself.",
    intro:
      "A clear plan, a working system in weeks, and monthly tuning after launch.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions about working with us.",
  },
  ctaBand: {
    eyebrow: "Start here",
    title: "Not sure which system to start with?",
    intro:
      "Tell us how your business runs today. We'll suggest the one system that pays off first.",
    primary: {
      label: "Book a call",
      href: "/contact",
    },
  },
} as const;

export type ServicesPageContent = typeof servicesPage;
