'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Coffee, Accessibility, PawPrint, Car, Bike, TreePine } from 'lucide-react';
import PhotoLightbox, { type LightboxImage } from './PhotoLightbox';

const amenities = [
  { icon: Coffee, titleKey: 'BreakfastTitle', descKey: 'BreakfastPara', extraKey: 'MealsPara' },
  { icon: Accessibility, titleKey: 'AccessTitle', descKey: 'AccessPara' },
  { icon: PawPrint, titleKey: 'PetsTitle', descKey: 'PetsPara' },
  { icon: Car, titleKey: 'ParkingTitle', descKey: 'ParkingPara' },
  { icon: Bike, titleKey: 'BikesTitle', descKey: 'BikesPara' },
  { icon: TreePine, titleKey: 'GardenTitle', descKey: 'GardenPara' },
];

const galleryImages = [
  { src: '/images/CMN-facade-simca1.jpg', alt: 'Chambres Moulin Neuf - facade', wide: true },
  { src: '/images/CMN-maison-et-jardin.jpg', alt: 'Chambres Moulin Neuf - house and garden' },
  { src: '/images/CMN-jardin-pagoda-charante.jpg', alt: 'Chambres Moulin Neuf - garden pagoda' },
  { src: '/images/CMN-facade-simca2.jpg', alt: 'Chambres Moulin Neuf - facade', wide: true },
  { src: '/images/CMN-escalier1.jpg', alt: 'Chambres Moulin Neuf - staircase' },
  { src: '/images/CMN-escalier2.jpg', alt: 'Chambres Moulin Neuf - staircase' },
  { src: '/images/CMN-cuisine1.jpg', alt: 'Chambres Moulin Neuf - guest kitchen' },
  { src: '/images/CMN-cuisine2.jpg', alt: 'Chambres Moulin Neuf - guest kitchen' },
  { src: '/images/CMN-charante1.jpg', alt: 'The Charente river', wide: true },
];

export default function Welcome() {
  const t = useTranslations('Welcome');
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null);

  return (
    <section className="bg-cream py-20 px-6 md:px-10 lg:px-36">
      <div className="max-w-[1152px] mx-auto">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-forest leading-tight tracking-tight mb-6">
              {t('Title')}
            </h2>
            <div className="space-y-4 text-lg text-ink/80 leading-relaxed tracking-tight">
              <p>{t('IntroPara1')}</p>
              <p>{t('IntroPara2')}</p>
              <p>{t('IntroPara3')}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() =>
              setLightbox({
                images: [{ src: '/images/CMN-facade-simca1.jpg', alt: 'Chambres Moulin Neuf - facade' }],
                index: 0,
              })
            }
            className="w-full h-96 rounded-lg overflow-hidden relative group cursor-zoom-in"
          >
            {/* Positioned to keep the Simca and front door in frame and crop the neighbouring wall on the left edge */}
            <Image
              src="/images/CMN-facade-simca1.jpg"
              alt="Chambres Moulin Neuf - facade"
              fill
              className="object-cover object-[35%_center] group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Facilities */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-forest leading-tight tracking-tight mb-4">
            {t('FacilitiesTitle')}
          </h3>
          <p className="text-base text-ink/70 leading-relaxed tracking-tight max-w-3xl mx-auto">
            {t('AvailabilityPara')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-16">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-forest leading-7 tracking-tight mb-1">
                    {t(item.titleKey)}
                  </h4>
                  <p className="text-sm text-ink/70 leading-relaxed tracking-tight">
                    {t(item.descKey)}
                  </p>
                  {item.extraKey && (
                    <p className="text-sm text-ink/70 leading-relaxed tracking-tight mt-2">
                      {t(item.extraKey)}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Character photo strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setLightbox({ images: galleryImages, index })}
              className={`relative rounded-lg overflow-hidden group cursor-zoom-in ${ img.wide
                  ? 'col-span-2 aspect-[2/1]'
                  : 'aspect-square'
              }`}
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
