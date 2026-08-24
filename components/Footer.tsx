import React from 'react';
import Link from 'next/link';
import { Compass, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121315] text-[#FAF6F0] border-t border-neutral-800 pt-12 sm:pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Bio Summary */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#121315] shadow-xs">
                <Compass className="w-5 h-5 text-[#C59E4E]" />
              </div>
              <div>
                <span className="font-serif text-xl tracking-wide font-bold text-[#FAF6F0] block leading-tight">
                  JULIE GOETZINGER
                </span>
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#C59E4E]">
                  Astrocartography & Intuition
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-sm">
              Helping women navigate moves, life crossroads, career pivots, and new chapters with precision relocation astrology and grounded intuitive guidance.
            </p>

            <div className="text-xs sm:text-sm text-[#D4AF37] flex items-center gap-2 pt-1 font-bold">
              <span>Certified by Helena Woods</span>
              <span>•</span>
              <span>Bestselling Author</span>
            </div>
          </div>

          {/* Col 2: Work With Julie Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Work With Julie
            </h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li>
                <Link href="/readings" className="hover:text-white transition-colors">
                  60-Minute Reading ($333)
                </Link>
              </li>
              <li>
                <Link href="/readings" className="hover:text-white transition-colors">
                  120-Minute Deep Dive ($555)
                </Link>
              </li>
              <li>
                <Link href="/readings" className="hover:text-white transition-colors">
                  Follow-Up Session ($222)
                </Link>
              </li>
              <li>
                <Link href="/mentoring" className="hover:text-white transition-colors">
                  1:1 Intuitive Mentoring Container
                </Link>
              </li>
              <li>
                <Link href="/retreats" className="hover:text-white transition-colors">
                  Retreats & Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Free Resources & Media
            </h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li>
                <Link href="/resources#free-guide" className="hover:text-white transition-colors">
                  Free Astrocartography Cheat Sheet
                </Link>
              </li>
              <li>
                <Link href="/resources#book" className="hover:text-white transition-colors">
                  Book: &ldquo;Free to Fly&rdquo;
                </Link>
              </li>
              <li>
                <Link href="/resources#podcasts" className="hover:text-white transition-colors">
                  Podcasts (Travel Lightly & Absolutely Abundant)
                </Link>
              </li>
              <li>
                <Link href="/astrocartography" className="hover:text-white transition-colors">
                  Astrocartography Guide & Planetary Lines
                </Link>
              </li>
              <li>
                <Link href="/resources#articles" className="hover:text-white transition-colors">
                  Relocation & Transition Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Contact & Touchpoint */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Julie
                </Link>
              </li>
              <li>
                <a
                  href="mailto:julie@juliegcoaching.com"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-[#C59E4E]" />
                  juliegcoaching.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Sovereign Choice */}
        <div className="border-t border-neutral-800 pt-6 space-y-3.5 text-xs text-[#94A3B8] leading-relaxed">
          <p>
            <strong className="text-neutral-300">Disclaimer:</strong> Astrocartography, intuitive readings, and coaching services provided by Julie Goetzinger are intended for personal self-discovery, spiritual exploration, and educational insight. They do not constitute legal, medical, or financial advice. All decisions regarding relocation, career, and personal life remain the sovereign responsibility of the client.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#CBD5E1] pt-2">
            <span>© {new Date().getFullYear()} Julie G Coaching. All rights reserved.</span>
            <div className="flex items-center gap-5">
              <Link href="/contact" className="hover:underline hover:text-white">Contact</Link>
              <Link href="/astrocartography" className="hover:underline hover:text-white">Astrocartography</Link>
              <Link href="/readings" className="hover:underline hover:text-white">Book a Reading</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
