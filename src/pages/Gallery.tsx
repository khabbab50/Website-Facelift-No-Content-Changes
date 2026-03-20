import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">{t('gallery')}</h1>
          <div className="w-20 h-[1px] bg-brand-accent mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div 
              key={i} 
              className="aspect-[4/5] overflow-hidden group relative cursor-pointer"
              onClick={() => setSelectedImage(`https://picsum.photos/seed/shutter-gallery-${i}/1200/1600`)}
            >
              <img 
                src={`https://picsum.photos/seed/shutter-gallery-${i}/800/1000`} 
                alt={`Gallery image ${i}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x1000?text=Gallery+Image+${i}`;
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Maximize2 className="text-white" size={24} />
                  <p className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">{t('viewFullscreen')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-brand-accent transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
