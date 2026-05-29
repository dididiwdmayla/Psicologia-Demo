'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { useHasMounted } from '@/hooks/useHasMounted';
import { Logo } from './Logo';
import { config } from '@/lib/config';

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hasMounted = useHasMounted();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const effectiveScrolled = hasMounted ? isScrolled : false;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          effectiveScrolled 
            ? 'bg-brand-bg/85 backdrop-blur-md border-brand-border py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Logo />
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#tratamentos" className="font-mono text-xs uppercase tracking-widest text-brand-text hover:text-brand-accent transition-colors">Abordagem</a>
            <a href="#doutora" className="font-mono text-xs uppercase tracking-widest text-brand-text hover:text-brand-accent transition-colors">A Psicóloga</a>
            <a href="#processo" className="font-mono text-xs uppercase tracking-widest text-brand-text hover:text-brand-accent transition-colors">Processo</a>
            <a href="#contato" className="font-mono text-xs uppercase tracking-widest text-brand-text hover:text-brand-accent transition-colors">Contato</a>
            
            <a 
              href={`https://wa.me/554491680046?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.`} 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-2.5 bg-brand-accent text-brand-bg font-mono text-xs uppercase tracking-widest hover:bg-[#2C4A5E] transition-colors"
            >
              Agendar Sessão
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button 
            className="md:hidden p-2 text-brand-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {isMobileMenuOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6L18 18" />
                </>
              ) : (
                <>
                  <path d="M4 8H20" />
                  <path d="M4 16H20" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-bg pt-24 px-6 flex flex-col gap-8 md:hidden">
          <a href="#tratamentos" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-brand-text">Abordagem</a>
          <a href="#doutora" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-brand-text">A Psicóloga</a>
          <a href="#processo" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-brand-text">Processo</a>
          <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-brand-text">Contato</a>
          <a 
              href={`https://wa.me/554491680046?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 py-4 bg-brand-accent text-brand-bg text-center font-mono text-sm uppercase tracking-widest"
            >
              Agendar Sessão
          </a>
        </div>
      )}
    </>
  );
}
