import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Security Cameras Compared | The Kitchen Pick",
    description: "Compare security cameras for indoor and outdoor use. Detailed specs on resolution, night vision, smart features, and pricing to protect your home.",
    alternates: {
      canonical: "https://www.thekitchenpick.com/security-cameras",
    },
    openGraph: {
      title: "Best Security Cameras Compared",
      description: "Data-driven comparison of security cameras with specs, prices, and ratings.",
      url: "https://www.thekitchenpick.com/security-cameras",
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
