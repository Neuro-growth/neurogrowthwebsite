export const site = {
  name: "NeuroGrowth Tech",
  legalName: "NeuroGrowth",
  url: "https://neurogrowthtech.com",
  email: "info@neurogrowthtech.com",
  phoneDisplay: "+254 796 382 271",
  phoneE164: "+254796382271",
  whatsappNumber: "254796382271",
  whatsappDefaultText: "Hi NeuroGrowth Tech! I'd like to talk about a project.",
  location: "Nairobi, Kenya",
  address: { locality: "Nairobi", country: "KE" },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/neurogrowthtech/" },
    { label: "Instagram", href: "https://www.instagram.com/neurogrowth.tech" },
  ],
  nav: [
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/insights", label: "Insights" },
  ],
  primaryCta: { href: "/contact", label: "Book a call" },
} as const;

export const waLink = (text: string = site.whatsappDefaultText) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const siteConfig = site;
