import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Cookie, Shield, Settings, CheckCircle2, RefreshCw, Sun, Moon, AlertCircle } from "lucide-react";

export default function CookiePolicyPage() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('pd_theme_preference');
    return saved !== null ? saved === 'true' : true;
  });

  const [lang, setLang] = useState('pt');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = lang === 'pt' 
      ? "Política de Cookies | P&D Agency — Agência Digital & Software"
      : "Cookie Policy | P&D Agency — Digital Agency & Software";
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

  const resetCookies = () => {
    localStorage.removeItem("pdagency_cookie_consent");
    window.location.reload();
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

      {/* ── CONTEÚDO PRINCIPAL DA POLÍTICA DE COOKIES ── */}
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
              <span>Início / Política de Cookies</span>
            </Link>
          </div>

          {/* Header Card */}
          <div className={`rounded-[32px] p-8 md:p-12 border border-l-[8px] border-l-[#0071E3] shadow-2xl mb-12 relative overflow-hidden backdrop-blur-xl transition-colors duration-300 ${
            darkMode 
              ? 'bg-[#0A101D] border-neutral-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
              : 'bg-white border-neutral-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
          }`}>
            <div className="inline-flex items-center gap-2 bg-[#0071E3]/10 text-[#0071E3] dark:text-[#3B82F6] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-[#0071E3]/20">
              <Cookie className="w-4 h-4" />
              <span>Diretiva de Privacidade e Comunicações Eletrónicas</span>
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black font-headline uppercase tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}>
              Política de Cookies
            </h1>

            <p className={`text-sm md:text-base leading-relaxed font-light ${
              darkMode ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              O website da <strong>P&D Agency</strong> utiliza cookies e tecnologias de armazenamento local para garantir uma navegação fluida, segura e personalizada, memorizar as suas preferências de tema e idioma e analisar estatísticas anónimas de utilização.
            </p>

            <div className={`mt-6 pt-6 border-t flex flex-wrap gap-4 text-xs font-medium ${
              darkMode ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
            }`}>
              <span><strong>Última atualização:</strong> Agosto de 2026</span>
              <span>•</span>
              <span><strong>Entidade:</strong> P&D Agency — Agência Digital & Software</span>
            </div>
          </div>

          {/* Seções da Política */}
          <div className="space-y-8 text-sm md:text-base leading-relaxed">
            
            {/* 1. O que são */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-4 font-headline font-black text-xl uppercase">
                <Shield className="w-5 h-5 text-[#0071E3] dark:text-[#3B82F6]" />
                <h2 className={darkMode ? 'text-white' : 'text-neutral-900'}>1. O que são Cookies?</h2>
              </div>
              <p>
                Cookies são pequenos ficheiros de texto armazenados no navegador do seu dispositivo (computador, tablet ou smartphone) quando visita um website. Permitem identificar o dispositivo em visitas futuras, manter as suas opções de tema e idioma, e otimizar a velocidade de carregamento da aplicação web.
              </p>
            </section>

            {/* 2. Tipos de Cookies */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-6 font-headline font-black text-xl uppercase">
                <Settings className="w-5 h-5 text-[#0071E3] dark:text-[#3B82F6]" />
                <h2 className={darkMode ? 'text-white' : 'text-neutral-900'}>2. Que Tipos de Cookies Utilizamos?</h2>
              </div>
              
              <div className="space-y-6">
                
                {/* Cookies Essenciais */}
                <div className={`border rounded-2xl p-5 ${
                  darkMode ? 'border-neutral-800 bg-neutral-950/60' : 'border-neutral-200 bg-neutral-50/80'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-base mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <h3 className={darkMode ? 'text-white' : 'text-neutral-900'}>Cookies Estritamente Necessários (Essenciais)</h3>
                  </div>
                  <p className={`text-xs md:text-sm mb-4 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    Indispensáveis para a navegação básica, funcionamento seguro dos formulários e memorização das escolhas de idioma (PT/EN) e modo de visualização (Dark/Light).
                  </p>
                  <div className="overflow-x-auto">
                    <table className={`w-full text-left text-xs border rounded-xl overflow-hidden ${
                      darkMode ? 'border-neutral-800 bg-neutral-900 text-neutral-300' : 'border-neutral-200 bg-white text-neutral-700'
                    }`}>
                      <thead className={`font-headline font-bold uppercase text-[10px] tracking-wider ${
                        darkMode ? 'bg-neutral-950 text-neutral-300 border-b border-neutral-800' : 'bg-neutral-100 text-neutral-800 border-b border-neutral-200'
                      }`}>
                        <tr>
                          <th className="p-3">Nome</th>
                          <th className="p-3">Finalidade</th>
                          <th className="p-3">Duração</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={`border-b ${darkMode ? 'border-neutral-800' : 'border-neutral-100'}`}>
                          <td className="p-3 font-mono text-[#0071E3] dark:text-[#3B82F6] font-bold">pdagency_cookie_consent</td>
                          <td className="p-3">Armazena o estado de consentimento do banner de cookies</td>
                          <td className="p-3">1 ano</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono text-[#0071E3] dark:text-[#3B82F6] font-bold">pd_theme_preference</td>
                          <td className="p-3">Memoriza o tema selecionado (Escuro / Claro)</td>
                          <td className="p-3">Sessão / Persistente</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cookies Analíticos */}
                <div className={`border rounded-2xl p-5 ${
                  darkMode ? 'border-neutral-800 bg-neutral-950/60' : 'border-neutral-200 bg-neutral-50/80'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-base mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0071E3] dark:text-[#3B82F6]" />
                    <h3 className={darkMode ? 'text-white' : 'text-neutral-900'}>Cookies Analíticos & Desempenho (Opcionais)</h3>
                  </div>
                  <p className={`text-xs md:text-sm mb-4 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    Permitem analisar de forma agregada e anónima o tráfego do website (ex.: páginas mais consultadas, projetos mais vistos), para melhoria contínua da experiência do utilizador.
                  </p>
                  <div className="overflow-x-auto">
                    <table className={`w-full text-left text-xs border rounded-xl overflow-hidden ${
                      darkMode ? 'border-neutral-800 bg-neutral-900 text-neutral-300' : 'border-neutral-200 bg-white text-neutral-700'
                    }`}>
                      <thead className={`font-headline font-bold uppercase text-[10px] tracking-wider ${
                        darkMode ? 'bg-neutral-950 text-neutral-300 border-b border-neutral-800' : 'bg-neutral-100 text-neutral-800 border-b border-neutral-200'
                      }`}>
                        <tr>
                          <th className="p-3">Nome</th>
                          <th className="p-3">Fornecedor</th>
                          <th className="p-3">Finalidade</th>
                          <th className="p-3">Duração</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={`border-b ${darkMode ? 'border-neutral-800' : 'border-neutral-100'}`}>
                          <td className="p-3 font-mono font-bold">_ga</td>
                          <td className="p-3">Google Analytics</td>
                          <td className="p-3">Distingue utilizadores únicos de forma anónima</td>
                          <td className="p-3">2 anos</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold">_ga_*</td>
                          <td className="p-3">Google Analytics</td>
                          <td className="p-3">Mantém o estado da sessão estatística</td>
                          <td className="p-3">2 anos</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </section>

            {/* 3. Gerir / Revogar */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-4 font-headline font-black text-xl uppercase">
                <AlertCircle className="w-5 h-5 text-[#0071E3] dark:text-[#3B82F6]" />
                <h2 className={darkMode ? 'text-white' : 'text-neutral-900'}>3. Como Gerir ou Redefinir Preferências</h2>
              </div>
              <p className="mb-6">
                Pode redefinir a sua escolha de cookies a qualquer momento clicando no botão abaixo para reativar a barra de consentimento:
              </p>
              
              <div className="mb-6">
                <button
                  onClick={resetCookies}
                  className="inline-flex items-center gap-2 bg-[#0071E3] hover:bg-[#0077ED] text-white font-headline font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-lg hover:shadow-blue-500/30 active:scale-95"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Redefinir Preferências de Cookies</span>
                </button>
              </div>

              <p className={`text-xs sm:text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Pode também configurar o seu navegador de internet (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge) para bloquear ou eliminar cookies a qualquer momento através das definições de privacidade do browser.
              </p>
            </section>

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
            <Link to="/termos-servico" className="hover:text-primary transition-colors">Termos de Serviço</Link>
            <Link to="/politica-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link to="/politica-cookies" className="text-[#0071E3] dark:text-[#3B82F6]">Política de Cookies</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
