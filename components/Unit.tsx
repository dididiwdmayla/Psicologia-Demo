import { config } from '@/lib/config';

export function Unit() {
  return (
    <section className="py-24 lg:py-40 bg-brand-bg-secondary noise-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Information */}
          <div className="flex flex-col">
            <h2 className="font-mono text-xs text-brand-accent uppercase tracking-widest mb-6">
              05 / VENHA NOS VISITAR
            </h2>
            <h3 className="font-serif font-semibold text-4xl lg:text-5xl text-brand-text mb-12">
              Aguardamos sua visita.
            </h3>

            <div className="space-y-8">
              <div>
                <p className="font-serif font-medium text-2xl text-brand-text mb-2">ENDEREÇO</p>
                <p className="font-sans font-normal text-[17px] text-brand-text-secondary">{config.studio.address}</p>
              </div>

              <div>
                 <p className="font-serif font-medium text-2xl text-brand-text mb-2">CONTATO</p>
                 <p className="font-sans font-normal text-[17px] text-brand-text-secondary">WhatsApp: {config.contact.whatsappDisplay}</p>
              </div>

              <div>
                 <p className="font-serif font-medium text-2xl text-brand-text mb-2">HORÁRIOS</p>
                 <p className="font-mono text-xs uppercase text-brand-text-secondary tracking-widest">{config.studio.hours}</p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-start gap-1">
               <a 
                href={`https://wa.me/554491680046?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.`}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-8 py-4 bg-brand-accent text-brand-bg font-mono text-xs uppercase tracking-widest hover:bg-[#2C4A5E] transition-colors"
               >
                 AGENDAR SESSÃO PELO WHATSAPP
               </a>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[400px] shadow-[0_12px_40px_rgba(26,39,51,0.06)] overflow-hidden">
             {/* Grayscale Map iframe. We will use a general location map for Maringa */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d117188.08638148386!2d-52.0202167098481!3d-23.427771746200234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd6dfe48d3dbb%3A0xe7f9ab7da60f64c6!2sMaring%C3%A1%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1707921200000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) sepia(20%) opacity(0.8) contrast(1.1)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
