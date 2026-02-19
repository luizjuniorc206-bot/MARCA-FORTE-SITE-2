
import React, { useEffect } from 'react';
import { 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  Settings, 
  Truck, 
  Instagram, 
  CheckCircle2,
  ChevronRight,
  MapPin
} from 'lucide-react';

// --- Links e Constantes ---
const WHATSAPP_LINK = "https://wa.me/5538997221779?text=Quero%20fazer%20minha%20marca%20para%20gado";
const INSTAGRAM_LINK = "https://www.instagram.com/marcaforteoficial/";

// --- Componentes Reutilizáveis ---

const WhatsAppButton = ({ className = "", text = "FAZER MINHA MARCA AGORA" }) => (
  <a 
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black py-4 px-8 rounded-full shadow-2xl transition-all btn-hover uppercase text-center w-full sm:w-auto ${className}`}
  >
    <MessageCircle size={24} fill="currentColor" />
    {text}
  </a>
);

const FloatingWhatsApp = () => (
  <a 
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-2 border-white/20"
  >
    <MessageCircle size={32} color="white" fill="white" />
  </a>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">{title}</h2>
    {subtitle && <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
  </div>
);

// --- Seções ---

const Header = () => (
  <header className="bg-zinc-950/90 backdrop-blur-md sticky top-0 z-40 border-b border-zinc-800">
    <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center font-black text-zinc-950 text-xl">MF</div>
        <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Marca <span className="text-amber-500">Forte</span></span>
      </div>
      <a 
        href={WHATSAPP_LINK}
        className="text-green-500 font-bold flex items-center gap-2 hover:text-green-400 text-sm sm:text-base"
      >
        <MessageCircle size={18} /> Orçamento Rápido
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-military pt-12 pb-24">
    {/* Efeito de Overlay para visual Premium */}
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950"></div>
    
    <div className="container mx-auto px-4 relative z-10 text-center">
      <span className="inline-block bg-amber-500/10 text-amber-500 border border-amber-500/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
        Qualidade Premium em Aço Inox 304
      </span>
      <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-none tracking-tighter">
        FERRO PARA MARCAR GADO <br />
        <span className="text-amber-500">PRECISÃO E DURABILIDADE</span>
      </h1>
      <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-10">
        Marcas personalizadas com corte a laser de alta tecnologia. Não enferruja, não deforma e garante uma marca perfeita por gerações.
      </p>
      
      <div className="flex flex-col items-center gap-6">
        <WhatsAppButton />
        <div className="flex items-center gap-4 text-zinc-400 font-semibold text-sm">
          <Truck size={20} className="text-amber-500" /> Envio para todo o Brasil
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 bg-zinc-950">
    <div className="container mx-auto px-4">
      <SectionTitle title="Por que escolher a Marca Forte?" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: Zap, title: "Corte a Laser", desc: "Precisão cirúrgica no desenho da sua marca." },
          { icon: ShieldCheck, title: "Aço Inox 304", desc: "O melhor material do mercado. Não enferruja nunca." },
          { icon: Settings, title: "Personalização", desc: "Criamos qualquer iniciais ou logotipos exclusivos." },
          { icon: Truck, title: "Entrega Rápida", desc: "Produção agilizada e envio para qualquer estado." }
        ].map((item, idx) => (
          <div key={idx} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-amber-500/50 transition-colors">
            <item.icon size={40} className="text-amber-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-24 bg-military">
    <div className="container mx-auto px-4">
      <SectionTitle 
        title="Como funciona?" 
        subtitle="O processo é simples e rápido para você ter sua marca em mãos" 
      />
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {[
          { step: "01", title: "Envie suas iniciais", desc: "Fale conosco no WhatsApp e envie seu desenho ou letras." },
          { step: "02", title: "Modelos Personalizados", desc: "Nossa equipe cria opções modernas para você escolher." },
          { step: "03", title: "Escolha seu Modelo", desc: "Você define qual mais gostou e iniciamos a fabricação." },
          { step: "04", title: "Produção e Envio", desc: "Cortamos a laser e enviamos direto para sua fazenda." }
        ].map((item, idx) => (
          <div key={idx} className="flex gap-6 items-start">
            <span className="text-4xl font-black text-amber-500/20 leading-none">{item.step}</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <WhatsAppButton text="QUERO MEU MODELO PERSONALIZADO" />
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-24 bg-zinc-950">
    <div className="container mx-auto px-4">
      <SectionTitle title="Trabalhos Realizados" subtitle="Veja a qualidade de quem já confia na Marca Forte" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square bg-zinc-900 rounded-xl overflow-hidden group">
            <img 
              src={`https://picsum.photos/seed/marca${i}/600/600`} 
              alt="Marca Forte Trabalho" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
            />
          </div>
        ))}
      </div>
      
      <div className="bg-amber-500/5 p-8 md:p-12 rounded-3xl border border-amber-500/20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-amber-500 mb-2">+1000</div>
            <div className="text-zinc-400 text-sm uppercase font-bold tracking-widest">Marcas Enviadas</div>
          </div>
          <div>
            <div className="text-4xl font-black text-amber-500 mb-2">100%</div>
            <div className="text-zinc-400 text-sm uppercase font-bold tracking-widest">Aço Inox 304</div>
          </div>
          <div>
            <div className="text-4xl font-black text-amber-500 mb-2">MAX</div>
            <div className="text-zinc-400 text-sm uppercase font-bold tracking-widest">Precisão Laser</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const InstagramSection = () => (
  <section className="py-16 bg-zinc-900/30">
    <div className="container mx-auto px-4 text-center">
      <Instagram size={48} className="text-amber-500 mx-auto mb-6" />
      <h2 className="text-2xl font-black text-white mb-4">Acompanhe nosso dia a dia no campo</h2>
      <p className="text-zinc-400 mb-8 italic">Siga @marcaforteoficial e veja as marcas mais bonitas do Brasil.</p>
      <a 
        href={INSTAGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-500 font-bold px-8 py-3 rounded-full hover:bg-amber-500 hover:text-zinc-950 transition-all"
      >
        Ver mais no Instagram <ChevronRight size={18} />
      </a>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 bg-gradient-to-t from-military to-zinc-950">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
          GARANTA SUA MARCA <br />
          <span className="text-amber-500">PERSONALIZADA AGORA MESMO</span>
        </h2>
        <p className="text-zinc-300 text-lg mb-10">
          Não deixe o seu gado sem a identificação que ele merece. Tenha um ferro que dura a vida toda e facilita o seu trabalho.
        </p>
        <WhatsAppButton />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center font-black text-zinc-950 text-xl">MF</div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Marca <span className="text-amber-500">Forte</span></span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            A Marca Forte é autoridade em ferros de marcar em aço inox 304. Qualidade premium para quem vive do agro.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contato</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-amber-500" /> Montes Claros – MG
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={18} className="text-amber-500" /> (38) 99722-1779
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Siga-nos</h4>
          <div className="flex gap-4">
            <a href={INSTAGRAM_LINK} className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-all">
              <Instagram size={20} />
            </a>
            <a href={WHATSAPP_LINK} className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-green-600 hover:text-white transition-all">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-zinc-900 pt-10 text-center">
        <p className="text-zinc-600 text-xs">
          © {new Date().getFullYear()} Marca Forte Oficial. Todos os direitos reservados. <br className="md:hidden" />
          <span className="hidden md:inline"> | </span> 
          Feito com foco em resultados para o Agro.
        </p>
      </div>
    </div>
  </footer>
);

// --- Componente Raiz ---

const App: React.FC = () => {
  useEffect(() => {
    console.log("Marca Forte Site carregado com sucesso!");
  }, []);

  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-zinc-950">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <SocialProof />
        <InstagramSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
