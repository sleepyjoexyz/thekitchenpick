"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { standingDesks, StandingDesk } from "@/data/standing-desks";
import Link from "next/link";

export default function StandingDesksComparison() {
  const [priceRange, setPriceRange] = useState<string>("all");
  const [deskWidth, setDeskWidth] = useState<string>("all");
  const [motorType, setMotorType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    let result = [...standingDesks];

    if (priceRange !== "all") {
      result = result.filter((p) => p.priceRange === priceRange);
    }

    if (deskWidth !== "all") {
      const targetWidth = parseInt(deskWidth);
      result = result.filter((p) => p.widthInches >= targetWidth);
    }

    if (motorType !== "all") {
      result = result.filter((p) => p.motorType.toLowerCase().includes(motorType.toLowerCase()));
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "capacity") {
      result.sort((a, b) => b.weightCapacityLbs - a.weightCapacityLbs);
    } else {
      result.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
    }

    return result;
  }, [priceRange, deskWidth, motorType, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Standing Desks",
              href: "/standing-desks",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Standing Desks Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 14 standing desks across all price points and features.
          Compare specifications, heights, weight capacities, motor types, and
          ratings to find the standing desk that matches your needs and budget.
          Our methodology is based on manufacturer specs, user ratings, and
          real-world stability and ergonomics testing.
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
                <option value="budget">Budget (&lt; $400)</option>
                <option value="mid">Mid-Range ($400-$800)</option>
                <option value="premium">Premium (&gt; $800)</option>
                <option value="luxury">Luxury (&gt; $1500)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Desk Width
              </label>
              <select
                value={deskWidth}
                onChange={(e) => setDeskWidth(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any Width</option>
                <option value="48">48&quot; or Wider</option>
                <option value="60">60&quot; or Wider</option>
                <option value="72">72&quot; or Wider</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Motor Type
              </label>
              <select
                value={motorType}
                onChange={(e) => setMotorType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any Motor</option>
                <option value="dual">Dual Motor</option>
                <option value="single">Single Motor</option>
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
                <option value="capacity">Weight Capacity: Highest First</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredProducts.length} of {standingDesks.length} standing desks
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
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                  Brand & Model
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Size (W×D)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Height Range
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Weight Capacity
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Motor Type
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Speed (in/s)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Presets
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Warranty
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((desk, idx) => (
                <tr
                  key={desk.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    <Link
                      href={`/standing-desks/${desk.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {desk.brand} {desk.model}
                    </Link>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    ${desk.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {desk.widthInches}×{desk.depthInches}"
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {desk.minHeightInches}-{desk.maxHeightInches}"
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {desk.weightCapacityLbs} lbs
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-sm">
                    {desk.motorType}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {desk.speedInchPerSec}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {desk.memoryPresets}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {desk.warrantyYears}yr
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-medium text-yellow-600">
                    ★ {desk.rating}
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
          Standing Desk Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((desk) => (
            <ProductCard key={desk.id} product={desk as any} />
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Standing Desk Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/standing-desks/single-vs-dual-motor-standing-desks">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Single Motor vs Dual Motor Standing Desks
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Understand the difference between single and dual motor desks.
                Speed, stability, and weight capacity comparison.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/standing-desks/best-standing-desks-under-400">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Best Standing Desks Under $400
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Budget-friendly options that don't sacrifice quality. Compare
                the best affordable standing desks.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/standing-desks/standing-desk-ergonomics-guide">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Standing Desk Ergonomics Setup Guide
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Proper sitting and standing height, monitor positioning, and
                the 20-8-2 rule for healthy desk work.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/standing-desks/standing-desk-stability-test">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Standing Desk Stability & Wobble Analysis
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Why wobble matters, what causes it, and which desk designs are
                most stable at maximum height.
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
              How high should a standing desk be?
            </h3>
            <p className="text-gray-600">
              A standing desk should be set so your elbows are bent at 90
              degrees when you're standing upright. For most people, this is
              38-40 inches high. Your feet should be flat on the floor, and
              your forearms parallel to the ground. The key is maintaining
              neutral posture—no bending forward or reaching up. Monitor height
              should also adjust independently of desk height.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Are dual motor desks really worth it?
            </h3>
            <p className="text-gray-600">
              Dual motors offer 50-100% faster adjustment speed and significantly
              better stability, especially at maximum height. If you adjust your desk
              3+ times daily, the speed improvement is noticeable. For stability,
              wobble can cause eye strain and reduce perceived lifespan. The $200-$300
              price premium is justified for full-time users. For occasional users,
              single motors work fine.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              What weight capacity do I actually need?
            </h3>
            <p className="text-gray-600">
              For one monitor and a laptop, 240-280 lbs capacity is sufficient.
              For two monitors plus equipment, you need 350+ lbs. For three or
              more monitors, printers, books, and heavy equipment, 400+ lbs is
              recommended. Budget desks often have lower capacities, which limits
              what you can place on them. Check your actual load weight before
              assuming you don't need higher capacity.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              How long do standing desks last?
            </h3>
            <p className="text-gray-600">
              Quality standing desks last 7-10 years with proper use. Budget
              models typically last 5-7 years. Longevity depends on motor quality,
              frame thickness, and how often you adjust. Single-motor desks under
              heavy load may experience motor failure sooner. Dual-motor designs
              distribute load better, extending lifespan. Regular maintenance
              (cable management, avoiding spills) extends the life considerably.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Is an anti-fatigue mat necessary?
            </h3>
            <p className="text-gray-600">
              An anti-fatigue mat is highly recommended for anyone standing more
              than 2-3 hours daily. Mats reduce foot and calf fatigue by 10-15%,
              encourage healthy weight shifting, and provide cushioning. Quality
              mats cost $50-$150 and last 5+ years. For short standing periods,
              a mat is nice but not essential. For long hours, it's practically
              a necessity.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Do I need memory presets?
            </h3>
            <p className="text-gray-600">
              Memory presets save your preferred sitting and standing heights,
              allowing instant switching. If you switch frequently (4+ times
              daily), presets are valuable. You can adjust manually without them,
              but it's slower. Budget desks offer 2-3 presets; premium models
              offer 4-6. For most users, 2-3 presets are sufficient if they match
              your actual sitting and standing positions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
