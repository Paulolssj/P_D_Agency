import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, Mail, CheckCircle2, Sparkles, Shield, Clock, MessageSquare, ArrowRight } from 'lucide-react';

const SERVICES = [
  { 
    id: 'landing', 
    label: 'Landing Page de Alta Conversão', 
    price: 'A partir de 350€', 
    icon: '⚡',
    desc: 'Página única focada em captar contactos e maximizar conversões'
  },
  { 
    id: 'web', 
    label: 'Website Institucional', 
    price: 'A partir de 550€', 
    icon: '💻',
    desc: 'Website corporativo multi-página com engenharia e SEO à medida'
  },
  { 
    id: 'branding', 
    label: 'Identidade de Marca & Social Media', 
    price: 'Design & Redes', 
    icon: '💎',
    desc: 'Logótipo, branding visual, templates e presença nas redes sociais'
  },
  { 
    id: 'catalog', 
    label: 'Catálogo Digital / Loja Online', 
    price: 'A partir de 800€', 
    icon: '🛍️',
    desc: 'Catálogo dinâmico de produtos com filtros e pedidos diretos'
  },
  { 
    id: 'ads', 
    label: 'Campanhas Google Ads & SEO', 
    price: 'Tráfego & Visibilidade', 
    icon: '🚀',
    desc: 'Anúncios direcionados no Google e otimização para o topo dos motores de busca'
  },
  { 
    id: 'custom', 
    label: 'Solução Personalizada 360º', 
    price: 'Sob Medida', 
    icon: '👑',
    desc: 'Projeto completo unindo tecnologia, branding e marketing digital'
  },
];

