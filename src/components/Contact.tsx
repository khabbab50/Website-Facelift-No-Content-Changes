import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted successfully:', formState);
        setSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormState({ firstName: '', lastName: '', email: '', message: '' });
        }, 5000);
      } catch (error) {
        console.error('Submission error:', error);
        setErrors({ submit: 'Something went wrong. Please try again later.' });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">{t('transformSpace').split('.').map((part, i) => (
              <React.Fragment key={i}>
                {i === 1 ? <span className="italic">{part}</span> : part}
                {i === 0 && <br />}
              </React.Fragment>
            ))}</h2>
            <p className="text-brand-ink/60 leading-relaxed mb-12 max-w-md">
              {t('contactDesc')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-muted flex items-center justify-center text-brand-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-1">{t('callUs')}</p>
                  <p className="font-serif text-xl">(561) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-muted flex items-center justify-center text-brand-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-1">{t('email')}</p>
                  <p className="font-serif text-xl">hello@palmbeachshutters.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-muted flex items-center justify-center text-brand-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-1">{t('visitUs')}</p>
                  <p className="font-serif text-xl">123 Coastal Way, Palm Beach, FL</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 shadow-xl shadow-black/5 rounded-sm relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <CheckCircle2 size={64} className="text-brand-accent mb-6" />
                  <h3 className="text-3xl font-serif mb-4">Message Sent!</h3>
                  <p className="text-brand-ink/60">Thank you for reaching out. We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">{t('firstName')}</label>
                      <input 
                        type="text" 
                        value={formState.firstName}
                        onChange={(e) => {
                          setFormState({...formState, firstName: e.target.value});
                          setErrors({...errors, firstName: ''});
                        }}
                        className={`w-full border-b py-3 focus:border-brand-accent outline-none transition-colors font-serif ${errors.firstName ? 'border-red-400' : 'border-brand-muted'}`}
                        placeholder={t('placeholderName')}
                      />
                      {errors.firstName && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tighter">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">{t('lastName')}</label>
                      <input 
                        type="text" 
                        value={formState.lastName}
                        onChange={(e) => setFormState({...formState, lastName: e.target.value})}
                        className="w-full border-b border-brand-muted py-3 focus:border-brand-accent outline-none transition-colors font-serif"
                        placeholder={t('placeholderLastName')}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">{t('emailAddr')}</label>
                    <input 
                      type="email" 
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({...formState, email: e.target.value});
                        setErrors({...errors, email: ''});
                      }}
                      className={`w-full border-b py-3 focus:border-brand-accent outline-none transition-colors font-serif ${errors.email ? 'border-red-400' : 'border-brand-muted'}`}
                      placeholder={t('placeholderEmail')}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tighter">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">{t('howHelp')}</label>
                    <textarea 
                      rows={4}
                      value={formState.message}
                      onChange={(e) => {
                        setFormState({...formState, message: e.target.value});
                        setErrors({...errors, message: ''});
                      }}
                      className={`w-full border-b py-3 focus:border-brand-accent outline-none transition-colors font-serif resize-none ${errors.message ? 'border-red-400' : 'border-brand-muted'}`}
                      placeholder={t('placeholderMessage')}
                    />
                    {errors.message && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tighter">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-brand-ink text-white text-[10px] uppercase tracking-widest font-bold hover:bg-brand-accent transition-colors mt-8 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      t('sendMessage')
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
