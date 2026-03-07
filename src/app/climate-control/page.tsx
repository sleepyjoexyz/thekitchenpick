import { Metadata } from "next";
import ClimateControlContent from "./ClimateControlContent";

export const metadata: Metadata = {
  title: "Best Climate Control Devices Compared — 2025-2026 | The Kitchen Pick",
  description: "Compare 12 climate control devices including humidifiers, dehumidifiers, and thermostats. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thekitchenpick.com/climate-control",
  },
  openGraph: {
    title: "Best Climate Control Devices Compared",
    description: "Compare 12 climate control devices including humidifiers, dehumidifiers, and thermostats. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thekitchenpick.com/climate-control",
  },
};

export default function Page() {
  return <ClimateControlContent />;
}
