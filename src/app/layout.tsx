import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NeuroGrowth Tech — AI Solutions & Marketing Engineering",
    template: "%s — NeuroGrowth Tech",
  },
  description:
    "NeuroGrowth Tech builds AI-powered growth systems that transform marketing, automate customer journeys, and increase ROI for growth-focused businesses.",
  keywords: [
    "AI marketing",
    "marketing automation",
    "AI strategy",
    "predictive analytics",
    "CRM automation",
    "AI chatbots",
    "lead generation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
