'use client';
import { content } from '@/lib/content';
import { useState, useRef, useEffect } from 'react';

export function Process() {
  const { title, description } = content.approach;
  const items = content.pillars;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    
    // We only attach scroll logic if not reduced motion
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      const scrolled = -rect.top + viewportHeight * 0.5;
      const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
      setScrollProgress(progress);
    };
    
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const isLit = (numberIndex: number) => {
    if (isReducedMotion) return true;
    const threshold = (numberIndex + 1) / items.length; 
    return scrollProgress >= threshold - 0.1; // adding a small buffer so it lights up slightly before
  };

  const progressHeight = isReducedMotion ? '100%' : `${scrollProgress * 100}%`;

  return (
    <section id="processo" ref={sectionRef} className="w-full relative py-24 lg:py-40 bg-brand-bg overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* Sticky Title */}
        <div className="lg:w-1/3 lg:sticky lg:top-40 h-[fit-content]">
          <h2 className="font-mono text-xs text-brand-accent uppercase tracking-widest mb-6">
            04 / ABORDAGEM
          </h2>
          <h3 className="font-serif font-medium text-3xl lg:text-4xl text-brand-text mb-4">
            {title}
          </h3>
          <p className="font-sans font-light text-[17px] leading-[1.75] text-brand-text-secondary">
             {description}
          </p>
        </div>

        {/* Steps mapping vertically */}
        <div className="lg:w-2/3 relative pl-8 lg:pl-16">
          {/* Vertical line connecting steps */}
          <div className="absolute top-10 bottom-10 left-0 w-[2px] bg-brand-sage/30 hidden lg:block"></div>
          <div 
            className="absolute top-10 left-0 w-[2px] bg-brand-sage hidden lg:block"
            style={{ height: progressHeight, transition: 'height 200ms ease-out' }}
          ></div>
          
          <div className="space-y-24 lg:space-y-32">
            {items.map((item, idx) => {
              const lit = isLit(idx);
              return (
                <div key={idx} className="relative">
                  <span 
                    className="absolute -left-[5.5rem] lg:-left-[7rem] top-0 font-serif font-light text-5xl lg:text-6xl leading-none"
                    style={{
                      color: lit ? '#B8C9A8' : '#D4E0CC',
                      opacity: lit ? 1 : 0.4,
                      transform: lit ? 'scale(1.1)' : 'scale(1)',
                      textShadow: lit ? '0 0 16px rgba(184, 201, 168,0.4)' : 'none',
                      transition: 'all 400ms ease-out'
                    }}
                  >
                    {item.number}
                  </span>
                  
                  <h4 className="font-serif font-medium text-[28px] text-brand-text mb-4">
                    {item.title}
                  </h4>
                  <p className="font-sans font-light text-base leading-[1.75] text-brand-text-secondary max-w-[560px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
