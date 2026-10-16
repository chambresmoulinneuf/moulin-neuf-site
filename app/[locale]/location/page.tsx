import Location from '../components/Location';
import { pageMetadata } from '../../../src/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata(locale, 'Location');
}

export default function LocationPage() {
  return (
    <main>
      <Location />
    </main>
  );
}
