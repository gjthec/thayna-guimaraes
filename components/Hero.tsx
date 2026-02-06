
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { getImagePath, IMAGE_CONFIG } from '../config';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-32 overflow-hidden bg-[#FDFCFB]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 transform origin-top pointer-events-none"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Lado Esquerdo: Textos e CTAs */}
        <div className="z-30 order-1 lg:order-1 relative">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">Caxias do Sul • RS</span>
          </div>
          
          <h1 className="font-serif text-5xl lg:text-7xl text-[#1A1A1A] leading-[1.1] mb-8">
            A Ciência do <br/>
            <span className="italic text-gold">Cuidado</span> <br/>
            na sua Pele
          </h1>
          
          <p className="text-lg lg:text-xl text-[#444444] mb-12 max-w-lg leading-relaxed font-normal">
            Protocolos de alta performance desenvolvidos por <strong>Thayná Guimarães</strong> para quem busca resultados naturais e excelência estética.
          </p>
          
          {/* Botão de Destaque Máximo */}
          <div className="flex flex-col sm:flex-row gap-5 relative z-40">
            <a 
              href={IMAGE_CONFIG.social.whatsapp}
              target="_blank"
              className="group bg-[#1A1A1A] text-white px-10 py-5 rounded-sm flex items-center justify-center gap-3 hover:bg-gold transition-all shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_rgba(197,160,89,0.3)] hover:-translate-y-1 active:scale-95"
            >
              <span className="font-bold tracking-widest uppercase text-sm">Agendar Avaliação</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-gold group-hover:text-white" />
            </a>
            <a 
              href="#procedimentos" 
              className="px-10 py-5 rounded-sm border-2 border-[#1A1A1A] bg-white flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-all text-[#1A1A1A] font-bold uppercase text-sm tracking-wider shadow-sm"
            >
              Ver Tratamentos
            </a>
          </div>
        </div>

        {/* Lado Direito: Imagem e Badges */}
        <div className="relative order-2 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gold/10 rounded-full blur-[100px] opacity-40"></div>
            
            <div className="relative">
              {/* Container da Imagem Principal */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-[12px] border-white transform lg:rotate-2 hover:rotate-0 transition-all duration-1000">
                <img 
                  src={getImagePath('procedure')} 
                  alt={`Thayná Guimarães realizando procedimento`} 
                  className="w-full h-[500px] lg:h-[600px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50"></div>

                {/* Badge Biossegurança */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-gold/10 flex items-center gap-3 scale-90 lg:scale-100 origin-top-left">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">Rigor Técnico</p>
                    <p className="text-xs text-[#1A1A1A] font-bold">Biossegurança</p>
                  </div>
                </div>
              </div>

              {/* Legenda Reposicionada */}
              <div className="absolute -bottom-10 -right-2 lg:-bottom-12 lg:-right-10 z-50 bg-[#1A1A1A] p-5 lg:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.3)] rounded-sm border-l-[8px] border-gold max-w-[240px] lg:max-w-[320px] transform lg:-rotate-1 hover:rotate-0 transition-all">
                <p className="font-serif text-xl lg:text-2xl text-white italic mb-2">Cuidado em Ação</p>
                <p className="text-[10px] lg:text-sm text-gray-300 leading-relaxed font-medium">
                  Cada detalhe é planejado para garantir o máximo de resultado com o máximo de conforto e cuidado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
