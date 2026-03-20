import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

// Using the local logo asset from public folder
const LOGO_URL = '/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (langCode: string) => {
    // Update Google Translate
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
    
    // Update LanguageContext if the code matches supported languages
    if (['en', 'bn', 'es', 'ar', 'hi', 'zh'].includes(langCode)) {
      setLanguage(langCode as 'en' | 'bn' | 'es' | 'ar' | 'hi' | 'zh');
    }
  };

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('gallery'), href: '/gallery' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
    { name: t('locations'), href: '/locations' },
    { name: t('promotions'), href: '/promotions' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'bn', name: 'Bengali', flag: '🇧🇩' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={LOGO_URL} 
            alt="Palm Beach Logo" 
            className="h-14 md:h-20 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x80?text=Palm+Beach';
            }}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              to={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors hover:text-brand-accent ${
                location.pathname === link.href ? 'text-brand-accent' : 'text-brand-ink'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Language Selector */}
          <div className="ml-4 flex items-center gap-2 border-l border-brand-muted pl-6">
            <Globe size={14} className="text-brand-accent" />
            <select 
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-transparent text-[10px] uppercase tracking-widest font-bold outline-none cursor-pointer hover:text-brand-accent transition-colors"
            >
              <option value="">Select Language</option>
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        </nav>

        {/* Hamburger Toggle */}
        <div className="flex items-center gap-4 xl:hidden">
          <button 
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[70] p-12 flex flex-col overflow-y-auto"
            >
              <button 
                className="absolute top-8 right-8 p-2 hover:bg-black/5 rounded-full transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>

              <div className="mt-12 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.href}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between text-xl font-serif hover:italic transition-all ${
                        location.pathname === link.href ? 'text-brand-accent italic' : 'text-brand-ink'
                      }`}
                    >
                      {link.name}
                      <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-brand-muted">
                <p className="text-[10px] uppercase tracking-widest text-brand-accent mb-4 font-bold">Language</p>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map(lang => (
                    <button 
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className="text-left text-sm font-medium hover:text-brand-accent transition-colors"
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-12 border-t border-brand-muted">
                <p className="text-[10px] uppercase tracking-widest text-brand-accent mb-4 font-bold">Contact</p>
                <p className="font-serif text-lg">info@palmbeachshutters.com</p>
                <p className="font-serif text-lg">(561) 555-0123</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
