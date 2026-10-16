import type { MetadataRoute } from 'next';
import { routing } from '../src/i18n/routing';
import { PAGES, localeUrl } from '../src/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: localeUrl(locale, page.path),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((loc) => [loc, localeUrl(loc, page.path)])),
      },
    }))
  );
}
