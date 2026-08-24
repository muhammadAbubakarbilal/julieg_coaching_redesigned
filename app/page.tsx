'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import QuizModal from '@/components/QuizModal';
import { 
  Compass, 
  MapPin, 
  ArrowRight, 
  HeartHandshake, 
  Users, 
  BookOpen, 
  Star, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Award,
  Globe,
  Quote
} from 'lucide-react';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'reading-60' | 'reading-120' | 'followup' | 'mentoring'>('reading-60');

  const handleOpenBooking = (type: 'reading-60' | 'reading-120' | 'followup' | 'mentoring' = 'reading-60') => {
    setBookingType(type);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#121315] flex flex-col">
      {/* 1. Global Sticky Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero
        onOpenBooking={(type) => handleOpenBooking(type || 'reading-60')}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* 3. Credibility & Trust Bar */}
      <TrustBar />

      {/* 4. The Core Dilemma & Astrocartography Solution (Editorial 2-Column) */}
      <section id="astrocartography-solution" className="py-10 sm:py-14 bg-white border-y border-editorial">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-3.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EFEB] border border-editorial text-xs font-semibold uppercase tracking-wider text-[#7C6A46]">
                <Globe className="w-3.5 h-3.5 text-[#C59E4E]" />
                <span>The Power of Locational Astrology</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121315] leading-[1.15]">
                Your location shapes your <span className="italic text-[#C59E4E]">vitality, career, & love</span>.
              </h2>

              <p className="text-sm sm:text-base text-[#5C646D] leading-relaxed font-sans">
                Have you ever arrived in a new city and felt an immediate surge of inspiration, while in another you felt exhausted, uncreative, or stuck? That isn&apos;t a coincidence—it is your natal chart interacting with the Earth&apos;s celestial coordinates.
              </p>

              <p className="text-sm sm:text-base text-[#5C646D] leading-relaxed font-sans">
                Astrocartography projects your unique birth chart across the world, revealing the precise planetary lines that support financial expansion, joyful romance, grounded sanctuary, or spiritual peace.
              </p>

              <div className="pt-1.5 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/astrocartography"
                  className="w-full sm:w-auto px-6 py-3 bg-[#121315] hover:bg-[#202225] text-[#FAF6F0] text-xs uppercase tracking-wider font-semibold rounded-full shadow-md transition-all flex items-center justify-center gap-2 border border-editorial"
                >
                  <span>Explore Astrocartography Guide</span>
                  <ArrowRight className="w-4 h-4 text-[#C59E4E]" />
                </Link>

                <button
                  onClick={() => handleOpenBooking('reading-60')}
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-[#F5EFEB] text-[#121315] text-xs uppercase tracking-wider font-semibold rounded-full border border-editorial transition-colors cursor-pointer"
                >
                  Book 1:1 Reading ($333)
                </button>
              </div>
            </div>

            {/* Visual Highlight Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#FAF6F0] rounded-3xl p-5 sm:p-6 border border-editorial shadow-xs space-y-3.5">
                <div className="flex items-center justify-between border-b border-editorial pb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C59E4E]">
                    What Your Map Reveals
                  </span>
                  <span className="text-xs text-[#64748B] font-mono">150-200 mi Influence</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 bg-white rounded-2xl border border-editorial shadow-xs">
                    <div className="flex items-center gap-2 font-serif font-bold text-[#121315] mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#C59E4E]" />
                      <span>Sun & Jupiter</span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed font-sans">
                      Radiant confidence, wealth opportunities, leadership, and public recognition.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-2xl border border-editorial shadow-xs">
                    <div className="flex items-center gap-2 font-serif font-bold text-[#121315] mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
                      <span>Venus & Mercury</span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed font-sans">
                      Magnetic romance, effortless social ease, creative inspiration, and media flow.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-2xl border border-editorial shadow-xs">
                    <div className="flex items-center gap-2 font-serif font-bold text-[#121315] mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#8E9EB8]" />
                      <span>Moon & IC Angle</span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed font-sans">
                      Emotional nourishment, family grounding, sanctuary, and deeply rooted peace.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-2xl border border-editorial shadow-xs">
                    <div className="flex items-center gap-2 font-serif font-bold text-[#121315] mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#7C6A46]" />
                      <span>Midheaven (MC)</span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed font-sans">
                      Your soul mission, business visibility, career legacy, and highest calling.
                    </p>
                  </div>
                </div>

                <div className="pt-1 text-center">
                  <Link
                    href="/astrocartography"
                    className="text-xs font-bold text-[#C59E4E] hover:text-[#121315] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>View interactive celestial angles and planet lines</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Separate Page Portals / Offerings Hub */}
      <section id="offerings-hub" className="py-10 sm:py-14 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7C6A46]">
              Choose Your Pathway
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#121315]">
              Ways to Work Together
            </h2>
            <p className="text-sm sm:text-base text-[#5C646D] font-sans">
              Explore distinct session formats, long-term mentoring containers, luxury retreats, and self-guided resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            
            {/* Card 1: Private Readings */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-editorial shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#121315] text-[#C59E4E] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59E4E] bg-[#F5EFEB] px-2.5 py-0.5 rounded-full">
                    $333 & $555
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#121315] mt-1.5">
                    Private 1:1 Readings
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5 font-sans">
                    60 & 120-Minute Zoom Sessions
                  </p>
                </div>

                <p className="text-xs text-[#5C646D] leading-relaxed font-sans">
                  Deep-dive exploration of your relocational astrology map, top 3-5 global cities, video recording, and personalized written PDF report.
                </p>

                <ul className="space-y-1.5 text-xs text-[#3A3F44] pt-0.5 font-sans">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E]" />
                    <span>Live 1:1 Zoom consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E]" />
                    <span>Full video & audio recording</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E]" />
                    <span>Written Astrocartography report</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/readings"
                  className="w-full py-2.5 bg-[#121315] hover:bg-[#202225] text-[#FAF6F0] text-xs uppercase tracking-wider font-semibold rounded-full text-center block transition-all border border-editorial"
                >
                  View Readings & Book →
                </Link>
              </div>
            </div>

            {/* Card 2: 1:1 Mentoring Container */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-editorial shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#121315] text-[#C59E4E] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C6A46] bg-[#F5EFEB] px-2.5 py-0.5 rounded-full">
                    3 to 6 Months
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#121315] mt-1.5">
                    1:1 Mentoring Container
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5 font-sans">
                    Ongoing Intuitive Partnership
                  </p>
                </div>

                <p className="text-xs text-[#5C646D] leading-relaxed font-sans">
                  Bespoke ongoing guidance for major relocations, business pivots, and life transitions with bi-weekly calls and direct private Voxer access.
                </p>

                <ul className="space-y-1.5 text-xs text-[#3A3F44] pt-0.5 font-sans">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E]" />
                    <span>Bi-weekly private Zoom calls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E]" />
                    <span>Private Voxer voice messaging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E]" />
                    <span>Holistic mindset & energy clearings</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/mentoring"
                  className="w-full py-2.5 bg-[#FAF6F0] hover:bg-[#F5EFEB] text-[#121315] border border-editorial text-xs font-semibold rounded-full text-center block transition-all"
                >
                  Explore Mentoring →
                </Link>
              </div>
            </div>

            {/* Card 3: Sacred Retreats */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-editorial shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#121315] text-[#C59E4E] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59E4E] bg-[#F5EFEB] px-2.5 py-0.5 rounded-full">
                    Virtual & Destination
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#121315] mt-1.5">
                    Transformational Retreats
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5 font-sans">
                    Immersive Sisterhood Gatherings
                  </p>
                </div>

                <p className="text-xs text-[#5C646D] leading-relaxed font-sans">
                  Sacred virtual and luxury in-person retreats blending live Astrocartography breakthroughs, energetic clearings, and soul sisterhood.
                </p>

                <ul className="space-y-1.5 text-xs text-[#3A3F44] pt-0.5 font-sans">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E]" />
                    <span>Intimate small-group cohorts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E]" />
                    <span>Individual hot-seat map readings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E]" />
                    <span>Wealth & abundance alignment</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/retreats"
                  className="w-full py-2.5 bg-[#FAF6F0] hover:bg-[#F5EFEB] text-[#121315] border border-editorial text-xs font-semibold rounded-full text-center block transition-all"
                >
                  View Retreat Dates →
                </Link>
              </div>
            </div>

            {/* Card 4: Free Guide & Resources */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-editorial shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#121315] text-[#C59E4E] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C6A46] bg-[#F5EFEB] px-2.5 py-0.5 rounded-full">
                    Free Guide & Media
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#121315] mt-1.5">
                    Resources & Book
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5 font-sans">
                    Free to Fly & Podcasts
                  </p>
                </div>

                <p className="text-xs text-[#5C646D] leading-relaxed font-sans">
                  Download the instant Planetary Line Cheat Sheet, explore Julie&apos;s bestselling memoir *Free to Fly*, or listen to podcast episodes.
                </p>

                <ul className="space-y-1.5 text-xs text-[#3A3F44] pt-0.5 font-sans">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E]" />
                    <span>Free Astro cheat sheet PDF</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E]" />
                    <span>*Free to Fly* on Amazon & Audible</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59E4E]" />
                    <span>*Travel Lightly* podcast episodes</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/resources"
                  className="w-full py-2.5 bg-[#FAF6F0] hover:bg-[#F5EFEB] text-[#121315] border border-editorial text-xs font-semibold rounded-full text-center block transition-all"
                >
                  Access Free Hub →
                </Link>
              </div>
            </div>

          </div>

          <div className="text-center pt-1">
            <Link
              href="/work-with-julie"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121315] hover:text-[#C59E4E] transition-colors"
            >
              <span>Compare All Offerings & Decision Guide</span>
              <ArrowRight className="w-4 h-4 text-[#C59E4E]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. Meet Julie Snapshot */}
      <section className="py-10 sm:py-14 bg-white border-y border-editorial">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-8 border border-editorial shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            
            {/* Portrait Image */}
            <div className="md:col-span-4 text-center space-y-2.5">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-3 border-[#C59E4E] shadow-lg group bg-[#121315]">
                <Image
                  src="/images/julie-portrait.jpg"
                  alt="Julie Goetzinger - Certified Astrocartographer"
                  width={220}
                  height={220}
                  loading="lazy"
                  sizes="(max-width: 640px) 160px, 220px"
                  quality={85}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121315]/40 via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>
              
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#121315]">
                  Julie Goetzinger
                </h3>
                <p className="text-xs text-[#7C6A46] font-medium font-sans">
                  Certified by Helena Woods
                </p>
              </div>
            </div>

            {/* Bio Synopsis */}
            <div className="md:col-span-8 space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EFEB] border border-editorial text-xs font-semibold uppercase tracking-wider text-[#7C6A46]">
                <Award className="w-3.5 h-3.5 text-[#C59E4E]" />
                <span>Meet Your Guide</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#121315] leading-snug">
                Trained in precision astrology. Rooted in intuitive wisdom.
              </h2>

              <p className="text-xs sm:text-sm text-[#5C646D] leading-relaxed font-sans">
                Under the direct training and mentorship of renowned relocation astrologer Helena Woods, I became certified in Astrocartography. After spending years wondering why certain cities exhausted my energy while others unlocked creative prosperity, looking at my own map was like turning on a bright light in a dark room.
              </p>

              <p className="text-xs sm:text-sm text-[#5C646D] leading-relaxed font-sans">
                As the author of <em>Free to Fly</em> and host of the <em>Travel Lightly</em> podcast, I have guided hundreds of visionary women to align their physical geography with their highest soul potential.
              </p>

              <div className="pt-1.5 flex flex-col sm:flex-row items-center gap-3.5 justify-center md:justify-start">
                <Link
                  href="/about"
                  className="px-6 py-2.5 bg-[#121315] hover:bg-[#202225] text-[#FAF6F0] text-xs uppercase tracking-wider font-semibold rounded-full transition-colors flex items-center gap-2 border border-editorial"
                >
                  <span>Read Julie&apos;s Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59E4E]" />
                </Link>

                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#7C6A46] hover:text-[#121315] underline transition-colors font-sans"
                >
                  Have a question? Send a message →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Featured Client Words */}
      <section className="py-10 sm:py-14 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7C6A46]">
              Real Client Outcomes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#121315]">
              Stories of Clarity & Relocation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-editorial shadow-xs space-y-3.5 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex text-[#C59E4E] gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C59E4E]" />
                  ))}
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-[#3A3F44] leading-relaxed">
                  &ldquo;Julie told me that moving to Santa Barbara sat squarely on my Venus-Midheaven line. Within 4 months of relocating, my design studio doubled its revenue and I met my partner.&rdquo;
                </p>
              </div>
              <div className="border-t border-editorial pt-2.5">
                <p className="font-serif text-sm font-bold text-[#121315]">Sarah M.</p>
                <p className="text-[11px] text-[#64748B] font-sans">Moved from Chicago to California</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-editorial shadow-xs space-y-3.5 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex text-[#C59E4E] gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C59E4E]" />
                  ))}
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-[#3A3F44] leading-relaxed">
                  &ldquo;I was feeling so guilty for wanting to leave my hometown. Julie explained that I was sitting directly on a harsh Saturn line. That validation alone lifted years of self-doubt.&rdquo;
                </p>
              </div>
              <div className="border-t border-editorial pt-2.5">
                <p className="font-serif text-sm font-bold text-[#121315]">Elena R.</p>
                <p className="text-[11px] text-[#64748B] font-sans">Author & Relocation Client</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-editorial shadow-xs space-y-3.5 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex text-[#C59E4E] gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C59E4E]" />
                  ))}
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-[#3A3F44] leading-relaxed">
                  &ldquo;The written report Julie sent after our session is something I revisit every time I travel or plan remote work quarters. It is the best investment in self-knowledge I have made.&rdquo;
                </p>
              </div>
              <div className="border-t border-editorial pt-2.5">
                <p className="font-serif text-sm font-bold text-[#121315]">Claire V.</p>
                <p className="text-[11px] text-[#64748B] font-sans">Remote Tech Executive</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. Final High-Conversion CTA Banner */}
      <section className="py-10 sm:py-14 bg-[#121315] text-[#FAF6F0] border-t border-editorial relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-[#C59E4E]/40 flex items-center justify-center mx-auto text-[#C59E4E]">
            <Compass className="w-5 h-5 animate-pulse" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white">
            Ready to discover where your next chapter begins?
          </h2>

          <p className="text-xs sm:text-sm text-[#8E9EB8] max-w-2xl mx-auto leading-relaxed font-sans">
            Reserve your private 1:1 Astrocartography & Intuitive Reading with Julie. Includes live video session, full recording, and personalized written report.
          </p>

          <div className="pt-1.5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => handleOpenBooking('reading-60')}
              className="w-full sm:w-auto px-7 py-3 bg-[#C59E4E] hover:bg-[#D4AF37] text-[#121315] text-xs uppercase tracking-wider font-bold rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 60-Min Reading ($333)</span>
            </button>

            <Link
              href="/work-with-julie"
              className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-[#FAF6F0] text-xs uppercase tracking-wider font-semibold rounded-full border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Compare All Offerings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Global Footer */}
      <Footer />

      {/* Booking & Quiz Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingType}
      />

      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectService={(type) => {
          setIsQuizOpen(false);
          handleOpenBooking(type);
        }}
      />
    </main>
  );
}


