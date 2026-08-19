import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import ContactModal from '../components/ContactModal';
import LegalModal from '../components/LegalModal';
import CustomCursor from '../components/CustomCursor';
import InstagramMockupCard from '../components/InstagramMockupCard';
import BudgetCalculatorSection from '../components/BudgetCalculatorSection';

// ── DICIONÁRIO BILINGUE (DEFAULT PT) ──
const translations = {
  pt: {
    nav: {
      home: "Início",
      approach: "Abordagem",
      services: "Serviços",
      estimator: "Proposta",
      portfolio: "Portfólio",
      testimonials: "Testemunhos"
    },
    cta: "VAMOS CONSTRUIR",
    preloader: "AGÊNCIA DIGITAL & COMUNICAÇÃO",
    hero: {
      badge: "BEM-VINDO À P&D AGENCY",
      headline1: "AGÊNCIA DIGITAL",
      headline2: "E COMUNICAÇÃO",
      headline3: "PERSONALIZADA",
      copyBold: "A sua marca é única e merece uma comunicação totalmente feita à medida.",
      copySub: "Na P&D Agency, tratamos o seu projeto com a diferenciação de que ele precisa.",
      copyPartner: "Somos a sua agência de tecnologia e marketing, somos um parceiro de negócio.",
      btnPrimary: "INICIAR O SEU PROJETO",
      btnSecondary: "SABER MAIS"
    },
    about: {
      tag: "SOBRE A P&D AGENCY",
      title1: "AGÊNCIA DIGITAL",
      title2: "PERSONALIZADA",
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
      card1_li1: "Arquitetura Web & React/Next.js",
      card1_li2: "Alta Carga & Otimização Cloud",
      card1_li3: "SEO Avançado & Core Web Vitals",
      card2_title: "IDENTIDADE DE MARCA & BRANDING",
      card2_desc: "Criamos identidades visuais de autoridade que posicionam a sua empresa como líder indiscutível no seu mercado.",
      card2_li1: "Design de Marca & Sistemas UI/UX",
      card2_li2: "Redes Sociais & Estratégia de Conteúdo",
      card2_li3: "Campanhas de Desempenho & Anúncios",
      btnMore: "SABER MAIS"
    },
    stats: {
      s1_val: "5+", s1_lab: "Anos de Experiência em Engenharia",
      s2_val: "4+", s2_lab: "Mais de 4 Projetos Entregues",
      s3_val: "4-21 Dias", s3_lab: "Tempo de Entrega Típico",
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
      title: "EMPRESAS COM QUEM JÁ TRABALHAMOS"
    },
    ctaMeeting: {
      title1: "TEM INTERESSE?",
      title2: "VAMOS MARCAR UMA REUNIÃO.",
      sub: "Agendamos uma conversa de 30 minutos, sem compromisso, para perceber o que a sua empresa necessita.",
      btn: "AGENDAR REUNIÃO"
    },
    footer: {
      sub: "Agência Digital & Comunicação Personalizada. Arquitetando o futuro da presença digital.",
      navTitle: "NAVEGAÇÃO",
      socialTitle: "REDES SOCIAIS",
      rights: "© 2026 P&D AGENCY. TODOS OS DIREITOS RESERVADOS.",
      terms: "TERMOS DE USO",
      privacy: "POLÍTICA DE PRIVACIDADE"
    }
  },
  en: {
    nav: {
      home: "Home",
      approach: "Approach",
      services: "Services",
      estimator: "Proposal",
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
      card1_li1: "Web Architecture & React/Next.js",
      card1_li2: "High Load & Cloud Optimization",
      card1_li3: "Advanced SEO & Core Web Vitals",
      card2_title: "BRAND IDENTITY & BRANDING",
      card2_desc: "We design authoritative brand identities and UI/UX systems that position your business as the undisputed industry leader.",
      card2_li1: "Brand Design & UI/UX Systems",
      card2_li2: "Social Media & Content Strategy",
      card2_li3: "Performance Marketing & Ads",
      btnMore: "LEARN MORE"
    },
    stats: {
      s1_val: "5+", s1_lab: "Years of Engineering Expertise",
      s2_val: "4+", s2_lab: "More than 4 Projects Delivered",
      s3_val: "4-21 Days", s3_lab: "Typical Project Turnaround",
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
      title: "COMPANIES WE HAVE WORKED WITH"
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
  },
  es: {
    nav: {
      home: "Inicio",
      approach: "Enfoque",
      services: "Servicios",
      estimator: "Propuesta",
      portfolio: "Portafolio",
      testimonials: "Testimonios"
    },
    cta: "CONSTRUYAMOS",
    preloader: "AGENCIA DIGITAL & COMUNICACIÓN",
    hero: {
      badge: "BIENVENIDO A P&D AGENCY",
      headline1: "AGENCIA DIGITAL",
      headline2: "Y COMUNICACIÓN",
      headline3: "PERSONALIZADA",
      copyBold: "Tu marca es única y merece una comunicación totalmente a medida.",
      copySub: "En P&D Agency, tratamos tu proyecto con la diferenciación y la ingeniería de excelencia que requiere.",
      copyPartner: "Somos tu equipo de tecnología y marketing, tu socio comercial estratégico.",
      btnPrimary: "INICIAR TU PROYECTO",
      btnSecondary: "SABER MÁS"
    },
    about: {
      tag: "SOBRE P&D AGENCY",
      title1: "AGENCIA DIGITAL",
      title2: "A MEDIDA",
      p1_num: "01",
      p1_title: "UN ENFOQUE PERSONALIZADO",
      p1_desc: "Somos una agencia boutique full-service. Desarrollamos tu proyecto de tecnología y comunicación desde el concepto estratégico hasta la ejecución práctica.",
      p2_num: "02",
      p2_title: "DESARROLLO Y MARKETING SIN LÍMITES",
      p2_desc: "El éxito digital exige constancia. Nuestra ingeniería y consultoría no tienen límites en actualizaciones o características a desarrollar.",
      p3_num: "03",
      p3_title: "UN SOCIO COMERCIAL",
      p3_desc: "Más que una agencia digital, somos un socio estratégico dedicado a poner el desarrollo de software y el diseño al servicio de tus ventas.",
      p4_num: "04",
      p4_title: "UN EQUIPO DEDICADO",
      p4_desc: "Tu proyecto es nuestra prioridad. Trabajarás directamente con un equipo multidisciplinar: Ingeniero de Software, Diseñador UX/UI y Director Creativo.",
      quote: '"Creamos estrategias 100% personalizadas e implementamos todo lo necesario para alcanzar tus objetivos sin límites de plataformas."'
    },
    services: {
      tag: "SOLUCIONES 360º",
      title1: "LO QUE",
      title2: "HACEMOS",
      desc: "En P&D Agency ofrecemos una gama completa de ingeniería de software, desarrollo web e identidad digital para posicionar tu marca en el mercado.",
      card1_title: "INGENIERÍA WEB Y APLICACIONES",
      card1_desc: "Desarrollamos plataformas web 360º all-inclusive que eliminan el esfuerzo técnico y entregan un alto rendimiento.",
      card1_li1: "Arquitectura Web y React/Next.js",
      card1_li2: "Alta Carga y Optimización Cloud",
      card1_li3: "SEO Avanzado y Core Web Vitals",
      card2_title: "IDENTIDAD DE MARCA Y BRANDING",
      card2_desc: "Diseñamos identidades visuales de autoridad y sistemas UI/UX que posicionan a tu empresa como líder del sector.",
      card2_li1: "Diseño de Marca y Sistemas UI/UX",
      card2_li2: "Redes Sociales y Estrategia de Contenido",
      card2_li3: "Marketing de Rendimiento y Anuncios",
      btnMore: "SABER MÁS"
    },
    stats: {
      s1_val: "5+", s1_lab: "Años de Experiencia en Ingeniería",
      s2_val: "4+", s2_lab: "Más de 4 Proyectos Entregados",
      s3_val: "4-21 Días", s3_lab: "Tiempo de Entrega Típico",
      s4_val: "24/7", s4_lab: "Monitoreo Activo de Sistemas"
    },
    portfolio: {
      tag: "TRABAJOS SELECCIONADOS",
      title: "EL ARCHIVO",
      sub: "Ejemplos reales de nuestro trabajo — sitios web en vivo y en desarrollo para nuestros clientes.",
      live: "En Vivo",
      progress: "En Progreso"
    },
    testimonials: {
      tag: "EVALUACIONES Y TESTIMONIOS",
      title: "LO QUE DICEN NUESTROS CLIENTES"
    },
    brands: {
      tag: "CONFIANZA Y ALIANZAS",
      title: "EMPRESAS CON LAS QUE TRABAJAMOS"
    },
    ctaMeeting: {
      title1: "¿INTERESADO?",
      title2: "REUNÁMONOS.",
      sub: "Agenda una consulta estratégica de 30 minutos sin compromiso para analizar los objetivos de tu empresa.",
      btn: "AGENDAR REUNIÓN"
    },
    footer: {
      sub: "Agencia Digital y Comunicación Personalizada. Arquitectando el futuro de la presencia digital.",
      navTitle: "NAVEGACIÓN",
      socialTitle: "REDES SOCIALES",
      rights: "© 2026 P&D AGENCY. TODOS LOS DERECHOS RESERVADOS.",
      terms: "TÉRMINOS DE USO",
      privacy: "POLÍTICA DE PRIVACIDAD"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      approach: "Approche",
      services: "Services",
      estimator: "Proposition",
      portfolio: "Portfolio",
      testimonials: "Témoignages"
    },
    cta: "CONSTRUISONS",
    preloader: "AGENCE DIGITALE SUR MESURE",
    hero: {
      badge: "BIENVENUE CHEZ P&D AGENCY",
      headline1: "AGENCE DIGITALE",
      headline2: "ET COMMUNICATION",
      headline3: "SUR MESURE",
      copyBold: "Votre marque est unique et mérite une communication parfaitement personnalisée.",
      copySub: "Chez P&D Agency, nous traitons votre projet avec le niveau de différenciation et l'excellence technique qu'il exige.",
      copyPartner: "Nous sommes votre équipe de technologie et de marketing, votre partenaire d'affaires stratégique.",
      btnPrimary: "LANCER VOTRE PROJET",
      btnSecondary: "EN SAVOIR PLUS"
    },
    about: {
      tag: "À PROPOS DE P&D AGENCY",
      title1: "AGENCE DIGITALE",
      title2: "SUR MESURE",
      p1_num: "01",
      p1_title: "UNE APPROCHE PERSONNALISÉE",
      p1_desc: "Agence boutique full-service, nous développons votre projet technologique et de communication du concept stratégique à la réalisation concrète.",
      p2_num: "02",
      p2_title: "DÉVELOPPEMENT & MARKETING SANS LIMITES",
      p2_desc: "Le succès digital exige de la constance. Notre ingénierie et notre conseil n'ont aucune limite sur le nombre de mises à jour ou de fonctionnalités.",
      p3_num: "03",
      p3_title: "UN PARTENAIRE D'AFFAIRES",
      p3_desc: "Plus qu'une agence digitale, nous sommes un partenaire stratégique dédié à mettre le développement logiciel et le design au service de vos ventes.",
      p4_num: "04",
      p4_title: "UNE ÉQUIPE DÉDIÉE",
      p4_desc: "Votre projet est notre priorité absolue. Vous collaborerez directement avec une équipe pluridisciplinaire : Ingénieur Logiciel, Designer UX/UI et Directeur Créatif.",
      quote: '"Nous concevons des stratégies 100% sur mesure et mettons en œuvre tout le nécessaire pour atteindre vos objectifs sans limites de plateforme."'
    },
    services: {
      tag: "SOLUTIONS 360º",
      title1: "CE QUE NOUS",
      title2: "FAISONS",
      desc: "Chez P&D Agency, nous offrons une gamme complète de services en ingénierie logicielle, développement web et identité numérique pour faire rayonner votre marque.",
      card1_title: "INGÉNIERIE WEB & APPLICATIONS",
      card1_desc: "Nous développons des plateformes web 360º all-inclusive qui éliminent la complexité technique et garantissent une haute performance.",
      card1_li1: "Architecture Web & React/Next.js",
      card1_li2: "Haute Charge & Optimisation Cloud",
      card1_li3: "SEO Avancé & Core Web Vitals",
      card2_title: "IDENTITÉ DE MARQUE & BRANDING",
      card2_desc: "Nous créons des identités visuelles fortes et des systèmes UI/UX qui positionnent votre entreprise comme leader incontesté sur votre marché.",
      card2_li1: "Design de Marque & Systèmes UI/UX",
      card2_li2: "Réseaux Sociaux & Stratégie de Contenu",
      card2_li3: "Marketing de Performance & Publicité",
      btnMore: "EN SAVOIR PLUS"
    },
    stats: {
      s1_val: "5+", s1_lab: "Années d'Expérience en Ingénierie",
      s2_val: "4+", s2_lab: "Plus de 4 Projets Livrés",
      s3_val: "4-21 Jours", s3_lab: "Délai de Livraison Type",
      s4_val: "24/7", s4_lab: "Surveillance Système Active"
    },
    portfolio: {
      tag: "PROJETS SÉLECTIONNÉS",
      title: "LES ARCHIVES",
      sub: "Exemples réels de nos réalisations — sites web en ligne et sur mesure développés pour nos clients.",
      live: "En Ligne",
      progress: "En Cours"
    },
    testimonials: {
      tag: "AVIS & TÉMOIGNAGES",
      title: "CE QUE DISENT NOS CLIENTS"
    },
    brands: {
      tag: "CONFIANCE & PARTENARIATS",
      title: "ENTREPRISES AVEC LESQUELLES NOUS TRAVAILLONS"
    },
    ctaMeeting: {
      title1: "INTÉRESSÉ ?",
      title2: "PRENONS RENDEZ-VOUS.",
      sub: "Réservez une consultation stratégique de 30 minutes sans engagement pour discuter de vos objectifs.",
      btn: "RÉSERVER UN RENDEZ-VOUS"
    },
    footer: {
      sub: "Agence Digitale & Communication Sur Mesure. Façonner l'avenir de votre présence web.",
      navTitle: "NAVIGATION",
      socialTitle: "RÉSEAUX SOCIAUX",
      rights: "© 2026 P&D AGENCY. TOUS DROITS RÉSERVÉS.",
      terms: "CONDITIONS D'UTILISATION",
      privacy: "POLITIQUE DE CONFIDENTIALITÉ"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      approach: "Ansatz",
      services: "Leistungen",
      estimator: "Angebot",
      portfolio: "Portfolio",
      testimonials: "Referenzen"
    },
    cta: "PROJEKT STARTEN",
    preloader: "INDIVIDUELLE DIGITALAGENTUR",
    hero: {
      badge: "WILLKOMMEN BEI P&D AGENCY",
      headline1: "INDIVIDUELLE",
      headline2: "DIGITAL- UND MEDIEN",
      headline3: "AGENTUR",
      copyBold: "Ihre Marke ist einzigartig und verdient eine maßgeschneiderte digitale Kommunikation.",
      copySub: "Bei P&D Agency betreuen wir Ihr Projekt mit der geforderten Differenzierung und exzellenter Technik.",
      copyPartner: "Wir sind Ihr Technologie- und Marketingteam — Ihr langfristiger Geschäftspartner.",
      btnPrimary: "PROJEKT JETZT STARTEN",
      btnSecondary: "MEHR ERFAHREN"
    },
    about: {
      tag: "ÜBER P&D AGENCY",
      title1: "INDIVIDUELLE",
      title2: "DIGITALAGENTUR",
      p1_num: "01",
      p1_title: "EIN MAßGESCHNEIDERTER ANSATZ",
      p1_desc: "Als Full-Service-Boutique-Agentur entwickeln wir Ihr Technologie- und Kommunikationsprojekt vom strategischen Konzept bis zur perfekten Umsetzung.",
      p2_num: "02",
      p2_title: "ENTWICKLUNG & MARKETING OHNE GRENZEN",
      p2_desc: "Digitaler Erfolg erfordert Kontinuität. Unsere Entwicklung und Beratung kennen keine Grenzen bei Updates oder Funktionserweiterungen.",
      p3_num: "03",
      p3_title: "EIN STARKER GESCHÄFTSPARTNER",
      p3_desc: "Mehr als eine Digitalagentur: Wir sind ein strategischer Partner, der Softwareentwicklung und Design gezielt in den Dienst Ihres Umsatzwachstums stellt.",
      p4_num: "04",
      p4_title: "EIN DEDIZIERTES TEAM",
      p4_desc: "Ihr Projekt hat für uns höchste Priorität. Sie arbeiten direkt mit einem multidisziplinären Team aus Software-Ingenieuren, UX/UI-Designern und Creative Directorn.",
      quote: '"Wir entwickeln 100% individuelle Strategien und setzen alles um, was nötig ist, um Ihre Ziele plattformübergreifend zu erreichen."'
    },
    services: {
      tag: "360º-LÖSUNGEN",
      title1: "WAS WIR",
      title2: "TUN",
      desc: "Bei P&D Agency bieten wir ein umfassendes Spektrum an Softwareentwicklung, Webdesign und digitaler Markenidentität, um Ihre Marke im Markt zu etablieren.",
      card1_title: "WEB-ENTWICKLUNG & APPS",
      card1_desc: "Wir entwickeln All-inclusive-Webplattformen, die technische Hürden beseitigen und dauerhaft höchste Performance liefern.",
      card1_li1: "Webarchitektur & React/Next.js",
      card1_li2: "High-Load & Cloud-Optimierung",
      card1_li3: "Erweitertes SEO & Core Web Vitals",
      card2_title: "MARKENIDENTITÄT & BRANDING",
      card2_desc: "Wir gestalten ausdrucksstarke Markenidentitäten und UI/UX-Systeme, die Ihr Unternehmen als Branchenführer positionieren.",
      card2_li1: "Markendesign & UI/UX-Systeme",
      card2_li2: "Social Media & Content-Strategie",
      card2_li3: "Performance Marketing & Ads",
      btnMore: "MEHR ERFAHREN"
    },
    stats: {
      s1_val: "5+", s1_lab: "Jahre Erfahrung in Softwareentwicklung",
      s2_val: "4+", s2_lab: "Über 4 Erfolgreich Gelieferte Projekte",
      s3_val: "4-21 Tage", s3_lab: "Typische Lieferzeit",
      s4_val: "24/7", s4_lab: "Aktive Systemüberwachung"
    },
    portfolio: {
      tag: "AUSGEWÄHLTE ARBEITEN",
      title: "DAS ARCHIV",
      sub: "Reale Einblicke in unsere Arbeiten — Live-Websites und Plattformen für Kunden und Eigenprojekte.",
      live: "Live",
      progress: "In Bearbeitung"
    },
    testimonials: {
      tag: "BEWERTUNGEN & REFERENZEN",
      title: "WAS UNSERE KUNDEN SAGEN"
    },
    brands: {
      tag: "VERTRAUEN & PARTNERSCHAFTEN",
      title: "UNSERE PARTNER UND KUNDEN"
    },
    ctaMeeting: {
      title1: "INTERESSIERT?",
      title2: "BERATUNGSGESPRÄCH VEREINBAREN.",
      sub: "Buchen Sie ein unverbindliches 30-minütiges Gespräch, um Ihre Unternehmensziele zu besprechen.",
      btn: "TERMIN VEREINBAREN"
    },
    footer: {
      sub: "Individuelle Digital- & Medienagentur. Wir gestalten die Zukunft Ihrer digitalen Präsenz.",
      navTitle: "NAVIGATION",
      socialTitle: "SOCIAL MEDIA",
      rights: "© 2026 P&D AGENCY. ALLE RECHTE VORBEHALTEN.",
      terms: "NUTZUNGSBEDINGUNGEN",
      privacy: "DATENSCHUTZERKLÄRUNG"
    }
  }
};

// ── COMPONENTES AUXILIARES ──

const MaterialIcon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true" data-icon={name}>
    {name}
  </span>
);

