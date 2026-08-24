'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, HeartHandshake, Users, ArrowRight, CheckCircle2, RotateCcw, BookOpen } from 'lucide-react';

interface ServiceDecisionGuideProps {
  onOpenBooking: (type?: 'reading-60' | 'reading-120' | 'followup') => void;
}

export default function ServiceDecisionGuide({ onOpenBooking }: ServiceDecisionGuideProps) {
  const pathways = [
    {
      situation: "I want to explore where I might thrive in 2 to 4 cities.",
      recommendedOffer: "60-Minute Astrocartography Reading",
      price: "$333",
      duration: "60 Minutes Live on Zoom",
      whoItsFor: "Women moving, choosing between specific cities, or needing focused clarity on career, love, or health zones.",
      whatJulieProvides: "Full natal & relocation chart analysis, 1:1 Zoom reading, session recording & personalized written summary report.",
      actionType: 'booking-60',
      ctaText: "Book 60-Min Reading ($333)",
      badge: "Most Popular"
    },
    {
      situation: "I am relocating internationally, a nomad, or need a global scan.",
      recommendedOffer: "120-Minute Deep Dive & Relocation Roadmap",
      price: "$555",
      duration: "2 Hours Extended Zoom Session",
      whoItsFor: "Digital nomads, global business founders, or anyone mapping multiple continents with latitude parans and timing.",
      whatJulieProvides: "Comprehensive worldwide map scan, planetary crossings (parans), transit timing windows & extended relocation report.",
      actionType: 'booking-120',
      ctaText: "Book 120-Min Deep Dive ($555)",
      badge: "Comprehensive"
    },
    {
      situation: "I want continuous guidance & intuitive mentorship through a big pivot.",
      recommendedOffer: "1:1 Intuitive Mentoring Container",
      price: "Private Application",
      duration: "3 to 6 Month Partnership",
      whoItsFor: "Women stepping into profound reinvention needing regular strategy, energy alignment, and Voxer access.",
      whatJulieProvides: "Bi-weekly Zoom calls, private Voxer voice messaging, Astrocartography mapping, and subconscious mindset shifts.",
      actionType: 'link-mentoring',
      ctaText: "Explore 1:1 Mentoring",
      linkHref: "/mentoring"
    },
    {
      situation: "I want an immersive in-person or virtual sisterhood retreat.",
      recommendedOffer: "Transformational Retreats",
      price: "Seasonal Investment",
      duration: "Multi-Day Retreat Experience",
      whoItsFor: "Women craving deep rest, community, energetic shifts, and guided map breakthroughs in a sacred container.",
      whatJulieProvides: "Live group clearings, individual map hot seats, somatic rituals, and soul connections with visionary women.",
      actionType: 'link-retreats',
      ctaText: "View Upcoming Retreats",
      linkHref: "/retreats"
    },
    {
      situation: "I am a returning client and want to evaluate newly emerged cities.",
      recommendedOffer: "Follow-Up Integration Reading",
      price: "$222",
      duration: "45–60 Minutes",
      whoItsFor: "Past clients needing transit updates, integration check-ins, or analysis of 1–2 newly considered locations.",
      whatJulieProvides: "45-60 min Zoom session, current planetary transits over active lines, recording & follow-up notes.",
      actionType: 'booking-followup',
      ctaText: "Book Follow-Up ($222)"
    },
    {
      situation: "I am curious and want to learn how my lines work for free first.",
      recommendedOffer: "Free Astrocartography Cheat Sheet",
      price: "Free Instant Access",
      duration: "Downloadable PDF & Guide",
      whoItsFor: "Anyone wanting a clear visual breakdown of what planetary lines (Sun, Venus, Jupiter, Mercury) mean.",
      whatJulieProvides: "Downloadable reference sheet with key archetypes, angles, and questions to ask before moving.",
      actionType: 'link-resources',
      ctaText: "Get Free Cheat Sheet",
      linkHref: "/resources#free-guide"
    }
  ];

  return (
    <section id="service-selection" className="py-10 sm:py-14 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#7C6A46]">
            Guided Self-Selection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325] leading-tight">
            Where are you right now?
          </h2>
          <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
            Find the exact container, reading, or resource designed for your current moment in life. No guesswork required.
          </p>
        </div>

        {/* Decision Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pathways.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative ${
                item.badge ? 'border-[#C59E4E]/80 ring-2 ring-[#C59E4E]/15' : 'border-[#E8DFC8]'
              }`}
            >
              {item.badge && (
                <span className="absolute -top-3.5 right-6 bg-[#0B1325] text-[#D4AF37] text-xs uppercase font-bold tracking-wider px-4 py-1 rounded-full border border-[#C59E4E]/40 shadow-xs">
                  {item.badge}
                </span>
              )}

              <div className="space-y-4">
                {/* Client Intention / Situation Quote */}
                <div className="p-4 bg-[#F5EFEB] rounded-2xl border border-[#E8DFC8]/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C6A46] block mb-1">
                    Your Situation:
                  </span>
                  <p className="font-serif italic text-sm sm:text-base text-[#0B1325] font-semibold leading-snug">
                    &ldquo;{item.situation}&rdquo;
                  </p>
                </div>

                {/* Offer Headline & Pricing */}
                <div className="pt-1">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1325]">
                      {item.recommendedOffer}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#947124]">
                      {item.price}
                    </span>
                    <span className="text-xs sm:text-sm text-[#64748B] font-medium">
                      • {item.duration}
                    </span>
                  </div>
                </div>

                {/* Who It Is For */}
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  <strong className="text-[#0B1325] font-bold">Best for:</strong> {item.whoItsFor}
                </p>

                {/* Deliverables snippet */}
                <div className="text-xs sm:text-sm text-[#334155] border-t border-[#E8DFC8]/60 pt-3.5">
                  <span className="font-bold text-[#0B1325] block mb-1">What Julie Provides:</span>
                  <p className="text-[#475569] leading-relaxed">{item.whatJulieProvides}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                {item.actionType === 'booking-60' && (
                  <button
                    onClick={() => onOpenBooking('reading-60')}
                    className="w-full py-3.5 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2 shadow-md transition-colors border border-[#C59E4E]/40 cursor-pointer"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                )}

                {item.actionType === 'booking-120' && (
                  <button
                    onClick={() => onOpenBooking('reading-120')}
                    className="w-full py-3.5 bg-[#FAF8F5] hover:bg-[#0B1325] hover:text-[#FAF8F5] text-[#0B1325] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2 border border-[#0B1325] shadow-xs transition-colors cursor-pointer"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                {item.actionType === 'booking-followup' && (
                  <button
                    onClick={() => onOpenBooking('followup')}
                    className="w-full py-3.5 bg-[#FAF8F5] hover:bg-[#F5EFEB] text-[#0B1325] text-xs sm:text-sm font-bold rounded-full flex items-center justify-center gap-2 border border-[#D8CFC4] transition-colors cursor-pointer"
                  >
                    <span>{item.ctaText}</span>
                    <RotateCcw className="w-4 h-4 text-[#947124]" />
                  </button>
                )}

                {item.actionType.startsWith('link-') && item.linkHref && (
                  <Link
                    href={item.linkHref}
                    className="w-full py-3.5 bg-[#FAF8F5] hover:bg-[#EFE8DE] text-[#0B1325] text-xs sm:text-sm font-bold rounded-full flex items-center justify-center gap-2 border border-[#D8CFC4] transition-colors"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#947124]" />
                  </Link>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

