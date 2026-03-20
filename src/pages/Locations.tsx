import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Locations() {
  const { t } = useLanguage();
  const locations = [
    {
      city: 'Palm Beach',
      address: '123 Coastal Way, Palm Beach, FL 33480',
      phone: '(561) 555-0123',
      email: 'palmbeach@palmbeachshutters.com',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    },
    {
      city: 'West Palm Beach',
      address: '456 Downtown Ave, West Palm Beach, FL 33401',
      phone: '(561) 555-0456',
      email: 'westpalm@palmbeachshutters.com',
      image: 'https://images.unsplash.com/photo-1523413363574-c3c4447df0d6?auto=format&fit=crop&q=80&w=800',
    },
    {
      city: 'Boca Raton',
      address: '789 Luxury Blvd, Boca Raton, FL 33432',
      phone: '(561) 555-0789',
      email: 'boca@palmbeachshutters.com',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">{t('ourLocations')}</h1>
          <div className="w-20 h-[1px] bg-brand-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {locations.map((loc, i) => (
            <div key={i} className="bg-white p-8 shadow-xl shadow-black/5 rounded-sm">
              <div className="aspect-video overflow-hidden mb-8">
                <img 
                  src={loc.image} 
                  alt={loc.city}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/location${i}/800/600`;
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-serif mb-6">{loc.city}</h3>
              <div className="space-y-4 text-brand-ink/60 text-sm">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-brand-accent flex-shrink-0" />
                  <p>{loc.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-brand-accent flex-shrink-0" />
                  <p>{loc.phone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-brand-accent flex-shrink-0" />
                  <p>{loc.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
