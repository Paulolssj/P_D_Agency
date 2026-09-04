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
      ? "Política de Cookies & Armazenamento | P&D Agency"
      : "Cookie & Local Storage Policy | P&D Agency";
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
    localStorage.removeItem("pdagency_privacy_notice");
    window.dispatchEvent(new Event("reset_cookie_consent"));
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
                src="/assets/pd-agency-logo.png" 
                alt="P&D Agency" 
                className="relative h-10 w-10 object-contain rounded-xl shadow-md border border-neutral-800 bg-black p-1 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-lg tracking-tight uppercase leading-none">
                P&D Agency
              </span>
              <span className="text-[10px] text-blue-400 font-mono tracking-widest uppercase">
                Digital & Web
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                darkMode 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white' 
                  : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-900 shadow-sm'
              }`}
              aria-label="Alternar Tema"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>
            <Link
              to="/"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-headline uppercase tracking-wider transition-all ${
                darkMode
                  ? 'bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800'
                  : 'bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 shadow-sm'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <main className="container max-w-4xl mx-auto px-6 pt-32 pb-24">
        
        {/* Header da Política */}
        <div className={`p-8 md:p-12 rounded-3xl border mb-12 relative overflow-hidden transition-all duration-300 ${
          darkMode ? 'bg-neutral-900/60 border-neutral-800/80' : 'bg-white border-neutral-200/80 shadow-sm'
        }`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 border bg-blue-500/10 border-blue-500/20 text-blue-400">
            <Cookie className="w-3.5 h-3.5" />
            <span>Lei n.º 41/2004 — Privacidade e Comunicações Eletrónicas (ePrivacy) & RGPD</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-headline font-black uppercase tracking-tight mb-4">
            Política de Cookies & Armazenamento Local
          </h1>

          <p className={`text-sm md:text-base leading-relaxed max-w-2xl font-light ${
            darkMode ? 'text-neutral-300' : 'text-neutral-600'
          }`}>
            Em conformidade com a <strong>Lei n.º 41/2004</strong> (na sua redação atual) e com o <strong>Regulamento (UE) 2016/679 (RGPD)</strong>, este documento esclarece de forma transparente como utilizamos tecnologias de armazenamento local estritamente necessárias para a estabilidade, preferências visuais e navegação no website da <strong>P&D Agency</strong>.
          </p>

          <div className={`mt-6 pt-6 border-t flex flex-wrap gap-4 text-xs ${
            darkMode ? 'border-neutral-800 text-neutral-400' : 'border-neutral-100 text-neutral-500'
          }`}>
            <span><strong>Última atualização:</strong> Agosto de 2026</span>
            <span>•</span>
            <span><strong>Domínio:</strong> pdagencydigital.com</span>
          </div>
        </div>

        {/* Secções */}
        <div className="space-y-8">
          
          {/* 1. O que são */}
          <section className={`p-6 md:p-8 rounded-3xl border transition-all ${
            darkMode ? 'bg-neutral-900/40 border-neutral-800/80' : 'bg-white border-neutral-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-headline font-bold uppercase tracking-wide">
                1. O que são Cookies e Armazenamento Local (LocalStorage)?
              </h2>
            </div>
            <p className={`text-xs md:text-sm leading-relaxed mb-3 ${
              darkMode ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              Cookies e chaves de armazenamento local (<em>localStorage</em>) são pequenas instruções técnicas guardadas pelo seu navegador no seu dispositivo. Permitem que a aplicação web preserve as suas escolhas durante a navegação (como o modo escuro ou o idioma) sem necessidade de consultar bases de dados externas a cada clique.
            </p>
            <p className={`text-xs md:text-sm leading-relaxed font-semibold ${
              darkMode ? 'text-blue-300' : 'text-blue-700'
            }`}>
              A P&D Agency não utiliza cookies de publicidade comportamental ou ferramentas de criação de perfis de utilizadores para venda de anúncios.
            </p>
          </section>

          {/* 2. Tecnologias Efetivamente Utilizadas */}
          <section className={`p-6 md:p-8 rounded-3xl border transition-all ${
            darkMode ? 'bg-neutral-900/40 border-neutral-800/80' : 'bg-white border-neutral-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-headline font-bold uppercase tracking-wide">
                2. Tecnologias Efetivamente Utilizadas
              </h2>
            </div>

            <div className="space-y-4">
              <div className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-neutral-950/80 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
              }`}>
                <div className="flex items-center gap-2 font-bold text-sm mb-2 text-emerald-500">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Armazenamento Estritamente Necessário (Essencial)</span>
                </div>
                <p className={`text-xs mb-3 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Chaves técnicas indispensáveis para o funcionamento da interface, segurança e memorização de preferências.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-neutral-800">
                    <thead className={darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-900'}>
                      <tr>
                        <th className="p-2.5 border-b border-neutral-700 font-bold">Identificador</th>
                        <th className="p-2.5 border-b border-neutral-700 font-bold">Tecnologia</th>
                        <th className="p-2.5 border-b border-neutral-700 font-bold">Finalidade Concreta</th>
                        <th className="p-2.5 border-b border-neutral-700 font-bold">Duração</th>
                      </tr>
                    </thead>
                    <tbody className={darkMode ? 'bg-neutral-950 text-neutral-300' : 'bg-white text-neutral-700'}>
                      <tr className="border-b border-neutral-800">
                        <td className="p-2.5 font-mono text-blue-400 font-bold">pd_theme_preference</td>
                        <td className="p-2.5">LocalStorage</td>
                        <td className="p-2.5">Memoriza a preferência visual de tema (Modo Claro / Modo Escuro)</td>
                        <td className="p-2.5">Persistente (até eliminação pelo utilizador)</td>
                      </tr>
                      <tr className="border-b border-neutral-800">
                        <td className="p-2.5 font-mono text-blue-400 font-bold">pdagency_privacy_notice</td>
                        <td className="p-2.5">LocalStorage</td>
                        <td className="p-2.5">Regista a visualização e fecho do aviso informativo sobre o funcionamento essencial do website</td>
                        <td className="p-2.5">Persistente (até eliminação pelo utilizador)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Limpar Preferências */}
          <section className={`p-6 md:p-8 rounded-3xl border transition-all ${
            darkMode ? 'bg-neutral-900/40 border-neutral-800/80' : 'bg-white border-neutral-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-headline font-bold uppercase tracking-wide">
                3. Como Limpar ou Gerir as Preferências
              </h2>
            </div>
            <p className={`text-xs md:text-sm leading-relaxed mb-4 ${
              darkMode ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              Pode redefinir as preferências locais guardadas no seu dispositivo a qualquer momento clicando no botão abaixo:
            </p>
            <div className="mb-4">
              <button
                onClick={resetCookies}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all cursor-pointer shadow-lg hover:shadow-blue-600/30 active:scale-95"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Limpar Preferências Guardadas</span>
              </button>
            </div>
            <p className={`text-xs ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
              Pode igualmente limpar o histórico, cache e cookies através do menu de Definições / Privacidade do seu navegador web.
            </p>
          </section>

        </div>

      </main>
    </div>
  );
}
