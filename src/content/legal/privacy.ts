// DRAFT prepared for review. Have a qualified Kenyan advocate review before launch. Last reviewed: 2026-09-25.

import type { LegalSection } from "@/components/blocks/legal-page";

export const privacyPolicy = {
  title: "Privacy Policy",
  intro:
    "How NeuroGrowth collects, uses and protects personal data when you visit our website or get in touch.",
  lastUpdated: "2026-09-25",
  sections: [
    {
      id: "who-we-are",
      heading: "Who we are",
      body: [
        {
          type: "p",
          text: "NeuroGrowth (\"NeuroGrowth Tech\", \"we\") of Nairobi, Kenya is the data controller for personal data collected through this website. You can reach us at [info@neurogrowthtech.com](mailto:info@neurogrowthtech.com) or +254 796 382 271.",
        },
      ],
    },
    {
      id: "the-law-we-follow",
      heading: "The law we follow",
      body: [
        {
          type: "p",
          text: "We process personal data in line with the **Kenya Data Protection Act, 2019** and its accompanying regulations.",
        },
      ],
    },
    {
      id: "what-we-collect",
      heading: "What we collect",
      body: [
        {
          type: "p",
          text: "We collect information you provide directly to us when filling out our contact form: your name, email address, phone number (if provided), the topic you select, your message, and the page you submitted it from.",
        },
        {
          type: "p",
          text: "We also receive information when you choose to message us on WhatsApp or write to us by email.",
        },
        {
          type: "p",
          text: "Our hosting provider automatically logs basic technical data required to securely operate and deliver the site, such as IP address, browser type and requested pages. We don't use advertising or tracking cookies on this website.",
        },
      ],
    },
    {
      id: "why-we-use-it",
      heading: "Why we use it",
      body: [
        {
          type: "p",
          text: "We process your personal data for clear, lawful reasons:",
        },
        {
          type: "ul",
          items: [
            "**To reply to your enquiry and prepare a proposal:** based on your consent and steps taken at your request before entering into a contract.",
            "**To run, secure and improve the website:** under our legitimate business interest in delivering reliable, safe digital services.",
            "**To meet legal and accounting obligations:** if you become a client, to comply with statutory Kenyan record-keeping requirements.",
          ],
        },
      ],
    },
    {
      id: "who-we-share-it-with",
      heading: "Who we share it with",
      body: [
        {
          type: "p",
          text: "We only share your data with trusted service providers who process information on our behalf to help run our business: Formspree (for delivering contact form enquiries), Vercel (our website hosting infrastructure), and Meta/WhatsApp when you choose to communicate via WhatsApp.",
        },
        {
          type: "p",
          text: "We never sell, rent or trade your personal data to any third parties.",
        },
        {
          type: "p",
          text: "Links to our products (SmartChama and the Gikuyu AI Translator) take you to separate websites with their own privacy policies.",
        },
      ],
    },
    {
      id: "international-transfers",
      heading: "International transfers",
      body: [
        {
          type: "p",
          text: "Some of our infrastructure providers store data outside Kenya (for example, in cloud facilities in the United States or Europe). Where cross-border transfers occur, we rely on contractual and security safeguards established by our providers, consistent with the requirements of the Kenya Data Protection Act.",
        },
      ],
    },
    {
      id: "how-long-we-keep-it",
      heading: "How long we keep it",
      // TODO(client): confirm retention periods
      body: [
        {
          type: "p",
          text: "Enquiries that do not lead to an active client engagement are retained for up to 12 months and then securely deleted.",
        },
        {
          type: "p",
          text: "Client records and project communications are retained for the duration of the commercial relationship, plus any additional period mandated by Kenyan accounting and tax law.",
        },
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      body: [
        {
          type: "p",
          text: "Under the Kenya Data Protection Act, you have the right to be informed about how your data is used; to request access to your personal data; to object to processing; to request correction of inaccurate data; to request deletion of false or misleading information; and to withdraw consent at any time.",
        },
        {
          type: "p",
          text: "To exercise any of these rights, email us at [info@neurogrowthtech.com](mailto:info@neurogrowthtech.com). We will respond within a reasonable time and may ask you to verify your identity.",
        },
      ],
    },
    {
      id: "complaints",
      heading: "Complaints",
      body: [
        {
          type: "p",
          text: "If you have questions or concerns about how we handle your personal data, please contact us first so we can resolve the matter. You also have the right to lodge a complaint with the **Office of the Data Protection Commissioner (ODPC)** in Kenya at [www.odpc.go.ke](https://www.odpc.go.ke).",
        },
      ],
    },
    {
      id: "security",
      heading: "Security",
      body: [
        {
          type: "p",
          text: "We implement reasonable technical and organisational security measures, including HTTPS encryption in transit and restricted internal access to enquiries. However, no method of transmission over the internet or electronic storage is completely secure.",
        },
      ],
    },
    {
      id: "children",
      heading: "Children",
      body: [
        {
          type: "p",
          text: "Our website and services are intended exclusively for businesses and adult professionals. We do not knowingly collect personal data from children.",
        },
      ],
    },
    {
      id: "changes-to-this-policy",
      heading: "Changes to this policy",
      body: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time. When changes occur, we will update the \"Last updated\" date at the top of this page. Significant modifications will be clearly noted on the site.",
        },
      ],
    },
  ] as LegalSection[],
};
