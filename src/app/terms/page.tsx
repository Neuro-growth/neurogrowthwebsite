import type { Metadata } from "next";
import { LegalPage } from "@/components/blocks/legal-page";
import { termsOfUse } from "@/content/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms and conditions governing access to and use of the NeuroGrowth Tech website, engineering services, client portal and digital AI products.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title={termsOfUse.title}
      intro={termsOfUse.intro}
      lastUpdated={termsOfUse.lastUpdated}
      sections={termsOfUse.sections}
    />
  );
}
