import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Spaces from './components/Spaces';
import VideoTour from './components/VideoTour';

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
