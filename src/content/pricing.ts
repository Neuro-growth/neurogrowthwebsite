import type { Plan } from "./types";

// KSh amounts confirmed by client 2026-09-24
export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    fit: "For businesses automating their first workflow.",
    priceKsh: 325000,
    period: "month",
    features: [
      "AI Strategy & Consulting (1 roadmap)",
      "AI Marketing Automation (1 channel)",
      "Basic CRM Automation setup",
      "1 AI Chatbot (website)",
      "Monthly performance reporting",
      "Email support",
    ],
    notIncluded: [
      "Predictive Analytics",
      "Custom Analytics Dashboard",
      "Dedicated account manager",
    ],
    featured: false,
    cta: "Get started",
  },
  {
    id: "growth",
    name: "Growth",
    fit: "A connected AI system across marketing, sales and support.",
    priceKsh: 840000,
    period: "month",
    features: [
      "Full AI Strategy & Consulting",
      "AI Marketing Automation (multi-channel)",
      "Customer Personalization Engine",
      "Predictive Analytics models",
      "AI Chatbots & Support Agents",
      "Full CRM Automation",
      "AI Content Generation system",
      "Lead Generation System",
      "Bi-weekly strategy calls",
      "Dedicated account manager",
    ],
    notIncluded: [],
    featured: true,
    cta: "Book a call",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    fit: "Custom models, multiple teams and dedicated engineers.",
    priceKsh: null,
    period: "month",
    features: [
      "All Growth plan services",
      "Digital Advertising Optimization",
      "Custom Marketing Analytics Dashboard",
      "Custom ML model development",
      "Cross-platform data warehouse",
      "Dedicated AI engineering team",
      "Weekly strategy & performance reviews",
      "Priority support (24/7 Slack)",
      "Custom SLA and KPI agreements",
    ],
    notIncluded: [],
    featured: false,
    cta: "Talk to us",
  },
];

export const pricingNote =
  "All plans have a 3-month minimum. Final pricing depends on scope and integrations.";

export const formatKsh = (n: number | null): string =>
  n !== null ? "KSh " + new Intl.NumberFormat("en-KE").format(n) : "Custom";

export const pricingPlans = plans;
