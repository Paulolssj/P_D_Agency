import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactModal from '../components/ContactModal';

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
    <div ref={ref} className="flex-1 min-w-[300px] bg-[#1a1a1a] p-10 rounded-2xl border border-white/5 group hover:border-primary-container/30 transition-all flex flex-col items-center text-center">
      <p className="font-headline text-6xl font-black mb-4 text-primary-container tracking-tighter">
        {count}{suffix}
      </p>
      <p className="text-white font-headline text-xl font-bold mb-1 uppercase tracking-tight">{label}</p>
      <p className="text-neutral-500 font-body text-sm leading-relaxed">{sub}</p>
    </div>
  );
};

// ── COMPONENTE PRINCIPAL ──

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const openModal = (pkg = '') => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container font-body leading-normal">
      {/* ── HEADER ── */}
      <header className="bg-black/80 backdrop-blur-2xl fixed top-0 w-full z-50 border-b border-white/5">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-primary-container text-on-primary rounded-sm font-black text-xl">A</div>
            <h1 className="text-xl font-black tracking-tighter text-white uppercase font-headline">P&D AGENCY</h1>
          </div>
          <button 
            onClick={() => openModal()}
            className="bg-primary-container text-on-primary px-6 py-2.5 rounded-full font-black font-headline text-[11px] tracking-widest hover:brightness-110 active:scale-95 transition-all uppercase"
          >
            VAMOS CONSTRUIR
          </button>
        </div>
      </header>

      <main className="pt-16">
        {/* ── HERO SECTION ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden py-12">
          <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(129, 236, 255, 0.15) 0%, transparent 70%)' }}></div>
          <div className="container mx-auto relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_8px_#81ecff]"></span>
              <p className="font-label text-on-surface-variant uppercase tracking-[0.4em] text-[10px] font-medium">
                THE OBSIDIAN ARCHITECT
              </p>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="font-headline text-5xl md:text-[7.5rem] font-black tracking-tighter leading-[0.85] mb-10 text-white uppercase"
            >
              CONSTRUÍMOS <br/> 
              <span className="italic font-light text-primary-container">INTERFACES</span> <br/>
              DO FUTURO.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-14 font-medium leading-relaxed opacity-70"
            >
              Elevando negócios através de desenvolvimento web de alto nível e aplicações digitais de próxima geração.
            </motion.p>

            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-16">
              <div className="flex items-center gap-2.5">
                <span className="font-headline text-2xl font-black text-primary-container">20+</span>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-500">marcas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="font-headline text-2xl font-black text-primary-container">+30%</span>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-500">conversão</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="font-headline text-2xl font-black text-primary-container">92%</span>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-500">satisfação</span>
              </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-stretch max-w-sm mx-auto">
              <button 
                onClick={() => openModal()}
                className="bg-primary-container text-on-primary px-10 py-6 rounded-xl font-headline font-black text-lg hover:shadow-[0_20px_60px_rgba(129,236,255,0.25)] transition-all active:scale-[0.97] uppercase tracking-widest"
              >
                COMEÇAR
              </button>
              <button className="border border-white/20 text-white px-10 py-6 rounded-xl font-headline font-black text-lg hover:bg-white/[0.03] transition-all active:scale-[0.97] uppercase tracking-widest backdrop-blur-md">
                VER SERVIÇOS
              </button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="font-label text-neutral-500 uppercase tracking-[0.4em] text-[10px] mb-3">PROVA SOCIAL</p>
              <h3 className="font-headline text-4xl font-black tracking-tighter text-white uppercase">NÚMEROS QUE FALAM</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Counter value="20" label="Marcas Transformadas" sub="em 2026" />
              <Counter value="30%" label="Aumento de Conversão" sub="pós 6 meses de lançamento" />
              <Counter value="92" label="Clientes Satisfeitos" sub="taxa de satisfação" />
              <Counter value="7" label="Prazo de Entrega" sub="Plano Completo" />
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-[#0a0a0a]" id="capabilities">
          <div className="container mx-auto">
            <div className="max-w-xl mb-16">
              <p className="font-label text-neutral-500 uppercase tracking-[0.4em] text-[10px] mb-3">CAPACIDADES</p>
              <h3 className="font-headline text-5xl font-black mb-6 tracking-tighter uppercase whitespace-pre-line text-white">
                ARTEFACTOS DIGITAIS
              </h3>
            </div>
            <div className="space-y-6">
              <div className="group bg-[#1a1a1a] p-12 rounded-2xl border border-white/5 hover:border-primary-container/20 transition-all flex flex-col items-start">
                <MaterialIcon name="public" className="text-primary-container text-4xl mb-8" />
                <h4 className="font-headline text-3xl font-bold mb-4 uppercase text-white">Desenvolvimento Web</h4>
                <p className="text-neutral-500 font-body text-lg leading-relaxed max-w-2xl">Plataformas de alta performance, com design editorial, criadas para converter e cativar.</p>
              </div>
              
              <div className="group bg-[#1a1a1a] p-12 rounded-2xl border border-white/5 hover:border-primary-container/20 transition-all flex flex-col items-start relative">
                <div className="absolute top-12 right-12 bg-[#2a133d] text-[#d9b9ff] px-4 py-1.5 rounded-full font-label text-[10px] font-bold uppercase tracking-widest">EM BREVE</div>
                <MaterialIcon name="smartphone" className="text-primary-container text-4xl mb-8" />
                <h4 className="font-headline text-3xl font-bold mb-4 uppercase text-white">Expansão Mobile</h4>
                <p className="text-neutral-500 font-body text-lg leading-relaxed max-w-2xl">Desenvolvendo experiências nativas para mobile que apagam a linha entre software e arte.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="font-label text-neutral-500 uppercase tracking-[0.4em] text-[10px] mb-3">BENEFÍCIOS</p>
              <h3 className="font-headline text-4xl font-black tracking-tighter text-white uppercase">O QUE GANHA COM P&D</h3>
              <p className="text-neutral-500 font-body text-sm mt-4">Uma presença digital sólida é o activo mais valioso do seu negócio em 2026.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
              {[
                { icon: 'search', title: 'Maior Visibilidade Online/Local', desc: 'Destaque-se onde os seus clientes procuram — nos motores de busca e nas redes sociais.' },
                { icon: 'groups', title: 'Mais Alcance e Fluxo de Clientes', desc: 'Conquiste novos mercados e aumente a sua base de clientes com presença digital estratégica.' },
                { icon: 'verified', title: 'Confiança Reforçada', desc: 'Transmita profissionalismo e credibilidade desde o primeiro clique.' },
                { icon: 'loyalty', title: 'Fidelização de Clientes', desc: 'Crie experiências que fazem os seus clientes voltarem repetidamente.' },
                { icon: 'star', title: 'Reforço da Marca', desc: 'Construa uma identidade digital forte e memorável que se diferencia da concorrência.' },
                { icon: 'trending_up', title: 'Maior Envolvimento com o Público', desc: 'Transforme visitantes em defensores da sua marca.' }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <MaterialIcon name={benefit.icon} className="text-primary-container text-3xl shrink-0" />
                  <div>
                    <h4 className="font-headline text-xl font-bold uppercase text-white mb-2 tracking-tight">{benefit.title}</h4>
                    <p className="text-neutral-500 font-body text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-black" id="portfolio">
          <div className="container mx-auto px-4">
            <div className="flex items-baseline justify-between mb-16">
              <h3 className="font-headline text-5xl font-black tracking-tighter uppercase text-white">O ARQUIVO</h3>
              <span className="text-primary-container font-label text-[10px] tracking-[0.4em] font-bold">PROJECTS_2026</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { 
                  case: '01', 
                  title: 'NEON LEDGER', 
                  desc: 'Plataforma de gestão de ativos criptográficos com estética brutalista e precisão técnica.', 
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNbIBe2Qq2y7s7j__gdXydhb69eb3f3GNGX854JEIA3hw9b4gU9r6aIWrjroGqRcyBqw3Fs5c-owNOYdMg3lRu393zc2tpyKZO4OgIGNXHER1B58qf8iQ29Uzw3QsxLZXvhYBy0kp5uk_3y68KezmQmWq2XgevS9NKVwYol3z71sXq_X0DKLCWkw8EEnw8_Iw8fTieFXAnfjawEnp6Asg2_kCeypTPn3XF7X6ODnpDNXK2J3BNjOEFvAnbUB-bu3joMnfheXI37APf' 
                },
                { 
                  case: '02', 
                  title: 'VELVET VOID', 
                  desc: 'E-commerce imersivo para moda vanguardista com shaders e micro-interações fluidas.', 
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBRfbgrTnJ9TDnoUFfxN9UdG_xnnstaRNqJflWnRphzpOW4CHGv-KhBF9ncbvyPSB-I4Q9fAtBfpDBH6pjTaB0prlf_oyzJ088_uWsIqnHL_XjLd73ufB0kT3h4zQZhpVvSwscn30OnSY0bWRCS5IEoKnjxEy_xAC32gpvlcQHacfNu35wxicnNHgaLfyDb7mIP2xelSL20Y9Xz4a8Skb2Cm_q4Ztonpx9QblSZSHiW547HibvzFuO_owQP4UsBO0XRxZWWQx4LTQH' 
                }
              ].map((project, idx) => (
                <div key={idx} className="group flex flex-col gap-6">
                  <div className="overflow-hidden rounded-2xl bg-[#0e0e0e] aspect-[16/10] border border-white/5 relative">
                    <img className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt={project.title} src={project.img}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div>
                    <p className="font-label text-primary-container text-[10px] mb-2 tracking-[0.3em] uppercase font-bold">CASE STUDY // {project.case}</p>
                    <h4 className="font-headline text-3xl font-bold mb-3 uppercase text-white">{project.title}</h4>
                    <p className="text-neutral-500 text-base mb-6 font-medium leading-relaxed">{project.desc}</p>
                    <button className="text-white font-headline font-bold text-sm flex items-center gap-2 group/btn uppercase tracking-widest transition-all hover:text-primary-container">
                      EXPLORAR <MaterialIcon name="arrow_forward" className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#0a0a0a] border-y border-white/5" id="pricing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="font-label text-neutral-500 uppercase tracking-[0.4em] text-[10px] mb-3">INVESTIMENTO</p>
              <h3 className="font-headline text-4xl font-black tracking-tighter text-white uppercase">ESCOLHA O SEU PLANO</h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#1a1a1a] p-10 md:p-14 rounded-2xl border border-white/5 relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                  <div className="flex-1">
                    <MaterialIcon name="web_asset" className="text-primary-container text-4xl mb-6" />
                    <div className="flex items-center gap-4 mb-4">
                      <h4 className="font-headline text-3xl font-black text-white uppercase tracking-tight">PLANO ESSENCIAL</h4>
                      <div className="flex gap-2">
                        <span className="bg-[#132a2e] text-primary-container px-3 py-1 rounded-full font-label text-[9px] font-bold uppercase tracking-widest border border-primary-container/20">MENSALIDADE</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-6 text-neutral-500 font-label text-[10px] uppercase tracking-widest">
                      <MaterialIcon name="sync" className="text-sm" /> CONTRATO 12 MESES
                    </div>
                    <p className="text-neutral-400 font-body text-base leading-relaxed max-w-xl">
                      Desenvolvimento completo do website com design moderno e apelativo, suporte de 14 dias e garantia incluída.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-12">
                  {[
                    'Desenvolvimento completo do website',
                    'Design moderno e apelativo',
                    'Suporte inicial de 14 dias',
                    'Garantia de 7 dias'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full border border-primary-container flex items-center justify-center shrink-0">
                        <MaterialIcon name="check" className="text-primary-container text-xs" />
                      </div>
                      <span className="text-neutral-200 font-body text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => openModal('PLANO ESSENCIAL')}
                  className="w-full py-5 rounded-xl border border-primary-container/40 text-primary-container font-headline font-black text-sm tracking-[0.2em] uppercase hover:bg-primary-container hover:text-on-primary transition-all active:scale-[0.98]"
                >
                  SOLICITAR ORÇAMENTO
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 relative overflow-hidden bg-black">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(129, 236, 255, 0.2) 0%, transparent 70%)' }}></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-headline text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-[0.9] uppercase text-white"
            >
              PRONTO PARA <br/><span className="text-primary-container italic font-light">TRANSCENDER?</span>
            </motion.h3>
            <button 
              onClick={() => openModal()}
              className="group relative inline-flex items-center gap-4 bg-primary-container text-on-primary px-10 py-6 rounded-full font-headline font-black text-xl hover:shadow-[0_20px_60px_rgba(129,236,255,0.4)] transition-all duration-500 active:scale-95"
            >
              FALAR CONNOSCO
              <MaterialIcon name="call_made" className="group-hover:rotate-45 transition-transform text-2xl" />
            </button>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-black w-full border-t border-white/5 font-body text-[11px] tracking-wide">
        <div className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6 md:col-span-2">
            <h2 className="font-headline font-black text-white text-2xl uppercase tracking-tighter">THE OBSIDIAN ARCHITECT</h2>
            <p className="text-neutral-500 font-medium leading-relaxed max-w-sm text-sm">Arquitetando o futuro digital através de precisão técnica e estética disruptiva.</p>
            <div className="flex gap-6">
              <MaterialIcon name="alternate_email" className="text-neutral-500 text-2xl hover:text-primary-container cursor-pointer transition-colors" />
              <MaterialIcon name="share" className="text-neutral-500 text-2xl hover:text-primary-container cursor-pointer transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="font-headline text-primary-container font-black mb-6 uppercase tracking-[0.3em] text-[10px]">NAVEGAÇÃO</h4>
            <ul className="space-y-3">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">Início</button></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-medium" href="#capabilities">Capacidades</a></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-medium" href="#portfolio">Portfólio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-primary-container font-black mb-6 uppercase tracking-[0.3em] text-[10px]">AGÊNCIA</h4>
            <ul className="space-y-3">
              <li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-medium" href="#pricing">Investimento</a></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-medium" href="#">Privacidade</a></li>
              <li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-medium" href="#">Termos</a></li>
            </ul>
          </div>
        </div>
        <div className="px-6 py-8 border-t border-white/5 text-center">
          <p className="text-neutral-700 text-[10px] uppercase tracking-[0.3em] font-bold">© 2026 THE OBSIDIAN ARCHITECT. ALL RIGHTS RESERVED.</p>
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
