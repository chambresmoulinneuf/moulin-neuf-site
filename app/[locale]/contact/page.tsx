import ContactForm from '../components/ContactForm';
import { pageMetadata } from '../../../src/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata(locale, 'Contact');
}

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}
