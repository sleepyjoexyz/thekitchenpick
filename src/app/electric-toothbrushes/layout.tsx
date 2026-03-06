import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Electric Toothbrushes Compared — 2025-2026 | The Kitchen Pick",
    description: "Compare electric toothbrushes with brush type, vibration, smart features, and battery life. Find the best electric toothbrush for your oral health.",
    canonical: "https://thekitchenpick.com/electric-toothbrushes",
    openGraph: {
      title: "Best Electric Toothbrushes Compared",
      description: "Data-driven comparison of electric toothbrushes with specs, prices, and ratings.",
      url: "https://thekitchenpick.com/electric-toothbrushes",
      type: "website",
    },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
