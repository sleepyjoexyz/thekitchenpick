import { Metadata } from "next";
import ElectricToothbrushesContent from "./ElectricToothbrushesContent";

export const metadata: Metadata = {
  title: "Best Electric Toothbrushes Compared — 2025-2026 | The Kitchen Pick",
  description: "Compare 12 electric toothbrushes across all types and price points. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thekitchenpick.com/electric-toothbrushes",
  },
  openGraph: {
    title: "Best Electric Toothbrushes Compared",
    description: "Compare 12 electric toothbrushes across all types and price points. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thekitchenpick.com/electric-toothbrushes",
  },
};

export default function Page() {
  return <ElectricToothbrushesContent />;
}
