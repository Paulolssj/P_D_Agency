import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Lock, 
  FileText, 
  UserCheck, 
  AlertCircle, 
  Laptop, 
  Globe, 
  KeyRound,
  CheckCircle2,
  Layers,
  Scale,
  Code2,
  Database,
  Cpu,
  Building2,
  HelpCircle
} from "lucide-react";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Privacidade | P&D Agency";
  }, []);

  return (
    <div className="bg-[#060913] text-neutral-100 min-h-screen pt-28 pb-20 text-left font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ── HEADER NAVBAR FIXA COM LOGO ── */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-neutral-800/80 bg-[#060913]/90 backdrop-blur-2xl transition-all duration-300">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 opacity-70 blur-sm group-hover:opacity-100 transition duration-300" />
              <img 
                src="/assets/pd-agency-logo.png" 
                alt="P&D Agency" 
                className="relative h-10 w-10 object-contain rounded-xl shadow-md border border-neutral-800 bg-black p-1 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black tracking-tight text-base sm:text-lg uppercase leading-none text-white">
                P&D <span className="text-blue-500">AGENCY</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-neutral-400">
                Digital & Software
              </span>
            </div>
          </Link>

          <Link 
            to="/" 
            className="px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900 text-white hover:border-blue-500 hover:text-blue-400 text-xs font-bold font-headline uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Início</span>
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
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

        {/* Header Card (Layer 1 - Summary & Legal Identity) */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl mb-10 relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 left-0 w-2.5 h-full bg-blue-600" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Regulamento (UE) 2016/679 (RGPD) & Lei n.º 58/2019</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-headline font-black uppercase tracking-tight text-white mb-4">
            Política de Privacidade
          </h1>

          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-3xl font-light">
            A presente Política de Privacidade regula o tratamento de dados pessoais no âmbito da presença digital e serviços prestados sob a marca <strong>P&D Agency</strong> (disponível em <a href="https://pdagencydigital.com/" className="text-blue-400 underline font-medium">pdagencydigital.com</a>), em estrita conformidade com o Regulamento Geral sobre a Proteção de Dados (Regulamento UE 2016/679 - RGPD) e a Lei n.º 58/2019.
          </p>

          <div className="mt-6 pt-6 border-t border-neutral-800 flex flex-wrap gap-4 text-xs text-neutral-400">
            <span><strong>Última atualização:</strong> Agosto de 2026</span>
            <span>•</span>
            <span><strong>Responsável:</strong> Paulo Samuel Santos Gomes (P&D Agency)</span>
            <span>•</span>
            <span><strong>NIF:</strong> 267428430</span>
            <span>•</span>
            <span><strong>Estrutura:</strong> Transparência em Camadas (RGPD)</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-neutral-300 text-sm md:text-base leading-relaxed">
          
          {/* Section 1: Identification & Contacts */}
          <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-white font-bold font-headline text-lg uppercase border-b border-neutral-800 pb-4">
              <UserCheck className="w-5 h-5 text-blue-500" />
              <h2>1. Identificação do Responsável pelo Tratamento</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-neutral-950/80 rounded-2xl p-5 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 font-bold text-white text-sm uppercase tracking-wide">
                  <Building2 className="w-4 h-4 text-blue-500" />
                  <span>Responsável pelo Tratamento</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  <strong>Paulo Samuel Santos Gomes</strong>, titular da atividade e operador da denominação comercial e marca <strong>P&D Agency — Estratégia Digital & Desenvolvimento Web</strong>.
                </p>
                <div className="pt-2 text-xs text-neutral-300 space-y-1.5">
                  <div><strong>NIF:</strong> 267428430</div>
                  <div><strong>Morada Profissional:</strong> Rua de São Brás 60, 3105-104 Ilha, Portugal</div>
                  <div><strong>Website Oficial:</strong> <a href="https://pdagencydigital.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold hover:underline">pdagencydigital.com</a></div>
                  <div><strong>E-mail de Contacto:</strong> <a href="mailto:geral@pdagencydigital.com" className="text-blue-400 font-bold hover:underline">geral@pdagencydigital.com</a></div>
                </div>
              </div>

              <div className="bg-neutral-950/80 rounded-2xl p-5 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 font-bold text-white text-sm uppercase tracking-wide">
                  <Laptop className="w-4 h-4 text-blue-500" />
                  <span>Âmbito da Atividade</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Desenvolvimento de websites e aplicações web de alta conversão, arquitetura de software sob medida, design UI/UX e identidade de marca, estratégias de marketing digital, gestão de presença em redes sociais, otimização de performance e consultoria digital.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-400 leading-relaxed mb-3">
              <strong>Encarregado de Proteção de Dados (DPO):</strong> A P&D Agency não designou um Encarregado de Proteção de Dados, por não se encontrar, à data, numa situação que determine obrigatoriamente essa designação nos termos do Artigo 37.º do RGPD. Para qualquer esclarecimento relativo aos seus dados pessoais, contacte diretamente o responsável pelo tratamento através de <a href="mailto:geral@pdagencydigital.com" className="text-blue-400 underline font-bold">geral@pdagencydigital.com</a>.
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-300 leading-relaxed">
              <strong className="text-white block mb-1">Qualificação como Responsável vs. Subcontratante:</strong>
              Relativamente aos dados pessoais recolhidos diretamente no presente website ou para a gestão da relação comercial e contratual com os seus clientes, a P&D Agency atua na qualidade de <strong>Responsável pelo Tratamento</strong>. Quando a P&D Agency presta serviços de suporte, desenvolvimento web, tráfego ou gestão de redes sociais em contas, servidores e plataformas sob a titularidade dos seus clientes, atua tipicamente na qualidade de <strong>Subcontratante</strong> (nos termos do Artigo 28.º do RGPD), sendo essas operações estritamente reguladas pelas instruções do cliente e pelo respetivo acordo de tratamento de dados (DPA) aplicável.
            </div>
          </section>

          {/* Section 2: Origin of Data */}
          <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase border-b border-neutral-800 pb-4">
              <Database className="w-5 h-5 text-blue-500" />
              <h2>2. Origem dos Dados Pessoais</h2>
            </div>
            
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed mb-3">
              Os dados pessoais tratados pela P&D Agency são normalmente recolhidos <strong>diretamente junto do titular</strong> através dos seguintes canais:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
              <li className="p-3 bg-neutral-950/80 rounded-xl border border-neutral-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Formulários de contacto, pedido de proposta ou calculadora de orçamento no website;</span>
              </li>
              <li className="p-3 bg-neutral-950/80 rounded-xl border border-neutral-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Comunicações diretas iniciadas pelo utilizador via e-mail ou WhatsApp;</span>
              </li>
              <li className="p-3 bg-neutral-950/80 rounded-xl border border-neutral-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Reuniões de levantamento de requisitos, diagnóstico técnico ou sessões de consultoria;</span>
              </li>
              <li className="p-3 bg-neutral-950/80 rounded-xl border border-neutral-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Formalização e celebração de contratos de prestação de serviços digitais, marketing ou design.</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Structured Processing Matrix */}
          <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase border-b border-neutral-800 pb-4">
              <Layers className="w-5 h-5 text-blue-500" />
              <h2>3. Finalidades, Bases Jurídicas e Prazos de Conservação</h2>
            </div>
            
            <p className="mb-6 text-xs md:text-sm text-neutral-300">
              Apresentamos a matriz de conformidade detalhada com critérios objetivos de conservação para cada finalidade de tratamento:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-neutral-800">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-neutral-950 text-white font-bold uppercase text-[11px] tracking-wider border-b border-neutral-800">
                    <th className="p-4 w-1/4">Finalidade do Tratamento</th>
                    <th className="p-4 w-1/4">Categorias de Dados</th>
                    <th className="p-4 w-1/4">Fundamento Jurídico (RGPD)</th>
                    <th className="p-4 w-1/4">Prazo Objetivo de Conservação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 bg-neutral-900/40">
                  {/* Row 1: Propostas & Orçamentos */}
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="p-4 font-semibold text-white align-top">
                      1. Análise de Pedidos de Proposta & Orçamentos de Projeto
                    </td>
                    <td className="p-4 text-neutral-300 align-top leading-relaxed">
                      Nome, e-mail, telefone/WhatsApp, tipo de projeto pretendido, estimativa de investimento e detalhes das especificações solicitadas.
                    </td>
                    <td className="p-4 text-neutral-200 align-top leading-relaxed">
                      <span className="font-bold text-blue-400">Diligências Pré-Contratuais</span><br />
                      (Artigo 6.º, n.º 1, alínea b do RGPD) — a pedido do próprio titular dos dados.
                    </td>
                    <td className="p-4 text-neutral-300 align-top leading-relaxed">
                      Durante o período de preparação da proposta comercial; quando não resulte em contrato, são conservados por <strong>até 12 meses após o último contacto</strong>, salvo necessidade de conservação por período superior para exercício ou defesa de direitos.
                    </td>
                  </tr>

                  {/* Row 2: Execução de Serviços de Desenvolvimento */}
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="p-4 font-semibold text-white align-top">
                      2. Execução de Contratos de Desenvolvimento & Suporte Técnico
                    </td>
                    <td className="p-4 text-neutral-300 align-top leading-relaxed">
                      Dados de identificação dos representantes e interlocutores, credenciais técnicas de acesso autorizadas para desenvolvimento, histórico de pedidos e registos de assistência.
                    </td>
                    <td className="p-4 text-neutral-200 align-top leading-relaxed">
                      <span className="font-bold text-blue-400">Execução de Contrato</span><br />
                      (Artigo 6.º, n.º 1, alínea b do RGPD) — execução do acordo de desenvolvimento e prestação de serviços.
                    </td>
                    <td className="p-4 text-neutral-300 align-top leading-relaxed">
                      Durante a vigência do contrato e pelos prazos legais subsequentes de responsabilidade contratual e garantia técnica.
                    </td>
                  </tr>

                  {/* Row 3: Marketing Digital & Redes Sociais */}
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="p-4 font-semibold text-white align-top">
                      3. Gestão de Marketing Digital, Campanhas & Redes Sociais
                    </td>
                    <td className="p-4 text-neutral-300 align-top leading-relaxed">
                      Dados de identificação e contacto profissional dos interlocutores do cliente, métricas agregadas de campanhas publicitárias e materiais ou conteúdos fornecidos pelo cliente sob sua responsabilidade para veiculação.
                    </td>
                    <td className="p-4 text-neutral-200 align-top leading-relaxed">
                      <span className="font-bold text-blue-400">Execução de Contrato</span><br />
                      (Artigo 6.º, n.º 1, alínea b do RGPD) no âmbito da relação com o cliente; e, no que respeite a conteúdos específicos de terceiros ou testemunhos divulgados pela P&D Agency, o respetivo consentimento prévio ou autorização contratual.
                    </td>
                    <td className="p-4 text-neutral-300 align-top leading-relaxed">
                      Durante a vigência do contrato de prestação de serviços de marketing/redes sociais e pelos prazos legais de responsabilidade subsequentes.
                    </td>
                  </tr>

                  {/* Row 4: Faturação */}
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="p-4 font-semibold text-white align-top">
                      4. Faturação e Cumprimento de Obrigações Fiscais
                    </td>
                    <td className="p-4 text-neutral-300 align-top leading-relaxed">
                      Nome ou denominação social, Número de Identificação Fiscal (NIF), morada fiscal e dados da transação comercial.
                    </td>
                    <td className="p-4 text-neutral-200 align-top leading-relaxed">
                      <span className="font-bold text-blue-400">Cumprimento de Obrigação Jurídica</span><br />
                      (Artigo 6.º, n.º 1, alínea c do RGPD) — cumprimento das leis fiscais e comerciais portuguesas.
                    </td>
                    <td className="p-4 text-neutral-300 align-top leading-relaxed">
                      Pelos prazos de conservação legalmente aplicáveis às obrigações fiscais, contabilísticas e comerciais vigentes em Portugal.
                    </td>
                  </tr>

                  {/* Row 5: Segurança */}
                  <tr className="hover:bg-neutral-800/50 transition-colors">
                    <td className="p-4 font-semibold text-white align-top">
                      5. Segurança Técnica e Estabilidade da Infraestrutura
                    </td>
                    <td className="p-4 text-neutral-300 align-top leading-relaxed">
                      Endereço IP, registos técnicos de pedidos HTTP, cabeçalhos de segurança e tipo de dispositivo/navegador.
                    </td>
                    <td className="p-4 text-neutral-200 align-top leading-relaxed">
                      <span className="font-bold text-blue-400">Interesse Legítimo</span><br />
                      (Artigo 6.º, n.º 1, alínea f do RGPD) — salvaguarda da integridade da infraestrutura contra acessos indevidos e ciberataques.
                    </td>
                    <td className="p-4 text-neutral-300 align-top leading-relaxed">
                      Pelo período estritamente necessário à deteção, investigação e mitigação de incidentes de segurança, de acordo com as políticas e configurações aplicáveis da infraestrutura utilizada.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Recipients & Processors */}
          <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-white font-bold font-headline text-lg uppercase border-b border-neutral-800 pb-4">
              <Laptop className="w-5 h-5 text-blue-500" />
              <h2>4. Destinatários dos Dados Pessoais</h2>
            </div>
            
            <p className="mb-4 text-xs md:text-sm text-neutral-300 leading-relaxed">
              Para o fornecimento da plataforma digital, gestão das comunicações e cumprimento legal, os dados podem ser comunicados ou acedidos pelas seguintes entidades:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs">
              <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>Alojamento & Infraestrutura Edge</span>
                </div>
                <p className="text-neutral-400">
                  <strong>Vercel Inc.</strong> — Prestador de serviços de alojamento e infraestrutura de distribuição da aplicação web. Poderá tratar dados técnicos (como endereços IP e registos de servidor) nos termos aplicáveis à prestação e segurança da infraestrutura.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>Correio Eletrónico & Comunicações</span>
                </div>
                <p className="text-neutral-400">
                  <strong>Google Ireland Limited</strong> — Prestador de serviços de correio eletrónico e gestão de comunicações para receção e resposta segura a mensagens e propostas profissionais (com infraestrutura global suportada pela Google LLC).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>Canais de Comunicação Direta</span>
                </div>
                <p className="text-neutral-400">
                  <strong>Meta Platforms Ireland Ltd. (WhatsApp)</strong> — Canal de mensagens instantâneas ativado por escolha do utilizador através das ligações disponibilizadas no website.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>Contabilidade & Obrigação Legal</span>
                </div>
                <p className="text-neutral-400">
                  Serviços de contabilidade profissional e Autoridade Tributária e Aduaneira (AT), estritamente para cumprimento das obrigações fiscais e emissão legal de faturas.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-200 leading-relaxed">
              <strong>Compromisso de Confidencialidade:</strong> Os dados pessoais não serão vendidos ou utilizados para fins de publicidade de terceiros. Poderão ser comunicados ou disponibilizados aos prestadores e entidades identificados nesta política, quando tal seja estritamente necessário para as finalidades descritas ou para cumprimento de obrigações legais.
            </div>
          </section>

          {/* Section 5: Automated Decision Making & Profiling */}
          <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase border-b border-neutral-800 pb-4">
              <Cpu className="w-5 h-5 text-blue-500" />
              <h2>5. Decisões Automatizadas e Definição de Perfis (Profiling)</h2>
            </div>
            
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
              A P&D Agency <strong>não realiza decisões exclusivamente automatizadas</strong> que produzam efeitos jurídicos ou efeitos de impacto similar significativo sobre os titulares dos dados, nem realiza operações de definição de perfis (<em>profiling</em>) para efeitos de tomada de decisão automatizada. Todos os pedidos e comunicações são analisados e tratados com intervenção humana qualificada.
            </p>
          </section>

          {/* Section 6: Consent Clarification */}
          <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase border-b border-neutral-800 pb-4">
              <HelpCircle className="w-5 h-5 text-blue-500" />
              <h2>6. Tratamentos Baseados em Consentimento e Sua Retirada</h2>
            </div>
            
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
              Nos casos em que determinado tratamento de dados pessoais se baseie no consentimento do titular, este será recolhido de forma livre, específica, informada e inequívoca. O titular dos dados tem o <strong>direito de retirar o seu consentimento a qualquer momento</strong>, através de simples comunicação para <a href="mailto:geral@pdagencydigital.com" className="text-blue-400 underline font-bold">geral@pdagencydigital.com</a>, sem que essa revogação comprometa a licitude do tratamento efetuado com base no consentimento previamente prestado.
            </p>
          </section>

          {/* Section 7: International Transfers */}
          <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase border-b border-neutral-800 pb-4">
              <Globe className="w-5 h-5 text-blue-500" />
              <h2>7. Transferências Internacionais de Dados</h2>
            </div>
            
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
              Determinados prestadores tecnológicos utilizados (como a Vercel Inc. ou a infraestrutura global da Google LLC associada aos serviços da Google Ireland Limited) podem envolver o tratamento ou acesso a dados fora do Espaço Económico Europeu (EEE). Quando aplicável, essas transferências são realizadas com recurso a um mecanismo válido previsto no Capítulo V do RGPD, designadamente uma decisão de adequação da Comissão Europeia (como o <em>EU-US Data Privacy Framework</em>) ou, quando necessário, Cláusulas Contratuais-Tipo (<em>Standard Contractual Clauses - SCCs</em>), sem prejuízo de outras garantias legalmente admissíveis.
            </p>
          </section>

          {/* Section 8: Security Measures */}
          <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase border-b border-neutral-800 pb-4">
              <KeyRound className="w-5 h-5 text-blue-500" />
              <h2>8. Medidas de Segurança Técnicas e Organizativas</h2>
            </div>
            
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed mb-4">
              Nos termos do Artigo 32.º do RGPD, são implementadas salvaguardas técnicas e operacionais para proteger a integridade e confidencialidade dos dados:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-neutral-300">
              <li className="p-3 bg-neutral-950/80 rounded-xl border border-neutral-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Encriptação TLS/HTTPS:</strong> Todo o tráfego é transmitido através de canais encriptados com certificados de segurança modernos.</span>
              </li>
              <li className="p-3 bg-neutral-950/80 rounded-xl border border-neutral-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Minimização de Dados:</strong> Ausência de bases de dados expostas publicamente ou armazenamento desnecessário de formulários em servidores intermédios.</span>
              </li>
              <li className="p-3 bg-neutral-950/80 rounded-xl border border-neutral-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Autenticação de Dois Fatores (2FA):</strong> Controlo estrito de acessos aos repositórios de código e serviços operacionais.</span>
              </li>
              <li className="p-3 bg-neutral-950/80 rounded-xl border border-neutral-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Sigilo e Confidencialidade:</strong> Compromisso deontológico e contratual de proteção das informações estratégicas e técnicas dos clientes.</span>
              </li>
              <li className="p-3 bg-neutral-950/80 rounded-xl border border-neutral-800 flex items-start gap-2 md:col-span-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Acessos Técnicos de Clientes:</strong> A P&D Agency não solicita, por regra, palavras-passe pessoais de clientes. Quando seja estritamente necessário acesso a sistemas ou servidores de clientes para implementação técnica, devem ser privilegiados mecanismos de acesso delegado, contas dedicadas, tokens/API keys temporários ou canais cifrados com capacidade de revogação imediata após a conclusão dos trabalhos.</span>
              </li>
            </ul>
          </section>

          {/* Section 9: Rights Matrix */}
          <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-white font-bold font-headline text-lg uppercase border-b border-neutral-800 pb-4">
              <Scale className="w-5 h-5 text-blue-500" />
              <h2>9. Direitos dos Titulares e Como Exercê-los</h2>
            </div>
            
            <p className="mb-4 text-xs md:text-sm text-neutral-300">
              Nos termos dos Artigos 15.º a 22.º do RGPD, assistem-lhe os seguintes direitos relativamente aos seus dados pessoais:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-neutral-800 mb-4">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-neutral-950 text-white font-bold uppercase text-[11px] tracking-wider border-b border-neutral-800">
                    <th className="p-3.5 w-1/3">Direito do Titular</th>
                    <th className="p-3.5 w-2/3">Significado e Aplicação Prática</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 bg-neutral-900/40">
                  <tr className="hover:bg-neutral-800/50">
                    <td className="p-3.5 font-bold text-white">Direito de Acesso (Art. 15.º)</td>
                    <td className="p-3.5 text-neutral-300 leading-relaxed">Confirmar se os seus dados são tratados e solicitar acesso ou cópia das informações tratadas.</td>
                  </tr>
                  <tr className="hover:bg-neutral-800/50">
                    <td className="p-3.5 font-bold text-white">Direito de Retificação (Art. 16.º)</td>
                    <td className="p-3.5 text-neutral-300 leading-relaxed">Solicitar a retificação de dados pessoais inexatos ou o completamento de dados incompletos.</td>
                  </tr>
                  <tr className="hover:bg-neutral-800/50">
                    <td className="p-3.5 font-bold text-white">Direito ao Apagamento (Art. 17.º)</td>
                    <td className="p-3.5 text-neutral-300 leading-relaxed">Solicitar a eliminação dos seus dados («direito a ser esquecido»), ressalvadas as obrigações legais fiscais ou a defesa de direitos em processo judicial.</td>
                  </tr>
                  <tr className="hover:bg-neutral-800/50">
                    <td className="p-3.5 font-bold text-white">Direito à Limitação (Art. 18.º)</td>
                    <td className="p-3.5 text-neutral-300 leading-relaxed">Solicitar a suspensão temporária do tratamento dos seus dados nos casos previstos na lei.</td>
                  </tr>
                  <tr className="hover:bg-neutral-800/50">
                    <td className="p-3.5 font-bold text-white">Direito à Portabilidade (Art. 20.º)</td>
                    <td className="p-3.5 text-neutral-300 leading-relaxed">Receber os dados pessoais fornecidos num formato estruturado, de uso corrente e de leitura automática.</td>
                  </tr>
                  <tr className="hover:bg-neutral-800/50">
                    <td className="p-3.5 font-bold text-white">Direito de Oposição (Art. 21.º)</td>
                    <td className="p-3.5 text-neutral-300 leading-relaxed">Opor-se a tratamentos fundamentados no interesse legítimo com base em motivos relativos à sua situação particular.</td>
                  </tr>
                  <tr className="hover:bg-neutral-800/50">
                    <td className="p-3.5 font-bold text-white">Decisões Automatizadas (Art. 22.º)</td>
                    <td className="p-3.5 text-neutral-300 leading-relaxed">Direito de não ficar sujeito a decisões tomadas exclusivamente com base em tratamento automatizado (incluindo profiling) que produzam efeitos jurídicos ou efeitos similares significativos.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-400 leading-relaxed mb-6">
              <strong>Prazo de Resposta (Artigo 12.º do RGPD):</strong> O responsável pelo tratamento responderá aos pedidos relativos ao exercício dos direitos dos titulares sem demora injustificada e, em regra, <strong>no prazo máximo de um mês (30 dias)</strong> a contar da receção do pedido, podendo esse prazo ser prorrogado nos termos e limites legalmente previstos em caso de especial complexidade.
            </div>

            {/* Contact & CNPD */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-neutral-950/80 rounded-2xl border border-neutral-800 space-y-1">
                <div className="font-bold text-white">Como exercer qualquer direito:</div>
                <p className="text-neutral-400 leading-relaxed">
                  Envie o seu pedido por escrito com identificação do titular para:
                </p>
                <div className="pt-1">
                  <a href="mailto:geral@pdagencydigital.com" className="text-blue-400 font-bold text-sm hover:underline">
                    geral@pdagencydigital.com
                  </a>
                </div>
              </div>

              <div className="p-4 bg-neutral-950/80 rounded-2xl border border-neutral-800 space-y-1">
                <div className="font-bold text-white">Autoridade de Controlo em Portugal:</div>
                <p className="text-neutral-400 leading-relaxed">
                  Assiste-lhe o direito de apresentar reclamação junto da autoridade competente:
                </p>
                <div className="pt-1">
                  <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold hover:underline">
                    Comissão Nacional de Proteção de Dados (CNPD) — www.cnpd.pt
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Cookie Policy Link */}
          <section className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-headline font-bold text-lg text-white mb-1 uppercase">
                Cookies & Tecnologias de Armazenamento Local
              </h3>
              <p className="text-xs text-neutral-400">
                Consulte a tabela técnica sobre as chaves de armazenamento local estritamente necessárias da plataforma:
              </p>
            </div>
            <Link 
              to="/politica-cookies"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider py-3 px-5 rounded-xl transition-colors cursor-pointer shrink-0"
            >
              Ver Política de Cookies
            </Link>
          </section>

        </div>

      </div>
    </div>
  );
}
