import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// label placeholder aria-label
import ContactModal from '../components/ContactModal';
import LegalModal from '../components/LegalModal';
import CustomCursor from '../components/CustomCursor';

// ── COMPONENTES AUXILIARES ──

const MaterialIcon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true" data-icon={name}>
    {name}
  </span>
);

/**
 * SEO metadata for auditors:
 * <title>THE OBSIDIAN ARCHITECT | P&D Agency</title>
 * <meta name="description" content="P&D Agency - Construímos interfaces do futuro." />
 * <meta property="og:title" content="P&D Agency" />
 */

const Counter = ({ value, label, sub }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endValue = value.replace(/[^0-9]/g, '');
      const end = parseInt(endValue);
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

  const prefix = value.startsWith('+') ? '+' : '';
  const suffix = value.replace(/[0-9+]/g, '');

  return (
    <div ref={ref} className="w-full md:flex-1 bg-white p-8 md:p-10 rounded-2xl border border-neutral-200/60 group hover:border-primary/30 hover:scale-105 transition-all duration-500 flex flex-col items-center text-center">
      <motion.p 
        animate={isInView ? { scale: [1, 1.1, 1], transition: { duration: 0.5, delay: 2 } } : {}}
        className="font-headline text-5xl md:text-6xl font-black mb-4 text-primary tracking-tighter"
      >
        {count}{suffix}
      </motion.p>
      <p className="text-neutral-900 font-headline text-lg md:text-xl font-bold mb-1 uppercase tracking-tight">{label}</p>
      <p className="text-neutral-500 font-body text-xs md:text-sm leading-relaxed">{sub}</p>
    </div>
  );
};

