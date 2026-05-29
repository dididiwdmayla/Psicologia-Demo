import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, JetBrains_Mono, Lora } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-lora',
});

import { PageLoader } from '@/components/PageLoader';

export const metadata: Metadata = {
  title: 'Layane Tanaka — Psicóloga TCC',
  description: 'Terapia Cognitivo-Comportamental. Ansiedade, depressão e reestruturação de crenças. Atendimento online e presencial.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable} ${lora.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="preload"
          href="/hero_consultorio.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/foto_layane.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className="antialiased font-sans bg-brand-bg text-brand-text overflow-x-hidden selection:bg-brand-accent selection:text-brand-bg" suppressHydrationWarning>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
