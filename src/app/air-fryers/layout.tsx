import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Air Fryers Compared — 2025-2026 | The Kitchen Pick",
    description: "Compare air fryers across all styles and price points. Detailed specs, basket sizes, power ratings, and expert ratings to find your perfect air fryer.",
    alternates: {
      canonical: "https://thekitchenpick.com/air-fryers",
    },
    openGraph: {
      title: "Best Air Fryers Compared",
      description: "Data-driven comparison of air fryers with specs, prices, and ratings.",
      url: "https://thekitchenpick.com/air-fryers",
      type: "website",
    },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
