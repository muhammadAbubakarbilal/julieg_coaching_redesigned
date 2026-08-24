'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MENTORING_OFFER } from '@/lib/data/services';
import { HeartHandshake, CheckCircle2, MessageSquare, Video, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MentoringPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    situation: '',
    timeframe: '3 Months',
    investmentReadiness: 'Yes'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col pt-20">
      <Navbar />

      {/* Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8DFC8]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
            <HeartHandshake className="w-4 h-4 text-[#C59E4E]" />
            <span>Private 1:1 Partnership</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325] leading-tight">
            1:1 Intuitive Mentoring & Life Transition Container
          </h1>

          <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mx-auto">
            An intimate, ongoing mentorship combining Astrocartography, intuitive psychic guidance, and grounded accountability to support your next season of life.
          </p>
        </div>
      </section>

      {/* Overview & Who It Is For */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFC8] shadow-xs space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1325] leading-snug">
              Beyond a Single Reading: Dedicated Ongoing Support
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
              <p>
                A single 60 or 120-minute Astrocartography reading gives you incredible clarity on where to go. But when you are actively packing up a life, selling a home, pivoting your career, or rebuilding after divorce, you face daily decisions, emotional waves, and subconscious resistance.
              </p>
              <p>
                The 1:1 Mentoring Container is a private sanctuary where you have Julie by your side for 3 to 6 months. Together, we navigate the energetic and practical layers of your transformation so you never feel alone in the unknown.
              </p>
            </div>

            {/* Container Deliverables */}
            <div className="pt-6 border-t border-[#E8DFC8]">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1325] mb-4">
                What Is Included in Your Mentorship:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MENTORING_OFFER.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#334155] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#C59E4E] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div id="apply-mentoring" className="bg-white border border-[#D8CFC4] rounded-3xl p-8 sm:p-10 shadow-xs">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-center space-y-2.5 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs font-bold uppercase tracking-wider text-[#7C6A46]">
                    Private Application
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325] leading-snug">
                    Apply for 1:1 Mentorship
                  </h3>
                  <p className="text-sm sm:text-base text-[#64748B] max-w-md mx-auto leading-relaxed">
                    Mentorship spaces are strictly limited to ensure deep attention. Fill out the brief application below to explore if this container is the right match.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#0B1325] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Elena Rossi"
                      className="w-full px-4 py-3 text-sm sm:text-base bg-[#FAF8F5] border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325] focus:ring-1 focus:ring-[#0B1325]/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0B1325] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@example.com"
                      className="w-full px-4 py-3 text-sm sm:text-base bg-[#FAF8F5] border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325] focus:ring-1 focus:ring-[#0B1325]/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#0B1325] mb-1.5">
                      Desired Container Length
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full px-4 py-3 text-sm sm:text-base bg-[#FAF8F5] border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325] focus:ring-1 focus:ring-[#0B1325]/20 transition-all duration-300"
                    >
                      <option value="3 Months">3-Month Private Mentorship</option>
                      <option value="6 Months">6-Month Deep Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#0B1325] mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 text-sm sm:text-base bg-[#FAF8F5] border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325] focus:ring-1 focus:ring-[#0B1325]/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0B1325] mb-1.5">
                    What major life transition or reinvention are you currently navigating? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.situation}
                    onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                    placeholder="Share what's shifting in your life (e.g. moving cities, career pivot, relationship shift) and what support you are craving..."
                    className="w-full px-4 py-3 text-sm sm:text-base bg-[#FAF8F5] border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325] focus:ring-1 focus:ring-[#0B1325]/20 transition-all duration-300"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2 border border-[#C59E4E]/40 shadow-md cursor-pointer transition-all duration-300"
                  >
                    <span>{isSubmitting ? 'Submitting Application...' : 'Submit Mentorship Application'}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EFE8DE] text-[#947124] flex items-center justify-center mx-auto border border-[#D8CFC4] shadow-xs">
                  <CheckCircle2 className="w-7 h-7 text-[#C59E4E]" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#0B1325]">
                  Application Received
                </h3>
                <p className="text-sm sm:text-base text-[#334155] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Julie reviews every application personally and will respond to <strong>{formData.email}</strong> with next steps.
                </p>
                <div className="pt-6">
                  <Link
                    href="/readings"
                    className="px-8 py-3.5 bg-[#0B1325] text-white hover:bg-[#1A243F] text-xs sm:text-sm uppercase font-bold tracking-wider rounded-full transition-colors inline-block shadow-md"
                  >
                    Explore Readings in the Meantime →
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
