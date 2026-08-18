import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, ArrowLeft, CheckCircle2, Shield, Settings, AlertCircle, RefreshCw } from "lucide-react";

export default function CookiePolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Cookies | P&D Agency — Agência Digital & Software";
  }, []);

  const resetCookies = () => {
    localStorage.removeItem("pdagency_cookie_consent");
    window.location.reload();
  };

  return (
    <div className="bg-[#070D1A] text-white min-h-screen pt-28 pb-20 font-sans antialiased text-left selection:bg-blue-600 selection:text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-400 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </Link>
        </div>

        {/* Header Card */}
        <div className="bg-[#0B132B] border border-blue-900/40 rounded-3xl p-8 md:p-12 shadow-2xl mb-10 relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
            <Cookie className="w-4 h-4" />
            <span>Diretiva de Privacidade e Comunicações Eletrónicas</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black font-headline uppercase tracking-tight text-white mb-4">
            Política de Cookies
          </h1>

          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
            O website da <strong>P&D Agency</strong> utiliza cookies e tecnologias de armazenamento local para garantir uma navegação fluida, segura e personalizada, memorizar as suas preferências e analisar estatísticas anónimas de utilização.
          </p>

          <div className="mt-6 pt-6 border-t border-blue-900/30 flex flex-wrap gap-4 text-xs text-neutral-400">
            <span><strong>Última atualização:</strong> Agosto de 2026</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-neutral-300 text-sm md:text-base leading-relaxed">
          
          {/* Section 1: What are cookies */}
          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase">
              <Shield className="w-5 h-5 text-blue-400" />
              <h2>1. O que são Cookies?</h2>
            </div>
            <p className="mb-3 text-neutral-300">
              Cookies são pequenos ficheiros de texto armazenados no navegador do seu dispositivo (computador, tablet ou smartphone) quando visita um website. Permitem identificar o dispositivo em visitas futuras, manter as suas opções de tema e idioma, e otimizar a velocidade de carregamento.
            </p>
          </section>

          {/* Section 2: Types of Cookies */}
          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase">
              <Settings className="w-5 h-5 text-blue-400" />
              <h2>2. Que Tipos de Cookies Utilizamos?</h2>
            </div>
            
            <div className="space-y-6">
              
              {/* Essential Cookies */}
              <div className="border border-white/10 rounded-2xl p-5 bg-black/30">
                <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <h3>Cookies Estritamente Necessários (Essenciais)</h3>
                </div>
                <p className="text-xs md:text-sm text-neutral-300 mb-3">
                  Indispensáveis para a navegação básica, funcionamento seguro dos formulários e memorização das escolhas de idioma (PT/EN) e modo de visualização (Dark/Light).
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-white/10 bg-black/40 text-neutral-300">
                    <thead className="bg-neutral-900/80 font-bold text-white">
                      <tr>
                        <th className="p-2.5 border-b border-white/10">Nome</th>
                        <th className="p-2.5 border-b border-white/10">Finalidade</th>
                        <th className="p-2.5 border-b border-white/10">Duração</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="p-2.5 font-mono text-blue-400 font-bold">pdagency_cookie_consent</td>
                        <td className="p-2.5">Armazena a escolha de consentimento de cookies</td>
                        <td className="p-2.5">1 ano</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-mono text-blue-400 font-bold">pd_theme_preference</td>
                        <td className="p-2.5">Memoriza o tema selecionado (Dark / Light)</td>
                        <td className="p-2.5">Sessão</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-white/10 rounded-2xl p-5 bg-black/30">
                <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <h3>Cookies Analíticos e de Desempenho (Opcionais)</h3>
                </div>
                <p className="text-xs md:text-sm text-neutral-300 mb-3">
                  Permitem analisar de forma agregada e anónima o tráfego do website (ex.: páginas de serviços mais consultadas, projetos do portfólio mais vistos), para melhoria contínua da experiência de utilizador.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-white/10 bg-black/40 text-neutral-300">
                    <thead className="bg-neutral-900/80 font-bold text-white">
                      <tr>
                        <th className="p-2.5 border-b border-white/10">Nome</th>
                        <th className="p-2.5 border-b border-white/10">Fornecedor</th>
                        <th className="p-2.5 border-b border-white/10">Finalidade</th>
                        <th className="p-2.5 border-b border-white/10">Duração</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="p-2.5 font-mono text-neutral-200 font-bold">_ga</td>
                        <td className="p-2.5">Google Analytics</td>
                        <td className="p-2.5">Distingue utilizadores únicos de forma anónima</td>
                        <td className="p-2.5">2 anos</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-mono text-neutral-200 font-bold">_ga_*</td>
                        <td className="p-2.5">Google Analytics</td>
                        <td className="p-2.5">Mantém o estado da sessão estatística</td>
                        <td className="p-2.5">2 anos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </section>

          {/* Section 3: Reset Preferences */}
          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase">
              <AlertCircle className="w-5 h-5 text-blue-400" />
              <h2>3. Como Gerir ou Revogar o Consentimento</h2>
            </div>
            <p className="mb-4 text-neutral-300">
              Pode alterar as suas preferências a qualquer momento clicando no botão abaixo:
            </p>
            <div className="mb-6">
              <button
                onClick={resetCookies}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all cursor-pointer shadow-lg hover:shadow-blue-600/30"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Redefinir Preferências de Cookies</span>
              </button>
            </div>
            <p className="text-xs md:text-sm text-neutral-400">
              Também pode configurar o seu navegador (Chrome, Safari, Firefox, Edge) para bloquear ou eliminar cookies a qualquer momento nas respetivas definições de privacidade.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
