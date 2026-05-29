'use client';
import Image from 'next/image';
import { contentExport } from './HeroContent';
import { DropIcon } from './svg/DropIcon';
import { LeafIcon } from './svg/LeafIcon';
import { ImageFrame } from './ImageFrame';
import { ImageHalo } from './ImageHalo';

export function Hero() {
  const content = contentExport.siteContent.hero;
  const config = contentExport.siteConfig;

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center pt-24 bg-brand-bg overflow-hidden noise-bg">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center z-10">
        
        {/* Left: Content */}
        <div className="flex flex-col items-start pt-12 lg:pt-0">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-brand-champagne text-[10px]">★</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-text">Acolhimento e Reestruturação</span>
          </div>

          <h1 className="font-serif font-medium text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-tight text-brand-primary mb-6 whitespace-pre-wrap">
            {content.headline}
          </h1>

          <p className="font-serif italic text-xl lg:text-2xl text-brand-text-secondary max-w-md mb-10">
            {content.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <div className="flex flex-col gap-1 w-full sm:w-auto">
              <a 
                href={`https://wa.me/554491680046?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-bg font-mono text-xs uppercase tracking-widest hover:bg-[#D8D4E6] transition-colors text-center"
              >
                {contentExport.siteContent.cta.buttonText}
              </a>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] max-w-md mx-auto lg:max-w-none ml-auto">
          {/* Decorative ornaments pulsing */}
          <div className="absolute -top-10 -left-10 z-0 text-brand-sage animate-ornament" style={{ animationDelay: '0s' }}>
            <DropIcon className="w-16 h-16 opacity-30" />
          </div>
          <div className="absolute -bottom-12 -right-6 z-20 text-brand-accent animate-ornament" style={{ animationDelay: '3s' }}>
            <LeafIcon className="w-20 h-20 opacity-20" />
          </div>
          <div className="absolute top-1/2 -right-12 z-0 animate-ornament" style={{ animationDelay: '1.5s' }}>
            <div className="w-[1px] h-32 bg-brand-border-accent"></div>
          </div>

          <div className="relative w-full h-full animate-breathe shadow-[0_12px_40px_rgba(26,39,51,0.06)]">
            <ImageHalo color="lilac" />
            <ImageFrame className="w-full h-full">
              <Image 
                src="/hero_consultorio.jpg" 
                alt="Clínica"
                fill
                className="object-cover"
                style={{ filter: 'contrast(0.97) saturate(0.92) brightness(1.03)' }}
                referrerPolicy="no-referrer"
                priority
                unoptimized
              />
            </ImageFrame>
          </div>
        </div>

      </div>
    </section>
  );
}
