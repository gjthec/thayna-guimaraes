
import React from 'react';
import { Award, ShieldCheck, Microscope } from 'lucide-react';
import { getImagePath, IMAGE_CONFIG } from '../config';

export const AuthoritySection: React.FC = () => {
  return (
    <section id="autoridade" className="py-24 bg-[#F9F7F5] relative overflow-hidden">
      {/* Elemento de fundo para quebrar o branco */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 border-4 border-gold rounded-full italic font-serif flex items-center justify-center text-8xl text-gold">T</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Visual Element: "Foto Autoridade" - Aparece DEPOIS no mobile (order-2) */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] relative rounded-sm overflow-hidden group shadow-2xl border-white border-[12px] bg-white">
              <div className="absolute inset-0 border-2 border-gold/30 m-4 z-10 pointer-events-none group-hover:m-2 transition-all"></div>
              <img 
                src={getImagePath('certificate')} 
                alt={`${IMAGE_CONFIG.professional.name} apresentando certificado`} 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Experience Counter - Reforçado contra fundo claro */}
            <div className="absolute top-10 -right-4 lg:-right-8 bg-[#1A1A1A] text-white p-6 lg:p-8 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.4)] z-20 border-b-4 border-gold">
              <span className="block text-5xl font-serif text-gold mb-1 font-bold">10+</span>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-white font-black leading-tight">
                Anos de Formação e<br/>Especializações
              </span>
            </div>
          </div>

          {/* Text Content - Aparece PRIMEIRO no mobile (order-1) */}
          <div className="relative order-1 lg:order-2">
            <div className="mb-4 inline-block">
              <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-black mb-1">Diferencial Acadêmico</h2>
              <div className="w-12 h-1 bg-gold"></div>
            </div>
            
            <h3 className="font-serif text-3xl lg:text-4xl text-[#1A1A1A] mb-10 leading-snug font-bold">
              Não é apenas um título, é o compromisso com <span className="italic text-gold">protocolos baseados em evidências</span>.
            </h3>
            
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-[#1A1A1A] border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all shadow-lg">
                  <Award className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-black text-[#1A1A1A] mb-2 uppercase tracking-tighter text-sm">Formação Biomédica Especializada</h4>
                  <p className="text-[#333333] text-sm leading-relaxed font-medium">
                    A transição da estética comum para a biomédica exige profundo conhecimento fisiológico. {IMAGE_CONFIG.professional.name} aplica ciência em cada aplicação.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-[#1A1A1A] border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all shadow-lg">
                  <ShieldCheck className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-black text-[#1A1A1A] mb-2 uppercase tracking-tighter text-sm">Rigor em Biossegurança</h4>
                  <p className="text-[#333333] text-sm leading-relaxed font-medium">
                    Seguimos rigorosamente normas de nível hospitalar. Segurança total para o paciente em cada etapa do protocolo clínico.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-[#1A1A1A] border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all shadow-lg">
                  <Microscope className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-black text-[#1A1A1A] mb-2 uppercase tracking-tighter text-sm">Abordagem Individualizada</h4>
                  <p className="text-[#333333] text-sm leading-relaxed font-medium">
                    Diagnóstico preciso e escolha de ativos com alta comprovação científica para resultados que respeitam sua anatomia natural.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 p-8 border-l-[8px] border-gold bg-white shadow-xl rounded-r-lg">
              <p className="italic text-[#1A1A1A] leading-relaxed font-semibold text-xl">
                "Minha missão é unir a precisão da biomedicina com a sensibilidade estética para entregar resultados que elevam a autoestima com verdade."
              </p>
              <div className="mt-8">
                <p className="font-black text-[#1A1A1A] uppercase tracking-widest text-base">{IMAGE_CONFIG.professional.name}</p>
                <p className="text-[10px] text-gold uppercase tracking-[0.4em] font-bold">{IMAGE_CONFIG.professional.title}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
