'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeGuideLeadMagnet from '@/components/FreeGuideLeadMagnet';
import BookShowcase from '@/components/BookShowcase';
import ScrollDownIndicator from '@/components/ScrollDownIndicator';
import { BOOK_DETAILS, PODCAST_SHOWS, ARTICLES, OFFICE_HOURS_INFO } from '@/lib/data/resources';
import { BookOpen, Radio, FileText, Compass, ArrowRight, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticleModal, setActiveArticleModal] = useState<any | null>(null);

  const categories = ['All', 'Astrocartography', 'Relocation', 'Career', 'Life Transitions'];

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col pt-20">
      <Navbar />

      {/* Hero */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8DFC8]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
            <Compass className="w-4 h-4 text-[#C59E4E]" />
            <span>Library & Knowledge Hub</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325] leading-tight">
            Resources for Your Next Chapter
          </h1>

          <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mx-auto">
            Explore free guides, books, podcasts, and articles to help you navigate moves, career pivots, and life transitions with cosmic clarity.
          </p>

          <div className="pt-3">
            <ScrollDownIndicator targetId="free-guide" label="Explore Resources" />
          </div>
        </div>
      </section>

      {/* 1. Free Cheat Sheet Lead Magnet */}
      <FreeGuideLeadMagnet />

      {/* 2. Book Spotlight */}
      <div id="book">
        <BookShowcase />
      </div>

      {/* 3. Podcasts Spotlight */}
      <section id="podcasts" className="py-10 sm:py-14 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
              <Radio className="w-4 h-4 text-[#C59E4E]" />
              <span>Listen & Subscribe</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1325] leading-snug">
              Podcasts Hosted by Julie
            </h2>
            <p className="text-sm sm:text-base text-[#334155]">
              Tune in to intuitive conversations on relocation astrology, abundance mindset, and intentional living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {PODCAST_SHOWS.map((pod, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-xs flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1325] text-[#D4AF37] flex items-center justify-center">
                      <Radio className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#7C6A46] font-bold">
                      {pod.episodesCount}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1325] leading-snug">
                      {pod.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] font-bold mt-0.5">
                      {pod.host}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-[#334155] leading-relaxed">
                    {pod.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {pod.topics.map((t, i) => (
                      <span key={i} className="text-xs bg-[#F5EFEB] text-[#0B1325] px-3 py-1 rounded-full font-bold border border-[#D8CFC4]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8DFC8]">
                  <a
                    href="https://podcasts.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#FAF8F5] hover:bg-[#0B1325] text-[#0B1325] hover:text-[#FAF8F5] border border-[#0B1325] text-xs sm:text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Listen on Apple Podcasts & Spotify</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Office Hours with Spirit Gathering */}
      <section className="py-10 sm:py-14 bg-[#0B1325] text-[#FAF8F5] border-y border-[#C59E4E]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
            <Calendar className="w-4 h-4" />
            <span>Monthly Live Gathering</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            {OFFICE_HOURS_INFO.title}
          </h2>

          <p className="text-sm sm:text-base text-[#BAC7DA] max-w-xl mx-auto leading-relaxed">
            {OFFICE_HOURS_INFO.description}
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C59E4E] hover:bg-[#D4AF37] text-[#0B1325] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full transition-all shadow-md cursor-pointer"
            >
              <span>Inquire for Next Date & Access</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Articles & Insights */}
      <section id="articles" className="py-10 sm:py-14 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DFC8] pb-4">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
                Articles & Editorial
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325] leading-snug">
                Essays on Relocation & Life Reinvention
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCategory(c)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all cursor-pointer ${
                    selectedCategory === c
                      ? 'bg-[#0B1325] text-[#FAF8F5]'
                      : 'bg-white text-[#334155] border border-[#D8CFC4] hover:bg-[#F5EFEB]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                className="bg-white rounded-3xl p-7 border border-[#E8DFC8] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#7C6A46]">
                    <span className="font-bold uppercase tracking-wider text-xs bg-[#F5EFEB] px-3 py-1 rounded-full border border-[#D8CFC4]">
                      {art.category}
                    </span>
                    <span className="text-xs text-[#64748B] font-bold">{art.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0B1325] leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-sm text-[#334155] leading-relaxed">
                    {art.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8DFC8]/60">
                  <button
                    onClick={() => setActiveArticleModal(art)}
                    className="text-xs sm:text-sm font-bold text-[#0B1325] hover:text-[#947124] flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-[#C59E4E]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Article Reader Modal */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#E8DFC8] shadow-2xl max-h-[85vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b border-[#E8DFC8] pb-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#947124]">
                {activeArticleModal.category} • {activeArticleModal.readTime}
              </span>
              <button
                onClick={() => setActiveArticleModal(null)}
                className="text-sm font-bold text-[#64748B] hover:text-[#0B1325] cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325] leading-snug">
              {activeArticleModal.title}
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
              <p>{activeArticleModal.description}</p>
              <p>
                When examining our life trajectory, we often focus on the &ldquo;what&rdquo; and the &ldquo;when,&rdquo; but we overlook the immense power of the &ldquo;where.&rdquo; Astrocartography maps show us that location is an active participant in our personal transformation.
              </p>
              <p>
                Whether you are seeking creative flow, romantic connection, or financial expansion, your unique planetary lines provide an intentional compass for where to direct your physical presence and creative focus.
              </p>
            </div>

            <div className="p-6 bg-[#F5EFEB] rounded-3xl border border-[#D8CFC4] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-serif text-lg font-bold text-[#0B1325]">
                  Want to explore your own map?
                </p>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium">Book a private 1:1 session with Julie</p>
              </div>
              <Link
                href="/readings"
                className="px-6 py-3.5 bg-[#0B1325] text-[#FAF8F5] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full hover:bg-[#1A243F] shrink-0 border border-[#C59E4E]/40"
              >
                Book a Reading ($333) →
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
