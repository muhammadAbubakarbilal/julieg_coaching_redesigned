'use client';

import React, { useState } from 'react';
import { X, HelpCircle, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: 'reading-60' | 'reading-120' | 'followup' | 'mentoring') => void;
}

export default function QuizModal({ isOpen, onClose, onSelectService }: QuizModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    situation: '',
    scope: '',
    supportType: ''
  });

  if (!isOpen) return null;

  const handleSelectAnswer = (key: 'situation' | 'scope' | 'supportType', value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(4); // Result
    }
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setAnswers({ situation: '', scope: '', supportType: '' });
  };

  // Determine recommendation based on answers
  let recommendation = {
    serviceType: 'reading-60' as 'reading-60' | 'reading-120' | 'followup' | 'mentoring',
    title: '60-Minute Astrocartography Reading ($333)',
    subtitle: 'Best for choosing between specific cities or pinpointing your next move',
    reason: 'You have specific locations in mind or need quick, decisive clarity on where your personal planetary lines align for career, health, or lifestyle.',
    deliverables: 'Includes 60-min Zoom reading, top 2–4 city analysis, video recording & personalized written summary report.',
    cta: 'Book 60-Min Reading ($333)'
  };

  if (answers.scope === 'global' || answers.situation === 'nomad') {
    recommendation = {
      serviceType: 'reading-120',
      title: '120-Minute Deep Dive Reading ($555)',
      subtitle: 'Best for international relocations, multi-country nomads & life strategy',
      reason: 'You are looking across multiple countries, need comprehensive planetary parans, and want in-depth strategic timeline guidance.',
      deliverables: 'Includes 2-hour Zoom deep dive, global relocation roadmap, planetary parans, recording & comprehensive written report.',
      cta: 'Book 120-Min Deep Dive ($555)'
    };
  } else if (answers.supportType === 'ongoing' || answers.situation === 'lost') {
    recommendation = {
      serviceType: 'mentoring',
      title: '1:1 Intuitive Mentoring Container',
      subtitle: 'Ongoing private partnership for deep life reinvention',
      reason: 'You desire ongoing intuitive guidance, regular sessions, Voxer access, and steady support throughout your transformation.',
      deliverables: 'Includes bi-weekly Zoom calls, private Voxer messaging, Astrocartography mapping, and mindset coaching.',
      cta: 'Explore 1:1 Mentoring'
    };
  } else if (answers.situation === 'past-client') {
    recommendation = {
      serviceType: 'followup',
      title: 'Follow-Up Integration Reading ($222)',
      subtitle: 'For returning clients checking new destinations',
      reason: 'You’ve already had your primary map analyzed and want to spot-check new cities or integrate recent moves.',
      deliverables: 'Includes 45–60 min follow-up call, current transits, recording & notes.',
      cta: 'Book Follow-Up ($222)'
    };
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E8DFC8] overflow-hidden">
        {/* Header */}
        <div className="bg-[#0B1325] text-[#FAF8F5] px-6 py-4 flex items-center justify-between border-b border-[#C59E4E]/30">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-medium tracking-wide">
              Find Your Ideal Session
            </h3>
          </div>
          <button
            onClick={() => {
              resetQuiz();
              onClose();
            }}
            className="text-[#8E9EB8] hover:text-[#FAF8F5] p-1 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#7C6A46]">
                Question 1 of 3
              </div>
              <h4 className="font-serif text-xl font-semibold text-[#0B1325]">
                What brings you to Julie G Coaching today?
              </h4>
              <div className="space-y-2.5 pt-2">
                {[
                  { key: 'moving', label: 'I am planning a move and deciding between specific cities.' },
                  { key: 'nomad', label: 'I travel internationally or want a comprehensive worldwide scan.' },
                  { key: 'transition', label: 'I am at a major life crossroad (career, divorce, empty nest).' },
                  { key: 'lost', label: 'I know something must change, but I need deep ongoing support.' },
                  { key: 'past-client', label: 'I am a returning client wanting to check new cities.' }
                ].map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => handleSelectAnswer('situation', opt.key)}
                    className="w-full text-left p-3.5 rounded-xl border border-[#D8CFC4] bg-white hover:bg-[#F5EFEB] hover:border-[#0B1325] transition-all text-sm text-[#334155] font-medium flex items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#947124] shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#7C6A46]">
                Question 2 of 3
              </div>
              <h4 className="font-serif text-xl font-semibold text-[#0B1325]">
                How many destinations are on your mind?
              </h4>
              <div className="space-y-2.5 pt-2">
                {[
                  { key: 'few', label: '2 to 4 specific cities or regions in mind.' },
                  { key: 'global', label: 'Open to the entire world / multi-continent comparison.' },
                  { key: 'one', label: 'Just 1 specific city or confirming my current location.' },
                  { key: 'unsure', label: 'I don’t know yet, I want to see what my chart reveals.' }
                ].map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => handleSelectAnswer('scope', opt.key)}
                    className="w-full text-left p-3.5 rounded-xl border border-[#D8CFC4] bg-white hover:bg-[#F5EFEB] hover:border-[#0B1325] transition-all text-sm text-[#334155] font-medium flex items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#947124] shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#7C6A46]">
                Question 3 of 3
              </div>
              <h4 className="font-serif text-xl font-semibold text-[#0B1325]">
                What level of partnership do you need?
              </h4>
              <div className="space-y-2.5 pt-2">
                {[
                  { key: 'single', label: 'A single, high-impact reading with clear deliverables.' },
                  { key: 'extended', label: 'An intensive 2-hour strategic deep dive.' },
                  { key: 'ongoing', label: 'Multi-month mentorship with Voxer access & regular sessions.' },
                  { key: 'retreat', label: 'An immersive group retreat or workshop experience.' }
                ].map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => handleSelectAnswer('supportType', opt.key)}
                    className="w-full text-left p-3.5 rounded-xl border border-[#D8CFC4] bg-white hover:bg-[#F5EFEB] hover:border-[#0B1325] transition-all text-sm text-[#334155] font-medium flex items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#947124] shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-5">
              <div className="p-4 bg-[#F5EFEB] border border-[#C59E4E]/40 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7C6A46] mb-1">
                  <Compass className="w-4 h-4 text-[#C59E4E]" />
                  Your Recommended Match
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#0B1325]">
                  {recommendation.title}
                </h4>
                <p className="text-xs text-[#64748B] mt-0.5 font-medium">
                  {recommendation.subtitle}
                </p>
              </div>

              <div className="text-sm text-[#475569] space-y-2">
                <p className="leading-relaxed">
                  <strong>Why this fits you:</strong> {recommendation.reason}
                </p>
                <p className="text-xs text-[#334155] bg-[#EFE8DE]/60 p-2.5 rounded-lg">
                  <strong>Includes:</strong> {recommendation.deliverables}
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                {recommendation.serviceType === 'mentoring' ? (
                  <Link
                    href="/mentoring"
                    onClick={() => {
                      resetQuiz();
                      onClose();
                    }}
                    className="w-full py-3 bg-[#0B1325] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-full text-center flex items-center justify-center gap-2 border border-[#C59E4E]/40 shadow-sm transition-all"
                  >
                    Explore Mentoring Details →
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      const s = recommendation.serviceType;
                      resetQuiz();
                      onSelectService(s);
                    }}
                    className="w-full py-3 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-full flex items-center justify-center gap-2 border border-[#C59E4E]/40 shadow-sm transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    {recommendation.cta}
                  </button>
                )}

                <button
                  type="button"
                  onClick={resetQuiz}
                  className="text-xs text-[#64748B] hover:text-[#0B1325] py-1.5"
                >
                  Restart Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
