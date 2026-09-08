import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, Check, X, Shield, Settings2, Sliders } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  // Granular preference state
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and non-negotiable
    functional: true, // Theme preference & budget calculator state
    analytics: false, // Analytics (none currently installed, default false)
    marketing: false // Advertising (none currently installed, default false)
  });

  useEffect(() => {
    const saved = localStorage.getItem("pdagency_cookie_consent_v2");
    if (!saved) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(saved);
        setPreferences(prev => ({ ...prev, ...parsed }));
      } catch {
        setIsVisible(true);
      }
    }

    const handleReset = () => {
      localStorage.removeItem("pdagency_cookie_consent_v2");
      localStorage.removeItem("pdagency_privacy_notice");
      setIsVisible(true);
      setShowConfig(true);
    };

    window.addEventListener("reset_cookie_consent", handleReset);
    return () => window.removeEventListener("reset_cookie_consent", handleReset);
  }, []);

  const saveConsent = (prefs) => {
    const consentRecord = {
      ...prefs,
      necessary: true,
      timestamp: new Date().toISOString(),
      version: "2026.1"
    };
    localStorage.setItem("pdagency_cookie_consent_v2", JSON.stringify(consentRecord));
    localStorage.setItem("pdagency_privacy_notice", "acknowledged");
    setPreferences(consentRecord);
    setIsVisible(false);
    setShowConfig(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    });
  };

  const handleRejectNonEssential = () => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="Gestão de Consentimento e Privacidade" className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-lg z-50 animate-fadeIn text-left">
      <div className="bg-[#0B132B]/95 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-5 md:p-6 shadow-2xl text-white relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full filter blur-2xl pointer-events-none" />

        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="flex-1 pr-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-1">
              <Shield className="w-3 h-3" />
              <span>RGPD & ePrivacy</span>
            </div>
            <h3 className="font-headline font-bold text-sm uppercase tracking-wider text-white">
              Privacidade & Tecnologias de Armazenamento
            </h3>
            <p className="text-neutral-300 text-xs mt-1 leading-relaxed font-light">
              Utilizamos tecnologias de armazenamento local e cookies estritamente necessários para assegurar o funcionamento da aplicação, estabilidade e memorização do tema. Tecnologias não-essenciais dependem da sua autorização prévia.
            </p>
          </div>
          <button
            type="button"
            onClick={handleRejectNonEssential}
            className="text-neutral-400 hover:text-white transition-colors cursor-pointer p-1"
            aria-label="Rejeitar não-essenciais e fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal/Drawer de Configuração Granular */}
        {showConfig && (
          <div className="my-3 pt-3 border-t border-blue-500/20 space-y-2.5 text-xs text-neutral-300 bg-neutral-950/60 p-3.5 rounded-2xl border">
            <div className="flex items-center justify-between pb-1">
              <span className="font-bold text-white uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-blue-400" />
                Preferências Granulares
              </span>
              <span className="text-[10px] text-neutral-400">Escolha livre e revogável</span>
            </div>

            {/* Categoria 1: Essenciais */}
            <div className="flex items-center justify-between py-1.5 border-b border-neutral-800">
              <div className="pr-3">
                <div className="font-semibold text-white">Estritamente Necessários</div>
                <div className="text-[10px] text-neutral-400">Funcionamento, segurança e registo do consentimento.</div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">
                Sempre Ativo
              </span>
            </div>

            {/* Categoria 2: Funcionais / Preferências */}
            <div className="flex items-center justify-between py-1.5 border-b border-neutral-800">
              <div className="pr-3">
                <div className="font-semibold text-white">Preferências & Funcionais</div>
                <div className="text-[10px] text-neutral-400">Guarda o modo claro/escuro e estado da calculadora de orçamento.</div>
              </div>
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
              />
            </div>

            {/* Categoria 3: Estatística / Analytics */}
            <div className="flex items-center justify-between py-1.5">
              <div className="pr-3">
                <div className="font-semibold text-white">Estatística & Desempenho</div>
                <div className="text-[10px] text-neutral-400">Métricas agregadas anónimas (sem ferramentas ativas de momento).</div>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
              />
            </div>

            <button
              type="button"
              onClick={handleSavePreferences}
              className="w-full mt-2 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
            >
              Guardar Definições Selecionadas
            </button>
          </div>
        )}

        {/* Links para Políticas */}
        <div className="flex items-center justify-between gap-3 pt-2 text-[11px] text-neutral-400 border-t border-neutral-800/80 mb-3">
          <div className="flex items-center gap-2">
            <Link 
              to="/politica-cookies" 
              className="text-blue-400 hover:underline font-medium"
            >
              Política de Cookies
            </Link>
            <span>•</span>
            <Link 
              to="/politica-privacidade" 
              className="text-blue-400 hover:underline font-medium"
            >
              Privacidade (RGPD)
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setShowConfig(!showConfig)}
            className="text-neutral-300 hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer text-[11px] underline"
          >
            <Settings2 className="w-3 h-3 text-blue-400" />
            <span>{showConfig ? "Ocultar Opções" : "Configurar"}</span>
          </button>
        </div>

        {/* 3 Botões Simétricos de Ação */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={handleRejectNonEssential}
            className="py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center border border-neutral-700 active:scale-95"
          >
            Rejeitar Não-Essenciais
          </button>

          <button
            type="button"
            onClick={() => setShowConfig(!showConfig)}
            className="py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center border border-blue-500/30 active:scale-95"
          >
            Configurar
          </button>

          <button
            type="button"
            onClick={handleAcceptAll}
            className="col-span-2 sm:col-span-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 cursor-pointer text-center flex items-center justify-center gap-1.5 active:scale-95"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Aceitar Todos</span>
          </button>
        </div>

      </div>
    </aside>
  );
}
