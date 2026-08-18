import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, PhoneCall, Mail, ArrowRight, ShieldCheck, Zap, Globe, Layers } from 'lucide-react';

const SERVICES_PACKAGES = [
  {
    id: 'web-standard',
    title: 'Website Institucional & Landing Page',
    category: 'Engenharia Web',
    basePrice: 450,
    time: '4-7 Dias',
    features: [
      'Design Responsivo & Mobile-First',
      'Até 5 Secções Estratégicas',
      'SEO Técnico & Core Web Vitals 100/100',
      'Integração WhatsApp & Formulário Leads',
      'Domínio & Hospedagem Configurados'
    ]
  },
  {
    id: 'ecommerce-catalog',
    title: 'Catálogo Digital / Loja Online',
    category: 'E-commerce & Catálogo',
    popular: true,
    basePrice: 850,
    time: '7-14 Dias',
    features: [
      'Catálogo de Produtos com Filtros Dinâmicos',
      'Simulador / Orçamentos em Tempo Real',
      'Pagamentos (MB Way, Multibanco, Cartão)',
      'Painel de Gestão Intuitivo',
      'Otimização Google & Meta Pixel'
    ]
  },
  {
    id: 'branding-social',
    title: 'Identidade de Marca & Social Media',
    category: 'Branding & Redes Sociais',
    basePrice: 380,
    time: '5-10 Dias',
    features: [
      'Logótipo Vetorial & Guia de Estilo',
      'Pack de Templates para Instagram (Posts & Stories)',
      'Estratégia de Conteúdo & Hashtags',
      'Banners & Elementos de Comunicação',
      'Configuração de Perfil Profissional'
    ]
  },
  {
    id: 'custom-app',
    title: 'Solução Web 360º & Tráfego Pago',
    category: 'Solução Completa',
    basePrice: 1200,
    time: '14-21 Dias',
    features: [
      'Website Completo + Identidade Visual',
      'Multi-idioma (PT / EN / ES / FR)',
      'Configuração Campanhas Google Ads & Meta',
      'Consultoria & Manutenção Contínua',
      'Suporte Prioritário 24/7'
    ]
  }
];

const ADDONS = [
  { id: 'multilang', label: 'Suporte Multi-idioma (PT + EN)', price: 120 },
  { id: 'googleads', label: 'Setup de Campanhas Google Ads & SEO Avançado', price: 150 },
  { id: 'maintenance', label: 'Manutenção e Atualizações Mensais', price: 60 },
  { id: 'rgpd', label: 'Suite RGPD Completa (Políticas + Banner Interativo)', price: 0, included: true }
];

