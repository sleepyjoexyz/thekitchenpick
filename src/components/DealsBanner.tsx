import Link from "next/link";

export default function DealsBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg my-8 border border-blue-100">
      <div className="flex items-center justify-between flex-col md:flex-row gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">🎉 See Today''s Deals</h3>
          <p className="text-sm text-gray-600 mt-1">Check out our latest deals on these items</p>
        </div>
        <Link
          href="/deals"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
        >
          Browse Deals →
        </Link>
      </div>
    </section>
  );
}
