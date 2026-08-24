'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Image from 'next/image';
import { SERVICES } from '@/lib/data/services';
import { CheckCircle2, Video, FileText, MapPin, Calendar, Compass, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function ReadingsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'reading-60' | 'reading-120' | 'followup'>('reading-60');

  const openBooking = (type: 'reading-60' | 'reading-120' | 'followup' = 'reading-60') => {
    setSelectedService(type);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col pt-20">
      <Navbar />

      {/* Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8DFC8]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
            <Compass className="w-4 h-4 text-[#C59E4E]" />
            <span>Private 1:1 Astrocartography Readings</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325] leading-tight">
            What could your map reveal about your next chapter?
          </h1>

          <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mx-auto">
            Choose between a focused 60-minute reading or a 120-minute deep dive. Every session includes live Zoom consultation, full HD recording, and a custom written report.
          </p>
        </div>
      </section>

      {/* Pricing & Deliverables Comparison */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {SERVICES.map((service) => {
              const isPopular = service.popular;

              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                    isPopular
                      ? 'border-2 border-[#C59E4E] shadow-xl ring-4 ring-[#C59E4E]/10 lg:-translate-y-1.5'
                      : 'border border-[#E8DFC8] shadow-xs hover:shadow-md'
                  }`}
                >
                  {service.badge && (
                    <span
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs uppercase font-bold tracking-widest px-4 py-1 rounded-full shadow-xs ${
                        isPopular
                          ? 'bg-[#0B1325] text-[#D4AF37] border border-[#C59E4E]/40'
                          : 'bg-[#EFE8DE] text-[#0B1325] border border-[#D8CFC4]'
                      }`}
                    >
                      {service.badge}
                    </span>
                  )}

                  <div className="space-y-5">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325] leading-snug">
                        {service.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#7C6A46] font-bold uppercase tracking-wider mt-1">
                        {service.subtitle}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-2 pb-4 border-b border-[#E8DFC8]">
                      <span className="font-serif text-4xl sm:text-5xl font-bold text-[#0B1325]">
                        ${service.price}
                      </span>
                      <span className="text-sm text-[#64748B] font-semibold">
                        / {service.duration}
                      </span>
                    </div>

                    <div className="text-sm text-[#334155] leading-relaxed">
                      <strong className="text-[#0B1325] font-bold">Who this is for: </strong>
                      {service.whoIsItFor}
                    </div>

                    <div className="space-y-3 pt-2">
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B1325] block">
                        What You Receive:
                      </span>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-[#334155]">
                            <CheckCircle2 className="w-4 h-4 text-[#C59E4E] shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => openBooking(service.bookingType as any)}
                      className={`w-full py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                        isPopular
                          ? 'bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] border border-[#C59E4E]/40'
                          : 'bg-[#FAF8F5] hover:bg-[#0B1325] text-[#0B1325] hover:text-[#FAF8F5] border border-[#0B1325]'
                      }`}
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-[#64748B] text-center mt-2.5 flex items-center justify-center gap-1.5 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#C59E4E]" />
                      Direct scheduling & intake form
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Practitioner Guarantee & Face-to-Face Trust Banner */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFC8] shadow-xs flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-[#C59E4E] shrink-0 bg-[#0B1325] shadow-md">
              <Image
                src="/images/julie-portrait.jpg"
                alt="Julie Goetzinger"
                width={96}
                height={96}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7C6A46]">
                Personalized 1:1 Care
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1325]">
                Conducted Live & Personally by Julie Goetzinger
              </h4>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                Every session is a private 1-on-1 Zoom consultation directly with Julie. You receive a downloadable video recording, audio file, and custom written Astrocartography report summarizing your key lines.
              </p>
            </div>
          </div>

          {/* Preparation Checklist */}
          <div className="bg-[#F5EFEB] rounded-3xl p-8 sm:p-10 border border-[#D8CFC4] space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325]">
              How to Prepare for Your Reading
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#334155]">
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC8] space-y-2.5">
                <span className="font-bold text-[#0B1325] block text-base sm:text-lg font-serif">
                  1. Check Your Birth Certificate
                </span>
                <p className="leading-relaxed text-sm text-[#475569]">
                  Having your exact birth minute ensures Astrocartography lines are placed accurately within geographic mileage of your target cities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC8] space-y-2.5">
                <span className="font-bold text-[#0B1325] block text-base sm:text-lg font-serif">
                  2. List Your Top Destinations
                </span>
                <p className="leading-relaxed text-sm text-[#475569]">
                  Prepare 2 to 4 cities you are actively considering, or come open to exploring worldwide possibilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC8] space-y-2.5">
                <span className="font-bold text-[#0B1325] block text-base sm:text-lg font-serif">
                  3. Come with Open Curiosity
                </span>
                <p className="leading-relaxed text-sm text-[#475569]">
                  Julie combines technical astrology with psychic intuition. Prepare any specific life questions regarding career, love, or health.
                </p>
              </div>
            </div>
          </div>

          {/* Quick FAQ Strip */}
          <div className="text-center space-y-2 pt-4">
            <h3 className="font-serif text-2xl font-bold text-[#0B1325]">
              Questions About Booking?
            </h3>
            <p className="text-sm sm:text-base text-[#475569]">
              Have a question before booking your session? Visit our{' '}
              <Link href="/contact" className="text-[#0B1325] font-bold underline hover:text-[#947124] transition-colors">
                contact page
              </Link>{' '}
              to reach Julie directly.
            </p>
          </div>

        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />
    </main>
  );
}

