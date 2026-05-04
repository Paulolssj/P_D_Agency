import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MaterialIcon = ({ name, className = '' }) => (
  <span className={`material-symbols-outlined select-none ${className}`} aria-hidden="true">
    {name}
  </span>
);

export default function LegalModal({ open, onClose, defaultTab = "terms" }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col p-0 border-none bg-[#121212] shadow-2xl"
        style={{ borderRadius: '1.5rem' }}
      >
        <div className="flex flex-col h-full bg-[#111111] p-8 md:p-14 overflow-y-auto hide-scrollbar">
          <Tabs defaultValue={defaultTab} className="w-full">
            <div className="flex flex-col gap-6 mb-12">
              <div className="flex justify-between items-start">
                <DialogTitle className="font-headline text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                  {defaultTab === "terms" ? "TERMOS DE USO" : "POLÍTICA DE PRIVACIDADE"}
                </DialogTitle>
              </div>

              <div className="flex flex-col gap-4">
                <TabsList className="bg-black/40 border border-white/5 p-1 rounded-xl w-fit">
                  <TabsTrigger 
                    value="terms" 
                    className="px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all data-[state=active]:bg-[#1a2e31] data-[state=active]:text-primary-container data-[state=active]:border border-transparent data-[state=active]:border-primary-container/20 text-neutral-500 hover:text-neutral-300"
                  >
                    TERMOS DE USO
                  </TabsTrigger>
                  <TabsTrigger 
                    value="privacy" 
                    className="px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all data-[state=active]:bg-[#1a2e31] data-[state=active]:text-primary-container data-[state=active]:border border-transparent data-[state=active]:border-primary-container/20 text-neutral-500 hover:text-neutral-300"
                  >
                    PRIVACIDADE
                  </TabsTrigger>
                </TabsList>
                
                <p className="text-[10px] font-label text-neutral-700 uppercase tracking-[0.3em] font-bold">
                  Última atualização: Janeiro 2026
                </p>
              </div>
            </div>

            <TabsContent value="terms" className="mt-0 outline-none">
              <div className="space-y-12 text-neutral-400 font-body text-[15px] leading-[1.8] pr-4">
                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    1. ACEITAÇÃO DOS TERMOS
                  </h4>
                  <p>Ao contratar qualquer serviço da P&D AGENCY, o Cliente declara ter lido, compreendido e aceite integralmente os presentes Termos de Utilização. Caso não concorde com qualquer disposição, deverá abster-se de utilizar os nossos serviços.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    2. SERVIÇOS PRESTADOS
                  </h4>
                  <p>A P&D AGENCY presta serviços de desenvolvimento web, design de interfaces e manutenção técnica. Os serviços específicos, prazos e condições foram definidos em proposta escrita aceite pelo Cliente antes do início de qualquer trabalho.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    3. PRAZOS DE ENTREGA
                  </h4>
                  <p>O Plano Completo inclui entrega garantida em 7 dias úteis após confirmação do pedido e receção de todos os conteúdos necessários. O Plano Essencial contempla prazos acordados no contrato de 12 meses. A P&D AGENCY não se responsabiliza por atrasos resultantes da falta de fornecimento de materiais por parte do Cliente.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    4. SUPORTE E GARANTIAS
                  </h4>
                  <p>Plano Essencial e Plano Completo: suporte inicial de 14 dias após entrega, com garantia de correções sem custo adicional durante 7 dias. Suporte Premium: suporte de 1 mês com tempo de resposta entre 6 e 24 horas, incluindo garantia alargada de 14 dias. Findo o período de suporte, qualquer intervenção adicional será orçamentada separadamente.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    5. PROPRIEDADE INTELECTUAL DO CÓDIGO
                  </h4>
                  <p>Todo o código fonte, design e ativos digitais desenvolvidos pela P&D AGENCY são propriedade exclusiva da agência até ao pagamento integral acordado. Após liquidação total, os direitos de utilização do produto final são transferidos para o Cliente. A P&D AGENCY reserva o direito de utilizar o trabalho desenvolvido no seu portfólio, salvo acordo de confidencialidade expresso e por escrito.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    6. RESPONSABILIDADES DE ALOJAMENTO E SUPORTE
                  </h4>
                  <p>No âmbito do Suporte Premium, a P&D AGENCY garante a gestão do alojamento contratado, incluindo backups regulares e atualizações de segurança. A agência não se responsabiliza por interrupções causadas por terceiros (fornecedores de cloud, ataques externos) fora do seu controlo razoável.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    7. PAGAMENTOS E CANCELAMENTOS
                  </h4>
                  <p>O pagamento é realizado conforme condições acordadas na proposta. Em caso de cancelamento antecipado de contratos recorrentes (Plano Essencial ou Suporte Premium), é devida uma indemnização correspondente a 30% do valor remanescente do contrato. Trabalhos já realizados são sempre faturados.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    8. LIMITAÇÃO DE RESPONSABILIDADE
                  </h4>
                  <p>A P&D AGENCY não se responsabiliza por perdas indiretas, lucros cessantes ou danos consequentes resultantes do uso ou impossibilidade de uso dos serviços prestados. A responsabilidade total da agência limita-se ao valor pago pelo Cliente no projeto em causa.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    9. LEI APLICÁVEL E FORO COMPETENTE
                  </h4>
                  <p>Os presentes Termos regem-se pela lei portuguesa. Quaisquer litígios serão submetidos ao foro da comarca de Lisboa, com expressa renúncia a qualquer outro.</p>
                </section>
              </div>
            </TabsContent>

            <TabsContent value="privacy" className="mt-0 outline-none">
              <div className="space-y-12 text-neutral-400 font-body text-[15px] leading-[1.8] pr-4">
                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    1. RESPONSÁVEL PELO TRATAMENTO
                  </h4>
                  <p>P&D AGENCY é responsável pelo tratamento dos dados pessoais recolhidos através deste website e formulários de contacto, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento UE 2016/679) e a legislação nacional aplicável em Portugal (Lei n.º 58/2019, de 8 de Agosto).</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    2. DADOS PESSOAIS RECOLHIDOS
                  </h4>
                  <p>Recolhemos os seguintes dados: nome completo, endereço de correio electrónico, plano de interesse seleccionado, e mensagem submetida através do formulário de contacto. Não recolhemos dados sensíveis sem consentimento explícito.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    3. FINALIDADE E BASE LEGAL
                  </h4>
                  <p>Os dados são tratados com a finalidade de responder a pedidos de orçamento e estabelecer contacto comercial (base legal: consentimento — artigo 6.º, n.º 1, alínea a) do RGPD). Não utilizamos os dados para fins de marketing não solicitado.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    4. COOKIES E ANÁLISE DE PERFORMANCE
                  </h4>
                  <p>Este website utiliza cookies de análise de performance (PostHog) para compreender o comportamento dos utilizadores de forma anónima e agregada. Estes cookies não identificam individualmente os utilizadores. Ao continuar a navegar, o utilizador aceita o uso de cookies de performance. Pode desativar os cookies nas definições do seu navegador a qualquer momento.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    5. PARTILHA DE DADOS COM TERCEIROS
                  </h4>
                  <p>Os seus dados não são vendidos, alugados nem cedidos a terceiros para fins comerciais. Podemos partilhar dados estritamente necessários com prestadores de serviços técnicos (ex: plataforma de alojamento) sob obrigações contratuais de confidencialidade.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    6. DIREITOS DOS TITULARES DOS DADOS (RGPD)
                  </h4>
                  <p>Nos termos do RGPD, o utilizador tem direito a: acesso aos seus dados pessoais, retificação de dados inexactos, eliminação ("direito ao esquecimento"), portabilidade dos dados, oposição ao tratamento e revogação do consentimento a qualquer momento, sem prejuízo da licitude do tratamento efetuado anteriormente. Para exercer os seus direitos, contacte-nos através do formulário disponível no website.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    7. RETENÇÃO DE DADOS
                  </h4>
                  <p>Os dados submetidos através do formulário de contacto são conservados por um período máximo de 24 meses, após o qual são eliminados de forma segura, salvo obrigação legal de conservação por período superior.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    8. SEGURANÇA DOS DADOS
                  </h4>
                  <p>Aplicamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, perda acidental, destruição ou divulgação ilícita. Toda a comunicação é encriptada via HTTPS/TLS.</p>
                </section>

                <section>
                  <h4 className="text-white font-headline font-black text-xl mb-5 uppercase tracking-tight">
                    9. CONTACTO E EXERCÍCIO DE DIREITOS
                  </h4>
                  <p>Para questões relativas à proteção de dados ou para exercer os seus direitos ao abrigo do RGPD, utilize o formulário de contacto disponível neste website. Responderemos no prazo máximo de 30 dias.</p>
                </section>
              </div>
            </TabsContent>

            <div className="mt-16 flex justify-end">
              <button
                onClick={onClose}
                className="bg-primary-container text-on-primary px-10 py-5 rounded-xl font-headline font-black text-[13px] uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(129,236,255,0.4)] transition-all active:scale-95 shadow-lg"
              >
                ACEITAR E FECHAR
              </button>
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
