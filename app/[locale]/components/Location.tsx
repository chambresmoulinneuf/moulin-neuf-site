'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../../src/i18n/navigation';
import { Navigation, TrainFront, Plane, Car } from 'lucide-react';
import Image from 'next/image';
import PhotoLightbox, { type LightboxImage } from './PhotoLightbox';
import BeamBorder from './BeamBorder';

const transportItems = [
  { icon: Navigation, textKey: 'TransportRoad' },
  { icon: TrainFront, textKey: 'TransportTrain' },
  { icon: Plane, textKey: 'TransportAir' },
  { icon: Car, textKey: 'TransportCarHire' },
];

const locationImages = [
  { src: '/images/Civray-square.jpg', alt: 'Civray main square' },
  { src: '/images/Civray-stnicholas1.jpg', alt: 'Saint Nicholas Church, Civray' },
  { src: '/images/Civray-stnicolas2.jpg', alt: 'Saint Nicholas Church, Civray' },
  { src: '/images/CMNgpview.jpg', alt: 'View towards the Grand Pont' },
];

export default function Location() {
  const t = useTranslations('Location');
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null);

  return (
    <section id="location" className="bg-cream py-20 px-6 md:px-10 lg:px-36">
      <div className="max-w-[1152px] mx-auto">
        {/* Local amenities & attractions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-forest leading-tight tracking-tight mb-8">
              {t('AmenitiesTitle')}
            </h2>
            <div className="space-y-4 text-base text-ink/80 leading-relaxed tracking-tight">
              <p>{t('AmenitiesPara1')}</p>
              <p>{t('AmenitiesPara2')}</p>
              <p>{t('AmenitiesPara3')}</p>
              <p>{t('AmenitiesPara4')}</p>
              <p>{t('AmenitiesPara5')}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {locationImages.map((img, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setLightbox({ images: locationImages, index })}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-zoom-in"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Transport and Getting here */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-forest leading-tight tracking-tight mb-8">
            {t('TransportTitle')}
          </h3>
          <ul className="space-y-6 mb-10">
            {transportItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="flex items-start gap-4">
                  <Icon className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                  <span className="text-base text-ink/80 leading-relaxed tracking-tight">
                    {t(item.textKey)}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="text-center">
            <Link href="/contact" className="btn-primary">
              {t('ExploreButton')}
              <BeamBorder />
            </Link>
          </div>
        </div>
      </div>

      {lightbox && (
        <PhotoLightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onIndexChange={(index) => setLightbox((prev) => (prev ? { ...prev, index } : prev))}
        />
      )}
    </section>
  );
}
