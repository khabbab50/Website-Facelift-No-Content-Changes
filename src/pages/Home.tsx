import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      
      {/* About Section - Preserving existing content style */}
      <section className="py-32 bg-brand-bg border-y border-brand-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1000" 
                  alt="Interior design detail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/interior/800/1000';
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-accent/10 -z-10 hidden lg:block" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                {t('craftingLight')} <br />
                <span className="italic">{t('definingPrivacy')}</span>
              </h2>
              <div className="space-y-6 text-brand-ink/70 leading-relaxed">
                <p>
                  {t('homeAbout1')}
                </p>
                <p>
                  {t('homeAbout2')}
                </p>
                <p className="font-serif italic text-xl text-brand-ink">
                  {t('qualityQuote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Contact />
    </>
  );
}
