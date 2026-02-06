
import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';
import { IMAGE_CONFIG } from '../config';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-bold mb-4">Localização</h2>
            <h3 className="font-serif text-4xl text-graphite mb-8 leading-tight">Atendimento Exclusivo em <br/>Caxias do Sul</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold w-6 h-6 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-gray-600">
                  Rua Exemplo Premium, 123 - Sala 405<br/>
                  Bairro Exposição, Caxias do Sul - RS<br/>
                  <span className="text-xs text-gray-400 mt-1 block font-medium">Estacionamento privativo no local</span>
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="text-gold w-6 h-6 flex-shrink-0" strokeWidth={1.5} />
                <a href={IMAGE_CONFIG.social.whatsapp} target="_blank" className="text-gray-600 font-medium hover:text-gold transition-colors">
                  {IMAGE_CONFIG.social.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Instagram className="text-gold w-6 h-6 flex-shrink-0" strokeWidth={1.5} />
                <a href={IMAGE_CONFIG.social.instagram} target="_blank" className="text-gray-600 font-medium hover:text-gold transition-colors">
                  {IMAGE_CONFIG.social.handle}
                </a>
              </div>
            </div>

            <div className="bg-off-white p-8 rounded-sm border border-gold/10 shadow-sm">
              <h4 className="font-serif text-xl mb-4 text-graphite">Horários de Atendimento</h4>
              <div className="space-y-3 text-sm text-gray-500">
                <div className="flex justify-between items-center">
                  <span>Segunda a Sexta</span>
                  <span className="font-bold text-graphite">09h às 19h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sábados</span>
                  <span className="font-bold text-graphite">09h às 13h</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200 mt-3">
                  <span className="text-xs">Atendimento personalizado com hora marcada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-full min-h-[450px] relative rounded-sm overflow-hidden border border-gray-100 shadow-2xl">
            <div className="absolute inset-0 bg-[#f5f3f0] flex items-center justify-center grayscale">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4 animate-bounce" />
                <p className="text-xs font-bold text-graphite tracking-widest uppercase mb-6">Estamos no coração de Caxias do Sul</p>
                <div className="w-[300px] h-[300px] bg-gray-200/50 rounded-full flex items-center justify-center border border-dashed border-gold/30">
                  <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Área Premium • Bairro Exposição</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                className="w-full block text-center bg-[#333333] py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-black transition-all shadow-2xl"
              >
                Traçar Rota no Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
