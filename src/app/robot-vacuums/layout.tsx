import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Robot Vacuums Compared — 2025-2026 | The Kitchen Pick",
    description: "Compare robot vacuums with mapping, suction power, mopping, and app control. Detailed specs and ratings to find the best robot vacuum for your home.",
    alternates: {
      canonical: "https://www.thekitchenpick.com/robot-vacuums",
    },
    openGraph: {
      title: "Best Robot Vacuums Compared",
      description: "Data-driven comparison of robot vacuums with specs, prices, and ratings.",
      url: "https://www.thekitchenpick.com/robot-vacuums",
      type: "website",

    images: [
      {
        url: 'https://www.thekitchenpick.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Kitchen Pick',
      },
    ],
    locale: 'en_US',
    siteName: 'The Kitchen Pick',
    },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
