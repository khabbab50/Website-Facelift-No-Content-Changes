import React, { useState } from 'react';
import { Tag, Clock, CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Promotions() {
  const { t } = useLanguage();
  const [selectedPromo, setSelectedPromo] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const promotions = [
    {
      title: 'Spring Refresh Sale',
      discount: '20% OFF',
      description: 'Get 20% off on all plantation shutters during our spring refresh sale.',
      expiry: 'Ends April 30, 2026',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Motorization Upgrade',
      discount: 'FREE UPGRADE',
      description: 'Free motorization upgrade on any order of 5 or more shades.',
      expiry: 'Limited Time Offer',
      image: 'https://images.unsplash.com/photo-1523413363574-c3c4447df0d6?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Whole Home Discount',
      discount: 'SAVE $500',
      description: 'Save $500 when you outfit your entire home with our window treatments.',
      expiry: 'Ongoing Offer',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800',
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSelectedPromo(null);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pt-32 pb-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">{t('promotions')}</h1>
          <div className="w-20 h-[1px] bg-brand-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {promotions.map((promo, i) => (
            <div key={i} className="bg-white p-8 shadow-xl shadow-black/5 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-brand-accent text-white px-6 py-2 text-[10px] uppercase tracking-widest font-bold z-10">
                {promo.discount}
              </div>
              <div className="aspect-video overflow-hidden mb-8">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${promo.title}/800/600`;
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-serif mb-6">{promo.title}</h3>
              <p className="text-brand-ink/60 text-sm mb-8 leading-relaxed">{promo.description}</p>
              
              <div className="space-y-4 text-brand-ink/40 text-[10px] uppercase tracking-widest font-bold">
                <div className="flex items-center gap-3">
                  <Clock size={14} />
                  <p>{promo.expiry}</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={14} />
                  <p>Terms & Conditions Apply</p>
                </div>
              </div>

              <button 
                onClick={() => setSelectedPromo(promo)}
                className="w-full py-4 border border-brand-ink text-brand-ink text-[10px] uppercase tracking-widest font-bold hover:bg-brand-ink hover:text-white transition-all mt-10"
              >
                {t('claimOffer')}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Claim Offer Modal */}
      <AnimatePresence>
        {selectedPromo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPromo(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg p-8 md:p-12 rounded-sm shadow-2xl"
            >
              <button 
                onClick={() => setSelectedPromo(null)}
                className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">{t('offerClaimed')}</h3>
                  <p className="text-brand-ink/60">{t('offerClaimedDesc')}</p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent mb-2">{t('claimingOffer')}</p>
                    <h3 className="text-3xl font-serif">{selectedPromo.title}</h3>
                    <p className="text-brand-accent font-bold mt-1">{selectedPromo.discount}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">{t('fullName')}</label>
                      <input 
                        required
                        type="text" 
                        className="w-full border-b border-brand-muted py-3 outline-none focus:border-brand-accent transition-colors"
                        placeholder={t('placeholderName') + ' ' + t('placeholderLastName')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">{t('emailAddr')}</label>
                      <input 
                        required
                        type="email" 
                        className="w-full border-b border-brand-muted py-3 outline-none focus:border-brand-accent transition-colors"
                        placeholder={t('placeholderEmail')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">{t('callUs')}</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full border-b border-brand-muted py-3 outline-none focus:border-brand-accent transition-colors"
                        placeholder="(561) 000-0000"
                      />
                    </div>
                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-brand-ink text-white py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-accent transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? t('processing') : t('submitClaim')}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
