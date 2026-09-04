import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, Check, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem("pdagency_privacy_notice");
    if (!acknowledged) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }

    const handleReset = () => {
      localStorage.removeItem("pdagency_privacy_notice");
      setIsVisible(true);
    };

    window.addEventListener("reset_cookie_consent", handleReset);
    return () => window.removeEventListener("reset_cookie_consent", handleReset);
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem("pdagency_privacy_notice", "acknowledged");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-fadeIn text-left">
      <div className="bg-[#0B132B]/95 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-5 md:p-6 shadow-2xl text-white relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl pointer-events-none" />

        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="flex-1 pr-2">
            <h3 className="font-headline font-bold text-sm uppercase tracking-wider text-white">
              Privacidade & Armazenamento Local
            </h3>
            <p className="text-neutral-300 text-xs mt-1 leading-relaxed font-light">
              Este website utiliza armazenamento local estritamente necessário para o seu funcionamento, incluindo para memorizar as suas preferências e a interação com este aviso. Não utilizamos cookies de publicidade comportamental ou ferramentas de rastreamento para criar perfis de navegação.
            </p>
          </div>
          <button
            type="button"
            onClick={handleAcknowledge}
            className="text-neutral-400 hover:text-white transition-colors cursor-pointer p-1"
            aria-label="Fechar aviso"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2 text-[11px] text-neutral-400 pl-1">
            <Link 
              to="/politica-cookies" 
              className="text-blue-400 hover:underline font-semibold"
            >
              Política de Cookies
            </Link>
            <span>•</span>
            <Link 
              to="/politica-privacidade" 
              className="text-blue-400 hover:underline font-semibold"
            >
              Privacidade
            </Link>
          </div>

          <button
            type="button"
            onClick={handleAcknowledge}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 cursor-pointer text-center flex items-center justify-center gap-1.5 active:scale-95"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Entendido</span>
          </button>
        </div>

      </div>
    </div>
  );
}
