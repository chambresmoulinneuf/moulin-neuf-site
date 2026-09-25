import type { Metadata } from "next";
import { Playfair_Display, Lato, Jost } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '../../src/i18n/routing';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import JsonLd from './components/JsonLd';
import {BASE_URL, SITE_NAME} from '../../src/seo';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t('Home.Title'),
      template: `%s | ${SITE_NAME}`,
    },
    description: t('Home.Description'),
    keywords: [
      'chambre d\'hôtes Civray', 'chambres d\'hôtes Civray', 'chambre d\'hôtes Vienne',
      'chambre d\'hôtes Poitou', 'hébergement Civray', 'maison d\'hôtes Civray',
      'chambre d\'hôtes animaux acceptés', 'chambre d\'hôtes près de la RN10',
      'B&B Civray', 'bed and breakfast Civray', 'bed and breakfast Vienne France',
      'B&B Nouvelle-Aquitaine', 'accommodation Civray', 'pet friendly B&B France',
      'B&B near RN10', 'B&B between Poitiers and Angoulême',
    ],
    authors: [{ name: SITE_NAME }],
    other: {
      google: 'notranslate',
    },
  };
}

export type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function RootLayout({
  children,
  params
}: LayoutProps) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} translate="no">
      <body
        className={`${playfair.variable} ${lato.variable} ${jost.variable} antialiased`}
      >
        <JsonLd locale={locale} />
        <NextIntlClientProvider messages={messages}>
          <NavBar locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
