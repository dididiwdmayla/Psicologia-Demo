export function EditorialBreak() {
  return (
    <section className="w-full overflow-x-hidden py-[120px] lg:py-[200px] bg-brand-bg border-t border-brand-border">
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <h2 className="font-serif italic font-normal text-[clamp(2rem,5vw,3.5rem)] leading-snug text-brand-text" style={{ fontFamily: 'var(--font-lora)' }}>
          &quot;Não é a situação que nos afeta, mas a forma como pensamos sobre ela.&quot;
        </h2>
        <div className="mt-20 w-[80px] h-[1px] bg-brand-champagne"></div>
      </div>
    </section>
  );
}
