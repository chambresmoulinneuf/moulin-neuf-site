import MentionsLegales from '../components/MentionsLegales';
import { pageMetadata } from '../../../src/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata(locale, 'MentionsLegales');
}

export default function MentionsLegalesPage() {
  return (
    <main>
      <MentionsLegales />
    </main>
  );
}
