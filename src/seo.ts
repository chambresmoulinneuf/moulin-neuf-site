import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from './i18n/routing';

export const BASE_URL = 'https://www.chambresmoulinneuf.fr';
export const SITE_NAME = 'Chambres Moulin Neuf';

// Pages and their Meta.<key> translation namespace. Also drives app/sitemap.ts.
export const PAGES = [
  { path: '', key: 'Home', priority: 1 },
  { path: '/contact', key: 'Contact', priority: 0.8 },
  { path: '/location', key: 'Location', priority: 0.8 },
  { path: '/privacy-policy', key: 'PrivacyPolicy', priority: 0.3 },
  { path: '/mentions-legales', key: 'MentionsLegales', priority: 0.3 },
] as const;

export type PageKey = (typeof PAGES)[number]['key'];

export function localeUrl(locale: string, path: string) {
  return `${BASE_URL}/${locale}${path}`;
}

// Per-page metadata: title, description, self-referencing canonical, hreflang, OG and Twitter.
export async function pageMetadata(locale: string, key: PageKey): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Meta' });
  const page = PAGES.find((p) => p.key === key)!;
  const url = localeUrl(locale, page.path);
  const title = t(`${key}.Title`);
  const description = t(`${key}.Description`);

  return {
    // Home title already contains the brand, so skip the "%s | Brand" template there
    title: key === 'Home' ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((loc) => [loc, localeUrl(loc, page.path)])),
        'x-default': localeUrl(routing.defaultLocale, page.path),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: locale === 'fr' ? 'fr_FR' : 'en_GB',
      alternateLocale: locale === 'fr' ? 'en_GB' : 'fr_FR',
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: t('OgImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
  };
}
