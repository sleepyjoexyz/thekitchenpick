import React from 'react';

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
}

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
}: DealCardProps) {
  const categoryColors: Record<string, string> = {
    'Headphones': 'bg-blue-50 text-blue-600',
    'Speakers': 'bg-blue-50 text-blue-600',
    'Monitors': 'bg-purple-50 text-purple-600',
    'Keyboards': 'bg-purple-50 text-purple-600',
    'Mice': 'bg-purple-50 text-purple-600',
    'Webcams': 'bg-cyan-50 text-cyan-600',
    'Power Banks': 'bg-yellow-50 text-yellow-600',
    'Travel Adapters': 'bg-yellow-50 text-yellow-600',
    'Luggage': 'bg-yellow-50 text-yellow-600',
    'Air Fryers': 'bg-orange-50 text-orange-600',
    'Espresso Machines': 'bg-amber-50 text-amber-600',
    'Robot Vacuums': 'bg-blue-50 text-blue-600',
    'Air Purifiers': 'bg-sky-50 text-sky-600',
    'Standing Desks': 'bg-green-50 text-green-600',
    'Security Cameras': 'bg-red-50 text-red-600',
  };

  const colorClass = categoryColors[category] || 'bg-gray-50 text-gray-600';

  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* Compact image */}
      <div className="bg-gray-100 h-24 flex items-center justify-center text-gray-300">
        <span className="text-[10px]">{imageAlt}</span>
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
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-gray-400">{source}</span>
          <span className="text-[9px] text-gray-500">{timeLeft}</span>
        </div>
      </div>
    </a>
  );
}