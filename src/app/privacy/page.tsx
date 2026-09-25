import type { Metadata } from "next";
import { LegalPage } from "@/components/blocks/legal-page";
import { privacyPolicy } from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how NeuroGrowth Tech collects, uses and protects personal data under the Kenya Data Protection Act, 2019 across our website and digital services.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title={privacyPolicy.title}
      intro={privacyPolicy.intro}
      lastUpdated={privacyPolicy.lastUpdated}
      sections={privacyPolicy.sections}
    />
  );
}
