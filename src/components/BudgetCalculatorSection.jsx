import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, Mail, CheckCircle2, Sparkles, Shield, Clock, ArrowRight, Check, Zap, Globe, Palette, ShoppingBag, Layout, Code2 } from 'lucide-react';

const PACKAGES = [
  {
    id: 'landing',
    title: 'Landing Page de Alta Conversão',
    category: 'Conversão & Captação Rápida',
    price: 'A partir de 400€',
    time: '3-7 Dias',
    icon: Zap,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/20 shadow-amber-500/10',
    accentGlow: 'from-amber-500/15 via-transparent to-transparent',
    features: [
      'Design Responsivo & Mobile-First',
      'Estrutura Otimizada para Conversão',
      'SEO Técnico & Velocidade 100/100',
      'Integração WhatsApp & Formulário Leads',
      'Domínio & Alojamento Configurados'
    ]
  },
  {
    id: 'branding',
    title: 'Identidade de Marca & Social Media',
    category: 'Branding & Presença Digital',
    price: 'Sob Consulta',
    time: '3-7 Dias',
    icon: Palette,
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-500/10 border-sky-500/20 shadow-sky-500/10',
    accentGlow: 'from-sky-500/15 via-transparent to-transparent',
    features: [
      'Logótipo Vetorial & Guia de Estilo',
      'Pack de Templates para Instagram (Posts & Stories)',
      'Estratégia Visual de Conteúdo',
      'Banners & Elementos de Comunicação',
      'Configuração de Perfil Profissional'
    ]
  },
  {
    id: 'web',
    title: 'Website Institucional',
    category: 'Website Corporativo Multi-Página',
    price: 'A partir de 600€',
    time: '5-10 Dias',
    icon: Globe,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10 border-blue-500/20 shadow-blue-500/10',
    accentGlow: 'from-blue-500/15 via-transparent to-transparent',
    features: [
      'Website Multi-Página Completo',
      'Arquitetura de Código & Design Sob Medida',
      'Painel de Gestão ou CMS Intuitivo',
      'Otimização SEO Local & Google Maps',
      'Suite RGPD Completa (Políticas + Banner)'
    ]
  },
  {
    id: 'catalog',
    title: 'Catálogo Digital / Loja Online',
    category: 'E-commerce & Catálogo Dinâmico',
    price: 'A partir de 800€',
    time: '7-21 Dias',
    popular: true,
    icon: ShoppingBag,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/10',
    accentGlow: 'from-emerald-500/15 via-transparent to-transparent',
    features: [
      'Catálogo de Produtos com Filtros Dinâmicos',
      'Sistema de Pedidos / Carrinho / WhatsApp',
      'Integração de Pagamentos (MB Way, Cartão)',
      'Painel de Gestão de Inventário',
      'Otimização Google & Meta Pixel'
    ]
  }
];

