
import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';
import { IMAGE_CONFIG } from '../config';

export const ContactSection: React.FC = () => {
  const fullAddress = "Av. Therezinha Pauletti Sanvitto, 208 - sala 515 - Sanvitto, Caxias do Sul - RS, 95110-195";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  
  // URL de incorporação (Embed) para o Google Maps
  // Nota: Usando o endereço formatado para busca no mapa
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.529856149811!2d-51.2057393!3d-29.178877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea2d1c68f1c43%3A0x67876a8b753805f6!2sAv.%20Therezinha%20Pauletti%20Sanvitto%2C%20208%20-%20Sanvitto%2C%20Caxias%20do%20Sul%20-%20RS%2C%2095110-195!5e0!3m2!1spt-BR!2sbr!4v1715876543210!5m2!1spt-BR!2sbr`;

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
                <p className="text-gray-600 leading-relaxed">
                  Av. Therezinha Pauletti Sanvitto, 208<br/>
                  Sala 515 - Edifício Villagio Iguatemi<br/>
                  Bairro Sanvitto, Caxias do Sul - RS<br/>
                  <span className="text-xs text-gray-400 mt-1 block font-medium">CEP: 95110-195</span>
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
                  <span className="font-bold text-graphite">09h às 19h</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200 mt-3">
                  <span className="text-xs text-gold font-bold uppercase tracking-wider">Atendimento com hora marcada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="relative rounded-sm overflow-hidden border border-gray-100 shadow-2xl flex flex-col">
            <div className="flex-grow min-h-[400px]">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700 h-full w-full"
                title="Mapa de localização Thayná Guimarães"
              ></iframe>
            </div>
            
            <div className="p-6 bg-[#1A1A1A]">
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full block text-center bg-gold py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-[#B48F4D] transition-all shadow-lg"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
