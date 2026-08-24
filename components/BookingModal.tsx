'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import juliePortrait from '@/public/images/julie-portrait.jpg';
import { X, CheckCircle2, Calendar, Clock, MapPin, Compass, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES } from '@/lib/data/services';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: 'reading-60' | 'reading-120' | 'followup' | 'mentoring';
}

export default function BookingModal({
  isOpen,
  onClose,
  initialService = 'reading-60'
}: BookingModalProps) {
  const [activeType, setActiveType] = useState<'reading-60' | 'reading-120' | 'followup'>(
    initialService === 'mentoring' ? 'reading-60' : initialService
  );

  const [step, setStep] = useState<'details' | 'form' | 'calendar' | 'success'>('details');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    birthTime: '',
    birthCity: '',
    birthCountry: '',
    currentLocation: '',
    targetCities: '',
    focusArea: 'Moving & Relocation',
    clientNotes: ''
  });

  const [selectedDate, setSelectedDate] = useState('Next Thursday');
  const [selectedSlot, setSelectedSlot] = useState('2:00 PM EST');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Synchronize state when initialService prop changes
  const [prevInitialService, setPrevInitialService] = useState(initialService);
  if (initialService && initialService !== 'mentoring' && initialService !== prevInitialService) {
    setPrevInitialService(initialService);
    setActiveType(initialService);
  }

  if (!isOpen) return null;

  const currentService = SERVICES.find(s => s.bookingType === activeType) || SERVICES[0];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.birthDate.trim()) newErrors.birthDate = 'Date of birth is required';
    if (!formData.birthTime.trim()) newErrors.birthTime = 'Exact birth time is essential for astrocartography';
    if (!formData.birthCity.trim()) newErrors.birthCity = 'City & Country of birth required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextToCalendar = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep('calendar');
    }
  };

  const handleFinalBooking = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 1000);
  };

  const handleResetAndClose = () => {
    setStep('details');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E8DFC8] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0B1325] text-[#FAF8F5] px-6 sm:px-8 py-5 flex items-center justify-between border-b border-[#C59E4E]/40">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C59E4E] shrink-0 bg-[#1A243F]">
              <Image
                src={juliePortrait}
                alt="Julie Goetzinger"
                placeholder="blur"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white">
                Schedule Your Private Session
              </h3>
              <p className="text-xs sm:text-sm text-[#D8CFC4]">
                Astrocartography + Intuitive Guidance with Julie Goetzinger
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-[#D8CFC4] hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body with Progress */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {/* Step Indicators */}
          {step !== 'success' && (
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8DFC8] text-xs sm:text-sm font-semibold text-[#64748B]">
              <span className={`flex items-center gap-1.5 ${step === 'details' ? 'text-[#0B1325] font-bold underline' : ''}`}>
                1. Select Session
              </span>
              <span>→</span>
              <span className={`flex items-center gap-1.5 ${step === 'form' ? 'text-[#0B1325] font-bold underline' : ''}`}>
                2. Birth Details
              </span>
              <span>→</span>
              <span className={`flex items-center gap-1.5 ${step === 'calendar' ? 'text-[#0B1325] font-bold underline' : ''}`}>
                3. Date & Time
              </span>
            </div>
          )}

          {/* STEP 1: Select Session & Review Deliverables */}
          {step === 'details' && (
            <div className="space-y-6">
              {/* Service Tabs */}
              <div className="grid grid-cols-3 gap-2.5 p-2 bg-[#EFE8DE] rounded-2xl border border-[#D8CFC4]">
                <button
                  type="button"
                  onClick={() => setActiveType('reading-60')}
                  className={`py-3 px-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                    activeType === 'reading-60'
                      ? 'bg-[#0B1325] text-[#FAF8F5] shadow-md'
                      : 'text-[#475569] hover:text-[#0B1325]'
                  }`}
                >
                  60-Min ($333)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveType('reading-120')}
                  className={`py-3 px-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                    activeType === 'reading-120'
                      ? 'bg-[#0B1325] text-[#FAF8F5] shadow-md'
                      : 'text-[#475569] hover:text-[#0B1325]'
                  }`}
                >
                  120-Min ($555)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveType('followup')}
                  className={`py-3 px-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                    activeType === 'followup'
                      ? 'bg-[#0B1325] text-[#FAF8F5] shadow-md'
                      : 'text-[#475569] hover:text-[#0B1325]'
                  }`}
                >
                  Follow-Up ($222)
                </button>
              </div>

              {/* Service Card Details */}
              <div className="bg-[#FAF8F5] border border-[#D8CFC4] rounded-2xl p-6 space-y-4 shadow-xs">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-[#0B1325]">
                      {currentService.name}
                    </h4>
                    <p className="text-sm font-bold text-[#7C6A46] mt-0.5">{currentService.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1325]">
                      ${currentService.price}
                    </span>
                    <span className="block text-xs sm:text-sm text-[#64748B] font-semibold">
                      {currentService.duration}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {currentService.description}
                </p>

                <div className="border-t border-[#E8DFC8] pt-4">
                  <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B1325] mb-3">
                    What is included in your session:
                  </h5>
                  <ul className="space-y-2.5">
                    {currentService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#1E293B]">
                        <CheckCircle2 className="w-4 h-4 text-[#C59E4E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="flex items-center gap-3.5 p-4 bg-[#F1ECE4] rounded-xl text-xs sm:text-sm text-[#334155] border border-[#D8CFC4]">
                <ShieldCheck className="w-6 h-6 text-[#C59E4E] shrink-0" />
                <span className="leading-snug font-medium">
                  Conducted 1:1 live on Zoom with Julie. Includes video recording and written summary report. No automated bots.
                </span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-sm uppercase tracking-wider font-bold rounded-full flex items-center justify-center gap-2.5 shadow-md transition-all border border-[#C59E4E]/40 cursor-pointer"
                >
                  Continue to Birth Details
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Birth Details & Intake Form */}
          {step === 'form' && (
            <form onSubmit={handleNextToCalendar} className="space-y-5">
              <div className="p-4 bg-[#F5EFEB] rounded-2xl border border-[#E8DFC8] flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#C59E4E] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  <strong className="text-[#0B1325]">Why exact birth time matters:</strong> Astrocartography calculates planetary lines based on the exact degree the sky was oriented at your moment of birth. Please check your birth certificate for the most precise time.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Mitchell"
                    className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325]"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-1.5">
                    Email Address (for Zoom & Report) *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325]"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-1.5">
                    Exact Date of Birth *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    placeholder="e.g. June 14, 1988"
                    className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325]"
                  />
                  {errors.birthDate && <p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-1.5">
                    Exact Birth Time *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.birthTime}
                    onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                    placeholder="e.g. 04:22 PM (from birth certificate)"
                    className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325]"
                  />
                  {errors.birthTime && <p className="text-red-500 text-xs mt-1">{errors.birthTime}</p>}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-1.5">
                    City, State & Country of Birth *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.birthCity}
                    onChange={(e) => setFormData({ ...formData, birthCity: e.target.value })}
                    placeholder="e.g. Chicago, IL, USA"
                    className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325]"
                  />
                  {errors.birthCity && <p className="text-red-500 text-xs mt-1">{errors.birthCity}</p>}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-1.5">
                    Current City of Residence
                  </label>
                  <input
                    type="text"
                    value={formData.currentLocation}
                    onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                    placeholder="e.g. Austin, TX"
                    className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-1.5">
                  Target Cities or Regions to Evaluate (or write &ldquo;Worldwide Open&rdquo;)
                </label>
                <input
                  type="text"
                  value={formData.targetCities}
                  onChange={(e) => setFormData({ ...formData, targetCities: e.target.value })}
                  placeholder="e.g. Santa Fe NM, Lisbon Portugal, Costa Rica, or Open"
                  className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325]"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-1.5">
                  Primary Focus / Intent for This Session
                </label>
                <select
                  value={formData.focusArea}
                  onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325]"
                >
                  <option value="Moving & Relocation">Relocating to a New City</option>
                  <option value="Life Chapter Crossroads">Major Life Crossroads & New Season</option>
                  <option value="Career & Business Expansion">Career, Business & Financial Flow</option>
                  <option value="Love & Relationships">Love, Partnerships & Community</option>
                  <option value="Spiritual Sanctuary & Healing">Spiritual Sanctuary & Healing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-1.5">
                  Specific Questions or Context for Julie (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.clientNotes}
                  onChange={(e) => setFormData({ ...formData, clientNotes: e.target.value })}
                  placeholder="Share any specific situation or questions you'd like to address..."
                  className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-[#D8CFC4] rounded-xl focus:outline-hidden focus:border-[#0B1325]"
                />
              </div>

              <div className="pt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="text-xs sm:text-sm font-bold text-[#475569] hover:text-[#0B1325] cursor-pointer"
                >
                  ← Back to Services
                </button>

                <button
                  type="submit"
                  className="px-8 py-3 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full flex items-center gap-2 border border-[#C59E4E]/40 transition-all cursor-pointer"
                >
                  Choose Date & Time
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Calendar & Booking Confirmation */}
          {step === 'calendar' && (
            <div className="space-y-5">
              <div className="bg-[#FAF8F5] border border-[#D8CFC4] rounded-2xl p-5">
                <div className="flex items-center justify-between text-xs sm:text-sm text-[#475569] mb-2 font-medium">
                  <span>Selected Session:</span>
                  <span className="font-bold text-[#0B1325]">{currentService.name} (${currentService.price})</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm text-[#475569] font-medium">
                  <span>Client:</span>
                  <span className="text-[#0B1325] font-semibold">{formData.fullName} ({formData.email})</span>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-2.5">
                  Select an Upcoming Date:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Next Tuesday', 'Next Wednesday', 'Next Thursday', 'Following Monday'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`p-3.5 text-xs sm:text-sm font-bold rounded-2xl border transition-all text-center cursor-pointer ${
                        selectedDate === d
                          ? 'bg-[#0B1325] text-[#FAF8F5] border-[#0B1325] shadow-md'
                          : 'bg-white text-[#475569] border-[#D8CFC4] hover:border-[#0B1325]'
                      }`}
                    >
                      <Calendar className="w-5 h-5 mx-auto mb-1.5 text-[#C59E4E]" />
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#0B1325] mb-2.5">
                  Select Available Time Slot (EST):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {['11:00 AM EST', '1:00 PM EST', '2:00 PM EST', '4:00 PM EST', '5:30 PM EST'].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-3 px-3 text-xs sm:text-sm font-bold rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        selectedSlot === slot
                          ? 'bg-[#C59E4E] text-[#0B1325] border-[#C59E4E] shadow-sm'
                          : 'bg-white text-[#475569] border-[#D8CFC4] hover:bg-[#F5EFEB]'
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#F1ECE4] rounded-2xl text-xs sm:text-sm text-[#334155] space-y-1.5 border border-[#D8CFC4]">
                <p className="font-bold text-[#0B1325]">Immediate Next Steps After Booking:</p>
                <p>• You will receive a calendar invitation with your private Zoom link.</p>
                <p>• Julie prepares your custom planetary charts prior to the live call.</p>
                <p>• Written report and video recording delivered within 48 hours post-session.</p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="text-xs sm:text-sm font-bold text-[#475569] hover:text-[#0B1325] cursor-pointer"
                >
                  ← Edit Birth Info
                </button>

                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleFinalBooking}
                  className="px-8 py-3.5 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs sm:text-sm uppercase tracking-wider font-bold rounded-full flex items-center gap-2.5 border border-[#C59E4E]/40 shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? 'Confirming...' : `Confirm & Reserve ($${currentService.price})`}
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Success State */}
          {step === 'success' && (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 bg-[#F1ECE4] text-[#C59E4E] rounded-full flex items-center justify-center mx-auto shadow-inner border border-[#C59E4E]/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="font-serif text-3xl font-bold text-[#0B1325]">
                Your Reading Is Scheduled!
              </h4>

              <p className="text-base sm:text-lg text-[#334155] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0B1325]">{formData.fullName}</strong>. A confirmation email with your private Zoom link has been sent to <strong className="text-[#0B1325]">{formData.email}</strong> for <strong className="text-[#0B1325]">{selectedDate} at {selectedSlot}</strong>.
              </p>

              <div className="bg-[#FAF8F5] border border-[#D8CFC4] rounded-2xl p-5 text-left text-sm text-[#334155] max-w-md mx-auto space-y-2.5 shadow-xs">
                <div className="font-bold text-[#0B1325] flex items-center gap-2 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 text-[#C59E4E]" />
                  What Julie is mapping for you:
                </div>
                <p>• <strong>Birth:</strong> {formData.birthDate} at {formData.birthTime} in {formData.birthCity}</p>
                <p>• <strong>Target Locations:</strong> {formData.targetCities || 'Comprehensive Global Scan'}</p>
                <p>• <strong>Focus:</strong> {formData.focusArea}</p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-8 py-3.5 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-sm uppercase tracking-wider font-bold rounded-full transition-all border border-[#C59E4E]/30 cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
