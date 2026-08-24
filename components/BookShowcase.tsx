'use client';

import React from 'react';
import { BOOK_DETAILS } from '@/lib/data/resources';
import { BookOpen, Star, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BookShowcase() {
  return (
    <section id="book-spotlight" className="py-10 sm:py-14 bg-[#F4EFEA] border-y border-[#E8DFC8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 md:p-14 border border-[#E8DFC8] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Authentic Photography of Julie Holding 'Free to Fly' */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#C59E4E]/25 to-[#E07A5F]/15 blur-lg pointer-events-none" />
                
                <div className="relative bg-[#FAF8F5] rounded-3xl p-3.5 border border-[#E8DFC8] shadow-xl overflow-hidden group">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border-2 border-[#C59E4E]/80 shadow-md bg-[#0B1325]">
                    <Image
                      src="/images/julie-book.jpg"
                      alt="Julie Goetzinger holding her book Free to Fly: Manifest the Life of Your Dreams"
                      width={960}
                      height={717}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1325]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                    
                    {/* Bestseller Floating Badge */}
                    <div className="absolute top-3 right-3 bg-[#0B1325]/90 backdrop-blur-xs border border-[#C59E4E] px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 text-[#FAF8F5]">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                        Bestseller
                      </span>
                    </div>

                    {/* Bottom Title Bar */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#FAF8F5]/95 backdrop-blur-xs py-2 px-3.5 rounded-xl border border-[#E8DFC8]/90 text-center shadow-xs">
                      <p className="text-xs sm:text-sm font-serif font-bold text-[#0B1325] truncate">
                        Free to Fly: Manifest the Life of Your Dreams
                      </p>
                      <p className="text-xs text-[#7C6A46] font-bold">
                        By Julie Goetzinger
                      </p>
                    </div>
                  </div>

                  {/* 5-Star Social Proof bar */}
                  <div className="mt-3 py-1.5 px-3 flex items-center justify-between text-xs sm:text-sm text-[#475569]">
                    <div className="flex items-center gap-1.5 text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                      ))}
                      <span className="text-xs sm:text-sm font-bold text-[#0B1325] ml-1">5.0</span>
                    </div>
                    <span className="text-xs sm:text-sm text-[#7C6A46] font-bold">
                      Amazon Bestseller
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Overview & Benefits */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
                <BookOpen className="w-4 h-4 text-[#C59E4E]" />
                <span>International Bestselling Book</span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1325] leading-tight">
                  Free to Fly: Manifest the Life of Your Dreams
                </h3>
                <p className="text-sm text-[#7C6A46] font-bold mt-1">
                  By Julie Goetzinger • Available in Paperback, eBook & Audiobook
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {BOOK_DETAILS.description}
              </p>

              {/* Reader Takeaways */}
              <div className="space-y-3 pt-1">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B1325] block">
                  Inside The Book You Will Learn:
                </span>
                <ul className="space-y-2.5">
                  {BOOK_DETAILS.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-[#C59E4E] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Authentic Review Quote */}
              <div className="p-5 bg-[#F5EFEB] rounded-2xl border-l-4 border-[#C59E4E] text-sm sm:text-base italic font-serif text-[#0B1325] leading-relaxed">
                {BOOK_DETAILS.quote}
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2.5 border border-[#C59E4E]/40 shadow-md transition-all cursor-pointer"
                >
                  <span>Get The Book on Amazon</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </a>

                <Link
                  href="/resources#book"
                  className="w-full sm:w-auto px-8 py-4 bg-[#FAF8F5] hover:bg-[#EFE8DE] text-[#0B1325] text-xs sm:text-sm font-bold rounded-full border border-[#D8CFC4] text-center cursor-pointer transition-all"
                >
                  Read Book Excerpt & Chapters
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
