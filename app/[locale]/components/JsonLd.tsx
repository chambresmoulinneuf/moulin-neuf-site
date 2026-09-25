import { getTranslations } from 'next-intl/server';
import { BASE_URL, SITE_NAME, localeUrl } from '../../../src/seo';

// Structured data for search engines (schema.org BedAndBreakfast)
export default async function JsonLd({ locale }: { locale: string }) {
  const meta = await getTranslations({ locale, namespace: 'Meta' });
  const spaces = await getTranslations({ locale, namespace: 'Spaces' });

  const room = (titleKey: string, descKey: string, price: number, typeOfBed: string) => ({
    '@type': 'Offer',
    price,
    priceCurrency: 'EUR',
    url: localeUrl(locale, '/contact'),
    itemOffered: {
      '@type': 'HotelRoom',
      name: spaces(titleKey),
      description: spaces(descKey),
      bed: { '@type': 'BedDetails', typeOfBed, numberOfBeds: 1 },
      occupancy: { '@type': 'QuantitativeValue', maxValue: 2 },
    },
  });

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BedAndBreakfast',
    '@id': `${BASE_URL}/#business`,
    name: SITE_NAME,
    description: meta('Home.Description'),
    url: localeUrl(locale, ''),
    image: [
      `${BASE_URL}/og-image.jpg`,
      `${BASE_URL}/images/CMN-maison-et-jardin.jpg`,
      `${BASE_URL}/images/CMN-pont-bed1.jpg`,
      `${BASE_URL}/images/CMN-moulin-bed1.jpg`,
    ],
    logo: `${BASE_URL}/round-logo.png`,
    email: 'reservation@chambresmoulinneuf.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4 Rue du Moulin Neuf',
      postalCode: '86400',
      addressLocality: 'Civray',
      addressRegion: 'Nouvelle-Aquitaine',
      addressCountry: 'FR',
    },
    areaServed: ['Civray', 'Vienne', 'Nouvelle-Aquitaine'],
    priceRange: '55€ - 80€',
    currenciesAccepted: 'EUR',
    checkinTime: '16:00',
    checkoutTime: '11:00',
    petsAllowed: true,
    numberOfRooms: 2,
    availableLanguage: ['en', 'fr'],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Private shower room', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Breakfast available', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Guest kitchen', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Garden with river views', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free on-street parking', value: true },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: spaces('Title'),
      itemListElement: [
        room('ChambreTitle', 'ChambreDesc', 60, 'Double'),
        room('PontTitle', 'PontDesc', 70, 'Queen'),
      ],
    },
    sameAs: ['https://www.youtube.com/@ChambresMoulinNeuf'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
