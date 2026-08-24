export interface Testimonial {
  id: string;
  clientName: string;
  location?: string;
  category: 'moving' | 'clarity' | 'career' | 'transition';
  quote: string;
  highlight: string;
  serviceUsed: string;
  rating?: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Sarah M.',
    location: 'Relocated from Chicago to Santa Fe',
    category: 'moving',
    highlight: 'Within 10 minutes, a giant weight had lifted off my chest.',
    quote: "Julie was able to answer all of my deepest questions within the first ten minutes of our session without me even having to ask them out loud. She explained why I felt so depleted in the city I was living in and pointed me toward my Sun-Jupiter lines. Moving to my recommended zone has completely rejuvenated my health and creative work.",
    serviceUsed: '60-Minute Astrocartography Reading'
  },
  {
    id: 't-2',
    clientName: 'Elena R.',
    location: 'Digital Nomad & Creative Director',
    category: 'career',
    highlight: 'Reassuring, accurate, and mind-blowing detail on every city.',
    quote: "My 120-minute deep dive with Julie was a vibrant, fun, detailed journey across the globe. She explained the exact planetary influences I had experienced in 4 different countries I'd lived in before—it was so spot on it gave me chills! Now I never book an extended stay or launch a major project without checking my map.",
    serviceUsed: '120-Minute Deep Dive Reading'
  },
  {
    id: 't-3',
    clientName: 'Jessica T.',
    location: 'Seattle, WA',
    category: 'clarity',
    highlight: 'Left with a profound sense of calm, hope, and clear direction.',
    quote: "I was at a complete crossroads in my marriage and career and didn't know which way was up. Julie's combination of astrocartography and psychic intuition is extraordinary. She pinpointed my exact personality traits, where I was struggling, and why. I finally understood that my feeling of stagnation wasn't a personal failure—it was energetic misalignment.",
    serviceUsed: '60-Minute Astrocartography Reading'
  },
  {
    id: 't-4',
    clientName: 'Amanda K.',
    location: 'Austin, TX',
    category: 'transition',
    highlight: 'Empowered me to let go of what was holding me back.',
    quote: "Working with Julie helped me break free from years of indecision. She validated intuitive nudges I had been ignoring for years and gave me the astrological backing and practical confidence to step boldly into my next chapter. Her warm, grounded presence makes you feel completely safe and deeply seen.",
    serviceUsed: '1:1 Mentoring Container'
  },
  {
    id: 't-5',
    clientName: 'Dr. Rebecca W.',
    location: 'Denver, CO',
    category: 'moving',
    highlight: 'Saved me months of expensive trial-and-error moving mistakes.',
    quote: "I had a short list of three cities to relocate my private practice to. Julie walked through the planetary lines for each one, explaining how one would bring intense career pressure while another was ripe for community and financial flow. It gave me total conviction in choosing my new home.",
    serviceUsed: '60-Minute Astrocartography Reading'
  },
  {
    id: 't-6',
    clientName: 'Caroline S.',
    location: 'London, UK',
    category: 'clarity',
    highlight: 'The written report and session recording are treasures I revisit often.',
    quote: "Julie's session gave me immense peace of mind. The written summary report she sent after the call was beautifully articulated with actionable insights on my Venus and Mercury lines. It was worth every single dollar.",
    serviceUsed: '60-Minute Astrocartography Reading'
  }
];

export interface ClientStory {
  id: string;
  clientInitials: string;
  title: string;
  before: string;
  question: string;
  experience: string;
  after: string;
  quote: string;
}

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: 'cs-1',
    clientInitials: 'Rachel H., 42',
    title: 'From Creative Burnout in New York to Thriving Community in Portugal',
    before: 'Felt chronically exhausted, disconnected from creativity, and sensing that her long-time city was no longer energetically supportive.',
    question: 'Should I make a major transatlantic move, and which European hubs will support my independent consulting business and romantic life?',
    experience: 'Explored her natal chart transposed over Western Europe during a 120-minute deep dive. Discovered an active Venus Midheaven line running right through Lisbon paired with a supportive Mercury trine.',
    after: 'Relocated with clarity and ease, established an international client base, and met her current partner within 9 months of arriving.',
    quote: "Julie helped me see that it wasn't that I was 'broken'—my soul had simply completed its curriculum in my previous location. Her map gave me the courage to leap."
  },
  {
    id: 'cs-2',
    clientInitials: 'Megan P., 36',
    title: 'Resolving Severe Relocation Indecision Between Three US Cities',
    before: 'Paralyzed by competing advice from friends and family regarding job offers in Denver, Chicago, and Raleigh.',
    question: 'Which city aligns with my need for emotional peace, financial stability, and long-term family roots?',
    experience: '60-Minute reading dissecting the exact planetary lines passing within 150–200 miles of each target city, uncovering a challenging Saturn line near one and a harmonious Jupiter IC line in another.',
    after: 'Accepted the offer near her Jupiter IC line. Reports feeling an immediate sense of belonging and home that she had never felt in 15 years.',
    quote: "The clarity was instant. Within 10 minutes Julie mapped out why one city would feel like an uphill battle and why the other would feel like effortless homecoming."
  }
];
