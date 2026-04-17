import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Smartphone, 
  Globe, 
  ArrowUpRight, 
  Zap, 
  Menu,
  X
} from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import ContactModal from '../components/ContactModal';

// ── COMPONENTES AUXILIARES ──

const NavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className="text-sm font-medium text-white/70 hover:text-[#00E5FF] transition-colors cursor-pointer tracking-tight"
  >
    {children}
  </a>
);

const Counter = ({ value, label, sub }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (isNaN(end)) return;
      
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const suffix = value.replace(/[0-9]/g, '');

  return (
    <div ref={ref} className="p-10 rounded-3xl bg-[#090909]/50 border border-white/[0.03] text-center group hover:border-[#00E5FF]/20 transition-all duration-500">
      <div className="text-5xl md:text-6xl font-black text-[#00E5FF] mb-4 tracking-tighter drop-shadow-[0_0_15px_rgba(0,229,255,0.3)] group-hover:scale-105 transition-transform">
        {count}{suffix}
      </div>
      <h3 className="text-sm font-bold text-white mb-2 tracking-tight">{label}</h3>
      <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-medium">{sub}</p>
    </div>
  );
};

// ── COMPONENTE PRINCIPAL ──

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (pkg = '') => {
    setSelectedPackage(pkg);
    setModalOpen(true);
    setMobileMenuOpen(false);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#00E5FF]/30 font-inter">
      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-2xl bg-black/40 border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-[#00E5FF] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)] group-hover:scale-110 transition-transform">
              <Terminal size={22} className="text-black" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">P&D Agency</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              <NavLink href="#servicos" onClick={() => scrollTo('servicos')}>SERVIÇOS</NavLink>
              <NavLink href="#portfolio" onClick={() => scrollTo('portfolio')}>PORTFÓLIO</NavLink>
              <NavLink href="#planos" onClick={() => scrollTo('planos')}>PLANOS</NavLink>
            </div>
            <button 
              onClick={() => openModal()}
              className="bg-[#00E5FF] text-black text-[11px] font-black py-3 px-8 rounded-xl uppercase tracking-[0.1em] hover:opacity-90 transition-all shadow-[0_0_25px_rgba(0,229,255,0.2)] active:scale-95"
            >
              VAMOS CONSTRUIR
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#080808] border-b border-white/5 p-8 flex flex-col gap-8 shadow-2xl"
          >
             <NavLink href="#servicos" onClick={() => scrollTo('servicos')}>SERVIÇOS</NavLink>
             <NavLink href="#portfolio" onClick={() => scrollTo('portfolio')}>PORTFÓLIO</NavLink>
             <NavLink href="#planos" onClick={() => scrollTo('planos')}>PLANOS</NavLink>
             <button onClick={() => openModal()} className="bg-[#00E5FF] text-black w-full py-5 text-xs font-black uppercase tracking-widest rounded-2xl shadow-lg">
               VAMOS CONSTRUIR
             </button>
          </motion.div>
        )}
      </nav>

      <main>
        {/* ── HERO SECTION ── */}
        <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
          {/* Background Artifacts */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00E5FF]/[0.03] rounded-full blur-[180px] pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00E5FF]/[0.02] rounded-full blur-[150px] pointer-events-none" />
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/[0.05] bg-white/[0.01] mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_10px_#00E5FF]" />
              <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-white/30">The Obsidian Architect</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[140px] font-black tracking-[-0.04em] leading-[0.85] mb-12 uppercase"
            >
              CONSTRUÍMOS <br />
              <span className="text-[#00E5FF] italic drop-shadow-[0_0_30px_rgba(0,229,255,0.4)] tracking-[-0.06em]">INTERFACES</span> <br />
              DO FUTURO.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-2xl mx-auto text-xl md:text-2xl text-white/30 font-light leading-relaxed tracking-tight"
            >
              Arquitetura Digital de Elite para Marcas que Exigem Performance Brutal e Estética Obsidian.
            </p>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
            onClick={() => scrollTo('servicos')}
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20">Scroll to Explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#00E5FF] to-transparent shadow-[0_0_10px_#00E5FF]" />
          </motion.div>
        </section>

        {/* ── NUMBERS SECTION ── */}
        <section className="py-24 px-8 border-y border-white/[0.03] bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 text-left md:text-center">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#00E5FF]/60 block mb-6">Prova Social</span>
              <h2 className="text-5xl font-black tracking-[-0.02em] uppercase">Números que Falam</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Counter value="20+" label="Marcas Transformadas" sub="em 2026" />
              <Counter value="30%" label="Aumento de Conversão" sub="pós 6 meses de lançamento" />
              <Counter value="92%" label="Clientes Satisfeitos" sub="taxa de satisfação média" />
              <Counter value="7 dias" label="Prazo de Entrega" sub="Plano Full Sprint" />
            </div>
          </div>
        </section>

        {/* ── ARTEFACTOS DIGITAIS SECTION ── */}
        <section id="servicos" className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-24 text-left">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#00E5FF] block mb-6">Capacidades</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.02em] uppercase max-w-2xl">Artefactos Digitais de Alta Fidelidade</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { 
                icon: <Globe className="text-[#00E5FF]" size={32} />, 
                title: 'Desenvolvimento Web', 
                desc: 'Aplicações robustas concebidas sob a arquitetura Vite + React, garantindo LCP inferior a 1.2s.' 
              },
              { 
                icon: <Smartphone className="text-[#00E5FF]" size={32} />, 
                title: 'Visual Engineering', 
                desc: 'Design Interfaces de elite com foco em micro-interações e psicologia de conversão absoluta.' 
              },
              { 
                icon: <Zap className="text-[#00E5FF]" size={32} />, 
                title: 'Core Optimization', 
                desc: 'Auditoria e refatoração completa para atingir 100/100 no Google Lighthouse em todos os dispositivos.' 
              }
            ].map((item, idx) => (
              <div key={idx} className="artifact-card group">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.02] flex items-center justify-center mb-10 border border-white/5 group-hover:bg-[#00E5FF]/10 transition-colors shadow-inner">
                  {item.icon}
                </div>
                <h4 className="text-3xl font-black mb-6 tracking-tight">{item.title}</h4>
                <p className="text-white/40 leading-relaxed text-lg font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PORTFOLIO SECTION ── */}
        <section id="portfolio" className="py-32 px-8 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-24 text-left">
              <div>
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/20 block mb-6">Portfólio</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-[-0.02em] uppercase">O Arquivo</h2>
              </div>
              <p className="max-w-md text-xl text-white/30 font-light leading-relaxed">
                Uma seleção curada dos nossos últimos lançamentos de alta performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                { title: 'AURORA OS', category: 'Operational System Interface' },
                { title: 'NEBULA DASHBOARD', category: 'SaaS Platform Analytics' },
                { title: 'STREAK FINANCE', category: 'Fintech Mobile Experience' },
                { title: 'LUMEN ARCHIVE', category: 'Digital Asset Management' }
              ].map((project, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[16/10] bg-[#080808] rounded-[40px] border border-white/[0.05] overflow-hidden mb-8 group-hover:border-[#00E5FF]/20 transition-all duration-700 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="w-full h-full flex items-center justify-center">
                      <ArrowUpRight className="text-white/10 group-hover:text-[#00E5FF] group-hover:scale-150 transition-all duration-700" size={64} />
                    </div>
                  </div>
                  <h5 className="text-2xl font-black mb-2 tracking-tight uppercase">{project.title}</h5>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#00E5FF] font-bold opacity-60">{project.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING SECTION ── */}
        <section id="planos" className="py-32 px-8 max-w-6xl mx-auto text-center">
          <div className="mb-24">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#00E5FF] block mb-6">Investimento</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.02em] uppercase">Sprints de Execução</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 text-left items-start">
            {[
              { name: 'Starter', price: 'Consult', features: ['Landing Page Obsidian', 'Performance Otimizada', 'SEO Técnico Hub', 'Suporte 30 dias'] },
              { name: 'Elite', price: 'Main', features: ['Arquitetura Multi-App', 'Design Exclusivo Fractal', 'Dashboards Real-time', 'Suporte Prioritário VIP'], premium: true },
              { name: 'Custom', price: 'Talk', features: ['Consultoria Estratégica', 'Sistemas Customizados', 'Treinamento de Equipa', 'Manutenção Vitalícia'] }
            ].map((tier, idx) => (
              <div key={idx} className={`p-12 rounded-[2.5rem] border transition-all duration-500 ${tier.premium ? 'border-[#00E5FF] bg-[#00E5FF]/5 shadow-[0_0_50px_rgba(0,229,255,0.05)] scale-105 z-10' : 'border-white/[0.03] bg-[#080808]'}`}>
                <h6 className="text-[11px] font-black text-white/30 uppercase mb-6 tracking-[0.4em]">{tier.name}</h6>
                <div className="text-5xl font-black mb-10 text-white tracking-tighter">{tier.price}</div>
                <div className="w-full h-[1px] bg-white/[0.05] mb-10" />
                <ul className="space-y-6 mb-12">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm text-white/40 leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-1.5 shadow-[0_0_5px_#00E5FF]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => openModal(tier.name)}
                  className={`w-full py-5 rounded-2xl font-black transition-all text-center uppercase text-[11px] tracking-[0.2em] ${tier.premium ? 'bg-[#00E5FF] text-black shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:brightness-110' : 'bg-white/[0.03] text-white hover:bg-white/[0.08]'}`}
                >
                  SOLICITAR ACESSO
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-48 px-8 text-center relative overflow-hidden bg-white/[0.01] border-y border-white/[0.03]">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00E5FF]/[0.02] blur-[200px] pointer-events-none" />
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-6xl md:text-9xl font-black tracking-[-0.05em] mb-16 uppercase leading-tight"
           >
             PRONTO PARA <br />
             <span className="text-[#00E5FF] italic drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]">TRANSCENDER?</span>
           </motion.h2>
           <button 
             onClick={() => openModal()}
             className="bg-[#00E5FF] text-black py-6 px-20 rounded-2xl text-xs font-black uppercase tracking-[0.5em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(0,229,255,0.2)]"
           >
             FALAR COM UM ESPECIALISTA
           </button>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="py-32 px-10 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20 text-left">
          <div className="max-w-md">
             <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-[#00E5FF] rounded-lg flex items-center justify-center">
                  <Terminal size={18} className="text-black" />
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase">P&D AGENCY</span>
             </div>
             <p className="text-white/20 text-lg font-light leading-relaxed mb-8">
               Arquitetando o futuro digital com precisão radical e estética Obsidian de alta fidelidade.
             </p>
             <div className="flex items-center gap-6">
               <a href="#" className="text-white/20 hover:text-[#00E5FF] transition-colors"><Smartphone size={20} /></a>
               <a href="#" className="text-white/20 hover:text-[#00E5FF] transition-colors"><Globe size={20} /></a>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-24 lg:gap-32">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black text-[#00E5FF] uppercase tracking-[0.4em]">Plataforma</span>
              <button onClick={() => scrollTo('servicos')} className="text-sm text-white/30 hover:text-white text-left font-medium transition-colors">Serviços</button>
              <button onClick={() => scrollTo('portfolio')} className="text-sm text-white/30 hover:text-white text-left font-medium transition-colors">Portfólio</button>
              <button onClick={() => scrollTo('planos')} className="text-sm text-white/30 hover:text-white text-left font-medium transition-colors">Planos</button>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Presença</span>
              <a href="#" className="text-sm text-white/30 hover:text-white font-medium transition-colors">Instagram</a>
              <a href="#" className="text-sm text-white/30 hover:text-white font-medium transition-colors">Twitter / X</a>
              <a href="#" className="text-sm text-white/30 hover:text-white font-medium transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-16 mt-20 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] text-white/10 uppercase tracking-[0.5em]">© 2026 P&D AGENCY. ALL ARCHITECTS RESERVED.</p>
           <div className="flex items-center gap-4 text-[10px] text-white/10 uppercase tracking-[0.5em] font-black">
             <span>Obsidian Design System v2.0</span>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <span className="italic">The Obsidian Architect</span>
           </div>
        </div>
      </footer>

      <ContactModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultPackage={selectedPackage} 
      />
    </div>
  );
}
