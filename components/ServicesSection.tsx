
import React from 'react';
import { Sparkles, Droplets, FlaskConical } from 'lucide-react';

const treatments = [
  {
    title: "Limpeza de Pele Profunda",
    description: "Protocolo premium de 10 etapas para desintoxicação e extração minuciosa sem marcas.",
    icon: <Sparkles className="w-8 h-8" strokeWidth={1} />,
  },
  {
    title: "Revitalização Facial",
    description: "Combinação de ativos biomédicos para devolver o viço, elasticidade e luminosidade imediata.",
    icon: <Droplets className="w-8 h-8" strokeWidth={1} />,
  },
  {
    title: "Skincare Científico",
    description: "Consultoria completa e formulações personalizadas baseadas no diagnóstico clínico da sua pele.",
    icon: <FlaskConical className="w-8 h-8" strokeWidth={1} />,
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="procedimentos" className="py-24 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-bold mb-4">Procedimentos</h2>
          <h3 className="font-serif text-4xl text-graphite mb-6">Tratamentos Exclusivos</h3>
          <p className="text-gray-500">Design minimalista focado na pureza da pele e no rigor científico dos resultados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <div 
              key={i} 
              className="group bg-white p-10 rounded-sm border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-6xl font-serif">0{i + 1}</span>
              </div>
              
              <div className="text-gold mb-8 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                {t.icon}
              </div>
              
              <h4 className="font-serif text-xl text-graphite mb-4 group-hover:text-gold transition-colors">{t.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                {t.description}
              </p>
              
              <a 
                href="#contato" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-graphite group-hover:text-gold transition-colors"
              >
                Saber Mais
                <div className="w-8 h-[1px] bg-gray-300 group-hover:bg-gold group-hover:w-12 transition-all"></div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 italic">
            * Todos os procedimentos iniciam obrigatoriamente com uma avaliação diagnóstica.
          </p>
        </div>
      </div>
    </section>
  );
};
