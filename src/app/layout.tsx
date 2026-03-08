import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebSiteSchema } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thekitchenpick.com"),
  title: "The Kitchen Pick — Data-Driven Kitchen Appliance Comparisons",
  description:
    "Compare kitchen appliances side-by-side with detailed specs, prices, and features. Explore espresso machines, air fryers, air purifiers, electric toothbrushes, standing desks, massage guns, robot vacuums, and security cameras. No sponsored rankings, no fake reviews—just data.",
  keywords: [
    "espresso machine comparison",
    "kitchen appliances",
    "product comparison",
    "appliance reviews",
    "air fryer comparison",
    "air purifier reviews",
    "electric toothbrush comparison",
    "standing desk comparison",
    "massage gun reviews",
    "robot vacuum comparison",
    "security camera comparison",
    "kitchen gadgets",
    "smart home devices",
    "home appliance comparison",
    "appliance buying guide",
  ],
  openGraph: {
    title: "The Kitchen Pick",
    description:
      "Data-driven comparisons of kitchen appliances. Compare specs, prices, and features.",
    url: "https://thekitchenpick.com",
    siteName: "The Kitchen Pick",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Kitchen Pick - Data-Driven Kitchen Appliance Comparisons",
      },
    ],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <WebSiteSchema />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
