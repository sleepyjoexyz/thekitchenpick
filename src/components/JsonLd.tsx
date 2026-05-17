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
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.thekitchenpick.com/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
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
  title: string; description: string; url: string; datePublished?: string; dateModified?: string;
}) {
  const today = new Date().toISOString().split('T')[0];
  const publishDate = datePublished || today;
  const modifyDate = dateModified || today;

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "url": url,
      "datePublished": publishDate,
      "dateModified": modifyDate,
      "author": { "@type": "Organization", "name": "The Kitchen Pick" },
      "publisher": { "@type": "Organization", "name": "The Kitchen Pick", "url": "https://www.thekitchenpick.com" }
    })}} />
  );
}

export function ProductListSchema({ products, categoryName, categoryUrl }: {
  // price + rating retained as REQUIRED for call-site back-compat (21 category pages
  // pass these), but no longer emitted into JSON-LD per Amazon Associates Operating
  // Agreement (displayed/structured Amazon prices must come from a live API).
  // AggregateRating removed — ratingCount=1 is not eligible for Google rich results
  // and reads as fake-review markup.
  products: { name: string; brand: string; price: number; rating: number; description: string; imageUrl?: string }[];
  categoryName: string; categoryUrl: string;
}) {
  const FALLBACK_IMAGE = "https://www.thekitchenpick.com/og-image.png";

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `Best ${categoryName} Compared`,
      "url": categoryUrl,
      "numberOfItems": products.length,
      "itemListElement": products.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": `${p.brand} ${p.name}`,
          "image": p.imageUrl || FALLBACK_IMAGE,
          "brand": { "@type": "Brand", "name": p.brand },
          "description": p.description || `${p.brand} ${p.name}`
        }
      }))
    })}} />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    })}} />
  );
}
