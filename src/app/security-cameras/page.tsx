"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { securityCameras } from "@/data/security-cameras";
import { SecurityCamera } from "@/data/security-cameras";
import Link from "next/link";
import { getAllSecurityCameraArticleSlugs } from "@/data/security-camera-articles";

export default function SecurityCamerasComparison() {
  const [priceRange, setPriceRange] = useState<string>("all");
  const [powerType, setPowerType] = useState<string>("all");
  const [resolution, setResolution] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const articles = getAllSecurityCameraArticleSlugs();

  const filteredProducts = useMemo(() => {
    let result = [...securityCameras];

    if (priceRange !== "all") {
      result = result.filter((p) => p.priceRange === priceRange);
    }

    if (powerType !== "all") {
      result = result.filter((p) => p.powerType === powerType);
    }

    if (resolution !== "all") {
      result = result.filter((p) => p.resolution === resolution);
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
  }, [priceRange, powerType, resolution, sortBy]);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            {
              label: "Security Cameras",
              href: "/security-cameras",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best Security Cameras Compared — 2025-2026
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We've analyzed 13 security cameras across all price points, power
          types, and use cases. Compare specifications, features, prices, and
          ratings to find the camera that matches your home's security needs,
          budget, and installation preferences. Our methodology is based on
          manufacturer specs, user ratings, and real-world performance data.
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
                <option value="mid">Mid-Range ($150-$400)</option>
                <option value="premium">Premium (&gt; $400)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Power Type
              </label>
              <select
                value={powerType}
                onChange={(e) => setPowerType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any Power Type</option>
                <option value="Wired">Wired (PoE)</option>
                <option value="Battery">Battery-Powered</option>
                <option value="Solar">Solar</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resolution
              </label>
              <select
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Any Resolution</option>
                <option value="1080p">1080p</option>
                <option value="2K">2K</option>
                <option value="4K">4K</option>
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
            Showing {filteredProducts.length} of {securityCameras.length} security cameras
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
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Resolution
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  FOV (°)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Night Vision
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Power Type
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right font-bold">
                  Cloud Sub ($/mo)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Spotlight
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center font-bold">
                  Siren
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
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-900">
                    {product.brand} {product.model}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    ${product.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.resolution}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {product.fieldOfView}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.nightVision
                      ? product.colorNightVision
                        ? "Color"
                        : "B/W"
                      : "No"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.powerType}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {product.monthlySubFee > 0 ? `$${product.monthlySubFee}` : "Free"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.hasSpotlight ? "✓" : "—"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.hasSiren ? "✓" : "—"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right font-semibold">
                    {product.rating}
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

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Security Camera Guides & Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((slug) => {
            const slugToTitle: Record<string, string> = {
              "wired-vs-battery-security-cameras":
                "Wired vs Battery Security Cameras",
              "security-cameras-without-subscription":
                "Best Security Cameras Without Monthly Fees",
              "indoor-vs-outdoor-security-cameras":
                "Indoor vs Outdoor Security Cameras",
              "security-camera-resolution-guide":
                "1080p vs 2K vs 4K Security Cameras",
            };
            return (
              <div
                key={slug}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {slugToTitle[slug] || slug}
                </h3>
                <Link
                  href={`/security-cameras/${slug}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read Article →
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Do I need a subscription to use security cameras?
            </h3>
            <p className="text-gray-700">
              Not necessarily. Many cameras support local storage (microSD card,
              NVR) without subscriptions. Ring, Google Nest, and Arlo require
              subscriptions for cloud features, but Wyze, Reolink, and Eufy
              offer subscription-free local storage options. See our "Security
              Cameras Without Subscriptions" guide for details.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What resolution do I need for license plate recognition?
            </h3>
            <p className="text-gray-700">
              2K (2560 x 1440) can read license plates from 20-30 feet. 4K is
              reliable from 40+ feet. 1080p requires the vehicle to be very
              close (&lt;10 feet) for clear plate reads. If license plate
              capture is critical, choose 2K minimum, ideally 4K.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Battery or wired cameras—which is better?
            </h3>
            <p className="text-gray-700">
              It depends on your situation. Wired cameras offer continuous,
              maintenance-free operation but require professional installation.
              Battery cameras are flexible and renter-friendly but need charging
              every 3-12 months. Homeowners typically prefer wired; renters
              prefer battery. See our "Wired vs Battery" guide for a detailed
              comparison.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Is 1080p enough for security cameras?
            </h3>
            <p className="text-gray-700">
              1080p is sufficient for general presence detection (detecting
              someone was there) but limited for facial identification or
              license plate reads. For entry doors and valuable items, 2K
              resolution is recommended. See our "Resolution Guide" for
              real-world examples.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I use indoor cameras outdoors?
            </h3>
            <p className="text-gray-700">
              Not reliably. Indoor cameras lack weatherproofing (IP rating) and
              fail in rain, extreme temperatures, and humidity. Use only outdoor
              cameras (IP65+ rated) for exterior mounting. See our "Indoor vs
              Outdoor" guide for placement recommendations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How much cloud storage is needed?
            </h3>
            <p className="text-gray-700">
              A 1080p camera recording motion-only (8 hours/day activity)
              requires ~100 GB per month. 2K requires ~200 GB/month. Most
              subscriptions include 30-60 days of cloud storage, adequate for
              evidence recovery. Local storage (SD cards, NVR) can store months
              to years of footage.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Which brand has the best smart home integration?
            </h3>
            <p className="text-gray-700">
              Ring integrates tightly with Amazon Alexa. Google Nest works best
              with Google Home. Arlo supports Apple HomeKit (premium feature).
              Wyze supports Alexa and Google Home. If you're heavily invested in
              one ecosystem, choose the matching brand for seamless automation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What is color night vision?
            </h3>
            <p className="text-gray-700">
              Traditional IR night vision is black-and-white. Color night vision
              uses either a bright spotlight or high-sensitivity sensor to
              maintain color in low light. It's superior for identifying
              details (clothing color, vehicle color) but uses more power
              (battery drain) or requires more light (spotlight adds cost).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Are budget cameras worth it?
            </h3>
            <p className="text-gray-700">
              Yes. Wyze's $20-36 cameras offer 1080p-2K resolution and
              surprisingly good quality for the price. They lack premium
              features (spotlight, advanced AI) but excel for basic monitoring.
              Recommend for multi-camera setups, rentals, or testing before
              investing in premium brands.
            </p>
          </div>
        </div>
      </section>

      {/* Buying Guide Tips */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Security Camera Buying Guide
        </h2>
        <div className="space-y-4 text-gray-700">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              1. Determine Your Priority
            </h3>
            <p>
              Focus on your main goal: entry monitoring (doors), perimeter
              security (driveway), package theft prevention, or interior theft
              deterrence. Different priorities drive different camera choices.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              2. Choose Power Type
            </h3>
            <p>
              Wired for permanent installations (front door, driveway). Battery
              for flexibility and rentals. Solar hybrid for outdoor without
              charging maintenance.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              3. Select Resolution Based on Use
            </h3>
            <p>
              1080p for motion detection and presence. 2K for facial/plate
              detail. 4K if budget allows and you need maximum zoom flexibility.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              4. Consider Subscription Costs
            </h3>
            <p>
              Over 5 years, a $5/month subscription costs $300 per camera.
              Budget cameras like Wyze eliminate this cost via local storage—a
              significant long-term saving.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              5. Plan for Night Vision
            </h3>
            <p>
              Color night vision (spotlight or high-sensitivity) dramatically
              improves nighttime detail. Standard IR is adequate for motion
              detection but limited for facial/plate recognition at night.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              6. Check Smart Home Integration
            </h3>
            <p>
              If you use Alexa, choose Ring or Wyze. If Google Home, choose
              Google Nest or Arlo. Tight integration enables automation
              (lights on at motion, alerts to displays).
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              7. Plan Storage Strategy
            </h3>
            <p>
              Cloud storage is easiest but costs monthly. Local storage
              (microSD, NVR) has higher upfront cost but zero recurring fees.
              Consider storage when calculating total cost of ownership.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
