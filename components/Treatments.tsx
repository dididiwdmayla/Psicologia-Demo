'use client';
import { services } from '@/lib/services-data';
import { Leaf, Sun, Compass, Monitor } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  Sun,
  Compass,
  Screen: Monitor
};

export function Treatments() {
  return (
    <section id="tratamentos" className="w-full overflow-x-hidden py-24 lg:py-40 bg-brand-bg-secondary">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h2 className="font-mono text-xs text-brand-accent uppercase tracking-widest mb-6">
            03 / TRATAMENTOS
          </h2>
          <h3 className="font-serif font-medium text-3xl lg:text-4xl text-brand-text">
            O que oferecemos.
          </h3>
        </div>

        {/* Asymmetrical masonry-like grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((t, idx) => {
            const IconComponent = iconMap[t.icon] || Leaf;
            return (
              <div 
                key={t.id} 
                className={`treatment-card group relative ${t.bgColor || 'bg-brand-bg'} p-8 lg:p-12 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(26,39,51,0.06)] cursor-none ${
                  idx % 2 !== 0 ? 'lg:mt-24' : ''
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand-text-secondary border border-brand-border-accent px-3 py-1 rounded-full">{t.id}</span>
                    <IconComponent className="w-6 h-6 text-brand-accent opacity-60" />
                  </div>
                  <h4 className="font-serif font-medium text-2xl text-brand-text mb-4">
                    {t.title}
                  </h4>
                  <p className="font-sans font-light text-sm leading-[1.7] text-brand-text-secondary flex-grow">
                    {t.description}
                  </p>
                </div>

                {/* Animated bottom border on hover */}
                <div className="absolute bottom-0 left-8 h-[1px] w-[40px] bg-brand-accent transition-all duration-500 group-hover:w-[calc(100%-64px)]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
