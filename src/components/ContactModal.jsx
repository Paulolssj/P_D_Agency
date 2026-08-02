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

  useEffect(() => {
    if (open) {
      setFormData((prev) => ({
        ...prev,
        package_interest: defaultPackage || (lang === 'pt' ? 'Projeto Personalizado' : 'Custom Project'),
        support_plan: lang === 'pt' ? 'Suporte Básico' : 'Basic Support',
      }));
      setSuccess(false);
      setError('');
    }
  }, [open, defaultPackage, lang]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      try {
        await axios.post(`${API}/contact`, {
          ...formData,
          message: `[Interesse: ${formData.package_interest}] \n\n${formData.message}`
        });
      } catch (err) {
        // Backend fallback
      }

      // Envia email direto para pd.agency.digital01@gmail.com
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

  const isPt = lang === 'pt';

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={`border text-white max-w-xl p-8 overflow-y-auto max-h-[90vh] rounded-3xl ${
          'bg-neutral-900 border-neutral-800'
        }`}
        style={{ borderRadius: '1.5rem' }}
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
            onSubmit={handleSubmit}
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
              <p className="text-red-400 text-xs">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-neutral-900 text-white hover:bg-primary px-8 py-4 rounded-2xl font-headline font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg cursor-pointer disabled:opacity-50 border border-neutral-700"
            >
              <span>{loading ? (isPt ? 'A ENVIAR...' : 'SENDING...') : (isPt ? 'Enviar Ideia' : 'Send Idea')}</span>
              <span className="material-symbols-outlined text-base">send</span>
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
