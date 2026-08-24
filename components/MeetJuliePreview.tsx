import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import juliePortrait from '@/public/images/julie-portrait.jpg';
import { Award, Compass, Heart, ArrowRight, BookOpen } from 'lucide-react';

export default function MeetJuliePreview() {
  return (
    <section id="meet-julie" className="py-10 sm:py-14 bg-[#F4EFEA] border-y border-[#E8DFC8]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Portrait Framing & Credentials */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/30 to-[#E07A5F]/20 blur-md pointer-events-none" />
              
              <div className="relative bg-[#FAF8F5] rounded-3xl border border-[#E8DFC8] p-6 sm:p-7 shadow-xl space-y-5 text-center">
                {/* Avatar / Portrait Image */}
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-3 border-[#C59E4E] shadow-xl group bg-[#0B1325]">
                  <Image
                    src={juliePortrait}
                    alt="Julie Goetzinger - Certified Astrocartographer"
                    placeholder="blur"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1325]/40 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325]">
                    Julie Goetzinger
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
                    Intuitive Relocation Astrologer & Author
                  </p>
                  <p className="text-xs font-semibold text-[#475569]">
                    Certified by Helena Woods
                  </p>
                </div>

                {/* Micro Badges */}
                <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-[#E8DFC8] text-xs sm:text-sm text-[#334155]">
                  <div className="bg-[#F5EFEB] p-3 rounded-2xl border border-[#E8DFC8]">
                    <span className="font-bold text-[#0B1325] block">Gemini Sun</span>
                    <span className="text-xs text-[#475569]">Pisces Rising</span>
                  </div>
                  <div className="bg-[#F5EFEB] p-3 rounded-2xl border border-[#E8DFC8]">
                    <span className="font-bold text-[#0B1325] block">Leo Moon</span>
                    <span className="text-xs text-[#475569]">10+ Yrs Coaching</span>
                  </div>
                </div>

                <div className="text-sm sm:text-base text-[#1E293B] italic font-serif bg-[#F5EFEB] p-4 rounded-2xl border border-[#E8DFC8]">
                  &ldquo;I believe where you live should feel like a sanctuary, not an uphill battle.&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
              <Award className="w-4 h-4 text-[#C59E4E]" />
              <span>Meet Your Guide</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325] leading-tight">
              From creative burnout to soul-aligned geographic freedom.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
              <p>
                Before becoming a certified Astrocartographer, I spent over a decade as a professional portrait photographer and creative entrepreneur. When sudden life disruptions forced my in-person studio to close, I found myself standing at the exact same terrifying crossroads many of my clients face today.
              </p>
              <p>
                I turned inward to my psychic gifts, studied money mindset, and discovered the life-changing power of <strong>Astrocartography</strong> under the mentorship of Helena Woods. Transposing my natal chart across the world explained every difficult period, creative surge, and feeling of belonging I had ever experienced in different cities.
              </p>
              <p>
                Today, as an international bestselling author, podcaster, and intuitive guide, I combine precision relocation astrology with grounded mediumship to help women step into their next chapters with clarity, confidence, and peace.
              </p>
            </div>

            {/* Credential Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm sm:text-[15px] font-bold text-[#0B1325]">
                <Award className="w-5 h-5 text-[#C59E4E] shrink-0" />
                <span>Certified by Helena Woods</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-[15px] font-bold text-[#0B1325]">
                <BookOpen className="w-5 h-5 text-[#C59E4E] shrink-0" />
                <span>Author of &ldquo;Free to Fly&rdquo;</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-[15px] font-bold text-[#0B1325]">
                <Compass className="w-5 h-5 text-[#C59E4E] shrink-0" />
                <span>500+ Relocation Maps Read</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:text-[15px] font-bold text-[#0B1325]">
                <Heart className="w-5 h-5 text-[#C59E4E] shrink-0" />
                <span>10+ Years Supporting Women</span>
              </div>
            </div>

            {/* Read Full Story Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm sm:text-base uppercase tracking-wider font-bold text-[#0B1325] hover:text-[#947124] transition-colors"
              >
                <span>Read Julie&apos;s Full Story & Philosophy</span>
                <ArrowRight className="w-4 h-4 text-[#C59E4E]" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
