import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, Shield, Check, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("pdagency_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("pdagency_cookie_consent", "all");
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("pdagency_cookie_consent", "necessary");
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
          <div>
            <h3 className="font-headline font-bold text-sm uppercase tracking-wider text-white">
              Gestão de Privacidade & Cookies
            </h3>
            <p className="text-neutral-300 text-xs mt-1 leading-relaxed font-light">
              Utilizamos cookies essenciais para o funcionamento seguro do website e cookies analíticos para compreender o tráfego da plataforma.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-neutral-400 mb-4 pl-1">
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

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleAcceptNecessary}
            className="flex-1 px-4 py-2.5 rounded-xl border border-white/15 hover:border-white/30 text-white text-xs font-bold uppercase tracking-wider transition-all hover:bg-white/5 cursor-pointer text-center"
          >
            Só Necessários
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-600/30 cursor-pointer text-center flex items-center justify-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Aceitar Todos</span>
          </button>
        </div>

      </div>
    </div>
  );
}
