import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  Code2, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  Mail, 
  MessageSquare, 
  Phone, 
  ChevronRight, 
  Star, 
  Terminal, 
  ExternalLink,
  Laptop,
  Compass,
  Cpu,
  Flame,
  Award
} from 'lucide-react';

import SpotlightCard from '../components/SpotlightCard';
import AgencyCalculator from '../components/AgencyCalculator';

// ── BILINGUAL DICTIONARY (DEFAULT PT) ──
const content = {
  pt: {
    nav: {
      solutions: "Soluções",
      portfolio: "O Arquivo",
      process: "Metodologia",
      estimator: "Simulador",
      testimonials: "Testemunhos",
      contact: "Contacto",
      cta: "INICIAR PROJETO"
    },
    hero: {
      statusBadge: "DISPONÍVEL PARA NOVOS PROJETOS • Q3/Q4 2026",
      titlePre: "ENGENHARIA DE SOFTWARE",
      titleAccent: "E DESIGN DIGITAL",
      titlePost: "DE ELITE",
      subtitle: "Arquitetamos websites de alta performance, plataformas à medida e identidades de marca que transformam negócios em líderes de mercado indiscutíveis.",
      btnEstimate: "ESTIMAR PROJETO",
      btnPortfolio: "EXPLORAR O ARQUIVO",
      metrics: [
        { label: "Anos de Engenharia", value: "5+" },
        { label: "Score Core Web Vitals", value: "100/100" },
        { label: "Tempo Médio de Entrega", value: "7-21 Dias" },
        { label: "Código 100% Proprietário", value: "Sem Templates" }
      ],
      tickerTitle: "CLIENTES & MARCAS QUE CONFIOU NA P&D AGENCY"
    },
    solutions: {
      tag: "CAPACIDADES & SERVIÇOS",
      title: "SOLUÇÕES DIGITAIS 360º",
      sub: "Eliminamos a complexidade técnica e entregamos ecossistemas digitais robustos, pensados para gerar autoridade e vendas.",
      cards: [
        {
          icon: Code2,
          tag: "Core Engineering",
          title: "Desenvolvimento Web & React / Next.js",
          desc: "Websites e plataformas com tempo de carregamento abaixo de 1 segundo, código limpo, arquitetura modular e pontuação máxima em motores de busca.",
          bullets: ["Single Page Applications ultrarrápidas", "Arquitetura Cloud & Serverless", "Otimização SEO Técnica 100/100"]
        },
        {
          icon: Layers,
          tag: "Bespoke Branding",
          title: "Sistemas UI/UX & Identidade de Marca",
          desc: "Criamos identidades visuais memoráveis e interfaces sofisticadas que posicionam a sua marca no topo do seu setor.",
          bullets: ["Design Systems escaláveis e elegantes", "Prototipagem interativa e física de micro-interações", "Brand Guidelines e ativos digitais completos"]
        },
        {
          icon: Zap,
          tag: "High Conversion",
          title: "E-Commerce & Catálogos Interativos",
          desc: "Experiências de compra e catálogo pensadas ao detalhe para converter visitantes em clientes fiéis.",
          bullets: ["Integrações de pagamento seguras (MBWay, Stripe)", "Gestão de catálogo simplificada", "Simuladores de orçamento e aluguer"]
        },
        {
          icon: ShieldCheck,
          tag: "Security & Legal",
          title: "Conformidade RGPD & Infraestrutura Segura",
          desc: "Garantimos segurança de nível bancário, encriptação SSL e conformidade total com a legislação europeia e nacional.",
          bullets: ["Políticas de Cookies e RGPD aprovadas", "Proteção contra ataques DDoS e backups regulares", "Alojamento em servidores cloud de alta velocidade"]
        }
      ]
    },
    portfolio: {
      tag: "O ARQUIVO DE TRABALHOS",
      title: "PROJETOS REAIS EM PRODUÇÃO",
      sub: "Uma seleção de plataformas digitais arquitetadas e lançadas pela P&D Agency para os nossos clientes.",
      filters: ["Todos", "Stands & Mobilidade", "Criativos & Marcas", "Agronegócio & Serviços"],
      items: [
        {
          id: "route109",
          title: "ROUTE N109 MOBILIDADE",
          category: "Stands & Mobilidade",
          label: "Stand de Motos e Scooters Elétricas",
          desc: "Plataforma digital e catálogo interativo para stand de mobilidade elétrica na Guia, Pombal, com simulador e marcação de revisões.",
          img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85",
          url: "https://www.routen109mobilidade.com/",
          tech: ["React", "Vite", "Tailwind CSS", "SEO Pro", "RGPD"],
          live: true
        },
        {
          id: "iara",
          title: "IARA BENTO",
          category: "Criativos & Marcas",
          label: "Social Media Manager & Branding",
          desc: "Website com estética champanhe luxuosa, estimador de propostas em tempo real e vitrine editorial para gestão de redes sociais.",
          img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
          url: "https://iara-bento.vercel.app/",
          tech: ["React", "Bilingual PT/EN", "Framer Motion", "Tailwind"],
          live: true
        },
        {
          id: "agostinho",
          title: "AGOSTINHO BIKES",
          category: "Stands & Mobilidade",
          label: "Stand & Oficina de Bicicletas",
          desc: "Website e catálogo digital completo com simulador de aluguer, agendamento de oficina e catálogo de bicicletas elétricas e de estrada.",
          img: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1200&q=85",
          url: "https://agostinho-blond.vercel.app/",
          tech: ["React", "Rental Simulator", "SEO Multi-Region", "Vite"],
          live: true
        },
        {
          id: "heliplanta",
          title: "HELIPLANTA VIVEIROS",
          category: "Agronegócio & Serviços",
          label: "Viveiros Hortícolas & Ornamentais",
          desc: "Plataforma profissional para viveiros hortícolas na Mata Mourisca, com catálogo botânico detalhado e apresentação institucional.",
          img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85",
          url: "https://heliplanta-beryl.vercel.app/",
          tech: ["React", "Cloud Showcase", "Responsive Design"],
          live: true
        },
        {
          id: "mariajoao",
          title: "MARIA JOÃO",
          category: "Criativos & Marcas",
          label: "Portfólio Pessoal & Showcase",
          desc: "Showcase pessoal e editorial para apresentação de trabalhos criativos com estética limpa e foco em tipografia.",
          img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85",
          url: "https://maria-joao-portfolio.vercel.app/",
          tech: ["React", "Editorial UI", "Fast Loading"],
          live: true
        },
        {
          id: "takos",
          title: "TAKOS KING",
          category: "Agronegócio & Serviços",
          label: "Fast-Food Tacos Gourmet",
          desc: "Plataforma de restauração rápida focada em tacos gourmet, com menu interativo e localização em Pombal, Guia.",
          img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=85",
          url: "https://takos-king.vercel.app/",
          tech: ["React", "Interactive Menu", "Speed Optimized"],
          live: true
        }
      ]
    },
    process: {
      tag: "O NOSSO MÉTODO",
      title: "COMO TRANSFORMAMOS O SEU PROJETO",
      sub: "Um processo linear, transparente e rigoroso do primeiro contacto até ao lançamento em produção.",
      steps: [
        {
          num: "01",
          title: "Descoberta & Arquitetura",
          desc: "Mapeamos os objetivos do seu negócio, identificamos a sua audiência e desenhamos a estrutura técnica ideal sem suposições."
        },
        {
          num: "02",
          title: "Design UI/UX Sob Medida",
          desc: "Criamos protótipos visuais únicos de alta fidelidade. Nada de temas pré-fabricados — cada detalhe é desenhado para a sua marca."
        },
        {
          num: "03",
          title: "Engenharia & Performance",
          desc: "Desenvolvemos o código em React e frameworks modernas, assegurando tempos de carregamento instantâneos e pontuação 100/100 em SEO."
        },
        {
          num: "04",
          title: "Lançamento & Garantia",
          desc: "Colocamos o seu website em produção na cloud com certificado SSL, conformidade RGPD e acompanhamento contínuo."
        }
      ]
    },
    testimonials: {
      tag: "PROVA SOCIAL",
      title: "O QUE DIZEM QUEM TRABALHA CONNOSCO",
      items: [
        {
          quote: "A P&D Agency soube exatamente como posicionar a Route N109 online. O catálogo é super rápido, os clientes elogiam a facilidade de navegação e as conversões aumentaram significativamente.",
          author: "Equipa Route N109 Mobilidade",
          role: "Direção & Stand",
          brand: "Guia, Pombal"
        },
        {
          quote: "Excelente acompanhamento e profissionalismo. Criaram o website e catálogo digital da Agostinho Bikes com enorme atenção ao detalhe e rapidez de resposta exemplar.",
          author: "Equipa Agostinho BIKES",
          role: "Gestão Comercial",
          brand: "Stand de Bicicletas"
        },
        {
          quote: "Desde a imagem da marca até à estrutura da plataforma web, o trabalho foi impecável. Ter uma equipa tão dedicada faz toda a diferença.",
          author: "Equipa Heliplanta",
          role: "Administração",
          brand: "Viveiros Hortícolas"
        }
      ]
    },
    cta: {
      tag: "VAMOS CONVERSAR?",
      title: "PRONTO PARA CONSTRUIR O FUTURO DA SUA MARCA?",
      sub: "Agende uma sessão estratégica de 15 minutos ou envie os detalhes do seu projeto para receber uma proposta à medida.",
      btnWhatsapp: "FALAR NO WHATSAPP",
      btnEmail: "ENVIAR EMAIL"
    },
    footer: {
      about: "P&D Agency — Agência Digital & Engenharia de Software. Arquitetamos presenças digitais que dominam mercados.",
      rights: "© 2026 P&D AGENCY. TODOS OS DIREITOS RESERVADOS.",
      links: {
        terms: "Termos de Serviço",
        privacy: "Política de Privacidade",
        cookies: "Política de Cookies",
        complaints: "Livro de Reclamações"
      }
    }
  },
  en: {
    nav: {
      solutions: "Solutions",
      portfolio: "The Archive",
      process: "Methodology",
      estimator: "Estimator",
      testimonials: "Testimonials",
      contact: "Contact",
      cta: "START A PROJECT"
    },
    hero: {
      statusBadge: "AVAILABLE FOR NEW PROJECTS • Q3/Q4 2026",
      titlePre: "SOFTWARE ENGINEERING",
      titleAccent: "& DIGITAL DESIGN",
      titlePost: "AT SCALE",
      subtitle: "We architect high-performance web platforms, bespoke systems, and unforgettable brand identities that position businesses as undisputed industry leaders.",
      btnEstimate: "ESTIMATE PROJECT",
      btnPortfolio: "EXPLORE ARCHIVE",
      metrics: [
        { label: "Years of Engineering", value: "5+" },
        { label: "Core Web Vitals Score", value: "100/100" },
        { label: "Average Turnaround", value: "7-21 Days" },
        { label: "100% Bespoke Code", value: "No Templates" }
      ],
      tickerTitle: "TRUSTED BY AMBITIOUS BUSINESSES & BRANDS"
    },
    solutions: {
      tag: "CAPABILITIES & STACK",
      title: "360º DIGITAL SOLUTIONS",
      sub: "We eliminate technical friction and build robust digital ecosystems engineered for undeniable authority and revenue growth.",
      cards: [
        {
          icon: Code2,
          tag: "Core Engineering",
          title: "Web Engineering & React / Next.js",
          desc: "Sub-second load times, clean code, modular architecture, and top-tier search engine optimization.",
          bullets: ["Lightning-fast Single Page Apps", "Cloud & Serverless Infrastructure", "100/100 Technical SEO Standards"]
        },
        {
          icon: Layers,
          tag: "Bespoke Branding",
          title: "UI/UX Systems & Brand Identity",
          desc: "Authoritative visual identities and polished user interfaces crafted to elevate your market standing.",
          bullets: ["Scalable design systems & tokens", "Fluid spring physics & tactile micro-interactions", "Complete brand assets and guidelines"]
        },
        {
          icon: Zap,
          tag: "High Conversion",
          title: "E-Commerce & Interactive Catalogs",
          desc: "Frictionless shopping experiences engineered to convert qualified visitors into loyal customers.",
          bullets: ["Secure checkout integrations (MBWay, Stripe)", "Intuitive catalog management", "Dynamic pricing and quote calculators"]
        },
        {
          icon: ShieldCheck,
          tag: "Security & Legal",
          title: "GDPR Compliance & Hardened Cloud",
          desc: "Enterprise-grade SSL encryption, cloud resilience, and full compliance with European privacy frameworks.",
          bullets: ["GDPR & Cookie Policy certified", "DDoS mitigation & automated backups", "High-availability global cloud CDN"]
        }
      ]
    },
    portfolio: {
      tag: "THE ARCHIVE",
      title: "LIVE CLIENT PLATFORMS",
      sub: "A curated collection of web platforms engineered and deployed by P&D Agency.",
      filters: ["All", "Mobility & Showrooms", "Creatives & Brands", "Agri & Services"],
      items: [
        {
          id: "route109",
          title: "ROUTE N109 MOBILITY",
          category: "Mobility & Showrooms",
          label: "Electric Motorcycle Showroom & Repair",
          desc: "High-conversion web platform and interactive catalog for electric mobility dealership in Guia, Pombal.",
          img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85",
          url: "https://www.routen109mobilidade.com/",
          tech: ["React", "Vite", "Tailwind CSS", "SEO Pro", "GDPR"],
          live: true
        },
        {
          id: "iara",
          title: "IARA BENTO",
          category: "Creatives & Brands",
          label: "Social Media Manager & Branding",
          desc: "Warm luxury champagne aesthetic, dynamic proposal estimator, and editorial showcase for social media management.",
          img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
          url: "https://iara-bento.vercel.app/",
          tech: ["React", "Bilingual PT/EN", "Framer Motion", "Tailwind"],
          live: true
        },
        {
          id: "agostinho",
          title: "AGOSTINHO BIKES",
          category: "Mobility & Showrooms",
          label: "Bicycle Showroom & Workshop",
          desc: "Digital catalog platform with rental simulator, workshop booking, and multi-category showroom.",
          img: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1200&q=85",
          url: "https://agostinho-blond.vercel.app/",
          tech: ["React", "Rental Simulator", "SEO Multi-Region", "Vite"],
          live: true
        },
        {
          id: "heliplanta",
          title: "HELIPLANTA NURSERIES",
          category: "Agri & Services",
          label: "Horticultural & Ornamental Nurseries",
          desc: "Professional platform for wholesale plant nurseries in Mata Mourisca, featuring detailed botanical catalogs.",
          img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85",
          url: "https://heliplanta-beryl.vercel.app/",
          tech: ["React", "Cloud Showcase", "Responsive Design"],
          live: true
        },
        {
          id: "mariajoao",
          title: "MARIA JOÃO",
          category: "Creatives & Brands",
          label: "Creative Portfolio & Showcase",
          desc: "Personal editorial showcase for creative work presentation with clean layout and typography focus.",
          img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85",
          url: "https://maria-joao-portfolio.vercel.app/",
          tech: ["React", "Editorial UI", "Fast Loading"],
          live: true
        },
        {
          id: "takos",
          title: "TAKOS KING",
          category: "Agri & Services",
          label: "Gourmet Tacos Fast Casual",
          desc: "Fast casual restaurant web platform for gourmet tacos with interactive menu in Guia, Pombal.",
          img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=85",
          url: "https://takos-king.vercel.app/",
          tech: ["React", "Interactive Menu", "Speed Optimized"],
          live: true
        }
      ]
    },
    process: {
      tag: "THE METHOD",
      title: "HOW WE SHIP EXCELLENCE",
      sub: "A linear, transparent, and rigorous process from initial consultation to cloud deployment.",
      steps: [
        {
          num: "01",
          title: "Discovery & Architecture",
          desc: "We analyze your business metrics, target audience, and engineer the precise architectural roadmap."
        },
        {
          num: "02",
          title: "Custom UI/UX Design",
          desc: "We design high-fidelity, bespoke interfaces. No generic templates — every pixel is custom-built."
        },
        {
          num: "03",
          title: "Engineering & Speed",
          desc: "We build with React, modern toolchains, and optimized bundling for sub-second load times."
        },
        {
          num: "04",
          title: "Deployment & Scale",
          desc: "We deploy on resilient cloud networks with SSL encryption, GDPR compliance, and active support."
        }
      ]
    },
    testimonials: {
      tag: "PROOF & REPUTATION",
      title: "WHAT OUR CLIENTS SAY",
      items: [
        {
          quote: "P&D Agency knew exactly how to position Route N109 online. The digital catalog is blazingly fast, customers love the UX, and our conversion rate skyrocketed.",
          author: "Route N109 Mobility Team",
          role: "Showroom Management",
          brand: "Guia, Pombal"
        },
        {
          quote: "Outstanding partnership and execution. They delivered the Agostinho Bikes digital platform with rigorous attention to detail and rapid communication.",
          author: "Agostinho BIKES Team",
          role: "Commercial Management",
          brand: "Bicycle Showroom"
        },
        {
          quote: "From visual branding to the web application infrastructure, their work was truly world-class. Having such a dedicated team made all the difference.",
          author: "Heliplanta Team",
          role: "Management",
          brand: "Plant Nurseries"
        }
      ]
    },
    cta: {
      tag: "LET'S TALK",
      title: "READY TO BUILD SOMETHING EXTRAORDINARY?",
      sub: "Book a 15-minute strategic consultation or send your project specifications to receive a tailored proposal.",
      btnWhatsapp: "TALK ON WHATSAPP",
      btnEmail: "SEND EMAIL"
    },
    footer: {
      about: "P&D Agency — Digital Agency & Software Engineering. We architect market-dominating digital platforms.",
      rights: "© 2026 P&D AGENCY. ALL RIGHTS RESERVED.",
      links: {
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy",
        complaints: "Complaints Book"
      }
    }
  }
};

