'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Espera TODOS os recursos da página carregarem
    const handleLoad = () => {
      // Pequeno delay pra garantir suavidade visual
      setTimeout(() => setIsLoading(false), 400);
    };

    // Se a página já carregou (cache), resolve imediatamente
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAFAF8]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Spinner sutil — verde-sálvia */}
            <svg
              className="w-8 h-8 text-[#B8C9A8] animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12" cy="12" r="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="32"
                strokeLinecap="round"
                className="opacity-30"
              />
              <circle
                cx="12" cy="12" r="10"
                stroke="#B8C9A8"
                strokeWidth="2"
                strokeDasharray="32"
                strokeDashoffset="8"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-serif text-lg text-brand-text-secondary tracking-wide">
              Layane Tanaka
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
