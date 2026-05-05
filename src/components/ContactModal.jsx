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

export default function ContactModal({ open, onClose, defaultPackage }) {
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
        package_interest: defaultPackage || 'Promoção Lançamento',
        support_plan: 'Pacote Básico',
      }));
      setSuccess(false);
      setError('');
    }
  }, [open, defaultPackage]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Concatenating plans for the backend if it only expects one field, 
      // or sending separately if the backend supports it.
      const dataToSubmit = {
        ...formData,
        message: `[Interesse: ${formData.package_interest}] [Suporte: ${formData.support_plan}] \n\n${formData.message}`
      };
      await axios.post(`${API}/contact`, dataToSubmit);
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2800);
    } catch (err) {
      setError('Erro ao enviar. Por favor tenta novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="border text-white max-w-md p-8 overflow-y-auto max-h-[90vh]"
        style={{ backgroundColor: '#1a1a1a', borderColor: 'rgba(72,72,71,0.3)' }}
      >
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl font-bold text-white uppercase tracking-tight">
            SOLICITAR ORÇAMENTO
          </DialogTitle>
          <p className="text-sm font-light mt-1" style={{ color: '#adaaaa' }}>
            Conta-nos sobre o teu projeto.
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
              MENSAGEM ENVIADA!
            </p>
            <p className="text-sm mt-2" style={{ color: '#adaaaa' }}>
              Entraremos em contacto em breve.
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
                Nome
              </Label>
              <input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="O teu nome"
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
                placeholder="teu@email.com"
                className="w-full rounded-md px-4 py-3 text-sm text-white transition-all outline-none"
                style={{
                  backgroundColor: '#0e0e0e',
                  border: '1px solid rgba(72,72,71,0.4)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(129,236,255,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(72,72,71,0.4)')}
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label className="font-bold text-[10px] uppercase tracking-widest" style={{ color: '#adaaaa' }}>
                  Projeto
                </Label>
                <Select
                  value={formData.package_interest}
                  onValueChange={(val) =>
                    setFormData((prev) => ({ ...prev, package_interest: val }))
                  }
                >
                  <SelectTrigger className="text-white h-11 text-xs" style={{ backgroundColor: '#0e0e0e', border: '1px solid rgba(72,72,71,0.4)' }}>
                    <SelectValue placeholder="Seleciona o projeto..." />
                  </SelectTrigger>
                  <SelectContent style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(72,72,71,0.4)' }}>
                    {['Promoção Lançamento', 'Projeto Personalizado'].map((opt) => (
                      <SelectItem key={opt} value={opt} className="text-white focus:bg-[#81ecff]/10 focus:text-[#81ecff] cursor-pointer text-xs">
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="font-bold text-[10px] uppercase tracking-widest" style={{ color: '#adaaaa' }}>
                  Plano de Suporte (Obrigatório)
                </Label>
                <Select
                  value={formData.support_plan}
                  onValueChange={(val) =>
                    setFormData((prev) => ({ ...prev, support_plan: val }))
                  }
                >
                  <SelectTrigger className="text-white h-11 text-xs border-primary/20" style={{ backgroundColor: '#0e0e0e', border: '1px solid rgba(129,236,255,0.2)' }}>
                    <SelectValue placeholder="Seleciona o suporte..." />
                  </SelectTrigger>
                  <SelectContent style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(72,72,71,0.4)' }}>
                    {['Pacote Básico', 'Pacote Plus'].map((opt) => (
                      <SelectItem key={opt} value={opt} className="text-white focus:bg-[#81ecff]/10 focus:text-[#81ecff] cursor-pointer text-xs">
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="font-bold text-xs uppercase tracking-widest"
                style={{ color: '#adaaaa' }}
              >
                Mensagem
              </Label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Fala-nos sobre o teu projeto..."
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
              {loading ? 'A ENVIAR...' : 'ENVIAR MENSAGEM'}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