export default function LandingPage() {
  const [lang, setLang] = useState("pt");
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [scrolled, setScrolled] = useState(false);

  const t = content[lang];
  const isPt = lang === "pt";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredPortfolio = activeFilter === "Todos" || activeFilter === "All"
    ? t.portfolio.items
    : t.portfolio.items.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#06080F] text-neutral-100 font-sans antialiased selection:bg-blue-600 selection:text-white relative bg-grid-pattern overflow-hidden">
      
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-radial-gradient pointer-events-none" />

      {/* ── HEADER / NAVBAR ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header border-b border-white/10 py-4 shadow-2xl" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-sm tracking-widest shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
              P&D
            </div>
            <div className="flex flex-col text-left">
              <span className="font-headline font-black text-base uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
                P&D Agency
              </span>
              <span className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase">
                Digital & Software
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-neutral-400">
            <a href="#solucoes" className="hover:text-white transition-colors">{t.nav.solutions}</a>
            <a href="#portfolio" className="hover:text-white transition-colors">{t.nav.portfolio}</a>
            <a href="#processo" className="hover:text-white transition-colors">{t.nav.process}</a>
            <a href="#estimador" className="hover:text-white transition-colors">{t.nav.estimator}</a>
            <a href="#testemunhos" className="hover:text-white transition-colors">{t.nav.testimonials}</a>
          </nav>

          {/* Right Controls: Lang Switcher & CTA */}
          <div className="flex items-center gap-4">
            
            {/* Bilingual Toggle */}
            <div className="flex items-center bg-black/40 border border-white/10 rounded-full p-1 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLang("pt")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  lang === "pt" ? "bg-blue-600 text-white shadow-sm" : "text-neutral-400 hover:text-white"
                }`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  lang === "en" ? "bg-blue-600 text-white shadow-sm" : "text-neutral-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Quick Action Button */}
            <a
              href="#estimador"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 hidden sm:inline-flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.cta}</span>
            </a>
          </div>

        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-36 sm:pt-44 pb-24 md:pb-32 px-6 sm:px-8 text-center max-w-6xl mx-auto">
        
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-blue-500/10 border border-blue-500/25 px-4 py-2 rounded-full mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-300">
            {t.hero.statusBadge}
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[1.02] mb-8 max-w-5xl mx-auto"
        >
          <span>{t.hero.titlePre}</span> <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
            {t.hero.titleAccent}
          </span> <br className="hidden sm:inline" />
          <span>{t.hero.titlePost}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-neutral-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-12"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#estimador"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-headline font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>{t.hero.btnEstimate}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-headline font-bold text-xs uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>{t.hero.btnPortfolio}</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400" />
          </a>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16 text-left"
        >
          {t.hero.metrics.map((m, idx) => (
            <div key={idx} className="bg-[#0B0F19]/80 border border-white/8 rounded-2xl p-5 backdrop-blur-xl">
              <span className="font-headline font-black text-2xl sm:text-3xl text-blue-400 block mb-1">
                {m.value}
              </span>
              <span className="text-xs text-neutral-400 font-medium">
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Client Brands Continuous Ticker */}
        <div className="pt-6 border-t border-white/8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">
            {t.hero.tickerTitle}
          </p>
          <div className="w-full overflow-hidden relative py-2">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex items-center gap-12 whitespace-nowrap w-max opacity-80 text-xs font-bold uppercase tracking-widest text-neutral-300"
            >
              {[
                "Route N109 Mobilidade",
                "Agostinho BIKES",
                "Iara Bento",
                "Heliplanta Viveiros",
                "Maria João Creative",
                "Takos King Pombal",
                "Route N109 Mobilidade",
                "Agostinho BIKES",
                "Iara Bento",
                "Heliplanta Viveiros",
                "Maria João Creative",
                "Takos King Pombal",
              ].map((brand, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{brand}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </section>

      {/* ── SECTION: 360º SOLUTIONS / BENTO GRID ── */}
      <section id="solucoes" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto text-left relative">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Cpu className="w-4 h-4" />
            <span>{t.solutions.tag}</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            {t.solutions.title}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            {t.solutions.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.solutions.cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <SpotlightCard key={i} className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/8 space-y-2.5">
                  {card.bullets.map((b, bi) => (
                    <div key={bi} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      {/* ── SECTION: THE ARCHIVE / PORTFOLIO SHOWCASE ── */}
      <section id="portfolio" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto text-left relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-4 h-4" />
              <span>{t.portfolio.tag}</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
              {t.portfolio.title}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl">
              {t.portfolio.sub}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {t.portfolio.filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  activeFilter === filter
                    ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/20"
                    : "bg-black/40 border-white/10 text-neutral-400 hover:text-white hover:border-white/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPortfolio.map((item, index) => (
              <motion.a
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0B0F19] border border-white/8 hover:border-blue-500/40 rounded-3xl overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Image Cover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-90" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Platform</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-2">
                      {item.label}
                    </div>
                    <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-2 mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/8">
                    {item.tech.map((tItem, ti) => (
                      <span key={ti} className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-white/5 text-neutral-300 border border-white/5">
                        {tItem}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── SECTION: PROCESS / METHODOLOGY ── */}
      <section id="processo" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto text-left relative">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Terminal className="w-4 h-4" />
            <span>{t.process.tag}</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            {t.process.title}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            {t.process.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.steps.map((step, idx) => (
            <SpotlightCard key={idx} className="p-8 flex flex-col justify-between">
              <div>
                <span className="font-headline text-4xl font-black text-blue-400/40 block mb-6">
                  {step.num}
                </span>
                <h3 className="font-headline text-lg font-bold uppercase tracking-tight text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* ── SECTION: ESTIMATOR & CALCULATOR ── */}
      <section id="estimador" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto relative">
        <AgencyCalculator lang={lang} />
      </section>

      {/* ── SECTION: TESTIMONIALS ── */}
      <section id="testemunhos" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto text-left relative">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-4 h-4" />
            <span>{t.testimonials.tag}</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testi, idx) => (
            <div key={idx} className="bg-[#0B0F19]/80 border border-white/8 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed italic mb-8">
                  "{testi.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/8">
                <h4 className="font-headline font-bold text-sm uppercase tracking-tight text-white">
                  {testi.author}
                </h4>
                <p className="text-xs text-blue-400 mt-0.5">
                  {testi.role} • {testi.brand}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION: FINAL CTA ── */}
      <section id="contacto" className="py-24 px-6 sm:px-8 max-w-5xl mx-auto text-center relative">
        <div className="bg-gradient-to-b from-blue-900/20 via-[#0B0F19] to-[#0B0F19] border border-blue-500/30 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Flame className="w-4 h-4" />
            <span>{t.cta.tag}</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            {t.cta.title}
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto mb-10">
            {t.cta.sub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=351913904586&text=Ol%C3%A1%20P%26D%20Agency!%20Gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-headline font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.cta.btnWhatsapp}</span>
            </a>

            <a
              href="mailto:pd.agency.digital01@gmail.com?subject=Contacto%20P%26D%20Agency"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-headline font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>{t.cta.btnEmail}</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── FOOTER WITH LEGAL LINKS & LIVRO DE RECLAMAÇÕES ── */}
      <footer className="border-t border-white/10 bg-[#04060A] py-16 px-6 sm:px-8 text-left relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            {/* Col 1: Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-xs tracking-wider">
                  P&D
                </div>
                <span className="font-headline font-bold text-lg uppercase tracking-tight text-white">
                  P&D Agency
                </span>
              </div>
              <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-md leading-relaxed mb-4">
                {t.footer.about}
              </p>
              <div className="text-xs text-neutral-400 font-mono">
                Direct: <a href="mailto:pd.agency.digital01@gmail.com" className="text-blue-400 hover:underline">pd.agency.digital01@gmail.com</a>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-white mb-4">
                {isPt ? "Navegação" : "Navigation"}
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                <li><a href="#solucoes" className="hover:text-white transition-colors">{t.nav.solutions}</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">{t.nav.portfolio}</a></li>
                <li><a href="#processo" className="hover:text-white transition-colors">{t.nav.process}</a></li>
                <li><a href="#estimador" className="hover:text-white transition-colors">{t.nav.estimator}</a></li>
              </ul>
            </div>

            {/* Col 3: Legal & Compliance */}
            <div>
              <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-white mb-4">
                {isPt ? "Legal & RGPD" : "Legal & GDPR"}
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                <li>
                  <Link to="/termos-servico" className="hover:text-blue-400 transition-colors">
                    {t.footer.links.terms}
                  </Link>
                </li>
                <li>
                  <Link to="/politica-privacidade" className="hover:text-blue-400 transition-colors">
                    {t.footer.links.privacy}
                  </Link>
                </li>
                <li>
                  <Link to="/politica-cookies" className="hover:text-blue-400 transition-colors">
                    {t.footer.links.cookies}
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://www.livroreclamacoes.pt/Inicio/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    <span>{t.footer.links.complaints}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-medium">
            <p>{t.footer.rights}</p>
            <p className="text-neutral-400 font-mono">
              Engineered with React 18, Vite & Tailwind CSS
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
