'use client';

export function WebSiteSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "The Kitchen Pick",
      "url": "https://www.thekitchenpick.com",
      "description": "Data-driven home and kitchen product comparisons",
      "publisher": {
        "@type": "Organization",
        "name": "The Kitchen Pick",
        "url": "https://www.thekitchenpick.com"
      }
    })}} />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.name,
        "item": item.url
      }))
    })}} />
  );
}

export function ArticleSchema({ title, description, url, datePublished, dateModified }: {
  title: string; description: string; url: string; datePublished: string; dateModified: string;
}) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "url": url,
      "datePublished": datePublished,
      "dateModified": dateModified,
      "author": { "@type": "Organization", "name": "The Kitchen Pick" },
      "publisher": { "@type": "Organization", "name": "The Kitchen Pick", "url": "https://www.thekitchenpick.com" }
    })}} />
  );
}

export function ProductListSchema({ products, categoryName, categoryUrl }: {
  products: { name: string; brand: string; price: number; rating: number; description: string }[];
  categoryName: string; categoryUrl: string;
}) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `Best ${categoryName} Compared`,
      "url": categoryUrl,
      "numberOfItems": products.length,
      "itemListElement": products.slice(0, 10).map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": `${p.brand} ${p.name}`,
          "brand": { "@type": "Brand", "name": p.brand },
          "description": p.description || `${p.brand} ${p.name}`,
          "offers": { "@type": "Offer", "price": p.price, "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": p.rating, "bestRating": 5, "worstRating": 1, "ratingCount": 1 }
        }
      }))
    })}} />
  );
}
