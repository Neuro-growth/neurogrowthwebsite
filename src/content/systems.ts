import type { System } from "./types";

export const systems: System[] = [
  {
    id: "ai-strategy",
    name: "AI Strategy",
    tag: "Start here",
    pill: "Discovery sprint",
    summary:
      "An audit of where AI pays off first in your business, and a 90-day plan to get there.",
    image: {
      src: "/images/art/system-strategy.webp",
      alt: "AI Strategy System Art",
      width: 1200,
      height: 1100,
    },
    services: [
      {
        slug: "ai-strategy-consulting",
        name: "AI Strategy & Consulting",
        oneLiner: "A tailored AI growth roadmap built around your data and goals.",
        description:
          "Before we build anything, we map out a precise AI growth strategy tailored to your business model, data maturity, and competitive landscape.",
        deliverables: [
          "AI readiness audit and gap analysis",
          "Custom AI roadmap and prioritization framework",
          "Technology stack recommendations",
          "ROI projection and business case modeling",
          "90-day and 12-month AI implementation plan",
        ],
      },
    ],
  },
  {
    id: "growth-systems",
    name: "Growth Systems",
    tag: "Grow",
    pill: "WhatsApp · Email · Ads",
    summary:
      "Leads captured, followed up and converted automatically, across every channel you sell on.",
    image: {
      src: "/images/art/system-growth.webp",
      alt: "Growth Systems Art",
      width: 1200,
      height: 1100,
    },
    services: [
      {
        slug: "ai-marketing-automation",
        name: "AI Marketing Automation",
        oneLiner:
          "End-to-end multi-channel marketing workflows that nurture and convert leads 24/7.",
        description:
          "We replace manual, fragmented marketing workflows with intelligent, end-to-end automation systems that run 24/7 — nurturing leads and personalizing outreach at scale.",
        deliverables: [
          "Multi-channel automation workflows (email, SMS, social)",
          "Behavioral trigger campaigns and drip sequences",
          "Lead scoring and routing automation",
          "A/B testing frameworks powered by AI",
          "Integration with HubSpot, Klaviyo, ActiveCampaign, and more",
        ],
      },
      {
        slug: "lead-generation-systems",
        name: "Lead Generation Systems",
        oneLiner:
          "Automated prospecting infrastructure consistently filling your sales pipeline.",
        description:
          "We engineer end-to-end AI-powered lead generation infrastructure that identifies, attracts, qualifies, and converts your ideal customers — consistently filling your pipeline.",
        deliverables: [
          "Ideal customer profile (ICP) modeling with AI",
          "Multi-channel lead generation campaigns",
          "AI-powered lead qualification and scoring",
          "Outbound prospecting automation (LinkedIn, email)",
          "Landing page optimization with AI testing",
        ],
      },
      {
        slug: "ai-content-generation",
        name: "AI Content Generation",
        oneLiner:
          "On-brand marketing and social content produced automatically at scale.",
        description:
          "We deploy AI content systems that produce high-quality, on-brand marketing content at scale — dramatically reducing production time and cost.",
        deliverables: [
          "Brand voice training and AI content guidelines",
          "Automated blog, email, and social content pipelines",
          "AI-powered ad copy generation and testing",
          "SEO-optimized content at scale",
          "Content performance tracking and optimization loops",
        ],
      },
      {
        slug: "digital-advertising-optimization",
        name: "Digital Advertising Optimization",
        oneLiner:
          "Real-time AI bidding and audience targeting across major ad platforms.",
        description:
          "We apply AI to your paid advertising across Meta, Google, LinkedIn, and TikTok — optimizing targeting, creative, bidding, and budget allocation in real time.",
        deliverables: [
          "AI-driven audience targeting and lookalike modeling",
          "Automated creative testing and performance analysis",
          "Smart bidding strategy implementation",
          "Cross-channel budget allocation optimization",
          "Real-time performance dashboards and reporting",
        ],
      },
    ],
  },
  {
    id: "customer-intelligence",
    name: "Customer Intelligence",
    tag: "Serve",
    pill: "Chatbots · CRM",
    summary:
      "Assistants and CRM flows that answer, remember every customer and follow up on time.",
    image: {
      src: "/images/art/system-customer.webp",
      alt: "Customer Intelligence Art",
      width: 1200,
      height: 1100,
    },
    services: [
      {
        slug: "ai-chatbots-customer-support-agents",
        name: "AI Chatbots & Customer Support Agents",
        oneLiner:
          "Intelligent conversational agents handling support, qualification, and sales 24/7.",
        description:
          "We build intelligent conversational AI agents that handle customer support, qualify leads, book appointments, and close sales — operating at scale without additional headcount.",
        deliverables: [
          "Custom-trained AI chatbots (website, WhatsApp, Instagram)",
          "Intelligent FAQ and support ticket deflection",
          "Lead qualification and appointment booking bots",
          "Seamless handoff to human agents when needed",
          "Continuous learning and performance improvement",
        ],
      },
      {
        slug: "crm-automation",
        name: "CRM Automation",
        oneLiner: "Every lead captured, scored and followed up automatically.",
        description:
          "We turn your CRM from a passive database into an active, AI-driven sales and marketing engine — automatically capturing, scoring, routing, and nurturing every contact.",
        deliverables: [
          "Full CRM setup and data architecture (HubSpot, Salesforce)",
          "Automated lead capture and enrichment workflows",
          "AI-powered deal scoring and pipeline management",
          "Automated follow-up sequences and task creation",
          "CRM health audits and data cleanup",
        ],
      },
      {
        slug: "customer-personalization",
        name: "Customer Personalization",
        oneLiner:
          "Real-time dynamic content and product recommendations tailored to every user.",
        description:
          "We deploy AI personalization engines that adapt every customer touchpoint in real time — from website content and product recommendations to email subject lines and ad creative.",
        deliverables: [
          "Dynamic website content personalization",
          "AI-powered product and content recommendation engines",
          "Customer segmentation and micro-targeting",
          "Lifecycle stage personalization systems",
          "Real-time behavioral personalization triggers",
        ],
      },
    ],
  },
  {
    id: "data-prediction",
    name: "Data & Prediction",
    tag: "Predict",
    pill: "Forecasts · Dashboards",
    summary:
      "Models and dashboards that forecast demand, churn and cash flow before they surprise you.",
    image: {
      src: "/images/art/system-data.webp",
      alt: "Data & Prediction Art",
      width: 1200,
      height: 1100,
    },
    services: [
      {
        slug: "predictive-analytics",
        name: "Predictive Analytics",
        oneLiner:
          "Machine learning models forecasting customer churn, lifetime value, and revenue.",
        description:
          "We build machine learning models that transform your historical data into forward-looking intelligence — so you can make faster, more confident decisions.",
        deliverables: [
          "Customer lifetime value (CLV) prediction models",
          "Churn prediction and early warning systems",
          "Revenue forecasting and demand modeling",
          "Propensity-to-buy scoring systems",
          "Custom analytics dashboards with predictive insights",
        ],
      },
      {
        slug: "marketing-analytics-dashboards",
        name: "Marketing Analytics Dashboards",
        oneLiner:
          "Unified real-time KPI dashboards providing a single truth across platforms.",
        description:
          "We build custom, real-time marketing analytics dashboards that unify data from all your platforms — giving you a single source of truth for performance and decision-making.",
        deliverables: [
          "Unified marketing data warehouse and pipeline",
          "Custom KPI dashboards (Looker Studio, Tableau, custom)",
          "Multi-touch attribution modeling",
          "Automated weekly and monthly performance reporting",
          "Anomaly detection and performance alerts",
        ],
      },
    ],
  },
];
