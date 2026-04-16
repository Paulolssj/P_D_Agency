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

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ContactModal({ open, onClose, defaultPackage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package_interest: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (open) {
      setFormData((prev) => ({
        ...prev,
        package_interest: defaultPackage || '',
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
      await axios.post(`${API}/contact`, formData);
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
        className="border text-white max-w-md p-8"
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
                data-testid="contact-name-input"
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
                data-testid="contact-email-input"
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
                className="font-bold text-xs uppercase tracking-widest"
                style={{ color: '#adaaaa' }}
              >
                Pacote de Interesse
              </Label>
              <Select
                value={formData.package_interest}
                onValueChange={(val) =>
                  setFormData((prev) => ({ ...prev, package_interest: val }))
                }
              >
                <SelectTrigger
                  data-testid="contact-package-select"
                  className="text-white h-12"
                  style={{
                    backgroundColor: '#0e0e0e',
                    border: '1px solid rgba(72,72,71,0.4)',
                  }}
                >
                  <SelectValue placeholder="Seleciona um pacote..." />
                </SelectTrigger>
                <SelectContent
                  style={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid rgba(72,72,71,0.4)',
                  }}
                >
                  {['Pacote Projeto', 'Manutenção', 'Ambos', 'Outro / Não tenho a certeza'].map(
                    (opt) => (
                      <SelectItem
                        key={opt}
                        value={opt}
                        className="text-white focus:bg-[#81ecff]/10 focus:text-[#81ecff] cursor-pointer"
                      >
                        {opt}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
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
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Fala-nos sobre o teu projeto, objetivos e ideias..."
                data-testid="contact-message-input"
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
              <p className="text-red-400 text-xs" data-testid="contact-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              data-testid="contact-submit-button"
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
