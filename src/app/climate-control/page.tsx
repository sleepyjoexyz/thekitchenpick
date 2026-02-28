"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { climateDevices, ClimateDevice } from "@/data/climate-control";
import Link from "next/link";

export default function ClimateControlComparison() {
  const [priceRange, setPriceRange] = useState<string>("all");
  const [deviceType, setDeviceType] = useState<string>("all");
  const [hasWifi, setHasWifi] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    let result = [...climateDevices];

    if (priceRange !== "all") {
      result = result.filter((p) => p.priceRange === priceRange);
    }

    if (deviceType !== "all") {
      result = result.filter((p) => p.deviceType === deviceType);
    }

    if (hasWifi !== "all") {
      const hasWifiFeature = hasWifi === "yes";
      result = result.filter((p) => p.hasWifi === hasWifiFeature);
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "capacity") {
      result.sort((a, b) => b.roomSizeSqFt - a.roomSizeSqFt);
    } else {
      result.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
    }

    return result;
  }, [priceRange, deviceType, hasWifi, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Climate Control",
              href: "/climate-control",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Portable ACs & Space Heaters Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 14 portable air conditioners and space heaters across all
          price points and room sizes. Compare specifications, features, prices,
          and ratings to find the unit that matches your needs and climate. Our
          methodology is based on manufacturer specs, cooling/heating capacity,
          energy ratings, user reviews, and real-world performance data.
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
                Device Type
              </label>
              <select
                value={deviceType}
                onChange={(e) => setDeviceType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="portable-ac">Portable AC</option>
                <option value="space-heater">Space Heater</option>
                <option value="evaporative-cooler">Evaporative Cooler</option>
                <option value="dehumidifier">Dehumidifier</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                WiFi Control
              </label>
              <select
                value={hasWifi}
                onChange={(e) => setHasWifi(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any</option>
                <option value="yes">WiFi Enabled</option>
                <option value="no">Manual/Remote Only</option>
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
                <option value="capacity">Room Coverage: Largest First</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredProducts.length} of {climateDevices.length} climate devices
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
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Type
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right font-bold">
                  BTU/Watts
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right font-bold">
                  Room Size
                </th>
                <th className="border border-gray-300 px-4 py-3 text-right font-bold">
                  Noise (dB)
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Smart
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Remote
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                  Energy Rating
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
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {product.deviceType === "portable-ac"
                      ? "AC"
                      : "Heater"}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    {product.deviceType === "portable-ac"
                      ? `${product.btuOrWatts.toLocaleString()} BTU`
                      : `${product.btuOrWatts}W`}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    {product.roomSizeSqFt} sq ft
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    {product.noiseDb} dB
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {product.hasWifi ? "✓" : "—"}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {product.hasRemote ? "✓" : "—"}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {product.energyRating}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right">
                    {product.rating}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {product.amazonAsin ? (
                      <a
                        href={`https://amazon.com/dp/${product.amazonAsin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View
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

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Expert Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              <Link
                href="/climate-control/portable-ac-buying-guide"
                className="hover:text-blue-600"
              >
                Portable AC Buying Guide
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">
              Learn how portable ACs work, how to size BTU for your room, single vs dual hose
              efficiency, and what matters most when choosing one.
            </p>
            <Link
              href="/climate-control/portable-ac-buying-guide"
              className="text-blue-600 hover:underline font-medium"
            >
              Read guide →
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              <Link
                href="/climate-control/best-space-heaters-for-large-rooms"
                className="hover:text-blue-600"
              >
                Best Space Heaters for Large Rooms
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">
              Discover which space heaters work for 300+ sq ft rooms, ceramic vs oil-filled
              vs infrared, and how to heat large spaces safely.
            </p>
            <Link
              href="/climate-control/best-space-heaters-for-large-rooms"
              className="text-blue-600 hover:underline font-medium"
            >
              Read guide →
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              <Link
                href="/climate-control/portable-ac-vs-window-ac"
                className="hover:text-blue-600"
              >
                Portable AC vs Window AC
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">
              Compare efficiency, installation, noise, and restrictions. Find out which is
              truly better and when portable is your only option.
            </p>
            <Link
              href="/climate-control/portable-ac-vs-window-ac"
              className="text-blue-600 hover:underline font-medium"
            >
              Read guide →
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              <Link
                href="/climate-control/space-heater-energy-costs"
                className="hover:text-blue-600"
              >
                Space Heater Energy Costs
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">
              Calculate the true electricity cost of running a space heater, compare to central
              heating, and learn which types use the least energy.
            </p>
            <Link
              href="/climate-control/space-heater-energy-costs"
              className="text-blue-600 hover:underline font-medium"
            >
              Read guide →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              How many BTU do I need for my room?
            </h3>
            <p className="text-gray-600">
              A general rule is 20 BTU per square foot. A 350 sq ft bedroom needs roughly
              7,000 BTU. For rooms with poor insulation or lots of sun exposure, add 15-20%
              extra capacity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Is a portable AC more efficient than a window AC?
            </h3>
            <p className="text-gray-600">
              No. Window ACs are 10-20% more efficient because the compressor sits outside and
              only cool air comes back into your room. Portable units cool inside the room,
              fighting their own waste heat. For renters, portability makes up for lower efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              What's the difference between single-hose and dual-hose portable ACs?
            </h3>
            <p className="text-gray-600">
              Single-hose units pull room air, cool it, and exhaust hot air outside, creating
              negative pressure that makes them work harder. Dual-hose units pull outdoor air
              specifically for cooling, keeping your room in equilibrium. Dual-hose is 15-30%
              more efficient but costs more.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Can a space heater heat a whole room?
            </h3>
            <p className="text-gray-600">
              Partially. A standard 1,500W space heater produces about 5,100 BTU per hour, which
              effectively heats 250-350 sq ft. For larger rooms, use zone heating: close off unused
              areas and focus heat where you spend time.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Which type of space heater is quietest?
            </h3>
            <p className="text-gray-600">
              Oil-filled heaters are the quietest (38-40 dB) because they use passive radiation
              without a fan. Ceramic heaters are slightly louder (48-54 dB) due to fan noise.
              Infrared heaters vary (50-60 dB) depending on whether they have a fan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              How much does it cost to run a space heater?
            </h3>
            <p className="text-gray-600">
              At $0.13 per kWh, a 1,500W heater costs about $1.56 per 8 hours of use (roughly
              $47 per month). Oil-filled models cost slightly less due to lower total wattage
              (no fan overhead).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Can I use a space heater and portable AC in the same room?
            </h3>
            <p className="text-gray-600">
              Yes. Many people use a portable AC in summer and a space heater in winter in the
              same room. Just make sure the heater is away from the AC unit and any water that
              may leak from the AC drain pan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
