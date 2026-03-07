import { Metadata } from "next";
import RobotVacuumsContent from "./RobotVacuumsContent";

export const metadata: Metadata = {
  title: "Best Robot Vacuums Compared — 2025-2026 | The Kitchen Pick",
  description: "Compare 13 robot vacuums with different navigation and features. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thekitchenpick.com/robot-vacuums",
  },
  openGraph: {
    title: "Best Robot Vacuums Compared",
    description: "Compare 13 robot vacuums with different navigation and features. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thekitchenpick.com/robot-vacuums",
  },
};

export default function Page() {
  return <RobotVacuumsContent />;
}
