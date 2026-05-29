'use client';
import { useState, useEffect } from 'react';
import { useHasMounted } from '@/hooks/useHasMounted';
import { EnvelopeIntro } from '@/components/intro/EnvelopeIntro';
import { InkReveal } from '@/components/intro/InkReveal';
import { CustomCursor } from '@/components/animated/CustomCursor';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Psicologa } from '@/components/Psicologa';
import { Pillars } from '@/components/Pillars';
import { EditorialBreak } from '@/components/EditorialBreak';
import { Treatments } from '@/components/Treatments';
import { Process } from '@/components/Process';
import { Unit } from '@/components/Unit';
import { Contact } from '@/components/Contact';
import { InkTransition } from '@/components/animated/InkTransition';
import { Footer } from '@/components/Footer';
import { content } from '@/lib/content';

export default function Page() {
  const [introFinished, setIntroFinished] = useState(false);
  const [triggerReveal, setTriggerReveal] = useState(false);
  const hasMounted = useHasMounted();

  useEffect(() => {
    // If user has already seen the intro, skip everything instantly.
    if (hasMounted && sessionStorage.getItem('layane-intro-seen') === 'true') {
      setIntroFinished(true);
    }
  }, [hasMounted]);

  const handleEnvelopeComplete = () => {
    setTriggerReveal(true);
    setTimeout(() => {
      setIntroFinished(true); // Now the main content is fully interactable
    }, 1000); // 1s reveal transition time
  };

  return (
    <main className="w-full relative selection:bg-brand-accent selection:text-brand-bg pb-0">
      {!introFinished && <EnvelopeIntro onComplete={handleEnvelopeComplete} />}
      {!introFinished && triggerReveal && <InkReveal isReady={true} />}

      {/* When intro finishes or isn't playing, ensure interaction works on content */}
      <div className={!introFinished && !triggerReveal ? "opacity-0 invisible h-0 overflow-hidden" : ""}>
        <CustomCursor />
        <Header />
        <Hero />
        <Psicologa />
        <Pillars pillars={content.pillars} />
        <EditorialBreak />
        <Treatments />
        <Process />
        <Unit />
        <Contact />
        <InkTransition />
        <Footer />
      </div>
    </main>
  );
}
