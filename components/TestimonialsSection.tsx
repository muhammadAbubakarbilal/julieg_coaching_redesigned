'use client';

import React, { useState } from 'react';
import { TESTIMONIALS, CLIENT_STORIES } from '@/lib/data/testimonials';
import { Star, Quote, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenBooking: (type?: 'reading-60' | 'reading-120' | 'followup') => void;
}

export default function TestimonialsSection({ onOpenBooking }: TestimonialsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'moving' | 'clarity' | 'career' | 'transition'>('all');

  const filteredTestimonials = activeCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  return (
    <section id="client-stories" className="py-10 sm:py-14 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#7C6A46] block">
            Real Experiences & Social Proof
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325]">
            What Clients Experience Working with Julie
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Read authentic words from women who were standing at the exact same crossroads you may be navigating right now.
          </p>
        </div>

        {/* Client Stories / Case Studies (Before -> Question -> Experience -> After) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
            <Award className="w-5 h-5 text-[#C59E4E]" />
            <span>Featured Client Transformations</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {CLIENT_STORIES.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E8DFC8] shadow-xs hover:shadow-xl transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E8DFC8] pb-4">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#0B1325]">
                      {story.clientInitials}
                    </span>
                    <span className="text-xs text-[#7C6A46] bg-[#F5EFEB] px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-[#E8DFC8]">
                      Case Study
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#0B1325] leading-snug">
                    {story.title}
                  </h3>

                  <div className="space-y-3.5 text-sm sm:text-base text-[#334155]">
                    <div className="p-4 bg-[#F5EFEB] rounded-2xl border border-[#E8DFC8]">
                      <strong className="text-[#0B1325] block mb-1 font-bold">Before The Reading:</strong>
                      {story.before}
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-[#E8DFC8] shadow-xs">
                      <strong className="text-[#947124] block mb-1 font-bold">The Core Question:</strong>
                      {story.question}
                    </div>

                    <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E8DFC8]">
                      <strong className="text-[#0B1325] block mb-1 font-bold">What Julie Explored:</strong>
                      {story.experience}
                    </div>

                    <div className="p-4 bg-[#EFE8DE] rounded-2xl border border-[#D8CFC4] text-[#0B1325]">
                      <strong className="block mb-1 flex items-center gap-2 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-[#C59E4E]" />
                        The Outcome & Shift:
                      </strong>
                      {story.after}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8DFC8] italic font-serif text-base sm:text-lg text-[#1E293B] leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filterable Testimonial Quote Cards */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DFC8] pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325]">
              More Client Words & Feedback
            </h3>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Reviews' },
                { id: 'moving', label: 'Moving & Cities' },
                { id: 'clarity', label: 'Life Clarity' },
                { id: 'career', label: 'Career & Nomad' },
                { id: 'transition', label: 'Transitions' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-colors cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#0B1325] text-[#FAF8F5] shadow-xs'
                      : 'bg-white text-[#334155] border border-[#D8CFC4] hover:bg-[#F5EFEB]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-xs flex flex-col justify-between space-y-5 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center gap-1 text-[#C59E4E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C59E4E]" />
                    ))}
                  </div>

                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#0B1325] leading-snug">
                    &ldquo;{item.highlight}&rdquo;
                  </h4>

                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFC8] flex items-center justify-between text-sm">
                  <div>
                    <span className="font-bold text-[#0B1325] block text-sm sm:text-base">
                      {item.clientName}
                    </span>
                    {item.location && (
                      <span className="text-xs sm:text-sm text-[#7C6A46] flex items-center gap-1 font-medium mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C59E4E]" />
                        {item.location}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#475569] bg-[#F5EFEB] px-3 py-1 rounded-full font-bold border border-[#E8DFC8]">
                    {item.serviceUsed.replace(' Reading', '')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-6">
          <button
            onClick={() => onOpenBooking('reading-60')}
            className="w-full sm:w-auto px-9 py-4 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-sm sm:text-base uppercase tracking-wider font-bold rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2.5 border border-[#C59E4E]/40 cursor-pointer"
          >
            <span>Book Your Own Private Reading ($333)</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </section>
  );
}

