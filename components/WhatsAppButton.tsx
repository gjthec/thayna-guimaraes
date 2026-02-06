
import React from 'react';
import { IMAGE_CONFIG } from '../config';

export const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href={IMAGE_CONFIG.social.whatsapp} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
      </svg>
      <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] group-hover:ml-2 transition-all duration-500 whitespace-nowrap text-sm font-bold uppercase tracking-wider">
        Agende via WhatsApp
      </span>
    </a>
  );
};
