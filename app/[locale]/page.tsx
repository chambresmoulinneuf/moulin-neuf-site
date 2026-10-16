import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Spaces from './components/Spaces';
import VideoTour from './components/VideoTour';
import { pageMetadata } from '../../src/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata(locale, 'Home');
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Spaces />
      <VideoTour />
    </main>
  );
}
