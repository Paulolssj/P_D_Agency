import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale, Shield, CheckCircle2, FileText, Sparkles, Sun, Moon, ExternalLink, Mail, PhoneCall } from "lucide-react";

export default function TermsPage() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('pd_theme_preference');
    return saved !== null ? saved === 'true' : true;
  });

  const [lang, setLang] = useState('pt');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = lang === 'pt' 
      ? "Termos de Serviço | P&D Agency — Agência Digital & Software"
      : "Terms of Service | P&D Agency — Digital Agency & Software";
  }, [lang]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('pd_theme_preference', String(next));
      return next;
    });
  };

  return (
    <div className={`min-h-screen font-sans antialiased text-left transition-colors duration-500 selection:bg-[#0071E3] selection:text-white ${
      darkMode ? 'bg-[#050A13] text-white' : 'bg-[#FDFBF7] text-neutral-900'
    }`}>
      
      {/* ── HEADER NAVBAR FIXA ── */}
      <header className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-2xl transition-all duration-300 ${
        darkMode ? 'bg-[#050A13]/90 border-neutral-800/80' : 'bg-[#FDFBF7]/90 border-neutral-200'
      }`}>
        <div className="container max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 via-primary to-sky-400 opacity-70 blur-sm group-hover:opacity-100 transition duration-300" />
              <img 
                src="/assets/pd-logo.png" 
                alt="P&D Agency" 
                className="relative h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black tracking-tight text-base sm:text-lg uppercase leading-none">
                P&D <span className="text-[#0071E3] dark:text-[#3B82F6]">AGENCY</span>
              </span>
              <span className={`text-[9px] uppercase tracking-[0.25em] font-bold ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Digital & Software
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-full border text-xs font-bold font-headline uppercase tracking-wider transition-all flex items-center gap-2 ${
                darkMode 
                  ? 'bg-neutral-900 border-neutral-700 text-white hover:border-[#0071E3] hover:text-[#3B82F6]' 
                  : 'bg-white border-neutral-300 text-neutral-900 hover:border-[#0071E3] hover:text-[#0071E3] shadow-sm'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === 'pt' ? 'Voltar ao Início' : 'Back to Home'}</span>
            </Link>

            <button
              onClick={toggleTheme}
              title={darkMode ? "Modo Claro" : "Modo Escuro"}
              className={`p-2.5 rounded-full border transition-all flex items-center justify-center cursor-pointer ${
                darkMode ? 'bg-neutral-900 border-neutral-700 text-amber-400 hover:bg-neutral-800' : 'bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100 shadow-sm'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── CONTEÚDO PRINCIPAL DOS TERMOS DE SERVIÇO ── */}
      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0071E3]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/" 
              className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-colors ${
                darkMode ? 'text-neutral-400 hover:text-[#3B82F6]' : 'text-neutral-500 hover:text-[#0071E3]'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Início / Termos de Serviço</span>
            </Link>
          </div>

          {/* Header Card */}
          <div className={`rounded-[32px] p-8 md:p-12 border border-l-[8px] border-l-[#0071E3] shadow-2xl mb-12 relative overflow-hidden backdrop-blur-xl transition-colors duration-300 ${
            darkMode 
              ? 'bg-[#0A101D] border-neutral-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
              : 'bg-white border-neutral-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
          }`}>
            <div className="inline-flex items-center gap-2 bg-[#0071E3]/10 text-[#0071E3] dark:text-[#3B82F6] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-[#0071E3]/20">
              <Scale className="w-4 h-4" />
              <span>Condições Gerais de Prestação de Serviços</span>
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black font-headline uppercase tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}>
              Termos de Serviço
            </h1>

            <p className={`text-sm md:text-base leading-relaxed font-light ${
              darkMode ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              Os presentes Termos e Condições regulam a contratação e prestação dos serviços de engenharia web, desenvolvimento de software, design de interfaces e consultoria digital prestados pela <strong>P&D Agency</strong>.
            </p>

            <div className={`mt-6 pt-6 border-t flex flex-wrap gap-4 text-xs font-medium ${
              darkMode ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
            }`}>
              <span><strong>Última atualização:</strong> Agosto de 2026</span>
              <span>•</span>
              <span><strong>Entidade:</strong> P&D Agency — Agência Digital & Software</span>
            </div>
          </div>

          {/* Seções dos Termos */}
          <div className="space-y-8 text-sm md:text-base leading-relaxed">
            
            {/* 1. Aceitação */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <h2 className={`font-headline font-black text-xl uppercase mb-4 ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao contratar qualquer serviço ou utilizar a plataforma digital da P&D Agency, o Cliente declara ter lido, compreendido e aceite integralmente as presentes Condições Gerais de Serviço. Caso não concorde com algum dos termos, não deverá avançar para a adjudicação dos projetos.
              </p>
            </section>

            {/* 2. Âmbito */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <h2 className={`font-headline font-black text-xl uppercase mb-4 ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>
                2. Âmbito dos Serviços & Personalização
              </h2>
              <p className="mb-3">
                A P&D Agency desenvolve soluções digitais sob medida, incluindo landing pages de alta conversão, websites corporativos multi-página, plataformas e-commerce, sistemas de design de marca e engenharia de software sob consulta.
              </p>
              <p>
                Cada projeto é regido por uma proposta ou adjudicação formal que especifica o âmbito, prazo indicativo, requisitos funcionais e metodologias técnicas aplicáveis.
              </p>
            </section>

            {/* 3. Prazos e Execução */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <h2 className={`font-headline font-black text-xl uppercase mb-4 ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>
                3. Prazos de Entrega & Execução Ágil
              </h2>
              <p>
                Os prazos de execução (tipicamente entre 3 a 21 dias úteis, consoante a complexidade do projeto) contam-se a partir da validação dos requisitos e receção dos conteúdos e acessos indispensáveis fornecidos pelo Cliente. A P&D Agency compromete-se a cumprir os prazos acordados através de metodologias ágeis e controlo rigoroso de qualidade.
              </p>
            </section>

            {/* 4. Propriedade Intelectual */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <h2 className={`font-headline font-black text-xl uppercase mb-4 ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>
                4. Propriedade Intelectual & Direitos de Código
              </h2>
              <p>
                Após a liquidação integral dos valores acordados na proposta, todos os direitos de utilização e exploração sobre o código-fonte final, ativos gráficos e conteúdos entregues são transferidos integralmente para o Cliente. A P&D Agency reserva-se o direito de mencionar o projeto no seu portfólio profissional, salvo acordo expresso em contrário (NDA).
              </p>
            </section>

            {/* 5. Suporte & Garantia */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <h2 className={`font-headline font-black text-xl uppercase mb-4 ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>
                5. Suporte, Garantia Técnica & Manutenção
              </h2>
              <p>
                Todos os projetos entregues incluem período de garantia técnica para correção de anomalias diretamente imputáveis ao desenvolvimento inicial. Serviços de manutenção continuada, alojamento gerido e evolução de funcionalidades são disponibilizados mediante planos de suporte dedicados.
              </p>
            </section>

            {/* Caixa de Contacto Direto */}
            <div className={`p-8 rounded-[28px] border text-center relative overflow-hidden ${
              darkMode 
                ? 'bg-gradient-to-br from-[#0071E3]/20 via-[#0A101D] to-[#0A101D] border-[#0071E3]/40' 
                : 'bg-gradient-to-br from-[#0071E3]/10 via-white to-white border-[#0071E3]/30 shadow-lg'
            }`}>
              <h3 className={`font-headline font-black text-xl uppercase mb-2 ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>
                Dúvidas sobre as Condições de Serviço?
              </h3>
              <p className={`text-xs sm:text-sm mb-6 max-w-md mx-auto ${
                darkMode ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                A nossa equipa está disponível para esclarecer qualquer questão contratual ou técnica antes ou durante o desenvolvimento do seu projeto.
              </p>
              <a 
                href="mailto:pd.agency.digital01@gmail.com?subject=Questao%20Termos%20de%20Servico"
                className="inline-flex items-center gap-2 bg-[#0071E3] hover:bg-[#0077ED] text-white px-6 py-3.5 rounded-full font-headline font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-500/30"
              >
                <Mail className="w-4 h-4" />
                <span>Contactar Departamento Jurídico</span>
              </a>
            </div>

          </div>

        </div>
      </main>

      {/* ── FOOTER DA PÁGINA ── */}
      <footer className={`py-12 border-t text-xs transition-colors duration-500 ${
        darkMode ? 'bg-[#03060C] border-neutral-800/80 text-neutral-400' : 'bg-[#F9F7F2] border-neutral-300 text-neutral-600'
      }`}>
        <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-headline font-bold text-[10px] uppercase tracking-widest text-neutral-500">
            © 2026 P&D Agency — Agência Digital. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold uppercase tracking-wider">
            <Link to="/termos-servico" className="text-[#0071E3] dark:text-[#3B82F6]">Termos de Serviço</Link>
            <Link to="/politica-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link to="/politica-cookies" className="hover:text-primary transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
