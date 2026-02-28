"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { airPurifiers } from "@/data/air-purifiers";
import Link from "next/link";

export default function AirPurifersComparison() {
  const [priceRange, setPriceRange] = useState<string>("all");
  const [hasCarbon, setHasCarbon] = useState<string>("all");
  const [smartFeatures, setSmartFeatures] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    let result = [...airPurifiers];

    if (priceRange !== "all") {
      result = result.filter((p) => p.priceRange === priceRange);
    }

    if (hasCarbon !== "all") {
      const hasCarbonFilter = hasCarbon === "yes";
      result = result.filter((p) => p.hasCarbon === hasCarbonFilter);
    }

    if (smartFeatures !== "all") {
      const hasSmart = smartFeatures === "yes";
      result = result.filter((p) => p.smartFeatures === hasSmart);
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "coverage") {
      result.sort((a, b) => b.cadrSqFt - a.cadrSqFt);
    } else {
      result.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
    }

    return result;
  }, [priceRange, hasCarbon, smartFeatures, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Air Purifiers",
              href: "/air-purifiers",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Air Purifiers Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 12 air purifiers across all price points and room sizes.
          Compare specifications, features, prices, and ratings to find the
          purifier that matches your needs and space. Our methodology is based
          on manufacturer specs, CADR ratings, user reviews, and real-world
          performance data.
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
                <option value="budget">Budget (&lt; $200)</option>
                <option value="mid">Mid-Range ($200-$400)</option>
                <option value="premium">Premium (&gt; $400)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Carbon Filter
              </label>
              <select
                value={hasCarbon}
                onChange={(e) => setHasCarbon(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Has Carbon Filter</option>
                <option value="no">HEPA Only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Smart Features
              </label>
              <select
                value={smartFeatures}
                onChange={(e) => setSmartFeatures(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">Smart Enabled</option>
                <option value="no">Manual Only</option>
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
                <option value="coverage">Coverage: Largest First</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredProducts.length} of {airPurifiers.length} air purifiers
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
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                  Brand & Model
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right font-bold">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right font-bold">
                  Room Coverage
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                  Filter Type
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Carbon
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Smart
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right font-bold">
                  Noise (dB)
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right font-bold">
                  Filter Cost/yr
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right font-bold">
                  Rating
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Amazon
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, i) => (
                <tr
                  key={product.id}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    {product.brand} {product.model}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    ${product.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    {product.cadrSqFt} sq ft
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    {product.filterType}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {product.hasCarbon ? "Yes" : "No"}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {product.smartFeatures ? "Yes" : "No"}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    {product.noiseMinDb}-{product.noiseMaxDb}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    ${product.filterCostPerYear}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right font-medium">
                    {product.rating}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {product.amazonAsin ? (
                      <a
                        href={`https://amazon.com/dp/${product.amazonAsin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Link
                      </a>
                    ) : (
                      <span className="text-gray-400">—</span>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Purifier Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Air Purifier Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/air-purifiers/hepa-filter-types-explained">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                HEPA Filter Types Explained
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn the difference between H11, H13, and H14 HEPA filters and
                how they affect particle capture rates.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/air-purifiers/best-air-purifiers-for-allergies">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Best Purifiers for Allergies & Asthma
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Identify key allergens and find the best purifiers for allergy
                sufferers and asthma management.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/air-purifiers/air-purifier-running-costs">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                True Cost of Air Purifier Ownership
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Compare upfront, filter, energy, and maintenance costs across
                budget and premium models.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/air-purifiers/do-air-purifiers-help-with-smoke">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Air Purifiers & Wildfire Smoke
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Understand smoke particle sizes and which purifiers actually
                help during wildfire season.
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
              What does CADR rating mean?
            </h3>
            <p className="text-gray-600">
              CADR stands for Clean Air Delivery Rate and measures how quickly
              an air purifier removes particles from a room. A higher CADR means
              faster air cleaning. CADR 300+ is good for 200-300 sq ft rooms.
              CADR 600+ is needed for larger living spaces. Compare CADR to your
              room size to ensure adequate coverage.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Do I need a carbon filter?
            </h3>
            <p className="text-gray-600">
              HEPA filters alone capture particles (dust, pollen, dander) but not
              gases or odors. A carbon filter layer removes smoke, VOCs, cooking
              odors, and chemical pollutants. If you have cooking odors, smoke
              exposure, or chemical sensitivities, a carbon filter is essential.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              What's the difference between H11, H13, and H14?
            </h3>
            <p className="text-gray-600">
              These refer to HEPA grades with increasing filtration efficiency.
              H11 captures 99.5%, H13 captures 99.95%, and H14 captures 99.995%
              of particles down to 0.3 microns. For most homes, H13 is sufficient.
              H14 is medical-grade and necessary only for severe allergies or
              immunocompromised individuals.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              How often do I need to replace filters?
            </h3>
            <p className="text-gray-600">
              Most air purifier filters last 6-12 months depending on usage and
              air quality. Heavy use or poor air quality shortens filter life.
              Budget $80-$180 per year for filter replacements. Set a calendar
              reminder to check filter condition quarterly.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Are expensive purifiers really better?
            </h3>
            <p className="text-gray-600">
              Not always. Budget models ($100-$300) offer excellent value for
              small to medium spaces. Premium models ($500+) excel in large rooms,
              with design features, or specialized filtration (medical-grade,
              formaldehyde removal). Choose based on room size and your specific
              needs, not price alone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
