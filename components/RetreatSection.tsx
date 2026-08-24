'use client';

import React from 'react';
import Link from 'next/link';
import { RETREATS } from '@/lib/data/retreats';
import { Calendar, MapPin, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function RetreatSection() {
  return (
    <section id="retreats-section" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8DE] text-xs font-semibold uppercase tracking-wider text-[#7C6A46]">
            <MapPin className="w-3.5 h-3.5 text-[#C59E4E]" />
            <span>Immersive Transformational Containers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0B1325]">
            Retreats & Sacred Gatherings
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Step away from daily noise into deep energetic rest, sisterhood, live Astrocartography breakthroughs, and intuitive alignment.
          </p>
        </div>

        {/* Retreat Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RETREATS.map((retreat) => (
            <div
              key={retreat.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DFC8] shadow-md flex flex-col justify-between space-y-6 hover:border-[#C59E4E] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#F5EFEB] text-[#947124] border border-[#D8CFC4]">
                    {retreat.format} Retreat
                  </span>
                  <span className="text-xs font-semibold text-[#0B1325] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C59E4E]" />
                    {retreat.dates}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0B1325] leading-snug">
                    {retreat.title}
                  </h3>
                  <p className="text-xs font-medium text-[#7C6A46] mt-1">
                    {retreat.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {retreat.overview}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-[#E8DFC8]/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1325] block">
                    Experience Highlights:
                  </span>
                  <ul className="space-y-2">
                    {retreat.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#334155]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8DFC8]">
                <Link
                  href="/retreats"
                  className="w-full py-3 bg-[#FAF8F5] hover:bg-[#0B1325] text-[#0B1325] hover:text-[#FAF8F5] border border-[#0B1325] text-xs uppercase tracking-wider font-bold rounded-full text-center flex items-center justify-center gap-2 transition-all"
                >
                  <span>Explore Retreat Details & Waitlist</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
