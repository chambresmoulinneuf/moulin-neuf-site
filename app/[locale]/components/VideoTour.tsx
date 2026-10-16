'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Play } from 'lucide-react';

// Thumbnails are self-hosted so nothing is requested from YouTube/Google until a
// visitor clicks play (Clive wants to minimise data shared with Google).
const videos = [
  { id: 'oWRnuutpZg4', titleKey: 'MoulinTitle', thumbnail: '/images/CMN-video-moulin.webp' },
  { id: 'Te_KxXzDzVc', titleKey: 'PontTitle', thumbnail: '/images/CMN-video-pont.webp' },
  { id: 'MKE97-1Y_go', titleKey: 'DiningTitle', thumbnail: '/images/CMN-video-dining.webp' },
  { id: '_dP6so_P9es', titleKey: 'StaircaseTitle', thumbnail: '/images/CMN-video-staircase.webp' },
];

export default function VideoTour() {
  const t = useTranslations('VideoTour');
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section id="video-tour" className="bg-cream py-20 px-6 md:px-10 lg:px-36">
      <div className="max-w-[1152px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-forest leading-tight tracking-tight mb-6">
            {t('Title')}
          </h2>
          <p className="text-lg text-ink/70 leading-7 tracking-tight">
            {t('Description')}
          </p>
        </div>

        {/* Videos (vertical Shorts): swipeable row on mobile, 4-column grid from md (lg: avoided, see globals.css breakpoint note) */}
        <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-6 px-6 md:mx-auto md:px-0 pb-2">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col shrink-0 w-[70%] sm:w-[45%] md:w-auto snap-center">
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-ink">
                {playing === video.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                    title={t(video.titleKey)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(video.id)}
                    aria-label={`${t('Play')}: ${t(video.titleKey)}`}
                    className="absolute inset-0 w-full h-full group cursor-pointer"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={t(video.titleKey)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-forest shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 ml-1" fill="currentColor" />
                      </span>
                    </span>
                  </button>
                )}
              </div>
              <h3 className="text-lg font-semibold text-forest leading-7 tracking-tight mt-4">
                {t(video.titleKey)}
              </h3>
            </div>
          ))}
        </div>

        <p className="text-xs text-ink/60 leading-5 tracking-tight text-center mt-8">
          {t('PrivacyNote')}
        </p>
      </div>
    </section>
  );
}
