export interface Product {
  id: string;
  brand: string;
  model: string;
  price: number;
  priceRange: "budget" | "mid" | "premium" | "luxury";
  type: string; // "semi-automatic" | "super-automatic" | "pod/capsule" | "manual/lever" for espresso, or other category types
  boilerType: string;
  pressureBars: number;
  hasGrinder: boolean;
  grinderType: string | null;
  milkSystem: string;
  waterTankOz: number;
  dimensions: string;
  weightLbs: number;
  pros: string[];
  cons: string[];
  bestFor: string;
  amazonAsin: string | null;
  rating: number;
  imageAlt: string;
  lastVerified: string | null;
}

export interface ArticleMetadata {
  slug: string;
  title: string;
  description: string;
  category: string;
}
