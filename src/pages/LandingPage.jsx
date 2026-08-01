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

const Counter = ({ value, label, sub, darkMode }) => {
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
    <div ref={ref} className={`w-full md:flex-1 p-8 md:p-10 rounded-2xl border group hover:border-primary/50 hover:scale-105 transition-all duration-500 flex flex-col items-center text-center ${
      darkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-neutral-200/80 shadow-sm'
    }`}>
      <motion.p 
        animate={isInView ? { scale: [1, 1.1, 1], transition: { duration: 0.5, delay: 2 } } : {}}
        className="font-headline text-5xl md:text-6xl font-black mb-4 text-primary tracking-tighter"
      >
        {count}{suffix}
      </motion.p>
      <p className={`font-headline text-lg md:text-xl font-bold mb-1 uppercase tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{label}</p>
      <p className={`font-body text-xs md:text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>{sub}</p>
    </div>
  );
};

// ── COMPONENTE PRINCIPAL (COM MODO CLARO/ESCURO & MARQUEE CONTINUO) ──

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState('terms');
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const openModal = (pkg = '') => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

  const openLegalModal = (tab = 'terms') => {
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  };

  const brands = [
    { name: 'TACOS KING', category: 'Fast Food • Guia, Pombal', icon: 'fastfood', link: 'https://www.facebook.com/TakosKing.Guia.Pombal/' },
    { name: 'AGOSTINHO BIKES', category: 'Stand & Oficina de Bicicletas', icon: 'pedal_bike', link: 'https://agostinho-bikes.vercel.app/' },
    { name: 'ROOTS 199', category: 'Conceito & Marca', icon: 'forest', link: '#' },
    { name: 'VAULT NUMBER ONE', category: 'Barbearia Premium', icon: 'content_cut', link: 'https://vault-number-one-barbershop.vercel.app/' },
    { name: 'MARIA JOÃO', category: 'Portfolio Criativo', icon: 'brush', link: 'https://maria-joao-portfolio.vercel.app/' },
    { name: 'EDU BRASIL', category: 'Plataforma Educacional', icon: 'school', link: 'https://mobileapp-taupe.vercel.app/' }
  ];

  return (
    <div className={`selection:bg-primary selection:text-white font-body leading-normal transition-colors duration-500 ${
      darkMode ? 'text-white bg-[#050A13]' : 'text-neutral-900 bg-[#FDFBF7]'
    }`}>
      <CustomCursor />
      
      {/* ── PRELOADER ── */}
      {loading && (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-700 ${
          darkMode ? 'bg-[#050A13]' : 'bg-[#FDFBF7]'
        }`}>
          <div className="flex items-center gap-3 animate-pulse">
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary flex items-center justify-center text-primary">
              <MaterialIcon name="architecture" className="text-3xl" />
            </div>
            <span className={`text-2xl font-headline font-black tracking-tighter uppercase italic ${darkMode ? 'text-white' : 'text-neutral-900'}`}>P&D AGENCY</span>
          </div>
          <span className="mt-4 text-[10px] font-label uppercase tracking-[0.5em] text-neutral-500 font-bold">CUSTOM DIGITAL AGENCY</span>
        </div>
      )}

      {/* ── HEADER COM ALTERNÂNCIA DE TEMA ── */}
      <header className={`fixed top-0 w-full z-50 border-b backdrop-blur-2xl transition-colors duration-500 ${
        darkMode ? 'bg-[#050A13]/90 border-neutral-800/80' : 'bg-[#FDFBF7]/90 border-neutral-200/80'
      }`}>
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 md:gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-primary border border-primary/30 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.2)] bg-primary/10">
              <MaterialIcon name="architecture" className="text-2xl md:text-3xl" />
            </div>
            <span className={`text-lg md:text-2xl font-black tracking-tighter uppercase font-headline italic truncate max-w-[140px] sm:max-w-none ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}>P&D AGENCY</span>
          </div>

          <nav className={`hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] ${
            darkMode ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            <a href="#welcome" className="hover:text-primary transition-colors">Início</a>
            <a href="#custom-agency" className="hover:text-primary transition-colors">Abordagem</a>
            <a href="#o-que-fazemos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a>
            <a href="#testemunhos" className="hover:text-primary transition-colors">Testemunhos</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* BOTÃO MODO CLARO / ESCURO */}
            <button
              onClick={toggleTheme}
              title={darkMode ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
              className={`p-2.5 rounded-full border transition-all flex items-center justify-center ${
                darkMode ? 'bg-neutral-900 border-neutral-700 text-amber-400 hover:bg-neutral-800' : 'bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200'
              }`}
            >
              <MaterialIcon name={darkMode ? "light_mode" : "dark_mode"} className="text-xl" />
            </button>

            <button 
              onClick={() => openModal()}
              className="bg-primary text-white px-7 py-3 rounded-full font-black font-headline text-[11px] tracking-widest hover:bg-primary/90 active:scale-95 transition-all uppercase shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              VAMOS CONSTRUIR
            </button>
          </div>
        </div>
      </header>

      <main className="overflow-x-hidden pt-20">
        {/* ── HERO SECTION ── */}
        <section className={`relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-16 pb-24 overflow-hidden transition-colors duration-500 ${
          darkMode ? 'bg-[#050A13]' : 'bg-[#FDFBF7]'
        }`} id="welcome">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="container max-w-6xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-neutral-400/40"></div>
              <p className="font-label text-primary uppercase tracking-[0.5em] text-[11px] font-black italic">
                WELCOME TO P&D AGENCY
              </p>
              <div className="h-[1px] w-12 bg-neutral-400/40"></div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`font-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.95] tracking-tighter mb-8 ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}
            >
              CUSTOM <br />
              <span className="text-primary italic">DIGITAL & COMMUNICATION</span> <br />
              AGENCY
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className={`max-w-3xl mx-auto mb-12 text-base md:text-xl font-light leading-relaxed italic ${
                darkMode ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              <p className="mb-4">
                <strong>A sua marca é única e merece uma comunicação totalmente feita à medida.</strong>
              </p>
              <p className="text-sm md:text-lg">
                Na P&D Agency, tratamos o seu projeto com a diferenciação de que ele precisa. <br className="hidden md:block" />
                <strong className={darkMode ? 'text-white' : 'text-neutral-900'}>Somos a sua agência de tecnologia e marketing, somos um parceiro de negócio.</strong>
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
                className={`w-full sm:w-auto border px-10 py-5 rounded-full font-headline font-black text-xs tracking-[0.25em] uppercase transition-all backdrop-blur-sm ${
                  darkMode ? 'border-neutral-700 text-white hover:bg-white/10' : 'border-neutral-300 text-neutral-900 hover:bg-black/5'
                }`}
              >
                SABER MAIS
              </a>
            </motion.div>

            {/* MARQUEE TICKER DOS CLIENTES HOVER HERO */}
            <div className={`w-full overflow-hidden border-y py-5 rounded-2xl ${
              darkMode ? 'border-neutral-800 bg-neutral-900/40' : 'border-neutral-200 bg-neutral-100/60'
            }`}>
              <div className={`flex items-center gap-12 whitespace-nowrap justify-around opacity-85 text-[11px] font-headline font-black uppercase tracking-[0.25em] ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                <span className="flex items-center gap-2"><MaterialIcon name="pedal_bike" className="text-primary" /> AGOSTINHO BIKES</span>
                <span className="opacity-30">•</span>
                <span className="flex items-center gap-2"><MaterialIcon name="fastfood" className="text-amber-500" /> TAKOS KING</span>
                <span className="opacity-30">•</span>
                <span className="flex items-center gap-2"><MaterialIcon name="content_cut" className="text-primary" /> VAULT NUMBER ONE</span>
                <span className="opacity-30">•</span>
                <span className="flex items-center gap-2"><MaterialIcon name="forest" className="text-primary" /> ROOTS 199</span>
                <span className="opacity-30">•</span>
                <span className="flex items-center gap-2"><MaterialIcon name="brush" className="text-primary" /> MARIA JOÃO</span>
                <span className="opacity-30">•</span>
                <span className="flex items-center gap-2"><MaterialIcon name="school" className="text-primary" /> EDU BRASIL</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION: CUSTOM DIGITAL AGENCY ── */}
        <section className={`py-28 border-y transition-colors duration-500 ${
          darkMode ? 'bg-[#070D1A] border-neutral-800/60' : 'bg-neutral-50 border-neutral-200/80'
        }`} id="custom-agency">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-2 font-bold">SOBRE A P&D AGENCY</p>
              <h2 className={`font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>
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
                  className={`p-8 md:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-500 shadow-xl group ${
                    darkMode 
                      ? 'bg-neutral-900/90 border-neutral-800 hover:border-primary/50' 
                      : 'bg-white border-neutral-200 hover:border-primary/50'
                  }`}
                >
                  <div>
                    <span className="font-headline text-4xl font-black text-primary/40 group-hover:text-primary transition-colors block mb-6">{pillar.num}</span>
                    <h3 className={`font-headline text-2xl font-black uppercase mb-4 tracking-tight group-hover:text-primary transition-colors ${
                      darkMode ? 'text-white' : 'text-neutral-900'
                    }`}>{pillar.title}</h3>
                    <p className={`text-sm md:text-base leading-relaxed font-body font-normal ${
                      darkMode ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Banner Destaque */}
            <div className={`border rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto ${
              darkMode ? 'bg-primary/10 border-primary/30 text-white' : 'bg-primary/5 border-primary/20 text-neutral-900'
            }`}>
              <p className="text-lg md:text-2xl font-headline font-bold leading-relaxed tracking-tight">
                "Criamos estratégias 100% customizadas e implementamos o que for preciso para atingir os objetivos, sem limites de plataformas. Trabalhamos o seu projeto como um todo."
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION: O QUE FAZEMOS ── */}
        <section className={`py-28 border-b transition-colors duration-500 ${
          darkMode ? 'bg-[#050A13] border-neutral-800/60' : 'bg-[#FDFBF7] border-neutral-200'
        }`} id="o-que-fazemos">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-2 font-bold">SOLUÇÕES 360º</p>
              <h2 className={`font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>
                O QUE <span className="text-primary italic">FAZEMOS</span>
              </h2>
              <p className={`text-base md:text-lg font-light leading-relaxed ${
                darkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                Na P&D Agency, oferecemos uma gama completa de serviços de tecnologia, desenvolvimento web e identidade digital. Com estratégias inovadoras e personalizadas, ajudamos a sua marca a destacar-se no mercado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -6 }}
                className={`p-8 md:p-10 rounded-3xl border flex flex-col justify-between group transition-all ${
                  darkMode ? 'bg-neutral-900/80 border-neutral-800 hover:border-primary/40' : 'bg-white border-neutral-200 hover:border-primary/40 shadow-sm'
                }`}
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary text-primary group-hover:text-white transition-colors">
                    <MaterialIcon name="web" className="text-3xl" />
                  </div>
                  <h3 className={`font-headline text-3xl font-black uppercase mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>ENGENHARIA WEB & APLICAÇÕES</h3>
                  <p className={`text-sm leading-relaxed mb-6 font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Trabalhamos o desenvolvimento web através de soluções 360º all-inclusive que eliminam o esforço técnico e trazem resultados duradouros.
                  </p>
                  <ul className={`space-y-3 text-xs uppercase tracking-wider font-bold mb-8 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
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
                className={`p-8 md:p-10 rounded-3xl border flex flex-col justify-between group transition-all ${
                  darkMode ? 'bg-neutral-900/80 border-neutral-800 hover:border-primary/40' : 'bg-white border-neutral-200 hover:border-primary/40 shadow-sm'
                }`}
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary text-primary group-hover:text-white transition-colors">
                    <MaterialIcon name="brush" className="text-3xl" />
                  </div>
                  <h3 className={`font-headline text-3xl font-black uppercase mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>IDENTIDADE DE MARCA & BRANDING</h3>
                  <p className={`text-sm leading-relaxed mb-6 font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Criamos identidades visuais de autoridade que posicionam a sua empresa como líder indiscutível no seu mercado.
                  </p>
                  <ul className={`space-y-3 text-xs uppercase tracking-wider font-bold mb-8 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
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
        <section className={`py-20 border-b relative overflow-hidden transition-colors duration-500 ${
          darkMode ? 'bg-[#070D1A] border-neutral-800/60' : 'bg-neutral-100 border-neutral-200'
        }`}>
          <div className="container mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { val: "5+", lab: "Anos de Experiência em Engenharia" },
                { val: "100%", lab: "Satisfação Garantida" },
                { val: "2-7 Dias", lab: "Tempo de Entrega Típico" },
                { val: "24/7", lab: "Monitorização Ativa" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center w-full relative group">
                  <span className={`text-5xl md:text-6xl font-black font-headline tracking-tighter ${
                    darkMode ? 'text-white' : 'text-neutral-900'
                  }`}>
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
        <section className={`py-28 border-b transition-colors duration-500 ${
          darkMode ? 'bg-[#050A13] border-neutral-800/60' : 'bg-[#FDFBF7] border-neutral-200'
        }`} id="portfolio">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-3 font-bold">TRABALHOS SELECIONADOS</p>
              <h2 className={`font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>O ARQUIVO</h2>
              <p className={`text-sm mt-4 max-w-lg mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>Exemplos reais do nosso trabalho — websites ao vivo e em desenvolvimento para clientes e projetos próprios.</p>
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
                  className={`relative aspect-[4/3] overflow-hidden rounded-3xl group cursor-pointer block border shadow-xl ${
                    darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200'
                  }`}
                >
                  <img
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 grayscale group-hover:grayscale-0 group-hover:opacity-95 transition-all duration-700 group-hover:scale-105"
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
                    <p className="text-neutral-200 text-sm font-light leading-snug">{item.subtitle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTEMUNHOS & AVALIAÇÕES ── */}
        <section className={`py-28 border-b transition-colors duration-500 ${
          darkMode ? 'bg-[#070D1A] border-neutral-800/60' : 'bg-neutral-100 border-neutral-200'
        }`} id="testemunhos">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-3 font-bold">AVALIAÇÕES & TESTEMUNHOS</p>
              <h2 className={`font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>O QUE DIZEM OS NOSSOS CLIENTES</h2>
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
                  className={`p-8 rounded-3xl border flex flex-col justify-between shadow-xl relative group transition-all ${
                    darkMode ? 'bg-neutral-900/90 border-neutral-800 hover:border-primary/40' : 'bg-white border-neutral-200 hover:border-primary/40'
                  }`}
                >
                  <div className="mb-8">
                    <p className="text-primary text-5xl font-headline font-black mb-2 opacity-50">“</p>
                    <p className={`text-sm md:text-base leading-relaxed italic font-light ${
                      darkMode ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>
                      "{testi.quote}"
                    </p>
                  </div>
                  <div className={`pt-6 border-t ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
                    <h4 className={`font-headline font-black text-base uppercase tracking-tight ${
                      darkMode ? 'text-white' : 'text-neutral-900'
                    }`}>{testi.author}</h4>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider">{testi.role} • {testi.brand}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARCAS QUE CONFIAM EM NÓS (TICKER CONTINUO QUE ANDA PELA TELA NA HORIZONTAL) ── */}
        <section className={`py-20 border-b overflow-hidden transition-colors duration-500 ${
          darkMode ? 'bg-[#03060C] border-neutral-800/80' : 'bg-neutral-200/60 border-neutral-300'
        }`}>
          <div className="text-center mb-10">
            <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-2 font-bold">CONFIANÇA & PARCERIA</p>
            <h3 className={`font-headline text-3xl md:text-4xl font-black uppercase tracking-tighter ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}>
              MARCAS QUE CONFIAM EM NÓS
            </h3>
          </div>

          <div className="relative w-full overflow-hidden flex items-center">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex items-center gap-8 whitespace-nowrap w-max"
            >
              {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                <a
                  key={i}
                  href={brand.link}
                  target={brand.link === '#' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 px-8 py-5 rounded-2xl border transition-all ${
                    darkMode 
                      ? 'bg-neutral-900/90 border-neutral-800 text-white hover:border-primary/50' 
                      : 'bg-white border-neutral-200/90 text-neutral-900 hover:border-primary/50 shadow-sm'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <MaterialIcon name={brand.icon} className="text-primary text-2xl" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-headline font-black text-sm uppercase tracking-tight">{brand.name}</h4>
                    <p className={`text-[11px] font-medium italic ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>{brand.category}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── MEETING CTA ── */}
        <section className={`py-36 relative overflow-hidden flex items-center justify-center text-center transition-colors duration-500 ${
          darkMode ? 'bg-[#050A13]' : 'bg-[#FDFBF7]'
        }`}>
          <div className="container max-w-4xl mx-auto px-6 relative z-10">
            <h2 className={`font-headline text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6 ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}>
              TENS INTERESSE?<br />
              <span className="text-primary italic">VAMOS MARCAR UMA REUNIÃO.</span>
            </h2>
            <p className={`text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
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

      {/* ── FOOTER ── */}
      <footer className={`w-full pt-24 pb-16 px-6 font-body border-t transition-colors duration-500 ${
        darkMode ? 'bg-[#03060C] border-neutral-800' : 'bg-neutral-100 border-neutral-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center text-primary border border-primary/30 rounded-xl bg-primary/10">
                  <MaterialIcon name="architecture" className="text-2xl" />
                </div>
                <h2 className={`font-headline font-black text-3xl uppercase tracking-tighter italic ${
                  darkMode ? 'text-white' : 'text-neutral-900'
                }`}>P&D AGENCY</h2>
              </div>
              <p className={`font-light leading-relaxed max-w-sm text-base ${
                darkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                Custom Digital & Communication Agency. Arquitetando o futuro da presença digital.
              </p>
            </div>
            
            <div>
              <h4 className="font-headline text-primary font-black mb-6 uppercase tracking-[0.3em] text-xs">NAVEGAÇÃO</h4>
              <ul className={`space-y-3 text-sm font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <li><a className="hover:text-primary transition-colors" href="#welcome">Início</a></li>
                <li><a className="hover:text-primary transition-colors" href="#custom-agency">Abordagem</a></li>
                <li><a className="hover:text-primary transition-colors" href="#o-que-fazemos">Serviços</a></li>
                <li><a className="hover:text-primary transition-colors" href="#portfolio">Portfólio</a></li>
                <li><a className="hover:text-primary transition-colors" href="#testemunhos">Testemunhos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-headline text-primary font-black mb-6 uppercase tracking-[0.3em] text-xs">SOCIAL</h4>
              <ul className={`space-y-3 text-sm font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <li>
                  <a 
                    className="hover:text-primary transition-colors flex items-center gap-2" 
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
          
          <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${
            darkMode ? 'border-neutral-800/80' : 'border-neutral-300'
          }`}>
            <p className="text-neutral-500 text-[10px] uppercase tracking-[0.25em] font-bold">
              © 2026 P&D AGENCY. CUSTOM DIGITAL AGENCY. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <button 
                onClick={() => openLegalModal('terms')}
                className="text-neutral-500 hover:text-primary text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
              >
                TERMOS DE USO
              </button>
              <button 
                onClick={() => openLegalModal('privacy')}
                className="text-neutral-500 hover:text-primary text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
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


