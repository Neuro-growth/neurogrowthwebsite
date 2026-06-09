import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: 'NeuroGrowth Tech — AI Solutions & Engineering for African Businesses',
    template: '%s | NeuroGrowth Tech',
  },
  description: 'NeuroGrowth Tech builds AI solutions and engineering systems for African businesses. We automate operations, accelerate growth, and transform business performance through custom AI — from marketing automation and predictive analytics to AI chatbots, CRM systems, and data intelligence.',
  keywords: [
    'AI solutions Africa', 'AI engineering Africa', 'AI for business Africa',
    'marketing automation Africa', 'AI chatbots Africa', 'predictive analytics Africa',
    'CRM automation', 'AI strategy consulting', 'business intelligence AI',
    'NeuroGrowth Tech', 'AI growth systems', 'African AI company',
    'machine learning Africa', 'AI transformation', 'digital transformation Africa',
  ],
  authors: [{ name: 'NeuroGrowth Tech', url: 'https://neurogrowthtech.com' }],
  creator: 'NeuroGrowth Tech',
  publisher: 'NeuroGrowth Tech',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neurogrowthtech.com',
    siteName: 'NeuroGrowth Tech',
    title: 'NeuroGrowth Tech — AI Solutions & Engineering for African Businesses',
    description: 'We build AI solutions that automate operations, accelerate growth, and transform how African businesses work — from AI marketing systems to custom AI products.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NeuroGrowth Tech — AI Solutions for African Businesses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuroGrowth Tech — AI Solutions for African Businesses',
    description: 'We build AI solutions that automate, predict and scale your business across Africa.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://neurogrowthtech.com' },
  verification: { google: 'your-google-verification-code' },
  metadataBase: new URL('https://neurogrowthtech.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