const FlagPT = ({ className = "w-4 h-3" }) => (
  <svg className={`${className} inline-block rounded-[2px] overflow-hidden shrink-0 shadow-xs`} viewBox="0 0 640 480">
    <path fill="#ff0000" d="M0 0h640v480H0z"/>
    <path fill="#006600" d="M0 0h256v480H0z"/>
    <g transform="translate(256 240) scale(1.1)">
      <circle r="70" fill="#ffcc00" stroke="#000" strokeWidth="4"/>
      <path fill="#ffffff" stroke="#000" strokeWidth="3" d="M-35-45h70v60a35 35 0 0 1-70 0z"/>
      <path fill="#ff0000" d="M-28-38h56v48a28 28 0 0 1-56 0z"/>
      <path fill="#ffffff" d="M-18-26h36v36a18 18 0 0 1-36 0z"/>
      <circle cx="0" cy="-8" r="3.5" fill="#00247d"/>
      <circle cx="-9" cy="-8" r="3.5" fill="#00247d"/>
      <circle cx="9" cy="-8" r="3.5" fill="#00247d"/>
      <circle cx="0" cy="-17" r="3.5" fill="#00247d"/>
      <circle cx="0" cy="1" r="3.5" fill="#00247d"/>
    </g>
  </svg>
);

