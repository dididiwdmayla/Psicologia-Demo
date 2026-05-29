'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useHasMounted } from '@/hooks/useHasMounted';
import Image from 'next/image';

interface Pillar {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

interface PillarsProps {
  pillars: Pillar[];
}

export const Pillars = ({ pillars }: PillarsProps) => {
  const hasMounted = useHasMounted();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detectar mobile e reduced-motion
  useEffect(() => {
    if (!hasMounted) return;
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, [hasMounted]);

  // Scroll reveal no mobile
  useEffect(() => {
    if (!hasMounted || !isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-pillar-index'));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          } else {
            // Remove apenas se saiu completamente da zona central
            if (activeIndex === index) setActiveIndex(null);
          }
        });
      },
      {
        root: null,
        rootMargin: '-25% 0px -25% 0px', // Zona central da tela
        threshold: 0,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [hasMounted, isMobile, activeIndex]);

  if (!hasMounted) return null;

  return (
    <section className="py-24 px-6 lg:py-40" aria-labelledby="pilares-titulo">
      <h2 className="font-mono text-xs text-brand-accent uppercase tracking-widest text-center mb-6">
        02 / COMO FUNCIONA
      </h2>
      <h3 id="pilares-titulo" className="font-serif font-medium text-3xl lg:text-4xl text-brand-text text-center mb-20 whitespace-pre-wrap">
        Do primeiro contato ao acompanhamento.
      </h3>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => {
          const isActive = isMobile
            ? activeIndex === index
            : activeIndex === index; // ambos usam mesmo estado

          return (
            <motion.div
              key={pillar.number}
              ref={(el) => { cardRefs.current[index] = el; }}
              data-pillar-index={index}
              className="relative overflow-hidden rounded-lg border border-brand-border bg-brand-bg group cursor-default"
              onMouseEnter={() => !isMobile && setActiveIndex(index)}
              onMouseLeave={() => !isMobile && setActiveIndex(null)}
              whileHover={(!isMobile && !prefersReducedMotion) ? { scale: 1.01 } : undefined}
              transition={{ duration: 0.4 }}
            >
              {/* Imagem revelada */}
              <motion.div
                className="absolute inset-0 z-0"
                initial={prefersReducedMotion ? { opacity: 0.3 } : { opacity: 0 }}
                animate={prefersReducedMotion ? { opacity: 0.3 } : { opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <Image
                  src={pillar.imageUrl}
                  alt={pillar.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#FAFAF8]/75" />
              </motion.div>

              {/* Conteúdo do card */}
              <div className="relative z-10 p-8">
                <span className="font-mono text-sm text-brand-sage mb-4 block">
                  {pillar.number}
                </span>
                <h3 className="font-serif font-medium text-[28px] text-brand-text mb-3">
                  {pillar.title}
                </h3>
                <p className="font-sans font-light text-brand-text-secondary text-sm leading-[1.75]">
                  {pillar.description}
                </p>
              </div>

              {/* Borda sutil quando ativo */}
              <motion.div
                className="absolute inset-0 border-2 rounded-lg pointer-events-none z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ borderColor: '#D8D4E6' }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
