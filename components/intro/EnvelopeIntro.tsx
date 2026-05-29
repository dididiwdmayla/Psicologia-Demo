'use client';

import { useState, useEffect } from 'react';
import { useHasMounted } from '@/hooks/useHasMounted';
import { motion } from 'motion/react';
import { DropIcon } from '../svg/DropIcon';
import { Envelope } from '../svg/Envelope';

export function EnvelopeIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'initial' | 'opening' | 'revealed' | 'exiting'>('initial');

  const hasMounted = useHasMounted();

  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    if (!hasMounted) return;
    // Media query to skip animation if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeenIntro = sessionStorage.getItem('layane-intro-seen');
    
    if (prefersReducedMotion || hasSeenIntro === 'true') {
      setIsSkipped(true);
      onComplete();
      return;
    }

    sessionStorage.setItem('layane-intro-seen', 'true');

    // Phase 1 -> 2 (0 - 800ms)
    const t1 = setTimeout(() => setPhase('opening'), 800);
    
    // Phase 2 -> 3 (800 - 1700ms)
    const t2 = setTimeout(() => setPhase('revealed'), 1700);
    
    // Phase 3 -> 4 (1700 - 2200ms)
    const t3 = setTimeout(() => setPhase('exiting'), 2200);

    // End (2200ms -> End)
    const t4 = setTimeout(() => onComplete(), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [hasMounted, onComplete]);

  // If we decided to skip, return null immediately
  if (isSkipped) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-brand-bg flex items-center justify-center p-4 noise-bg"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: phase === 'exiting' ? 0 : 1,
        scale: phase === 'exiting' ? 1.05 : 1,
        filter: phase === 'exiting' ? 'blur(8px)' : 'blur(0px)'
      }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-[480px] h-[340px]">
        {/* The Envelope */}
        <Envelope isOpen={phase === 'opening' || phase === 'revealed' || phase === 'exiting'} />
        
        {/* The Content inside the envelope, revealed later */}
        {(phase === 'revealed' || phase === 'exiting') && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none mt-4">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <DropIcon className="w-5 h-5 text-[#D8D4E6] mb-2" />
            </motion.div>
            
            <motion.h1
              className="font-serif font-semibold text-[clamp(2rem,5vw,3.5rem)] leading-none text-brand-text tracking-wide"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              LAYANE TANAKA
            </motion.h1>
            
            <motion.span
              className="font-serif italic text-lg text-brand-text-secondary mt-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              psicologia clínica
            </motion.span>
          </div>
        )}
      </div>
      
      {/* Skip button */}
      {(phase === 'opening' || phase === 'revealed') && (
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="absolute bottom-8 right-8 font-mono uppercase text-[10px] tracking-widest text-brand-text-secondary hover:opacity-100 transition-opacity"
          onClick={onComplete}
        >
          pular →
        </motion.button>
      )}
    </motion.div>
  );
}
