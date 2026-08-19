import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, UserCheck, FileText, Lock, AlertCircle, Sun, Moon, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('pd_theme_preference');
    return saved !== null ? saved === 'true' : true;
  });

  const [lang, setLang] = useState('pt');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = lang === 'pt' 
      ? "Política de Privacidade | P&D Agency — Agência Digital & Software"
      : "Privacy Policy | P&D Agency — Digital Agency & Software";
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

      {/* ── CONTEÚDO PRINCIPAL DA POLÍTICA DE PRIVACIDADE ── */}
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
              <span>Início / Política de Privacidade</span>
            </Link>
          </div>

          {/* Header Card */}
          <div className={`rounded-[32px] p-8 md:p-12 border border-l-[8px] border-l-[#0071E3] shadow-2xl mb-12 relative overflow-hidden backdrop-blur-xl transition-colors duration-300 ${
            darkMode 
              ? 'bg-[#0A101D] border-neutral-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
              : 'bg-white border-neutral-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
          }`}>
            <div className="inline-flex items-center gap-2 bg-[#0071E3]/10 text-[#0071E3] dark:text-[#3B82F6] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-[#0071E3]/20">
              <ShieldCheck className="w-4 h-4" />
              <span>RGPD / Regulamento (UE) 2016/679 & Lei n.º 58/2019</span>
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black font-headline uppercase tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}>
              Política de Privacidade
            </h1>

            <p className={`text-sm md:text-base leading-relaxed font-light ${
              darkMode ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              A <strong>P&D Agency</strong> está fortemente empenhada em proteger a sua privacidade e os seus dados pessoais, assegurando elevados padrões de segurança e transparência nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento UE 2016/679) e da Lei n.º 58/2019 de 8 de agosto.
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
            
            {/* 1. Responsável */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-4 font-headline font-black text-xl uppercase">
                <UserCheck className="w-5 h-5 text-[#0071E3] dark:text-[#3B82F6]" />
                <h2 className={darkMode ? 'text-white' : 'text-neutral-900'}>1. Responsável pelo Tratamento dos Dados</h2>
              </div>
              <p className="mb-4">
                A entidade responsável pela recolha e tratamento dos seus dados pessoais é a <strong>P&D Agency</strong>:
              </p>
              
              <div className={`rounded-2xl p-5 border text-xs space-y-2 ${
                darkMode ? 'bg-neutral-950/80 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-800'
              }`}>
                <div><strong>Denominação:</strong> P&D Agency — Agência Digital & Comunicação Personalizada</div>
                <div><strong>Email Oficial:</strong> <a href="mailto:pd.agency.digital01@gmail.com" className="text-[#0071E3] dark:text-[#3B82F6] font-bold hover:underline">pd.agency.digital01@gmail.com</a></div>
                <div><strong>Website Oficial:</strong> <a href="https://pdagencydigital.com" target="_blank" rel="noopener noreferrer" className="text-[#0071E3] dark:text-[#3B82F6] hover:underline">https://pdagencydigital.com</a></div>
                <div><strong>Atividade:</strong> Desenvolvimento Web, Engenharia de Software, Sistemas UI/UX, Consultoria Digital & Branding.</div>
              </div>
            </section>

            {/* 2. Dados Recolhidos */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-4 font-headline font-black text-xl uppercase">
                <FileText className="w-5 h-5 text-[#0071E3] dark:text-[#3B82F6]" />
                <h2 className={darkMode ? 'text-white' : 'text-neutral-900'}>2. Dados Pessoais Recolhidos e Finalidades</h2>
              </div>
              <p className="mb-4">
                Recolhemos apenas os dados estritamente necessários para a prestação dos nossos serviços de consultoria e engenharia de software:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Formulários de Contacto e Pedidos de Proposta:</strong> Nome, endereço de email profissional, número de telefone/WhatsApp, nome da empresa e descrição técnica ou comercial do projeto pretendido.
                </li>
                <li>
                  <strong>Comunicação Direta (Email & WhatsApp):</strong> Histórico de mensagens trocadas para efeitos de orçamentação, esclarecimento de requisitos de software e agendamento de reuniões estratégicas.
                </li>
                <li>
                  <strong>Dados Analíticos de Sessão:</strong> Métricas anónimas de tráfego web recolhidas através de ferramentas analíticas com mascaramento de IP, para monitorização de desempenho e segurança.
                </li>
              </ul>
            </section>

            {/* 3. Fundamento Jurídico */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-4 font-headline font-black text-xl uppercase">
                <Lock className="w-5 h-5 text-[#0071E3] dark:text-[#3B82F6]" />
                <h2 className={darkMode ? 'text-white' : 'text-neutral-900'}>3. Fundamento Jurídico do Tratamento</h2>
              </div>
              <p className="mb-3">Os dados pessoais são tratados ao abrigo dos seguintes fundamentos de licitude:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Diligências pré-contratuais e execução de contrato:</strong> Para elaboração de propostas comerciais, contratos de prestação de serviços de desenvolvimento e suporte técnico continuado.</li>
                <li><strong>Consentimento explícito:</strong> Fornecido pelo utilizador ao submeter o formulário de contacto ou interagir com o agendador de reuniões.</li>
                <li><strong>Cumprimento de obrigações jurídicas:</strong> Faturação e cumprimento da legislação comercial e fiscal portuguesa.</li>
              </ul>
            </section>

            {/* 4. Segurança */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-4 font-headline font-black text-xl uppercase">
                <ShieldCheck className="w-5 h-5 text-[#0071E3] dark:text-[#3B82F6]" />
                <h2 className={darkMode ? 'text-white' : 'text-neutral-900'}>4. Segurança, Partilha e Conservação de Dados</h2>
              </div>
              <p className="mb-3">
                <strong>A P&D Agency nunca comercializa, aluga ou partilha dados pessoais com terceiros para fins de publicidade ou marketing.</strong>
              </p>
              <p className="mb-3">
                Toda a informação trafega sob encriptação SSL/TLS de 256 bits e é armazenada em servidores cloud seguros com controlo de acessos restrito.
              </p>
              <p>
                Os dados são conservados apenas durante o período necessário ao cumprimento das finalidades para as quais foram recolhidos ou pelo prazo exigido por obrigações legais.
              </p>
            </section>

            {/* 5. Seus Direitos */}
            <section className={`rounded-[28px] p-8 border transition-all ${
              darkMode ? 'bg-[#0A101D] border-neutral-800/90 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-4 font-headline font-black text-xl uppercase">
                <AlertCircle className="w-5 h-5 text-[#0071E3] dark:text-[#3B82F6]" />
                <h2 className={darkMode ? 'text-white' : 'text-neutral-900'}>5. Os Seus Direitos (RGPD)</h2>
              </div>
              <p className="mb-3">Enquanto titular dos dados, tem o direito de, a qualquer momento e sem custos:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Aceder</strong> e solicitar cópia de todos os seus dados em posse da agência;</li>
                <li><strong>Retificar</strong> qualquer dado incompleto ou inexato;</li>
                <li><strong>Solicitar a eliminação</strong> definitiva dos seus dados («direito a ser esquecido»);</li>
                <li><strong>Limitar ou opor-se</strong> ao tratamento dos mesmos;</li>
                <li><strong>Apresentar reclamação</strong> junto da autoridade competente em Portugal: <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong> (<a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-[#0071E3] dark:text-[#3B82F6] underline font-bold">www.cnpd.pt</a>).</li>
              </ul>
              
              <div className={`p-5 rounded-2xl border text-xs sm:text-sm ${
                darkMode ? 'bg-neutral-950/80 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-800'
              }`}>
                Para exercer qualquer direito, basta contactar-nos através do email: <a href="mailto:pd.agency.digital01@gmail.com" className="text-[#0071E3] dark:text-[#3B82F6] font-bold hover:underline">pd.agency.digital01@gmail.com</a>.
              </div>
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
            <Link to="/politica-privacidade" className="text-[#0071E3] dark:text-[#3B82F6]">Política de Privacidade</Link>
            <Link to="/politica-cookies" className="hover:text-primary transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