export default function BudgetCalculatorSection({ darkMode = true, lang = 'pt' }) {
  const [selectedPkg, setSelectedPkg] = useState('ecommerce-catalog');
  const [selectedAddons, setSelectedAddons] = useState(['rgpd']);
  const [deliverySpeed, setDeliverySpeed] = useState('normal'); // 'normal' or 'express'
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const currentPkg = SERVICES_PACKAGES.find(p => p.id === selectedPkg) || SERVICES_PACKAGES[1];

  const toggleAddon = (id) => {
    if (id === 'rgpd') return; // Always included free
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const calculateTotal = () => {
    let total = currentPkg.basePrice;
    selectedAddons.forEach(addonId => {
      const addon = ADDONS.find(a => a.id === addonId);
      if (addon && !addon.included) {
        total += addon.price;
      }
    });
    if (deliverySpeed === 'express') {
      total = Math.round(total * 1.25);
    }
    return total;
  };

  const totalEstimate = calculateTotal();

  const generateWhatsAppMessage = () => {
    const addonNames = selectedAddons
      .map(id => ADDONS.find(a => a.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const text = `Olá P&D Agency! 👋\n\nGostaria de solicitar um orçamento para o meu projeto:\n\n` +
      `📦 *Plano Selecionado:* ${currentPkg.title}\n` +
      `⏱️ *Prazo Desejado:* ${deliverySpeed === 'express' ? 'Entrega Express (Prioritária)' : currentPkg.time}\n` +
      `🧩 *Módulos Adicionais:* ${addonNames || 'Nenhum'}\n` +
      `💰 *Estimativa Indicativa:* ~€${totalEstimate}\n\n` +
      `👤 *Nome:* ${clientName || 'Cliente'}\n` +
      `📞 *Contacto:* ${clientPhone || 'A definir'}\n\n` +
      `Podemos conversar sobre este projeto?`;

    return `https://wa.me/3519262568423?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className={`py-28 border-b transition-colors duration-500 ${
      darkMode ? 'bg-[#070D1A] border-neutral-800/80' : 'bg-neutral-50 border-neutral-200'
    }`} id="orcamento">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold text-[11px] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'SIMULADOR DE INVESTIMENTO' : 'PROJECT COST ESTIMATOR'}</span>
          </div>
          <h2 className={`font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter ${
            darkMode ? 'text-white' : 'text-neutral-900'
          }`}>
            {lang === 'pt' ? 'ESTIME O SEU PROJETO EM ' : 'ESTIMATE YOUR PROJECT IN '}
            <span className="text-primary italic">{lang === 'pt' ? 'TEMPO REAL' : 'REAL TIME'}</span>
          </h2>
          <p className={`text-sm md:text-base mt-4 font-light leading-relaxed ${
            darkMode ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            {lang === 'pt' 
              ? 'Personalize o pacote ideal para a sua empresa e obtenha uma estimativa transparente em segundos.'
              : 'Customize the ideal digital solution for your business and get an immediate transparent estimate.'}
          </p>
        </div>

        {/* Step 1: Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES_PACKAGES.map((pkg) => {
            const isSelected = selectedPkg === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPkg(pkg.id)}
                className={`p-6 rounded-3xl border flex flex-col justify-between cursor-pointer transition-all duration-300 relative ${
                  isSelected
                    ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10 ring-2 ring-primary/40'
                    : darkMode 
                      ? 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700' 
                      : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 right-6 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    {lang === 'pt' ? 'Mais Procurado' : 'Most Popular'}
                  </span>
                )}

                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{pkg.category}</span>
                  <h3 className={`font-headline font-black text-lg uppercase tracking-tight mt-1 mb-3 ${
                    darkMode ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {pkg.title}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-xs text-neutral-400">A partir de</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-headline font-black text-3xl text-primary">€{pkg.basePrice}</span>
                      <span className="text-xs text-neutral-400">/ projeto</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-500">⏱️ {pkg.time}</span>
                  </div>

                  <ul className="space-y-2 text-xs pt-4 border-t border-neutral-500/20">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className={`flex items-start gap-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3">
                  <div className={`w-full py-2 rounded-xl text-xs font-headline font-bold text-center transition-colors ${
                    isSelected
                      ? 'bg-primary text-white'
                      : darkMode ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-700'
                  }`}>
                    {isSelected ? (lang === 'pt' ? '✓ Selecionado' : '✓ Selected') : (lang === 'pt' ? 'Escolher' : 'Choose')}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Step 2: Addons & Calculator Summary */}
        <div className={`p-8 md:p-10 rounded-3xl border shadow-xl ${
          darkMode ? 'bg-neutral-900/90 border-neutral-800' : 'bg-white border-neutral-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Custom Options */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className={`font-headline font-black text-xl uppercase tracking-tight ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}>
                {lang === 'pt' ? 'Módulos Adicionais & Prazos' : 'Additional Add-ons & Timeline'}
              </h4>

              {/* Addons Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'border-primary/60 bg-primary/10 text-white'
                          : darkMode ? 'border-neutral-800 bg-neutral-950 text-neutral-300' : 'border-neutral-200 bg-neutral-50 text-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-md flex items-center justify-center border ${
                          isChecked ? 'bg-primary border-primary text-white' : 'border-neutral-600'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{addon.label}</span>
                      </div>
                      <span className="text-xs font-bold text-primary shrink-0 ml-2">
                        {addon.included ? 'Grátis' : `+€${addon.price}`}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Delivery Speed Selector */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider block mb-2 text-neutral-400">
                  {lang === 'pt' ? 'Velocidade de Entrega:' : 'Delivery Speed:'}
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDeliverySpeed('normal')}
                    className={`py-3 px-4 rounded-2xl border text-xs font-headline font-bold transition-all ${
                      deliverySpeed === 'normal'
                        ? 'border-primary bg-primary/10 text-primary'
                        : darkMode ? 'border-neutral-800 bg-neutral-950 text-neutral-400' : 'border-neutral-200 bg-neutral-50 text-neutral-600'
                    }`}
                  >
                    🚀 Padrão ({currentPkg.time})
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliverySpeed('express')}
                    className={`py-3 px-4 rounded-2xl border text-xs font-headline font-bold transition-all ${
                      deliverySpeed === 'express'
                        ? 'border-primary bg-primary/10 text-primary'
                        : darkMode ? 'border-neutral-800 bg-neutral-950 text-neutral-400' : 'border-neutral-200 bg-neutral-50 text-neutral-600'
                    }`}
                  >
                    ⚡ Entrega Prioritária (+25%)
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Total Summary & Dispatch */}
            <div className={`lg:col-span-5 p-6 rounded-2xl border flex flex-col justify-between ${
              darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}>
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-500/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Total Estimado</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">Sem Compromisso</span>
                </div>

                <div className="py-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline font-black text-4xl sm:text-5xl text-primary">~€{totalEstimate}</span>
                    <span className="text-xs text-neutral-400">estimativa indicativa</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">
                    Inclui desenvolvimento completo, otimização SEO e conformidade RGPD.
                  </p>
                </div>

                {/* Quick Client Inputs */}
                <div className="space-y-2 mb-4">
                  <input
                    type="text"
                    placeholder={lang === 'pt' ? 'O seu nome / Empresa' : 'Your name / Business'}
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs outline-none border transition-all ${
                      darkMode ? 'bg-neutral-900 border-neutral-800 text-white focus:border-primary' : 'bg-white border-neutral-300 text-neutral-900 focus:border-primary'
                    }`}
                  />
                  <input
                    type="text"
                    placeholder={lang === 'pt' ? 'Telemóvel ou E-mail' : 'Phone or Email'}
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs outline-none border transition-all ${
                      darkMode ? 'bg-neutral-900 border-neutral-800 text-white focus:border-primary' : 'bg-white border-neutral-300 text-neutral-900 focus:border-primary'
                    }`}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-headline font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 active:scale-95"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{lang === 'pt' ? 'Pedir Proposta via WhatsApp' : 'Request Quote via WhatsApp'}</span>
                </a>

                <a
                  href="#contacto"
                  className={`w-full py-3 rounded-xl font-headline font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border ${
                    darkMode ? 'border-neutral-800 text-neutral-300 hover:bg-white/5' : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>{lang === 'pt' ? 'Enviar Mensagem por E-mail' : 'Send via Contact Form'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
