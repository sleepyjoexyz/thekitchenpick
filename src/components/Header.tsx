'use client';

import Link from 'next/link';
import { useState } from 'react';

const affiliateLinks = [
  { name: 'The Kitchen Pick', url: 'https://thekitchenpick.com', current: true },
  { name: 'The Family Pick', url: 'https://thefamilypick.com', current: false },
  { name: 'The Gadget Pick', url: 'https://thegadgetpick.com', current: false },
];

const categories = [
  {
    group: 'Kitchen',
    items: [
      { label: 'Espresso Machines', href: '/espresso-machines' },
      { label: 'Air Fryers', href: '/air-fryers' },
    ],
  },
  {
    group: 'Home',
    items: [
      { label: 'Robot Vacuums', href: '/robot-vacuums' },
      { label: 'Air Purifiers', href: '/air-purifiers' },
      { label: 'Climate Control', href: '/climate-control' },
    ],
  },
  {
    group: 'Office',
    items: [{ label: 'Standing Desks', href: '/standing-desks' }],
  },
  {
    group: 'Security',
    items: [{ label: 'Security Cameras', href: '/security-cameras' }],
  },
  {
    group: 'Personal Care',
    items: [
      { label: 'Electric Toothbrushes', href: '/electric-toothbrushes' },
      { label: 'Massage Guns', href: '/massage-guns' },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top affiliate links bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-center gap-6 text-sm">
          {affiliateLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={`${
                link.current
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-gray-900 hidden sm:block">
          The Kitchen Pick
        </Link>

        {/* Mobile site name fallback */}
        <div className="sm:hidden font-bold text-lg text-gray-900">
          Kitchen Pick
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {categories.map((cat) => (
            <div key={cat.group} className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2">
                {cat.group}
              </button>
              <div className="absolute left-0 top-full mt-0 pt-2 hidden group-hover:block z-50">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px]">
                  {cat.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4">
          {/* Cross-site links section */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Pick Sites
            </p>
            <div className="flex flex-col gap-2">
              {affiliateLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={`text-sm ${
                    link.current
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Categories section */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Categories
            </p>
            {categories.map((cat) => (
              <div key={cat.group} className="mb-2">
                <button
                  onClick={() => toggleCategory(cat.group)}
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-gray-900 font-medium text-sm"
                >
                  {cat.group}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      expandedCategory === cat.group ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {expandedCategory === cat.group && (
                  <div className="flex flex-col gap-1 pl-4 mb-2">
                    {cat.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
