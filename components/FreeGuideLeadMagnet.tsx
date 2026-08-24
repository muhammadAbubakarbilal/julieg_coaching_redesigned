'use client';

import React, { useState } from 'react';
import { Download, CheckCircle2, FileText, ArrowRight, Eye, X } from 'lucide-react';
import { PLANETARY_LINES, ASTRO_ANGLES } from '@/lib/data/astrocartography';

export default function FreeGuideLeadMagnet() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="free-guide" className="py-10 sm:py-14 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B1325] via-[#111A30] to-[#0B1325] text-[#FAF8F5] rounded-3xl p-8 sm:p-10 md:p-14 border border-[#C59E4E]/40 shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59E4E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Copy */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D4AF37] border border-white/10">
                <FileText className="w-4 h-4" />
                <span>Free Downloadable Resource</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Curious what your map says about you?
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-[#BAC7DA] leading-relaxed max-w-xl">
                Get Julie&apos;s <strong>Free Astrocartography Cheat Sheet</strong>. Learn how Sun, Venus, Jupiter, and Mercury lines influence your vitality, relationships, money, and sense of home before you make your next move.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#FAF8F5] pt-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-medium">Breakdown of all 10 planetary lines</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-medium">Midheaven, AC, DC, IC angles explained</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-medium">5 essential questions to ask before moving</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-medium">Instant PDF download & live guide</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(true)}
                  className="text-xs sm:text-sm text-[#D4AF37] hover:underline flex items-center gap-2 font-bold cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  Preview Cheat Sheet Online
                </button>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF8F5] text-[#0B1325] rounded-3xl p-7 sm:p-8 border border-[#E8DFC8] shadow-lg">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="text-center sm:text-left">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1325]">
                        Download The Cheat Sheet
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-0.5 font-medium">
                        Delivered immediately to your inbox
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-1.5">
                        Your First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah"
                        className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325] focus:ring-1 focus:ring-[#0B1325]/20 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325] focus:ring-1 focus:ring-[#0B1325]/20 transition-all duration-300"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2 border border-[#C59E4E]/40 shadow-md transition-colors cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#D4AF37]" />
                      <span>{isSubmitting ? 'Sending Guide...' : 'Get Free Cheat Sheet'}</span>
                    </button>

                    <p className="text-xs text-[#64748B] text-center leading-relaxed">
                      No spam ever. You can unsubscribe at any time.
                    </p>
                  </form>
                ) : (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#EFE8DE] text-[#947124] flex items-center justify-center mx-auto border border-[#D8CFC4] shadow-xs">
                      <CheckCircle2 className="w-7 h-7 text-[#C59E4E]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#0B1325]">
                      You&apos;re All Set!
                    </h3>
                    <p className="text-sm text-[#334155] leading-relaxed">
                      Thank you, <strong>{name}</strong>. Your Free Astrocartography Cheat Sheet has been sent to <strong>{email}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsPreviewOpen(true)}
                      className="w-full py-3.5 bg-[#0B1325] text-[#FAF8F5] text-xs sm:text-sm uppercase font-bold tracking-wider rounded-full hover:bg-[#1A243F] transition-colors cursor-pointer shadow-xs"
                    >
                      Open Instant Interactive Preview
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Interactive Cheat Sheet Modal Preview */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#E8DFC8] p-7 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b border-[#E8DFC8] pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#C59E4E]" />
                <h3 className="font-serif text-xl font-bold text-[#0B1325]">
                  Astrocartography Cheat Sheet Guide
                </h3>
              </div>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="text-[#64748B] hover:text-[#0B1325] p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-[#334155]">
              <p className="text-sm font-serif italic text-[#7C6A46]">
                &ldquo;A quick-reference guide to what planetary lines activate when you live, work, or travel near them.&rdquo;
              </p>

              <div className="space-y-3">
                <h4 className="font-bold text-sm text-[#0B1325] uppercase tracking-wider">
                  1. Dominant Planetary Lines:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PLANETARY_LINES.map((p) => (
                    <div key={p.planet} className="p-3 bg-white border border-[#D8CFC4] rounded-2xl space-y-1">
                      <span className="font-bold text-[#0B1325] flex items-center gap-1.5">
                        <span className="font-serif text-base" style={{ color: p.color }}>{p.symbol}</span>
                        {p.planet}
                      </span>
                      <p className="text-[#475569]">{p.theme}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-sm text-[#0B1325] uppercase tracking-wider">
                  2. The Four Celestial Angles:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ASTRO_ANGLES.map((a) => (
                    <div key={a.angle} className="p-3 bg-[#F5EFEB] border border-[#E8DFC8] rounded-2xl space-y-1">
                      <span className="font-bold text-[#0B1325]">{a.angle} ({a.shortCode})</span>
                      <p className="text-[#475569]">{a.impactArea}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 text-center border-t border-[#E8DFC8]">
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="px-6 py-2.5 bg-[#0B1325] text-[#FAF8F5] text-xs font-semibold rounded-full hover:bg-[#1A243F] cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
