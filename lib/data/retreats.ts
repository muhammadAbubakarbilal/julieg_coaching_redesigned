export interface RetreatInfo {
  id: string;
  title: string;
  subtitle: string;
  format: 'In-Person' | 'Virtual';
  dates: string;
  location: string;
  theme: string;
  overview: string;
  whoIsItFor: string;
  highlights: string[];
  sampleSchedule: { time: string; activity: string }[];
  status: 'Open for Registration' | 'Join Waitlist' | 'Upcoming';
}

export const RETREATS: RetreatInfo[] = [
  {
    id: 'virtual-next-chapter',
    title: 'Virtual Next Chapter Retreat',
    subtitle: 'An Immersive 3-Day Astrological & Intuitive Journey to Align Your Next Season',
    format: 'Virtual',
    dates: 'Fall Gathering (Seasonal Dates Announced)',
    location: 'Live on Zoom with Intimate Global Circle',
    theme: 'Clarity, Map Exploration, Transition Rituals & Soul-Led Direction',
    overview: 'An intimate, high-vibrational virtual retreat designed for women at a crossroad. Over three immersive sessions, Julie guides you through individual map readings, intuitive group healings, releasing energetic ties to past locations, and anchoring into your soul’s next horizon.',
    whoIsItFor: 'Women contemplating a move, career shift, relationship transition, or ready to intentionally blueprint their upcoming year from the comfort of home.',
    highlights: [
      'Personal live mini-map reading and planetary line spot-check with Julie',
      'Intuitive group energy clearings & mediumship messages',
      'Guided visualization to tap into your prospective destination energies',
      'Interactive workbook with relocation decision matrices and journal prompts',
      'Intimate sisterhood of conscious, forward-moving women worldwide'
    ],
    sampleSchedule: [
      { time: 'Day 1: 10:00 AM - 1:00 PM EST', activity: 'Opening Circle, Honoring Where You Are, & Clearing Past Location Ties' },
      { time: 'Day 2: 10:00 AM - 2:00 PM EST', activity: 'Astrocartography Deep Dive: Finding Your Power Lines & Strategic Mapping' },
      { time: 'Day 3: 10:00 AM - 1:00 PM EST', activity: 'Intuitive Channeling, Integration Roadmap, & Bold Action Ritual' }
    ],
    status: 'Join Waitlist'
  },
  {
    id: 'abundance-breakthrough',
    title: 'Abundance Breakthrough In-Person Retreat',
    subtitle: 'Deep Transformative Retreat for High-Vision Women & Soul-Led Entrepreneurs',
    format: 'In-Person',
    dates: 'Intimate Annual Gathering',
    location: 'Sacred Sanctuary Destination',
    theme: 'Wealth Consciousness, Soul Purpose, Sisterhood & Reconnection',
    overview: 'A boutique, luxury in-person retreat focused on breaking through subconscious money ceilings, aligning with energetic abundance, and using your cosmic blueprint to expand your impact and peace.',
    whoIsItFor: 'Entrepreneurs, leaders, and creative women ready for deep rest, profound breakthroughs, and embodied sisterhood in a supportive, luxury sanctuary.',
    highlights: [
      'Daily intuitive coaching, subconscious reprogramming & energetic activations',
      'Personalized Astrocartography insights for global business & abundance',
      'Nourishing farm-to-table chef-prepared cuisine',
      'Sacred sound baths, nature excursions, and spacious downtime',
      'Lifelong friendships with visionary, like-minded women'
    ],
    sampleSchedule: [
      { time: 'Morning', activity: 'Gentle somatic movement, meditation, and breakfast' },
      { time: 'Midday', activity: 'Deep-dive intuitive workshop & collective energy shifts' },
      { time: 'Afternoon', activity: 'Private integration time, nature immersion, or 1:1 check-ins' },
      { time: 'Evening', activity: 'Celebratory dinner and fire ceremony' }
    ],
    status: 'Join Waitlist'
  }
];
