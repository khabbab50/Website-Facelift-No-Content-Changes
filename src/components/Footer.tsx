import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const LOGO_URL = '/logo.png';
const LOGO_WHITE_URL = '/main-logo-white-1.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-ink text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src={LOGO_WHITE_URL} 
                alt="Palm Beach Logo" 
                className="h-20 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = LOGO_URL;
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed text-sm">
              {t('footerDesc')}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8 text-brand-accent">{t('navigation')}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/" className="hover:text-white transition-colors">{t('home')}</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">{t('gallery')}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t('about')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8 text-brand-accent">{t('social')}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Houzz</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <p>{t('rights')}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t('privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
