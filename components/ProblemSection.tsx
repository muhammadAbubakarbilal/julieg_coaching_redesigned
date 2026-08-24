import React from 'react';
import Link from 'next/link';
import { Home, Compass, Briefcase, Heart, Sun, AlertCircle, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onOpenBooking: (type?: 'reading-60' | 'reading-120' | 'followup') => void;
}

export default function ProblemSection({ onOpenBooking }: ProblemSectionProps) {
  const situations = [
    {
      icon: Home,
      title: "You're Thinking About Moving",
      description: "You have a shortlist of cities or countries in mind, but you want to know which one will genuinely support your health, financial prosperity, and peace of mind before signing a lease."
    },
    {
      icon: Compass,
      title: "You're Entering a Brand New Chapter",
      description: "A divorce, an empty nest, a milestone birthday, or a spiritual awakening has made you realize that your old life has completed its cycle. You're ready to intentionally architect what comes next."
    },
    {
      icon: Briefcase,
      title: "You're Changing Careers or Expanding",
      description: "You're starting a business, launching creative work, or seeking career elevation, and want to know where your public visibility (Midheaven) and prosperity lines (Jupiter) are active."
    },
    {
      icon: Heart,
      title: "You're Navigating a Relationship Pivot",
      description: "Whether seeking soulmate connections, navigating a separation, or moving with a partner, you want to understand how different geographic locations affect your romantic harmony."
    },
    {
      icon: Sun,
      title: "You're Craving Deep Energetic Alignment",
      description: "You feel chronically heavy, fatigued, or uninspired in your current city, and you want to confirm if you are living on a challenging planetary line and where your sanctuary lies."
    },
    {
      icon: AlertCircle,
      title: "You Feel Called Toward Something Different",
      description: "You can't explain it logically, but an intuitive whisper is nudging you to explore new horizons. You want grounded astrological validation to make sense of the inner pull."
    }
  ];

  return (
    <section id="recognition-section" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#7C6A46] block">
            The Crossroads You May Be Standing In
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325] leading-tight">
            Maybe you&apos;re here because...
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Major life transitions often present as confusion or restlessness. Astrocartography and intuitive guidance reveal that where you are geographically plays a profound role in how you feel.
          </p>
        </div>

        {/* Situation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {situations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E8DFC8] rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-lg hover:border-[#C59E4E] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F5EFEB] group-hover:bg-[#0B1325] transition-colors flex items-center justify-center text-[#947124] group-hover:text-[#D4AF37] mb-5 border border-[#E8DFC8]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0B1325] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0B1325] via-[#111A30] to-[#0B1325] rounded-3xl p-8 sm:p-12 text-[#FAF8F5] border border-[#C59E4E]/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#D4AF37] block">
              Clarity & Direction
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF8F5] leading-tight">
              Your map may offer another perspective.
            </h3>
            <p className="text-sm sm:text-base text-[#D8CFC4] max-w-xl leading-relaxed">
              Instead of guessing or second-guessing yourself for months, let&apos;s look at your unique birth blueprint transposed across the globe.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="/astrocartography"
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF8F5] text-sm font-bold rounded-full border border-white/25 transition-colors text-center"
            >
              Learn How It Works
            </Link>
            <button
              onClick={() => onOpenBooking('reading-60')}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#C59E4E] hover:bg-[#D4AF37] text-[#0B1325] text-sm uppercase tracking-wider font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore My Reading</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
