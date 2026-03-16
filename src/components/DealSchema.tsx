import { Deal } from '@/data/mockDeals';

interface DealSchemaProps {
  deals: Deal[];
  categoryName?: string;
  pageUrl: string;
}

export function DealSchema({ deals, categoryName, pageUrl }: DealSchemaProps) {
  if (!deals || deals.length === 0) {
    return null;
  }

  // Get tomorrow's date for priceValidUntil
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const priceValidUntil = tomorrow.toISOString().split('T')[0];

  // Generate Product schema for each deal
  const items = deals.map((deal, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'item': {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': deal.title,
      'description': deal.title,
      'offers': {
        '@type': 'Offer',
        'price': deal.dealPrice,
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock',
        'url': deal.amazonUrl,
        'priceValidUntil': priceValidUntil
      }
    }
  }));

  // Generate ItemList schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': categoryName ? `Best ${categoryName} Deals Today` : 'Today\'s Best Deals',
    'url': pageUrl,
    'numberOfItems': deals.length,
    'itemListElement': items
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
