"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { robotVacuums } from "@/data/robot-vacuums";
import { RobotVacuum } from "@/data/robot-vacuums";
import Link from "next/link";

export default function RobotVacuumsComparison() {
  const [priceRange, setPriceRange] = useState<string>("all");
  const [selfEmpty, setSelfEmpty] = useState<string>("all");
  const [mopping, setMopping] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    let result = [...robotVacuums];

    if (priceRange !== "all") {
      result = result.filter((p) => p.priceRange === priceRange);
    }

    if (selfEmpty !== "all") {
      const hasSelfEmpty = selfEmpty === "yes";
      result = result.filter((p) => p.selfEmpty === hasSelfEmpty);
    }

    if (mopping !== "all") {
      const hasMopping = mopping === "yes";
      result = result.filter((p) => p.mopping === hasMopping);
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "suction") {
      result.sort((a, b) => b.suctionPa - a.suctionPa);
    } else {
      result.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
    }

    return result;
  }, [priceRange, selfEmpty, mopping, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Robot Vacuums",
              href: "/robot-vacuums",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Robot Vacuums Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 13 robot vacuums across all price points and
          capabilities. Compare specifications, features, prices, and ratings to
          find the vacuum that matches your home size, budget, and cleaning
          needs. Our methodology is based on manufacturer specs, user ratings,
          and real-world performance data.
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
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Self-Emptying
              </label>
              <select
                value={selfEmpty}
                onChange={(e) => setSelfEmpty(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Self-Emptying Only</option>
                <option value="no">Manual Empty</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mopping
              </label>
              <select
                value={mopping}
                onChange={(e) => setMopping(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Vacuum + Mop</option>
                <option value="no">Vacuum Only</option>
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
                <option value="suction">Suction: Strongest First</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredProducts.length} of {robotVacuums.length} robot vacuums
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Vacuum Cards
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
          Robot Vacuum Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/robot-vacuums/lidar-vs-camera-navigation">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                LiDAR vs Camera Navigation
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Understand the differences between LiDAR, camera, and gyroscope
                navigation systems and which works best for your home.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/robot-vacuums/best-robot-vacuums-under-500">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Best Under $500
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Compare budget and mid-range robot vacuums with honest
                trade-off analysis for smart shopping.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/robot-vacuums/self-emptying-robot-vacuums-worth-it">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Self-Emptying: Worth It?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Analyze whether self-emptying bases justify the $100-$300
                premium cost with honest ROI analysis.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/robot-vacuums/robot-vacuum-mop-combo-guide">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Vacuum-Mop Combos: Do They Work?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Evaluate whether robot vacuum-mop combos effectively clean or if
                they're a gimmick.
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
              How much suction power do I actually need?
            </h3>
            <p className="text-gray-600">
              Suction power is measured in Pa (pascals). Budget vacuums offer
              650-2700 Pa, mid-range 3000-4200 Pa, and premium 5000+ Pa. For
              hard floors, 2700 Pa is adequate. For carpets and pet hair, aim
              for 3500+ Pa. Premium suction (5000+) handles all floor types and
              pet hair effectively. More suction also means better pick-up of
              small debris.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              What's the difference between LiDAR and camera navigation?
            </h3>
            <p className="text-gray-600">
              LiDAR uses infrared lasers for fast, accurate mapping that works
              in darkness. It's ideal for complex floor plans and large homes.
              Camera navigation uses AI to recognize objects and avoid obstacles,
              excelling at detecting hazards but slower to map. Gyroscope
              navigation is the cheapest but uses random patterns and drifts
              over time. For most homes, LiDAR is fastest and most efficient.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Do robot vacuums work on multiple floor levels?
            </h3>
            <p className="text-gray-600">
              Robot vacuums cannot climb stairs—this is a fundamental
              limitation. However, most can map multiple floors separately. You
              manually move the vacuum to the second floor, and it maps and
              cleans independently. Multi-floor mapping allows the robot to
              remember layouts of different floors and switch between them via
              app control. Budget gyroscope models don't support true multi-floor
              mapping.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              How often do I need to empty the dustbin?
            </h3>
            <p className="text-gray-600">
              Without self-emptying, expect to empty the dustbin every 2-4 days
              depending on home size and pet hair. With self-emptying bases, you
              empty a larger sealed bag every 30-60 days. For pet owners or
              large homes (2000+ sq ft), self-emptying significantly reduces
              maintenance frequency. For small apartments, manual emptying is
              manageable.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Can robot vacuums replace handheld vacuums?
            </h3>
            <p className="text-gray-600">
              Robot vacuums excel at continuous floor maintenance but don't
              replace handheld vacuums for stairs, furniture, corners, and
              quick spot-cleaning. Most households benefit from a robot for
              daily/weekly floor maintenance plus a handheld for targeted
              cleaning. Robot vacuums handle 70-80% of typical household
              vacuuming needs.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Are robot vacuums worth it for pet owners?
            </h3>
            <p className="text-gray-600">
              Yes, especially with self-emptying bases and strong suction
              (4000+ Pa). Pet hair accumulates quickly, so self-empty bases
              reduce maintenance by 70-80%. High-suction models handle pet hair
              better than budget options. Best for pet owners: Roborock S8 Pro
              Ultra, iRobot j7+, or Roborock Q7 Max+. Gyroscope models struggle
              with heavy pet hair.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
