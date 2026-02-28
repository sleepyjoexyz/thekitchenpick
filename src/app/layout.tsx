import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    "Compare kitchen appliances side-by-side with detailed specs, prices, and features. No sponsored rankings, no fake reviews—just data.",
  keywords: [
    "espresso machine comparison",
    "kitchen appliances",
    "product comparison",
    "appliance reviews",
  ],
  openGraph: {
    title: "The Kitchen Pick",
    description:
      "Data-driven comparisons of kitchen appliances. Compare specs, prices, and features.",
    url: "https://thekitchenpick.com",
    siteName: "The Kitchen Pick",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://thekitchenpick.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="canonical"
          href="https://thekitchenpick.com"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
