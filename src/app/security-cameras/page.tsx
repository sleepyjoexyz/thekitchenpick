import { Metadata } from "next";
import SecurityCamerasContent from "./SecurityCamerasContent";

export const metadata: Metadata = {
  title: "Best Security Cameras Compared — 2025-2026 | The Kitchen Pick",
  description: "Compare 13 security cameras with wired, battery, and solar options. Detailed specs, prices, ratings, and buying guide.",
  alternates: {
    canonical: "https://thekitchenpick.com/security-cameras",
  },
  openGraph: {
    title: "Best Security Cameras Compared",
    description: "Compare 13 security cameras with wired, battery, and solar options. Detailed specs, prices, ratings, and buying guide.",
    type: "website",
    url: "https://thekitchenpick.com/security-cameras",
  },
};

export default function Page() {
  return <SecurityCamerasContent />;
}
