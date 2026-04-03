import { Deal } from '@/data/mockDeals';

interface DealSchemaProps {
  deals: Deal[];
  categoryName?: string;
  pageUrl: string;
}


// Extract brand from product title using known brands list
function extractBrand(title: string): string {
  const knownBrands = [
    'Ninja', 'Cosori', 'Instant Pot', 'Breville', 'Cuisinart', 'KitchenAid', 'Hamilton Beach',
    'Dyson', 'iRobot', 'Roomba', 'Roborock', 'Ecovacs', 'Shark',
    'Keurig', 'Nespresso', 'DeLonghi', 'Philips', 'Bose', 'Sony', 'Apple', 'Samsung',
    'LG', 'JBL', 'Sennheiser', 'Audio-Technica', 'Jabra', 'Anker', 'Logitech',
    'Razer', 'Corsair', 'SteelSeries', 'HyperX', 'Dell', 'ASUS', 'Acer', 'BenQ',
    'Ring', 'Arlo', 'Wyze', 'Google', 'Amazon', 'Eufy', 'Graco', 'Chicco',
    'UPPAbaby', 'Britax', 'Baby Jogger', 'Fisher-Price', 'VTech', 'Hatch',
    'Furbo', 'Petcube', 'Litter-Robot', 'Whistle', 'Fi', 'PetSafe',
    'Levoit', 'Honeywell', 'Coway', 'Winix', 'Blueair', 'Oral-B', 'Waterpik',
    'FlexiSpot', 'Uplift', 'Theragun', 'Hyperice', 'Renpho',
    'Bang & Olufsen', 'Marshall', 'Sonos', 'Ultimate Ears',
  ];
  const titleLower = title.toLowerCase();
  for (const brand of knownBrands) {
    if (titleLower.startsWith(brand.toLowerCase())) {
      return brand;
    }
  }
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
    const brand = extractBrand(deal.title);
    return {
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': deal.title,
        'description': deal.title,
        ...(deal.imageUrl ? { 'image': deal.imageUrl } : {}),
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
            'shippingDestination': {
              '@type': 'DefinedRegion',
              'addressCountry': 'US'
            },
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
