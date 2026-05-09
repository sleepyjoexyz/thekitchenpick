import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Espresso Machines Compared | The Kitchen Pick",
    description: "Compare 15 espresso machines across all price points. Detailed specs, features, prices, and ratings to find the machine that matches your needs and budget.",
    alternates: {
      canonical: "https://www.thekitchenpick.com/espresso-machines",
    },
    openGraph: {
      title: "Best Espresso Machines Compared",
      description: "Data-driven comparison of espresso machines with specs, prices, and ratings.",
      url: "https://www.thekitchenpick.com/espresso-machines",
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
