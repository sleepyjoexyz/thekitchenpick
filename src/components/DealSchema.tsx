import { Deal } from '@/data/mockDeals';

interface DealSchemaProps {
  deals: Deal[];
  categoryName?: string;
  pageUrl: string;
}


// Extract ASIN from Amazon product URL (e.g. /dp/B07NTFMFQD)
function extractAsin(url: string): string | null {
  const match = url.match(/\/dp\/([A-Z0-9]{10})/);
  return match ? match[1] : null;
}

// Build standard Amazon product image URL — no PA-API required
function getAmazonImageUrl(asin: string): string {
  return `https://images.amazon.com/images/P/${asin}.01._SL250_.jpg`;
}

// Extract brand from product title (first word is the brand)
function extractBrand(title: string): string {
  return title.split(' ')[0];
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
  const items = deals.map((deal, index) => {
    const asin = extractAsin(deal.amazonUrl);
    const brand = extractBrand(deal.title);
    return {
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': deal.title,
        'description': deal.title,
        ...(asin ? { 'image': getAmazonImageUrl(asin) } : {}),
        'brand': { '@type': 'Brand', 'name': brand },
        'offers': {
          '@type': 'Offer',
          'price': deal.dealPrice,
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock',
          'url': deal.amazonUrl,
          'priceValidUntil': priceValidUntil,
          'shippingDetails': {
            '@type': 'OfferShippingDetails',
            'shippingRate': {
              '@type': 'MonetaryAmount',
              'value': 0,
              'currency': 'USD'
            },
            'deliveryTime': {
              '@type': 'ShippingDeliveryTime',
              'handlingTime': {
                '@type': 'QuantitativeValue',
                'minValue': 0,
                'maxValue': 1,
                'unitCode': 'DAY'
              },
              'transitTime': {
                '@type': 'QuantitativeValue',
                'minValue': 1,
                'maxValue': 5,
                'unitCode': 'DAY'
              }
            }
          },
          'hasMerchantReturnPolicy': {
            '@type': 'MerchantReturnPolicy',
            'applicableCountry': 'US',
            'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
            'merchantReturnDays': 30,
            'returnMethod': 'https://schema.org/ReturnByMail',
            'returnFees': 'https://schema.org/FreeReturn'
          }
        }
      }
    };
  });

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
