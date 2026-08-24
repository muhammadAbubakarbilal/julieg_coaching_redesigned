'use client';

import React from 'react';
import { SERVICES } from '@/lib/data/services';
import { CheckCircle2, Video, FileText, MapPin, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenBooking: (type: 'reading-60' | 'reading-120' | 'followup') => void;
}

export default function PricingSection({ onOpenBooking }: PricingSectionProps) {
  return (
    <section id="private-readings" className="py-14 sm:py-18 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
            <Compass className="w-4 h-4 text-[#C59E4E]" />
            <span>Private 1:1 Consultations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325]">
            Private Readings & Deliverables
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Every session is personalized to your unique birth blueprint. Transparent pricing, full recordings, and written summary reports included with every reading.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {SERVICES.map((service) => {
            const isPopular = service.popular;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'border-2 border-[#C59E4E] shadow-2xl ring-4 ring-[#C59E4E]/15 lg:-translate-y-1'
                    : 'border border-[#E8DFC8] shadow-xs hover:shadow-xl'
                }`}
              >
                {/* Popular / Comprehensive Badge */}
                {service.badge && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs uppercase font-bold tracking-wider px-4 py-1.5 rounded-full shadow-md ${
                      isPopular
                        ? 'bg-[#0B1325] text-[#D4AF37] border border-[#C59E4E]/50'
                        : 'bg-[#EFE8DE] text-[#0B1325] border border-[#D8CFC4]'
                    }`}
                  >
                    {service.badge}
                  </span>
                )}

                <div className="space-y-4 sm:space-y-5">
                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325] leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-sm font-bold text-[#7C6A46] mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Price & Duration */}
                  <div className="flex items-baseline gap-2.5 pb-4 border-b border-[#E8DFC8]">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-[#0B1325]">
                      ${service.price}
                    </span>
                    <span className="text-sm font-semibold text-[#475569]">
                      / {service.duration}
                    </span>
                  </div>

                  {/* Who Is It For */}
                  <div className="text-sm sm:text-[15px] text-[#334155] leading-relaxed">
                    <strong className="text-[#0B1325] font-bold">Who this is for: </strong>
                    {service.whoIsItFor}
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B1325] block">
                      What You Receive:
                    </span>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#1E293B]">
                          <CheckCircle2 className="w-4 h-4 text-[#C59E4E] shrink-0 mt-0.5" />
                          <span className="leading-snug font-normal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking CTA Button */}
                <div className="pt-7">
                  <button
                    onClick={() => onOpenBooking(service.bookingType as 'reading-60' | 'reading-120' | 'followup')}
                    className={`w-full py-4 rounded-full text-sm uppercase tracking-wider font-bold transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md cursor-pointer ${
                      isPopular
                        ? 'bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] border border-[#C59E4E]/40 hover:shadow-xl'
                        : 'bg-[#FAF8F5] hover:bg-[#0B1325] text-[#0B1325] hover:text-[#FAF8F5] border border-[#0B1325]'
                    }`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-[#64748B] text-center mt-2.5 flex items-center justify-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#C59E4E]" />
                    Instant confirmation & calendar link
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Deliverables Guarantee Bar */}
        <div className="bg-[#F5EFEB] rounded-3xl p-6 sm:p-7 border border-[#D8CFC4] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0B1325] text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#C59E4E]/30">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#0B1325]">Full HD Video Recording</h4>
              <p className="text-xs sm:text-sm text-[#475569] font-medium">Downloadable video & audio to re-listen anytime</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0B1325] text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#C59E4E]/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#0B1325]">Personalized Written Report</h4>
              <p className="text-xs sm:text-sm text-[#475569] font-medium">Summary of your planetary lines, cities & themes</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0B1325] text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#C59E4E]/30">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#0B1325]">Custom Map Files</h4>
              <p className="text-xs sm:text-sm text-[#475569] font-medium">High-resolution planetary map for your records</p>
            </div>
          </div>
        </div>

        {/* Link to Dedicated Work With Julie / Services Page */}
        <div className="text-center pt-2">
          <a
            href="/work-with-julie"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0B1325] hover:text-[#947124] transition-colors py-2.5 px-5 rounded-full hover:bg-[#F1ECE4]"
          >
            <span>Looking for 1:1 Mentoring or all offerings? Compare services on the dedicated page</span>
            <ArrowRight className="w-4 h-4 text-[#C59E4E]" />
          </a>
        </div>

      </div>
    </section>
  );
}

