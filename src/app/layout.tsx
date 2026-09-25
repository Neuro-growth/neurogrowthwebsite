import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { SiteFooter } from "@/components/site/site-footer";
import { StickyNav } from "@/components/site/sticky-nav";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NeuroGrowth Tech — AI Systems for African Businesses",
    template: "%s | NeuroGrowth Tech",
  },
  description:
    "NeuroGrowth Tech builds custom AI systems, chatbots, and automation for African businesses, wired into M-Pesa and WhatsApp to scale revenue.",
  keywords: [
    "AI solutions Africa",
    "AI engineering Africa",
    "AI for business Africa",
    "marketing automation Africa",
    "AI chatbots Africa",
    "predictive analytics Africa",
    "CRM automation",
    "AI strategy consulting",
    "business intelligence AI",
    "NeuroGrowth Tech",
    "AI growth systems",
    "African AI company",
    "machine learning Africa",
    "AI transformation",
    "digital transformation Africa",
  ],
  authors: [{ name: "NeuroGrowth Tech", url: "https://neurogrowthtech.com" }],
  creator: "NeuroGrowth Tech",
  publisher: "NeuroGrowth Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neurogrowthtech.com",
    siteName: "NeuroGrowth Tech",
    title: "NeuroGrowth Tech — AI Systems for African Businesses",
    description:
      "We build AI solutions that automate operations, accelerate growth, and transform how African businesses work — from AI marketing systems to custom AI products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroGrowth Tech — AI Systems for African Businesses",
    description:
      "We build AI solutions that automate, predict and scale your business across Africa.",
  },
  metadataBase: new URL("https://neurogrowthtech.com"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(geistSans.variable, "font-sans")}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <StructuredData />
        <main id="main">{children}</main>
        <SiteFooter />
        <StickyNav />
        <WhatsAppButton />
      </body>
    </html>
  );
}
