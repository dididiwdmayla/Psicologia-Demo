'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function InkReveal({ isReady }: { isReady: boolean }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isReady) {
      setShouldAnimate(true);
    }
  }, [isReady]);

  if (!shouldAnimate) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute w-[100px] h-[100px] bg-[#D8D4E6] opacity-40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        animate={{ 
          scale: 40,
          opacity: [0, 0.4, 0], 
          rotate: 45
        }}
        transition={{ 
          duration: 1.5, 
          ease: "circOut"
        }}
      />
    </div>
  );
}
