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
  X
} from 'lucide-react';
import ContactModal from '../components/ContactModal';

const NavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className="text-sm font-medium text-white/70 hover:text-[#00D1FF] transition-colors cursor-pointer"
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-[#00D1FF] rounded-lg flex items-center justify-center neon-glow-cyan">
              <Terminal size={20} className="text-black" />
            </div>
            <span className="text-xl font-bold tracking-tighter">P&D AGENCY</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#servicos" onClick={() => scrollTo('servicos')}>SERVIÇOS</NavLink>
            <NavLink href="#portfolio" onClick={() => scrollTo('portfolio')}>PORTFÓLIO</NavLink>
            <NavLink href="#planos" onClick={() => scrollTo('planos')}>PLANOS</NavLink>
            <button 
              onClick={() => openModal()}
              className="btn-primary py-2 px-6 text-xs uppercase tracking-widest"
            >
              CONTRATAR
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 animate-fade-in">
             <NavLink href="#servicos" onClick={() => scrollTo('servicos')}>SERVIÇOS</NavLink>
             <NavLink href="#portfolio" onClick={() => scrollTo('portfolio')}>PORTFÓLIO</NavLink>
             <NavLink href="#planos" onClick={() => scrollTo('planos')}>PLANOS</NavLink>
             <button onClick={() => openModal()} className="btn-primary w-full py-4 text-xs uppercase tracking-widest">
               CONTRATAR
             </button>
          </div>
        )}
      </nav>

      <main>
        {/* ── HERO ── */}
        <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D1FF]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#7C3AED]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">The Obsidian Architect</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              CRIAMOS <br />
              <span className="text-[#00D1FF] italic text-glow-cyan">ARTEFATOS</span> <br />
              DIGITAIS.
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 font-light leading-relaxed mb-12">
              Arquitetura web de alta performance para marcas que não aceitam o comum. 
              Transformamos código em experiência de elite.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => openModal()}
                className="btn-primary w-full md:w-auto min-w-[200px]"
              >
                COMEÇAR AGORA
              </button>
              <button 
                onClick={() => scrollTo('servicos')}
                className="btn-secondary w-full md:w-auto min-w-[200px]"
              >
                VER CAPACIDADES
              </button>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section id="servicos" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#00D1FF] uppercase mb-4">Especialidades</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">ENGENHARIA DE PRECISÃO</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Globe className="text-[#00D1FF]" />, 
                title: 'Web Platforms', 
                desc: 'Sistemas complexos com design minimalista e performance brutal.' 
              },
              { 
                icon: <Smartphone className="text-[#00D1FF]" />, 
                title: 'Expansão Mobile', 
                desc: 'Apps que parecem extensões naturais do hardware.' 
              },
              { 
                icon: <Zap className="text-[#00D1FF]" />, 
                title: 'Otimização LCP', 
                desc: 'Carregamento instantâneo para máxima conversão e SEO.' 
              }
            ].map((item, idx) => (
              <div key={idx} className="artifact-card group animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#00D1FF]/50 transition-all">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BENEFITS GRID ── */}
        <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck className="text-[#00D1FF]" />, title: 'Segurança Total', desc: 'Arquitetura blindada contra vulnerabilidades.' },
              { icon: <Code2 className="text-[#7C3AED]" />, title: 'Código Limpo', desc: 'Sustentabilidade e escalabilidade técnica.' },
              { icon: <Layout className="text-[#00D1FF]" />, title: 'Design Exclusivo', desc: 'Sem templates. Tudo criado do zero.' },
              { icon: <CheckCircle2 className="text-[#7C3AED]" />, title: 'Entrega Ágil', desc: 'Prazos reais, resultados extraordinários.' }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-black/40 hover:bg-black/60 transition-all">
                <div className="mb-6">{benefit.icon}</div>
                <h5 className="font-bold text-lg mb-2">{benefit.title}</h5>
                <p className="text-white/30 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="planos" className="py-32 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-20">INVESTIMENTO</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: 'Sob Consulta', features: ['Landing Page', 'SEO Básico', 'Hospedagem'] },
              { name: 'Professional', price: 'Destaque', features: ['Site Multi-página', 'Painel Admin', 'Otimização Core Vitals'], premium: true },
              { name: 'Enterprise', price: 'Custom', features: ['E-commerce', 'App Mobile', 'Suporte 24/7'] }
            ].map((tier, idx) => (
              <div key={idx} className={`p-10 rounded-3xl border transition-all ${tier.premium ? 'border-[#00D1FF] bg-[#00D1FF]/5 scale-105' : 'border-white/10 bg-white/5'}`}>
                <h6 className="text-xl font-bold mb-2">{tier.name}</h6>
                <div className="text-3xl font-black mb-8 text-[#00D1FF]">{tier.price}</div>
                <ul className="text-left space-y-4 mb-10">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/50">
                      <CheckCircle2 size={16} className="text-[#00D1FF]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => openModal(tier.name)}
                  className={`w-full py-4 rounded-xl font-bold transition-all ${tier.premium ? 'bg-[#00D1FF] text-black hover:opacity-90' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  SELECIONAR
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-40 px-6 text-center relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00D1FF]/5 blur-[150px] pointer-events-none" />
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 animate-fade-in-up">
             PRONTO PARA <br />
             <span className="text-[#00D1FF] italic text-glow-cyan">TRANSCENDER?</span>
           </h2>
           <button 
             onClick={() => openModal()}
             className="btn-primary py-6 px-16 text-sm uppercase tracking-[0.3em]"
           >
             FALAR COM UM ESPECIALISTA
           </button>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="py-20 px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
             <div className="flex items-center gap-2 mb-6">
                <Terminal className="text-[#00D1FF]" />
                <span className="text-xl font-bold tracking-tighter">P&D AGENCY</span>
             </div>
             <p className="text-white/30 text-sm leading-relaxed">
               Arquitetando o futuro digital com precisão e estética de elite.
             </p>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-[#00D1FF] uppercase tracking-widest">Navegação</span>
              <button onClick={() => scrollTo('servicos')} className="text-sm text-white/50 hover:text-white text-left">Serviços</button>
              <button onClick={() => scrollTo('portfolio')} className="text-sm text-white/50 hover:text-white text-left">Portfólio</button>
              <button onClick={() => scrollTo('planos')} className="text-sm text-white/50 hover:text-white text-left">Planos</button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-widest">Social</span>
              <a href="#" className="text-sm text-white/50 hover:text-white">Instagram</a>
              <a href="#" className="text-sm text-white/50 hover:text-white">Twitter</a>
              <a href="#" className="text-sm text-white/50 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2024 P&D AGENCY. ALL RIGHTS RESERVED.</p>
           <p className="text-[10px] text-white/20 uppercase tracking-widest italic">The Obsidian Architect</p>
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
