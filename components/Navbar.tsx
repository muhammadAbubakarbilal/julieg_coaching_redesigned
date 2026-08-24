'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Menu, X, ChevronDown, Calendar, BookOpen, HeartHandshake, MapPin, Radio, FileText, ArrowRight, Award, HelpCircle } from 'lucide-react';
import BookingModal from './BookingModal';
import QuizModal from './QuizModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'reading-60' | 'reading-120' | 'followup' | 'mentoring'>('reading-60');

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBooking = (type: 'reading-60' | 'reading-120' | 'followup' | 'mentoring' = 'reading-60') => {
    setSelectedService(type);
    setIsBookingOpen(true);
    setMobileMenuOpen(false);
  };

  const navItems = [
    {
      name: 'Services',
      href: '/work-with-julie',
      hasDropdown: true,
      dropdownKey: 'services',
      children: [
        {
          name: 'Private Readings',
          price: '$333 & $555',
          desc: '60 & 120-min Astrocartography Zoom sessions with report',
          href: '/readings',
          icon: Compass,
        },
        {
          name: '1:1 Mentoring Container',
          price: '3 to 6 Months',
          desc: 'Ongoing intuitive guidance and life transition support',
          href: '/mentoring',
          icon: HeartHandshake,
        },
        {
          name: 'Retreats & Immersions',
          price: 'Virtual & Travel',
          desc: 'Immersive gatherings for sisterhood, alignment & breakthroughs',
          href: '/retreats',
          icon: Compass,
        },
        {
          name: 'All Offerings & Comparison',
          price: 'View All',
          desc: 'Compare session formats, deliverables, and pricing',
          href: '/work-with-julie',
          icon: Compass,
        },
      ]
    },
    {
      name: 'Astrocartography',
      href: '/astrocartography',
      hasDropdown: false,
    },
    {
      name: 'Retreats',
      href: '/retreats',
      hasDropdown: false,
    },
    {
      name: 'About',
      href: '/about',
      hasDropdown: false,
    },
    {
      name: 'Resources',
      href: '/resources',
      hasDropdown: true,
      dropdownKey: 'resources',
      children: [
        {
          name: 'Free Planetary Cheat Sheet',
          desc: 'Instant downloadable Astrocartography planetary line guide',
          href: '/resources#free-guide',
          icon: FileText,
        },
        {
          name: 'Book: Free to Fly',
          desc: 'International bestselling memoir & spiritual guide',
          href: '/resources#book',
          icon: BookOpen,
        },
        {
          name: 'Podcasts & Media',
          desc: 'Travel Lightly & Absolutely Abundant episodes',
          href: '/resources#podcasts',
          icon: Radio,
        },
        {
          name: 'Articles & Insights',
          desc: 'Astrology and relocation guidance essays',
          href: '/resources#articles',
          icon: FileText,
        },
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      hasDropdown: false,
    },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-xs border-b border-editorial py-2.5 sm:py-3'
            : 'bg-[#FAF6F0]/90 backdrop-blur-xs py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 xl:px-8 flex items-center justify-between gap-2 lg:gap-3">
          
          {/* Brand Logo - Compact & Boutique */}
          <Link
            href="/"
            id="navbar-brand-logo"
            className="group flex items-center gap-2 sm:gap-2.5 lg:gap-3 shrink-0 min-w-0"
            aria-label="Julie Goetzinger Home"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full bg-[#0B1325] flex items-center justify-center text-[#C59E4E] shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-transform group-hover:rotate-45 duration-500" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight font-bold text-[#0B1325] leading-tight group-hover:text-[#C59E4E] transition-colors whitespace-nowrap">
                JULIE GOETZINGER
              </span>
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] xl:text-[12px] tracking-[0.14em] uppercase font-semibold text-[#7C6A46] whitespace-nowrap">
                Astrocartography
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Centered, Uncrowded & Sophisticated */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 2xl:space-x-2 shrink-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              
              if (item.hasDropdown) {
                const isDropdownOpen = item.dropdownKey === 'services' ? servicesDropdownOpen : resourcesDropdownOpen;
                const setDropdown = item.dropdownKey === 'services' ? setServicesDropdownOpen : setResourcesDropdownOpen;

                return (
                  <div
                    key={item.name}
                    className="relative shrink-0"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold rounded-full transition-all duration-150 whitespace-nowrap ${
                        isActive
                          ? 'text-[#0B1325] bg-[#EBE3D5]'
                          : 'text-[#334155] hover:text-[#0B1325] hover:bg-[#EBE3D5]/60'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-3 h-3 xl:w-3.5 xl:h-3.5 opacity-70 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    {/* Dropdown Card */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1.5 w-80 xl:w-88 bg-white border border-[#E8DFC8] rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150 space-y-1">
                        {item.children?.map((sub) => {
                          const IconComp = sub.icon || Compass;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setDropdown(false)}
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] group-hover:bg-[#0B1325] group-hover:text-[#C59E4E] flex items-center justify-center text-[#7C6A46] shrink-0 transition-colors mt-0.5 border border-[#E8DFC8]">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-sm font-bold text-[#0B1325] group-hover:text-[#C59E4E] transition-colors">
                                    {sub.name}
                                  </span>
                                  {'price' in sub && (
                                    <span className="text-[11px] font-bold px-2 py-0.5 bg-[#FAF8F5] border border-[#E8DFC8] rounded-full text-[#7C6A46] shrink-0">
                                      {sub.price}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-[#475569] leading-snug mt-0.5 font-medium">
                                  {sub.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold rounded-full transition-all duration-150 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#0B1325] bg-[#EBE3D5]'
                      : 'text-[#334155] hover:text-[#0B1325] hover:bg-[#EBE3D5]/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs - Clean & High Converting */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 shrink-0">
            <button
              id="nav-quiz-trigger-desktop"
              onClick={() => setIsQuizOpen(true)}
              className="hidden 2xl:inline-flex px-3 py-1.5 text-xs font-semibold text-[#6B5A38] hover:text-[#0B1325] hover:bg-[#EBE3D5] rounded-full transition-colors items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              title="Not sure which service to choose? Take our 30-second quiz"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#C59E4E]" />
              <span>Where to Start?</span>
            </button>

            <button
              id="nav-book-button-desktop"
              onClick={() => openBooking('reading-60')}
              className="px-3 sm:px-3.5 xl:px-4.5 py-1.5 sm:py-2 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs xl:text-sm uppercase tracking-wider font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-1.5 xl:gap-2 border border-[#C59E4E]/40 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#C59E4E] shrink-0" />
              <span>Book a Reading</span>
            </button>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              id="nav-book-button-mobile-top"
              onClick={() => openBooking('reading-60')}
              className="px-2.5 sm:px-3 py-1.5 bg-[#0B1325] hover:bg-[#1A243F] text-[#FAF8F5] text-xs font-bold rounded-full flex items-center gap-1 sm:gap-1.5 border border-[#C59E4E]/40 whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C59E4E] shrink-0" />
              <span>Book</span>
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-[#0B1325] rounded-xl hover:bg-[#EBE3D5] transition-colors shrink-0 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden fixed inset-x-0 top-full bg-[#FAF6F0] border-b border-editorial shadow-2xl max-h-[85vh] overflow-y-auto px-5 py-6 transition-all animate-in fade-in slide-in-from-top-1 duration-150"
          >
            <div className="flex flex-col space-y-4">
              
              {/* Quiz Matcher CTA */}
              <button
                onClick={() => {
                  setIsQuizOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-4.5 bg-[#FAF6F0] border border-editorial rounded-full text-left flex items-center justify-between text-xs font-semibold text-[#121315] transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <HelpCircle className="w-3.5 h-3.5 text-[#C59E4E]" />
                  <span>Not sure where to start? Take 30s Quiz</span>
                </span>
                <span className="text-[11px] text-[#C59E4E] font-bold">Start →</span>
              </button>

              {/* Main Links */}
              <div className="border-t border-editorial pt-2 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name} className="py-0.5">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        pathname === item.href
                          ? 'bg-[#F5EFEB] text-[#121315] font-semibold'
                          : 'text-[#334155] hover:bg-[#F5EFEB]'
                      }`}
                    >
                      {item.name}
                    </Link>

                    {item.hasDropdown && (
                      <div className="pl-3.5 space-y-1 my-1 border-l-2 border-editorial">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-2.5 py-1 text-xs text-[#64748B] hover:text-[#121315]"
                          >
                            <span className="font-medium text-[#334155]">{sub.name}</span>
                            {'price' in sub && (
                              <span className="text-[10px] text-[#C59E4E] ml-1.5">({sub.price})</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Direct Booking Action */}
              <div className="pt-3 border-t border-editorial space-y-2">
                <button
                  onClick={() => openBooking('reading-60')}
                  className="w-full py-2.5 bg-[#121315] hover:bg-[#202225] text-[#FAF6F0] text-xs uppercase tracking-wider font-semibold rounded-full text-center flex items-center justify-center gap-2 border border-editorial cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C59E4E]" />
                  <span>Book 60-Min Reading ($333)</span>
                </button>
                <button
                  onClick={() => openBooking('reading-120')}
                  className="w-full py-2.5 bg-white hover:bg-[#F5EFEB] text-[#121315] text-xs font-semibold rounded-full text-center border border-editorial cursor-pointer"
                >
                  <span>Book 120-Min Deep Dive ($555)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Booking Modal & Quiz Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectService={(service) => {
          setIsQuizOpen(false);
          openBooking(service);
        }}
      />
    </>
  );
}
