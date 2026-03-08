import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Massage Guns Compared — 2025-2026 | The Kitchen Pick",
    description: "Compare massage guns for muscle recovery, percussion speed, and battery life. Find the best massage gun for athletes and recovery.",
    alternates: {
      canonical: "https://www.thekitchenpick.com/massage-guns",
    },
    openGraph: {
      title: "Best Massage Guns Compared",
      description: "Data-driven comparison of massage guns with specs, prices, and ratings.",
      url: "https://www.thekitchenpick.com/massage-guns",
      type: "website",
    },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
