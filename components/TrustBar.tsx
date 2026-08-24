import React from 'react';
import { Award, BookOpen, Radio, Compass, MapPin } from 'lucide-react';

export default function TrustBar() {
  const credentials = [
    {
      icon: Award,
      title: 'Certified Astrocartographer',
      subtitle: 'Trained & Certified by Helena Woods'
    },
    {
      icon: BookOpen,
      title: 'Bestselling Author',
      subtitle: 'Free to Fly: Manifest Your Dreams'
    },
    {
      icon: Compass,
      title: 'Psychic Medium & Coach',
      subtitle: 'Grounded Intuitive Direction'
    },
    {
      icon: Radio,
      title: 'Podcast Host',
      subtitle: 'Travel Lightly & Absolutely Abundant'
    },
    {
      icon: MapPin,
      title: 'Global Relocation Specialist',
      subtitle: '500+ Maps & Planetary Charts'
    }
  ];

  return (
    <section id="trust-bar" className="bg-[#0B1325] text-[#FAF8F5] py-7 sm:py-8 border-y border-[#C59E4E]/40 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            Grounded Expertise • Verified Astrological Certification • Authentic Intuition
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5 items-stretch">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-white/[0.06] border border-white/15 hover:border-[#C59E4E]/60 hover:bg-white/[0.1] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-full bg-[#C59E4E]/20 border border-[#C59E4E]/40 flex items-center justify-center text-[#D4AF37] mb-2 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#FAF8F5] tracking-wide">
                  {cred.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#D8CFC4] mt-0.5 leading-snug font-medium">
                  {cred.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

