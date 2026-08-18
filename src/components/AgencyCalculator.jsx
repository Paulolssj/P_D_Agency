import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, ArrowRight, MessageSquare, Send, Globe, ShoppingBag, Smartphone, Palette, ShieldCheck, Zap } from "lucide-react";

export default function AgencyCalculator({ lang = "pt" }) {
  const isPt = lang === "pt";

  const [projectType, setProjectType] = useState("website");
  const [deliverySpeed, setDeliverySpeed] = useState("standard");
  const [selectedFeatures, setSelectedFeatures] = useState(["responsive", "seo"]);
  const [customNotes, setCustomNotes] = useState("");
  const [contactChannel, setContactChannel] = useState("whatsapp");

  const projectTypes = [
    {
      id: "website",
      name: isPt ? "Website Institucional / Stand" : "Corporate / Catalog Website",
      desc: isPt ? "Apresentação profissional, catálogo digital & alta conversão" : "Showcase, digital catalog & high conversion",
      basePrice: 450,
      icon: Globe,
    },
    {
      id: "ecommerce",
      name: isPt ? "Loja Online & E-Commerce" : "E-Commerce & Online Store",
      desc: isPt ? "Catálogo com pagamentos (MBWay, Cartão, Stripe) e checkout" : "Catalog with payments & secure checkout",
      basePrice: 850,
      icon: ShoppingBag,
    },
    {
      id: "webapp",
      name: isPt ? "Aplicação Web / Dashboard" : "Custom Web App / Portal",
      desc: isPt ? "Sistemas à medida, portais de clientes & integrações API" : "Custom systems, client portals & API integrations",
      basePrice: 1200,
      icon: Smartphone,
    },
    {
      id: "branding",
      name: isPt ? "Identidade Visual & UI/UX" : "Brand Identity & UI/UX",
      desc: isPt ? "Logótipo, manual de normas, design system & social kit" : "Logo, brandbook, design system & social kit",
      basePrice: 350,
      icon: Palette,
    },
  ];

  const featuresList = [
    { id: "responsive", name: isPt ? "Design 100% Responsivo (Mobile & Desktop)" : "100% Mobile Responsive", price: 0, included: true },
    { id: "seo", name: isPt ? "Otimização SEO 100/100 & Google Business" : "100/100 SEO & Google Indexing", price: 90 },
    { id: "multilang", name: isPt ? "Suporte Multi-Idioma (PT / EN / ES / FR)" : "Multi-Language Support", price: 120 },
    { id: "calculator", name: isPt ? "Estimador / Calculadora Interativa à Medida" : "Custom Interactive Estimator", price: 150 },
    { id: "cms", name: isPt ? "Painel de Gestão de Conteúdos / Catálogo" : "CMS / Content Management", price: 180 },
    { id: "rgpd", name: isPt ? "Pacote Legal Completo RGPD & Cookies CNPD" : "Full GDPR & Cookie Policy Pack", price: 60 },
  ];

  const speedOptions = [
    { id: "standard", name: isPt ? "Prazo Padrão (2 a 3 semanas)" : "Standard (2-3 weeks)", multiplier: 1 },
    { id: "fast", name: isPt ? "Prioritário / Expresso (7 a 10 dias)" : "Fast-Track (7-10 days)", multiplier: 1.25 },
  ];

  const toggleFeature = (id) => {
    if (id === "responsive") return; // always included
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculate estimated total
  const selectedTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const selectedSpeedObj = speedOptions.find((s) => s.id === deliverySpeed) || speedOptions[0];
  
  const featuresTotal = selectedFeatures.reduce((acc, featId) => {
    const feat = featuresList.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const calculatedTotal = Math.round((selectedTypeObj.basePrice + featuresTotal) * selectedSpeedObj.multiplier);

  const handleSendQuote = () => {
    const selectedFeatureNames = selectedFeatures
      .map((fId) => featuresList.find((f) => f.id === fId)?.name)
      .filter(Boolean)
      .join(", ");

    const text = isPt
      ? `Olá P&D Agency! Estive a usar o simulador no vosso website e gostaria de solicitar uma proposta:\n\n` +
        `📌 *Tipo de Projeto:* ${selectedTypeObj.name}\n` +
        `⏱️ *Prazo:* ${selectedSpeedObj.name}\n` +
        `✨ *Funcionalidades:* ${selectedFeatureNames}\n` +
        `💰 *Estimativa Indicativa:* ~${calculatedTotal}€\n` +
        (customNotes ? `📝 *Notas Adicionais:* ${customNotes}\n\n` : `\n`) +
        `Podemos agendar uma conversa de 15 minutos?`
      : `Hello P&D Agency! I used your online estimator and would like to request a project proposal:\n\n` +
        `📌 *Project Type:* ${selectedTypeObj.name}\n` +
        `⏱️ *Timeline:* ${selectedSpeedObj.name}\n` +
        `✨ *Features:* ${selectedFeatureNames}\n` +
        `💰 *Estimated Budget:* ~${calculatedTotal}€\n` +
        (customNotes ? `📝 *Notes:* ${customNotes}\n\n` : `\n`) +
        `Can we schedule a quick call?`;

    if (contactChannel === "whatsapp") {
      const whatsappUrl = `https://wa.me/351912345678?text=${encodeURIComponent(text)}`;
      // Fallback to official email if phone number is generic
      window.open(`https://api.whatsapp.com/send?phone=351913904586&text=${encodeURIComponent(text)}`, "_blank");
    } else {
      const mailtoUrl = `mailto:pd.agency.digital01@gmail.com?subject=${encodeURIComponent(
        `Pedido de Proposta: ${selectedTypeObj.name}`
      )}&body=${encodeURIComponent(text)}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div className="w-full bg-[#0B0F19]/90 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-2xl text-left relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-500/20">
            <Sparkles className="w-4 h-4" />
            <span>{isPt ? "Simulador Interativo 2026" : "Interactive Estimator 2026"}</span>
          </div>
          <h3 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            {isPt ? "ESTIME O SEU PROJETO" : "CALCULATE YOUR PROJECT"}
          </h3>
          <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-xl font-light">
            {isPt
              ? "Selecione a tipologia, prazo e funcionalidades pretendidas para obter uma estimativa indicativa transparente em tempo real."
              : "Select project type, speed, and desired features to receive an instant, transparent estimate in real time."}
          </p>
        </div>

        {/* Live Counter Display */}
        <div className="bg-black/50 border border-blue-500/30 rounded-2xl p-5 md:p-6 text-right shrink-0">
          <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
            {isPt ? "Estimativa Indicativa" : "Indicative Estimate"}
          </span>
          <div className="flex items-baseline justify-end gap-1">
            <span className="text-sm font-semibold text-neutral-400">{isPt ? "A partir de" : "From"}</span>
            <span className="font-headline text-4xl sm:text-5xl font-black text-blue-400 tracking-tight">
              {calculatedTotal}€
            </span>
          </div>
          <span className="text-[10px] text-neutral-400 block mt-1">
            {isPt ? "+ IVA se aplicável • Proposta sem compromisso" : "No-obligation proposal"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Form: Choices (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Step 1: Project Type */}
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-300 block mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-[10px] font-black border border-blue-500/40">1</span>
              <span>{isPt ? "Tipo de Solução Digital" : "Digital Solution Type"}</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {projectTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = projectType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                      isSelected
                        ? "bg-blue-600/15 border-blue-500 text-white shadow-lg shadow-blue-600/10"
                        : "bg-black/40 border-white/8 text-neutral-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-xl ${isSelected ? "bg-blue-600 text-white" : "bg-white/5 text-neutral-400"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-blue-400">+{type.basePrice}€</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-sm uppercase tracking-tight text-white mb-1">
                        {type.name}
                      </h4>
                      <p className="text-[11px] text-neutral-400 leading-snug font-light">
                        {type.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Features Included */}
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-300 block mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-[10px] font-black border border-blue-500/40">2</span>
              <span>{isPt ? "Módulos & Funcionalidades Adicionais" : "Additional Modules & Features"}</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {featuresList.map((feat) => {
                const isSelected = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-blue-600/15 border-blue-500/70 text-white"
                        : "bg-black/30 border-white/5 text-neutral-400 hover:border-white/15 hover:text-neutral-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        isSelected ? "bg-blue-600 border-blue-500 text-white" : "border-white/20"
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <span className="text-xs font-medium">{feat.name}</span>
                    </div>
                    <span className="text-[11px] font-bold text-blue-400 shrink-0">
                      {feat.price === 0 ? (isPt ? "Incluído" : "Included") : `+${feat.price}€`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Speed / Timeline */}
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-300 block mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-[10px] font-black border border-blue-500/40">3</span>
              <span>{isPt ? "Prazo de Entrega" : "Delivery Timeline"}</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {speedOptions.map((speed) => {
                const isSelected = deliverySpeed === speed.id;
                return (
                  <button
                    key={speed.id}
                    type="button"
                    onClick={() => setDeliverySpeed(speed.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-blue-600/15 border-blue-500 text-white"
                        : "bg-black/30 border-white/5 text-neutral-400 hover:border-white/15 hover:text-neutral-300"
                    }`}
                  >
                    <span className="text-xs font-medium">{speed.name}</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      isSelected ? "border-blue-400 bg-blue-600" : "border-white/20"
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Form: Summary & Direct Action (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-black/40 border border-white/10 rounded-2xl p-6 relative">
          <div>
            <h4 className="font-headline font-bold text-base uppercase tracking-tight text-white mb-4 pb-3 border-b border-white/10">
              {isPt ? "Resumo do Pedido" : "Request Summary"}
            </h4>

            <div className="space-y-3 text-xs text-neutral-300 mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-400">{isPt ? "Solução:" : "Solution:"}</span>
                <span className="font-bold text-white">{selectedTypeObj.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">{isPt ? "Prazo:" : "Timeline:"}</span>
                <span className="font-medium text-white">{selectedSpeedObj.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">{isPt ? "Módulos:" : "Modules:"}</span>
                <span className="font-medium text-white">{selectedFeatures.length} {isPt ? "selecionados" : "selected"}</span>
              </div>
            </div>

            {/* Custom Notes */}
            <div className="mb-6">
              <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                {isPt ? "Descreva brevemente o seu negócio / ideia:" : "Brief description of your business / idea:"}
              </label>
              <textarea
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder={isPt ? "Ex: Stand de automóveis na Leiria, necessito de catálogo e formulário de retoma..." : "E.g., Boutique brand requiring catalog and bookings..."}
                rows={3}
                className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Channel Switcher */}
            <div className="mb-6">
              <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                {isPt ? "Canal Preferencial de Resposta:" : "Preferred Contact Channel:"}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setContactChannel("whatsapp")}
                  className={`py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                    contactChannel === "whatsapp"
                      ? "bg-emerald-600/20 border-emerald-500 text-emerald-400"
                      : "border-white/10 text-neutral-400 hover:text-white"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setContactChannel("email")}
                  className={`py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                    contactChannel === "email"
                      ? "bg-blue-600/20 border-blue-500 text-blue-400"
                      : "border-white/10 text-neutral-400 hover:text-white"
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Email</span>
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleSendQuote}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-headline font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>{isPt ? "SOLICITAR PROPOSTA FORMAL" : "REQUEST FORMAL PROPOSAL"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-center text-neutral-400 mt-3 font-light">
              {isPt ? "⚡ Resposta garantida em menos de 24 horas úteis" : "⚡ Guaranteed response in under 24 hours"}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
