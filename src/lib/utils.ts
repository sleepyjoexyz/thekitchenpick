const AFFILIATE_TAG = "AFFILIATE_TAG";

export function getAmazonLink(asin: string | null): string | null {
  if (!asin) return null;
  return `https://www.amazon.com/dp/${asin}?tag=${AFFILIATE_TAG}`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function getPriceRangeLabel(
  range: "budget" | "mid" | "premium" | "luxury"
): string {
  const labels: Record<string, string> = {
    budget: "Budget",
    mid: "Mid-Range",
    premium: "Premium",
    luxury: "Luxury",
  };
  return labels[range] || range;
}

export function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    "semi-automatic": "Semi-Automatic",
    "super-automatic": "Super-Automatic",
    "pod/capsule": "Pod/Capsule",
    "manual/lever": "Manual/Lever",
  };
  return labels[type] || type;
}

export function getSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
