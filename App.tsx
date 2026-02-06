
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AuthoritySection } from './components/AuthoritySection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { IMAGE_CONFIG } from './config';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Social Proof Bar */}
        <div className="bg-[#1A1A1A] py-8">
          <div className="container mx-auto px-6 overflow-hidden">
            <div className="flex flex-wrap justify-around items-center gap-10 opacity-60">
              <span className="text-white font-serif text-lg tracking-[0.2em] italic uppercase border-b border-gold/30 pb-1">Excelência</span>
              <span className="text-white font-serif text-lg tracking-[0.2em] italic uppercase border-b border-gold/30 pb-1">Ciência</span>
              <span className="text-white font-serif text-lg tracking-[0.2em] italic uppercase border-b border-gold/30 pb-1">Segurança</span>
              <span className="text-white font-serif text-lg tracking-[0.2em] italic uppercase border-b border-gold/30 pb-1">Exclusividade</span>
            </div>
          </div>
        </div>

        <AuthoritySection />
        
        <ServicesSection />
        
        <ContactSection />
      </main>

      <footer className="bg-[#1A1A1A] text-white py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">
            <div>
              <div className="flex flex-col mb-6">
                <span className="font-serif text-2xl font-bold tracking-tight uppercase">{IMAGE_CONFIG.professional.name.toUpperCase()}</span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-gold font-bold">{IMAGE_CONFIG.professional.title}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs font-medium">
                Unindo o rigor da ciência biomédica aos melhores protocolos estéticos para elevar sua autoestima e saúde da pele em Caxias do Sul.
              </p>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-gold mb-6">Navegação</h5>
                <ul className="text-xs text-gray-400 space-y-3 font-medium">
                  <li><a href="#" className="hover:text-gold transition-colors">Início</a></li>
                  <li><a href="#procedimentos" className="hover:text-gold transition-colors">Procedimentos</a></li>
                  <li><a href="#autoridade" className="hover:text-gold transition-colors">Diferencial Acadêmico</a></li>
                  <li><a href="#contato" className="hover:text-gold transition-colors">Contato</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-gold mb-6">Legal</h5>
                <ul className="text-xs text-gray-400 space-y-3 font-medium">
                  <li><a href="#" className="hover:text-gold transition-colors">Privacidade</a></li>
                  <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
                  <li><a href="#" className="hover:text-gold transition-colors">CRBM-RS</a></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h5 className="text-xs font-bold uppercase tracking-widest text-gold mb-6">Redes Sociais</h5>
                <a 
                  href={IMAGE_CONFIG.social.instagram} 
                  target="_blank" 
                  className="flex items-center gap-3 text-xs text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold">
                    <span className="text-gold font-bold italic">ig</span>
                  </div>
                  {IMAGE_CONFIG.social.handle}
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
            <p>&copy; {new Date().getFullYear()} {IMAGE_CONFIG.professional.name}. Todos os direitos reservados.</p>
            <p>Desenvolvido em Caxias do Sul - RS</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;
