'use client';

import React, { useState } from 'react';
import { FAQS } from '@/lib/data/faqs';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FAQSectionProps {
  onOpenBooking?: (type?: 'reading-60' | 'reading-120' | 'followup') => void;
}

export default function FAQSection({ onOpenBooking }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-10 sm:py-14 bg-[#F4EFEA] border-t border-[#E8DFC8]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DE] border border-[#D8CFC4] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C6A46]">
            <HelpCircle className="w-4 h-4 text-[#C59E4E]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1325]">
            Everything You Need to Know
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl mx-auto">
            Practical answers about birth time accuracy, session deliverables, and booking your reading with Julie.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] rounded-3xl border border-[#D8CFC4] shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 font-serif text-xl sm:text-2xl font-bold text-[#0B1325] hover:text-[#947124] transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <span className="w-9 h-9 rounded-full bg-[#F5EFEB] flex items-center justify-center shrink-0 text-[#0B1325] border border-[#E8DFC8]">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#947124]" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#334155] leading-relaxed border-t border-[#E8DFC8] pt-5 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions */}
        <div className="text-center pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm sm:text-base text-[#475569]">
          <span>Still have a question before booking?</span>
          <Link
            href="/contact"
            className="text-[#0B1325] font-bold underline hover:text-[#947124] inline-flex items-center gap-1.5"
          >
            Send Julie a Direct Note <ArrowRight className="w-4 h-4 text-[#C59E4E]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
