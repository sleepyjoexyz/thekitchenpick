import { Metadata } from "next";
import AirFryersContent from "./AirFryersContent";

export const metadata: Metadata = {
  title: "Best Air Fryers Compared — 2025-2026 | The Kitchen Pick",
  description: "Compare 14 air fryers across all types and price points. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thekitchenpick.com/air-fryers",
  },
  openGraph: {
    title: "Best Air Fryers Compared",
    description: "Compare 14 air fryers across all types and price points. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thekitchenpick.com/air-fryers",
  },
};

export default function Page() {
  return <AirFryersContent />;
}
