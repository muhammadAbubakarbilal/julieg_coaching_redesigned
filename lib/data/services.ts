export interface ServiceItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  duration: string;
  badge?: string;
  popular?: boolean;
  whoIsItFor: string;
  description: string;
  deliverables: string[];
  whatWeExplore: string[];
  ctaText: string;
  bookingType: 'reading-60' | 'reading-120' | 'followup' | 'mentoring';
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'astro-60',
    name: '60-Minute Astrocartography & Intuitive Reading',
    subtitle: 'Focused Relocation Astrology & Life Clarity',
    price: 333,
    duration: '60 Minutes',
    popular: true,
    badge: 'Most Popular',
    whoIsItFor: 'Women considering a move, evaluating 2 to 4 specific cities, or navigating a distinct crossroads in career, relationships, or home life.',
    description: 'A focused, high-impact session combining precision relocation astrology with intuitive psychic guidance to illuminate which locations support your personal energy, purpose, and peace.',
    deliverables: [
      '60-Minute live private Zoom consultation with Julie',
      'In-depth analysis of 2–4 target cities or regions',
      'Natal chart + relocated planetary line cross-referencing',
      'High-resolution custom Astrocartography map files',
      'Full video & audio recording of your session',
      'Personalized written summary report of your lines & themes'
    ],
    whatWeExplore: [
      'Your dominant planetary lines (Sun, Venus, Jupiter, Mercury, etc.)',
      'How your natal planetary placements express in specific locations',
      'Energy patterns for career growth, romance, rest, or creativity',
      'Intuitive guidance on timing, readiness, and next actionable steps'
    ],
    ctaText: 'Book 60-Min Reading ($333)',
    bookingType: 'reading-60'
  },
  {
    id: 'astro-120',
    name: '120-Minute Deep Dive & Relocation Roadmap',
    subtitle: 'Comprehensive Multi-Location & Life Strategy',
    price: 555,
    duration: '120 Minutes (2 Hours)',
    badge: 'Comprehensive Deep Dive',
    whoIsItFor: 'Digital nomads, international relocators, entrepreneurs expanding globally, or anyone navigating complex life-rebuilding across multiple continents.',
    description: 'An expansive, deeply immersive 2-hour exploration covering unlimited global locations, planetary parans (latitude crossings), cyclical astrological timing, and comprehensive intuitive life strategy.',
    deliverables: [
      '120-Minute extended private Zoom consultation with Julie',
      'Multi-country, global relocation & travel analysis',
      'In-depth exploration of planetary zenith lines & parans',
      'Current astrological transits and relocation timing windows',
      'Comprehensive multi-page written relocation roadmap',
      'Full HD video recording & downloadable audio'
    ],
    whatWeExplore: [
      'Comprehensive worldwide scan for your soul-aligned cities',
      'Business expansion, wealth creation, and leadership lines',
      'Healing, emotional rejuvenation, and spiritual sanctuary locations',
      'Relationship compatibility and dual-chart synergy if relocating with a partner'
    ],
    ctaText: 'Book 120-Min Deep Dive ($555)',
    bookingType: 'reading-120'
  },
  {
    id: 'astro-followup',
    name: 'Follow-Up Integration Reading',
    subtitle: 'For Returning Clients & New Target Cities',
    price: 222,
    duration: '45–60 Minutes',
    whoIsItFor: 'Past clients who have previously had a 60 or 120-minute reading and need to explore new potential locations, current transit activations, or integration support.',
    description: 'Designed exclusively for returning clients who have already had their core map analyzed and want to evaluate newly emerged destinations, verify timing, or integrate their recent relocation experiences.',
    deliverables: [
      '45–60 Minute private Zoom follow-up session',
      'Deep dive into up to 2 new destination cities',
      'Current planetary transit updates over your active lines',
      'Full video & audio session recording',
      'Follow-up summary notes'
    ],
    whatWeExplore: [
      'Newly considered cities or sudden travel/job opportunities',
      'Energetic check-in and grounding after a recent move',
      'Timing windows for signing leases, buying property, or launching'
    ],
    ctaText: 'Book Follow-Up Session ($222)',
    bookingType: 'followup'
  }
];

export interface MentoringTier {
  id: string;
  name: string;
  duration: string;
  description: string;
  features: string[];
  ctaText: string;
}

export const MENTORING_OFFER: MentoringTier = {
  id: 'intuitive-mentoring',
  name: '1:1 Intuitive Mentoring & Life Transition Container',
  duration: '3 or 6 Month Private Partnership',
  description: 'An intimate, ongoing mentorship combining Astrocartography, intuitive coaching, psychic mediumship, and grounded accountability to support you through profound life reinvention.',
  features: [
    'Bi-weekly 60-minute private Zoom sessions with Julie',
    'Unlimited private Voxer voice & text messaging support (Mon–Thu)',
    'Full Astrocartography mapping for all travel, moves, and retreats',
    'Intuitive business and soul-alignment strategy',
    'Personal energy clearing and subconscious mindset shifts',
    'Priority scheduling and personalized integration exercises'
  ],
  ctaText: 'Apply for 1:1 Mentoring'
};
