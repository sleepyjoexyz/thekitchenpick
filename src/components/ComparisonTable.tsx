"use client";

import { Product } from "@/lib/types";
import { formatPrice, getTypeLabel, formatRating, getAmazonLink } from "@/lib/utils";
import { useState } from "react";

interface ComparisonTableProps {
  products: Product[];
}

type SortField = "price" | "rating" | "pressureBars" | null;
type SortOrder = "asc" | "desc";

export default function ComparisonTable({ products }: ComparisonTableProps) {
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sorted = [...products].sort((a, b) => {
    if (!sortField) return 0;

    let aVal = a[sortField as keyof Product];
    let bVal = b[sortField as keyof Product];

    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    }

    return 0;
  });

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const getSortIndicator = (field: SortField) => {
    if (sortField !== field) return " ↕";
    return sortOrder === "asc" ? " ↑" : " ↓";
  };

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="px-4 py-3 text-left font-bold text-gray-900">
              Brand & Model
            </th>
            <th
              className="px-4 py-3 text-left font-bold text-gray-900 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSort("price")}
            >
              Price{getSortIndicator("price")}
            </th>
            <th className="px-4 py-3 text-left font-bold text-gray-900">
              Type
            </th>
            <th className="px-4 py-3 text-left font-bold text-gray-900">
              Boiler
            </th>
            <th
              className="px-4 py-3 text-left font-bold text-gray-900 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSort("pressureBars")}
            >
              Pressure{getSortIndicator("pressureBars")}
            </th>
            <th className="px-4 py-3 text-left font-bold text-gray-900">
              Grinder
            </th>
            <th className="px-4 py-3 text-left font-bold text-gray-900">
              Milk System
            </th>
            <th
              className="px-4 py-3 text-left font-bold text-gray-900 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSort("rating")}
            >
              Rating{getSortIndicator("rating")}
            </th>
            <th className="px-4 py-3 text-left font-bold text-gray-900">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((product, index) => {
            const amazonUrl = getAmazonLink(product.amazonAsin);
            return (
              <tr
                key={product.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3 font-medium text-gray-900">
                  {product.brand} {product.model}
                </td>
                <td className="px-4 py-3 text-blue-600 font-bold">
                  {formatPrice(product.price)}
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {getTypeLabel(product.type)}
                </td>
                <td className="px-4 py-3 text-gray-700">{product.boilerType}</td>
                <td className="px-4 py-3 text-gray-700">
                  {product.pressureBars} bar
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {product.hasGrinder ? (
                    <>
                      Yes{product.grinderType && ` (${product.grinderType})`}
                    </>
                  ) : (
                    "No"
                  )}
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {product.milkSystem}
                </td>
                <td className="px-4 py-3">
                  <span className="font-bold text-gray-900">
                    {formatRating(product.rating)}
                  </span>
                  <span className="text-yellow-500 ml-1">★</span>
                </td>
                <td className="px-4 py-3">
                  {amazonUrl ? (
                    <a
                      href={amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Amazon
                    </a>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
