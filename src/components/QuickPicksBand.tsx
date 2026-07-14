import QuickPickCard from "@/components/QuickPickCard";
import { getQuickPicks } from "@/lib/quickPicks";

// Reusable "Quick Picks Under $40" impulse band. Surfaces the cheapest catalog
// items that carry a valid affiliate link — the products most likely to convert
// inside Amazon's 24-hour cookie window. Renders nothing if no qualifying items.
export default function QuickPicksBand({
  heading = "⚡ Quick Picks Under $40",
  subtitle = "Popular low-cost finds our readers grab on Amazon.",
  maxPrice = 40,
  limit = 12,
}: {
  heading?: string;
  subtitle?: string;
  maxPrice?: number;
  limit?: number;
}) {
  const quickPicks = getQuickPicks(maxPrice, limit);
  if (quickPicks.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">{heading}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {quickPicks.map((pick) => (
          <QuickPickCard key={pick.id} pick={pick} />
        ))}
      </div>
    </section>
  );
}
