export type ImageRef = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Service = {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  deliverables: string[];
};

export type System = {
  id: "ai-strategy" | "growth-systems" | "customer-intelligence" | "data-prediction";
  name: string;
  tag: string;
  pill: string;
  summary: string;
  image: ImageRef;
  services: Service[];
};

export type ProductStatus = "live" | "pilot" | "in-development";

export type Product = {
  slug: "smartchama" | "gikuyu-translator";
  name: string;
  category: string;
  status: ProductStatus;
  tagline: string;
  summary: string;
  problem: string;
  logo: ImageRef;
  heroImage: ImageRef;
  gallery: ImageRef[];
  features: { icon: string; title: string; body: string }[];
  howItWorks: { title: string; body: string }[];
  integrations: string[];
  sampleContent?: { label: string; source: string; target: string }[];
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo?: ImageRef;
  initials: string;
  linkedin?: string;
};

export type Stat = {
  value: string;
  caret?: boolean;
  caption: string;
  verified: boolean;
  source?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  permission: boolean;
};

export type Plan = {
  id: "starter" | "growth" | "enterprise";
  name: string;
  fit: string;
  priceKsh: number | null;
  period: "month";
  features: string[];
  notIncluded: string[];
  featured: boolean;
  cta: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type Step = {
  n: string;
  title: string;
  body: string;
  duration: string;
};

export type Value = {
  num: string;
  title: string;
  body: string;
};

