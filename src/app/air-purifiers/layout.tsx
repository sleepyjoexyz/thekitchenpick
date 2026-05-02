import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Air Purifiers Compared — 2025-2026 | The Kitchen Pick",
    description: "Compare air purifiers for rooms and homes. Detailed specs on HEPA filters, CADR ratings, noise levels, and prices to find the best air purifier for your space.",
    alternates: {
      canonical: "https://www.thekitchenpick.com/air-purifiers",
    },
    openGraph: {
      title: "Best Air Purifiers Compared",
      description: "Data-driven comparison of air purifiers with specs, prices, and ratings.",
      url: "https://www.thekitchenpick.com/air-purifiers",
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
