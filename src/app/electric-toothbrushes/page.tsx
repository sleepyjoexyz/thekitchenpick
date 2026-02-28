"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { electricToothbrushes } from "@/data/electric-toothbrushes";
import { ElectricToothbrush } from "@/data/electric-toothbrushes";
import Link from "next/link";

export default function ElectricToothbrushesComparison() {
  const [priceRange, setPriceRange] = useState<string>("all");
  const [brushType, setBrushType] = useState<string>("all");
  const [hasApp, setHasApp] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    let result = [...electricToothbrushes];

    if (priceRange !== "all") {
      result = result.filter((p) => p.priceRange === priceRange);
    }

    if (brushType !== "all") {
      result = result.filter((p) => p.type === brushType);
    }

    if (hasApp !== "all") {
      const hasAppFeature = hasApp === "yes";
      result = result.filter((p) => p.hasApp === hasAppFeature);
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "battery") {
      result.sort((a, b) => b.batteryDays - a.batteryDays);
    } else {
      result.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
    }

    return result;
  }, [priceRange, brushType, hasApp, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Electric Toothbrushes",
              href: "/electric-toothbrushes",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Electric Toothbrushes Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 13 electric toothbrushes across all price points, types,
          and brands. Compare specifications, features, prices, and ratings to
          find the electric toothbrush that matches your budget, brushing style,
          and oral health needs. Our methodology is based on manufacturer specs,
          user ratings, and dental industry standards.
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-bold text-lg text-gray-900 mb-6">Filters & Sort</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Prices</option>
                <option value="budget">Budget (&lt; $100)</option>
                <option value="mid">Mid-Range ($100-$200)</option>
                <option value="premium">Premium (&gt; $200)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brush Type
              </label>
              <select
                value={brushType}
                onChange={(e) => setBrushType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any Type</option>
                <option value="oscillating">Oscillating</option>
                <option value="sonic">Sonic</option>
                <option value="ultrasonic">Ultrasonic</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                App Control
              </label>
              <select
                value={hasApp}
                onChange={(e) => setHasApp(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">With App</option>
                <option value="no">No App</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="battery">Battery Life: Longest First</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredProducts.length} of {electricToothbrushes.length} electric toothbrushes
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Full Comparison Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                  Brand & Model
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                  Type
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Movements/Min
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Modes
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Timer
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Pressure Sensor
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Battery (days)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Head Cost
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Rating
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Amazon
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr
                  key={product.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    <strong>{product.brand}</strong> {product.model}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    ${product.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-left">
                    {product.type === "oscillating"
                      ? "Oscillating"
                      : product.type === "sonic"
                        ? "Sonic"
                        : "Ultrasonic"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {product.brushMovements.toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {product.cleaningModes}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.timer ? "✓" : "—"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.pressureSensor ? "✓" : "—"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {product.batteryDays}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    ${product.replacementHeadCost}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right font-bold">
                    {product.rating.toFixed(1)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.amazonAsin ? (
                      <a
                        href={`https://amazon.com/dp/${product.amazonAsin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Link
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Electric Toothbrush Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Electric Toothbrush Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/electric-toothbrushes/sonic-vs-oscillating-toothbrush">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Sonic vs Oscillating: Which Cleans Better?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Compare the two main electric toothbrush technologies. Learn how
                each works, clinical evidence, and which is gentler on gums.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/electric-toothbrushes/best-electric-toothbrushes-under-100">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Best Electric Toothbrushes Under $100
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Find great electric toothbrushes on a budget. Compare top picks
                and see what features actually matter at this price point.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/electric-toothbrushes/electric-toothbrush-replacement-head-costs">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                The Hidden Cost: Replacement Heads
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Calculate the true cost of ownership including replacement heads.
                See how annual costs differ by brand and model.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/electric-toothbrushes/do-you-need-a-smart-toothbrush">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Smart Toothbrushes: Worth It or Gimmick?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                What do app-connected toothbrushes really do? Learn which smart
                features matter and who should upgrade.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              What's the difference between sonic and oscillating toothbrushes?
            </h3>
            <p className="text-gray-600">
              Oscillating toothbrushes (Oral-B) move the brush head back and
              forth in a scrubbing motion, similar to manual brushing but much
              faster. Sonic toothbrushes (Sonicare) vibrate at ultrasonic speeds
              to remove plaque. Oscillating toothbrushes remove slightly more
              plaque in lab tests, but sonic feels gentler. Real-world cleaning
              is excellent with both when used correctly.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Is a pressure sensor really necessary?
            </h3>
            <p className="text-gray-600">
              A pressure sensor prevents gum damage if you tend to brush too
              hard. It's especially useful for those with sensitive gums or a
              history of gum recession. Most modern models include one now. If
              you brush gently and have healthy gums, it's less critical.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Do I need an app-connected toothbrush?
            </h3>
            <p className="text-gray-600">
              Smart toothbrushes with apps track brushing duration, pressure, and
              coverage. They're useful if you under-brush or need motivation to
              brush for a full 2 minutes. If you already brush well, the app adds
              $100-$150 in cost without improving your dental health. Skip it
              unless you respond well to gamification and data tracking.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              How much does it cost to maintain an electric toothbrush?
            </h3>
            <p className="text-gray-600">
              Replacement heads should be changed every 3 months. Cost varies by
              brand: $3-$4 per head (AquaSonic, budget Oral-B) to $7+ per head
              (premium models). Over 5 years with 4-month replacements (15 heads),
              expect $45-$105 in replacement head costs. Budget brands cost $50
              total; premium brands cost $150+.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              What's the best budget electric toothbrush?
            </h3>
            <p className="text-gray-600">
              AquaSonic Black Series ($40) offers the best value: sonic vibration,
              pressure sensor, 21-day battery, and 3 modes. For Oral-B fans: iO
              Series 4 ($80). For Sonicare fans: ProtectiveClean 6100 ($100).
              All three clean teeth well and cost significantly less than
              premium models.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Can I use generic replacement heads?
            </h3>
            <p className="text-gray-600">
              Oral-B has third-party options at $2-$3 per head (vs $4-$6 for
              official). They work fine. Sonicare is proprietary; stick with
              official heads. Budget brands (AquaSonic, Quip, Bruush) offer only
              official replacements. Generic Oral-B heads save money long-term.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              How long do electric toothbrushes last?
            </h3>
            <p className="text-gray-600">
              With proper care, an electric toothbrush handle lasts 3-5 years.
              You'll replace heads every 3 months, but the motor should keep
              working. Premium models (Oral-B iO, Sonicare DiamondClean) often
              last 5-7 years. Budget models last 2-4 years. Rinsing after each
              use and keeping it dry extends lifespan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
