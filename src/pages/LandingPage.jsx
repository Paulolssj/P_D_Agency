import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactModal from '../components/ContactModal';
import LegalModal from '../components/LegalModal';
import CustomCursor from '../components/CustomCursor';

// ── COMPONENTES AUXILIARES ──

const MaterialIcon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true" data-icon={name}>
    {name}
  </span>
);

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
    <div ref={ref} className="w-full md:flex-1 bg-neutral-900/60 p-8 md:p-10 rounded-2xl border border-neutral-800 group hover:border-primary/50 hover:scale-105 transition-all duration-500 flex flex-col items-center text-center">
      <motion.p 
        animate={isInView ? { scale: [1, 1.1, 1], transition: { duration: 0.5, delay: 2 } } : {}}
        className="font-headline text-5xl md:text-6xl font-black mb-4 text-primary tracking-tighter"
      >
        {count}{suffix}
      </motion.p>
      <p className="text-white font-headline text-lg md:text-xl font-bold mb-1 uppercase tracking-tight">{label}</p>
      <p className="text-neutral-400 font-body text-xs md:text-sm leading-relaxed">{sub}</p>
    </div>
  );
};

const BenefitCard = ({ icon, title, desc, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group bg-neutral-900/80 p-8 rounded-2xl border border-neutral-800 hover:border-primary/40 transition-all flex flex-col items-start h-full shadow-lg hover:shadow-primary/10"
  >
    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
      <MaterialIcon name={icon} className="text-primary group-hover:text-white text-2xl transition-colors" />
    </div>
    <h3 className="font-headline text-xl font-bold uppercase text-white mb-3 tracking-tight group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-neutral-400 font-body text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

// ── COMPONENTE PRINCIPAL (ESTILO THEAGENCY.PT) ──

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState('terms');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (pkg = '') => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

  const openLegalModal = (tab = 'terms') => {
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="selection:bg-primary selection:text-white font-body leading-normal text-white bg-[#050A13]">
      <CustomCursor />
      
      {/* ── PRELOADER (INSPIRADO EM THEAGENCY.PT) ── */}
      {loading && (
        <div className="fixed inset-0 z-[100] bg-[#050A13] flex flex-col items-center justify-center transition-opacity duration-700">
          <div className="flex items-center gap-3 animate-pulse">
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary flex items-center justify-center text-primary">
              <MaterialIcon name="architecture" className="text-3xl" />
            </div>
            <span className="text-2xl font-headline font-black tracking-tighter text-white uppercase italic">P&D AGENCY</span>
          </div>
          <span className="mt-4 text-[10px] font-label uppercase tracking-[0.5em] text-neutral-500 font-bold">CUSTOM DIGITAL AGENCY</span>
        </div>
      )}

      {/* ── HEADER ── */}
      <header className="bg-[#050A13]/90 backdrop-blur-2xl fixed top-0 w-full z-50 border-b border-neutral-800/80">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 md:gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-primary border border-primary/30 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.2)] bg-primary/10">
              <MaterialIcon name="architecture" className="text-2xl md:text-3xl" />
            </div>
            <span className="text-lg md:text-2xl font-black tracking-tighter text-white uppercase font-headline italic truncate max-w-[140px] sm:max-w-none">P&D AGENCY</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-neutral-300">
            <a href="#welcome" className="hover:text-primary transition-colors">Início</a>
            <a href="#custom-agency" className="hover:text-primary transition-colors">Abordagem</a>
            <a href="#o-que-fazemos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a>
            <a href="#testemunhos" className="hover:text-primary transition-colors">Testemunhos</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Planos</a>
          </nav>

          <button 
            onClick={() => openModal()}
            className="bg-primary text-white px-7 py-3 rounded-full font-black font-headline text-[11px] tracking-widest hover:bg-primary/90 active:scale-95 transition-all uppercase shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            VAMOS CONSTRUIR
          </button>
        </div>
      </header>

      <main className="overflow-x-hidden pt-20">
        {/* ── HERO SECTION (STYLE THEAGENCY.PT) ── */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 overflow-hidden bg-[#050A13]" id="welcome">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container max-w-6xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-neutral-700"></div>
              <p className="font-label text-primary uppercase tracking-[0.5em] text-[11px] font-black italic">
                WELCOME TO P&D AGENCY
              </p>
              <div className="h-[1px] w-12 bg-neutral-700"></div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.95] tracking-tighter mb-8 text-white"
            >
              CUSTOM <br />
              <span className="text-primary italic">DIGITAL & COMMUNICATION</span> <br />
              AGENCY
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="max-w-3xl mx-auto mb-12 text-neutral-300 text-base md:text-xl font-light leading-relaxed italic"
            >
              <p className="mb-4">
                <strong>A sua marca é única e merece uma comunicação totalmente feita à medida.</strong>
              </p>
              <p className="text-neutral-400 text-sm md:text-lg">
                Na P&D Agency, tratamos o seu projeto com a diferenciação de que ele precisa. <br className="hidden md:block" />
                <strong className="text-white">Somos a sua agência de tecnologia e marketing, somos um parceiro de negócio.</strong>
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
            >
              <button 
                onClick={() => openModal()}
                className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-headline font-black text-xs tracking-[0.25em] uppercase hover:bg-blue-600 transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] active:scale-95"
              >
                START YOUR PROJECT
              </button>
              <a 
                href="#custom-agency"
                className="w-full sm:w-auto border border-neutral-700 text-white px-10 py-5 rounded-full font-headline font-black text-xs tracking-[0.25em] uppercase hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                SAIR SABER MAIS
              </a>
            </motion.div>

            {/* MARQUEE TICKER DOS CLIENTES */}
            <div className="w-full overflow-hidden border-y border-neutral-800/80 py-5 bg-neutral-900/40 backdrop-blur-md rounded-2xl">
              <div className="flex items-center gap-12 whitespace-nowrap justify-around opacity-85 text-[11px] font-headline font-black uppercase tracking-[0.25em] text-neutral-300">
                <span className="flex items-center gap-2"><MaterialIcon name="pedal_bike" className="text-primary" /> AGOSTINHO BIKES</span>
                <span className="text-neutral-700">•</span>
                <span className="flex items-center gap-2"><MaterialIcon name="fastfood" className="text-amber-500" /> TAKOS KING</span>
                <span className="text-neutral-700">•</span>
                <span className="flex items-center gap-2"><MaterialIcon name="content_cut" className="text-primary" /> VAULT NUMBER ONE</span>
                <span className="text-neutral-700">•</span>
                <span className="flex items-center gap-2"><MaterialIcon name="forest" className="text-primary" /> ROOTS 199</span>
                <span className="text-neutral-700">•</span>
                <span className="flex items-center gap-2"><MaterialIcon name="brush" className="text-primary" /> MARIA JOÃO</span>
                <span className="text-neutral-700">•</span>
                <span className="flex items-center gap-2"><MaterialIcon name="school" className="text-primary" /> EDU BRASIL</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION: CUSTOM DIGITAL AGENCY (GRID DE 4 PILARES IGUAL A THEAGENCY.PT) ── */}
        <section className="py-28 bg-[#070D1A] border-y border-neutral-800/60 relative" id="custom-agency">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-2 font-bold">SOBRE A P&D AGENCY</p>
              <h2 className="font-headline text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                CUSTOM DIGITAL <br />
                <span className="text-primary italic">AGENCY</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  num: "01",
                  title: "UMA ABORDAGEM PERSONALIZADA",
                  desc: "Somos uma agência boutique full-service, o que significa que temos a competência para desenvolver o seu projeto de comunicação e tecnologia, desde a conceção estratégica até à aplicação prática, de uma forma relevante para o seu setor de atividade. Estamos consigo ao longo de todo o caminho!"
                },
                {
                  num: "02",
                  title: "DESENVOLVIMENTO & MARKETING SEM LIMITES",
                  desc: "O digital é uma atividade de frequência e consistência. Por essa razão, a nossa consultoria e engenharia não têm qualquer tipo de limitações quanto ao número de atualizações ou funcionalidades a desenvolver. Vamos definir objetivos e fazer tudo o que for preciso para os atingir."
                },
                {
                  num: "03",
                  title: "UM PARCEIRO DE NEGÓCIO",
                  desc: "Mais do que uma agência digital, somos um parceiro de negócio que o vai ajudar a olhar de forma estratégica para a tecnologia e colocar o poder da comunicação e desenvolvimento ao serviço do seu negócio."
                },
                {
                  num: "04",
                  title: "UMA EQUIPA DEDICADA",
                  desc: "O seu projeto é extremamente importante para nós, pelo que terá à sua disposição uma equipa multidisciplinar constituída por Engenheiro de Software, Designer UX/UI, Account Manager e Diretor Criativo."
                }
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-neutral-900/90 border border-neutral-800 p-8 md:p-10 rounded-3xl flex flex-col justify-between hover:border-primary/50 transition-all duration-500 shadow-xl group"
                >
                  <div>
                    <span className="font-headline text-4xl font-black text-primary/40 group-hover:text-primary transition-colors block mb-6">{pillar.num}</span>
                    <h3 className="font-headline text-2xl font-black text-white uppercase mb-4 tracking-tight group-hover:text-primary transition-colors">{pillar.title}</h3>
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-body font-normal">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Banner Destaque */}
            <div className="bg-primary/10 border border-primary/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <p className="text-white text-lg md:text-2xl font-headline font-bold leading-relaxed tracking-tight">
                "Criamos estratégias 100% customizadas e implementamos o que for preciso para atingir os objetivos, sem limites de plataformas. Trabalhamos o seu projeto como um todo."
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION: O QUE FAZEMOS (SERVICES 360º) ── */}
        <section className="py-28 bg-[#050A13] border-b border-neutral-800/60" id="o-que-fazemos">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-2 font-bold">SOLUÇÕES 360º</p>
              <h2 className="font-headline text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
                O QUE <span className="text-primary italic">FAZEMOS</span>
              </h2>
              <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed">
                Na P&D Agency, oferecemos uma gama completa de serviços de tecnologia, desenvolvimento web e identidade digital. Com estratégias inovadoras e personalizadas, ajudamos a sua marca a destacar-se no mercado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -6 }}
                className="bg-neutral-900/80 border border-neutral-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:border-primary/40 transition-all"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary text-primary group-hover:text-white transition-colors">
                    <MaterialIcon name="web" className="text-3xl" />
                  </div>
                  <h3 className="font-headline text-3xl font-black text-white uppercase mb-4 tracking-tight">ENGENHARIA WEB & APLICAÇÕES</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-medium">
                    Trabalhamos o desenvolvimento web através de soluções 360º all-inclusive que eliminam o esforço técnico e trazem resultados duradouros.
                  </p>
                  <ul className="space-y-3 text-xs uppercase tracking-wider text-neutral-300 font-bold mb-8">
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> Web Architecture & React/Next.js</li>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> High Load & Cloud Optimization</li>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> SEO Avançado & Core Web Vitals</li>
                  </ul>
                </div>
                <button onClick={() => openModal('Engenharia Web')} className="w-full py-4 rounded-xl border border-primary/40 text-primary font-headline font-black text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all">
                  SABER MAIS
                </button>
              </motion.div>

              <motion.div 
                whileHover={{ y: -6 }}
                className="bg-neutral-900/80 border border-neutral-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:border-primary/40 transition-all"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary text-primary group-hover:text-white transition-colors">
                    <MaterialIcon name="brush" className="text-3xl" />
                  </div>
                  <h3 className="font-headline text-3xl font-black text-white uppercase mb-4 tracking-tight">IDENTIDADE DE MARCA & BRANDING</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-medium">
                    Criamos identidades visuais de autoridade que posicionam a sua empresa como líder indiscutível no seu mercado.
                  </p>
                  <ul className="space-y-3 text-xs uppercase tracking-wider text-neutral-300 font-bold mb-8">
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> Design de Marca & UI/UX Design</li>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> Redes Sociais & Estratégia de Conteúdo</li>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> Anúncios Pagos & Performance</li>
                  </ul>
                </div>
                <button onClick={() => openModal('Identidade de Marca')} className="w-full py-4 rounded-xl border border-primary/40 text-primary font-headline font-black text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all">
                  SABER MAIS
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── STATS SECTION ── */}
        <section className="py-20 bg-[#070D1A] border-b border-neutral-800/60 relative overflow-hidden">
          <div className="container mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { val: "5+", lab: "Anos de Experiência em Engenharia" },
                { val: "100%", lab: "Satisfação Garantida" },
                { val: "2-7 Dias", lab: "Tempo de Entrega Típico" },
                { val: "24/7", lab: "Monitorização Ativa" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center w-full relative group">
                  <span className="text-5xl md:text-6xl font-black text-white font-headline tracking-tighter">
                    {stat.val}
                  </span>
                  <p className="text-primary text-[10px] uppercase font-bold tracking-[0.3em] mt-3 italic">
                    {stat.lab}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO ("O ARQUIVO") ── */}
        <section className="py-28 bg-[#050A13] border-b border-neutral-800/60" id="portfolio">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-3 font-bold">TRABALHOS SELECIONADOS</p>
              <h2 className="font-headline text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">O ARQUIVO</h2>
              <p className="text-neutral-400 text-sm mt-4 max-w-lg mx-auto">Exemplos reais do nosso trabalho — websites ao vivo e em desenvolvimento para clientes e projetos próprios.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  label: 'Stand & Oficina / 2026',
                  labelColor: 'text-primary',
                  title: 'AGOSTINHO BIKES',
                  subtitle: 'Stand e oficina de bicicletas — catálogo digital, serviços e presença web.',
                  img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
                  badge: 'Ao Vivo',
                  badgeClass: 'bg-primary text-white',
                  link: 'https://agostinho-bikes.vercel.app/',
                },
                {
                  label: 'Portfólio / 2026',
                  labelColor: 'text-primary',
                  title: 'MARIA JOÃO',
                  subtitle: 'Portfólio pessoal e showcase criativo de apresentação profissional.',
                  img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
                  badge: 'Ao Vivo',
                  badgeClass: 'bg-primary text-white',
                  link: 'https://maria-joao-portfolio.vercel.app/',
                },
                {
                  label: 'Barbearia Premium / 2026',
                  labelColor: 'text-primary',
                  title: 'VAULT NUMBER ONE',
                  subtitle: 'Plataforma digital para barbearia de elite — menu de serviços e marca.',
                  img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
                  badge: 'Ao Vivo',
                  badgeClass: 'bg-primary text-white',
                  link: 'https://vault-number-one-barbershop.vercel.app/',
                },
                {
                  label: 'Restauração / 2025',
                  labelColor: 'text-amber-500',
                  title: 'TAKOS KING',
                  subtitle: 'Fast food focado em tacos — em desenvolvimento para Pombal, Guia.',
                  img: '/assets/takos-king.png',
                  badge: 'Em Progresso',
                  badgeClass: 'bg-amber-500 text-black font-bold',
                  link: 'https://www.facebook.com/TakosKing.Guia.Pombal/',
                },
                {
                  label: 'Agência / 2025',
                  labelColor: 'text-primary',
                  title: 'P&D AGENCY',
                  subtitle: 'O nosso próprio portfólio — o site que estás a ver agora.',
                  img: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
                  badge: 'Ao Vivo',
                  badgeClass: 'bg-primary text-white',
                  link: '#',
                },
                {
                  label: 'Plataforma Web / 2025',
                  labelColor: 'text-primary',
                  title: 'EDU BRASIL',
                  subtitle: 'Aplicação web para estudantes brasileiros — dashboard e conteúdos educativos.',
                  img: '/assets/edu-brasil.png',
                  badge: 'Ao Vivo',
                  badgeClass: 'bg-primary text-white',
                  link: 'https://mobileapp-taupe.vercel.app/',
                },
              ].map((item, i) => (
                <motion.a
                  href={item.link}
                  target={item.link === '#' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-[4/3] bg-neutral-900 overflow-hidden rounded-3xl group cursor-pointer block border border-neutral-800 shadow-xl"
                >
                  <img
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
                    src={item.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A13] via-[#050A13]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                    <p className={`font-label text-[10px] tracking-[0.3em] uppercase mb-1 ${item.labelColor}`}>{item.label}</p>
                    <h4 className="font-headline text-2xl font-black text-white uppercase mb-1 tracking-tighter">{item.title}</h4>
                    <p className="text-neutral-300 text-sm font-light leading-snug">{item.subtitle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTEMUNHOS & AVALIAÇÕES (STYLE THEAGENCY.PT) ── */}
        <section className="py-28 bg-[#070D1A] border-b border-neutral-800/60" id="testemunhos">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-3 font-bold">AVALIAÇÕES & TESTEMUNHOS</p>
              <h2 className="font-headline text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">O QUE DIZEM OS NOSSOS CLIENTES</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Trabalhamos com a P&D Agency e a verdade é que não podíamos estar mais satisfeitos. Souberam ler a nossa visão desde o primeiro instante, têm uma equipa muito dedicada e apresentam um serviço super personalizado.",
                  author: "Ana Dominguez",
                  role: "Owner & Founder",
                  brand: "Ana Dominguez Ceramics"
                },
                {
                  quote: "A parceria tem sido uma excelente experiência. Começando pelo profissionalismo, dedicação e rápida resposta a todas as solicitações no desenvolvimento do nosso website e catálogo digital.",
                  author: "Equipa Agostinho Bikes",
                  role: "Gestão & Stand",
                  brand: "Agostinho Bikes"
                },
                {
                  quote: "Contactámos a P&D Agency para a criação da nossa marca e website. Fiquei muito feliz com todos os resultados: imagem da marca, site e presença digital – cada elemento em perfeita sintonia.",
                  author: "Gestão Vault",
                  role: "Fundadores",
                  brand: "Vault Number One Barbershop"
                }
              ].map((testi, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="bg-neutral-900/90 border border-neutral-800 p-8 rounded-3xl flex flex-col justify-between shadow-xl relative group hover:border-primary/40 transition-all"
                >
                  <div className="mb-8">
                    <p className="text-primary text-5xl font-headline font-black mb-2 opacity-50">“</p>
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed italic font-light">
                      "{testi.quote}"
                    </p>
                  </div>
                  <div className="pt-6 border-t border-neutral-800">
                    <h4 className="font-headline font-black text-white text-base uppercase tracking-tight">{testi.author}</h4>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider">{testi.role} • {testi.brand}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARCAS QUE CONFIAM EM NÓS ── */}
        <section className="py-24 bg-[#050A13] border-b border-neutral-800/60">
          <div className="container max-w-7xl mx-auto px-6 text-center">
            <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-3 font-bold">CONFIANÇA & PARCERIA</p>
            <h3 className="font-headline text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-12">
              MARCAS QUE CONFIAM EM NÓS
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: 'TACOS KING',
                  category: 'Fast Food • Guia, Pombal',
                  icon: 'fastfood',
                  link: 'https://www.facebook.com/TakosKing.Guia.Pombal/'
                },
                {
                  name: 'AGOSTINHO BIKES',
                  category: 'Stand & Oficina de Bicicletas',
                  icon: 'pedal_bike',
                  link: 'https://agostinho-bikes.vercel.app/'
                },
                {
                  name: 'ROOTS 199',
                  category: 'Conceito & Marca',
                  icon: 'forest',
                  link: '#'
                },
                {
                  name: 'VAULT NUMBER ONE',
                  category: 'Barbearia Premium',
                  icon: 'content_cut',
                  link: 'https://vault-number-one-barbershop.vercel.app/'
                }
              ].map((brand) => (
                <motion.a
                  key={brand.name}
                  href={brand.link}
                  target={brand.link === '#' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-neutral-900/90 border border-neutral-800 hover:border-primary/50 rounded-2xl p-6 md:px-8 md:py-6 flex items-center gap-4 transition-all duration-300 shadow-lg group min-w-[240px] flex-1 max-w-[280px]"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary flex items-center justify-center shrink-0 transition-colors">
                    <MaterialIcon name={brand.icon} className="text-primary group-hover:text-white text-2xl transition-colors" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-headline font-black text-white group-hover:text-primary text-base uppercase tracking-tight transition-colors">
                      {brand.name}
                    </h4>
                    <p className="text-neutral-400 text-[11px] font-medium tracking-wide italic">
                      {brand.category}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROMOÇÃO LANÇAMENTO ── */}
        <section className="py-24 bg-[#070D1A] relative overflow-hidden" id="promocao">
          <div className="container max-w-5xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-amber-500/40 p-8 md:p-12 overflow-hidden bg-neutral-900/90 shadow-2xl"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🔥</span>
                  <span className="font-label text-[10px] tracking-[0.3em] uppercase text-amber-400 font-black">Oferta de Lançamento — Vagas Limitadas</span>
                </div>
                <h2 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                  PRIMEIROS <span className="text-amber-400">5 CLIENTES</span>
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-6 font-medium text-sm md:text-base">
                  Para os nossos primeiros 5 clientes, o desenvolvimento completo do website fica disponível sob condições especiais de lançamento. O mercado atual cobra tipicamente entre <span className="text-white font-bold">800€ e 1.200€</span> por arquitetura digital de elite — nós estamos a fazer <span className="text-white font-bold">valores significativamente mais baixos</span> para as nossas primeiras parcerias.
                </p>

                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 mb-8 text-center max-w-sm shadow-inner">
                  <span className="text-neutral-400 text-[10px] font-black uppercase tracking-widest mb-2 block">Investimento</span>
                  <span className="font-headline text-3xl font-black text-amber-400 tracking-tighter">SOB CONSULTA</span>
                </div>

                <div className="flex items-center gap-2 mb-8 text-amber-400">
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
                    <li key={item} className="flex items-center gap-3 text-sm text-neutral-200">
                      <span className="text-amber-400 text-lg leading-none">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal('Promoção Lançamento')}
                  className="px-10 py-5 rounded-full font-headline font-black text-xs tracking-[0.3em] uppercase transition-all shadow-lg hover:shadow-amber-500/20 bg-amber-500 text-black font-bold"
                >
                  QUERO ESTA VAGA
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PACOTES DE SUPORTE ── */}
        <section className="py-28 bg-[#050A13] border-t border-neutral-800/60" id="pricing">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-3 font-bold">MANUTENÇÃO CONTÍNUA</p>
              <h2 className="font-headline text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">PACOTES DE SUPORTE</h2>
              <p className="text-neutral-400 text-sm mt-4 max-w-xl mx-auto">Após a entrega do projeto, mantemos o teu website a funcionar com segurança e desempenho.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* PACOTE BÁSICO */}
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-neutral-900/90 p-8 md:p-10 rounded-3xl border border-neutral-800 flex flex-col justify-between group transition-all duration-500"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl border border-primary/30 flex items-center justify-center mb-6 bg-primary/10 text-primary">
                    <MaterialIcon name="shield" className="text-2xl" />
                  </div>
                  <h4 className="font-headline text-2xl font-black text-white uppercase mb-2">Pacote Básico</h4>
                  <p className="font-headline text-3xl font-black text-primary mb-4">Sob Consulta</p>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8">O essencial para manter o teu website a funcionar em segurança.</p>
                  <div className="space-y-4 mb-8">
                    {['Domínio incluído', 'Hospedagem incluída', 'Suporte técnico (resposta em 24-72h)', 'Backups bi-mensais'].map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-neutral-300 font-bold uppercase tracking-wider">
                        <MaterialIcon name="check" className="text-primary text-sm" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={() => openModal('Pacote Básico')} className="w-full py-4 rounded-full border border-primary/40 text-primary font-headline font-black text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all">
                  SELECIONAR BÁSICO
                </button>
              </motion.div>

              {/* PACOTE PLUS */}
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-neutral-900 p-8 md:p-10 rounded-3xl border-2 border-primary flex flex-col justify-between relative shadow-[0_0_40px_rgba(37,99,235,0.2)] transition-all duration-500"
              >
                <span className="absolute top-6 right-6 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">RECOMENDADO</span>
                <div>
                  <div className="w-12 h-12 rounded-xl border border-primary flex items-center justify-center mb-6 bg-primary text-white">
                    <MaterialIcon name="verified_user" className="text-2xl" />
                  </div>
                  <h4 className="font-headline text-2xl font-black text-white uppercase mb-2">Pacote Plus</h4>
                  <p className="font-headline text-3xl font-black text-primary mb-4">Sob Consulta</p>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8">Tudo do Básico, mais crescimento e visibilidade online.</p>
                  <div className="space-y-4 mb-8">
                    {['Domínio + Hospedagem incluídos', 'Suporte com resposta rápida', 'SEO Básico & Otimização', 'Até 10 alterações mensais', 'Backups quinzenais', 'Relatório mensal de visitas'].map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-neutral-200 font-bold uppercase tracking-wider">
                        <MaterialIcon name="check" className="text-primary text-sm" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={() => openModal('Pacote Plus')} className="w-full py-4 rounded-full bg-primary text-white font-headline font-black text-xs tracking-widest uppercase hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  SELECIONAR PLUS
                </button>
              </motion.div>

              {/* PERSONALIZADO */}
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-neutral-900/90 p-8 md:p-10 rounded-3xl border border-neutral-800 flex flex-col justify-between group transition-all duration-500"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl border border-primary/30 flex items-center justify-center mb-6 bg-primary/10 text-primary">
                    <MaterialIcon name="handshake" className="text-2xl" />
                  </div>
                  <h4 className="font-headline text-2xl font-black text-white uppercase mb-2">Personalizado</h4>
                  <p className="font-headline text-3xl font-black text-primary mb-4">À Medida</p>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8">Necessidades específicas? Construímos um plano à medida do teu projeto.</p>
                </div>
                <button onClick={() => openModal('Personalizado')} className="w-full py-4 rounded-full border border-primary/40 text-primary font-headline font-black text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all">
                  FALAR CONNOSCO
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MEETING CTA ── */}
        <section className="py-36 relative overflow-hidden bg-[#050A13] border-t border-neutral-800/60 flex items-center justify-center text-center">
          <div className="container max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
              TENS INTERESSE?<br />
              <span className="text-primary italic">VAMOS MARCAR UMA REUNIÃO.</span>
            </h2>
            <p className="text-neutral-400 text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
              Agendamos uma conversa de 30 minutos, sem compromisso, para perceber o que a tua empresa necessita.
            </p>
            <button 
              onClick={() => openModal()}
              className="bg-primary text-white px-12 py-6 rounded-full font-headline font-black text-xs tracking-[0.3em] uppercase hover:bg-blue-600 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
            >
              AGENDAR REUNIÃO
            </button>
          </div>
        </section>
      </main>

      {/* ── FOOTER (STYLE THEAGENCY.PT) ── */}
      <footer className="bg-[#03060C] w-full pt-24 pb-16 px-6 font-body border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center text-primary border border-primary/30 rounded-xl bg-primary/10">
                  <MaterialIcon name="architecture" className="text-2xl" />
                </div>
                <h2 className="font-headline font-black text-white text-3xl uppercase tracking-tighter italic">P&D AGENCY</h2>
              </div>
              <p className="text-neutral-400 font-light leading-relaxed max-w-sm text-base">
                Custom Digital & Communication Agency. Arquitetando o futuro da presença digital.
              </p>
            </div>
            
            <div>
              <h4 className="font-headline text-primary font-black mb-6 uppercase tracking-[0.3em] text-xs">NAVEGAÇÃO</h4>
              <ul className="space-y-3 text-sm text-neutral-400 font-medium">
                <li><a className="hover:text-white transition-colors" href="#welcome">Início</a></li>
                <li><a className="hover:text-white transition-colors" href="#custom-agency">Abordagem</a></li>
                <li><a className="hover:text-white transition-colors" href="#o-que-fazemos">Serviços</a></li>
                <li><a className="hover:text-white transition-colors" href="#portfolio">Portfólio</a></li>
                <li><a className="hover:text-white transition-colors" href="#testemunhos">Testemunhos</a></li>
                <li><a className="hover:text-white transition-colors" href="#pricing">Planos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-headline text-primary font-black mb-6 uppercase tracking-[0.3em] text-xs">SOCIAL</h4>
              <ul className="space-y-3 text-sm text-neutral-400 font-medium">
                <li>
                  <a 
                    className="hover:text-white transition-colors flex items-center gap-2" 
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
          
          <div className="pt-8 border-t border-neutral-800/80 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-500 text-[10px] uppercase tracking-[0.25em] font-bold">
              © 2026 P&D AGENCY. CUSTOM DIGITAL AGENCY. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <button 
                onClick={() => openLegalModal('terms')}
                className="text-neutral-500 hover:text-neutral-300 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
              >
                TERMOS DE USO
              </button>
              <button 
                onClick={() => openLegalModal('privacy')}
                className="text-neutral-500 hover:text-neutral-300 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
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

