"use client";

import { useState } from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FilterBar from "@/components/FilterBar";
import ComparisonTable from "@/components/ComparisonTable";
import ProductCard from "@/components/ProductCard";
import { espressoMachines } from "@/data/espresso-machines";
import { Product } from "@/lib/types";
import Link from "next/link";

export default function EspressoMachinesComparison() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(
    espressoMachines
  );

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Espresso Machines",
              href: "/espresso-machines",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Espresso Machines Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 15 espresso machines across all price points and types.
          Compare specifications, features, prices, and ratings to find the
          machine that matches your needs and budget. Our methodology is based
          on manufacturer specs, user ratings, and real-world performance data.
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar
          products={espressoMachines}
          onFilterChange={setFilteredProducts}
        />
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Full Comparison Table
        </h2>
        <ComparisonTable products={filteredProducts} />
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Machine Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Espresso Machine Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/espresso-machines/semi-automatic-vs-super-automatic">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Semi-Automatic vs Super-Automatic
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Understand the difference between manual control and full
                automation. Which type is right for you?
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/espresso-machines/best-espresso-machines-under-500">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Best Machines Under $500
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Quality espresso doesn't have to be expensive. Compare our top
                budget picks in detail.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/espresso-machines/do-you-need-a-built-in-grinder">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Built-In Grinder: Necessary?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Integrated grinders save space but come with tradeoffs. Should
                you buy one?
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/espresso-machines/single-boiler-vs-dual-boiler">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Single vs Dual Boiler
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Boiler types affect temperature control and workflow. Learn
                which suits your needs.
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
              What's the difference between 9-bar and 15-bar pressure?
            </h3>
            <p className="text-gray-600">
              Pressure is measured in bars, with 9 bars being standard for
              traditional espresso machines and 15 bars for most modern machines.
              Higher pressure generally leads to faster extraction and denser
              crema, but technique and grind matter more than raw pressure
              numbers. Most espresso machines in the 9-15 bar range can produce
              excellent results.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Do I really need a grinder?
            </h3>
            <p className="text-gray-600">
              For quality espresso, a burr grinder (whether built-in or separate)
              is essential. Blade grinders produce inconsistent particle size.
              Built-in grinders save space and workflow steps, but standalone
              grinders offer more grind control. See our guide on grinders for
              more details.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              What's the learning curve?
            </h3>
            <p className="text-gray-600">
              Semi-automatic machines require skill in tamping, timing, and
              temperature management. Expect a learning curve of 2-4 weeks to
              consistently pull good shots. Super-automatic and pod machines are
              much easier but offer less control. Most enthusiasts find the
              learning process rewarding.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              How often do espresso machines need servicing?
            </h3>
            <p className="text-gray-600">
              Regular maintenance includes backflushing the group head (if
              supported) and descaling every 2-3 months depending on water
              hardness. Professional servicing may be needed every 1-2 years.
              Costs vary widely; some machines require expensive repairs while
              others are more maintainable. Factor this into your budget.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Are expensive machines worth it?
            </h3>
            <p className="text-gray-600">
              The quality improvement between a $300 and $800 machine is
              substantial. Beyond $1500, improvements are more about build
              quality, durability, and features rather than shot quality.
              Technique and fresh beans matter more than price. Choose based on
              your budget and feature requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
