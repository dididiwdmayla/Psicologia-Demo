'use client';

export function ImageHalo({ color, className = '' }: { color: 'lilac' | 'sage', className?: string }) {
  const haloColor = color === 'lilac' ? 'rgba(216, 212, 230, 0.7)' : 'rgba(184, 201, 168, 0.6)';
  
  return (
    <div 
      className={`absolute z-[-1] pointer-events-none rounded-[30%] halo-layer blur-[20px] md:blur-[40px] opacity-70 ${className}`}
      style={{
        inset: '-40px',
        background: `radial-gradient(ellipse at center, ${haloColor} 0%, transparent 70%)`
      }}
    />
  );
}
