'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PLANETARY_LINES, ASTRO_ANGLES } from '@/lib/data/astrocartography';
import { Globe, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import InteractiveMapPreview from './InteractiveMapPreview';

interface AstroExplainerProps {
  onOpenBooking: (type?: 'reading-60' | 'reading-120' | 'followup') => void;
}

export default function AstroExplainer({ onOpenBooking }: AstroExplainerProps) {
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(0);
  const activePlanet = PLANETARY_LINES[selectedPlanetIndex];

  return (
    <section id="what-is-astrocartography" className="py-14 sm:py-18 bg-[#F4EFEA] border-y border-[#E8DFC8]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
            <Globe className="w-4 h-4 text-[#C59E4E]" />
            <span>The Science & Intuition of Location Astrology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325]">
            What is Astrocartography?
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Astrocartography is the astrology of place. It takes your unique natal chart and projects it across a map of the Earth, revealing where specific planetary energies are amplified for you.
          </p>
        </div>

        {/* 4-Step Visual Journey */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {[
            {
              step: '01',
              title: 'Your Exact Birth Data',
              desc: 'Your date, exact minute of birth, and birth city establish the unique celestial snapshot of the sky at your arrival.'
            },
            {
              step: '02',
              title: 'World Map Projection',
              desc: 'We calculate where the planets were rising, culminating, setting, or grounding across every longitude on Earth.'
            },
            {
              step: '03',
              title: 'Planetary Lines & Angles',
              desc: 'Planetary paths cross specific cities, highlighting zones for career (MC), identity (AC), relationships (DC), or sanctuary (IC).'
            },
            {
              step: '04',
              title: 'Targeted Life Activation',
              desc: 'Living, traveling, or conducting business in these locations actively wakes up that specific archetype in your personal experience.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] border border-[#D8CFC4] rounded-3xl p-6 sm:p-7 shadow-xs relative flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <span className="font-serif text-3xl font-bold text-[#C59E4E]">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1325]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Visual World Map */}
        <InteractiveMapPreview onCitySelect={() => {}} />

        {/* Interactive Planetary Line Selector */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#E8DFC8] p-7 sm:p-9 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8DFC8] pb-6">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46] block mb-1">
                Interactive Line Guide
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325]">
                How Different Planetary Lines Influence You
              </h3>
            </div>
            <span className="text-xs sm:text-sm text-[#475569] font-medium">
              Click a planet to see what it activates:
            </span>
          </div>

          {/* Planet Buttons */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 my-6">
            {PLANETARY_LINES.map((p, idx) => (
              <button
                key={p.planet}
                type="button"
                onClick={() => setSelectedPlanetIndex(idx)}
                className={`py-3.5 px-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center gap-1.5 border cursor-pointer ${
                  selectedPlanetIndex === idx
                    ? 'bg-[#0B1325] text-[#FAF8F5] border-[#0B1325] shadow-md'
                    : 'bg-white text-[#334155] border-[#D8CFC4] hover:bg-[#F5EFEB]'
                }`}
              >
                <span className="text-xl font-serif" style={{ color: selectedPlanetIndex === idx ? '#D4AF37' : p.color }}>
                  {p.symbol}
                </span>
                <span>{p.planet.replace(' Line', '')}</span>
              </button>
            ))}
          </div>

          {/* Active Planet Details Card */}
          <div className="bg-[#F5EFEB] rounded-2xl p-6 sm:p-7 border border-[#D8CFC4] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-[#D8CFC4] text-xs sm:text-sm font-bold text-[#0B1325]">
                <span className="text-lg font-serif" style={{ color: activePlanet.color }}>{activePlanet.symbol}</span>
                <span>{activePlanet.planet}</span>
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0B1325]">
                {activePlanet.theme}
              </h4>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {activePlanet.essence}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#E8DFC8] space-y-1.5 shadow-xs">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#947124] block">
                  What It Brings to Your Life
                </span>
                <p className="text-sm sm:text-base text-[#1E293B] leading-relaxed font-normal">
                  {activePlanet.whatItBrings}
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E8DFC8] space-y-1.5 shadow-xs">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B1325] block">
                  Best Intentions For This Line
                </span>
                <p className="text-sm sm:text-base text-[#1E293B] leading-relaxed font-normal">
                  {activePlanet.bestFor}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section CTAs */}
        <div className="text-center pt-4 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/astrocartography"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#FAF8F5] hover:bg-[#EFE8DE] text-[#0B1325] text-sm sm:text-base font-bold rounded-full border border-[#D8CFC4] transition-colors flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#C59E4E]" />
              Read Full Astrocartography Guide
            </Link>

            <button
              onClick={() => onOpenBooking('reading-60')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-sm sm:text-base uppercase tracking-wider font-bold rounded-full shadow-md transition-colors flex items-center justify-center gap-2 border border-[#C59E4E]/40 cursor-pointer"
            >
              <span>See What a Reading Can Reveal</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
