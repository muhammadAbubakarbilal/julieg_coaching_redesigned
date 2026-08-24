import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Julie G Coaching | Astrocartography, Relocation Astrology & Intuitive Guidance',
  description: 'Where should your next chapter begin? Certified Astrocartographer, Psychic Medium, and Author Julie Goetzinger helps you discover soul-aligned locations for love, career, and purpose.',
  keywords: [
    'Astrocartography reading',
    'Relocation astrology',
    'Julie Goetzinger',
    'Julie G Coaching',
    'Where to live astrology',
    'Intuitive life coaching',
    'Astrocartography consultation',
    'Helena Woods certified astrocartographer',
    'Free to Fly book'
  ],
  authors: [{ name: 'Julie Goetzinger' }],
  openGraph: {
    title: 'Julie G Coaching | Astrocartography & Intuitive Relocation Guidance',
    description: 'Where should your next chapter begin? Discover your soul-aligned cities with certified astrocartographer and intuitive mentor Julie Goetzinger.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Julie G Coaching',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FAF8F5] text-[#1E293B] antialiased selection:bg-[#C59E4E]/20 selection:text-[#0B1325]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
