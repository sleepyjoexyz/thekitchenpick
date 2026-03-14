'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import DealCard from '@/components/DealCard';
import { mockDeals } from '@/data/mockDeals';

// Note: Metadata cannot be exported from client components
// See layout.tsx for SEO metadata

type KitchenCategory = 'All' | 'Air Fryers' | 'Espresso Machines' | 'Robot Vacuums' | 'Air Purifiers' | 'Standing Desks' | 'Security Cameras';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<KitchenCategory>('All');

  const filteredDeals =
    selectedCategory === 'All'
      ? mockDeals
      : mockDeals.filter((deal) => deal.category === selectedCategory);

  const categories: KitchenCategory[] = ['All', 'Air Fryers', 'Espresso Machines', 'Robot Vacuums', 'Air Purifiers', 'Standing Desks', 'Security Cameras'];

  return (
    <main className="bg-white">
      {/* Hero + Filters — single line */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center flex-wrap gap-3">
          <h1 className="text-lg font-bold text-gray-900">The Kitchen Pick</h1>
          <span className="text-sm text-gray-500">—</span>
          <span className="text-sm text-gray-600">Today's Best Kitchen Deals: <span className="font-semibold">{filteredDeals.length} available</span></span>
          <div className="flex gap-2 ml-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full font-medium text-xs transition-colors ${
                  selectedCategory === category
                    ? category === 'All'
                      ? 'bg-gray-900 text-white'
                      : category === 'Air Fryers'
                      ? 'bg-orange-600 text-white'
                      : category === 'Espresso Machines'
                      ? 'bg-amber-600 text-white'
                      : category === 'Robot Vacuums'
                      ? 'bg-blue-600 text-white'
                      : category === 'Air Purifiers'
                      ? 'bg-sky-600 text-white'
                      : category === 'Standing Desks'
                      ? 'bg-green-600 text-white'
                      : 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Grid (2/3 of viewport) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
          {filteredDeals.map((deal) => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div>
      </section>

      {/* Browse Categories Section (1/3 of viewport) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/air-fryers" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">🍟</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition">
                Air Fryers
              </h3>
            </div>
          </Link>

          <Link href="/espresso-machines" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">☕</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition">
                Espresso
              </h3>
            </div>
          </Link>

          <Link href="/robot-vacuums" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition">
                Robot Vacs
              </h3>
            </div>
          </Link>

          <Link href="/air-purifiers" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">💨</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-sky-600 transition">
                Air Purifiers
              </h3>
            </div>
          </Link>

          <Link href="/standing-desks" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">🖥️</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition">
                Standing Desks
              </h3>
            </div>
          </Link>

          <Link href="/security-cameras" className="group">
            <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl mb-3">📹</div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition">
                Cameras
              </h3>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
