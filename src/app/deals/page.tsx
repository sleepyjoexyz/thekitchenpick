import Link from "next/link";
import type { Metadata } from "next";
import DealCard from "@/components/DealCard";
import { mockDeals } from "@/data/mockDeals";
import { dealCategories } from "@/lib/dealCategories";
import { DealSchema } from '@/components/DealSchema';

export const metadata: Metadata = {
  title: "Today's Best Kitchen & Home Deals | The Kitchen Pick",
  description: "Browse today's best deals on air fryers, espresso machines, robot vacuums, and more. Updated daily with the biggest savings.",
  alternates: { canonical: "https://www.thekitchenpick.com/deals" },
};

export default function DealsPage() {
  return (
    <main className="bg-white min-h-screen">
      <DealSchema deals={mockDeals} pageUrl="https://www.thekitchenpick.com/deals" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Today's Deals</h1>
        <p className="text-gray-600 mb-6">{mockDeals.length} deals across {dealCategories.length} categories — updated daily.</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {dealCategories.map((cat) => (
            <Link key={cat.slug} href={'/deals/' + cat.slug} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium text-gray-700 transition-colors">
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
              <span className="text-gray-400 text-xs">({mockDeals.filter((d) => d.category === cat.name).length})</span>
            </Link>
          ))}
        </div>
      </section>

      {dealCategories.map((cat) => {
        const categoryDeals = mockDeals.filter((d) => d.category === cat.name);
        if (categoryDeals.length === 0) return null;
        return (
          <section key={cat.slug} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">{cat.emoji} {cat.name} Deals <span className="text-sm font-normal text-gray-500 ml-2">({categoryDeals.length})</span></h2>
              <Link href={'/deals/' + cat.slug} className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">View all {cat.name.toLowerCase()} deals →</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {categoryDeals.map((deal) => (<DealCard key={deal.id} {...deal} />))}
            </div>
          </section>
        );
      })}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100 mt-8">
        <p className="text-xs text-gray-400">Deals are sourced from Amazon, Slickdeals, and Reddit. Prices and availability may change. As an Amazon Associate, The Kitchen Pick earns from qualifying purchases.</p>
      </section>
    </main>
  );
}