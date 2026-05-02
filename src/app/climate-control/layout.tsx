import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Climate Control Devices Compared — 2025-2026 | The Kitchen Pick",
    description: "Compare humidifiers, dehumidifiers, and portable heaters. Find the best climate control device for your home and comfort needs.",
    alternates: {
      canonical: "https://www.thekitchenpick.com/climate-control",
    },
    openGraph: {
      title: "Best Climate Control Devices Compared",
      description: "Data-driven comparison of climate control devices with specs, prices, and ratings.",
      url: "https://www.thekitchenpick.com/climate-control",
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
