import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Security Cameras Compared — 2025-2026 | The Kitchen Pick",
    description: "Compare security cameras for indoor and outdoor use. Detailed specs on resolution, night vision, smart features, and pricing to protect your home.",
    alternates: {
      canonical: "https://www.thekitchenpick.com/security-cameras",
    },
    openGraph: {
      title: "Best Security Cameras Compared",
      description: "Data-driven comparison of security cameras with specs, prices, and ratings.",
      url: "https://www.thekitchenpick.com/security-cameras",
      type: "website",
    },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
