import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin, Lock, FileText, UserCheck, AlertCircle, Laptop, Globe } from "lucide-react";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Privacidade | P&D Agency — Agência Digital & Software";
  }, []);

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
            <ShieldCheck className="w-4 h-4" />
            <span>RGPD / Regulamento (UE) 2016/679 & Lei n.º 58/2019</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black font-headline uppercase tracking-tight text-white mb-4">
            Política de Privacidade
          </h1>

          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
            A <strong>P&D Agency</strong> está fortemente empenhada em proteger a sua privacidade e os seus dados pessoais, assegurando elevados padrões de segurança e transparência nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento UE 2016/679) e da Lei n.º 58/2019 de 8 de agosto.
          </p>

          <div className="mt-6 pt-6 border-t border-blue-900/30 flex flex-wrap gap-4 text-xs text-neutral-400">
            <span><strong>Última atualização:</strong> Agosto de 2026</span>
            <span>•</span>
            <span><strong>Entidade:</strong> P&D Agency — Agência Digital & Engenharia de Software</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-neutral-300 text-sm md:text-base leading-relaxed">
          
          {/* Section 1: Responsible Entity */}
          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase">
              <UserCheck className="w-5 h-5 text-blue-400" />
              <h2>1. Responsável pelo Tratamento dos Dados</h2>
            </div>
            <p className="mb-4 text-neutral-300">
              A entidade responsável pela recolha e tratamento dos seus dados pessoais é a <strong>P&D Agency</strong>:
            </p>
            
            <div className="bg-black/40 rounded-2xl p-5 border border-white/5 space-y-2">
              <div className="text-xs text-neutral-300 space-y-1.5">
                <div><strong>Denominação:</strong> P&D Agency — Agência Digital & Comunicação Personalizada</div>
                <div><strong>Email Oficial de Contacto:</strong> <a href="mailto:pd.agency.digital01@gmail.com" className="text-blue-400 font-bold hover:underline">pd.agency.digital01@gmail.com</a></div>
                <div><strong>Website Oficial:</strong> <a href="https://p-d-agency.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://p-d-agency.vercel.app</a></div>
                <div><strong>Atividade:</strong> Desenvolvimento Web, Engenharia de Software, Sistemas UI/UX, Consultoria Digital & Branding.</div>
              </div>
            </div>
          </section>

          {/* Section 2: Data Collected */}
          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase">
              <FileText className="w-5 h-5 text-blue-400" />
              <h2>2. Dados Pessoais Recolhidos e Finalidades</h2>
            </div>
            <p className="mb-4 text-neutral-300">
              Recolhemos apenas os dados estritamente necessários para a prestação dos nossos serviços de consultoria e engenharia de software:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-300">
              <li>
                <strong>Formulários de Contacto e Pedidos de Proposta:</strong> Nome, endereço de email profissional, número de telefone/WhatsApp, nome da empresa e descrição técnica ou comercial do projeto pretendido.
              </li>
              <li>
                <strong>Comunicação Direta (Email & WhatsApp):</strong> Histórico de mensagens trocadas para efeitos de orçamentação, esclarecimento de requisitos de software e agendamento de reuniões estratégicas.
              </li>
              <li>
                <strong>Dados Analíticos de Sessão:</strong> Métricas anónimas de tráfego web recolhidas através de ferramentas analíticas com mascaramento de IP, para monitorização de desempenho e segurança contra ataques DDoS.
              </li>
            </ul>
          </section>

          {/* Section 3: Legal Basis */}
          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase">
              <Lock className="w-5 h-5 text-blue-400" />
              <h2>3. Fundamento Jurídico do Tratamento</h2>
            </div>
            <p className="mb-3 text-neutral-300">Os dados pessoais são tratados ao abrigo dos seguintes fundamentos de licitude:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-300">
              <li><strong>Diligências pré-contratuais e execução de contrato:</strong> Para elaboração de propostas comerciais, contratos de prestação de serviços de desenvolvimento e suporte técnico continuado.</li>
              <li><strong>Consentimento explícito:</strong> Fornecido pelo utilizador ao submeter o formulário de contacto ou interagir com o agendador de reuniões.</li>
              <li><strong>Cumprimento de obrigações jurídicas:</strong> Faturação e cumprimento da legislação comercial e fiscal portuguesa.</li>
            </ul>
          </section>

          {/* Section 4: Data Security & Sharing */}
          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <h2>4. Segurança, Partilha e Conservação de Dados</h2>
            </div>
            <p className="mb-3 text-neutral-300">
              <strong>A P&D Agency nunca comercializa, aluga ou partilha dados pessoais com terceiros para fins de publicidade ou marketing.</strong>
            </p>
            <p className="mb-3 text-neutral-300">
              Toda a informação trafega sob encriptação SSL/TLS de 256 bits e é armazenada em servidores cloud seguros com controlo de acessos restrito.
            </p>
            <p className="text-neutral-300">
              Os dados são conservados apenas durante o período necessário ao cumprimento das finalidades para as quais foram recolhidos ou pelo prazo exigido por obrigações legais (como conservação de faturas por 10 anos).
            </p>
          </section>

          {/* Section 5: User Rights */}
          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase">
              <AlertCircle className="w-5 h-5 text-blue-400" />
              <h2>5. Os Seus Direitos (RGPD)</h2>
            </div>
            <p className="mb-3 text-neutral-300">Enquanto titular dos dados, tem o direito de, a qualquer momento e sem custos:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-neutral-300">
              <li><strong>Aceder</strong> e solicitar cópia de todos os seus dados em posse da agência;</li>
              <li><strong>Retificar</strong> qualquer dado incompleto ou inexato;</li>
              <li><strong>Solicitar a eliminação</strong> definitiva dos seus dados («direito a ser esquecido»);</li>
              <li><strong>Limitar ou opor-se</strong> ao tratamento dos mesmos;</li>
              <li><strong>Apresentar reclamação</strong> junto da autoridade competente em Portugal: <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong> (<a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold">www.cnpd.pt</a>).</li>
            </ul>
            <p className="p-4 bg-black/40 rounded-2xl border border-white/5 text-xs md:text-sm text-neutral-300">
              Para exercer qualquer direito, basta contactar-nos através do email: <a href="mailto:pd.agency.digital01@gmail.com" className="text-blue-400 font-bold hover:underline">pd.agency.digital01@gmail.com</a>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
