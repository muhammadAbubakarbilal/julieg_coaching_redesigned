'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollDownIndicator from '@/components/ScrollDownIndicator';
import Image from 'next/image';
import { Mail, Compass, CheckCircle2, ArrowRight, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Astrocartography Reading Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col pt-20">
      <Navbar />

      {/* Hero */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8DFC8]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
            <Mail className="w-4 h-4 text-[#C59E4E]" />
            <span>Connect with Julie</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325] leading-tight">
            Have a Question Before Booking?
          </h1>

          <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re wondering which reading is right for your situation or inquiring about retreats and mentoring, we&apos;d love to hear from you.
          </p>

          <div className="pt-3">
            <ScrollDownIndicator targetId="contact-details" label="Send a Note" />
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section id="contact-details" className="py-10 sm:py-14 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Direct info & Shortcuts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325] leading-snug">
                  Let&apos;s Stay in Touch
                </h2>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  Julie and her team personally read every message. If you are inquiring about a private session, you can also book directly through our online calendar.
                </p>
              </div>

              {/* Direct Info Points */}
              <div className="space-y-4 text-sm sm:text-base text-[#334155]">
                {/* Personal Card with Portrait */}
                <div className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-[#E8DFC8] shadow-xs">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C59E4E] shrink-0 bg-[#0B1325] shadow-xs">
                    <Image
                      src="/images/julie-portrait.jpg"
                      alt="Julie Goetzinger"
                      width={64}
                      height={64}
                      loading="lazy"
                      sizes="64px"
                      quality={85}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0B1325]">
                      Julie Goetzinger
                    </h4>
                    <p className="text-xs sm:text-sm text-[#7C6A46] font-bold">
                      Certified Astrocartographer & Author
                    </p>
                    <p className="text-xs sm:text-sm text-[#64748B] italic mt-0.5 leading-snug">
                      &ldquo;Looking forward to reviewing your chart.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-5 bg-white rounded-3xl border border-[#E8DFC8]">
                  <Clock className="w-5 h-5 text-[#C59E4E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0B1325] block">Response Time:</span>
                    <span className="text-[#334155]">We typically respond within 24 to 48 business hours (Mon – Fri).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-5 bg-white rounded-3xl border border-[#E8DFC8]">
                  <Mail className="w-5 h-5 text-[#C59E4E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0B1325] block">Direct Email:</span>
                    <a href="mailto:julie@juliegcoaching.com" className="text-[#947124] underline hover:text-[#0B1325] transition-colors font-bold">
                      julie@juliegcoaching.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-5 bg-white rounded-3xl border border-[#E8DFC8]">
                  <Compass className="w-5 h-5 text-[#C59E4E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0B1325] block">Session Platform:</span>
                    <span className="text-[#334155]">All private readings take place 1:1 on Zoom (video & audio recording included).</span>
                  </div>
                </div>
              </div>

              {/* Ready to Book Direct Callout */}
              <div className="p-7 bg-[#F5EFEB] rounded-3xl border border-[#D8CFC4] space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#0B1325]">
                  Already Know Which Reading You Need?
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed">
                  Skip the email and select a live slot directly on Julie&apos;s scheduling calendar:
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    href="/readings"
                    className="w-full py-3.5 bg-[#0B1325] text-[#FAF8F5] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full text-center hover:bg-[#1A243F] shadow-md cursor-pointer transition-all border border-[#C59E4E]/40"
                  >
                    View Reading Calendar ($333) →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFC8] shadow-xs">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1325] mb-2">
                      Send Julie a Note
                    </h3>

                    <div>
                      <label className="block text-sm font-bold text-[#0B1325] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jessica Smith"
                        className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325] focus:ring-1 focus:ring-[#0B1325]/20 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#0B1325] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jessica@example.com"
                        className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325] focus:ring-1 focus:ring-[#0B1325]/20 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#0B1325] mb-1.5">
                        What is this regarding?
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325] focus:ring-1 focus:ring-[#0B1325]/20 transition-all duration-300"
                      >
                        <option value="Astrocartography Reading Inquiry">Astrocartography Reading Inquiry</option>
                        <option value="1:1 Mentoring Container">1:1 Mentoring Container</option>
                        <option value="Retreat Question / Waitlist">Retreat Question / Waitlist</option>
                        <option value="Podcast Guest / Media Inquiry">Podcast Guest / Media Inquiry</option>
                        <option value="Book: Free to Fly">Book: Free to Fly</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#0B1325] mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share any questions about your birth details, potential destinations, or scheduling..."
                        className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325] focus:ring-1 focus:ring-[#0B1325]/20 transition-all duration-300"
                      />
                    </div>

                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2 border border-[#C59E4E]/40 shadow-md cursor-pointer transition-all duration-300"
                      >
                        <span>{isSubmitting ? 'Sending Message...' : 'Send Note to Julie'}</span>
                        <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#EFE8DE] text-[#947124] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7 text-[#C59E4E]" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-[#0B1325]">
                      Message Sent!
                    </h3>
                    <p className="text-sm sm:text-base text-[#334155] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <strong>{formData.name}</strong>. Julie and her team will get back to you at <strong>{formData.email}</strong> within 24–48 business hours.
                    </p>
                    <div className="pt-6">
                      <Link
                        href="/"
                        className="px-8 py-3.5 bg-[#FAF8F5] text-[#0B1325] border border-[#D8CFC4] rounded-full text-sm font-bold hover:bg-[#EFE8DE] transition-colors inline-block"
                      >
                        Return to Homepage
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
