'use client';

import React, { useState } from 'react';

interface DealCardProps {
  id: string;
  title: string;
  category: string;
  originalPrice: number;
  dealPrice: number;
  percentOff: number;
  source: string;
  sourceUrl: string;
  amazonUrl: string;
  timeLeft: string;
  imageAlt: string;
  imageUrl: string;
  coupon?: string;
}

const categoryIcons: Record<string, string> = {
  'Air Fryers': '\u{1F373}',
  'Espresso Machines': '\u2615',
  'Robot Vacuums': '\u{1F916}',
  'Air Purifiers': '\u{1F4A8}',
  'Standing Desks': '\u{1F5A5}\uFE0F',
  'Security Cameras': '\u{1F4F7}',
};

const categoryColors: Record<string, string> = {
  'Air Fryers': 'bg-orange-50 text-orange-600',
  'Espresso Machines': 'bg-amber-50 text-amber-600',
  'Robot Vacuums': 'bg-blue-50 text-blue-600',
  'Air Purifiers': 'bg-sky-50 text-sky-600',
  'Standing Desks': 'bg-green-50 text-green-600',
  'Security Cameras': 'bg-red-50 text-red-600',
};

export default function DealCard({
  title,
  category,
  originalPrice,
  dealPrice,
  percentOff,
  source,
  amazonUrl,
  timeLeft,
  imageAlt,
  imageUrl,
  coupon,
}: DealCardProps) {
  const [imgError, setImgError] = useState(false);
  const icon = categoryIcons[category] || '\u{1F4E6}';
  const colorClass = categoryColors[category] || 'bg-gray-50 text-gray-600';

  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="block bg-white rounded border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="bg-gray-50 aspect-square flex items-center justify-center overflow-hidden">
        {imageUrl && !imgError ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-contain p-2"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-4xl">{icon}</span>
            <span className="text-[9px] text-gray-400 text-center px-2 line-clamp-2">{imageAlt}</span>
          </div>
        )}
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between mb-1">
          <span className={`text-[10px] font-semibold px-1 py-0.5 rounded ${colorClass}`}>
            {category}
          </span>
          <span className="bg-red-50 text-red-600 text-[10px] font-bold px-1 py-0.5 rounded">
            -{percentOff}%
          </span>
        </div>
        <h3 className="text-[11px] font-bold text-gray-900 mb-1 line-clamp-2 leading-tight">{title}</h3>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-sm font-bold text-gray-900">${dealPrice.toFixed(2)}</span>
          <span className="text-[10px] text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
        </div>
        {coupon && (
          <div className="bg-green-50 border border-green-200 rounded px-1 py-0.5 mb-1">
            <span className="text-[9px] font-semibold text-green-700">{coupon}</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-gray-400">{source}</span>
          <span className="text-[9px] text-gray-500">{timeLeft}</span>
        </div>
      </div>
    </a>
  );
}
