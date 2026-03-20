import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern interior with shutters"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-brand-accent"
          >
            {t('heroSubtitle')}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8"
          >
            {t('heroTitle').split('.').map((part, i) => (
              <React.Fragment key={i}>
                {i === 1 ? <span className="italic">{part}</span> : part}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-brand-ink/70 leading-relaxed mb-10 max-w-lg"
          >
            {t('heroDesc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="inline-block px-10 py-5 bg-brand-ink text-white text-[10px] uppercase tracking-widest font-bold hover:bg-brand-accent transition-colors rounded-sm"
            >
              {t('cta')}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: '100px' }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-brand-ink/20"
      />
    </section>
  );
}
