"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { massageGuns, MassageGun } from "@/data/massage-guns";
import Link from "next/link";

export default function MassageGunsComparison() {
  const [priceRange, setPriceRange] = useState<string>("all");
  const [hasApp, setHasApp] = useState<string>("all");
  const [hasHeating, setHasHeating] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    let result = [...massageGuns];

    if (priceRange !== "all") {
      result = result.filter((p) => p.priceRange === priceRange);
    }

    if (hasApp !== "all") {
      const hasAppFeature = hasApp === "yes";
      result = result.filter((p) => p.hasApp === hasAppFeature);
    }

    if (hasHeating !== "all") {
      const hasHeatingFeature = hasHeating === "yes";
      result = result.filter((p) => p.hasHeating === hasHeatingFeature);
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "power") {
      result.sort((a, b) => b.stallForceLbs - a.stallForceLbs);
    } else {
      result.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
    }

    return result;
  }, [priceRange, hasApp, hasHeating, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Massage Guns",
              href: "/massage-guns",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Massage Guns Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 13 massage guns across all price points and power
          levels. Compare stall force, percussion range, battery life, noise,
          and ratings to find the massage gun that matches your recovery needs
          and budget. Our methodology is based on manufacturer specs, user
          ratings, and real-world deep-tissue testing.
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
                App Control
              </label>
              <select
                value={hasApp}
                onChange={(e) => setHasApp(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">App Enabled</option>
                <option value="no">No App</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Built-in Heating
              </label>
              <select
                value={hasHeating}
                onChange={(e) => setHasHeating(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">With Heating</option>
                <option value="no">No Heating</option>
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
                <option value="power">Stall Force: Highest First</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredProducts.length} of {massageGuns.length} massage guns
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
                  Stall Force (lbs)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Speed Range (PPM)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Amplitude (mm)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Speeds
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Attachments
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Battery (min)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Noise (dB)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((gun, idx) => (
                <tr
                  key={gun.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    <Link
                      href={`/massage-guns/${gun.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {gun.brand} {gun.model}
                    </Link>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    ${gun.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {gun.stallForceLbs}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center text-sm">
                    {gun.percussionRange}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {gun.amplitudeMm}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {gun.speedSettings}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {gun.attachments}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {gun.batteryMinutes}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {gun.noiseLevelDb}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-medium text-yellow-600">
                    ★ {gun.rating}
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
          Massage Gun Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((gun) => (
            <ProductCard key={gun.id} product={gun as any} />
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Massage Gun Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/massage-guns/theragun-vs-hypervolt">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Theragun vs Hypervolt: Which Wins?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Head-to-head comparison of the two leading brands. Specs, grip,
                noise, app features, and price breakdown.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/massage-guns/best-massage-guns-under-200">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Best Massage Guns Under $200
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Top options in the budget tier. Compare stall force, battery
                life, and value at this price point.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/massage-guns/massage-gun-stall-force-guide">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Stall Force Explained: How Much Do You Need?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                What stall force means, why it matters more than speed, and the
                right amount for your body.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                Read Guide <span>→</span>
              </div>
            </div>
          </Link>

          <Link href="/massage-guns/mini-vs-full-size-massage-gun">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Mini vs Full-Size: When Small Is Enough
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Trade-offs between portable and full-size models. Stall force,
                battery, and who benefits from each.
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
              What's the difference between stall force and PPM?
            </h3>
            <p className="text-gray-600">
              Stall force (measured in lbs) is how hard the massager pushes when
              it encounters resistance. PPM (pulses per minute) is how fast it
              oscillates. Stall force determines penetration depth; PPM is
              secondary. A 40-lbs massager at 1500 PPM outperforms a 20-lbs
              massager at 3200 PPM. Focus on stall force first.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              How much stall force do I actually need?
            </h3>
            <p className="text-gray-600">
              Light recovery (casual use): 20-25 lbs. General fitness (gym
              3-4x/week): 30-40 lbs. Serious athletes (heavy training):
              40-60 lbs. Deep chronic tension: 60+ lbs. Most people benefit
              from 30-40 lbs—it's versatile enough for all muscle groups
              without being painful.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Should I buy a portable mini or full-size?
            </h3>
            <p className="text-gray-600">
              Buy mini if you travel frequently and value portability over
              power. Buy full-size if you train seriously or have chronic
              tension. Full-size delivers 2-3x more stall force. Many athletes
              own both: full-size at home for daily recovery and mini for
              travel. Full-size (1.4-1.8 lbs) isn't that heavy if recovery
              happens at home.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Is Theragun worth the premium price?
            </h3>
            <p className="text-gray-600">
              Theragun Elite ($399) offers excellent specs and the Theragun
              brand. But Ekrin B37 ($199) delivers similar stall force (56 vs
              40 lbs) for half the price, trading app control for value.
              Theragun Prime ($199) equals Hypervolt 2 ($199) for basic
              recovery. Premium pricing is justified by app features and brand,
              not performance alone.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Which massage gun is quietest?
            </h3>
            <p className="text-gray-600">
              Hypervolt models are generally quieter (64-67 dB) than Theragun
              (68-72 dB). Hypervolt Go 2 (64 dB) is the quietest full-featured
              option. Theragun Mini is also quiet at 66 dB. Lower dB matters if
              you recover early morning or in shared spaces. Anything under 67
              dB allows TV volume conversation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Do I need app control and Bluetooth?
            </h3>
            <p className="text-gray-600">
              App control is a nice-to-have, not essential. Theragun Elite's
              app offers personalized routines and data tracking. Most users
              benefit from simple 3-5 button speed control instead. Save $150
              by skipping app features if you don't want guided routines. Manual
              speed selection works perfectly for self-directed recovery.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              How long do massage guns last?
            </h3>
            <p className="text-gray-600">
              Quality massage guns (Theragun, Hypervolt, Ekrin) last 4-6 years
              with daily use. Battery degrades after 18-24 months but
              replacement batteries are available. Motor and head typically
              outlast batteries. Budget models ($50-$100) often fail after 1-2
              years. Premium models justify their cost through durability and
              warranty support.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Can I use a massage gun on my neck and face?
            </h3>
            <p className="text-gray-600">
              Yes, but carefully. Use only on neck muscles (trapezius, levator
              scapulae), not directly on spine. Use low stall force (20-30 lbs)
              and gentle attachment. Avoid face entirely—skin is delicate and
              massagers cause bruising. Neck massage works well with proper
              technique. Start light, increase intensity gradually.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
