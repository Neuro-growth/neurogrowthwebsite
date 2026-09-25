// DRAFT prepared for review. Have a qualified Kenyan advocate review before launch. Last reviewed: 2026-09-25.

import type { LegalSection } from "@/components/blocks/legal-page";

export const termsOfUse = {
  title: "Terms of Use",
  intro:
    "The rules and conditions governing your access to and use of the NeuroGrowth Tech website.",
  lastUpdated: "2026-09-25",
  sections: [
    {
      id: "about-these-terms",
      heading: "About these terms",
      body: [
        {
          type: "p",
          text: "These terms cover your use of **neurogrowthtech.com**, operated by NeuroGrowth in Nairobi, Kenya. By accessing or browsing this website, you agree to comply with and be bound by these terms.",
        },
      ],
    },
    {
      id: "our-services-and-prices",
      heading: "Our services and prices",
      body: [
        {
          type: "p",
          text: "This website provides general information about our AI engineering studio, systems and software products. Any prices displayed on the site are in Kenyan shillings (KSh) and are indicative.",
        },
        {
          type: "p",
          text: "Information on this website does not constitute a binding commercial offer. A formal engagement exists only once both parties sign a written agreement or approve a formal statement of work and quote, which will govern all deliverables.",
        },
      ],
    },
    {
      id: "using-the-site",
      heading: "Using the site",
      body: [
        {
          type: "p",
          text: "You agree to use this site responsibly. You must not attempt unauthorised access to our systems, disrupt website operations, introduce malicious code, or submit false or misleading contact information.",
        },
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      body: [
        {
          type: "p",
          text: "All website content, visual design, custom graphics, logos, copy and proprietary product names — including **SmartChama** and the **Gikuyu AI Translator** — are the intellectual property of NeuroGrowth or its licensors.",
        },
        {
          type: "p",
          text: "You are welcome to browse the site and share links to our pages. You may not copy, reproduce or repurpose website content for commercial purposes without our prior written consent.",
        },
      ],
    },
    {
      id: "third-party-links-and-services",
      heading: "Third-party links and services",
      body: [
        {
          type: "p",
          text: "Our website contains links to external platforms such as WhatsApp, LinkedIn and Instagram. These links are provided for your convenience. We do not control and are not responsible for the content, security or privacy practices of external third-party services.",
        },
      ],
    },
    {
      id: "no-warranty",
      heading: "No warranty",
      body: [
        {
          type: "p",
          text: "This website is provided on an \"as is\" and \"as available\" basis. While we strive to maintain accurate, up-to-date information, we make no express or implied warranties regarding completeness, accuracy or uninterrupted availability.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "Limitation of liability",
      body: [
        {
          type: "p",
          text: "To the maximum extent permitted under applicable law, NeuroGrowth is not liable for indirect, incidental or consequential damages resulting from your use of this site. Nothing in these terms excludes liability that cannot be excluded under Kenyan law.",
        },
      ],
    },
    {
      id: "privacy",
      heading: "Privacy",
      body: [
        {
          type: "p",
          text: "Your privacy is important to us. Please review our [Privacy Policy](/privacy) to understand how we collect, store and process personal data.",
        },
      ],
    },
    {
      id: "governing-law",
      heading: "Governing law",
      body: [
        {
          type: "p",
          text: "These terms are governed by and construed in accordance with the laws of Kenya. Any disputes arising in connection with the website shall be subject to the exclusive jurisdiction of the courts of Kenya.",
        },
      ],
    },
    {
      id: "changes",
      heading: "Changes",
      body: [
        {
          type: "p",
          text: "We may revise these Terms of Use periodically. The \"Last updated\" date at the top reflects the current version. Continued use of the website following any update signifies your acceptance of the revised terms.",
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      body: [
        {
          type: "p",
          text: "If you have any questions about these terms, contact us at [info@neurogrowthtech.com](mailto:info@neurogrowthtech.com).",
        },
      ],
    },
  ] as LegalSection[],
};
