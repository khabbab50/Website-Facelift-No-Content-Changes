import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('plantationShutters'),
      description: t('plantationDesc'),
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: t('motorizedShades'),
      description: t('motorizedDesc'),
      image: 'https://images.unsplash.com/photo-1523413363574-c3c4447df0d6?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: t('designerBlinds'),
      description: t('designerDesc'),
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">{t('expertise')}</h2>
            <p className="text-brand-ink/60 leading-relaxed">
              {t('expertiseDesc')}
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-12 bg-brand-muted" />
          <div className="text-[10px] uppercase tracking-widest font-bold text-brand-accent cursor-pointer hover:text-brand-ink transition-colors">
            {t('viewAll')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/expertise${i}/800/1000`;
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-ink/0 group-hover:bg-brand-ink/10 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:italic transition-all">{service.title}</h3>
              <p className="text-brand-ink/60 text-sm leading-relaxed">{service.description}</p>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-brand-accent transition-colors"
              >
                {t('learnMore')} <div className="w-8 h-[1px] bg-brand-ink group-hover:bg-brand-accent transition-colors" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
