import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactModal from '../components/ContactModal';

// ── COMPONENTES AUXILIARES ──

const MaterialIcon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`} data-icon={name}>
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
    <div ref={ref} className="min-w-[280px] snap-center bg-surface-container-low p-6 border-l-2 border-primary-container/20 group hover:border-primary-container transition-all">
      <MaterialIcon name={label === '20+' ? 'hub' : label === '30%' ? 'trending_up' : label === '92%' ? 'verified_user' : 'speed'} className="text-secondary mb-3 block text-xl" />
      <p className="font-headline text-2xl font-bold mb-1">
        {prefix}{count}{suffix}
      </p>
      <p className="text-on-surface-variant font-body text-sm leading-snug">{sub}</p>
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
      <header className="bg-neutral-950/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-outline-variant/20">
        <div className="flex justify-between items-center px-4 py-3 max-w-full mx-auto">
          <div className="flex items-center gap-2">
            <MaterialIcon name="architecture" className="text-white text-xl" />
            <h1 className="text-lg font-black tracking-tighter text-white uppercase font-headline">P&D AGENCY</h1>
          </div>
          <button 
            onClick={() => openModal()}
            className="bg-primary-container text-on-primary px-6 py-2 rounded-xl font-black font-headline text-[10px] tracking-widest hover:brightness-110 transition-all uppercase"
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="font-headline text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-white uppercase"
            >
              CONSTRUÍMOS <br/> 
              <span className="italic font-light text-primary-container">INTERFACES</span> <br/>
              DO FUTURO.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-body text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-medium leading-relaxed opacity-80"
            >
              Elevando negócios através de desenvolvimento web de alto nível e aplicações digitais de próxima geração.
            </motion.p>

            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-14">
              <div className="flex items-center gap-2">
                <span className="font-headline text-2xl font-black text-primary-container">20+</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-neutral-500">marcas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-headline text-2xl font-black text-primary-container">+30%</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-neutral-500">conversão</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-headline text-2xl font-black text-primary-container">92%</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-neutral-500">satisfação</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-stretch max-w-sm mx-auto">
              <button 
                onClick={() => openModal()}
                className="bg-primary-container text-on-primary px-10 py-5 rounded-xl font-headline font-black text-base hover:shadow-[0_10px_40px_rgba(129,236,255,0.3)] transition-all active:scale-[0.98] uppercase tracking-widest"
              >
                COMEÇAR
              </button>
              <button className="border border-white/10 text-white px-10 py-5 rounded-xl font-headline font-black text-base hover:bg-white/5 transition-all active:scale-[0.98] uppercase tracking-widest backdrop-blur-sm">
                VER SERVIÇOS
              </button>
            </div>
          </div>
        </section>

        {/* ── NUMBERS SECTION ── */}
        <section className="py-16 bg-surface-container-lowest border-y border-outline-variant/10">
          <div className="container mx-auto px-4">
            <h3 className="font-headline text-sm font-bold mb-8 tracking-[0.2em] text-on-background uppercase text-center md:text-left opacity-60">NÚMEROS QUE FALAM</h3>
            <div className="flex overflow-x-auto gap-4 hide-scrollbar snap-x snap-mandatory pb-4">
              <Counter value="20+" label="20+" sub="Marcas líderes no mercado confiam na nossa visão." />
              <Counter value="30%" label="30%" sub="Aumento médio de conversão para nossos parceiros." />
              <Counter value="92%" label="92%" sub="Clientes que retornam para novos projetos digitais." />
              <Counter value="7 DIAS" label="7 DIAS" sub="Prazo de entrega médio para MVPs estruturais." />
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES SECTION ── */}
        <section className="py-20 px-4" id="capabilities">
          <div className="container mx-auto">
            <div className="max-w-xl mb-12">
              <h3 className="font-headline text-4xl font-bold mb-4 tracking-tighter uppercase whitespace-pre-line">
                ARTEFACTOS <br/>
                <span className="text-secondary">DIGITAIS</span>
              </h3>
              <p className="text-on-surface-variant text-base font-light">Combinamos tecnologia bruta com design editorial para criar ferramentas que não apenas funcionam, mas definem categorias.</p>
            </div>
            <div className="space-y-4">
              <div className="group relative aspect-[16/9] bg-surface-container overflow-hidden rounded-sm border border-outline-variant/10">
                <img className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" alt="minimalist web interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYgIoNjqPXm_Z42NGd2DpOAxDNuYaBhHPKDqPzZU2ghau3w8z0pCf88x5HgwI1GFIqYHpcjs9d2WW7hpPf0PRO9if07f_VktWFxkvwL1g7iYLOnDsssq1xjD5YBAGk_qRtFmemCDeaNdpPHARCBB5zw8ScNwFjfr55rl3hrtqigf1-J7bkSnPaMcsK5cPbCGGfGNg9tHVUogiKZrpAcY2RVWrxpF9CoKGngc5Hrn7FwY0S-npk-593qt6h3cLDeCfqgc6suc5Gw-7J"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="font-headline text-xl font-bold uppercase">Desenvolvimento Web</h4>
                  <p className="text-primary-container font-label tracking-widest text-[10px] uppercase">Ecossistemas Escaláveis</p>
                </div>
              </div>
              <div className="group relative aspect-[16/9] bg-surface-container overflow-hidden rounded-sm border border-outline-variant/10">
                <img className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" alt="mobile application" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0uLPTZmpM_s73a4xABuDEiDI3Tf1KodJVwew7DeAccfTqOqZD7mrCDVLd6HIUqQRW84ikefac9_fAEJaVQQu16rY3SVsM2uAXTdpOyw03g5vLP_SI0b8ZpccxE0vFV2eVC0-pUnYJRwQg3skK1mPxQtShxAsQuCZHSfjKKAHvg52FktpFeBDNtNmrfjokwQav9M8k6YVx39YQh4D_LEf0T6mn6M-Rx7_KUZva7sJiCff6ydPms7ALI3KhK_u2i9rA5z05aUcGb220"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="font-headline text-xl font-bold uppercase">Expansão Mobile</h4>
                  <p className="text-primary-container font-label tracking-widest text-[10px] uppercase">Experiência Nativa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS SECTION ── */}
        <section className="py-20 bg-surface-container-low border-y border-outline-variant/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="font-headline text-3xl font-bold mb-4 tracking-tight uppercase">O QUE GANHA COM P&D</h3>
              <div className="h-0.5 w-16 bg-primary-container mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
              {[
                { icon: 'visibility', title: 'Visibilidade Online', desc: 'Interfaces otimizadas para visibilidade máxima.' },
                { icon: 'groups', title: 'Alcance e Fluxo', desc: 'Estratégias que guiam o utilizador organicamente.' },
                { icon: 'security', title: 'Confiança Reforçada', desc: 'Design de alta fidelidade e valor real.' },
                { icon: 'loyalty', title: 'Fidelização', desc: 'Experiências fluidas que viram hábito diário.' },
                { icon: 'token', title: 'Reforço da Marca', desc: 'Consistência que solidifica sua identidade.' },
                { icon: 'forum', title: 'Maior Envolvimento', desc: 'Interações que incentivam o diálogo ativo.' }
              ].map((benefit, idx) => (
                <div key={idx} className="flex flex-col items-start gap-3">
                  <MaterialIcon name={benefit.icon} className="text-primary-container text-2xl" />
                  <div>
                    <h4 className="font-headline text-xs font-bold uppercase tracking-tight mb-1">{benefit.title}</h4>
                    <p className="text-on-surface-variant font-light text-[11px] leading-tight">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO SECTION ── */}
        <section className="py-20 bg-background" id="portfolio">
          <div className="container mx-auto px-4">
            <div className="flex items-baseline justify-between mb-12">
              <h3 className="font-headline text-4xl font-extrabold tracking-tighter uppercase">O ARQUIVO</h3>
              <span className="text-primary-container font-label text-[10px] tracking-widest">PROJECTS_002</span>
            </div>
            <div className="space-y-20">
              {[
                { 
                  case: '01', 
                  title: 'NEON LEDGER', 
                  desc: 'Uma plataforma de gestão de ativos criptográficos que prioriza a segurança sem sacrificar a estética brutalista.', 
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNbIBe2Qq2y7s7j__gdXydhb69eb3f3GNGX854JEIA3hw9b4gU9r6aIWrjroGqRcyBqw3Fs5c-owNOYdMg3lRu393zc2tpyKZO4OgIGNXHER1B58qf8iQ29Uzw3QsxLZXvhYBy0kp5uk_3y68KezmQmWq2XgevS9NKVwYol3z71sXq_X0DKLCWkw8EEnw8_Iw8fTieFXAnfjawEnp6Asg2_kCeypTPn3XF7X6ODnpDNXK2J3BNjOEFvAnbUB-bu3joMnfheXI37APf' 
                },
                { 
                  case: '02', 
                  title: 'VELVET VOID', 
                  desc: 'Experiência imersiva de e-commerce para moda vanguardista, utilizando shaders e micro-interações fluidas.', 
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBRfbgrTnJ9TDnoUFfxN9UdG_xnnstaRNqJflWnRphzpOW4CHGv-KhBF9ncbvyPSB-I4Q9fAtBfpDBH6pjTaB0prlf_oyzJ088_uWsIqnHL_XjLd73ufB0kT3h4zQZhpVvSwscn30OnSY0bWRCS5IEoKnjxEy_xAC32gpvlcQHacfNu35wxicnNHgaLfyDb7mIP2xelSL20Y9Xz4a8Skb2Cm_q4Ztonpx9QblSZSHiW547HibvzFuO_owQP4UsBO0XRxZWWQx4LTQH' 
                }
              ].map((project, idx) => (
                <div key={idx} className="flex flex-col gap-6">
                  <div className="overflow-hidden rounded-sm bg-surface-container-high aspect-video border border-outline-variant/10">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={project.title} src={project.img}/>
                  </div>
                  <div>
                    <p className="font-label text-secondary text-[10px] mb-2 tracking-widest uppercase">CASE STUDY // {project.case}</p>
                    <h4 className="font-headline text-2xl font-bold mb-3 uppercase">{project.title}</h4>
                    <p className="text-on-surface-variant text-sm mb-4 font-light leading-relaxed">{project.desc}</p>
                    <button className="text-primary-container font-headline font-bold text-sm flex items-center gap-2 group uppercase tracking-widest transition-all">
                      EXPLORAR <MaterialIcon name="arrow_forward" className="text-sm group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING SECTION ── */}
        <section className="py-20 bg-surface-container-lowest border-y border-outline-variant/10" id="pricing">
          <div className="container mx-auto px-4">
            <h3 className="font-headline text-3xl font-bold mb-10 text-center tracking-tight uppercase">INVESTIMENTO</h3>
            <div className="flex overflow-x-auto gap-4 hide-scrollbar snap-x snap-mandatory pb-6">
              {[
                { 
                  name: 'PLANO ESSENCIAL', 
                  price: '€1.2k', 
                  features: ['UI Design Único', 'Landing Page React', 'Mobile Responsive'],
                  excluded: ['Backend Customizado'] 
                },
                { 
                  name: 'PLANO COMPLETO', 
                  price: '€3.5k', 
                  popular: true,
                  features: ['Branding Digital', 'Aplicação Multi-página', 'CMS Integrado', 'SEO de Elite']
                },
                { 
                  name: 'SUPORTE PREMIUM', 
                  price: '€800', 
                  monthly: true,
                  features: ['Manutenção Prioritária', 'Atualizações Mensais', 'Análise de Dados', 'Aconselhamento 24/7'] 
                }
              ].map((tier, idx) => (
                <div key={idx} className={`min-w-[85%] snap-center p-8 flex flex-col border rounded-sm transition-all ${tier.popular ? 'bg-surface-container-high border-2 border-primary-container relative' : 'bg-surface border-outline-variant/20'}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary px-3 py-1 font-label text-[8px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">MAIS POPULAR</div>
                  )}
                  <h4 className="font-headline text-sm font-bold mb-1 tracking-widest uppercase">{tier.name}</h4>
                  <div className="text-3xl font-bold text-primary-container mb-6 font-headline">
                    {tier.price}
                    <span className="text-xs font-label text-neutral-500">/{tier.monthly ? 'mês' : 'projeto'}</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8 flex-grow font-light text-xs">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <MaterialIcon name="check" className="text-primary-container text-xs" /> {f}
                      </li>
                    ))}
                    {tier.excluded?.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-neutral-600">
                        <MaterialIcon name="close" className="text-xs" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => openModal(tier.name)}
                    className={`w-full py-3 font-headline font-bold text-xs tracking-widest uppercase transition-all ${tier.popular ? 'bg-primary-container text-on-primary hover:shadow-[0_0_20px_rgba(129,236,255,0.4)]' : 'border border-outline-variant hover:bg-surface-container'}`}
                  >
                    {tier.popular ? 'Reservar Agora' : tier.monthly ? 'Contratar' : 'Selecionar'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-24 relative overflow-hidden bg-background">
          <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-headline text-5xl font-bold mb-10 tracking-tighter leading-none uppercase"
            >
              PRONTO PARA <br/><span className="text-primary-container">TRANSCENDER?</span>
            </motion.h3>
            <button 
              onClick={() => openModal()}
              className="group relative inline-flex items-center gap-3 bg-transparent border border-primary-container text-primary-container px-8 py-5 rounded-full font-headline font-bold text-xl hover:bg-primary-container hover:text-on-primary transition-all duration-500"
            >
              FALAR CONNOSCO
              <MaterialIcon name="call_made" className="group-hover:rotate-45 transition-transform text-lg" />
            </button>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-neutral-950 w-full border-t border-neutral-800/20 font-body text-[11px] tracking-wide">
        <div className="px-6 py-12 max-w-7xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="font-headline font-bold text-neutral-100 text-base uppercase">NEON ARCHITECT</h2>
            <p className="text-neutral-500 font-light leading-relaxed max-w-sm">Arquitetando o futuro digital através de precisão técnica e estética disruptiva.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-headline text-cyan-400 font-bold mb-4 uppercase tracking-widest text-[10px]">SERVIÇOS</h4>
              <ul className="space-y-2">
                <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-neutral-500 hover:text-cyan-400 transition-colors">Hero</button></li>
                <li><a className="text-neutral-500 hover:text-cyan-400 transition-colors" href="#capabilities">Capabilities</a></li>
                <li><a className="text-neutral-500 hover:text-cyan-400 transition-colors" href="#portfolio">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-cyan-400 font-bold mb-4 uppercase tracking-widest text-[10px]">AGÊNCIA</h4>
              <ul className="space-y-2">
                <li><a className="text-neutral-500 hover:text-cyan-400 transition-colors" href="#pricing">Investment</a></li>
                <li><a className="text-neutral-500 hover:text-cyan-400 transition-colors" href="#">Privacy</a></li>
                <li><a className="text-neutral-500 hover:text-cyan-400 transition-colors" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 pt-4">
            <h4 className="font-headline text-cyan-400 font-bold mb-2 uppercase tracking-widest text-[10px]">CONTACTO</h4>
            <p className="text-neutral-500">vortex@obsidian.arch</p>
            <div className="flex gap-4">
              <MaterialIcon name="share" className="text-neutral-500 text-lg hover:text-cyan-400 cursor-pointer transition-colors" />
              <MaterialIcon name="alternate_email" className="text-neutral-500 text-lg hover:text-cyan-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="px-6 py-6 border-t border-neutral-800/20 text-center">
          <p className="text-neutral-600 text-[9px] uppercase tracking-tighter">© 2024 NEON ARCHITECT AGENCY. ALL RIGHTS RESERVED.</p>
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
