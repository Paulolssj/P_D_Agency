import React, { useState, useEffect } from 'react';
import ContactModal from '../components/ContactModal';

const Icon = ({ name, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (pkg = '') => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen font-body selection:bg-pd-primary selection:text-[#005762]"
      style={{ backgroundColor: '#0e0e0e', color: '#ffffff' }}
    >
      {/* ── HEADER ── */}
      <header className={`fixed top-0 w-full z-50 glass-header transition-shadow duration-300 ${scrolled ? 'shadow-[0px_24px_80px_rgba(0,227,253,0.08)]' : ''}`}>
        <div className="flex justify-between items-center px-6 py-5 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-2">
            <Icon name="architecture" className="text-pd-primary" />
            <span className="text-2xl font-black tracking-tighter text-white font-headline uppercase">
              P&amp;D AGENCY
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('servicos')} className="text-pd-on-surface-var text-sm hover:text-pd-primary transition-colors font-label uppercase tracking-widest cursor-pointer">
              Serviços
            </button>
            <button onClick={() => scrollTo('portfolio')} className="text-pd-on-surface-var text-sm hover:text-pd-primary transition-colors font-label uppercase tracking-widest cursor-pointer">
              Portfólio
            </button>
            <button onClick={() => scrollTo('planos')} className="text-pd-on-surface-var text-sm hover:text-pd-primary transition-colors font-label uppercase tracking-widest cursor-pointer">
              Planos
            </button>
          </nav>
          <button
            data-testid="nav-contact-trigger"
            onClick={() => openModal()}
            className="bg-gradient-to-r from-pd-primary to-pd-primary-container text-[#005762] px-4 py-2 rounded-md font-label font-bold uppercase tracking-wider text-xs active:scale-95 transition-transform"
          >
            VAMOS CONSTRUIR
          </button>
        </div>
      </header>

      <main className="pt-24 pb-20">

        {/* ── HERO ── */}
        <section className="px-6 py-16 min-h-[618px] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-pd-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 bg-pd-secondary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 animate-fade-in anim-delay-1">
              <span className="w-2 h-2 rounded-full bg-pd-primary animate-pulse shadow-[0_0_8px_#81ecff]" />
              <span className="font-label text-xs tracking-[0.2em] uppercase text-pd-primary font-bold">
                The Obsidian Architect
              </span>
            </div>

            <h1 className="font-headline text-5xl font-bold tracking-tighter leading-[0.95] text-white mb-8 animate-fade-in-up anim-delay-2">
              CONSTRUÍMOS <br />
              <span className="text-pd-primary italic">INTERFACES</span> <br />
              DO FUTURO.
            </h1>

            <p className="text-pd-on-surface-var text-lg leading-relaxed mb-10 max-w-[90%] font-light animate-fade-in-up anim-delay-3">
              Elevando negócios através de desenvolvimento web de alto nível e
              aplicações digitais de próxima geração.
            </p>

            <div className="flex flex-col gap-4 animate-fade-in-up anim-delay-4">
              <button
                data-testid="hero-cta-button"
                onClick={() => openModal()}
                className="w-full bg-gradient-to-r from-pd-primary to-pd-primary-container text-[#004d57] py-5 rounded-md font-label font-bold uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(0,227,253,0.2)] hover:shadow-[0_0_45px_rgba(0,227,253,0.35)] transition-all active:scale-[0.99]"
              >
                COMEÇAR
              </button>
              <button
                onClick={() => scrollTo('servicos')}
                className="w-full border border-pd-outline-var/20 bg-pd-surface-low text-white py-5 rounded-md font-label font-bold uppercase tracking-widest text-sm hover:bg-pd-surface-bright transition-colors"
              >
                VER SERVIÇOS
              </button>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="servicos" className="px-6 py-20 bg-pd-surface-low">
          <div className="mb-12">
            <span className="font-label text-xs tracking-[0.2em] uppercase text-pd-on-surface-var font-bold block mb-2">
              Capacidades
            </span>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-white">
              ARTEFACTOS DIGITAIS
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-pd-surface p-8 rounded-xl group transition-all duration-500 hover:bg-pd-surface-bright cursor-default">
              <div className="flex justify-between items-start mb-6">
                <Icon name="language" className="text-pd-primary" style={{ fontSize: '2.25rem' }} />
                <span className="text-pd-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="north_east" />
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mb-3">
                Desenvolvimento Web
              </h3>
              <p className="text-pd-on-surface-var leading-relaxed">
                Plataformas de alta performance, com design editorial, criadas para converter e cativar.
              </p>
            </div>

            <div className="bg-pd-surface p-8 rounded-xl group transition-all duration-500 hover:bg-pd-surface-bright border-t border-pd-primary/5 cursor-default">
              <div className="flex justify-between items-start mb-6">
                <Icon name="smartphone" className="text-pd-secondary" style={{ fontSize: '2.25rem' }} />
                <div className="bg-pd-secondary/10 px-3 py-1 rounded-full">
                  <span className="text-[10px] font-bold text-pd-secondary uppercase tracking-widest">
                    Em Breve
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mb-3">
                Expansão Mobile
              </h3>
              <p className="text-pd-on-surface-var leading-relaxed">
                Desenvolvendo experiências nativas para mobile que apagam a linha entre software e arte.
              </p>
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO ── */}
        <section id="portfolio" className="px-6 py-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-label text-xs tracking-[0.2em] uppercase text-pd-on-surface-var font-bold block mb-2">
                Trabalhos Selecionados
              </span>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-white">
                O ARQUIVO
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="relative aspect-[4/5] bg-pd-surface overflow-hidden rounded-xl">
              <img
                alt="Interface web escura com tipografia moderna"
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="font-label text-[10px] tracking-[0.3em] uppercase text-pd-primary mb-2">
                  Fintech / 2024
                </p>
                <h4 className="font-headline text-2xl font-bold text-white uppercase">
                  NEON LEDGER
                </h4>
              </div>
            </div>

            <div className="relative aspect-square bg-pd-surface overflow-hidden rounded-xl">
              <img
                alt="Experiência digital de marca de luxo"
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                src="https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="font-label text-[10px] tracking-[0.3em] uppercase text-pd-secondary mb-2">
                  E-Commerce / 2024
                </p>
                <h4 className="font-headline text-2xl font-bold text-white uppercase">
                  VELVET VOID
                </h4>
              </div>
            </div>
          </div>
        </section>

        {/* ── PACKAGES — NO PRICES ── */}
        <section id="planos" className="px-6 py-20" style={{ backgroundColor: 'rgba(19,19,19,0.5)' }}>
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-white mb-4">
              INVESTIMENTO
            </h2>
            <p className="text-pd-on-surface-var font-label text-xs uppercase tracking-widest">
              Soluções transparentes para marcas modernas
            </p>
          </div>

          <div className="space-y-8">
            {/* Project Pack */}
            <div className="bg-pd-surface p-8 rounded-xl relative overflow-hidden group hover:bg-pd-surface-bright transition-all duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Icon name="deployed_code" className="text-pd-primary" style={{ fontSize: '4rem' }} />
              </div>
              <h3 className="font-headline text-xl font-bold text-white mb-1 uppercase tracking-widest">
                Pacote Projeto
              </h3>
              <p className="text-pd-on-surface-var text-sm mb-8 font-light">
                Desenvolvimento e implementação completa do website.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Arquitetura UX/UI Personalizada',
                  'Otimização Mobile Responsiva',
                  'Fundação SEO',
                  'Entrega em Prazo Definido',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-pd-on-surface-var">
                    <Icon name="check_circle" className="text-pd-primary" style={{ fontSize: '1.1rem' }} />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                data-testid="package-projeto-button"
                onClick={() => openModal('Pacote Projeto')}
                className="w-full py-4 border border-pd-primary/30 text-pd-primary font-bold uppercase tracking-widest text-xs hover:bg-pd-primary/10 transition-all rounded-md active:scale-[0.99]"
              >
                SOLICITAR ORÇAMENTO
              </button>
            </div>

            {/* Maintenance */}
            <div className="bg-pd-surface p-8 rounded-xl relative overflow-hidden group hover:bg-pd-surface-bright transition-all duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Icon name="verified_user" className="text-pd-secondary" style={{ fontSize: '4rem' }} />
              </div>
              <h3 className="font-headline text-xl font-bold text-white mb-1 uppercase tracking-widest">
                Manutenção
              </h3>
              <p className="text-pd-on-surface-var text-sm mb-8 font-light">
                Mantendo o teu motor digital sempre a funcionar.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Gestão de Hosting na Cloud',
                  'Atualizações de Segurança',
                  'Suporte Técnico',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-pd-on-surface-var">
                    <Icon name="verified" className="text-pd-secondary" style={{ fontSize: '1.1rem' }} />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                data-testid="package-manutencao-button"
                onClick={() => openModal('Manutenção')}
                className="w-full py-4 border border-pd-secondary/30 text-pd-secondary font-bold uppercase tracking-widest text-xs hover:bg-pd-secondary/10 transition-all rounded-md active:scale-[0.99]"
              >
                SOLICITAR ORÇAMENTO
              </button>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="px-6 py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(129,236,255,0.05) 0%, transparent 70%)' }} />
          <h2 className="font-headline text-5xl font-bold tracking-tighter text-white mb-8 relative z-10 leading-tight text-glow">
            PRONTO PARA <br />
            <span className="text-pd-primary">TRANSCENDER?</span>
          </h2>
          <button
            data-testid="final-cta-button"
            onClick={() => openModal()}
            className="relative z-10 bg-gradient-to-r from-pd-primary to-pd-primary-container text-[#004d57] px-12 py-6 rounded-md font-label font-black uppercase tracking-[0.3em] text-sm shadow-[0_0_50px_rgba(0,227,253,0.3)] hover:scale-105 transition-transform active:scale-100"
          >
            FALAR CONNOSCO
          </button>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full py-20 px-8 border-t border-pd-outline-var/10" style={{ backgroundColor: '#000000' }}>
        <div className="flex flex-col gap-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Icon name="architecture" className="text-pd-primary" />
              <span className="text-lg font-bold text-white font-headline tracking-tighter">
                P&amp;D AGENCY
              </span>
            </div>
            <p className="text-pd-on-surface-var text-sm max-w-xs font-light">
              Arquitetando o futuro da presença digital com precisão obsidiana.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-pd-primary font-bold">
                Navegação
              </span>
              {[['Serviços', 'servicos'], ['Portfólio', 'portfolio'], ['Planos', 'planos']].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-pd-on-surface-var text-sm hover:text-pd-primary transition-colors text-left"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-pd-secondary font-bold">
                Social
              </span>
              {['Twitter', 'LinkedIn', 'Instagram'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-pd-on-surface-var text-sm hover:text-pd-secondary transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-pd-outline-var/10">
            <p className="font-label text-[10px] tracking-widest uppercase text-pd-on-surface-var">
              &copy; 2024 P&amp;D AGENCY. THE OBSIDIAN ARCHITECT.
            </p>
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
