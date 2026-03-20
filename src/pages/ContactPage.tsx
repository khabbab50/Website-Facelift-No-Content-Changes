import React from 'react';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Contact Us</h1>
          <div className="w-20 h-[1px] bg-brand-accent mx-auto" />
        </div>
        <Contact />
      </div>
    </div>
  );
}
