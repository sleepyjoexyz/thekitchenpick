import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Climate Control Devices Compared — 2025-2026 | The Kitchen Pick",
    description: "Compare humidifiers, dehumidifiers, and portable heaters. Find the best climate control device for your home and comfort needs.",
    alternates: {
      canonical: "https://thekitchenpick.com/climate-control",
    },
    openGraph: {
      title: "Best Climate Control Devices Compared",
      description: "Data-driven comparison of climate control devices with specs, prices, and ratings.",
      url: "https://thekitchenpick.com/climate-control",
      type: "website",
    },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
