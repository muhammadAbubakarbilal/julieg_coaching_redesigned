'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { Award, Compass, Heart, BookOpen, Sun, MapPin, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8DFC8]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
            <Compass className="w-4 h-4 text-[#C59E4E]" />
            <span>Meet Your Guide</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325] leading-tight">
            Hi, I&apos;m Julie Goetzinger.
          </h1>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mx-auto">
            Certified Astrocartographer, Psychic Medium, Author, and Intuitive Life Guide helping women align with their soul&apos;s geographic blueprint.
          </p>
        </div>
      </section>

      {/* Story & Background */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Julie's Profile Framing */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFC8] shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center space-y-3.5">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-3 border-[#C59E4E] shadow-md group bg-[#0B1325]">
                <Image
                  src="/images/julie-portrait.jpg"
                  alt="Julie Goetzinger - Certified Astrocartographer"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1325]/30 via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0B1325]">
                  Julie Goetzinger
                </h3>
                <p className="text-xs sm:text-sm text-[#7C6A46] font-bold uppercase tracking-wider mt-0.5">
                  Certified by Helena Woods
                </p>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                  Gemini Sun • Pisces Rising • Leo Moon
                </p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed border-t md:border-t-0 md:border-l border-[#E8DFC8] pt-6 md:pt-0 md:pl-8">
              <p className="font-serif italic text-lg sm:text-xl text-[#0B1325] leading-relaxed">
                &ldquo;I believe that you are not lost, broken, or failing when you feel depleted. Very often, you are simply living in a location that is energetically fighting where your soul wants to expand.&rdquo;
              </p>
              <p className="text-[#334155]">
                As an intuitive relocation astrologer, my mission is to take the confusion and anxiety out of big life transitions, giving you grounded clarity, astrological confirmation, and actionable confidence.
              </p>
            </div>
          </div>

          {/* Section: My Story */}
          <div className="space-y-8">
            <div className="space-y-5">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1325] leading-snug">
                My Story: From Creative Burnout to Geographic Alignment
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
                <p>
                  For over a decade, I was an award-winning professional portrait photographer and creative entrepreneur. I loved capturing the soul essence of the people I photographed, but deep down, I was constantly grappling with chronic exhaustion, money scarcity, and a persistent feeling that I wasn&apos;t in the right place.
                </p>
                <p>
                  When unexpected disruptions closed my in-person photography studio, my entire identity was stripped away in an instant. I was forced to face the terrifying void of what comes next.
                </p>
                <p>
                  During that season of deep surrender, I reconnected with my natural psychic mediumship gifts, mastered the energetic principles of abundance (which led to my international bestselling book, <em>Free to Fly: Manifest the Life of Your Dreams</em>), and discovered <strong>Astrocartography</strong>.
                </p>
                <p>
                  Under the direct training and mentorship of renowned relocation astrologer Helena Woods, I became certified in Astrocartography. When I looked at my own map, a profound wave of relief washed over me. The city where I had struggled for years sat squarely on a harsh Saturn line. Meanwhile, locations where I had felt instant creativity and ease were aligned with my Venus and Sun lines. Everything finally made sense.
                </p>
              </div>
            </div>

            {/* Author Spotlight Card */}
            <div className="bg-gradient-to-r from-[#FAF8F5] to-[#F5EFEB] rounded-3xl p-7 sm:p-9 border border-[#E8DFC8] shadow-xs grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#C59E4E] shadow-md">
                  <Image
                    src="/images/julie-book.jpg"
                    alt="Julie Goetzinger with her book Free to Fly"
                    width={300}
                    height={225}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="sm:col-span-7 space-y-3 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C59E4E] block">
                  International Bestselling Author
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1325]">
                  Free to Fly: Manifest the Life of Your Dreams
                </h4>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  Julie&apos;s celebrated book reveals how to release subconscious limitation, partner with universal flow, and step boldly into your soul purpose.
                </p>
                <div className="pt-2">
                  <Link
                    href="/resources#book"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0B1325] hover:text-[#C59E4E] transition-colors"
                  >
                    <span>Read More About The Book</span>
                    <ArrowRight className="w-4 h-4 text-[#C59E4E]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Why I Do This Work */}
          <div className="bg-[#F5EFEB] rounded-3xl p-8 sm:p-10 border border-[#D8CFC4] space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325]">
              Why I Do This Work
            </h3>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              I know firsthand how painful it is to second-guess yourself for months or years. Moving, changing careers, or rebuilding your life after a relationship shift takes tremendous courage.
            </p>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              My goal is to be the grounded, intuitive compass for women who are ready to make empowered choices. I don&apos;t just read chart lines—I tune into your spirit guides, listen to your life questions, and help you map out a future where you feel supported, prosperous, and at home in your own skin.
            </p>
          </div>

          {/* Section: How I Work (The 3 Pillars) */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325]">
              How I Work: The 3 Core Pillars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="bg-white rounded-3xl p-7 border border-[#E8DFC8] shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1325] text-[#D4AF37] flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#0B1325]">
                    1. Precision Astrocartography
                  </h4>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    Certified methodology analyzing planetary lines, angular crossings (MC, AC, DC, IC), and latitude parans for accurate geographic intelligence.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-7 border border-[#E8DFC8] shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1325] text-[#D4AF37] flex items-center justify-center">
                    <Sun className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#0B1325]">
                    2. Intuitive & Psychic Mediumship
                  </h4>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    Direct channeling and messages from Spirit to uncover underlying soul curriculum, readiness timing, and blind spots.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-7 border border-[#E8DFC8] shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1325] text-[#D4AF37] flex items-center justify-center">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#0B1325]">
                    3. Grounded Life Coaching
                  </h4>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    Practical, actionable roadmaps and mindset integration so you never feel left with abstract astrology, but clear next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Summary */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E8DFC8] shadow-xs space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
              Verified Credentials & Training
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#334155]">
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-[#C59E4E] shrink-0" />
                <span>Certified in Astrocartography by Helena Woods</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-[#C59E4E] shrink-0" />
                <span>Author of International Bestseller &ldquo;Free to Fly&rdquo;</span>
              </div>
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-[#C59E4E] shrink-0" />
                <span>Host of &ldquo;Travel Lightly&rdquo; & &ldquo;Absolutely Abundant&rdquo; Podcasts</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#C59E4E] shrink-0" />
                <span>Over 10 Years of Entrepreneurial & Coaching Practice</span>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="text-center pt-8 space-y-5 border-t border-[#E8DFC8]">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1325]">
              Ready to explore your personal map?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-sm uppercase tracking-wider font-bold rounded-full shadow-lg transition-all flex items-center justify-center gap-2.5 border border-[#C59E4E]/40 cursor-pointer"
              >
                <span>Book a Reading with Julie ($333)</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
              <Link
                href="/work-with-julie"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#F5EFEB] text-[#0B1325] text-sm uppercase tracking-wider font-bold rounded-full border border-[#D8CFC4] text-center transition-colors"
              >
                View All Ways to Work Together
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService="reading-60"
      />
    </main>
  );
}
