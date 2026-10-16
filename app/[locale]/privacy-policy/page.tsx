import PrivacyPolicy from '../components/PrivacyPolicy';
import { pageMetadata } from '../../../src/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata(locale, 'PrivacyPolicy');
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}
