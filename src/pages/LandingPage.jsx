import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Smartphone, 
  Globe, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Layout, 
  CheckCircle2, 
  Code2,
  Menu,
  X,
  Database,
  Search,
  Users
} from 'lucide-react';
import ContactModal from '../components/ContactModal';

const NavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className="text-sm font-medium text-white/70 hover:text-[#00E5FF] transition-colors cursor-pointer"
  >
    {children}
  </a>
);

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (pkg = '') => {
    setSelectedPackage(pkg);
    setModalOpen(true);
    setMobileMenuOpen(false);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#00E5FF]/30">
      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-[#00E5FF] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)]">
              <Terminal size={20} className="text-black" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">P&D Agency</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#servicos" onClick={() => scrollTo('servicos')}>SERVIÇOS</NavLink>
            <NavLink href="#portfolio" onClick={() => scrollTo('portfolio')}>PORTFÓLIO</NavLink>
            <NavLink href="#planos" onClick={() => scrollTo('planos')}>PLANOS</NavLink>
            <button 
              onClick={() => openModal()}
              className="bg-[#00E5FF] text-black text-[10px] font-bold py-2.5 px-6 rounded-lg uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)]"
            >
              VAMOS CONSTRUIR
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0d0d0d] border-b border-white/5 p-6 flex flex-col gap-6 animate-fade-in">
             <NavLink href="#servicos" onClick={() => scrollTo('servicos')}>SERVIÇOS</NavLink>
             <NavLink href="#portfolio" onClick={() => scrollTo('portfolio')}>PORTFÓLIO</NavLink>
             <NavLink href="#planos" onClick={() => scrollTo('planos')}>PLANOS</NavLink>
             <button onClick={() => openModal()} className="bg-[#00E5FF] text-black w-full py-4 text-xs font-bold uppercase tracking-widest rounded-xl">
               VAMOS CONSTRUIR
             </button>
          </div>
        )}
      </nav>

      <main>
        {/* ── HERO SECTION ── */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
          {/* Global Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] mb-8 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">The Obsidian Architect</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1] mb-8 animate-fade-in-up uppercase">
              CONSTRUÍMOS <br />
              <span className="text-[#00E5FF] italic drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">INTERFACES</span> <br />
              DO FUTURO.
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/40 font-light leading-relaxed mb-12 animate-fade-in-up delay-[100ms]">
              Design e Desenvolvimento de Alta Performance para Marcas que Querem Escalar no Mercado Digital.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up delay-[200ms]">
              <button 
                onClick={() => openModal()}
                className="bg-[#00E5FF] text-black w-full md:w-auto min-w-[220px] py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(0,229,255,0.2)]"
              >
                COMEÇAR AGORA
              </button>
              <button 
                onClick={() => scrollTo('servicos')}
                className="border border-white/10 bg-white/[0.02] text-white w-full md:w-auto min-w-[220px] py-4 rounded-xl font-bold hover:bg-white/5 transition-all text-sm uppercase tracking-widest"
              >
                VER CAPACIDADES
              </button>
            </div>
          </div>
        </section>

        {/* ── NUMBERS SECTION ("NÚMEROS QUE FALAM") ── */}
        <section className="py-20 px-6 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#00E5FF] block mb-4">Prova Social</span>
              <h2 className="text-4xl font-bold tracking-tighter uppercase">Números que Falam</h2>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '20+', label: 'Marcas Transformadas', sub: 'em 2026' },
                { value: '30%', label: 'Aumento de Conversão', sub: 'pós 6 meses de lançamento' },
                { value: '92%', label: 'Clientes Satisfeitos', sub: 'taxa de satisfação' },
                { value: '7 dias', label: 'Prazo de Entrega', sub: 'Plano Completo' }
              ].map((stat, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-[#0d0d0d] border border-white/5 text-center group hover:border-[#00E5FF]/20 transition-all">
                  <div className="text-4xl md:text-5xl font-black text-[#00E5FF] mb-4 drop-shadow-[0_0_10px_rgba(0,229,255,0.2)] group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARTEFACTOS DIGITAIS SECTION ── */}
        <section id="servicos" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-20 text-left">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#00E5FF] block mb-4">Capacidades</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Artefactos Digitais</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { 
                icon: <Globe className="text-[#00E5FF]" />, 
                title: 'Desenvolvimento Web', 
                desc: 'Aplicações robustas, velozes e escaláveis que dominam os motores de busca.' 
              },
              { 
                icon: <Smartphone className="text-[#00E5FF]" />, 
                title: 'Product Design', 
                desc: 'UX/UI focado em retenção, garantindo uma jornada de utilizador fluida e intuitiva.' 
              },
              { 
                icon: <Zap className="text-[#00E5FF]" />, 
                title: 'High Performance', 
                desc: 'Sites focados no Google Lighthouse e Core Web Vitals para máxima performance.' 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-[#0d0d0d] border border-white/5 hover:border-[#00E5FF]/30 hover:bg-[#111111] transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-8 border border-white/5 group-hover:bg-[#00E5FF]/10 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PORTFOLIO SECTION ("O ARQUIVO") ── */}
        <section id="portfolio" className="py-32 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 text-left">
              <div>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30 block mb-4">Portfólio</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">O Arquivo</h2>
              </div>
              <p className="max-w-md text-white/40 mb-2">
                Uma seleção curada dos nossos últimos artefactos digitais de alta fidelidade.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                { title: 'Project Zenith', category: 'Web App Infrastructure' },
                { title: 'Apex Core', category: 'Conversion Funnel' },
                { title: 'Nova Intelligence', category: 'AI Interface Design' },
                { title: 'Quantum Flow', category: 'Performance Optimization' }
              ].map((project, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="aspect-video bg-[#0d0d0d] rounded-3xl border border-white/5 overflow-hidden mb-6 group-hover:border-[#00E5FF]/30 transition-all relative">
                    <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                      <ArrowUpRight className="text-white/20 group-hover:text-[#00E5FF] group-hover:scale-125 transition-all" size={48} />
                    </div>
                  </div>
                  <h5 className="text-xl font-bold mb-1">{project.title}</h5>
                  <p className="text-xs uppercase tracking-widest text-[#00E5FF]/60 font-medium">{project.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING SECTION ── */}
        <section id="planos" className="py-32 px-6 max-w-5xl mx-auto text-center">
          <div className="mb-20 text-center">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#00E5FF] block mb-4">Investimento</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Planos de Engajamento</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { name: 'Starter', price: 'Consult', features: ['Landing Page Personalizada', 'Performance Otimizada', 'SEO de Longa Cauda'] },
              { name: 'Elite', price: 'Main', features: ['Arquitetura Multi-App', 'Design Exclusivo Obsidian', 'Dashboards Analíticos'], premium: true },
              { name: 'Custom', price: 'Talk', features: ['Consultoria Estratégica', 'Suporte Prioritário', 'Sistemas Customizados'] }
            ].map((tier, idx) => (
              <div key={idx} className={`p-10 rounded-3xl border transition-all ${tier.premium ? 'border-[#00E5FF] bg-[#00E5FF]/5 shadow-[0_0_40px_rgba(0,229,255,0.05)]' : 'border-white/5 bg-[#0d0d0d]'}`}>
                <h6 className="text-[10px] font-bold text-white/40 uppercase mb-4 tracking-[0.2em]">{tier.name}</h6>
                <div className="text-3xl font-black mb-8 text-white">{tier.price}</div>
                <div className="w-full h-[1px] bg-white/5 mb-8" />
                <ul className="space-y-4 mb-10">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/50">
                      <div className="w-1 h-1 rounded-full bg-[#00E5FF]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => openModal(tier.name)}
                  className={`w-full py-4 rounded-xl font-bold transition-all text-center uppercase text-xs tracking-widest ${tier.premium ? 'bg-[#00E5FF] text-black shadow-[0_0_20px_rgba(0,229,255,0.2)]' : 'bg-white/5 text-white hover:bg-white/10'}`}
                >
                  SOLICITAR ACESSO
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA SECTION ── */}
        <section className="py-40 px-6 text-center relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00E5FF]/5 blur-[150px] pointer-events-none" />
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 animate-fade-in-up uppercase">
             PRONTO PARA <br />
             <span className="text-[#00E5FF] italic drop-shadow-[0_0_20px_rgba(0,229,255,0.5)] uppercase">TRANSCENDER?</span>
           </h2>
           <button 
             onClick={() => openModal()}
             className="bg-[#00E5FF] text-black py-5 px-16 rounded-xl text-xs font-bold uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(0,229,255,0.2)]"
           >
             FALAR COM UM ESPECIALISTA
           </button>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="py-20 px-8 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-left">
          <div className="max-w-xs">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-[#00E5FF] rounded flex items-center justify-center">
                  <Terminal size={14} className="text-black" />
                </div>
                <span className="text-xl font-bold tracking-tighter uppercase">P&D AGENCY</span>
             </div>
             <p className="text-white/30 text-sm leading-relaxed">
               Arquitetando o futuro digital com precisão milimétrica e estética Obsidian.
             </p>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-[#00E5FF] uppercase tracking-widest">Plataforma</span>
              <button onClick={() => scrollTo('servicos')} className="text-sm text-white/50 hover:text-white text-left">Serviços</button>
              <button onClick={() => scrollTo('portfolio')} className="text-sm text-white/50 hover:text-white text-left">Portfólio</button>
              <button onClick={() => scrollTo('planos')} className="text-sm text-white/50 hover:text-white text-left">Planos</button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Comunidade</span>
              <a href="#" className="text-sm text-white/50 hover:text-white">Instagram</a>
              <a href="#" className="text-sm text-white/50 hover:text-white">Twitter / X</a>
              <a href="#" className="text-sm text-white/50 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">© 2024 P&D AGENCY. ALL RIGHTS RESERVED.</p>
           <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-medium">The Obsidian Architect</p>
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
