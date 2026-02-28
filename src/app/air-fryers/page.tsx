"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { airFryers } from "@/data/air-fryers";
import { AirFryer } from "@/data/air-fryers";
import Link from "next/link";

export default function AirFryersComparison() {
  const [priceRange, setPriceRange] = useState<string>("all");
  const [style, setStyle] = useState<string>("all");
  const [dualZone, setDualZone] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    let result = [...airFryers];

    if (priceRange !== "all") {
      result = result.filter((p) => p.priceRange === priceRange);
    }

    if (style !== "all") {
      const isOven = style === "oven";
      result = result.filter((p) => p.isOvenStyle === isOven);
    }

    if (dualZone !== "all") {
      const hasDual = dualZone === "yes";
      result = result.filter((p) => p.hasDualZone === hasDual);
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      result.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
    }

    return result;
  }, [priceRange, style, dualZone, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Air Fryers",
              href: "/air-fryers",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Air Fryers Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 14 air fryers across all price points, capacities, and
          styles. Compare specifications, features, prices, and ratings to find
          the air fryer that matches your kitchen, budget, and cooking needs.
          Our methodology is based on manufacturer specs, user ratings, and
          real-world performance data.
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
                <option value="budget">Budget (&lt; $150)</option>
                <option value="mid">Mid-Range ($150-$300)</option>
                <option value="premium">Premium (&gt; $300)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Styles</option>
                <option value="basket">Basket</option>
                <option value="oven">Oven-Style</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dual Zone
              </label>
              <select
                value={dualZone}
                onChange={(e) => setDualZone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Dual Zone Only</option>
                <option value="no">Single Zone Only</option>
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
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredProducts.length} of {airFryers.length} air fryers
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
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Capacity (qt)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Wattage
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Max Temp (F)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Dual Zone
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Style
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Presets
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
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {product.capacityQt}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {product.wattage}W
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {product.tempMaxF}°F
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.hasDualZone ? "✓" : "—"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.isOvenStyle ? "Oven" : "Basket"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {product.presets}
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
          Air Fryer Cards
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
          Air Fryer Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/air-fryers/basket-vs-oven-air-fryer">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Basket vs Oven-Style Air Fryers
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Understand the trade-offs between traditional basket-style and
                larger oven-style units. Which design is right for you?
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/air-fryers/best-air-fryers-under-100">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Best Air Fryers Under $100
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Quality air fryers don't have to be expensive. Compare our top
                budget picks and learn what you get at this price point.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/air-fryers/dual-zone-air-fryers-guide">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Dual Zone Air Fryers: Are Two Baskets Better?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Understand how dual zone technology works and whether cooking
                different foods simultaneously is worth the extra cost.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/air-fryers/air-fryer-vs-convection-oven">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Air Fryer vs Convection Oven
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                The surprising truth: air fryers and convection ovens use the
                same technology. Here's what actually separates them.
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
              What's the difference between basket and oven-style air fryers?
            </h3>
            <p className="text-gray-600">
              Basket-style fryers are compact, fast, and budget-friendly but
              limited to air frying. Oven-style units take up more counter space
              but add baking, toasting, and sometimes rotisserie functions. Basket
              fryers crisp faster due to concentrated heat; oven-style units offer
              more versatility. Choose based on your available space and whether
              you want baking/toasting capability.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Do I need dual zone capability?
            </h3>
            <p className="text-gray-600">
              Dual zone is useful if you regularly cook different foods at
              different temperatures simultaneously. If you mostly cook single meals
              or batch-cook one thing at a time, single zone is fine and costs less.
              For families cooking multiple proteins at once, or for meal prep, dual
              zone saves time and hassle.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              How much capacity do I actually need?
            </h3>
            <p className="text-gray-600">
              For 1-2 people: 3-5 quarts is sufficient. For families of 3-4:
              5-8 quarts works well. For 5+ people or frequent meal prep: 8+ quarts
              or dual zone. A larger capacity always helps, but it takes counter
              space. Balance your household size against available kitchen space.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              What wattage should I look for?
            </h3>
            <p className="text-gray-600">
              Most quality air fryers are 1500-2000 watts. Lower wattage (1400W)
              means slightly slower heating and cooking; higher wattage (2000W+)
              means faster crisping. For general use, 1700W is a good sweet spot.
              Wattage matters less than design and air circulation efficiency.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Are expensive air fryers worth it?
            </h3>
            <p className="text-gray-600">
              The jump from $40 to $100 is significant: better build quality, more
              features, longer lifespan. The jump from $100 to $250+ is about
              premium features (app control, rotisserie, oven functions) rather than
              cooking quality. For most users, $80-$130 offers excellent value. Buy
              more expensive only if you need specific features like oven functions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
