
import React from 'react';
import { 
  Sparkles, 
  Droplets, 
  Sparkle, 
  Grid, 
  Layers, 
  Smile, 
  Clock, 
  CircleDollarSign 
} from 'lucide-react';

const treatments = [
  {
    title: "Limpeza de Pele",
    price: "R$ 120,00",
    duration: "60 min",
    description: "Remoção profunda de impurezas e desintoxicação tecidual com extração minuciosa para uma pele renovada.",
    icon: <Sparkles className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: "Hidra Color",
    price: "R$ 180,00",
    duration: "60 min",
    description: "Protocolo de hidratação profunda labial com infusão de cor personalizada para um aspecto saudável e vibrante.",
    icon: <Droplets className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: "Hidra Gloss",
    price: "R$ 150,00",
    duration: "60 min",
    description: "Tratamento de revitalização labial focado em brilho intenso e hidratação extrema com efeito gloss imediato.",
    icon: <Sparkle className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: "Microagulhamento",
    price: "R$ 250,00",
    duration: "60 min",
    description: "Indução percutânea de colágeno para tratamento de cicatrizes, textura e rejuvenescimento global da face.",
    icon: <Grid className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: "Peeling",
    price: "R$ 80,00",
    duration: "60 min",
    description: "Renovação celular química controlada para uniformizar o tom da pele e suavizar linhas de expressão.",
    icon: <Layers className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: "Spa Labial",
    price: "R$ 50,00",
    duration: "30 min",
    description: "Combo de esfoliação e nutrição labial intensa para lábios macios, livres de ressecamento e revitalizados.",
    icon: <Smile className="w-8 h-8" strokeWidth={1.5} />,
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="procedimentos" className="py-24 bg-[#FDFCFB]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-black mb-1">Menu de Serviços</h2>
            <div className="w-12 h-1 bg-gold mx-auto"></div>
          </div>
          <h3 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A] mb-6">Tratamentos Especializados</h3>
          <p className="text-gray-500 font-medium">
            Protocolos exclusivos desenvolvidos com rigor biomédico para realçar sua beleza natural com segurança e precisão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <div 
              key={i} 
              className="group bg-white p-8 lg:p-10 rounded-sm border border-gray-100 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                <span className="text-7xl font-serif">0{i + 1}</span>
              </div>
              
              <div className="text-gold mb-8 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                {t.icon}
              </div>
              
              <h4 className="font-serif text-2xl text-[#1A1A1A] mb-4 group-hover:text-gold transition-colors">{t.title}</h4>
              
              <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                {t.description}
              </p>

              {/* Badges de Preço e Tempo */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-[#F9F7F5] px-3 py-1.5 rounded-full border border-gold/10">
                  <CircleDollarSign className="w-4 h-4 text-gold" />
                  <span className="text-[11px] font-black text-[#1A1A1A] uppercase tracking-wider">{t.price}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F9F7F5] px-3 py-1.5 rounded-full border border-gold/10">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="text-[11px] font-black text-[#1A1A1A] uppercase tracking-wider">{t.duration}</span>
                </div>
              </div>
              
              <a 
                href="#contato" 
                className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#1A1A1A] group-hover:text-gold transition-colors"
              >
                Agendar Agora
                <div className="w-10 h-[2px] bg-gray-200 group-hover:bg-gold group-hover:w-16 transition-all duration-500"></div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-[#F9F7F5] p-8 rounded-sm border border-gold/5 max-w-3xl mx-auto">
          <p className="text-sm text-gray-500 italic font-medium">
            "Para garantir a segurança e a eficácia de cada procedimento, realizo uma anamnese detalhada antes de qualquer aplicação. Sua saúde é minha prioridade absoluta."
          </p>
          <p className="mt-4 text-[10px] text-gold uppercase tracking-[0.2em] font-black">— Thayná Guimarães</p>
        </div>
      </div>
    </section>
  );
};
