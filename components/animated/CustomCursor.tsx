'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 35, stiffness: 600, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Don't show custom cursor on touch devices or if reduced motion is preferred
    if (prefersReducedMotion || ('ontouchstart' in window) || navigator.maxTouchPoints > 0) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHoveringLink(true);
      }
      if (target.closest('.treatment-card')) {
        setIsHoveringCard(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHoveringLink(false);
      }
      if (target.closest('.treatment-card')) {
        setIsHoveringCard(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  let size = 14;
  if (isHoveringLink) size = 20;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex flex-col items-center justify-center mix-blend-multiply"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        className="text-[#B8C9A8] rounded-full flex items-center justify-center opacity-70"
        animate={{
          width: size,
          height: size,
          opacity: isHoveringLink ? 1 : 0.7,
        }}
        transition={{ type: 'spring', ...springConfig }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M12 2C12 2 8 8 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 8 12 2 12 2Z" />
          <path d="M12 16V20" />
        </svg>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ 
          opacity: isHoveringCard ? 1 : 0, 
          y: isHoveringCard ? 8 : 0 
        }}
        className="absolute top-full mt-2 font-mono text-[10px] whitespace-nowrap text-brand-accent tracking-wider font-medium uppercase"
      >
        Ver detalhes →
      </motion.div>
    </motion.div>
  );
}
