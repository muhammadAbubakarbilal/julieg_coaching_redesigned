'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import ServiceDecisionGuide from '@/components/ServiceDecisionGuide';
import PricingSection from '@/components/PricingSection';
import { Compass, Users, HeartHandshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WorkWithJuliePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'reading-60' | 'reading-120' | 'followup'>('reading-60');

  const openBooking = (type: 'reading-60' | 'reading-120' | 'followup' = 'reading-60') => {
    setBookingType(type);
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
            <span>Ways to Work Together</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325] leading-tight">
            Work With Julie
          </h1>

          <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mx-auto">
            From single high-impact Astrocartography readings to multi-month mentoring containers and immersive retreats, discover the right container for your life transition.
          </p>
        </div>
      </section>

      {/* Decision Guide Component */}
      <ServiceDecisionGuide onOpenBooking={openBooking} />

      {/* Pricing Cards */}
      <PricingSection onOpenBooking={openBooking} />

      {/* Mentoring & Retreats Feature Strip */}
      <section className="py-16 sm:py-20 bg-[#F4EFEA] border-t border-[#E8DFC8]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mentoring Box */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-[#E8DFC8] shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1325] text-[#D4AF37] flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325]">
                  1:1 Intuitive Mentoring Container
                </h3>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  A bespoke 3 to 6 month private mentorship combining bi-weekly Zoom calls, private Voxer messaging, Astrocartography mapping, and mindset coaching through major life reinvention.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/mentoring"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0B1325] hover:text-[#947124]"
                >
                  <span>Learn About 1:1 Mentoring</span>
                  <ArrowRight className="w-4 h-4 text-[#C59E4E]" />
                </Link>
              </div>
            </div>

            {/* Retreats Box */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-[#E8DFC8] shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1325] text-[#D4AF37] flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325]">
                  Transformational Retreats
                </h3>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  Virtual and in-person luxury gatherings focusing on energetic clearings, individual map readings, wealth consciousness, and sisterhood with visionary women.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/retreats"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0B1325] hover:text-[#947124]"
                >
                  <span>Explore Upcoming Retreats</span>
                  <ArrowRight className="w-4 h-4 text-[#C59E4E]" />
                </Link>
              </div>
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
