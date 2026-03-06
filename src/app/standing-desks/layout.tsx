import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Standing Desks Compared — 2025-2026 | The Kitchen Pick",
    description: "Compare electric standing desks with height range, motor speed, stability, and smart features. Find the best standing desk for your workspace and budget.",
    canonical: "https://thekitchenpick.com/standing-desks",
    openGraph: {
      title: "Best Standing Desks Compared",
      description: "Data-driven comparison of standing desks with specs, prices, and ratings.",
      url: "https://thekitchenpick.com/standing-desks",
      type: "website",
    },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
