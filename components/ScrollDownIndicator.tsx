'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollDownIndicatorProps {
  targetId: string;
  label?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export default function ScrollDownIndicator({
  targetId,
  label = 'Scroll to explore',
  className = '',
  variant = 'light'
}: ScrollDownIndicatorProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isDark = variant === 'dark';

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <button
        onClick={handleClick}
        aria-label={`Scroll to ${label}`}
        className={`group inline-flex flex-col items-center gap-1.5 cursor-pointer transition-all duration-300 focus:outline-hidden ${
          isDark
            ? 'text-[#BAC7DA] hover:text-[#D4AF37]'
            : 'text-[#64748B] hover:text-[#0B1325]'
        }`}
      >
        {label && (
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] opacity-80 group-hover:opacity-100 transition-opacity">
            {label}
          </span>
        )}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-xs group-hover:shadow-md animate-bounce ${
            isDark
              ? 'bg-white/10 group-hover:bg-[#C59E4E] text-[#D4AF37] group-hover:text-[#0B1325] border border-white/15'
              : 'bg-white group-hover:bg-[#0B1325] text-[#7C6A46] group-hover:text-[#FAF8F5] border border-[#E8DFC8]'
          }`}
        >
          <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
        </div>
      </button>
    </div>
  );
}
