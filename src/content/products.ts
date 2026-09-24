import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "smartchama",
    name: "SmartChama",
    category: "Fintech · Community savings",
    status: "live",
    tagline: "Chama management that keeps its own books.",
    summary:
      "SmartChama modernizes African community finance by combining mobile money, automated bookkeeping, and AI to help groups save, lend, and grow with confidence. It replaces disputed paper records with a transparent, auditable digital ecosystem that builds member credit history.",
    problem:
      "Chama records live in notebooks and WhatsApp groups. Contributions get disputed, loans are tracked by hand, M-Pesa payments are reconciled manually, and members build no credit history.",
    logo: {
      src: "/images/products/smartchama/logo.webp",
      alt: "SmartChama Logo",
      width: 500,
      height: 500,
    },
    heroImage: {
      src: "/images/products/smartchama/dashboard.webp",
      alt: "SmartChama group dashboard showing total savings, monthly progress and member contributions",
      width: 1376,
      height: 768,
    },
    gallery: [
      {
        src: "/images/products/smartchama/mpesa-payment.webp",
        alt: "M-Pesa contribution confirmed inside SmartChama",
        width: 1376,
        height: 768,
      },
      {
        src: "/images/products/smartchama/loan-approval.webp",
        alt: "Loan approval with interest rate and repayment schedule",
        width: 1376,
        height: 768,
      },
      {
        src: "/images/products/smartchama/merry-go-round.webp",
        alt: "Merry-go-round payout schedule and rotation order",
        width: 1376,
        height: 768,
      },
      {
        src: "/images/products/smartchama/members.webp",
        alt: "Member list with roles, trust scores and contribution streaks",
        width: 1376,
        height: 768,
      },
      {
        src: "/images/products/smartchama/welfare-claim.webp",
        alt: "Emergency welfare claim approved by group officials",
        width: 1376,
        height: 768,
      },
      {
        src: "/images/products/smartchama/statement.webp",
        alt: "Monthly financial statement generated for the group",
        width: 1376,
        height: 768,
      },
      {
        src: "/images/products/smartchama/investment-vote.webp",
        alt: "Group investment proposal with member voting",
        width: 1376,
        height: 768,
      },
      {
        src: "/images/products/smartchama/community.webp",
        alt: "Chama members using SmartChama together",
        width: 1376,
        height: 768,
      },
    ],
    features: [
      {
        icon: "Smartphone",
        title: "M-Pesa & Mobile Integration",
        body: "Direct integration with M-Pesa for instant contribution collection, automated disbursements, and real-time payment alerts.",
      },
      {
        icon: "Receipt",
        title: "Automated Bookkeeping",
        body: "Automatically logs contributions, loans, repayments, and welfare claims with zero spreadsheets and complete audit transparency.",
      },
      {
        icon: "CreditCard",
        title: "Loans & Repayments",
        body: "Automated loan request, approval, and repayment tracking with clear schedules, interest calculations, and default prevention.",
      },
      {
        icon: "Users",
        title: "Merry-Go-Round & Welfare",
        body: "Manages rotational payout schedules, emergency welfare disbursements, and transparent democratic voting for proposals.",
      },
      {
        icon: "MessageSquare",
        title: "AI Financial Assistant on WhatsApp",
        body: "Intelligent conversational assistant helping members check balances, loan eligibility, and contribution history 24/7 on WhatsApp.",
      },
      {
        icon: "ShieldCheck",
        title: "Digital Credit Passport",
        body: "Transforms consistent chama contributions and loan repayments into an auditable credit score and digital credit passport.",
      },
    ],
    howItWorks: [
      {
        title: "Members pay via M-Pesa",
        body: "Contributions and loan repayments are sent directly via STK push or paybill, verified instantly.",
      },
      {
        title: "The ledger updates itself",
        body: "Every shilling is automatically categorized, assigned to member balances, and reflected in real-time statements.",
      },
      {
        title: "Everyone gets a WhatsApp receipt",
        body: "Automated receipts and notifications confirm payments, keeping every member and official completely aligned.",
      },
    ],
    integrations: ["M-Pesa", "WhatsApp", "Supabase", "OpenAI", "PDF statements"],
  },
  {
    slug: "gikuyu-translator",
    name: "Gikuyu AI Translator",
    category: "Language · Education",
    status: "live",
    tagline: "The first AI translator built for Gikuyu.",
    summary:
      "A deep learning language engine enabling real-time, nuanced translation between English, Kiswahili, and Gikuyu. Built to preserve cultural heritage while providing modern educational and communication tools for families, schools, and developers.",
    problem:
      "Generic translators fail on Gikuyu, fewer young people speak it every year, and schools have almost no digital tools for teaching it.",
    logo: {
      src: "/images/products/gikuyu-translator/icon.webp",
      alt: "Gikuyu AI Translator Icon",
      width: 512,
      height: 512,
    },
    heroImage: {
      src: "/images/products/gikuyu-translator/translate.webp",
      alt: "Translation workspace with auto-detect, English and Kiswahili input, Gikuyu output",
      width: 1600,
      height: 1000,
    },
    gallery: [
      {
        src: "/images/products/gikuyu-translator/landing.webp",
        alt: "Gikuyu AI Translator home: the first AI translator built for Gikuyu",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/products/gikuyu-translator/dashboard.webp",
        alt: "Translator dashboard with recent translations and a Gikuyu phrasebook",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/products/gikuyu-translator/text-to-speech.webp",
        alt: "Gikuyu text-to-speech with engine and speed controls",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/products/gikuyu-translator/translate-mobile.webp",
        alt: "Gikuyu AI Translator on a phone",
        width: 1170,
        height: 2532,
      },
    ],
    features: [
      {
        icon: "Languages",
        title: "Real-Time Translation",
        body: "Instantly translates text and documents between English, Kiswahili, and Gikuyu with custom transformer models trained on authentic dialect data.",
      },
      {
        icon: "Volume2",
        title: "Voice & Speech Synthesis",
        body: "Text-to-speech and voice transcription built specifically for Gikuyu phonemes, enabling natural speech playback and audio learning.",
      },
      {
        icon: "BookOpen",
        title: "Cultural Context Engine",
        body: "Understands traditional Gikuyu idioms, proverbs, and tonal nuances that generic translation engines misunderstand or discard.",
      },
      {
        icon: "GraduationCap",
        title: "Education Integration",
        body: "Provides vocabulary builders, pronunciation models, and curriculum-aligned modules for schools, teachers, and language learners.",
      },
      {
        icon: "Code",
        title: "WhatsApp & API Access",
        body: "Enables developers and businesses to embed Gikuyu translation directly into customer support chats, applications, and public services.",
      },
      {
        icon: "Globe",
        title: "Multi-Language Expansion",
        body: "Expanding architecture to support Swahili, Luo, Kalenjin, and other indigenous African languages on the same core platform.",
      },
    ],
    howItWorks: [
      {
        title: "Type, paste or speak",
        body: "Input phrases in English, Kiswahili, or Gikuyu via text, document upload, or microphone voice input.",
      },
      {
        title: "AI translates with context",
        body: "Our fine-tuned transformer engine resolves grammatical structure, idiom meaning, and proper dialect spelling.",
      },
      {
        title: "Hear it spoken in Gikuyu",
        body: "Read accurate vernacular text with diacritics or listen to natural speech synthesis calibrated to native speakers.",
      },
    ],
    integrations: ["English", "Kiswahili", "Gikuyu", "Text-to-speech", "REST API"],
    sampleContent: [
      {
        label: "From the app's phrasebook",
        source: "Where is the train station?",
        target: "Kîtesheni kîa mûtambo wa kîrî nî kû?",
      },
      {
        label: "From the app's phrasebook",
        source: "I would like a coffee, please.",
        target: "Nîngwenda kahûa, thaitî.",
      },
      {
        label: "From the app's phrasebook",
        source: "How much does this cost?",
        target: "Gîthani gîkî nî mbeca thigana?",
      },
    ],
  },
];
