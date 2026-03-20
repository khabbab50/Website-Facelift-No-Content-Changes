import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              {t('aboutUsTitle')}
            </h1>
            <div className="space-y-6 text-brand-ink/70 leading-relaxed text-lg">
              <p>
                {t('aboutDesc1')}
              </p>
              <p>
                {t('aboutDesc2')}
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000" 
              alt="Our workshop"
              className="w-full aspect-square object-cover rounded-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/workshop/1000/1000';
              }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-xs">
              <p className="font-serif italic text-2xl mb-2">{t('yearsExcellence')}</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">{t('excellenceFlorida')}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center border-t border-brand-muted pt-20">
          <div>
            <h3 className="text-3xl font-serif mb-4">{t('quality')}</h3>
            <p className="text-brand-ink/60 text-sm">{t('qualityDesc')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-serif mb-4">{t('precision')}</h3>
            <p className="text-brand-ink/60 text-sm">{t('precisionDesc')}</p>
          </div>
          <div>
            <h3 className="text-3xl font-serif mb-4">{t('service')}</h3>
            <p className="text-brand-ink/60 text-sm">{t('serviceDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
