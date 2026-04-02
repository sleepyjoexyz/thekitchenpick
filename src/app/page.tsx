"use client";

import Link from "next/link";
import DealCard from "@/components/DealCard";
import { mockDeals } from "@/data/mockDeals";
import { dealCategories } from "@/lib/dealCategories";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">The Kitchen Pick</h1>
        <p className="text-gray-600 mb-6">Discover today's best deals on kitchen appliances, smart home devices, and workspace essentials. {mockDeals.length} deals across {dealCategories.length} categories.</p>
        <Link href="/deals" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">Browse All Deals</Link>
      </section>


      {dealCategories.map((cat) => {
        const categoryDeals = mockDeals.filter((d) => d.category === cat.name).slice(0, 6);
        if (categoryDeals.length === 0) return null;
        return (
          <section key={cat.slug} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100 first:border-t-0">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">{cat.emoji} {cat.name}</h2>
              <Link href={'/deals/' + cat.slug} className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Find more details →</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-4">
              {categoryDeals.map((deal) => (<DealCard key={deal.id} {...deal} />))}
            </div>
          </section>
        );
      })}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {dealCategories.map((cat) => (
            <Link key={cat.slug} href={'/deals/' + cat.slug} className="group">
              <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <h3 className={"text-sm font-bold text-gray-900 group-hover:text-" + cat.color + "-600 transition"}>{cat.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{mockDeals.filter((d) => d.category === cat.name).length} deals</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}