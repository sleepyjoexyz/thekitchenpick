"use client";

import { Product } from "@/lib/types";
import { useState, useMemo } from "react";

interface FilterBarProps {
  products: Product[];
  onFilterChange: (filtered: Product[]) => void;
}

export default function FilterBar({ products, onFilterChange }: FilterBarProps) {
  const [priceRange, setPriceRange] = useState<string>("all");
  const [machineType, setMachineType] = useState<string>("all");
  const [hasGrinder, setHasGrinder] = useState<string>("all");
  const [milkSystem, setMilkSystem] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const filtered = useMemo(() => {
    let result = [...products];

    if (priceRange !== "all") {
      result = result.filter((p) => p.priceRange === priceRange);
    }

    if (machineType !== "all") {
      result = result.filter((p) => p.type === machineType);
    }

    if (hasGrinder !== "all") {
      const shouldHave = hasGrinder === "yes";
      result = result.filter((p) => p.hasGrinder === shouldHave);
    }

    if (milkSystem !== "all") {
      if (milkSystem === "auto") {
        result = result.filter(
          (p) =>
            p.milkSystem.toLowerCase().includes("automatic") ||
            p.milkSystem.toLowerCase().includes("auto")
        );
      } else if (milkSystem === "manual") {
        result = result.filter((p) =>
          p.milkSystem.toLowerCase().includes("steam")
        );
      } else if (milkSystem === "none") {
        result = result.filter((p) => p.milkSystem.toLowerCase() === "none");
      }
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      result.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
    }

    onFilterChange(result);
    return result;
  }, [priceRange, machineType, hasGrinder, milkSystem, sortBy, products, onFilterChange]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
      <h2 className="font-bold text-lg text-gray-900 mb-6">Filters & Sort</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Prices</option>
            <option value="budget">Budget (&lt; $500)</option>
            <option value="mid">Mid-Range ($500-$1500)</option>
            <option value="premium">Premium ($1500-$3000)</option>
            <option value="luxury">Luxury (&gt; $3000)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Machine Type
          </label>
          <select
            value={machineType}
            onChange={(e) => setMachineType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="semi-automatic">Semi-Automatic</option>
            <option value="super-automatic">Super-Automatic</option>
            <option value="pod/capsule">Pod/Capsule</option>
            <option value="manual/lever">Manual/Lever</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Built-in Grinder
          </label>
          <select
            value={hasGrinder}
            onChange={(e) => setHasGrinder(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Any</option>
            <option value="yes">Has Grinder</option>
            <option value="no">No Grinder</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Milk System
          </label>
          <select
            value={milkSystem}
            onChange={(e) => setMilkSystem(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Any</option>
            <option value="auto">Automatic</option>
            <option value="manual">Manual Steam Wand</option>
            <option value="none">No Milk System</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Name A-Z</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        Showing {filtered.length} of {products.length} machines
      </p>
    </div>
  );
}
