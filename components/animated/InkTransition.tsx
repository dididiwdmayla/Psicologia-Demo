'use client';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function InkTransition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <div ref={ref} className="relative w-full h-[150px] overflow-hidden bg-brand-bg flex items-end">
       {isInView && (
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-[#B8C9A8] opacity-30 origin-bottom"
          style={{ height: '300px', borderRadius: '50% 50% 0 0 / 20% 40% 0 0' }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
       )}
    </div>
  );
}
