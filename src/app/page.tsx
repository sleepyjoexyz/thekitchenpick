import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Kitchen Pick — Data-Driven Home & Kitchen Comparisons",
  description:
    "Compare home and kitchen products side-by-side with detailed specs and prices. Espresso machines, robot vacuums, air purifiers, standing desks, and more. No sponsored rankings. Just data.",
  alternates: {
    canonical: "https://www.thekitchenpick.com",
  },
  openGraph: {
    title: "The Kitchen Pick",
    description: "Data-driven comparisons of home and kitchen products",
    type: "website",
    url: "https://www.thekitchenpick.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Kitchen Pick - Data-Driven Kitchen Appliance Comparisons",
      },
    ],
  },
};

const categories = [
  {
    name: "Espresso Machines",
    href: "/espresso-machines",
    emoji: "\u2615",
    color: "from-amber-100 to-amber-50",
    count: 15,
    description:
      "Compare 15 espresso machines from budget to luxury. Semi-automatic, super-automatic, and pod systems.",
  },
  {
    name: "Air Fryers",
    href: "/air-fryers",
    emoji: "\uD83C\uDF5F",
    color: "from-orange-100 to-orange-50",
    count: 14,
    description:
      "Compare 14 air fryers — basket, oven-style, and dual zone models from $40 to $350.",
  },
  {
    name: "Robot Vacuums",
    href: "/robot-vacuums",
    emoji: "\uD83E\uDDF9",
    color: "from-blue-100 to-blue-50",
    count: 13,
    description:
      "Compare 13 robot vacuums with LiDAR, camera, and gyroscope navigation. Self-emptying and mopping models.",
  },
  {
    name: "Air Purifiers",
    href: "/air-purifiers",
    emoji: "\uD83C\uDF2C\uFE0F",
    color: "from-sky-100 to-sky-50",
    count: 13,
    description:
      "Compare 13 air purifiers by CADR, filter type, noise level, and annual filter cost.",
  },
  {
    name: "Standing Desks",
    href: "/standing-desks",
    emoji: "\uD83E\uDDD1\u200D\uD83D\uDCBB",
    color: "from-green-100 to-green-50",
    count: 14,
    description:
      "Compare 14 standing desks — single motor, dual motor, and manual options from $160 to $800.",
  },
  {
    name: "Security Cameras",
    href: "/security-cameras",
    emoji: "\uD83D\uDCF7",
    color: "from-red-100 to-red-50",
    count: 13,
    description:
      "Compare 13 security cameras — wired, battery, and solar options from $20 to $250.",
  },
  {
    name: "Electric Toothbrushes",
    href: "/electric-toothbrushes",
    emoji: "\uD83E\uDEB7",
    color: "from-teal-100 to-teal-50",
    count: 14,
    description:
      "Compare 14 electric toothbrushes — sonic vs oscillating, with replacement head cost analysis.",
  },
  {
    name: "Massage Guns",
    href: "/massage-guns",
    emoji: "\uD83D\uDCAA",
    color: "from-purple-100 to-purple-50",
    count: 13,
    description:
      "Compare 13 massage guns by stall force, amplitude, noise, and battery life.",
  },
  {
    name: "Climate Control",
    href: "/climate-control",
    emoji: "\u2744\uFE0F",
    color: "from-cyan-100 to-cyan-50",
    count: 14,
    description:
      "Compare 14 portable ACs and space heaters by BTU, room size, noise, and energy rating.",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Kitchen Pick
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Data-Driven Home & Kitchen Comparisons
            </p>
            <p className="text-lg text-gray-700 font-medium mb-2">
              Compare before you buy. Every spec verified. No sponsored rankings.
            </p>
            <p className="text-gray-600 mb-8">
              We compare specs, prices, and features so you don&apos;t have to.
            </p>

            {/* Stats Section */}
            <div className="bg-white border border-gray-200 rounded-lg inline-block px-8 py-6 mb-2">
              <p className="text-sm text-gray-600 font-medium">
                <span className="text-2xl font-bold text-blue-600">9</span> categories &middot;
                <span className="text-2xl font-bold text-blue-600 ml-2">120+</span> products &middot;
                <span className="text-2xl font-bold text-blue-600 ml-2">36</span> in-depth guides
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How We Compare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Research Every Spec</h3>
              <p className="text-gray-600">
                We analyze detailed specifications, features, and technical data from official sources and verified retailers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Side-by-Side Comparison</h3>
              <p className="text-gray-600">
                Compare features, prices, and performance across multiple products in easy-to-read comparison tables.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">You Decide — No Bias</h3>
              <p className="text-gray-600">
                We never accept sponsorships or promotional payments. Your decision is based on unbiased facts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Browse Comparisons
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href}>
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-6 flex-shrink-0 border-b border-gray-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {cat.count}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">Products compared</p>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm mb-6 flex-grow">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                    Compare <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            About The Kitchen Pick
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Kitchen Pick is a data-driven comparison platform for home and
              kitchen products. We believe you deserve clear, unbiased
              information to make smart purchasing decisions.
            </p>
            <p>
              Every product comparison on our site is built from verified
              specifications and real user data. We don&apos;t accept sponsorships,
              advertising, or promotional payments. Our rankings and
              recommendations are based entirely on specs and facts.
            </p>
            <p>
              From espresso machines to robot vacuums, standing desks to security
              cameras — we provide the data you need to compare features,
              prices, and performance side-by-side across 9 product categories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
