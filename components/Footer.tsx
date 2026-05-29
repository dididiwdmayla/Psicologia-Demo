import { config } from '@/lib/config';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="w-full overflow-x-hidden bg-[#1A2733] text-brand-bg py-24 lg:py-32 relative z-10 flex flex-col items-center">
      
      {/* Centered Large Info */}
      <div className="flex flex-col items-center mb-24 text-center px-6">
        <Logo variant="light" className="scale-150 transform mb-12 origin-center" />
        <p className="font-serif italic font-normal text-2xl lg:text-3xl text-brand-bg opacity-90 mb-10 max-w-sm">
          &quot;{config.studio.tagline}&quot;
        </p>
        <div className="w-[80px] h-[1px] bg-brand-sage opacity-50"></div>
      </div>

      {/* Grid columns */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-24 opacity-80">
        <div>
           <p className="font-mono text-[10px] uppercase tracking-widest text-brand-sage mb-4">ENDEREÇO</p>
           <p className="font-sans text-sm max-w-[200px] mx-auto md:mx-0">{config.studio.address}</p>
        </div>
        <div className="md:text-center">
           <p className="font-mono text-[10px] uppercase tracking-widest text-brand-sage mb-4">CONTATO</p>
           <p className="font-sans text-sm">WhatsApp: {config.contact.whatsappDisplay}</p>
        </div>
        <div className="md:text-right">
           <p className="font-mono text-[10px] uppercase tracking-widest text-brand-sage mb-4">REDES SOCIAIS</p>
           <a href={`https://instagram.com/${config.contact.instagram.replace('@', '')}`} className="font-sans text-sm hover:text-brand-sage transition-colors">{config.contact.instagram}</a>
        </div>
      </div>

      {/* Micro-copy line */}
      <div className="w-full text-center px-6">
        <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-bg opacity-40">
          © {new Date().getFullYear()} {config.studio.name} · {config.owner.name} · {config.owner.role.split('—')[1]?.trim() || config.owner.role}
        </p>
      </div>
    </footer>
  );
}
