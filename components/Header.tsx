
import React, { useState, useEffect } from 'react';
import { IMAGE_CONFIG } from '../config';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-tight text-[#1A1A1A] uppercase leading-none">{IMAGE_CONFIG.professional.name}</span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-gold mt-1 font-bold">{IMAGE_CONFIG.professional.title}</span>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center text-xs font-bold tracking-widest uppercase">
          <a href="#procedimentos" className="text-[#1A1A1A] hover:text-gold transition-colors">Procedimentos</a>
          <a href="#autoridade" className="text-[#1A1A1A] hover:text-gold transition-colors">Diferencial</a>
          <a href={IMAGE_CONFIG.social.instagram} target="_blank" className="text-[#1A1A1A] hover:text-gold transition-colors">Instagram</a>
          <a 
            href={IMAGE_CONFIG.social.whatsapp} 
            target="_blank"
            className="bg-[#1A1A1A] text-white px-6 py-3 rounded-sm hover:bg-gold transition-all shadow-lg hover:-translate-y-0.5"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
};
