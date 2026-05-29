'use client';
import { config } from '@/lib/config';
import { useState } from 'react';

export function Contact() {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const constructWhatsAppUrl = () => {
    return `https://wa.me/554491680046?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.`;
  };

  return (
    <section id="contato" className="w-full overflow-x-hidden py-24 lg:py-40 bg-brand-bg">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Social */}
        <div className="flex flex-col justify-center">
           <h2 className="font-mono text-xs text-brand-accent uppercase tracking-widest mb-6">
              REDES SOCIAIS
            </h2>
            <a 
              href={`https://instagram.com/${config.contact.instagram.replace('@', '')}`} 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col"
            >
               <span className="font-serif font-medium text-4xl lg:text-6xl text-brand-text group-hover:text-brand-accent transition-colors">
                 {config.contact.instagram}
               </span>
               <span className="font-mono text-xs uppercase tracking-widest text-brand-sage mt-4 group-hover:text-brand-accent transition-colors">seguir no instagram →</span>
            </a>
        </div>

        {/* Mini form */}
        <div className="bg-brand-bg-secondary p-8 lg:p-12 border border-brand-border h-full flex flex-col justify-center">
            <h3 className="font-serif font-medium text-2xl text-brand-text mb-8">Envie uma mensagem</h3>
            
            <div className="space-y-6">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-brand-text-secondary block mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-brand-border-accent py-3 focus:outline-none focus:border-brand-accent font-sans text-brand-text transition-colors"
                  placeholder="Nome completo"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-brand-text-secondary block mb-2">Mensagem</label>
                <textarea 
                  rows={2}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full bg-transparent border-b border-brand-border-accent py-3 focus:outline-none focus:border-brand-accent font-sans text-brand-text transition-colors resize-none"
                  placeholder="Como podemos te ajudar hoje?"
                ></textarea>
              </div>

              <div className="flex flex-col items-start gap-1">
                <a 
                  href={constructWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-8 font-mono text-xs uppercase tracking-widest text-brand-accent hover:text-[#2C4A5E] transition-colors"
                 >
                   ENVIAR PELO WHATSAPP →
                 </a>
                 <span className="font-mono text-[9px] text-brand-text-secondary opacity-60">* número fictício para demonstração</span>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
}
