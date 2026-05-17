const AFFILIATE_TAG = "rogeti02-20";

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

// S1223 (Phase 4b Path A): infer tier label from price for rendering.
// Replaces visible "$N" comparison-table / product-card display with an
// editorial tier label. Thresholds chosen to span the typical consumer-product
// price range across all 36 category pages (Budget < $50, Mid-Range < $150,
// Premium < $400, Luxury >= $400).
export function getPriceTier(price: number): string {
  if (price < 50) return "Budget";
  if (price < 150) return "Mid-Range";
  if (price < 400) return "Premium";
  return "Luxury";
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
