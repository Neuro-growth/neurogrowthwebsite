import { site, waLink } from "./site";
import type { Faq, Step } from "./types";

export const contactTopics = [
  { key: "general", label: "Not sure yet" },
  { key: "ai-strategy", label: "AI Strategy" },
  { key: "growth-systems", label: "Growth Systems" },
  { key: "customer-intelligence", label: "Customer Intelligence" },
  { key: "data-prediction", label: "Data & Prediction" },
  { key: "smartchama", label: "SmartChama" },
  { key: "gikuyu-translator", label: "Gikuyu AI Translator" },
  { key: "starter", label: "Starter plan" },
  { key: "growth", label: "Growth plan" },
  { key: "enterprise", label: "Enterprise plan" },
] as const;

export type ContactTopicKey = (typeof contactTopics)[number]["key"];

export function resolveTopic(raw: string | string[] | undefined): ContactTopicKey {
  const value = Array.isArray(raw) ? raw[0] : raw;
  return contactTopics.some((t) => t.key === value)
    ? (value as ContactTopicKey)
    : "general";
}

export function getTopicLabel(key: ContactTopicKey): string {
  const topic = contactTopics.find((t) => t.key === key);
  return topic ? topic.label : "Not sure yet";
}

export interface ContactChannel {
  id: "whatsapp" | "email" | "phone" | "studio";
  label: string;
  value: string;
  note: string;
  href?: string;
  external?: boolean;
}

export const contactData = {
  hero: {
    eyebrow: "Let's talk",
    title: "Tell us what's slowing your business down.",
    intro:
      "We reply within one working day. Prefer to talk now? WhatsApp is fastest.",
  },
  nextSteps: [
    {
      n: "01",
      title: "We reply",
      body: "Within one working day, by email or WhatsApp, whichever you prefer.",
      duration: "Day 1",
    },
    {
      n: "02",
      title: "30-minute call",
      body: "We learn how your business runs today and where time or money is leaking.",
      duration: "This week",
    },
    {
      n: "03",
      title: "Written plan",
      body: "You get a short written plan and a KSh quote, even if we don't end up working together.",
      duration: "Within 3 days of the call",
    },
  ] as Step[],
  // TODO(client): confirm hours
  channels: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: site.phoneDisplay,
      note: "Fastest reply",
      href: waLink(),
      external: true,
    },
    {
      id: "email",
      label: "Email",
      value: site.email,
      note: "For detailed briefs and documents",
      href: `mailto:${site.email}`,
    },
    {
      id: "phone",
      label: "Phone",
      value: site.phoneDisplay,
      note: "Weekdays, 9am–5pm EAT",
      href: `tel:${site.phoneE164}`,
    },
    {
      id: "studio",
      label: "Studio",
      value: site.location,
      note: "Meetings by appointment",
    },
  ] as ContactChannel[],
  contactFaqs: [
    {
      q: "Is the first call free?",
      a: "Yes. The 30-minute call and the written plan cost nothing, and there's no obligation to work with us.",
    },
    // TODO(client): confirm
    {
      q: "Do you meet in person?",
      a: "Most calls happen on Google Meet or WhatsApp video. We're happy to meet in Nairobi by appointment.",
    },
    // TODO(client): confirm
    {
      q: "Will you sign an NDA?",
      a: "Yes. We can sign your NDA or send ours before you share anything sensitive.",
    },
    {
      q: "What should I include in my message?",
      a: "What your business does, the problem you want solved and the tools you already use. A few lines is enough.",
    },
  ] as Faq[],
};
