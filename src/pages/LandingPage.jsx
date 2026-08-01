import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactModal from '../components/ContactModal';
import LegalModal from '../components/LegalModal';
import CustomCursor from '../components/CustomCursor';

// ── DICIONÁRIO BILINGUE (DEFAULT PT) ──
const translations = {
  pt: {
    nav: {
      home: "Início",
      approach: "Abordagem",
      services: "Serviços",
      portfolio: "Portfólio",
      testimonials: "Testemunhos"
    },
    cta: "VAMOS CONSTRUIR",
    preloader: "CUSTOM DIGITAL AGENCY",
    hero: {
      badge: "WELCOME TO P&D AGENCY",
      headline1: "CUSTOM",
      headline2: "DIGITAL & COMMUNICATION",
      headline3: "AGENCY",
      copyBold: "A sua marca é única e merece uma comunicação totalmente feita à medida.",
      copySub: "Na P&D Agency, tratamos o seu projeto com a diferenciação de que ele precisa.",
      copyPartner: "Somos a sua agência de tecnologia e marketing, somos um parceiro de negócio.",
      btnPrimary: "START YOUR PROJECT",
      btnSecondary: "SABER MAIS"
    },
    about: {
      tag: "SOBRE A P&D AGENCY",
      title1: "CUSTOM DIGITAL",
      title2: "AGENCY",
      p1_num: "01",
      p1_title: "UMA ABORDAGEM PERSONALIZADA",
      p1_desc: "Somos uma agência boutique full-service, o que significa que temos a competência para desenvolver o seu projeto de comunicação e tecnologia, desde a conceção estratégica até à aplicação prática, de uma forma relevante para o seu setor de atividade. Estamos consigo ao longo de todo o caminho!",
      p2_num: "02",
      p2_title: "DESENVOLVIMENTO & MARKETING SEM LIMITES",
      p2_desc: "O digital é uma atividade de frequência e consistência. Por essa razão, a nossa consultoria e engenharia não têm qualquer tipo de limitações quanto ao número de atualizações ou funcionalidades a desenvolver. Vamos definir objetivos e fazer tudo o que for preciso para os atingir.",
      p3_num: "03",
      p3_title: "UM PARCEIRO DE NEGÓCIO",
      p3_desc: "Mais do que uma agência digital, somos um parceiro de negócio que o vai ajudar a olhar de forma estratégica para a tecnologia e colocar o poder da comunicação e desenvolvimento ao serviço do seu negócio.",
      p4_num: "04",
      p4_title: "UMA EQUIPA DEDICADA",
      p4_desc: "O seu projeto é extremamente importante para nós, pelo que terá à sua disposição uma equipa multidisciplinar constituída por Engenheiro de Software, Designer UX/UI, Account Manager e Diretor Criativo.",
      quote: '"Criamos estratégias 100% customizadas e implementamos o que for preciso para atingir os objetivos, sem limites de plataformas. Trabalhamos o seu projeto como um todo."'
    },
    services: {
      tag: "SOLUÇÕES 360º",
      title1: "O QUE",
      title2: "FAZEMOS",
      desc: "Na P&D Agency, oferecemos uma gama completa de serviços de tecnologia, desenvolvimento web e identidade digital. Com estratégias inovadoras e personalizadas, ajudamos a sua marca a destacar-se no mercado.",
      card1_title: "ENGENHARIA WEB & APLICAÇÕES",
      card1_desc: "Trabalhamos o desenvolvimento web através de soluções 360º all-inclusive que eliminam o esforço técnico e trazem resultados duradouros.",
      card2_title: "IDENTIDADE DE MARCA & BRANDING",
      card2_desc: "Criamos identidades visuais de autoridade que posicionam a sua empresa como líder indiscutível no seu mercado.",
      btnMore: "SABER MAIS"
    },
    stats: {
      s1_val: "5+", s1_lab: "Anos de Experiência em Engenharia",
      s2_val: "100%", s2_lab: "Satisfação Garantida",
      s3_val: "2-7 Dias", s3_lab: "Tempo de Entrega Típico",
      s4_val: "24/7", s4_lab: "Monitorização Ativa"
    },
    portfolio: {
      tag: "TRABALHOS SELECIONADOS",
      title: "O ARQUIVO",
      sub: "Exemplos reais do nosso trabalho — websites ao vivo e em desenvolvimento para clientes e projetos próprios.",
      live: "Ao Vivo",
      progress: "Em Progresso"
    },
    testimonials: {
      tag: "AVALIAÇÕES & TESTEMUNHOS",
      title: "O QUE DIZEM OS NOSSOS CLIENTES"
    },
    brands: {
      tag: "CONFIANÇA & PARCERIA",
      title: "MARCAS QUE CONFIAM EM NÓS"
    },
    ctaMeeting: {
      title1: "TENS INTERESSE?",
      title2: "VAMOS MARCAR UMA REUNIÃO.",
      sub: "Agendamos uma conversa de 30 minutos, sem compromisso, para perceber o que a tua empresa necessita.",
      btn: "AGENDAR REUNIÃO"
    },
    footer: {
      sub: "Custom Digital & Communication Agency. Arquitetando o futuro da presença digital.",
      navTitle: "NAVEGAÇÃO",
      socialTitle: "SOCIAL",
      rights: "© 2026 P&D AGENCY. CUSTOM DIGITAL AGENCY. ALL RIGHTS RESERVED.",
      terms: "TERMOS DE USO",
      privacy: "POLÍTICA DE PRIVACIDADE"
    }
  },
  en: {
    nav: {
      home: "Home",
      approach: "Approach",
      services: "Services",
      portfolio: "Portfolio",
      testimonials: "Testimonials"
    },
    cta: "LET'S BUILD",
    preloader: "CUSTOM DIGITAL AGENCY",
    hero: {
      badge: "WELCOME TO P&D AGENCY",
      headline1: "CUSTOM",
      headline2: "DIGITAL & COMMUNICATION",
      headline3: "AGENCY",
      copyBold: "Your brand is unique and deserves fully tailored digital communication.",
      copySub: "At P&D Agency, we treat your project with the differentiation and engineering excellence it demands.",
      copyPartner: "We are your technology and marketing team — your long-term business partner.",
      btnPrimary: "START YOUR PROJECT",
      btnSecondary: "LEARN MORE"
    },
    about: {
      tag: "ABOUT P&D AGENCY",
      title1: "CUSTOM DIGITAL",
      title2: "AGENCY",
      p1_num: "01",
      p1_title: "A TAILORED APPROACH",
      p1_desc: "We are a full-service boutique agency, bringing the expertise to develop your communication and tech project from strategic concept to execution. We stand by you every step of the way!",
      p2_num: "02",
      p2_title: "UNLIMITED DEVELOPMENT & MARKETING",
      p2_desc: "Digital success demands consistency. Our engineering and consulting have zero limits on updates or feature rollouts. We set bold targets and do whatever it takes to achieve them.",
      p3_num: "03",
      p3_title: "A BUSINESS PARTNER",
      p3_desc: "More than a digital agency, we are a strategic business partner dedicated to placing software engineering and high-end design at the service of your revenue growth.",
      p4_num: "04",
      p4_title: "A DEDICATED TEAM",
      p4_desc: "Your project is our top priority. You will work directly with a multidisciplinary team of Senior Software Engineers, UX/UI Designers, Account Managers, and Creative Directors.",
      quote: '"We craft 100% custom strategies and execute whatever is needed to hit your targets across any platform. We build your project as a unified ecosystem."'
    },
    services: {
      tag: "360º SOLUTIONS",
      title1: "WHAT WE",
      title2: "DO",
      desc: "At P&D Agency, we provide a full suite of software engineering, web development, and digital identity services. With cutting-edge strategies, we elevate your brand to dominate your market.",
      card1_title: "WEB ARCHITECTURE & APPS",
      card1_desc: "We engineer 360º all-inclusive web platforms that eliminate technical overhead and deliver lasting high performance.",
      card2_title: "BRAND IDENTITY & BRANDING",
      card2_desc: "We design authoritative brand identities and UI/UX systems that position your business as the undisputed industry leader.",
      btnMore: "LEARN MORE"
    },
    stats: {
      s1_val: "5+", s1_lab: "Years of Engineering Expertise",
      s2_val: "100%", s2_lab: "Guaranteed Client Satisfaction",
      s3_val: "2-7 Days", s3_lab: "Typical Project Turnaround",
      s4_val: "24/7", s4_lab: "Active System Monitoring"
    },
    portfolio: {
      tag: "SELECTED WORKS",
      title: "THE ARCHIVE",
      sub: "Real-world portfolio examples — live and active web platforms engineered for our clients.",
      live: "Live",
      progress: "In Progress"
    },
    testimonials: {
      tag: "REVIEWS & TESTIMONIALS",
      title: "WHAT OUR CLIENTS SAY"
    },
    brands: {
      tag: "TRUST & PARTNERSHIPS",
      title: "BRANDS THAT TRUST US"
    },
    ctaMeeting: {
      title1: "INTERESTED?",
      title2: "LET'S BOOK A MEETING.",
      sub: "Schedule a no-commitment 30-minute strategic consultation to discuss your business goals.",
      btn: "BOOK A MEETING"
    },
    footer: {
      sub: "Custom Digital & Communication Agency. Architecting the future of web presence.",
      navTitle: "NAVIGATION",
      socialTitle: "SOCIAL",
      rights: "© 2026 P&D AGENCY. CUSTOM DIGITAL AGENCY. ALL RIGHTS RESERVED.",
      terms: "TERMS OF USE",
      privacy: "PRIVACY POLICY"
    }
  }
};

