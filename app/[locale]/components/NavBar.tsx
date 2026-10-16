'use client'

import { Link } from '../../../src/i18n/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function NavBar({ locale }: { locale: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('Nav');

  const navItems = [
    { title: t('Spaces'), href: { pathname: '/', hash: 'spaces' } },
    { title: t('Location'), href: '/location' },
    { title: t('Contact'), href: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-cream border-b border-sage/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/round-logo-icon.png"
                alt={t('SiteName')}
                fill
                sizes="(min-width: 640px) 48px, 36px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm sm:text-xl font-bold text-forest tracking-tight leading-4 sm:leading-7 whitespace-nowrap">
                {t('SiteName')}
              </p>
              <p className="text-[10px] sm:text-xs font-light text-sage tracking-tight leading-4">
                {t('Tagline')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-base font-medium text-ink hover:text-sage transition-colors tracking-tight"
              >
                {item.title}
              </Link>
            ))}
            <div className="pl-6 border-l border-sage/30">
              <LanguageSwitcher locale={locale} />
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher locale={locale} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-forest hover:text-sage transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 md:hidden z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="fixed top-20 left-0 right-0 bg-cream md:hidden shadow-lg animate-slide-down z-50">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block px-6 py-4 border-b border-sage/10 hover:bg-sage/10 text-ink hover:text-sage transition-all font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
