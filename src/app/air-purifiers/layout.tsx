import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Air Purifiers Compared — 2025-2026 | The Kitchen Pick",
    description: "Compare air purifiers for rooms and homes. Detailed specs on HEPA filters, CADR ratings, noise levels, and prices to find the best air purifier for your space.",
    canonical: "https://thekitchenpick.com/air-purifiers",
    openGraph: {
      title: "Best Air Purifiers Compared",
      description: "Data-driven comparison of air purifiers with specs, prices, and ratings.",
      url: "https://thekitchenpick.com/air-purifiers",
      type: "website",
    },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
