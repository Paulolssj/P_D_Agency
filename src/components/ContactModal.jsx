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
        className="border text-white max-w-md p-8 overflow-y-auto max-h-[90vh]"
        style={{ backgroundColor: '#1a1a1a', borderColor: 'rgba(72,72,71,0.3)' }}
      >
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl font-bold text-white uppercase tracking-tight">
            {isPt ? 'SOLICITAR ORÇAMENTO' : 'REQUEST A QUOTE'}
          </DialogTitle>
          <p className="text-sm font-light mt-1" style={{ color: '#adaaaa' }}>
            {isPt ? 'Conta-nos sobre o teu projeto ou envia direto para' : 'Tell us about your project or email us directly at'}{' '}
            <a href="mailto:pd.agency.digital01@gmail.com" className="text-primary font-bold hover:underline">
              pd.agency.digital01@gmail.com
            </a>
          </p>
        </DialogHeader>

        {success ? (
          <div className="text-center py-8" data-testid="contact-success">
            <span
              className="material-symbols-outlined"
              style={{ color: '#81ecff', fontSize: '3rem' }}
            >
              check_circle
            </span>
            <p className="text-white font-headline text-xl font-bold mt-4">
              {isPt ? 'MENSAGEM ENVIADA!' : 'MESSAGE SENT!'}
            </p>
            <p className="text-sm mt-2" style={{ color: '#adaaaa' }}>
              {isPt ? 'Entraremos em contacto em breve.' : 'We will get back to you shortly.'}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 mt-4"
            data-testid="contact-form"
          >
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="font-bold text-xs uppercase tracking-widest"
                style={{ color: '#adaaaa' }}
              >
                {isPt ? 'Nome' : 'Name'}
              </Label>
              <input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={isPt ? 'O teu nome' : 'Your full name'}
                className="w-full rounded-md px-4 py-3 text-sm text-white transition-all outline-none"
                style={{
                  backgroundColor: '#0e0e0e',
                  border: '1px solid rgba(72,72,71,0.4)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(129,236,255,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(72,72,71,0.4)')}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="font-bold text-xs uppercase tracking-widest"
                style={{ color: '#adaaaa' }}
              >
                Email
              </Label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={isPt ? 'teu@email.com' : 'your@email.com'}
                className="w-full rounded-md px-4 py-3 text-sm text-white transition-all outline-none"
                style={{
                  backgroundColor: '#0e0e0e',
                  border: '1px solid rgba(72,72,71,0.4)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(129,236,255,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(72,72,71,0.4)')}
              />
            </div>

            <div className="space-y-2">
              <Label className="font-bold text-[10px] uppercase tracking-widest" style={{ color: '#adaaaa' }}>
                {isPt ? 'Projeto / Serviço' : 'Project / Service'}
              </Label>
              <Select
                value={formData.package_interest}
                onValueChange={(val) =>
                  setFormData((prev) => ({ ...prev, package_interest: val }))
                }
              >
                <SelectTrigger className="text-white h-11 text-xs" style={{ backgroundColor: '#0e0e0e', border: '1px solid rgba(72,72,71,0.4)' }}>
                  <SelectValue placeholder={isPt ? 'Seleciona o projeto...' : 'Select project type...'} />
                </SelectTrigger>
                <SelectContent style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(72,72,71,0.4)' }}>
                  {(isPt 
                    ? ['Desenvolvimento Web', 'Engenharia de Software', 'Branding & UI/UX', 'Consultoria Digital']
                    : ['Web Development', 'Software Engineering', 'Branding & UI/UX', 'Digital Consulting']
                  ).map((opt) => (
                    <SelectItem key={opt} value={opt} className="text-white focus:bg-[#81ecff]/10 focus:text-[#81ecff] cursor-pointer text-xs">
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="font-bold text-xs uppercase tracking-widest"
                style={{ color: '#adaaaa' }}
              >
                {isPt ? 'Mensagem' : 'Message'}
              </Label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder={isPt ? 'Fala-nos sobre o teu projeto...' : 'Tell us about your project details...'}
                className="w-full rounded-md px-4 py-3 text-sm text-white transition-all outline-none resize-none"
                style={{
                  backgroundColor: '#0e0e0e',
                  border: '1px solid rgba(72,72,71,0.4)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(129,236,255,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(72,72,71,0.4)')}
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
              className="w-full py-4 rounded-md font-label font-black uppercase tracking-[0.2em] text-sm transition-all active:scale-[0.99] disabled:opacity-50"
              style={{
                background: 'linear-gradient(to right, #81ecff, #00e3fd)',
                color: '#004d57',
              }}
            >
              {loading 
                ? (isPt ? 'A ENVIAR...' : 'SENDING...') 
                : (isPt ? 'ENVIAR MENSAGEM' : 'SEND MESSAGE')}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