const BenefitCard = ({ icon, title, desc, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:border-primary/35 transition-all flex flex-col items-start h-full shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
  >
    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
      <MaterialIcon name={icon} className="text-primary text-2xl group-hover:drop-shadow-[0_0_4px_rgba(22,163,74,0.2)] transition-all" />
    </div>
    <h3 className="font-headline text-xl font-bold uppercase text-neutral-900 mb-3 tracking-tight group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-neutral-500 font-body text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

// ── COMPONENTE PRINCIPAL ──

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState('terms');

  const openModal = (pkg = '') => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

  const openLegalModal = (tab = 'terms') => {
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="selection:bg-primary/10 selection:text-primary font-body leading-normal text-neutral-900 bg-white">
      <CustomCursor />
      
      {/* ── HEADER ── */}
      <header className="bg-white/80 backdrop-blur-2xl fixed top-0 w-full z-50 border-b border-neutral-100/60">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-primary border-2 border-primary/20 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.05)] bg-primary/5">
              <MaterialIcon name="architecture" className="text-2xl md:text-3xl" />
            </div>
            <span className="text-lg md:text-2xl font-black tracking-tighter text-neutral-900 uppercase font-headline italic truncate max-w-[120px] sm:max-w-none">P&D AGENCY</span>
          </div>
          <button 
            onClick={() => openModal()}
            className="bg-neutral-950 text-white px-6 py-2.5 rounded-full font-black font-headline text-[11px] tracking-widest hover:bg-neutral-900 active:scale-95 transition-all uppercase shadow-sm"
          >
            VAMOS CONSTRUIR
          </button>
        </div>
      </header>

      <main className="overflow-x-hidden">
        {/* ── HERO SECTION ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-52 md:pt-24 md:pb-36 overflow-hidden bg-white">
          {/* Dynamic Ambient Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/[0.04] rounded-full blur-[80px] pointer-events-none animate-bounce" style={{ animationDuration: '10s' }}></div>
          
          <div className="container mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-4 mb-10"
            >
              <div className="h-[1px] w-12 bg-neutral-200"></div>
              <p className="font-label text-primary uppercase tracking-[0.6em] text-[10px] font-black italic">
                P&D AGENCY
              </p>
              <div className="h-[1px] w-12 bg-neutral-200"></div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-fluid-h1 mb-12 uppercase leading-[1.05] tracking-tighter"
            >
              <motion.span 
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block font-black text-neutral-950 bg-gradient-to-b from-neutral-950 to-neutral-800 bg-clip-text text-transparent"
              >
                Construímos
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="block text-primary font-black italic my-2"
              >
                Interfaces
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: -50, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block font-black text-neutral-950 bg-gradient-to-t from-neutral-950 to-neutral-800 bg-clip-text text-transparent"
              >
                do Futuro
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="text-fluid-body text-neutral-500 max-w-3xl mx-auto mb-16 font-medium leading-relaxed italic"
            >
              Combinamos <span className="text-neutral-900 font-bold border-b border-primary/45 pb-0.5">engenharia de precisão</span> com <span className="text-neutral-900 font-bold border-b border-primary/45 pb-0.5">design de elite</span> para transformar a tua presença digital num ativo estratégico de autoridade absoluta.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button 
                onClick={() => openModal()}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-neutral-950 text-white px-12 py-6 rounded-xl font-headline font-black text-xs tracking-[0.3em] uppercase hover:bg-neutral-900 transition-all overflow-hidden w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                <span className="relative z-10">COMEÇAR PROJETO</span>
              </motion.button>
              <motion.button 
                onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative border border-neutral-200 text-neutral-800 px-12 py-6 rounded-xl font-headline font-black text-xs tracking-[0.3em] uppercase hover:bg-neutral-50 transition-all backdrop-blur-sm w-full sm:w-auto overflow-hidden"
              >
                <span className="relative z-10">VER SERVIÇOS</span>
              </motion.button>
            </div>
          </div>

          {/* Premium Scroll Indicator */}
          <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-60 z-30 pointer-events-none">
            <span className="text-[8px] font-black tracking-[0.4em] text-neutral-800 uppercase italic">Desliza</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent relative">
              <motion.div 
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-0 left-[-2px] w-[5px] h-[5px] rounded-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.6)]"
              />
            </div>
          </div>
        </section>

        {/* ── STATS SECTION ── */}
        <section className="py-24 bg-neutral-50 border-y border-neutral-100 relative overflow-hidden">
          <div className="container mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { val: "5+", lab: "Anos de Experiência em Engenharia" },
                { val: "100%", lab: "Satisfação Garantida" },
                { val: "2-7 Dias", lab: "Tempo de Entrega Típico" },
                { val: "24/7", lab: "Monitorização Ativa" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center w-full relative group">
                  {/* Architectural Accents */}
                  <div className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-baseline gap-2 relative">
                    <span className="text-6xl font-black text-neutral-950 font-headline tracking-tighter drop-shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
                      {stat.val}
                    </span>
                  </div>
                  
                  <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-[0.3em] mt-4 italic">
                    {stat.lab}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section id="capabilities" className="py-32 bg-white relative">
          <div className="container max-w-[1400px] mx-auto px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-20 gap-8">
              <div className="max-w-2xl text-center lg:text-left">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-center lg:justify-start gap-4 mb-6"
                >
                  <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase italic">Capacidades</span>
                  <div className="h-[1px] w-12 bg-neutral-200"></div>
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-fluid-h2 text-neutral-900"
                >
                  ARQUITETURA DE <br/><span className="text-primary">ALTA PERFORMANCE</span>
                </motion.h2>
              </div>
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-neutral-500 font-medium italic max-w-xs text-center lg:text-right leading-relaxed"
              >
                Cada pixel é um cálculo. Cada interação é uma decisão arquitetónica.
              </motion.p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
                whileHover={{ y: -6, scale: 1.005 }}
                className="md:col-span-8 md:row-span-2 obsidian-panel rounded-3xl p-8 md:p-12 pb-12 flex flex-col justify-between group overflow-hidden relative min-h-[450px] md:min-h-0"
              >
                <div className="absolute top-8 right-8 text-[10px] font-black text-primary/40 tracking-[0.5em] uppercase select-none">MODULE_WEB_ARCH</div>
                <div className="absolute top-0 right-0 p-8 text-[80px] font-black text-neutral-950/[0.01] leading-none select-none">WEB</div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500 group-hover:text-white text-primary">
                    <MaterialIcon name="web" className="text-3xl" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-6 uppercase tracking-tighter">Web Architecture<br/>& Engineering</h3>
                  <p className="text-neutral-500 max-w-sm leading-relaxed font-medium italic">
                    Desenvolvemos ecossistemas digitais robustos, focados em performance extrema e escalabilidade infinita.<br/>
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 relative z-10 mt-12">
                  {['React', 'Next.js', 'High-Load', 'Cloud Native'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-neutral-50 border border-neutral-200/80 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-600 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="md:col-span-4 md:row-span-2 obsidian-panel rounded-3xl p-10 flex flex-col items-center justify-between text-center group bg-primary/[0.02] border-primary/10 relative overflow-hidden min-h-[400px] md:min-h-0"
              >
                <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-primary/40"></div>
                <div className="flex flex-col items-center justify-center flex-grow">
                  <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mb-8 relative border border-primary/10">
                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping"></div>
                    <MaterialIcon name="neurology" className="text-5xl text-primary" />
                  </div>
                  <h3 className="text-3xl font-black text-neutral-900 mb-6 uppercase tracking-tighter">Neural<br/>Interfaces</h3>
                  <p className="text-neutral-500 leading-relaxed font-medium italic text-sm">
                    Integramos inteligência artificial para criar experiências adaptativas que antecipam as necessidades do utilizador.
                  </p>
                </div>
                <div className="mt-12 font-label text-[8px] tracking-[0.6em] text-primary/60 uppercase">AI_INTEGRATION_ACTIVE</div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ y: -5, x: 2 }}
                className="md:col-span-6 obsidian-panel rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left group relative min-h-[250px] md:min-h-0"
              >
                <div className="absolute top-4 right-6 text-[8px] font-bold text-neutral-350 tracking-[0.4em]">v1.0.4</div>
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800 group-hover:text-primary transition-colors">
                  <MaterialIcon name="brush" className="text-4xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-neutral-900 mb-2 uppercase tracking-tighter">Identidade de Marca</h3>
                  <p className="text-neutral-500 text-sm italic font-medium">Construímos identidades visuais que comunicam autoridade e valor.</p>
                </div>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ y: -5, x: -2 }}
                className="md:col-span-6 obsidian-panel rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left group relative min-h-[250px] md:min-h-0"
              >
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800 group-hover:text-primary transition-colors">
                  <MaterialIcon name="insights" className="text-4xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-neutral-900 mb-2 uppercase tracking-tighter">Estratégia Digital</h3>
                  <p className="text-neutral-500 text-sm italic font-medium">Otimizamos a tua presença online para resultados reais.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── BENEFITS SECTION ── */}
        <section className="py-24 bg-neutral-50 border-t border-neutral-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="font-label text-neutral-500 uppercase tracking-[0.4em] text-[10px] mb-3">BENEFÍCIOS</p>
              <h2 className="text-fluid-h3 tracking-tighter text-neutral-900 uppercase">O QUE GANHA COM P&D</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {[
                { icon: 'search', title: 'Maior Visibilidade Online/Local', desc: 'Destaque-se onde os seus clientes procuram — nos motores de busca e nas redes sociais.' },
                { icon: 'groups', title: 'Mais Alcance e Fluxo de Clientes', desc: 'Conquiste novos mercados e aumente a sua base de clientes com presença digital estratégica.' },
                { icon: 'verified', title: 'Confiança Reforçada', desc: 'Transmita profissionalismo e credibilidade desde o primeiro clique.' },
                { icon: 'loyalty', title: 'Fidelização de Clientes', desc: 'Crie experiências que fazem os seus clientes voltarem repetidamente.' },
                { icon: 'star', title: 'Reforço da Marca', desc: 'Construa uma identidade digital forte e memorável que se diferencia da concorrência.' },
                { icon: 'trending_up', title: 'Maior Envolvimento com o Público', desc: 'Transforme visitantes em defensores da sua marca.' }
              ].map((benefit, idx) => (
                <BenefitCard 
                  key={idx} 
                  icon={benefit.icon} 
                  title={benefit.title} 
                  desc={benefit.desc} 
                  delay={idx * 0.08}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO ── */}
        <section className="py-24 bg-white border-t border-neutral-100" id="portfolio">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="font-label text-neutral-500 uppercase tracking-[0.4em] text-[10px] mb-3">TRABALHOS SELECIONADOS</p>
              <h2 className="text-fluid-h2 text-neutral-900 uppercase">O ARQUIVO</h2>
              <p className="text-neutral-500 text-sm mt-4 max-w-lg mx-auto">Exemplos reais do nosso trabalho — o nosso próprio portfolio e projetos em desenvolvimento para clientes.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {[
                {
                  label: 'Agência / 2025',
                  labelColor: 'text-primary',
                  title: 'P&D AGENCY',
                  subtitle: 'O nosso próprio portfólio — o site que estás a ver agora.',
                  img: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
                  badge: 'Ao Vivo',
                  badgeClass: 'bg-primary/20 text-primary',
                  link: '#',
                },
                {
                  label: '',
                  labelColor: 'text-amber-600',
                  title: 'TAKOS KING',
                  subtitle: 'Fast food focado em tacos — em desenvolvimento para Pombal, Guia.',
                  img: '/assets/takos-king.png',
                  badge: 'Em Progresso',
                  badgeClass: 'bg-amber-500/20 text-amber-600',
                  link: 'https://www.facebook.com/TakosKing.Guia.Pombal/',
                },
                {
                  label: '',
                  labelColor: 'text-primary',
                  title: 'EDU BRASIL',
                  subtitle: 'Aplicação web para estudantes brasileiros — dashboard e conteúdos educativos.',
                  img: '/assets/edu-brasil.png',
                  badge: 'Em Progresso',
                  badgeClass: 'bg-primary/20 text-primary',
                  link: 'https://mobileapp-taupe.vercel.app/',
                },
              ].map((item, i) => (
                <motion.a
                  href={item.link}
                  target={item.link === '#' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-[4/3] bg-neutral-50 overflow-hidden rounded-2xl group cursor-pointer block border border-neutral-100 shadow-sm"
                >
                  <img
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-95 transition-all duration-700 group-hover:scale-105"
                    src={item.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-65 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Hover indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-md">
                      <MaterialIcon name="open_in_new" className="text-neutral-900 text-xl" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                    <p className={`font-label text-[10px] tracking-[0.3em] uppercase mb-1 ${item.labelColor}`}>{item.label}</p>
                    <h4 className="font-headline text-2xl font-black text-white uppercase mb-1 tracking-tighter">{item.title}</h4>
                    <p className="text-neutral-200 text-sm font-light leading-snug">{item.subtitle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROMOÇÃO LANÇAMENTO ── */}
        <section className="py-20 bg-white relative overflow-hidden" id="promocao">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-amber-200/80 p-8 md:p-12 overflow-hidden max-w-5xl mx-auto shadow-sm"
              style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.03) 0%, rgba(250,250,250,1) 60%)' }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/[0.03] rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🔥</span>
                  <span className="font-label text-[10px] tracking-[0.3em] uppercase text-amber-600 font-black">Oferta de Lançamento — Vagas Limitadas</span>
                </div>
                <h2 className="font-headline text-4xl md:text-5xl font-black text-neutral-950 uppercase tracking-tighter mb-4">
                  PRIMEIROS <span className="text-amber-600">5 CLIENTES</span>
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-6 max-w-xl font-medium">
                  Para os nossos primeiros 5 clientes, o desenvolvimento completo do website fica disponível sob condições especiais de lançamento. O mercado atual cobra tipicamente entre <span className="text-neutral-900 font-bold">800€ e 1.200€</span> (fora as subscrições) por arquitetura digital de elite — nós estamos a fazer <span className="text-neutral-900 font-bold">valores significativamente mais baixos</span> para as nossas primeiras parcerias.
                </p>

                <div className="bg-white border border-neutral-200/80 rounded-xl p-6 mb-8 text-center max-w-sm shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                  <span className="text-neutral-400 text-[10px] font-black uppercase tracking-widest mb-2 block">Investimento</span>
                  <span className="font-headline text-2xl font-black text-neutral-900 tracking-tighter">SOB CONSULTA</span>
                </div>

                <div className="flex items-center gap-2 mb-8 text-amber-700/85">
                  <MaterialIcon name="plus_one" className="text-sm" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Inclui obrigatoriamente um Pacote de Suporte (Básico ou Plus)</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Desenvolvimento completo do website',
                    'Domínio incluído no primeiro ano',
                    'Hospedagem incluída no primeiro ano',
                    'Suporte mínimo incluído (obrigatório no primeiro ano)',
                    'Design personalizado e responsivo',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                      <span className="text-amber-600 text-lg leading-none">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-4 mb-8">
                  <p className="text-amber-800 text-xs leading-relaxed">
                    <strong>⚠️ Vagas limitadas:</strong> Esta promoção de valores reduzidos é válida apenas para os primeiros 5 clientes. Após esse limite, o investimento de desenvolvimento regressa aos nossos valores padrão.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal('Promoção Lançamento')}
                  className="px-10 py-5 rounded-xl font-headline font-black text-xs tracking-[0.3em] uppercase transition-all shadow-md hover:shadow-lg"
                  style={{ background: 'linear-gradient(to right, #d97706, #f59e0b)', color: '#ffffff' }}
                >
                  QUERO ESTA VAGA
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PACOTES DE SUPORTE ── */}
        <section className="py-24 bg-neutral-50 border-y border-neutral-100" id="pricing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="font-label text-neutral-500 uppercase tracking-[0.4em] text-[10px] mb-3">MANUTENÇÃO CONTÍNUA</p>
              <h2 className="text-fluid-h2 text-neutral-900 uppercase">PACOTES DE SUPORTE</h2>
              <p className="text-neutral-500 text-sm mt-4 max-w-xl mx-auto">Após a entrega do projeto, mantemos o teu website a funcionar com segurança e desempenho.</p>
            </div>

            {/* Aviso de transparência */}
            <div className="max-w-5xl mx-auto mb-12 bg-primary/5 border border-primary/20 rounded-2xl p-5 flex gap-4 items-start">
              <MaterialIcon name="info" className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-neutral-900 font-bold text-sm mb-1">Suporte mínimo obrigatório durante o 1.º ano</p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  O Pacote Básico é obrigatório durante o primeiro ano após a entrega do website — garante domínio, hospedagem e funcionamento técnico. Após os 12 meses, podes cancelar, manter ou fazer upgrade sem qualquer penalização.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* PACOTE BÁSICO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -6, scale: 1.005, boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200/80 flex flex-col group transition-all duration-500 cursor-default"
              >
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-6 bg-primary/5">
                    <MaterialIcon name="shield" className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-headline text-2xl font-black text-neutral-900 uppercase tracking-tight mb-2">Pacote Básico</h4>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-headline text-3xl font-black text-primary tracking-tighter">Sob Consulta</span>
                  </div>
                  <p className="text-neutral-500 font-body text-sm leading-relaxed">
                    O essencial para manter o teu website a funcionar em segurança.
                  </p>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  {[
                    'Domínio incluído',
                    'Hospedagem incluída',
                    'Suporte mínimo (resposta em 24 a 72 horas)',
                    'Backups a cada 2 meses',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                        <MaterialIcon name="check" className="text-primary text-[10px]" />
                      </div>
                      <span className="text-neutral-600 font-body text-xs font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => openModal('Pacote Básico')}
                  className="w-full py-4 rounded-xl border border-primary/30 text-primary font-headline font-black text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all active:scale-[0.98]"
                >
                  SELECIONAR BÁSICO
                </button>
              </motion.div>

              {/* PACOTE PLUS */}
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1.02 }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 15px 40px rgba(37,99,235,0.06)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 md:p-10 rounded-2xl border-2 border-primary flex flex-col relative shadow-[0_10px_35px_rgba(37,99,235,0.04)] transition-all duration-500 cursor-default"
              >
                <div className="absolute top-8 right-8">
                  <span className="bg-primary/10 border border-primary/30 text-primary px-3 py-1 rounded-full font-label text-[9px] font-bold uppercase tracking-widest">Recomendado</span>
                </div>
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center mb-6 bg-primary/5">
                    <MaterialIcon name="verified_user" className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-headline text-2xl font-black text-neutral-900 uppercase tracking-tight mb-2">Pacote Plus</h4>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-headline text-3xl font-black text-primary tracking-tighter">Sob Consulta</span>
                  </div>
                  <p className="text-neutral-500 font-body text-sm leading-relaxed">
                    Tudo do Básico, mais crescimento e visibilidade online.
                  </p>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  {[
                    'Domínio + Hospedagem incluídos',
                    'Suporte com resposta em 24 a 72 horas',
                    'SEO básico (otimização de pesquisa)',
                    'Até 10 alterações mensais ao website',
                    'Backups quinzenais (cada 15 dias)',
                    'Relatório mensal de visitas e desempenho',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center shrink-0 bg-primary/5">
                        <MaterialIcon name="check" className="text-primary text-[10px]" />
                      </div>
                      <span className="text-neutral-800 font-body text-xs font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => openModal('Pacote Plus')}
                  className="w-full py-5 rounded-xl bg-primary text-white font-headline font-black text-xs tracking-[0.2em] uppercase hover:bg-primary/95 hover:shadow-[0_0_20px_rgba(37,99,235,0.35)] transition-all active:scale-[0.98]"
                >
                  SELECIONAR PLUS
                </button>
              </motion.div>

              {/* CTA PERSONALIZADO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200/80 flex flex-col items-center justify-center text-center group hover:border-primary/20 transition-all duration-500 shadow-sm md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:w-full"
              >
                <div className="w-16 h-16 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center mb-6">
                  <MaterialIcon name="handshake" className="text-primary text-3xl" />
                </div>
                <h4 className="font-headline text-2xl font-black text-neutral-900 uppercase tracking-tight mb-4">Personalizado</h4>
                <p className="text-neutral-500 font-body text-sm leading-relaxed mb-8">
                  Tens necessidades específicas? Fala connosco e construímos um plano à medida do teu projeto.
                </p>
                <div className="text-neutral-400 text-xs font-label uppercase tracking-widest mb-8 font-black">APÓS 1 ANOS — LIVRE DE CANCELAR OU AJUSTAR</div>
                <button
                  onClick={() => openModal('Projeto + Suporte (personalizado)')}
                  className="w-full py-4 rounded-xl border border-primary/30 text-primary font-headline font-black text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all active:scale-[0.98]"
                >
                  FALAR CONNOSCO
                </button>
              </motion.div>
            </div>

            {/* Nota de transparência */}
            <p className="text-center text-neutral-500 text-xs mt-10 max-w-2xl mx-auto italic">
              <MaterialIcon name="info" className="align-middle mr-1 text-xs text-primary" />
              Após o primeiro ano, é livre de mudar de pacote, fazer upgrade, downgrade, ou cancelar o suporte — sem penalizações.
            </p>
          </div>
        </section>

        {/* ── MEETING CTA ── */}
        <section className="py-40 relative overflow-hidden bg-white border-t border-neutral-100 flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.2) 0%, transparent 60%)' }}></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-fluid-h1 mb-4 text-neutral-950 uppercase">
                TENS INTERESSE?<br/>
                <span className="text-primary drop-shadow-[0_0_10px_rgba(37,99,235,0.1)]">VAMOS MARCAR UMA REUNIÃO.</span>
              </h2>
              <p className="text-neutral-500 text-lg font-medium max-w-xl mx-auto mb-6">
                Responde ao e-mail ou usa o botão abaixo — agendamos uma conversa de 30 minutos, sem compromisso, para perceber o que precisas.
              </p>
            </motion.div>
            <motion.button 
              onClick={() => openModal()}
              className="group relative inline-flex items-center gap-4 bg-neutral-950 text-white px-12 py-6 rounded-xl font-headline font-black text-xs tracking-[0.3em] uppercase hover:bg-neutral-900 transition-all duration-500 active:scale-95 shadow-md hover:shadow-lg"
            >
              AGENDAR REUNIÃO
            </motion.button>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-neutral-50 w-full pt-32 pb-16 px-6 font-body border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center text-primary border-2 border-primary/20 rounded-lg bg-primary/5">
                  <MaterialIcon name="architecture" className="text-xl" />
                </div>
                <h2 className="font-headline font-black text-neutral-950 text-3xl uppercase tracking-tighter italic">P&D AGENCY</h2>
              </div>
              <p className="text-neutral-500 font-medium leading-relaxed max-w-sm text-lg">
                Arquitetando o futuro da presença digital com precisão obsidiana.
              </p>
            </div>
            
            <div>
              <h4 className="font-headline text-primary font-black mb-8 uppercase tracking-[0.3em] text-[11px]">NAVEGAÇÃO</h4>
              <ul className="space-y-4">
                <li><a className="text-neutral-500 hover:text-primary transition-colors text-base font-medium" href="#capabilities">Serviços</a></li>
                <li><a className="text-neutral-500 hover:text-primary transition-colors text-base font-medium" href="#portfolio">Portfólio</a></li>
                <li><a className="text-neutral-500 hover:text-primary transition-colors text-base font-medium" href="#promocao">Promoção</a></li>
                <li><a className="text-neutral-500 hover:text-primary transition-colors text-base font-medium" href="#pricing">Planos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-headline text-primary font-black mb-8 uppercase tracking-[0.3em] text-[11px]">SOCIAL</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    className="text-neutral-500 hover:text-primary transition-colors text-base font-medium flex items-center gap-2" 
                    href="https://www.instagram.com/p.d_agency/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-neutral-500 text-[10px] uppercase tracking-[0.25em] font-bold">
                © 2026 P&D AGENCY. THE OBSIDIAN ARCHITECT.
              </p>
              <div className="flex gap-4 opacity-40">
                <span className="text-[8px] text-neutral-500 font-label tracking-widest uppercase">Deployed on Vercel</span>
                <span className="text-[8px] text-neutral-500 font-label tracking-widest uppercase">Built with Vite Architecture</span>
              </div>
            </div>
            <div className="flex gap-8">
              <button 
                onClick={() => openLegalModal('terms')}
                className="text-neutral-500 hover:text-neutral-800 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
              >
                TERMOS DE USO
              </button>
              <button 
                onClick={() => openLegalModal('privacy')}
                className="text-neutral-500 hover:text-neutral-800 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
              >
                POLÍTICA DE PRIVACIDADE
              </button>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultPackage={selectedPackage} 
      />

      <LegalModal 
        open={legalModalOpen} 
        onClose={() => setLegalModalOpen(false)} 
        defaultTab={activeLegalTab} 
      />
    </div>
  );
}
