import { Metadata } from "next";
import EspressoMachinesContent from "./EspressoMachinesContent";

export const metadata: Metadata = {
  title: "Best Espresso Machines Compared — 2025-2026 | The Kitchen Pick",
  description: "Compare 15 espresso machines across all price points. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thekitchenpick.com/espresso-machines",
  },
  openGraph: {
    title: "Best Espresso Machines Compared",
    description: "Compare 15 espresso machines across all price points. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thekitchenpick.com/espresso-machines",
  },
};

export default function Page() {
  return <EspressoMachinesContent />;
}
