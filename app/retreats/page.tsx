'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollDownIndicator from '@/components/ScrollDownIndicator';
import { RETREATS } from '@/lib/data/retreats';
import { Calendar, MapPin, Users, CheckCircle2, ArrowRight, Heart } from 'lucide-react';

export default function RetreatsPage() {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistName, setWaitlistName] = useState('');
  const [selectedRetreat, setSelectedRetreat] = useState('Virtual Next Chapter Retreat');
  const [isJoined, setIsJoined] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail || !waitlistEmail.includes('@')) return;
    setIsJoined(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col pt-20">
      <Navbar />

      {/* Hero */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8DFC8]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
            <MapPin className="w-4 h-4 text-[#C59E4E]" />
            <span>Sacred Gatherings & Immersions</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325] leading-tight">
            Retreats & Immersive Experiences
          </h1>

          <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mx-auto">
            Experience profound energetic rest, sisterhood, live Astrocartography breakthroughs, and intuitive alignment in virtual and luxury destination containers.
          </p>

          <div className="pt-3">
            <ScrollDownIndicator targetId="retreats-list" label="Explore Gatherings" />
          </div>
        </div>
      </section>

      {/* Retreats Detailed Display */}
      <section id="retreats-list" className="py-10 sm:py-14 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {RETREATS.map((retreat) => (
            <div
              key={retreat.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFC8] shadow-xs space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DFC8] pb-5">
                <div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F5EFEB] text-[#947124] border border-[#D8CFC4] inline-block mb-2">
                    {retreat.format} Experience
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1325] leading-snug">
                    {retreat.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#7C6A46] font-bold mt-1">
                    {retreat.subtitle}
                  </p>
                </div>

                <div className="text-left sm:text-right sm:border-l sm:border-[#E8DFC8] sm:pl-5 shrink-0 space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0B1325]">
                    <Calendar className="w-4 h-4 text-[#C59E4E]" />
                    <span>{retreat.dates}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B] font-medium">
                    <MapPin className="w-4 h-4 text-[#C59E4E]" />
                    <span>{retreat.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3.5 text-sm sm:text-base text-[#334155] leading-relaxed">
                <p>{retreat.overview}</p>
                <p>
                  <strong className="text-[#0B1325]">Who this is for: </strong>
                  {retreat.whoIsItFor}
                </p>
              </div>

              {/* Highlights & Schedule */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E8DFC8]/60">
                <div className="space-y-3.5">
                  <h3 className="font-serif text-xl font-bold text-[#0B1325]">
                    Experience Highlights:
                  </h3>
                  <ul className="space-y-2.5">
                    {retreat.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#334155] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#C59E4E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3.5 bg-[#FAF8F5] p-6 rounded-3xl border border-[#E8DFC8]">
                  <h3 className="font-serif text-xl font-bold text-[#0B1325]">
                    Sample Schedule / Flow:
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
                    {retreat.sampleSchedule.map((s, idx) => (
                      <div key={idx} className="border-b border-[#E8DFC8]/60 pb-2.5 last:border-0 last:pb-0">
                        <span className="font-bold text-[#0B1325] block">{s.time}</span>
                        <span className="leading-relaxed">{s.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 flex justify-end">
                <a
                  href="#waitlist-form"
                  onClick={() => setSelectedRetreat(retreat.title)}
                  className="px-8 py-4 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all flex items-center gap-2.5 border border-[#C59E4E]/40 cursor-pointer shadow-md hover:shadow-lg"
                >
                  <span>Join Waitlist & Priority Registration</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </a>
              </div>
            </div>
          ))}

          {/* Waitlist Form Section */}
          <div id="waitlist-form" className="bg-[#0B1325] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#C59E4E]/40 shadow-xl space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
                First Access & Early-Bird Invitations
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Join the Retreat Waitlist
              </h3>
              <p className="text-sm sm:text-base text-[#BAC7DA] leading-relaxed">
                Be the first to receive dates, venue reveals, and early-bird registration for upcoming in-person and virtual retreats.
              </p>
            </div>

            {!isJoined ? (
              <form onSubmit={handleWaitlistSubmit} className="max-w-xl mx-auto space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#FAF8F5] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={waitlistName}
                      onChange={(e) => setWaitlistName(e.target.value)}
                      placeholder="e.g. Caroline"
                      className="w-full px-4 py-3 text-sm sm:text-base bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-xl focus:outline-hidden focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#FAF8F5] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      placeholder="caroline@example.com"
                      className="w-full px-4 py-3 text-sm sm:text-base bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-xl focus:outline-hidden focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#FAF8F5] mb-1.5">
                    Interested Gathering
                  </label>
                  <select
                    value={selectedRetreat}
                    onChange={(e) => setSelectedRetreat(e.target.value)}
                    className="w-full px-4 py-3 text-sm sm:text-base bg-[#111A30] text-white border border-white/20 rounded-xl focus:outline-hidden focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all cursor-pointer"
                  >
                    <option value="Virtual Next Chapter Retreat">Virtual Next Chapter Retreat (Zoom Gathering)</option>
                    <option value="Abundance Breakthrough Retreat">Abundance Breakthrough (In-Person Destination)</option>
                    <option value="All Upcoming Retreats">All Upcoming Gatherings</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C59E4E] hover:bg-[#D4AF37] text-[#0B1325] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full shadow-lg transition-all cursor-pointer"
                >
                  Join Retreat Priority List
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white/10 text-[#D4AF37] flex items-center justify-center mx-auto border border-white/10 shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  You are on the priority list!
                </h4>
                <p className="text-sm sm:text-base text-[#BAC7DA] leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{waitlistName}</strong>. We will notify <strong>{waitlistEmail}</strong> as soon as registration opens for <strong>{selectedRetreat}</strong>.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