const FlagEN = ({ className = "w-4 h-3" }) => (
  <svg className={`${className} inline-block rounded-[2px] overflow-hidden shrink-0 shadow-xs`} viewBox="0 0 640 480">
    <path fill="#00247d" d="M0 0h640v480H0z"/>
    <path fill="#fff" d="m0 0 640 480M640 0 0 480" stroke="#fff" strokeWidth="60"/>
    <path fill="#cf142b" d="m0 0 640 480M640 0 0 480" stroke="#cf142b" strokeWidth="40"/>
    <path fill="#fff" d="M260 0h120v480H260zM0 180h640v120H0z"/>
    <path fill="#cf142b" d="M280 0h80v480H280zM0 200h640v80H0z"/>
  </svg>
);

const FlagES = ({ className = "w-4 h-3" }) => (
  <svg className={`${className} inline-block rounded-[2px] overflow-hidden shrink-0 shadow-xs`} viewBox="0 0 640 480">
    <path fill="#c60b1e" d="M0 0h640v480H0z"/>
    <path fill="#ffc400" d="M0 120h640v240H0z"/>
  </svg>
);

const FlagFR = ({ className = "w-4 h-3" }) => (
  <svg className={`${className} inline-block rounded-[2px] overflow-hidden shrink-0 shadow-xs`} viewBox="0 0 640 480">
    <path fill="#051440" d="M0 0h213.3v480H0z"/>
    <path fill="#fff" d="M213.3 0h213.4v480H213.3z"/>
    <path fill="#ec1920" d="M426.7 0H640v480H426.7z"/>
  </svg>
);

const FlagDE = ({ className = "w-4 h-3" }) => (
  <svg className={`${className} inline-block rounded-[2px] overflow-hidden shrink-0 shadow-xs`} viewBox="0 0 640 480">
    <path fill="#000" d="M0 0h640v160H0z"/>
    <path fill="#dd0000" d="M0 160h640v160H0z"/>
    <path fill="#ffce00" d="M0 320h640v160H0z"/>
  </svg>
);

const LANG_MAP = {
  pt: { label: 'PT', name: 'Português', Flag: FlagPT },
  en: { label: 'EN', name: 'English', Flag: FlagEN },
  es: { label: 'ES', name: 'Español', Flag: FlagES },
  fr: { label: 'FR', name: 'Français', Flag: FlagFR },
  de: { label: 'DE', name: 'Deutsch', Flag: FlagDE }
};