export default function BudgetCalculatorSection({ darkMode = true, lang = 'pt' }) {
  const [selectedService, setSelectedService] = useState('landing');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectedServiceObj = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

  const buildWhatsAppUrl = () => {
    const text = lang === 'pt'
      ? `Olá P&D Agency! 👋\n\nGostaria de solicitar uma proposta para o meu projeto:\n\n📌 *Serviço Selecionado:* ${selectedServiceObj.icon} ${selectedServiceObj.label} (${selectedServiceObj.price})\n👤 *Nome / Empresa:* ${name.trim() || 'Cliente'}\n📞 *Contacto:* ${phone.trim() || 'Não especificado'}\n✉️ *E-mail:* ${email.trim() || 'Não especificado'}\n\n📝 *Detalhes:* ${message.trim() || 'Gostaria de obter uma proposta detalhada e agendar uma reunião.'}\n\nPodemos conversar?`
      : `Hello P&D Agency! 👋\n\nI would like to request a proposal for my project:\n\n📌 *Selected Service:* ${selectedServiceObj.icon} ${selectedServiceObj.label} (${selectedServiceObj.price})\n👤 *Name / Company:* ${name.trim() || 'Client'}\n📞 *Phone:* ${phone.trim() || 'Not specified'}\n✉️ *E-mail:* ${email.trim() || 'Not specified'}\n\n📝 *Details:* ${message.trim() || 'I would like to get a detailed proposal and schedule a call.'}\n\nCan we talk?`;

    return `https://wa.me/3519262568423?text=${encodeURIComponent(text)}`;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pedido de Proposta - ${selectedServiceObj.label} (${selectedServiceObj.price}) - ${name || 'Cliente'}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nTelemóvel: ${phone}\nE-mail: ${email}\nServiço: ${selectedServiceObj.label} (${selectedServiceObj.price})\n\nDetalhes do Projeto:\n${message}`
    );
    window.location.href = `mailto:pd.agency.digital01@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className={`py-24 border-b relative overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-[#050A13] border-neutral-800/80' : 'bg-[#FDFBF7] border-neutral-200'
    }`} id="orcamento">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'PEDIR PROPOSTA' : 'REQUEST PROPOSAL'}</span>
          </div>
          
          <h2 className={`font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-neutral-900'
          }`}>
            {lang === 'pt' ? 'SOLICITAR PROPOSTA ' : 'REQUEST A CUSTOM '}
            <span className="text-[#0071E3] dark:text-[#3B82F6] italic">
              {lang === 'pt' ? 'PERSONALIZADA' : 'PROPOSAL'}
            </span>
          </h2>
          
          <p className={`max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed ${
            darkMode ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            {lang === 'pt' 
              ? 'Selecione a solução que procura para a sua marca. Receba uma proposta sob medida com resposta rápida em menos de 24 horas.'
              : 'Select the solution you are looking for. Receive a tailored proposal with fast response in less than 24 hours.'}
          </p>
        </div>

        {/* Main Card: Proposal Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-6 sm:p-10 md:p-12 rounded-[32px] border shadow-2xl backdrop-blur-xl ${
            darkMode ? 'bg-neutral-900/90 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
          }`}
        >
          <form onSubmit={handleEmailSubmit} className="space-y-8">
            
            {/* Step 1: Select Service */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-3 ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                1. {lang === 'pt' ? 'Selecione a Solução Pretendida:' : 'Select Desired Solution:'}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {SERVICES.map((srv) => {
                  const isSelected = selectedService === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.id)}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#0071E3] bg-[#0071E3]/10 text-primary ring-2 ring-[#0071E3]/30 shadow-md font-bold'
                          : darkMode 
                            ? 'border-neutral-800 bg-neutral-950/80 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900' 
                            : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-100'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <span className="text-2xl">{srv.icon}</span>
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md border ${
                          isSelected
                            ? 'bg-[#0071E3] text-white border-[#0071E3]'
                            : darkMode
                              ? 'bg-neutral-900 text-primary border-primary/30'
                              : 'bg-white text-primary border-primary/30'
                        }`}>
                          {srv.price}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-headline font-bold block mb-1 leading-snug">{srv.label}</span>
                        <p className={`text-[11px] leading-tight font-normal ${
                          isSelected ? (darkMode ? 'text-neutral-200' : 'text-neutral-800') : (darkMode ? 'text-neutral-400' : 'text-neutral-500')
                        }`}>
                          {srv.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Contact Details */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-3 ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                2. {lang === 'pt' ? 'Os seus Dados de Contacto:' : 'Your Contact Details:'}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'pt' ? 'Nome / Empresa *' : 'Name / Company *'}
                    className={`w-full px-4 py-3.5 rounded-2xl text-xs outline-none border transition-all ${
                      darkMode 
                        ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-primary'
                    }`}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={lang === 'pt' ? 'Telemóvel / WhatsApp *' : 'Phone / WhatsApp *'}
                    className={`w-full px-4 py-3.5 rounded-2xl text-xs outline-none border transition-all ${
                      darkMode 
                        ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-primary'
                    }`}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={lang === 'pt' ? 'Endereço de E-mail *' : 'Email Address *'}
                    className={`w-full px-4 py-3.5 rounded-2xl text-xs outline-none border transition-all ${
                      darkMode 
                        ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-primary'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Project Message */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-3 ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                3. {lang === 'pt' ? 'Descreva o seu Projeto ou Ideia:' : 'Describe your Project or Idea:'}
              </label>

              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={lang === 'pt' 
                  ? 'Ex: Gostaria de criar uma nova presença digital com catálogo de produtos e integração direta com o WhatsApp...' 
                  : 'E.g., I would like to create a digital presence with product catalog and direct WhatsApp integration...'}
                className={`w-full px-4 py-3.5 rounded-2xl text-xs outline-none border transition-all resize-none ${
                  darkMode 
                    ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary' 
                    : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-primary'
                }`}
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              
              {/* WhatsApp Fast Track Button */}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-headline font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-900/30 active:scale-98 hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{lang === 'pt' ? 'Pedir Proposta via WhatsApp' : 'Request via WhatsApp'}</span>
              </a>

              {/* Submit Email Button */}
              <button
                type="submit"
                className="w-full sm:flex-1 py-4 px-6 bg-[#0071E3] hover:bg-[#0077ED] text-white rounded-2xl font-headline font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-blue-900/30 active:scale-98 hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'pt' ? 'Enviar Pedido por E-mail' : 'Send Request via Email'}</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className={`pt-4 border-t flex flex-wrap items-center justify-around gap-4 text-[11px] font-medium ${
              darkMode ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
            }`}>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>{lang === 'pt' ? 'Resposta rápida em <24h' : 'Fast reply in <24h'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'pt' ? 'Sem qualquer compromisso' : 'No commitment'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span>{lang === 'pt' ? 'Orçamento transparente & sob medida' : 'Tailored & transparent quote'}</span>
              </div>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
