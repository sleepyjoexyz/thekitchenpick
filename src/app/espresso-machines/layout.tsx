import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Espresso Machines Compared — 2025-2026 | The Kitchen Pick",
    description: "Compare 15 espresso machines across all price points. Detailed specs, features, prices, and ratings to find the machine that matches your needs and budget.",
    alternates: {
      canonical: "https://thekitchenpick.com/espresso-machines",
    },
    openGraph: {
      title: "Best Espresso Machines Compared",
      description: "Data-driven comparison of espresso machines with specs, prices, and ratings.",
      url: "https://thekitchenpick.com/espresso-machines",
      type: "website",
    },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
