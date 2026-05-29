export function ImageFrame({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`image-frame relative ${className}`}>
      <style>{`
        .image-frame::before {
          content: '';
          position: absolute;
          inset: -8px;
          border: 1px solid rgba(62, 102, 128, 0.25);
          pointer-events: none;
          z-index: 2;
        }
        .image-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 0.5px solid rgba(62, 102, 128, 0.15);
          pointer-events: none;
          z-index: 2;
        }
      `}</style>
      
      {/* Corner Ornaments */}
      <div className="absolute flex justify-between w-full h-full pointer-events-none z-10" style={{ top: '-8px', left: '-8px', width: 'calc(100% + 16px)', height: 'calc(100% + 16px)' }}>
        {/* Top Left */}
        <svg className="absolute top-0 left-0 text-brand-champagne w-2 h-2 opacity-60" viewBox="0 0 8 8" fill="none">
          <path d="M0 0V8H1V1H8V0H0Z" fill="currentColor"/>
        </svg>
        {/* Top Right */}
        <svg className="absolute top-0 right-0 text-brand-champagne w-2 h-2 opacity-60" viewBox="0 0 8 8" fill="none">
          <path d="M8 0V8H7V1H0V0H8Z" fill="currentColor"/>
        </svg>
        {/* Bottom Left */}
        <svg className="absolute bottom-0 left-0 text-brand-champagne w-2 h-2 opacity-60" viewBox="0 0 8 8" fill="none">
          <path d="M0 8V0H1V7H8V8H0Z" fill="currentColor"/>
        </svg>
        {/* Bottom Right */}
        <svg className="absolute bottom-0 right-0 text-brand-champagne w-2 h-2 opacity-60" viewBox="0 0 8 8" fill="none">
          <path d="M8 8V0H7V7H0V8H8Z" fill="currentColor"/>
        </svg>
      </div>

      {children}
    </div>
  );
}
