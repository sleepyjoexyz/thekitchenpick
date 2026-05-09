import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Electric Toothbrushes Compared | The Kitchen Pick",
    description: "Compare electric toothbrushes with brush type, vibration, smart features, and battery life. Find the best electric toothbrush for your oral health.",
    alternates: {
      canonical: "https://www.thekitchenpick.com/electric-toothbrushes",
    },
    openGraph: {
      title: "Best Electric Toothbrushes Compared",
      description: "Data-driven comparison of electric toothbrushes with specs, prices, and ratings.",
      url: "https://www.thekitchenpick.com/electric-toothbrushes",
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
