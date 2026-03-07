import { Metadata } from "next";
import StandingDesksContent from "./StandingDesksContent";

export const metadata: Metadata = {
  title: "Best Standing Desks Compared — 2025-2026 | The Kitchen Pick",
  description: "Compare 14 standing desks with different motor types and sizes. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thekitchenpick.com/standing-desks",
  },
  openGraph: {
    title: "Best Standing Desks Compared",
    description: "Compare 14 standing desks with different motor types and sizes. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thekitchenpick.com/standing-desks",
  },
};

export default function Page() {
  return <StandingDesksContent />;
}
