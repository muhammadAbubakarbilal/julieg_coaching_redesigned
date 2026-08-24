export interface ResourceItem {
  id: string;
  type: 'guide' | 'book' | 'podcast' | 'article' | 'event';
  title: string;
  category: 'Astrocartography' | 'Relocation' | 'Career' | 'Life Transitions' | 'Intuition' | 'Mindset';
  description: string;
  badge?: string;
  url?: string;
  ctaText: string;
  readTime?: string;
}

export const BOOK_DETAILS = {
  title: 'Free to Fly: Manifest the Life of Your Dreams',
  author: 'Julie Goetzinger',
  subtitle: 'An International Bestseller on Breaking Free from Scarcity Mindset and Living in Soul-Aligned Abundance',
  description: 'In "Free to Fly," Julie shares her personal journey from uncertainty, scarcity, and creative burnout to building a life of authentic freedom, abundance, and intuitive alignment. Packed with actionable mindset shifts, energetic practices, and inspiring exercises, this book is an essential companion for any woman standing on the precipice of a major life transition.',
  highlights: [
    'How to release subconscious fear and scarcity holding you back from making bold life moves',
    'Practical steps to attune your intuition and trust the inner whispers about your next chapter',
    'Transformative exercises to open to financial and emotional prosperity',
    'Real-life manifestation strategies grounded in practical daily habits'
  ],
  formats: ['Paperback', 'Kindle eBook', 'Audible Audiobook'],
  quote: '"Julie Goetzinger effectively demonstrates how to instill abundance into your life and manifest positive changes for good. A must-read if you feel floundering or stuck in scarcity."'
};

export const PODCAST_SHOWS = [
  {
    title: 'Travel Lightly',
    host: 'Hosted by Julie Goetzinger',
    description: 'Conversations and intuitive explorations on astrocartography, traveling with intention, letting go of emotional baggage, and finding home within yourself wherever you land in the world.',
    episodesCount: 'Available on Apple Podcasts & Spotify',
    topics: ['Astrocartography', 'Relocation Stories', 'Solo Travel', 'Life Crossroads']
  },
  {
    title: 'Absolutely Abundant',
    host: 'Hosted by Julie Goetzinger',
    description: 'A podcast for soul-aligned entrepreneurs, visionaries, and creatives desiring to break through money blocks, embrace their psychic gifts, and scale their work with feminine ease.',
    episodesCount: 'Available on Apple Podcasts & Spotify',
    topics: ['Money Mindset', 'Intuitive Business', 'Manifestation', 'Energy Management']
  }
];

export const ARTICLES: ResourceItem[] = [
  {
    id: 'art-1',
    type: 'article',
    category: 'Astrocartography',
    title: 'How Astrocartography Can Explain Why You Never Felt at Home in Your Hometown',
    description: 'Ever wondered why certain cities leave you feeling drained while others instantly spark creative electricity? Learn how planetary angular lines influence your nervous system and sense of belonging.',
    readTime: '6 min read',
    ctaText: 'Read Article'
  },
  {
    id: 'art-2',
    type: 'article',
    category: 'Relocation',
    title: 'The Relocation Checklist: 5 Things to Check Before Signing a Lease in a New City',
    description: 'A grounded, practical and astrological framework for evaluating your next home before packing the moving truck.',
    readTime: '8 min read',
    ctaText: 'Read Article'
  },
  {
    id: 'art-3',
    type: 'article',
    category: 'Life Transitions',
    title: 'Navigating The In-Between: How to Make Decisions When Nothing Is Certain',
    description: 'Guidance on navigating the liminal space between chapters when your old life is ending but the next hasn’t fully materialized.',
    readTime: '5 min read',
    ctaText: 'Read Article'
  },
  {
    id: 'art-4',
    type: 'article',
    category: 'Career',
    title: 'Midheaven Lines Explained: Where Your Career and Public Recognition Naturally Expand',
    description: 'Discover how Midheaven (MC) lines for the Sun, Jupiter, and Mercury create fertile ground for professional elevation.',
    readTime: '7 min read',
    ctaText: 'Read Article'
  }
];

export const OFFICE_HOURS_INFO = {
  title: 'Office Hours with Spirit',
  subtitle: 'Live Monthly Intuitive Gathering',
  description: 'An intimate live monthly gathering where Julie tunes into the collective energy, channels messages from Spirit, and answers spontaneous questions on life direction, love, relocation, and purpose.',
  format: 'Live Monthly Group Zoom Call',
  ctaText: 'Join Next Gathering'
};
