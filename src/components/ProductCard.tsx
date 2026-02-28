"use client";

import { Product } from "@/lib/types";
import { formatPrice, getTypeLabel, formatRating, getAmazonLink } from "@/lib/utils";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const amazonUrl = getAmazonLink(product.amazonAsin);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-br from-blue-50 to-gray-50 h-40 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-300 mb-2">☕</div>
          <p className="text-xs text-gray-500">{product.brand}</p>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm mb-1">
          {product.brand} {product.model}
        </h3>
        <p className="text-xl font-bold text-blue-600 mb-3">
          {formatPrice(product.price)}
        </p>

        <div className="space-y-2 mb-4 text-xs text-gray-600">
          <div className="flex justify-between">
            <span>Type:</span>
            <span className="font-medium text-gray-900">
              {getTypeLabel(product.type)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Rating:</span>
            <span className="font-medium text-gray-900">
              {formatRating(product.rating)} / 5
            </span>
          </div>
          <div className="flex justify-between">
            <span>Pressure:</span>
            <span className="font-medium text-gray-900">
              {product.pressureBars} bar
            </span>
          </div>
          <div className="flex justify-between">
            <span>Grinder:</span>
            <span className="font-medium text-gray-900">
              {product.hasGrinder ? "Yes" : "No"}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          {amazonUrl && (
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 text-white py-2 rounded font-medium text-sm hover:bg-blue-700 transition-colors"
            >
              View on Amazon
            </a>
          )}
          <Link
            href={`/espresso-machines/${product.id}`}
            className="block w-full text-center bg-gray-100 text-gray-900 py-2 rounded font-medium text-sm hover:bg-gray-200 transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
