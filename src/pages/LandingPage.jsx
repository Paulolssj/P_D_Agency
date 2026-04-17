import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactModal from '../components/ContactModal';
import LegalModal from '../components/LegalModal';

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

const BenefitCard = ({ icon, title, desc, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group bg-[#161616] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all flex flex-col items-start h-full"
  >
    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
      <MaterialIcon name={icon} className="text-primary text-2xl group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all" />
    </div>
    <h3 className="font-headline text-xl font-bold uppercase text-white mb-3 tracking-tight group-hover:text-primary transition-colors">{title}</h3>
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
    <div className="selection:bg-primary-container selection:text-on-primary-container font-body leading-normal">
      {/* ── HEADER ── */}
      <header className="bg-black/80 backdrop-blur-2xl fixed top-0 w-full z-50 border-b border-white/5">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-primary text-black rounded-sm font-black text-2xl shadow-[0_0_20px_rgba(129,236,255,0.4)]">A</div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase font-headline">P&D AGENCY</span>
          </div>
          <button 
            onClick={() => openModal()}
            className="bg-primary-container text-black px-6 py-2.5 rounded-full font-black font-headline text-[11px] tracking-widest hover:brightness-110 active:scale-95 transition-all uppercase shadow-[0_0_15px_rgba(129,236,255,0.3)]"
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
              <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_12px_#81ecff]"></span>
              <p className="font-label text-on-surface-variant uppercase tracking-[0.5em] text-xs font-black">
                THE OBSIDIAN ARCHITECT
              </p>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-fluid-h1 mb-10 text-white uppercase"
            >
              CONSTRUÍMOS <br/> 
              <span className="italic font-light text-primary">INTERFACES</span> <br/>
              DO FUTURO.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-fluid-body text-on-surface-variant max-w-prose mx-auto mb-14 font-medium opacity-70"
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

            <div className="flex flex-col gap-6 justify-center items-stretch max-w-sm mx-auto">
              <button 
                onClick={() => openModal()}
                className="bg-primary-container text-black px-12 py-7 rounded-xl font-headline font-black text-xs tracking-[0.35em] uppercase hover:shadow-[0_15px_60px_rgba(129,236,255,0.6)] transition-all duration-700 active:scale-95 neon-pulse border-none shadow-[0_0_30px_rgba(129,236,255,0.2)]"
              >
                COMEÇAR PROJETO
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
              <h2 className="text-fluid-h2 text-white uppercase">NÚMEROS QUE FALAM</h2>
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
              <h2 className="text-fluid-h3 uppercase whitespace-pre-line text-white">
                ARTEFACTOS DIGITAIS
              </h2>
            </div>
            <div className="space-y-6">
              <div className="group bg-[#1a1a1a] p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-all flex flex-col items-start">
                <MaterialIcon name="public" className="text-primary text-4xl mb-8" />
                <h3 className="font-headline text-3xl font-bold mb-4 uppercase text-white">Desenvolvimento Web</h3>
                <p className="text-neutral-500 font-body text-lg leading-relaxed max-w-prose">Plataformas de alta performance, com design editorial, criadas para converter e cativar.</p>
              </div>
              
              <div className="group bg-[#1a1a1a] p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-all flex flex-col items-start relative">
                <div className="absolute top-12 right-12 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label text-[10px] font-bold uppercase tracking-widest border border-primary/20">EM BREVE</div>
                <MaterialIcon name="smartphone" className="text-primary text-4xl mb-8" />
                <h3 className="font-headline text-3xl font-bold mb-4 uppercase text-white">Expansão Mobile</h3>
                <p className="text-neutral-500 font-body text-lg leading-relaxed max-w-prose">Desenvolvendo experiências nativas para mobile que apagam a linha entre software e arte.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="font-label text-neutral-500 uppercase tracking-[0.4em] text-[10px] mb-3">BENEFÍCIOS</p>
              <h2 className="text-fluid-h3 tracking-tighter text-white uppercase">O QUE GANHA COM P&D</h2>
              <p className="text-neutral-500 font-body text-sm mt-4 max-w-prose mx-auto">Uma presença digital sólida é o activo mais valioso do seu negócio em 2026.</p>
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
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </div>
        </section>


        <section className="py-24 bg-[#0a0a0a] border-y border-white/5" id="pricing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="font-label text-neutral-500 uppercase tracking-[0.4em] text-[10px] mb-3">INVESTIMENTO</p>
              <h2 className="text-fluid-h2 text-white uppercase">ESCOLHA O SEU PLANO</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* PLANO ESSENCIAL */}
              <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-2xl border border-white/5 flex flex-col">
                <div className="mb-8">
                  <MaterialIcon name="web_asset" className="text-primary-container text-4xl mb-6" />
                   <div className="flex flex-col gap-2 mb-4">
                    <h4 className="font-headline text-2xl font-black text-white uppercase tracking-tight">PLANO ESSENCIAL</h4>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-neutral-500 font-label text-[10px] uppercase tracking-widest">
                    <MaterialIcon name="sync" className="text-sm" /> CONTRATO 12 MESES
                  </div>
                  <p className="text-neutral-400 font-body text-sm leading-relaxed">
                    Desenvolvimento completo do website com design moderno e apelativo, suporte de 14 dias e garantia incluída.
                  </p>
                </div>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {[
                    'Desenvolvimento completo do website',
                    'Design moderno e apelativo',
                    'Suporte inicial de 14 dias',
                    'Garantia de 7 dias'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border border-primary-container/50 flex items-center justify-center shrink-0">
                        <MaterialIcon name="check" className="text-primary-container text-[10px]" />
                      </div>
                      <span className="text-neutral-400 font-body text-xs font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => openModal('PLANO ESSENCIAL')}
                  className="w-full py-4 rounded-xl border border-primary-container/40 text-primary-container font-headline font-black text-xs tracking-[0.2em] uppercase hover:bg-primary-container hover:text-black transition-all active:scale-[0.98]"
                >
                  SOLICITAR ORÇAMENTO
                </button>
              </div>

              {/* PLANO COMPLETO */}
              <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-2xl border border-primary-container/30 flex flex-col relative scale-[1.02] shadow-[0_20px_50px_rgba(129,236,255,0.1)]">
                <div className="absolute top-8 right-8 flex flex-col items-end gap-2">
                  <span className="bg-transparent border border-neutral-700 text-neutral-300 px-3 py-1 rounded-full font-label text-[9px] font-bold uppercase tracking-widest">MAIS POPULAR</span>
                  <div className="flex items-center gap-1.5 text-primary-container font-label text-[9px] font-bold uppercase tracking-widest">
                    <MaterialIcon name="bolt" className="text-xs" /> PAGAMENTO ÚNICO
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-full border border-primary-container flex items-center justify-center mb-6">
                    <MaterialIcon name="stars" className="text-primary-container text-2xl" />
                  </div>
                  <h4 className="font-headline text-2xl font-black text-white uppercase tracking-tight mb-4">PLANO COMPLETO</h4>
                  <p className="text-neutral-400 font-body text-sm leading-relaxed">
                    Entrega do website em 7 dias, com design moderno e apelativo, suporte de 14 dias e garantia incluída.
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {[
                    'Entrega do website em 7 dias',
                    'Design moderno e apelativo',
                    'Suporte inicial de 14 dias',
                    'Garantia de 7 dias'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border border-primary-container flex items-center justify-center shrink-0">
                        <MaterialIcon name="check" className="text-primary-container text-[10px]" />
                      </div>
                      <span className="text-neutral-200 font-body text-xs font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => openModal('PLANO COMPLETO')}
                  className="w-full py-5 rounded-xl bg-primary-container text-black font-headline font-black text-xs tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(129,236,255,0.4)] transition-all active:scale-[0.98]"
                >
                  SOLICITAR ORÇAMENTO
                </button>
              </div>

              {/* SUPORTE PREMIUM */}
              <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-2xl border border-white/5 flex flex-col">
                <div className="absolute top-8 right-8">
                  {/* Tag removida para minimalismo */}
                </div>

                <div className="mb-8">
                  <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center mb-6">
                    <MaterialIcon name="security" className="text-primary text-2xl" />
                  </div>
                  <h3 className="font-headline text-2xl font-black text-white uppercase tracking-tight mb-4">SUPORTE PREMIUM</h3>
                  <p className="text-neutral-500 font-body text-sm leading-relaxed max-w-prose">
                    Suporte prioritário, backups regulares, segurança avançada e optimização contínua do seu projecto.
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {[
                    'Suporte de 1 mês (resposta 6h-24h)',
                    'Backups regulares automáticos',
                    'Segurança avançada',
                    'Optimização contínua',
                    'Garantia de 14 dias'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center shrink-0">
                        <MaterialIcon name="check" className="text-primary text-[10px]" />
                      </div>
                      <span className="text-neutral-500 font-body text-xs font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => openModal('SUPORTE PREMIUM')}
                  className="w-full py-4 rounded-xl border border-primary/40 text-primary font-headline font-black text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-black transition-all active:scale-[0.98]"
                >
                  SOLICITAR ORÇAMENTO
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 relative overflow-hidden bg-black flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(129, 236, 255, 0.15) 0%, transparent 60%)' }}></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-fluid-h1 mb-4 text-white uppercase">
                PRONTO PARA <br/>
                <span className="text-primary drop-shadow-[0_0_30px_rgba(129,236,255,0.5)]">TRANSCENDER?</span>
              </h2>
            </motion.div>
            <button 
              onClick={() => openModal()}
              className="group relative inline-flex items-center gap-4 bg-primary-container text-black px-12 py-6 rounded-xl font-headline font-black text-xs tracking-[0.3em] uppercase hover:shadow-[0_10px_40px_rgba(129,236,255,0.5)] transition-all duration-500 active:scale-95 neon-pulse"
            >
              FALAR COM UM ESPECIALISTA
            </button>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-black w-full pt-32 pb-16 px-6 font-body">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center text-primary-container border-2 border-primary-container/30 rounded-lg">
                  <MaterialIcon name="architecture" className="text-xl" />
                </div>
                <h2 className="font-headline font-black text-white text-3xl uppercase tracking-tighter italic">P&D AGENCY</h2>
              </div>
              <p className="text-neutral-500 font-medium leading-relaxed max-w-sm text-lg">
                Arquitetando o futuro da presença digital com precisão obsidiana.
              </p>
            </div>
            
            <div>
              <h4 className="font-headline text-primary-container font-black mb-8 uppercase tracking-[0.3em] text-[11px]">NAVEGAÇÃO</h4>
              <ul className="space-y-4">
                <li><a className="text-neutral-400 hover:text-white transition-colors text-base font-medium" href="#capabilities">Serviços</a></li>
                <li><a className="text-neutral-400 hover:text-white transition-colors text-base font-medium" href="#pricing">Planos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-headline text-primary-container font-black mb-8 uppercase tracking-[0.3em] text-[11px]">SOCIAL</h4>
              <ul className="space-y-4">
                <li><a className="text-neutral-400 hover:text-white transition-colors text-base font-medium" href="#">Twitter</a></li>
                <li><a className="text-neutral-400 hover:text-white transition-colors text-base font-medium" href="#">LinkedIn</a></li>
                <li><a className="text-neutral-400 hover:text-white transition-colors text-base font-medium" href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-neutral-600 text-[10px] uppercase tracking-[0.25em] font-bold">
                © 2026 P&D AGENCY. THE OBSIDIAN ARCHITECT.
              </p>
              <div className="flex gap-4 opacity-30">
                <span className="text-[8px] text-white font-label tracking-widest uppercase">Deployed on Vercel</span>
                <span className="text-[8px] text-white font-label tracking-widest uppercase">Built with Next.js Architecture</span>
              </div>
            </div>
            <div className="flex gap-8">
              <button 
                onClick={() => openLegalModal('terms')}
                className="text-neutral-700 hover:text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
              >
                TERMOS DE USO
              </button>
              <button 
                onClick={() => openLegalModal('privacy')}
                className="text-neutral-700 hover:text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
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
