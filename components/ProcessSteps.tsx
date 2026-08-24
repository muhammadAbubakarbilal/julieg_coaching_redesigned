import React from 'react';
import { Calendar, FileEdit, Video, Compass, FileText } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      num: '01',
      icon: Calendar,
      title: 'Book Your Session',
      desc: 'Select your preferred reading duration (60 or 120 minutes) and pick a convenient date on Julie’s calendar.'
    },
    {
      num: '02',
      icon: FileEdit,
      title: 'Share Birth Details',
      desc: 'Provide your exact birth date, exact birth time (from your birth certificate), birth city, and current destination questions.'
    },
    {
      num: '03',
      icon: Video,
      title: 'Meet Julie on Zoom',
      desc: 'Join your private, 1:1 live video consultation. Julie opens your custom Astrocartography map and natal chart in real time.'
    },
    {
      num: '04',
      icon: Compass,
      title: 'Explore Your Map',
      desc: 'Walk through your planetary lines across target cities. Discover why past places felt the way they did and where your future thrives.'
    },
    {
      num: '05',
      icon: FileText,
      title: 'Receive Your Materials',
      desc: 'Within 48 hours, receive your full HD session video recording, audio file, high-resolution map files, and a written summary report.'
    }
  ];

  return (
    <section className="py-20 bg-[#F4EFEA] border-y border-[#E8DFC8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C6A46]">
            No Mystery, Total Clarity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0B1325]">
            Your Reading, Step by Step
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            From the moment you reserve your spot to your post-session integration, here is exactly what happens.
          </p>
        </div>

        {/* 5 Step Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#D8CFC4] shadow-xs flex flex-col justify-between relative group hover:border-[#C59E4E] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-[#C59E4E]">
                      {s.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#EFE8DE] flex items-center justify-center text-[#0B1325]">
                      <Icon className="w-4 h-4 text-[#947124]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0B1325] mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
