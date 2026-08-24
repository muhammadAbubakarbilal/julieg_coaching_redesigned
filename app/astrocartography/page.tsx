'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import InteractiveMapPreview from '@/components/InteractiveMapPreview';
import { PLANETARY_LINES, ASTRO_ANGLES } from '@/lib/data/astrocartography';
import { SERVICES } from '@/lib/data/services';
import { Globe, Compass, CheckCircle2, ArrowRight, Star, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function AstrocartographyPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'reading-60' | 'reading-120' | 'followup'>('reading-60');

  const openBooking = (type: 'reading-60' | 'reading-120' | 'followup' = 'reading-60') => {
    setBookingType(type);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8DFC8]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
            <Globe className="w-4 h-4 text-[#C59E4E]" />
            <span>The Astrology of Location & Relocation</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325] leading-tight">
            How Astrocartography Maps Your Soul&apos;s Next Horizon
          </h1>

          <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mx-auto">
            Discover why certain cities ignite your vitality and prosperity while others feel heavy and stagnant—and how to intentionally choose places where your energy thrives.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openBooking('reading-60')}
              className="w-full sm:w-auto px-8 py-4 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-sm uppercase tracking-wider font-bold rounded-full shadow-lg transition-all flex items-center justify-center gap-2.5 border border-[#C59E4E]/40 cursor-pointer"
            >
              <span>Book Your Reading ($333)</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
            <a
              href="#explainer-details"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#F5EFEB] text-[#0B1325] text-sm font-bold rounded-full border border-[#D8CFC4] text-center transition-colors"
            >
              Learn the Mechanics
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Map Visual */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1325] leading-snug">
              Experience Your Chart Across the Globe
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              Every person has unique planetary lines spanning the Earth based on their exact moment of birth.
            </p>
          </div>

          <InteractiveMapPreview />

          {/* Core Definition */}
          <div id="explainer-details" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFC8] shadow-xs space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
              <Compass className="w-4 h-4 text-[#C59E4E]" />
              <span>Fundamental Concepts</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1325] leading-snug">
              What Exactly is Astrocartography?
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
              <p>
                Astrocartography (pioneered in the 1970s by astrologer Jim Lewis) is a specialized branch of locational astrology. When you were born, every planet occupied a specific astronomical degree in the heavens.
              </p>
              <p>
                Astrocartography projects those planetary positions around the globe, drawing longitudinal lines where planets were rising on the eastern horizon (<strong>Ascendant</strong>), culminating at the zenith (<strong>Midheaven</strong>), setting on the western horizon (<strong>Descendant</strong>), or grounding at the nadir (<strong>Imum Coeli</strong>).
              </p>
              <p>
                When you relocate to, travel through, or conduct business within approximately 150 to 200 miles of one of these lines, the planetary archetype is activated and magnified in your personal life.
              </p>
            </div>
          </div>

          {/* The 4 Angles Deep Dive */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325] leading-snug">
                The Four Celestial Angles
              </h3>
              <p className="text-sm sm:text-base text-[#475569]">
                Where a planet touches an angle dictates which realm of your life it influences:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {ASTRO_ANGLES.map((angle) => (
                <div
                  key={angle.angle}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DFC8] shadow-xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1325]">
                        {angle.angle}
                      </h4>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#947124] bg-[#F5EFEB] px-3 py-1 rounded-full border border-[#D8CFC4]">
                        {angle.shortCode}
                      </span>
                    </div>
                    <p className="text-sm text-[#334155] leading-relaxed">
                      {angle.description}
                    </p>
                  </div>
                  <div className="pt-3 text-sm font-semibold text-[#0B1325] border-t border-[#E8DFC8]/60">
                    <strong>Primary Impact:</strong> <span className="text-[#7C6A46]">{angle.impactArea}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Planetary Line Guide */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325] leading-snug">
                Planetary Energies Explained
              </h3>
              <p className="text-sm sm:text-base text-[#475569]">
                How different planetary lines feel when you live or travel along them:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {PLANETARY_LINES.map((planet) => (
                <div
                  key={planet.planet}
                  className="bg-white rounded-3xl p-7 border border-[#E8DFC8] shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-serif text-2xl font-bold" style={{ color: planet.color }}>
                        {planet.symbol}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-[#0B1325]">
                        {planet.planet}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-[#7C6A46] uppercase tracking-wider">
                      {planet.theme}
                    </p>
                    <p className="text-sm text-[#334155] leading-relaxed">
                      {planet.whatItBrings}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8DFC8]/60 text-xs sm:text-sm text-[#334155] bg-[#F5EFEB] p-3.5 rounded-2xl border border-[#D8CFC4]/50 leading-relaxed">
                    <strong className="text-[#0B1325]">Best For:</strong> {planet.bestFor}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Questions Astrocartography Answers */}
          <div className="bg-[#F5EFEB] rounded-3xl p-8 sm:p-10 border border-[#D8CFC4] space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325] text-center leading-snug">
              Questions Your Reading Can Answer
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#334155]">
              {[
                "Why did I feel so uninspired, sick, or exhausted in my previous city?",
                "Which cities in the US or internationally are best for my career growth and wealth?",
                "Where will I find deep sisterhood, creative spark, and soulmate romantic love?",
                "Is this specific city I'm looking at a good place to buy property and settle down?",
                "Where is the ideal location for me to write my book or host my next retreat?",
                "How can I work remotely along my business lines even without physically moving?"
              ].map((q, idx) => (
                <div key={idx} className="bg-white p-4.5 rounded-2xl border border-[#E8DFC8] flex items-start gap-3 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#C59E4E] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Offer Section */}
          <div className="space-y-6 pt-4">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
                Ready to Explore?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325] leading-snug">
                Private Reading Options
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {SERVICES.map((s) => (
                <div
                  key={s.id}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DFC8] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-3">
                    <h4 className="font-serif text-2xl font-bold text-[#0B1325] leading-snug">
                      {s.name}
                    </h4>
                    <div className="text-3xl font-serif font-bold text-[#0B1325] pb-2 border-b border-[#E8DFC8]/60 flex items-baseline gap-1.5">
                      ${s.price}{' '}
                      <span className="text-xs sm:text-sm font-sans text-[#64748B] font-semibold">
                        ({s.duration})
                      </span>
                    </div>
                    <p className="text-sm text-[#334155] leading-relaxed">
                      {s.description}
                    </p>
                    <ul className="space-y-2.5 pt-1 text-sm text-[#334155]">
                      {s.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#C59E4E] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => openBooking(s.bookingType as any)}
                    className="w-full py-3.5 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all border border-[#C59E4E]/40 cursor-pointer shadow-md"
                  >
                    {s.ctaText}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingType}
      />
    </main>
  );
}
