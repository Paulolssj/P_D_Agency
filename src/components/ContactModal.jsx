import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import axios from 'axios';

const API = `${import.meta.env.VITE_BACKEND_URL}/api`;

export default function ContactModal({ open, onClose, defaultPackage, lang = 'pt' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package_interest: '',
    support_plan: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showChoiceModal, setShowChoiceModal] = useState(false);

  useEffect(() => {
    if (open) {
      setFormData((prev) => ({
        ...prev,
        package_interest: defaultPackage || (lang === 'pt' ? 'Projeto Personalizado' : 'Custom Project'),
        support_plan: lang === 'pt' ? 'Suporte Básico' : 'Basic Support',
      }));
      setSuccess(false);
      setError('');
      setShowChoiceModal(false);
    }
  }, [open, defaultPackage, lang]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError(lang === 'pt' ? 'Por favor, preenche todos os campos obrigatórios (*).' : 'Please fill in all required fields (*).');
      return;
    }
    setError('');
    setShowChoiceModal(true);
  };

  const handleSendEmail = async () => {
    setLoading(true);
    setError('');
    setShowChoiceModal(false);
    try {
      try {
        await axios.post(`${API}/contact`, {
          ...formData,
          message: `[Interesse: ${formData.package_interest}] \n\n${formData.message}`
        });
      } catch (err) {
        // Backend fallback
      }

      await axios.post('https://formsubmit.co/ajax/pd.agency.digital01@gmail.com', {
        nome: formData.name,
        email: formData.email,
        servico_interesse: formData.package_interest,
        plano_suporte: formData.support_plan,
        mensagem: formData.message,
        _subject: `[P&D AGENCY] Novo Pedido de Orçamento - ${formData.name}`,
        _template: 'table',
        _captcha: 'false'
      });

      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2800);
    } catch (err) {
      window.location.href = `mailto:pd.agency.digital01@gmail.com?subject=${encodeURIComponent(`[P&D AGENCY] Pedido de Orçamento - ${formData.name}`)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\nServiço: ${formData.package_interest}\n\nMensagem:\n${formData.message}`)}`;
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2800);
    } finally {
      setLoading(false);
    }
  };

  const handleSendWhatsApp = () => {
    setShowChoiceModal(false);
    const text = `*Novo Contacto / Orçamento - P&D Agency*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Email:* ${formData.email || 'Não informado'}\n` +
      `*Serviço:* ${formData.package_interest}\n` +
      `*Localização:* ${formData.support_plan || 'Não informada'}\n\n` +
      `*Mensagem:*\n${formData.message}`;

    const url = `https://wa.me/3519262568423?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2800);
  };

  const isPt = lang === 'pt';

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={`border text-white max-w-xl p-5 sm:p-8 overflow-y-auto max-h-[90vh] rounded-2xl sm:rounded-3xl ${
          'bg-neutral-900 border-neutral-800'
        }`}
      >
        <DialogHeader className="mb-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1">
            {isPt ? 'CONTACTO' : 'CONTACT'}
          </p>
          <DialogTitle className="font-headline text-3xl font-black text-white uppercase tracking-tight">
            {isPt ? 'SOLICITAR ORÇAMENTO' : 'REQUEST A QUOTE'}
          </DialogTitle>
          <p className="text-xs font-light text-neutral-400 mt-1">
            {isPt ? 'Conta-nos sobre o teu projeto ou envia direto para' : 'Tell us about your project or email us directly at'}{' '}
            <a href="mailto:pd.agency.digital01@gmail.com" className="text-primary font-bold hover:underline">
              pd.agency.digital01@gmail.com
            </a>
          </p>
        </DialogHeader>

        {success ? (
          <div className="text-center py-10" data-testid="contact-success">
            <span className="material-symbols-outlined text-emerald-400 text-5xl mb-3">
              check_circle
            </span>
            <p className="text-white font-headline text-2xl font-bold">
              {isPt ? 'PROPOSTA ENVIADA!' : 'PROPOSAL SENT!'}
            </p>
            <p className="text-xs text-neutral-400 mt-2">
              {isPt ? 'Entraremos em contacto muito em breve.' : 'We will get back to you shortly.'}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleInitialSubmit}
            className="space-y-5"
            data-testid="contact-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="font-black text-[11px] uppercase tracking-wider text-neutral-400">
                  {isPt ? 'O TEU NOME *' : 'YOUR NAME *'}
                </Label>
                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ex: Ana Maria"
                  className="w-full rounded-2xl px-4 py-3 text-sm text-white bg-neutral-950 border border-neutral-800 transition-all outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="font-black text-[11px] uppercase tracking-wider text-neutral-400">
                  {isPt ? 'O TEU EMAIL *' : 'YOUR EMAIL *'}
                </Label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ex: ana@email.com"
                  className="w-full rounded-2xl px-4 py-3 text-sm text-white bg-neutral-950 border border-neutral-800 transition-all outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="font-black text-[11px] uppercase tracking-wider text-neutral-400">
                  {isPt ? 'MOTIVO DE CONTACTO / ASSUNTO' : 'SUBJECT / REASON'}
                </Label>
                <Select
                  value={formData.package_interest}
                  onValueChange={(val) =>
                    setFormData((prev) => ({ ...prev, package_interest: val }))
                  }
                >
                  <SelectTrigger className="text-white h-11 text-xs rounded-2xl bg-neutral-950 border border-neutral-800 focus:border-primary">
                    <SelectValue placeholder={isPt ? 'Seleciona o assunto...' : 'Select subject...'} />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border border-neutral-800">
                    {(isPt 
                      ? ['Desenvolvimento Web & Apps', 'Branding & Identidade Visual', 'Consultoria Digital & Marketing', 'Manutenção & Suporte']
                      : ['Web & App Development', 'Branding & Visual Identity', 'Digital Consulting & Marketing', 'Maintenance & Support']
                    ).map((opt) => (
                      <SelectItem key={opt} value={opt} className="text-white focus:bg-primary/20 focus:text-primary cursor-pointer text-xs">
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label className="font-black text-[11px] uppercase tracking-wider text-neutral-400">
                  {isPt ? 'LOCALIZAÇÃO' : 'LOCATION'}
                </Label>
                <input
                  id="support_plan"
                  name="support_plan"
                  value={formData.support_plan}
                  onChange={handleChange}
                  placeholder={isPt ? "ex: Lisboa, Porto, Leiria..." : "ex: London, Lisbon, NY..."}
                  className="w-full rounded-2xl px-4 py-3 text-sm text-white bg-neutral-950 border border-neutral-800 transition-all outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message" className="font-black text-[11px] uppercase tracking-wider text-neutral-400">
                {isPt ? 'DESCRIÇÃO DA IDEIA OU MENSAGEM *' : 'MESSAGE OR IDEA DESCRIPTION *'}
              </Label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder={isPt ? 'Conta-nos a tua ideia de projeto...' : 'Tell us about your project details...'}
                className="w-full rounded-2xl px-4 py-3 text-sm text-white bg-neutral-950 border border-neutral-800 transition-all outline-none resize-none focus:border-primary"
              />
            </div>

            {error && (
              <p className="text-red-400 text-xs font-bold">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-neutral-900 text-white hover:bg-primary px-8 py-4 rounded-2xl font-headline font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-50 border border-neutral-700 w-full"
            >
              <span>{loading ? (isPt ? 'A ENVIAR...' : 'SENDING...') : (isPt ? 'Enviar Proposta' : 'Submit Proposal')}</span>
              <span className="material-symbols-outlined text-base">send</span>
            </button>

            {/* POPUP MODAL DENTRO DO CONTACT MODAL PARA SELEÇÃO DE CANAL */}
            {showChoiceModal && (
              <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn text-white">
                <div className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 bg-neutral-900 border border-neutral-800 shadow-2xl transition-all">
                  <button
                    type="button"
                    onClick={() => setShowChoiceModal(false)}
                    className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer text-neutral-400 hover:text-white"
                  >
                    <span className="material-symbols-outlined text-xl">close</span>
                  </button>

                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                      <span className="material-symbols-outlined text-2xl">send</span>
                    </div>
                    <h3 className="font-headline font-black text-xl uppercase tracking-tight">
                      {isPt ? 'Como preferes enviar?' : 'How would you like to send?'}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                      {isPt 
                        ? 'Escolhe o canal preferido para a nossa equipa receber o teu pedido:' 
                        : 'Choose your preferred channel for our team to receive your request:'}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={handleSendEmail}
                      className="w-full p-4 rounded-2xl border border-neutral-800 bg-neutral-950/80 hover:border-primary hover:bg-neutral-950 text-left flex items-center gap-4 transition-all cursor-pointer group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform border border-neutral-700">
                        <span className="material-symbols-outlined text-lg">mail</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-headline font-bold text-xs uppercase tracking-wider">
                          {isPt ? 'Enviar por Email' : 'Send via Email'}
                        </h4>
                        <p className="text-[11px] text-neutral-400 mt-0.5">
                          {isPt ? 'Directo para pd.agency.digital01@gmail.com' : 'Directly to our email inbox'}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-sm text-neutral-400 group-hover:text-primary transition-colors">
                        arrow_forward
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="w-full p-4 rounded-2xl border border-neutral-800 bg-neutral-950/80 hover:border-emerald-500 hover:bg-neutral-950 text-left flex items-center gap-4 transition-all cursor-pointer group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-lg">chat</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-emerald-500">
                          {isPt ? 'Enviar via WhatsApp' : 'Send via WhatsApp'}
                        </h4>
                        <p className="text-[11px] text-neutral-400 mt-0.5">
                          {isPt ? 'Abre conversa direta com texto pronto' : 'Open direct chat with ready text'}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-sm text-neutral-400 group-hover:text-emerald-500 transition-colors">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
