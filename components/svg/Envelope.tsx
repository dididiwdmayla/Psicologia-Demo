export function Envelope({ className, isOpen }: { className?: string; isOpen: boolean }) {
  return (
    <div className={`relative w-full h-full max-w-[480px] max-h-[340px] mx-auto border border-brand-border bg-brand-bg-secondary shadow-[0_16px_48px_rgba(26,39,51,0.15)] overflow-hidden transition-all duration-1000 ${className}`} style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
      
      {/* Back layer / Interior */}
      <div className="absolute inset-0 bg-[#DEE5EA] z-0 flex flex-col items-center justify-center p-8">
         {/* Interior Content will go here via composition or layout */}
      </div>

      {/* Top Flap */}
      <div 
        className="absolute top-0 left-0 w-full h-1/2 origin-top z-20"
        style={{
          transition: 'transform 900ms ease-out',
          transform: isOpen ? 'translateY(-20px) rotateX(80deg)' : 'translateY(0) rotateX(0deg)',
        }}
      >
        <svg viewBox="0 0 480 170" preserveAspectRatio="none" className="w-full h-full text-brand-bg-secondary fill-current drop-shadow-md">
          <path d="M0,0 L240,170 L480,0 Z" stroke="rgba(26,39,51,0.08)" strokeWidth="1"/>
        </svg>
      </div>

      {/* Bottom Flap */}
      <div 
        className="absolute bottom-0 left-0 w-full h-full origin-bottom z-10"
        style={{
          transition: 'transform 900ms ease-out',
          transform: isOpen ? 'translateY(40px) rotateX(-40deg)' : 'translateY(0) rotateX(0deg)',
        }}
      >
        <svg viewBox="0 0 480 340" preserveAspectRatio="none" className="w-full h-full text-brand-bg-secondary fill-current drop-shadow-sm">
          <path d="M0,340 L0,0 L240,170 L480,0 L480,340 Z" stroke="rgba(26,39,51,0.08)" strokeWidth="1"/>
        </svg>
      </div>
    </div>
  );
}
