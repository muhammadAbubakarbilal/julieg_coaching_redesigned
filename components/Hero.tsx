'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import juliePortrait from '@/public/images/julie-portrait.jpg';
import { Compass, MapPin, ArrowRight, ShieldCheck, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import ScrollDownIndicator from '@/components/ScrollDownIndicator';

interface HeroProps {
  onOpenBooking: (type?: 'reading-60' | 'reading-120' | 'followup') => void;
  onOpenQuiz: () => void;
}

export default function Hero({ onOpenBooking, onOpenQuiz }: HeroProps) {
  return (
    <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 overflow-hidden bg-[#FAF6F0]">
      {/* Background Celestial Geometry - subtle and refined */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="celestial-glow" cx="50%" cy="30%" r="55%">
              <stop offset="0%" stopColor="#C59E4E" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#FAF6F0" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50%" cy="25%" r="450" fill="url(#celestial-glow)" />
          <path d="M 0 240 Q 400 160 800 240 T 1600 240" fill="none" stroke="rgba(18,19,21,0.06)" strokeWidth="1" strokeDasharray="5 10" />
          <path d="M 0 360 Q 500 280 1000 360 T 2000 360" fill="none" stroke="rgba(197,158,78,0.1)" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Subtle Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFC8] text-xs sm:text-sm font-semibold tracking-wide text-[#6B5A38] shadow-xs">
              <Compass className="w-4 h-4 text-[#C59E4E]" />
              <span>Certified Astrocartographer & Intuitive Life Guide</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1325] leading-[1.12]">
              Where should your <br />
              <span className="italic font-normal text-[#C59E4E]">
                next chapter
              </span>{' '}
              begin?
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-sm sm:text-base md:text-lg text-[#334155] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
              Precision relocation astrology and grounded intuitive guidance for women navigating a move, career pivot, relationship shift, or feeling an unmistakable energetic pull toward a new place.
            </p>

            {/* Direct CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                id="hero-explore-reading-btn"
                onClick={() => onOpenBooking('reading-60')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 border border-[#C59E4E]/40 cursor-pointer group"
              >
                <span>Explore Your Reading</span>
                <ArrowRight className="w-4 h-4 text-[#C59E4E] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-quiz-btn"
                onClick={onOpenQuiz}
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#F5EFEB] text-[#0B1325] text-xs sm:text-sm font-bold rounded-full border border-[#E8DFC8] shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#C59E4E]" />
                <span>I&apos;m Not Sure Where to Start</span>
              </button>
            </div>

            {/* Verified Quick Stats & Trust Tokens */}
            <div className="pt-3.5 flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-5 text-xs sm:text-sm text-[#334155] font-medium border-t border-[#E8DFC8]">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#C59E4E] fill-[#C59E4E]" />
                <span className="font-semibold text-[#0B1325]">Certified by Helena Woods</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C59E4E]" />
                <span>1:1 Live Zoom + HD Recording & Report</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C59E4E]" />
                <span>500+ Worldwide Maps Analyzed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer delicate ambient glow */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#C59E4E]/20 via-transparent to-transparent blur-xl pointer-events-none" />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl border border-[#E8DFC8] shadow-xl overflow-hidden p-5 sm:p-7 text-left space-y-4">
                
                {/* Visual Header with Coordinates */}
                <div className="flex items-center justify-between border-b border-[#E8DFC8] pb-3 text-xs">
                  <span className="font-mono text-xs tracking-wider text-[#C59E4E] font-bold">
                    ASTROCARTOGRAPHY BLUEPRINT
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[#0B1325]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live 1:1 Booking Open
                  </span>
                </div>

                {/* Julie's Profile & Brand Lockup */}
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C59E4E] shrink-0 shadow-md bg-[#0B1325]">
                    <Image
                      src={juliePortrait}
                      alt="Julie Goetzinger"
                      priority
                      placeholder="blur"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1325] leading-tight">
                      Julie Goetzinger
                    </h2>
                    <p className="text-xs sm:text-sm text-[#7C6A46] font-bold mt-0.5">
                      Intuitive Relocation Astrologer & Author
                    </p>
                    <p className="text-xs text-[#64748B] font-medium mt-0.5">
                      Gemini Sun • Pisces Rising • Leo Moon
                    </p>
                  </div>
                </div>

                {/* Micro Sample Planetary Line Exploration Card */}
                <div className="bg-[#FAF8F5] rounded-2xl p-3.5 border border-[#E8DFC8] space-y-2.5">
                  <div className="text-xs font-bold text-[#0B1325] flex items-center justify-between">
                    <span>What Your Reading Uncovers:</span>
                    <span className="text-[#C59E4E] text-[11px] font-mono font-bold">Precision Mapping</span>
                  </div>

                  <div className="space-y-1.5 text-xs sm:text-sm text-[#334155]">
                    <div className="flex items-center justify-between py-1 border-b border-[#E8DFC8]/70">
                      <span className="flex items-center gap-1.5 font-bold text-[#0B1325]">
                        <span className="w-2 h-2 rounded-full bg-[#C59E4E]" /> Sun / Jupiter Lines
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#475569] font-medium">Career, Wealth & Vitality</span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-[#E8DFC8]/70">
                      <span className="flex items-center gap-1.5 font-bold text-[#0B1325]">
                        <span className="w-2 h-2 rounded-full bg-[#E07A5F]" /> Venus Lines
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#475569] font-medium">Love, Community & Ease</span>
                    </div>

                    <div className="flex items-center justify-between py-1">
                      <span className="flex items-center gap-1.5 font-bold text-[#0B1325]">
                        <span className="w-2 h-2 rounded-full bg-[#8E9EB8]" /> Moon / IC Lines
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#475569] font-medium">Sanctuary & Emotional Roots</span>
                    </div>
                  </div>
                </div>

                {/* Quote Strip */}
                <p className="font-serif italic text-xs sm:text-sm text-[#1E293B] leading-relaxed bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#E8DFC8] border-l-3 border-l-[#C59E4E]">
                  &ldquo;You are not lost. Your energy simply needs a location that supports where you are expanding next.&rdquo;
                </p>

                {/* Card Quick Action */}
                <button
                  onClick={() => onOpenBooking('reading-60')}
                  className="w-full py-3 bg-[#FAF8F5] hover:bg-[#0B1325] text-[#0B1325] hover:text-[#FAF8F5] border border-[#0B1325]/30 text-xs sm:text-sm font-bold rounded-full text-center transition-all block cursor-pointer shadow-xs"
                >
                  View 60-Min & 120-Min Deliverables ($333+)
                </button>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="pt-6 sm:pt-8">
          <ScrollDownIndicator targetId="trust-bar" label="Explore" />
        </div>

      </div>
    </section>
  );
}