export default function BudgetCalculatorSection({ darkMode = true, lang = 'pt' }) {
  const [selectedPkg, setSelectedPkg] = useState('landing');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const currentPkg = PACKAGES.find(p => p.id === selectedPkg) || PACKAGES[0];
  const CurrentIcon = currentPkg.icon;

  const handleSelectPackage = (pkgId) => {
    setSelectedPkg(pkgId);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const buildWhatsAppUrl = () => {
    const text = lang === 'pt'
      ? `Olá P&D Agency! 👋\n\nGostaria de solicitar uma proposta para o meu projeto:\n\n📌 *Plano Selecionado:* ${currentPkg.title} (${currentPkg.price})\n⏱️ *Prazo Indicativo:* ${currentPkg.time}\n👤 *Nome / Empresa:* ${name.trim() || 'Cliente'}\n📞 *Contacto:* ${phone.trim() || 'Não especificado'}\n✉️ *E-mail:* ${email.trim() || 'Não especificado'}\n\n📝 *Detalhes:* ${message.trim() || 'Gostaria de agendar uma reunião / obter proposta formal.'}\n\nPodemos conversar?`
      : `Hello P&D Agency! 👋\n\nI would like to request a proposal for my project:\n\n📌 *Selected Plan:* ${currentPkg.title} (${currentPkg.price})\n⏱️ *Estimated Delivery:* ${currentPkg.time}\n👤 *Name / Company:* ${name.trim() || 'Client'}\n📞 *Phone:* ${phone.trim() || 'Not specified'}\n✉️ *E-mail:* ${email.trim() || 'Not specified'}\n\n📝 *Details:* ${message.trim() || 'I would like to schedule a call / receive a proposal.'}\n\nCan we talk?`;

    return `https://wa.me/3519262568423?text=${encodeURIComponent(text)}`;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pedido de Proposta - ${currentPkg.title} (${currentPkg.price}) - ${name || 'Cliente'}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nTelemóvel: ${phone}\nE-mail: ${email}\nPlano Selecionado: ${currentPkg.title} (${currentPkg.price})\nPrazo Indicativo: ${currentPkg.time}\n\nDetalhes do Projeto:\n${message}`
    );
    window.location.href = `mailto:pd.agency.digital01@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className={`py-28 border-b relative overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-[#050A13] border-neutral-800/80' : 'bg-[#FDFBF7] border-neutral-200'
    }`} id="orcamento">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'SOLUÇÕES & PROPOSTAS' : 'SOLUTIONS & PROPOSALS'}</span>
          </div>
          
          <h2 className={`font-headline text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 ${
            darkMode ? 'text-white' : 'text-neutral-900'
          }`}>
            {lang === 'pt' ? 'SOLICITAR PROPOSTA ' : 'REQUEST A CUSTOM '}
            <span className="text-[#0071E3] dark:text-[#3B82F6] italic">
              {lang === 'pt' ? 'PERSONALIZADA' : 'PROPOSAL'}
            </span>
          </h2>
          
          <p className={`text-base md:text-lg font-light leading-relaxed ${
            darkMode ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            {lang === 'pt' 
              ? 'Selecione um dos nossos planos ou solicite uma solução 100% personalizada. Criamos projetos à medida dos objetivos da sua empresa.'
              : 'Select one of our plans or request a 100% customized solution. We build projects tailored to your business goals.'}
          </p>
        </div>

        {/* ── 4 BANNERS / CARDS DOS PLANOS (100% VETOR SVG & 3D DEPTH) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PACKAGES.map((pkg) => {
            const isSelected = selectedPkg === pkg.id;
            const PkgIcon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                onClick={() => handleSelectPackage(pkg.id)}
                className={`p-7 rounded-[28px] border flex flex-col justify-between transition-all duration-300 relative cursor-pointer overflow-hidden ${
                  isSelected
                    ? 'border-[#0071E3] border-t-2 border-t-blue-400 bg-gradient-to-b from-[#0071E3]/20 via-neutral-900/90 to-neutral-950 ring-2 ring-[#0071E3] shadow-[0_25px_50px_rgba(0,113,227,0.25)]'
                    : darkMode
                      ? 'bg-gradient-to-b from-neutral-900/95 to-neutral-950/95 border-neutral-800 border-t-neutral-700/80 hover:border-neutral-600 hover:shadow-[0_25px_45px_rgba(0,0,0,0.5)] shadow-[0_15px_30px_rgba(0,0,0,0.35)]'
                      : 'bg-gradient-to-b from-white to-neutral-50/80 border-neutral-200 border-t-white hover:border-neutral-300 hover:shadow-2xl shadow-xl'
                }`}
              >
                {/* 3D Ambient Top Light Orb */}
                <div className={`absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-bl ${pkg.accentGlow} rounded-full blur-3xl pointer-events-none opacity-80`} />
                
                {/* 3D Top Specular Edge */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-5 bg-gradient-to-r from-[#0071E3] to-[#0095FF] text-white px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md shadow-blue-500/30 border border-blue-300/30">
                    {lang === 'pt' ? 'Destaque' : 'Popular'}
                  </div>
                )}

                <div className="relative z-10">
                  {/* Category & 3D SVG Icon Box */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg border-t-white/30 backdrop-blur-sm ${pkg.iconBg} ${pkg.iconColor}`}>
                      <PkgIcon className="w-6 h-6" />
                    </div>
                    {!pkg.popular && (
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border shadow-sm ${
                        darkMode ? 'border-neutral-800 bg-neutral-950/80 text-neutral-400' : 'border-neutral-200 bg-white text-neutral-600'
                      }`}>
                        {pkg.time}
                      </span>
                    )}
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                    {pkg.category}
                  </p>

                  <h3 className={`font-headline text-xl font-black uppercase mb-3 leading-snug ${
                    darkMode ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {pkg.title}
                  </h3>

                  {/* 3D Price Display */}
                  <div className="mb-6 pb-6 border-b border-neutral-500/20">
                    <span className="font-headline font-black text-2xl md:text-3xl text-[#0071E3] dark:text-[#3B82F6] drop-shadow-sm">
                      {pkg.price}
                    </span>
                    {pkg.popular && (
                      <span className={`block text-[10px] uppercase font-bold tracking-wider mt-1 ${
                        darkMode ? 'text-neutral-400' : 'text-neutral-500'
                      }`}>
                        {lang === 'pt' ? `Prazo: ${pkg.time}` : `Delivery: ${pkg.time}`}
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 text-xs mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3D Card Action Button */}
                <button
                  type="button"
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-headline font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer relative z-10 active:scale-98 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#0071E3] to-[#0084FF] text-white shadow-lg shadow-blue-500/30 border border-blue-300/30'
                      : darkMode
                        ? 'bg-neutral-900/90 border border-neutral-700/80 text-white hover:bg-neutral-800 hover:border-neutral-600 shadow-md shadow-black/40'
                        : 'bg-white border border-neutral-300 text-neutral-900 hover:bg-neutral-50 shadow-sm'
                  }`}
                >
                  <span>{isSelected ? (lang === 'pt' ? 'Plano Selecionado ✓' : 'Selected Plan ✓') : (lang === 'pt' ? 'Selecionar Plano' : 'Select Plan')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* ── FORMULÁRIO DE PROPOSTA CONECTADO ── */}
        <div ref={formRef} className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 sm:p-12 rounded-[32px] border shadow-2xl backdrop-blur-xl ${
              darkMode ? 'bg-neutral-900/90 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-neutral-500/20">
              <div className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${currentPkg.iconBg} ${currentPkg.iconColor}`}>
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-primary block mb-0.5">
                    {lang === 'pt' ? 'PLANO SELECIONADO:' : 'SELECTED PLAN:'}
                  </span>
                  <h3 className={`font-headline text-xl sm:text-2xl font-black uppercase ${
                    darkMode ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {currentPkg.title}
                  </h3>
                </div>
              </div>
              <div className="sm:text-right">
                <span className="font-headline font-black text-2xl text-[#0071E3] dark:text-[#3B82F6] block">
                  {currentPkg.price}
                </span>
                <span className={`text-[10px] uppercase font-bold ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {lang === 'pt' ? `Prazo: ${currentPkg.time}` : `Delivery: ${currentPkg.time}`}
                </span>
              </div>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-6">
              
              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                    darkMode ? 'text-neutral-300' : 'text-neutral-700'
                  }`}>
                    {lang === 'pt' ? 'Nome / Empresa *' : 'Name / Company *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'pt' ? 'O seu nome ou empresa' : 'Your name or company'}
                    className={`w-full px-4 py-3.5 rounded-2xl text-xs outline-none border transition-all ${
                      darkMode 
                        ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-primary'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                    darkMode ? 'text-neutral-300' : 'text-neutral-700'
                  }`}>
                    {lang === 'pt' ? 'Telemóvel / WhatsApp *' : 'Phone / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={lang === 'pt' ? '+351 9xx xxx xxx' : '+1 xxx xxx xxxx'}
                    className={`w-full px-4 py-3.5 rounded-2xl text-xs outline-none border transition-all ${
                      darkMode 
                        ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-primary'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                    darkMode ? 'text-neutral-300' : 'text-neutral-700'
                  }`}>
                    {lang === 'pt' ? 'E-mail de Contacto *' : 'Contact Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={lang === 'pt' ? 'exemplo@empresa.pt' : 'example@company.com'}
                    className={`w-full px-4 py-3.5 rounded-2xl text-xs outline-none border transition-all ${
                      darkMode 
                        ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-primary'
                    }`}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  darkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  {lang === 'pt' ? 'Mensagem / Objetivos do Projeto (Opcional):' : 'Message / Project Goals (Optional):'}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={lang === 'pt' 
                    ? 'Descreva brevemente o que procura para o seu projeto...' 
                    : 'Briefly describe what you are looking for in your project...'}
                  className={`w-full px-4 py-3.5 rounded-2xl text-xs outline-none border transition-all resize-none ${
                    darkMode 
                      ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500 focus:border-primary' 
                      : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-primary'
                  }`}
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                {/* WhatsApp Direct Dispatch */}
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-headline font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-900/30 active:scale-98 hover:-translate-y-0.5 cursor-pointer text-center"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{lang === 'pt' ? 'Pedir Proposta via WhatsApp' : 'Request via WhatsApp'}</span>
                </a>

                {/* Email Direct Dispatch */}
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-4 px-6 bg-[#0071E3] hover:bg-[#0077ED] text-white rounded-2xl font-headline font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-blue-900/30 active:scale-98 hover:-translate-y-0.5 cursor-pointer text-center"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'pt' ? 'Enviar Pedido por E-mail' : 'Send Request via Email'}</span>
                </button>
              </div>

              {/* Trust Notes */}
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
                  <span>{lang === 'pt' ? 'Orçamento transparente & sob medida' : 'Transparent & tailored quote'}</span>
                </div>
              </div>

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
