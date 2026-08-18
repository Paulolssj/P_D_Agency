import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft, CheckCircle2, Shield, Scale, AlertCircle } from "lucide-react";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Termos de Serviço | P&D Agency — Agência Digital & Software";
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
            <Scale className="w-4 h-4" />
            <span>Condições Gerais de Prestação de Serviços</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black font-headline uppercase tracking-tight text-white mb-4">
            Termos de Serviço
          </h1>

          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
            Os presentes Termos e Condições regulam a contratação e prestação dos serviços de engenharia web, desenvolvimento de software, design de interfaces e consultoria digital prestados pela <strong>P&D Agency</strong>.
          </p>

          <div className="mt-6 pt-6 border-t border-blue-900/30 flex flex-wrap gap-4 text-xs text-neutral-400">
            <span><strong>Última atualização:</strong> Agosto de 2026</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-neutral-300 text-sm md:text-base leading-relaxed">
          
          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-white font-bold font-headline text-lg uppercase mb-4">1. Aceitação dos Termos</h2>
            <p className="text-neutral-300">
              Ao contratar qualquer serviço ou utilizar a plataforma digital da P&D Agency, o Cliente declara ter lido, compreendido e aceite integralmente as presentes Condições Gerais de Serviço.
            </p>
          </section>

          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-white font-bold font-headline text-lg uppercase mb-4">2. Âmbito dos Serviços</h2>
            <p className="text-neutral-300">
              A P&D Agency desenvolve soluções de engenharia de software, plataformas web sob medida (React, Next.js, Vite), sistemas de design UI/UX, otimização de performance e consultoria digital. Cada projeto é regido por proposta e especificações técnicas acordadas previamente com o Cliente.
            </p>
          </section>

          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-white font-bold font-headline text-lg uppercase mb-4">3. Prazos e Execução</h2>
            <p className="text-neutral-300">
              Os prazos de entrega são definidos na proposta de projeto e contam-se a partir da validação dos requisitos e receção de todos os conteúdos indispensáveis fornecidos pelo Cliente. A agência compromete-se a cumprir os calendários acordados, aplicando metodologias ágeis e controlo contínuo de qualidade.
            </p>
          </section>

          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-white font-bold font-headline text-lg uppercase mb-4">4. Propriedade Intelectual</h2>
            <p className="text-neutral-300">
              Após a liquidação integral dos valores acordados na proposta, todos os direitos de utilização sobre o código final e ativos digitais entregues são transferidos para o Cliente. A P&D Agency reserva-se o direito de mencionar o projeto no seu portfólio profissional, salvo acordo expresso de confidencialidade (NDA).
            </p>
          </section>

          <section className="bg-[#0B132B] border border-blue-900/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-white font-bold font-headline text-lg uppercase mb-4">5. Suporte, Manutenção e Garantia</h2>
            <p className="text-neutral-300">
              Todos os projetos entregues incluem período de garantia técnica e suporte para correção de eventuais anomalias de software. Serviços de manutenção continuada, evolução de funcionalidades e gestão de infraestrutura são assegurados mediante subscrição de planos de suporte dedicados.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