// ── COMPONENTES AUXILIARES ──

const MaterialIcon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true" data-icon={name}>
    {name}
  </span>
);

// ── COMPONENTE PRINCIPAL (COM MODO CLARO/ESCURO & LINGUAGEM PT/EN) ──

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState('terms');
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('pt'); // Default: PT

  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLang(lang === 'pt' ? 'en' : 'pt');

  const openModal = (pkg = '') => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

  const openLegalModal = (tab = 'terms') => {
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  };

  const brands = [
    { name: 'TAKOS KING', category: 'Fast Food • Guia, Pombal', logo: '/assets/takos-king.png', link: 'https://www.facebook.com/TakosKing.Guia.Pombal/' },
    { name: 'AGOSTINHO BIKES', category: 'Stand & Oficina de Bicicletas', logo: '/assets/agostinho-bikes.png', link: 'https://agostinho-bikes.vercel.app/' },
    { name: 'ROOTS 199', category: 'Conceito & Marca', logo: '/assets/roots-199.png', link: '#' },
    { name: 'VAULT NUMBER ONE', category: 'Barbearia Premium', logo: '/assets/vault.png', link: 'https://vault-number-one-barbershop.vercel.app/' },
    { name: 'MARIA JOÃO', category: 'Portfolio Criativo', icon: 'brush', link: 'https://maria-joao-portfolio.vercel.app/' },
    { name: 'EDU BRASIL', category: 'Plataforma Educacional', logo: '/assets/edu-brasil-icon.png', link: 'https://mobileapp-taupe.vercel.app/' }
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
          <span className="mt-4 text-[10px] font-label uppercase tracking-[0.5em] text-neutral-500 font-bold">{t.preloader}</span>
        </div>
      )}

      {/* ── HEADER COM IDIOMA (PT / EN) E TEMA (CLARO / ESCURO) ── */}
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
            <a href="#welcome" className="hover:text-primary transition-colors">{t.nav.home}</a>
            <a href="#custom-agency" className="hover:text-primary transition-colors">{t.nav.approach}</a>
            <a href="#o-que-fazemos" className="hover:text-primary transition-colors">{t.nav.services}</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">{t.nav.portfolio}</a>
            <a href="#testemunhos" className="hover:text-primary transition-colors">{t.nav.testimonials}</a>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            {/* SELETOR DE IDIOMA (PT / EN) */}
            <button
              onClick={toggleLanguage}
              title="Mudar Idioma / Change Language"
              className={`px-3 py-1.5 rounded-full border font-headline font-black text-[11px] tracking-wider transition-all flex items-center gap-1.5 ${
                darkMode ? 'bg-neutral-900 border-neutral-700 text-white hover:border-primary' : 'bg-neutral-100 border-neutral-300 text-neutral-900 hover:border-primary'
              }`}
            >
              <span className={lang === 'pt' ? 'text-primary font-bold' : 'opacity-40'}>PT</span>
              <span className="opacity-30">|</span>
              <span className={lang === 'en' ? 'text-primary font-bold' : 'opacity-40'}>EN</span>
            </button>

            {/* BOTÃO MODO CLARO / ESCURO */}
            <button
              onClick={toggleTheme}
              title={darkMode ? "Modo Claro" : "Modo Escuro"}
              className={`p-2.5 rounded-full border transition-all flex items-center justify-center ${
                darkMode ? 'bg-neutral-900 border-neutral-700 text-amber-400 hover:bg-neutral-800' : 'bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200'
              }`}
            >
              <MaterialIcon name={darkMode ? "light_mode" : "dark_mode"} className="text-xl" />
            </button>

            <button 
              onClick={() => openModal()}
              className="bg-primary text-white px-5 md:px-7 py-3 rounded-full font-black font-headline text-[11px] tracking-widest hover:bg-primary/90 active:scale-95 transition-all uppercase shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              {t.cta}
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
                {t.hero.badge}
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
              {t.hero.headline1} <br />
              <span className="text-primary italic">{t.hero.headline2}</span> <br />
              {t.hero.headline3}
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
                <strong>{t.hero.copyBold}</strong>
              </p>
              <p className="text-sm md:text-lg">
                {t.hero.copySub} <br className="hidden md:block" />
                <strong className={darkMode ? 'text-white' : 'text-neutral-900'}>{t.hero.copyPartner}</strong>
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
                {t.hero.btnPrimary}
              </button>
              <a 
                href="#custom-agency"
                className={`w-full sm:w-auto border px-10 py-5 rounded-full font-headline font-black text-xs tracking-[0.25em] uppercase transition-all backdrop-blur-sm ${
                  darkMode ? 'border-neutral-700 text-white hover:bg-white/10' : 'border-neutral-300 text-neutral-900 hover:bg-black/5'
                }`}
              >
                {t.hero.btnSecondary}
              </a>
            </motion.div>

            {/* MARQUEE TICKER DOS CLIENTES HERO */}
            <div className={`w-full overflow-hidden border-y py-5 rounded-2xl ${
              darkMode ? 'border-neutral-800 bg-neutral-900/40' : 'border-neutral-200 bg-neutral-100/60'
            }`}>
              <div className={`flex items-center gap-10 whitespace-nowrap justify-around opacity-90 text-[11px] font-headline font-black uppercase tracking-[0.2em] ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                {brands.map((b, i) => (
                  <React.Fragment key={i}>
                    <span className="flex items-center gap-3">
                      <img src={b.logo} alt={b.name} className="w-6 h-6 object-contain rounded-md bg-white/10 p-0.5" />
                      {b.name}
                    </span>
                    {i < brands.length - 1 && <span className="opacity-30">•</span>}
                  </React.Fragment>
                ))}
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
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-2 font-bold">{t.about.tag}</p>
              <h2 className={`font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>
                {t.about.title1} <br />
                <span className="text-primary italic">{t.about.title2}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                { num: t.about.p1_num, title: t.about.p1_title, desc: t.about.p1_desc },
                { num: t.about.p2_num, title: t.about.p2_title, desc: t.about.p2_desc },
                { num: t.about.p3_num, title: t.about.p3_title, desc: t.about.p3_desc },
                { num: t.about.p4_num, title: t.about.p4_title, desc: t.about.p4_desc }
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
                {t.about.quote}
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
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-2 font-bold">{t.services.tag}</p>
              <h2 className={`font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>
                {t.services.title1} <span className="text-primary italic">{t.services.title2}</span>
              </h2>
              <p className={`text-base md:text-lg font-light leading-relaxed ${
                darkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                {t.services.desc}
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
                  <h3 className={`font-headline text-3xl font-black uppercase mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{t.services.card1_title}</h3>
                  <p className={`text-sm leading-relaxed mb-6 font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {t.services.card1_desc}
                  </p>
                  <ul className={`space-y-3 text-xs uppercase tracking-wider font-bold mb-8 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> Web Architecture & React/Next.js</li>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> High Load & Cloud Optimization</li>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> SEO Avançado & Core Web Vitals</li>
                  </ul>
                </div>
                <button onClick={() => openModal(t.services.card1_title)} className="w-full py-4 rounded-xl border border-primary/40 text-primary font-headline font-black text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all">
                  {t.services.btnMore}
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
                  <h3 className={`font-headline text-3xl font-black uppercase mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{t.services.card2_title}</h3>
                  <p className={`text-sm leading-relaxed mb-6 font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {t.services.card2_desc}
                  </p>
                  <ul className={`space-y-3 text-xs uppercase tracking-wider font-bold mb-8 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> Design de Marca & UI/UX Design</li>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> Redes Sociais & Estratégia de Conteúdo</li>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> Anúncios Pagos & Performance</li>
                  </ul>
                </div>
                <button onClick={() => openModal(t.services.card2_title)} className="w-full py-4 rounded-xl border border-primary/40 text-primary font-headline font-black text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all">
                  {t.services.btnMore}
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
                { val: t.stats.s1_val, lab: t.stats.s1_lab },
                { val: t.stats.s2_val, lab: t.stats.s2_lab },
                { val: t.stats.s3_val, lab: t.stats.s3_lab },
                { val: t.stats.s4_val, lab: t.stats.s4_lab }
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
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-3 font-bold">{t.portfolio.tag}</p>
              <h2 className={`font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>{t.portfolio.title}</h2>
              <p className={`text-sm mt-4 max-w-lg mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.portfolio.sub}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  label: 'Stand & Oficina / 2026',
                  labelColor: 'text-primary',
                  title: 'AGOSTINHO BIKES',
                  subtitle: lang === 'pt' ? 'Stand e oficina de bicicletas — catálogo digital, serviços e presença web.' : 'Bicycle showroom & repair shop — digital catalog, services & web presence.',
                  img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
                  badge: t.portfolio.live,
                  badgeClass: 'bg-primary text-white',
                  link: 'https://agostinho-bikes.vercel.app/',
                },
                {
                  label: 'Portfólio / 2026',
                  labelColor: 'text-primary',
                  title: 'MARIA JOÃO',
                  subtitle: lang === 'pt' ? 'Portfólio pessoal e showcase criativo de apresentação profissional.' : 'Personal portfolio and creative showcase for professional presentation.',
                  img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
                  badge: t.portfolio.live,
                  badgeClass: 'bg-primary text-white',
                  link: 'https://maria-joao-portfolio.vercel.app/',
                },
                {
                  label: 'Barbearia Premium / 2026',
                  labelColor: 'text-primary',
                  title: 'VAULT NUMBER ONE',
                  subtitle: lang === 'pt' ? 'Plataforma digital para barbearia de elite — menu de serviços e marca.' : 'Digital platform for elite barbershop — service menu & brand presence.',
                  img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
                  badge: t.portfolio.live,
                  badgeClass: 'bg-primary text-white',
                  link: 'https://vault-number-one-barbershop.vercel.app/',
                },
                {
                  label: 'Restauração / 2025',
                  labelColor: 'text-amber-500',
                  title: 'TAKOS KING',
                  subtitle: lang === 'pt' ? 'Fast food focado em tacos — em desenvolvimento para Pombal, Guia.' : 'Taco-focused fast food chain — under development in Pombal, Guia.',
                  img: '/assets/takos-king.png',
                  badge: t.portfolio.progress,
                  badgeClass: 'bg-amber-500 text-black font-bold',
                  link: 'https://www.facebook.com/TakosKing.Guia.Pombal/',
                },
                {
                  label: 'Agência / 2025',
                  labelColor: 'text-primary',
                  title: 'P&D AGENCY',
                  subtitle: lang === 'pt' ? 'O nosso próprio portfólio — o site que estás a ver agora.' : 'Our own agency platform — the website you are viewing right now.',
                  img: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
                  badge: t.portfolio.live,
                  badgeClass: 'bg-primary text-white',
                  link: '#',
                },
                {
                  label: 'Plataforma Web / 2025',
                  labelColor: 'text-primary',
                  title: 'EDU BRASIL',
                  subtitle: lang === 'pt' ? 'Aplicação web para estudantes brasileiros — dashboard e conteúdos educativos.' : 'Web application for Brazilian students — dashboard & learning content.',
                  img: '/assets/edu-brasil.png',
                  badge: t.portfolio.live,
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
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-3 font-bold">{t.testimonials.tag}</p>
              <h2 className={`font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>{t.testimonials.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: lang === 'pt' 
                    ? "Trabalhamos com a P&D Agency e a verdade é que não podíamos estar mais satisfeitos. Souberam ler a nossa visão desde o primeiro instante, têm uma equipa muito dedicada e apresentam um serviço super personalizado."
                    : "Working with P&D Agency exceeded all expectations. They captured our brand vision instantly, delivered dedicated support, and provided truly personalized engineering.",
                  author: "Ana Dominguez",
                  role: "Owner & Founder",
                  brand: "Ana Dominguez Ceramics"
                },
                {
                  quote: lang === 'pt'
                    ? "A parceria tem sido uma excelente experiência. Começando pelo profissionalismo, dedicação e rápida resposta a todas as solicitações no desenvolvimento do nosso website e catálogo digital."
                    : "Our partnership has been an outstanding experience. Their professionalism, rapid response times, and execution on our digital catalog website were second to none.",
                  author: "Equipa Agostinho Bikes",
                  role: "Gestão & Stand",
                  brand: "Agostinho Bikes"
                },
                {
                  quote: lang === 'pt'
                    ? "Contactámos a P&D Agency para a criação da nossa marca e website. Fiquei muito feliz com todos os resultados: imagem da marca, site e presença digital – cada elemento em perfeita sintonia."
                    : "We hired P&D Agency for our brand identity and web platform. The results speak for themselves — brand image, website, and digital presence in complete harmony.",
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

        {/* ── MARCAS QUE CONFIAM EM NÓS (ESTILO THEAGENCY.PT — LOGOS DIRETOS SEM FUNDO) ── */}
        <section className={`py-20 border-b overflow-hidden transition-colors duration-500 ${
          darkMode ? 'bg-[#03060C] border-neutral-800/80' : 'bg-neutral-100/80 border-neutral-300'
        }`}>
          <div className="text-center mb-12">
            <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-2 font-bold">{t.brands.tag}</p>
            <h3 className={`font-headline text-3xl md:text-4xl font-black uppercase tracking-tighter ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}>
              {t.brands.title}
            </h3>
          </div>

          <div className="relative w-full overflow-hidden flex items-center py-4">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
              className="flex items-center gap-14 md:gap-20 whitespace-nowrap w-max"
            >
              {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                <a
                  key={i}
                  href={brand.link}
                  target={brand.link === '#' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group opacity-85 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="h-10 md:h-12 w-auto object-contain max-w-[140px] transition-transform duration-300 group-hover:scale-105" 
                    />
                  ) : (
                    <MaterialIcon name={brand.icon} className="text-primary text-3xl" />
                  )}
                  <div className="text-left">
                    <h4 className={`font-headline font-black text-sm uppercase tracking-tight group-hover:text-primary transition-colors ${
                      darkMode ? 'text-white' : 'text-neutral-900'
                    }`}>{brand.name}</h4>
                    <p className={`text-[10px] font-medium italic ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>{brand.category}</p>
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
              {t.ctaMeeting.title1}<br />
              <span className="text-primary italic">{t.ctaMeeting.title2}</span>
            </h2>
            <p className={`text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              {t.ctaMeeting.sub}
            </p>
            <button 
              onClick={() => openModal()}
              className="bg-primary text-white px-12 py-6 rounded-full font-headline font-black text-xs tracking-[0.3em] uppercase hover:bg-blue-600 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
            >
              {t.ctaMeeting.btn}
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
                {t.footer.sub}
              </p>
            </div>
            
            <div>
              <h4 className="font-headline text-primary font-black mb-6 uppercase tracking-[0.3em] text-xs">{t.footer.navTitle}</h4>
              <ul className={`space-y-3 text-sm font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <li><a className="hover:text-primary transition-colors" href="#welcome">{t.nav.home}</a></li>
                <li><a className="hover:text-primary transition-colors" href="#custom-agency">{t.nav.approach}</a></li>
                <li><a className="hover:text-primary transition-colors" href="#o-que-fazemos">{t.nav.services}</a></li>
                <li><a className="hover:text-primary transition-colors" href="#portfolio">{t.nav.portfolio}</a></li>
                <li><a className="hover:text-primary transition-colors" href="#testemunhos">{t.nav.testimonials}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-headline text-primary font-black mb-6 uppercase tracking-[0.3em] text-xs">{t.footer.socialTitle}</h4>
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
              {t.footer.rights}
            </p>
            <div className="flex gap-8">
              <button 
                onClick={() => openLegalModal('terms')}
                className="text-neutral-500 hover:text-primary text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
              >
                {t.footer.terms}
              </button>
              <button 
                onClick={() => openLegalModal('privacy')}
                className="text-neutral-500 hover:text-primary text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
              >
                {t.footer.privacy}
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



