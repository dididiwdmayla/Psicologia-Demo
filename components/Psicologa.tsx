'use client';
import { content } from '@/lib/content';
import { config } from '@/lib/config';
import Image from 'next/image';
import { ImageFrame } from './ImageFrame';
import { ImageHalo } from './ImageHalo';
import { useState, useRef, useEffect } from 'react';

export function Psicologa() {
  const [isFocused, setIsFocused] = useState(false);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      hoverTimerRef.current = setTimeout(() => {
        setIsFocused(true);
      }, 500);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    setIsFocused(false);
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  return (
    <section 
      id="doutora" 
      className={`py-24 lg:py-40 noise-bg section-doutora ${isFocused ? 'focused' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-mono text-xs text-brand-champagne uppercase tracking-widest flex items-center justify-center lg:justify-start mb-16">
          01 / A PSICÓLOGA
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-24 items-center">
          {/* Photo */}
          <div className="relative w-full aspect-[4/5] max-w-sm mx-auto lg:max-w-none shadow-[0_12px_40px_rgba(26,39,51,0.06)]">
            <ImageHalo color="sage" />
            <ImageFrame className="w-full h-full">
              <Image 
                src="/foto_layane.jpg"
                alt={config.owner.name}
                fill
                priority
                className="object-cover grayscale" // instructed to be B&W with warm filter
                style={{ filter: 'grayscale(100%) sepia(15%) contrast(0.95)' }}
                referrerPolicy="no-referrer"
                unoptimized
              />
            </ImageFrame>
          </div>

          {/* Texts */}
          <div className="flex flex-col">
            <h3 className="font-serif font-medium text-3xl lg:text-4xl text-brand-text mb-2">
              {config.owner.name}
            </h3>
            <span className="font-mono text-xs text-brand-text-secondary uppercase tracking-wider mb-10 block">
              {config.owner.role}
            </span>

            <div className="space-y-6">
              <div>
                <p className="font-sans font-light text-[17px] leading-[1.75] text-brand-text">
                  {content.about.paragraph1}
                </p>
                <div className="w-[60px] h-[1px] bg-brand-sage my-6"></div>
              </div>
              <div>
                <p className="font-sans font-light text-[17px] leading-[1.75] text-brand-text">
                  {content.about.paragraph2}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2">
                <span className="px-4 py-2 border border-brand-sage rounded-full font-mono text-[10px] uppercase tracking-wider text-brand-text-secondary">
                  Transtornos de Ansiedade
                </span>
                <span className="px-4 py-2 border border-brand-sage rounded-full font-mono text-[10px] uppercase tracking-wider text-brand-text-secondary">
                  Depressão
                </span>
                <span className="px-4 py-2 border border-brand-sage rounded-full font-mono text-[10px] uppercase tracking-wider text-brand-text-secondary">
                  Crenças Limitantes
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