function CustomSelectDropdown({ value, onChange, options, darkMode }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full px-4 py-3.5 rounded-2xl text-sm font-medium outline-none transition-all border flex items-center justify-between cursor-pointer ${
          darkMode 
            ? 'bg-neutral-950 border-neutral-800 text-white focus:border-primary' 
            : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-neutral-900'
        }`}
      >
        <span className="truncate">{value}</span>
        <MaterialIcon name="expand_more" className={`text-base transition-transform duration-300 shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div 
          className={`absolute left-0 top-full mt-2 w-full rounded-2xl border shadow-2xl py-2 z-50 transition-all ${
            darkMode 
              ? 'bg-neutral-900 border-neutral-800 text-white' 
              : 'bg-white border-neutral-200 text-neutral-900'
          }`}
        >
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`w-full px-4 py-2.5 text-left text-xs font-bold font-headline transition-colors flex items-center justify-between cursor-pointer ${
                value === opt 
                  ? 'text-primary bg-primary/10 font-black' 
                  : darkMode ? 'hover:bg-white/5' : 'hover:bg-neutral-100'
              }`}
            >
              <span>{opt}</span>
              {value === opt && <MaterialIcon name="check" className="text-sm text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ContactInlineForm({ lang = 'pt', darkMode = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: lang === 'pt' ? 'Desenvolvimento Web & Apps' : 'Web & App Development',
    location: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showChoiceModal, setShowChoiceModal] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('enviado=true')) {
      setSuccess(true);
    }
  }, []);

  const isPt = lang === 'pt';

  const subjectOptions = isPt ? [
    'Desenvolvimento Web & Apps',
    'Branding & Identidade Visual',
    'Consultoria Digital & Marketing',
    'Manutenção & Suporte',
    'Outro assunto'
  ] : [
    'Web & App Development',
    'Branding & Visual Identity',
    'Digital Consulting & Marketing',
    'Maintenance & Support',
    'Other'
  ];

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError(isPt ? 'Por favor, preenche todos os campos obrigatórios (*).' : 'Please fill in all required fields (*).');
      return;
    }
    setError('');
    setShowChoiceModal(true);
  };

  const handleSendEmail = async () => {
    setLoading(true);
    setError('');
    setShowChoiceModal(false);

    try {
      const dataToSend = new FormData();
      dataToSend.append('Nome', formData.name);
      dataToSend.append('Email', formData.email);
      dataToSend.append('Assunto', formData.subject);
      dataToSend.append('Localização', formData.location || 'Não informada');
      dataToSend.append('Mensagem', formData.message);
      dataToSend.append('_subject', `[P&D AGENCY] Novo Pedido de Proposta - ${formData.name}`);
      dataToSend.append('_template', 'table');
      dataToSend.append('_captcha', 'false');

      await fetch('https://formsubmit.co/ajax/pd.agency.digital01@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: dataToSend
      });
      setSuccess(true);
    } catch (err) {
      window.location.href = `mailto:pd.agency.digital01@gmail.com?subject=${encodeURIComponent(`[P&D AGENCY] Pedido de Proposta - ${formData.name}`)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\nAssunto: ${formData.subject}\nLocalização: ${formData.location}\n\nMensagem:\n${formData.message}`)}`;
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSendWhatsApp = () => {
    setShowChoiceModal(false);
    const text = `*Novo Contacto - P&D Agency*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Email:* ${formData.email || 'Não informado'}\n` +
      `*Assunto:* ${formData.subject}\n` +
      `*Localização:* ${formData.location || 'Não informada'}\n\n` +
      `*Mensagem:*\n${formData.message}`;

    const url = `https://wa.me/3519262568423?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="py-12 text-center space-y-4" data-testid="inline-contact-success">
        <span className="material-symbols-outlined text-emerald-500 text-5xl">check_circle</span>
        <h4 className={`font-headline text-2xl font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
          {isPt ? 'PROPOSTA ENVIADA COM SUCESSO!' : 'PROPOSAL SENT SUCCESSFULLY!'}
        </h4>
        <p className={`text-sm max-w-md mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
          {isPt 
            ? 'Recebemos a tua mensagem e responderemos muito em breve.' 
            : 'We received your message and will respond very soon.'}
        </p>
        <button
          type="button"
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.history.replaceState({}, document.title, window.location.pathname);
            }
            setSuccess(false);
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white text-xs font-bold font-headline uppercase tracking-widest hover:bg-primary transition-all shadow-md mt-2 cursor-pointer"
        >
          <span>{isPt ? 'Enviar Outra Mensagem' : 'Send Another Message'}</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleInitialSubmit} className="space-y-6" data-testid="inline-contact-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[11px] font-black uppercase tracking-wider mb-2 text-neutral-400">
            {isPt ? 'O TEU NOME *' : 'YOUR NAME *'}
          </label>
          <input
            type="text"
            name="Nome"
            required
            placeholder="ex: Ana Maria"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3.5 rounded-2xl text-sm outline-none transition-all border ${
              darkMode 
                ? 'bg-neutral-950 border-neutral-800 text-white focus:border-primary' 
                : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-neutral-900'
            }`}
          />
        </div>

        <div>
          <label className="block text-[11px] font-black uppercase tracking-wider mb-2 text-neutral-400">
            {isPt ? 'O TEU EMAIL *' : 'YOUR EMAIL *'}
          </label>
          <input
            type="email"
            name="Email"
            required
            placeholder="ex: ana@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3.5 rounded-2xl text-sm outline-none transition-all border ${
              darkMode 
                ? 'bg-neutral-950 border-neutral-800 text-white focus:border-primary' 
                : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-neutral-900'
            }`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[11px] font-black uppercase tracking-wider mb-2 text-neutral-400">
            {isPt ? 'MOTIVO DE CONTACTO / ASSUNTO' : 'SUBJECT / REASON'}
          </label>
          <CustomSelectDropdown
            value={formData.subject}
            onChange={(val) => setFormData({ ...formData, subject: val })}
            options={subjectOptions}
            darkMode={darkMode}
          />
        </div>

        <div>
          <label className="block text-[11px] font-black uppercase tracking-wider mb-2 text-neutral-400">
            {isPt ? 'LOCALIZAÇÃO' : 'LOCATION'}
          </label>
          <input
            type="text"
            name="Localização"
            placeholder={isPt ? "ex: Lisboa, Porto, Leiria..." : "ex: London, Lisbon, NY..."}
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className={`w-full px-4 py-3.5 rounded-2xl text-sm outline-none transition-all border ${
              darkMode 
                ? 'bg-neutral-950 border-neutral-800 text-white focus:border-primary' 
                : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-neutral-900'
            }`}
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-black uppercase tracking-wider mb-2 text-neutral-400">
          {isPt ? 'DESCRIÇÃO DA IDEIA OU MENSAGEM *' : 'MESSAGE OR IDEA DESCRIPTION *'}
        </label>
        <textarea
          name="Mensagem"
          required
          rows={4}
          placeholder={isPt ? "Conta-nos a tua ideia de website, aplicação ou comunicação..." : "Tell us about your website, app, or communication idea..."}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-3.5 rounded-2xl text-sm outline-none transition-all border resize-none ${
            darkMode 
              ? 'bg-neutral-950 border-neutral-800 text-white focus:border-primary' 
              : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-neutral-900'
          }`}
        />
      </div>

      {error && (
        <p className="text-red-400 text-xs font-bold">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto bg-neutral-900 text-white hover:bg-primary px-8 py-4 rounded-2xl font-headline font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-50 border border-neutral-700"
      >
        <span>{loading ? (isPt ? 'A ENVIAR...' : 'SENDING...') : (isPt ? 'Enviar Ideia' : 'Send Idea')}</span>
        <span className="material-symbols-outlined text-base">send</span>
      </button>

      {/* POPUP MODAL PARA ESCOLHER VIA EMAIL OU WHATSAPP */}
      {showChoiceModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className={`relative w-full max-w-md rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all ${
            darkMode ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
          }`}>
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowChoiceModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-500/10 transition-colors cursor-pointer text-neutral-400 hover:text-white"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-2xl">send</span>
              </div>
              <h3 className="font-headline font-black text-xl uppercase tracking-tight">
                {isPt ? 'Como preferes enviar?' : 'How would you like to send?'}
              </h3>
              <p className={`text-xs mt-1.5 leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {isPt 
                  ? 'Escolhe o canal preferido para a nossa equipa receber o teu pedido:' 
                  : 'Choose your preferred channel for our team to receive your request:'}
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleSendEmail}
                className={`w-full p-4 rounded-2xl border text-left flex items-center gap-4 transition-all cursor-pointer group ${
                  darkMode 
                    ? 'bg-neutral-950/80 border-neutral-800 hover:border-primary hover:bg-neutral-950' 
                    : 'bg-neutral-50 border-neutral-200 hover:border-neutral-900 hover:bg-white'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform border border-neutral-700">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-headline font-bold text-xs uppercase tracking-wider">
                    {isPt ? 'Enviar por Email' : 'Send via Email'}
                  </h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    {isPt ? 'Directo para a nossa caixa de entrada' : 'Directly to our inbox'}
                  </p>
                </div>
                <span className="material-symbols-outlined text-sm text-neutral-400 group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </button>

              <button
                type="button"
                onClick={handleSendWhatsApp}
                className={`w-full p-4 rounded-2xl border text-left flex items-center gap-4 transition-all cursor-pointer group ${
                  darkMode 
                    ? 'bg-neutral-950/80 border-neutral-800 hover:border-emerald-500 hover:bg-neutral-950' 
                    : 'bg-neutral-50 border-neutral-200 hover:border-emerald-600 hover:bg-white'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-lg">chat</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-emerald-500">
                    {isPt ? 'Enviar via WhatsApp' : 'Send via WhatsApp'}
                  </h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    {isPt ? 'Abre conversa direta com texto pronto' : 'Open direct chat with ready text'}
                  </p>
                </div>
                <span className="material-symbols-outlined text-sm text-neutral-400 group-hover:text-emerald-500 transition-colors">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

// ── COMPONENTE PRINCIPAL (COM MODO CLARO/ESCURO & LINGUAGEM PT/EN) ──

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState('terms');
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false); // Default: Light Mode (Branco)
  const [lang, setLang] = useState('pt'); // Default: PT
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: 'TAKOS KING', category: lang === 'pt' ? 'Fast Food • Guia, Pombal' : 'Fast Food • Guia, Pombal', logo: '/assets/takos-king.png', link: 'https://www.facebook.com/TakosKing.Guia.Pombal/' },
    { name: 'AGOSTINHO BIKES', category: lang === 'pt' ? 'Stand & Oficina de Bicicletas' : 'Bicycle Showroom & Workshop', logo: '/assets/agostinho-bikes.png', link: 'https://www.agostinhobikes.com/' },
    { name: 'ROUTE 109 GUIA', category: lang === 'pt' ? 'Mobilidade Elétrica • Guia' : 'Electric Mobility • Guia', logo: '/assets/roots-199.png', link: 'https://www.routen109mobilidade.com/' },
    { name: 'HELIPLANTA', category: lang === 'pt' ? 'Produção Hortícola & Viveiros' : 'Horticultural & Nursery Production', logo: '/assets/heliplanta.png', link: 'https://heliplanta-beryl.vercel.app/' },
    { name: 'EDU BRASIL', category: lang === 'pt' ? 'Plataforma Educacional' : 'Educational Platform', logo: '/assets/edu-brasil-icon.png', link: 'https://mobileapp-taupe.vercel.app/' }
  ];

  return (
    <div className={`selection:bg-primary selection:text-white font-body leading-normal transition-colors duration-500 overflow-x-hidden ${
      darkMode ? 'text-white bg-[#050A13]' : 'text-neutral-900 bg-[#FDFBF7]'
    }`}>
      <CustomCursor />
      
      {/* ── PRELOADER ── */}
      {loading && (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-700 ${
          darkMode ? 'bg-[#050A13]' : 'bg-[#FDFBF7]'
        }`}>
          <div className="flex items-center gap-3 animate-pulse">
            <img src="/assets/pd-agency-logo.png" alt="P&D Agency" className="w-12 h-12 object-contain rounded-xl shadow-lg border border-neutral-800 bg-black p-1" />
            <span className={`text-2xl font-headline font-black tracking-tighter uppercase italic ${darkMode ? 'text-white' : 'text-neutral-900'}`}>P&D AGENCY</span>
          </div>
          <span className="mt-4 text-[10px] font-label uppercase tracking-[0.5em] text-neutral-500 font-bold">{t.preloader}</span>
        </div>
      )}

      {/* ── HEADER COM IDIOMA (PT / EN) E TEMA (CLARO / ESCURO) ── */}
      <header className={`fixed top-0 w-full z-50 border-b backdrop-blur-2xl transition-colors duration-500 ${
        darkMode ? 'bg-[#050A13]/90 border-neutral-800/80' : 'bg-[#FDFBF7]/90 border-neutral-200/80'
      }`}>
        <div className="flex justify-between items-center px-4 sm:px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 md:gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/assets/pd-agency-logo.png" alt="P&D Agency" className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-xl shadow-md border border-neutral-800 bg-black p-1" />
            <span className={`text-base sm:text-xl md:text-2xl font-black tracking-tighter uppercase font-headline italic truncate max-w-[130px] sm:max-w-none ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}>P&D AGENCY</span>
          </div>

          <nav className={`hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-[0.2em] ${
            darkMode ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            <a href="#welcome" className="hover:text-primary transition-colors">{t.nav.home}</a>
            <a href="#custom-agency" className="hover:text-primary transition-colors">{t.nav.approach}</a>
            <a href="#o-que-fazemos" className="hover:text-primary transition-colors">{t.nav.services}</a>
            <a href="#orcamento" className="hover:text-primary transition-colors text-primary font-black">{t.nav.estimator}</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">{t.nav.portfolio}</a>
            <a href="#testemunhos" className="hover:text-primary transition-colors">{t.nav.testimonials}</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* SELETOR DE IDIOMA (DROPDOWN / SELECT) */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-full border font-headline font-bold text-[10px] sm:text-[11px] tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  darkMode 
                    ? 'bg-neutral-900 border-neutral-700 text-white hover:border-primary' 
                    : 'bg-neutral-100 border-neutral-300 text-neutral-900 hover:border-primary shadow-sm'
                }`}
              >
                <span className="flex items-center gap-1">
                  {(() => {
                    const currentLangObj = LANG_MAP[lang] || LANG_MAP.pt;
                    const ActiveFlag = currentLangObj.Flag;
                    return (
                      <>
                        <ActiveFlag className="w-3.5 h-2.5 sm:w-4 sm:h-3" />
                        <span>{currentLangObj.label}</span>
                      </>
                    );
                  })()}
                </span>
                <MaterialIcon name="expand_more" className={`text-base transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div 
                  className={`absolute right-0 mt-2 w-40 rounded-2xl border shadow-2xl py-2 z-50 transition-all ${
                    darkMode 
                      ? 'bg-neutral-900 border-neutral-800 text-white' 
                      : 'bg-white border-neutral-200 text-neutral-900'
                  }`}
                >
                  {Object.entries(LANG_MAP).map(([key, item]) => {
                    const FlagComp = item.Flag;
                    return (
                      <button
                        key={key}
                        onClick={() => { setLang(key); setLangDropdownOpen(false); }}
                        className={`w-full px-4 py-2 text-left text-[11px] font-bold font-headline flex items-center gap-2.5 hover:bg-primary/10 transition-colors cursor-pointer ${
                          lang === key ? 'text-primary font-black bg-primary/10' : ''
                        }`}
                      >
                        <FlagComp className="w-4 h-3" />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* BOTÃO MODO CLARO / ESCURO */}
            <button
              onClick={toggleTheme}
              title={darkMode ? "Modo Claro" : "Modo Escuro"}
              className={`p-2 sm:p-2.5 rounded-full border transition-all flex items-center justify-center ${
                darkMode ? 'bg-neutral-900 border-neutral-700 text-amber-400 hover:bg-neutral-800' : 'bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200'
              }`}
            >
              <MaterialIcon name={darkMode ? "light_mode" : "dark_mode"} className="text-lg sm:text-xl" />
            </button>

            {/* HAMBURGER MENU BUTTON (MOBILE / TABLET) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 sm:p-2.5 rounded-full border transition-all flex lg:hidden items-center justify-center cursor-pointer ${
                darkMode ? 'bg-neutral-900 border-neutral-700 text-white' : 'bg-neutral-100 border-neutral-300 text-neutral-900'
              }`}
            >
              <MaterialIcon name={mobileMenuOpen ? "close" : "menu"} className="text-lg sm:text-xl" />
            </button>

            <a 
              href="#contacto"
              className="hidden sm:inline-block bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-black font-headline text-[10px] sm:text-[11px] tracking-widest hover:bg-primary/90 active:scale-95 transition-all uppercase shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              {t.cta}
            </a>
          </div>
        </div>

        {/* ── MOBILE / TABLET MENU DRAWER ── */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className={`w-full border-b backdrop-blur-3xl p-6 lg:hidden shadow-2xl transition-all ${
              darkMode ? 'bg-[#050A13]/95 border-neutral-800 text-white' : 'bg-[#FDFBF7]/95 border-neutral-200 text-neutral-900'
            }`}
          >
            <nav className="flex flex-col gap-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              <a href="#welcome" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-1.5">{t.nav.home}</a>
              <a href="#custom-agency" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-1.5">{t.nav.approach}</a>
              <a href="#o-que-fazemos" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-1.5">{t.nav.services}</a>
              <a href="#orcamento" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-1.5 text-primary font-black">{t.nav.estimator}</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-1.5">{t.nav.portfolio}</a>
              <a href="#testemunhos" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-1.5">{t.nav.testimonials}</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 text-primary font-black flex items-center justify-between border-t border-neutral-500/20 pt-4">
                <span>{lang === 'pt' ? 'FALAR COM A AGÊNCIA' : 'TALK TO THE AGENCY'}</span>
                <MaterialIcon name="arrow_forward" className="text-base" />
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      <main className="overflow-x-hidden pt-16">
        {/* ── HERO SECTION (ESTILO IARA BENTO + APPLE ELEGANCE) ── */}
        <section className={`relative min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 pt-6 sm:pt-8 pb-16 overflow-hidden transition-colors duration-500 ${
          darkMode ? 'bg-[#050A13]' : 'bg-[#FDFBF7]'
        }`} id="welcome">
          {/* Ambient Lighting (Apple Style Depth) */}
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[450px] bg-gradient-to-b from-blue-500/15 via-sky-500/10 to-transparent rounded-full blur-[140px] pointer-events-none"></div>

          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-14">
              
              {/* Lado Esquerdo: Copywriting, CTAs & Métricas (7 colunas) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* Editorial Headline */}
                <motion.h1 
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-headline text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[92px] xl:text-[95px] font-black uppercase leading-[0.98] sm:leading-[0.94] tracking-[-0.03em] text-center lg:text-left break-words ${
                    darkMode ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  <span className={darkMode ? 'bg-gradient-to-b from-white via-white/95 to-neutral-400 bg-clip-text text-transparent' : 'text-neutral-900'}>
                    {t.hero.headline1}
                  </span> <br />
                  <span className="text-[#0071E3] dark:text-[#3B82F6] inline-block pr-2">
                    {t.hero.headline2}
                  </span> <br />
                  <span className={darkMode ? 'bg-gradient-to-b from-white via-white/95 to-neutral-400 bg-clip-text text-transparent' : 'text-neutral-900'}>
                    {t.hero.headline3}
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`max-w-2xl text-sm sm:text-base md:text-lg font-normal leading-relaxed ${
                    darkMode ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  <p className="mb-2 font-medium">
                    {t.hero.copyBold}
                  </p>
                  <p className={`text-xs sm:text-sm md:text-base font-light ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {t.hero.copySub} <strong className={darkMode ? 'text-white font-medium' : 'text-neutral-900 font-medium'}>{t.hero.copyPartner}</strong>
                  </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
                >
                  <a 
                    href="#contacto"
                    className="w-full sm:w-auto bg-[#0071E3] hover:bg-[#0077ED] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-headline font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(0,113,227,0.35)] hover:shadow-[0_8px_30px_rgba(0,113,227,0.5)] active:scale-[0.98] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    <span>{t.hero.btnPrimary}</span>
                    <MaterialIcon name="arrow_forward" className="text-base" />
                  </a>
                  <a 
                    href="#orcamento"
                    className={`w-full sm:w-auto border px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-headline font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-xl hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center justify-center gap-2 cursor-pointer text-center ${
                      darkMode ? 'bg-white/5 border-white/15 text-white hover:bg-white/10 hover:border-white/30' : 'bg-black/5 border-black/10 text-neutral-900 hover:bg-black/10 hover:border-black/20'
                    }`}
                  >
                    <span>{lang === 'pt' ? 'PEDIR PROPOSTA' : 'REQUEST PROPOSAL'}</span>
                    <MaterialIcon name="description" className="text-base" />
                  </a>
                </motion.div>

                {/* Key Value Props Bar (Estilo Iara Bento) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.8 }}
                  className={`pt-6 border-t grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left ${
                    darkMode ? 'border-neutral-800/80' : 'border-neutral-200'
                  }`}
                >
                  <div>
                    <span className="block text-xl sm:text-2xl font-black font-headline text-primary">+340%</span>
                    <span className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-wider leading-tight block ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {lang === 'pt' ? 'Alcance & Conversão' : 'Organic Reach'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-black font-headline text-primary">100%</span>
                    <span className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-wider leading-tight block ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {lang === 'pt' ? 'Sob Medida' : 'Custom Built'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-black font-headline text-primary">3-21 Dias</span>
                    <span className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-wider leading-tight block ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {lang === 'pt' ? 'Entrega Ágil' : 'Agile Delivery'}
                    </span>
                  </div>
                </motion.div>

              </div>

              {/* Lado Direito: Mockup Interativo Instagram @pdagency.pt com Posts Reais (5 colunas) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative flex justify-center w-full"
              >
                <InstagramMockupCard darkMode={darkMode} lang={lang} />
              </motion.div>

            </div>

            {/* MARQUEE TICKER DOS CLIENTES HERO (ANIMADO CONTINUO COM FADE LATERAL) */}
            <div className="mb-3 text-center">
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] font-black">
                {lang === 'pt' ? 'EMPRESAS COM QUEM JÁ TRABALHAMOS' : 'COMPANIES WE HAVE WORKED WITH'}
              </p>
            </div>
            <div className={`w-full overflow-hidden border-y py-4 rounded-2xl relative ${
              darkMode ? 'border-neutral-800/80 bg-neutral-900/40' : 'border-neutral-200/80 bg-neutral-100/60'
            }`}
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
            }}>
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
                className={`flex items-center gap-10 whitespace-nowrap w-max opacity-90 text-[11px] font-headline font-black uppercase tracking-[0.2em] ${
                  darkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}
              >
                {[...brands, ...brands, ...brands, ...brands].map((b, i) => (
                  <React.Fragment key={i}>
                    <span className="flex items-center gap-3">
                      {b.logo ? (
                        <img src={b.logo} alt={b.name} className="h-6 w-auto object-contain max-w-[80px]" />
                      ) : (
                        <MaterialIcon name={b.icon} className="text-primary text-base" />
                      )}
                      <span>{b.name}</span>
                    </span>
                    <span className="opacity-30">•</span>
                  </React.Fragment>
                ))}
              </motion.div>
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
                  className={`p-8 md:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 group ${
                    darkMode 
                      ? 'bg-neutral-900/90 border-neutral-800 border-l-[6px] border-l-[#050A14] border-b-[8px] border-b-[#02050B] shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:border-primary/50' 
                      : 'bg-white border-neutral-200 border-l-[6px] border-l-neutral-300 border-b-[8px] border-b-neutral-300 shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:border-primary/50'
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
            <div className={`border rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border-l-[6px] border-b-[8px] shadow-xl ${
              darkMode 
                ? 'bg-primary/10 border-primary/30 border-l-blue-900 border-b-blue-950 text-white shadow-blue-950/40' 
                : 'bg-primary/5 border-primary/20 border-l-blue-200 border-b-blue-300 text-neutral-900 shadow-blue-100'
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
                className={`p-8 md:p-10 rounded-3xl border flex flex-col justify-between group transition-all duration-300 ${
                  darkMode 
                    ? 'bg-neutral-900/80 border-neutral-800 border-l-[6px] border-l-[#050A14] border-b-[8px] border-b-[#02050B] shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:border-primary/40' 
                    : 'bg-white border-neutral-200 border-l-[6px] border-l-neutral-300 border-b-[8px] border-b-neutral-300 shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:border-primary/40'
                }`}
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 border-l-2 border-b-2 flex items-center justify-center mb-8 group-hover:bg-primary text-primary group-hover:text-white transition-colors shadow-sm">
                    <MaterialIcon name="web" className="text-3xl" />
                  </div>
                  <h3 className={`font-headline text-3xl font-black uppercase mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{t.services.card1_title}</h3>
                  <p className={`text-sm leading-relaxed mb-6 font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {t.services.card1_desc}
                  </p>
                  <ul className={`space-y-3 text-xs uppercase tracking-wider font-bold mb-8 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> {t.services.card1_li1}</li>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> {t.services.card1_li2}</li>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> {t.services.card1_li3}</li>
                  </ul>
                </div>
                <a href="#contacto" className="w-full py-4 rounded-xl border border-primary/40 text-primary font-headline font-black text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all text-center inline-block border-l-[3px] border-b-[4px] border-l-blue-900 border-b-blue-950 active:translate-y-1">
                  {t.services.btnMore}
                </a>
              </motion.div>

              <motion.div 
                whileHover={{ y: -6 }}
                className={`p-8 md:p-10 rounded-3xl border flex flex-col justify-between group transition-all duration-300 ${
                  darkMode 
                    ? 'bg-neutral-900/80 border-neutral-800 border-l-[6px] border-l-[#050A14] border-b-[8px] border-b-[#02050B] shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:border-primary/40' 
                    : 'bg-white border-neutral-200 border-l-[6px] border-l-neutral-300 border-b-[8px] border-b-neutral-300 shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:border-primary/40'
                }`}
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 border-l-2 border-b-2 flex items-center justify-center mb-8 group-hover:bg-primary text-primary group-hover:text-white transition-colors shadow-sm">
                    <MaterialIcon name="brush" className="text-3xl" />
                  </div>
                  <h3 className={`font-headline text-3xl font-black uppercase mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{t.services.card2_title}</h3>
                  <p className={`text-sm leading-relaxed mb-6 font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {t.services.card2_desc}
                  </p>
                  <ul className={`space-y-3 text-xs uppercase tracking-wider font-bold mb-8 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> {t.services.card2_li1}</li>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> {t.services.card2_li2}</li>
                    <li className="flex items-center gap-2"><MaterialIcon name="check_circle" className="text-primary text-base" /> {t.services.card2_li3}</li>
                  </ul>
                </div>
                <a href="#contacto" className="w-full py-4 rounded-xl border border-primary/40 text-primary font-headline font-black text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all text-center inline-block border-l-[3px] border-b-[4px] border-l-blue-900 border-b-blue-950 active:translate-y-1">
                  {t.services.btnMore}
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── STATS SECTION ── */}
        <section className={`py-20 border-b relative overflow-hidden transition-colors duration-500 ${
          darkMode ? 'bg-[#070D1A] border-neutral-800/60' : 'bg-neutral-100 border-neutral-200'
        }`}>
          <div className="container mx-auto px-8 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
              {[
                { val: t.stats.s1_val, lab: t.stats.s1_lab },
                { val: t.stats.s2_val, lab: t.stats.s2_lab },
                { val: t.stats.s3_val, lab: t.stats.s3_lab },
                { val: t.stats.s4_val, lab: t.stats.s4_lab }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center w-full relative group">
                  <span className={`text-3xl sm:text-5xl md:text-6xl font-black font-headline tracking-tighter ${
                    darkMode ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {stat.val}
                  </span>
                  <p className="text-primary text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] sm:tracking-[0.3em] mt-2 sm:mt-3 italic">
                    {stat.lab}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SIMULADOR & CALCULADORA DE ORÇAMENTO (ESTILO IARA BENTO) ── */}
        <BudgetCalculatorSection darkMode={darkMode} lang={lang} />

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
                  label: lang === 'pt' ? 'Stand & Oficina / 2026' : 'Showroom & Workshop / 2026',
                  labelColor: 'text-red-400',
                  title: 'AGOSTINHO BIKES',
                  subtitle: lang === 'pt' ? 'Loja e oficina de bicicletas em Pombal — catálogo digital interativo, simulador e assistência técnica Mondraker.' : 'Bicycle showroom & repair shop in Pombal — interactive digital catalog, rental simulator & Mondraker support.',
                  img: '/assets/portfolio-agostinho-bikes.png',
                  logo: '/assets/agostinho-bikes.png',
                  badge: t.portfolio.live,
                  badgeClass: 'bg-red-600 text-white font-bold',
                  link: 'https://www.agostinhobikes.com/',
                },
                {
                  label: lang === 'pt' ? 'Social Media & Branding / 2026' : 'Social Media & Branding / 2026',
                  labelColor: 'text-amber-300',
                  title: 'IARA BENTO',
                  subtitle: lang === 'pt' ? 'Gestão de redes sociais e criação de conteúdos estratégicos — estimador interativo de propostas e branding de luxo.' : 'Social media management & content creation — interactive proposal estimator and luxury aesthetic.',
                  img: '/assets/portfolio-iara-bento.png',
                  badge: t.portfolio.live,
                  badgeClass: 'bg-amber-500 text-black font-bold',
                  link: 'https://iara-bento.vercel.app/',
                },
                {
                  label: lang === 'pt' ? 'Mobilidade Elétrica / 2026' : 'Electric Mobility / 2026',
                  labelColor: 'text-primary',
                  title: 'ROUTE N109 MOBILIDADE',
                  subtitle: lang === 'pt' ? 'Stand e oficina de motos e scooters elétricas na Guia — catálogo interativo e presença digital de alta performance.' : 'Electric motorcycle showroom & workshop in Guia — interactive catalog and high-performance digital platform.',
                  img: '/assets/portfolio-route109.png',
                  badge: t.portfolio.live,
                  badgeClass: 'bg-primary text-white font-bold',
                  link: 'https://www.routen109mobilidade.com/',
                },
                {
                  label: lang === 'pt' ? 'Agronegócio & Viveiros / 2026' : 'Agribusiness & Nurseries / 2026',
                  labelColor: 'text-emerald-400',
                  title: 'HELIPLANTA',
                  subtitle: lang === 'pt' ? 'Plataforma digital para viveiros hortícolas e ornamentais na Mata Mourisca — catálogo e serviços.' : 'Digital platform for horticultural and ornamental nurseries in Mata Mourisca — catalog & services.',
                  img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85',
                  logo: '/assets/heliplanta.png',
                  badge: t.portfolio.live,
                  badgeClass: 'bg-emerald-600 text-white font-bold',
                  link: 'https://heliplanta-beryl.vercel.app/',
                },
                {
                  label: lang === 'pt' ? 'Portfólio Criativo / 2026' : 'Creative Showcase / 2026',
                  labelColor: 'text-primary',
                  title: 'MARIA JOÃO',
                  subtitle: lang === 'pt' ? 'Portfólio pessoal e showcase criativo de apresentação profissional.' : 'Personal portfolio and creative showcase for professional presentation.',
                  img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85',
                  badge: t.portfolio.live,
                  badgeClass: 'bg-primary text-white font-bold',
                  link: 'https://maria-joao-portfolio.vercel.app/',
                },
                {
                  label: lang === 'pt' ? 'Restauração & Fast Food / 2026' : 'Food & Fast Casual / 2026',
                  labelColor: 'text-amber-400',
                  title: 'TAKOS KING',
                  subtitle: lang === 'pt' ? 'Plataforma web para restaurante de fast food focado em tacos — Guia, Pombal.' : 'Web platform for taco fast-casual brand in Guia, Pombal.',
                  img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=85',
                  logo: '/assets/takos-king.png',
                  badge: t.portfolio.live,
                  badgeClass: 'bg-amber-500 text-black font-bold',
                  link: 'https://takos-king.vercel.app/',
                },
              ].map((item, i) => (
                <motion.a
                  href={item.link}
                  target={item.link === '#' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-[28px] overflow-hidden group cursor-pointer block border shadow-xl transition-all duration-300 flex flex-col justify-between ${
                    darkMode 
                      ? 'bg-neutral-900/90 border-neutral-800 border-l-[6px] border-l-[#050A14] border-b-[8px] border-b-[#02050B] shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:border-primary/50' 
                      : 'bg-white border-neutral-200 border-l-[6px] border-l-neutral-300 border-b-[8px] border-b-neutral-300 shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:border-primary/50'
                  }`}
                >
                  {/* Mockup Window Header */}
                  <div className={`px-4 py-2.5 border-b flex items-center justify-between ${
                    darkMode ? 'bg-neutral-950/90 border-neutral-800' : 'bg-neutral-100/90 border-neutral-200'
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className={`text-[10px] font-mono font-medium truncate max-w-[160px] px-2 py-0.5 rounded-md ${
                      darkMode ? 'bg-neutral-900 text-neutral-400' : 'bg-white text-neutral-600'
                    }`}>
                      {item.link.replace('https://', '').replace('/', '')}
                    </span>
                    <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Full Image Container — Fits 100% of the screenshot */}
                  <div className={`relative w-full aspect-[16/9] overflow-hidden flex items-center justify-center p-1.5 ${
                    darkMode ? 'bg-neutral-950' : 'bg-neutral-100'
                  }`}>
                    <img
                      alt={item.title}
                      className="w-full h-full object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-500"
                      src={item.img}
                    />
                  </div>

                  {/* Info Panel Below */}
                  <div className="p-6 text-left flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className={`font-label text-[10px] tracking-[0.2em] uppercase font-bold ${item.labelColor}`}>
                          {item.label}
                        </p>
                        <span className="text-xs text-primary font-black group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform inline-flex items-center gap-1">
                          {lang === 'pt' ? 'Ver Site' : 'Visit'} ↗
                        </span>
                      </div>
                      <h4 className={`font-headline text-xl font-black uppercase mb-2 tracking-tight group-hover:text-primary transition-colors ${
                        darkMode ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-xs md:text-sm font-normal leading-relaxed ${
                        darkMode ? 'text-neutral-400' : 'text-neutral-600'
                      }`}>
                        {item.subtitle}
                      </p>
                    </div>
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
                    ? "A P&D Agency soube exatamente como posicionar a Route N109 no digital. O catálogo de motos e scooters elétricas é rápido, intuitivo e os clientes elogiam a facilidade de navegação. O aumento de pedidos e contactos foi imediato!"
                    : "P&D Agency knew exactly how to position Route N109 digitally. The electric motorcycle and scooter catalog is blazing fast, intuitive, and customer bookings increased right away!",
                  author: "Equipa Route N109 Mobilidade",
                  role: "Stand & Oficina",
                  brand: "Route N109 Guia"
                }
              ].map((testi, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className={`p-8 md:p-9 rounded-3xl border flex flex-col justify-between shadow-xl relative group transition-all duration-300 ${
                    darkMode 
                      ? 'bg-neutral-900/90 border-neutral-800 border-l-[6px] border-l-[#050A14] border-b-[8px] border-b-[#02050B] shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:border-primary/50' 
                      : 'bg-white border-neutral-200 border-l-[6px] border-l-neutral-300 border-b-[8px] border-b-neutral-300 shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:border-primary/50'
                  }`}
                >
                  <div className="mb-8">
                    <div className="flex items-center gap-1.5 text-amber-400 mb-5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-5 h-5 fill-amber-400" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className={`text-sm md:text-base leading-relaxed italic font-light ${
                      darkMode ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>
                      "{testi.quote}"
                    </p>
                  </div>
                  <div className={`pt-6 border-t ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
                    <h4 className={`font-headline font-black text-base uppercase tracking-tight group-hover:text-primary transition-colors ${
                      darkMode ? 'text-white' : 'text-neutral-900'
                    }`}>{testi.author}</h4>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-0.5">{testi.role} • {testi.brand}</p>
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

          <div 
            className="relative w-full overflow-hidden flex items-center py-4"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
            }}
          >
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

        {/* ── SECÇÃO DE CONTACTO NO FIM DA PÁGINA (DESIGN MARIA JOÃO) ── */}
        <section className={`py-28 border-b transition-colors duration-500 ${
          darkMode ? 'bg-[#050A13] border-neutral-800' : 'bg-[#FDFBF7] border-neutral-200'
        }`} id="contacto">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-3 font-bold">
                {lang === 'pt' ? 'CONTACTO' : 'CONTACT US'}
              </p>
              <h2 className={`font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>
                {lang === 'pt' ? 'FALAR COM A ' : 'TALK TO THE '}
                <span className="text-primary italic underline decoration-primary decoration-4 underline-offset-8">
                  {lang === 'pt' ? 'AGÊNCIA' : 'AGENCY'}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
              {/* LADO ESQUERDO: CARTÕES DE CONTACTO */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                {/* CARTÃO EMAIL */}
                <div className={`p-6 rounded-3xl border transition-all flex items-center gap-4 ${
                  darkMode 
                    ? 'bg-neutral-900/80 border-neutral-800 border-l-[6px] border-l-[#050A14] border-b-[8px] border-b-[#02050B] shadow-[0_10px_25px_rgba(0,0,0,0.5)]' 
                    : 'bg-neutral-100/90 border-neutral-200 border-l-[6px] border-l-neutral-300 border-b-[8px] border-b-neutral-300 shadow-[0_10px_25px_rgba(0,0,0,0.06)]'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                    <MaterialIcon name="mail" className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">EMAIL</p>
                    <a href="mailto:pd.agency.digital01@gmail.com" className={`font-headline font-bold text-sm hover:text-primary transition-colors ${
                      darkMode ? 'text-white' : 'text-neutral-900'
                    }`}>
                      pd.agency.digital01@gmail.com
                    </a>
                  </div>
                </div>

                {/* CARTÃO WHATSAPP */}
                <div className={`p-6 rounded-3xl border transition-all flex items-center gap-4 ${
                  darkMode 
                    ? 'bg-neutral-900/80 border-neutral-800 border-l-[6px] border-l-[#050A14] border-b-[8px] border-b-[#02050B] shadow-[0_10px_25px_rgba(0,0,0,0.5)]' 
                    : 'bg-neutral-100/90 border-neutral-200 border-l-[6px] border-l-neutral-300 border-b-[8px] border-b-neutral-300 shadow-[0_10px_25px_rgba(0,0,0,0.06)]'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0">
                    <MaterialIcon name="chat" className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">WHATSAPP</p>
                    <a 
                      href="https://wa.me/3519262568423" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`font-headline font-bold text-sm hover:text-emerald-500 transition-colors ${
                        darkMode ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      +351 926 256 8423
                    </a>
                  </div>
                </div>

                {/* CARTÃO INSTAGRAM */}
                <div className={`p-6 rounded-3xl border transition-all flex items-center gap-4 ${
                  darkMode 
                    ? 'bg-neutral-900/80 border-neutral-800 border-l-[6px] border-l-[#050A14] border-b-[8px] border-b-[#02050B] shadow-[0_10px_25px_rgba(0,0,0,0.5)]' 
                    : 'bg-neutral-100/90 border-neutral-200 border-l-[6px] border-l-neutral-300 border-b-[8px] border-b-neutral-300 shadow-[0_10px_25px_rgba(0,0,0,0.06)]'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                    <MaterialIcon name="share" className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">INSTAGRAM</p>
                    <a href="https://www.instagram.com/pd_agency_digital/" target="_blank" rel="noopener noreferrer" className={`font-headline font-bold text-sm hover:text-primary transition-colors ${
                      darkMode ? 'text-white' : 'text-neutral-900'
                    }`}>
                      @pd_agency_digital
                    </a>
                  </div>
                </div>

                {/* CARTÃO LOCALIZAÇÃO */}
                <div className={`p-6 rounded-3xl border transition-all flex items-center gap-4 ${
                  darkMode 
                    ? 'bg-neutral-900/80 border-neutral-800 border-l-[6px] border-l-[#050A14] border-b-[8px] border-b-[#02050B] shadow-[0_10px_25px_rgba(0,0,0,0.5)]' 
                    : 'bg-neutral-100/90 border-neutral-200 border-l-[6px] border-l-neutral-300 border-b-[8px] border-b-neutral-300 shadow-[0_10px_25px_rgba(0,0,0,0.06)]'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                    <MaterialIcon name="location_on" className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">LOCALIZAÇÃO</p>
                    <p className={`font-headline font-bold text-sm ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                      Leiria / Pombal • Portugal
                    </p>
                  </div>
                </div>

                {/* CARTÃO PROPOSTAS & COLABORAÇÕES */}
                <div className={`p-8 rounded-3xl border transition-all ${
                  darkMode 
                    ? 'bg-neutral-900/80 border-neutral-800 border-l-[6px] border-l-[#050A14] border-b-[8px] border-b-[#02050B] shadow-[0_10px_25px_rgba(0,0,0,0.5)]' 
                    : 'bg-neutral-100/90 border-neutral-200 border-l-[6px] border-l-neutral-300 border-b-[8px] border-b-neutral-300 shadow-[0_10px_25px_rgba(0,0,0,0.06)]'
                }`}>
                  <h4 className={`font-headline font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                    {lang === 'pt' ? 'Propostas & Colaborações' : 'Proposals & Collaborations'}
                  </h4>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {lang === 'pt' 
                      ? 'Se tens uma ideia para um projeto de desenvolvimento web, aplicação, branding ou consultoria digital, entra em contacto diretamente connosco.'
                      : 'If you have an idea for a web development, app, branding, or digital consulting project, reach out directly to us.'}
                  </p>
                </div>
              </div>

              {/* LADO DIREITO: FORMULÁRIO DE CONTACTO DA PÁGINA */}
              <div className="lg:col-span-7">
                <div className={`p-8 md:p-10 rounded-3xl border shadow-2xl ${
                  darkMode 
                    ? 'bg-neutral-900 border-neutral-800 border-l-[6px] border-l-[#050A14] border-b-[8px] border-b-[#02050B] shadow-[0_15px_35px_rgba(0,0,0,0.6)]' 
                    : 'bg-white border-neutral-200 border-l-[6px] border-l-neutral-300 border-b-[8px] border-b-neutral-300 shadow-[0_15px_35px_rgba(0,0,0,0.08)]'
                }`}>
                  <h3 className={`font-headline text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                    {lang === 'pt' ? 'Envia a tua proposta' : 'Send your proposal'}
                  </h3>

                  <ContactInlineForm lang={lang} darkMode={darkMode} />
                </div>
              </div>
            </div>
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
                <img src="/assets/pd-agency-logo.png" alt="P&D Agency" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-xl border border-neutral-800 bg-black p-1 shadow-lg" />
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
              <h4 className="font-headline text-primary font-black mb-6 uppercase tracking-[0.3em] text-xs">{lang === 'pt' ? 'CONTACTO' : 'CONTACT'}</h4>
              <ul className={`space-y-3 text-sm font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <li>
                  <a 
                    className="hover:text-primary transition-colors flex items-center gap-2 font-bold" 
                    href="mailto:pd.agency.digital01@gmail.com" 
                  >
                    <MaterialIcon name="mail" className="text-primary text-base" />
                    <span className="truncate">pd.agency.digital01@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    className="hover:text-primary transition-colors flex items-center gap-2" 
                    href="https://www.instagram.com/pd_agency_digital/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MaterialIcon name="share" className="text-primary text-base" />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${
            darkMode ? 'border-neutral-800/80' : 'border-neutral-300'
          }`}>
            <p className="text-neutral-500 text-[10px] uppercase tracking-[0.25em] font-bold text-center md:text-left">
              {t.footer.rights}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              <Link 
                to="/termos-servico"
                className="text-neutral-500 hover:text-primary text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
              >
                {t.footer.terms}
              </Link>
              <Link 
                to="/politica-privacidade"
                className="text-neutral-500 hover:text-primary text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
              >
                {t.footer.privacy}
              </Link>
              <Link 
                to="/politica-cookies"
                className="text-neutral-500 hover:text-primary text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
              >
                {lang === 'pt' ? 'POLÍTICA DE COOKIES' : 'COOKIE POLICY'}
              </Link>
              <a 
                href="https://www.livroreclamacoes.pt/Inicio/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary text-[10px] uppercase tracking-[0.2em] font-bold transition-colors flex items-center gap-1.5"
              >
                <span>{lang === 'pt' ? 'LIVRO DE RECLAMAÇÕES' : 'COMPLAINTS BOOK'}</span>
                <span className="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultPackage={selectedPackage} 
        lang={lang}
      />

      <LegalModal 
        open={legalModalOpen} 
        onClose={() => setLegalModalOpen(false)} 
        defaultTab={activeLegalTab} 
        lang={lang}
      />
    </div>
  );
}



