export function Logo({ className, variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  const textColor = variant === 'dark' ? 'text-brand-accent' : 'text-brand-bg';
  const iconColor = variant === 'dark' ? 'text-brand-sage' : 'text-brand-champagne';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`font-serif font-semibold tracking-wide ${textColor}`}>LAYANE TANAKA</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-3.5 h-3.5 ${iconColor}`}>
          <path d="M12 2C12 2 8 8 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 8 12 2 12 2Z" />
          <path d="M12 16V20" />
      </svg>
    </div>
  );
}
