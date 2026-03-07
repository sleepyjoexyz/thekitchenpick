import { Metadata } from "next";
import MassageGunsContent from "./MassageGunsContent";

export const metadata: Metadata = {
  title: "Best Massage Guns Compared — 2025-2026 | The Kitchen Pick",
  description: "Compare 12 massage guns across all power levels and price points. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thekitchenpick.com/massage-guns",
  },
  openGraph: {
    title: "Best Massage Guns Compared",
    description: "Compare 12 massage guns across all power levels and price points. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thekitchenpick.com/massage-guns",
  },
};

export default function Page() {
  return <MassageGunsContent />;
}
