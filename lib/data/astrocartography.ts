export interface PlanetaryLine {
  planet: string;
  symbol: string;
  color: string;
  theme: string;
  essence: string;
  whatItBrings: string;
  bestFor: string;
}

export const PLANETARY_LINES: PlanetaryLine[] = [
  {
    planet: 'Sun Line',
    symbol: '☉',
    color: '#D4AF37',
    theme: 'Vitality, Purpose, Visibility & Self-Actualization',
    essence: 'Where your authentic self shines bright and you feel energized, seen, and empowered to lead.',
    whatItBrings: 'Increased energy, natural charisma, confidence in your creative expression, feeling vibrant in your skin, and magnetic visibility.',
    bestFor: 'Career advancement, stepping into the spotlight, reclaiming self-worth, and revitalizing low physical vitality.'
  },
  {
    planet: 'Venus Line',
    symbol: '♀',
    color: '#E07A5F',
    theme: 'Love, Beauty, Sensuality, Community & Ease',
    essence: 'Where life feels sweet, harmonious, socially magnetic, and aesthetically enriching.',
    whatItBrings: 'Heightened attraction, romantic serendipity, deeper sisterhood and friendships, appreciation for art/culture, and gentle financial flow.',
    bestFor: 'Attracting relationships, indulging in creative arts, emotional restoration, pleasure, and living gracefully.'
  },
  {
    planet: 'Jupiter Line',
    symbol: '♃',
    color: '#3B82F6',
    theme: 'Expansion, Abundance, Good Fortune & Opportunity',
    essence: 'The line of big blessings, philosophical growth, optimism, and opening doors of prosperity.',
    whatItBrings: 'Benefactors appearing out of nowhere, feeling optimistic and expansive, educational growth, generous income streams, and feeling protected.',
    bestFor: 'Wealth creation, launching an entrepreneurial venture, international travel, publishing, and spiritual evolution.'
  },
  {
    planet: 'Mercury Line',
    symbol: '☿',
    color: '#10B981',
    theme: 'Communication, Learning, Business & Intellectual Spark',
    essence: 'Where your mind operates at peak clarity, writing flows easily, and networking thrives.',
    whatItBrings: 'Fast-paced mental energy, stimulating conversations, ease in marketing and writing, curiosity, and lively commerce.',
    bestFor: 'Writing a book, launching podcasts/media, academic studies, trading, and building strong business networks.'
  },
  {
    planet: 'Moon Line',
    symbol: '☽',
    color: '#94A3B8',
    theme: 'Home, Emotional Sanctuary, Intuition & Deep Roots',
    essence: 'Where you feel deeply connected to your emotional core, family instincts, and home sanctuary.',
    whatItBrings: 'Heightened intuition, desire to nest and cook, emotional vulnerability, nurturing bonds, and deep psychic dreams.',
    bestFor: 'Establishing long-term family roots, emotional healing retreats, slowing down, and connecting with the divine feminine.'
  },
  {
    planet: 'Mars Line',
    symbol: '♂',
    color: '#EF4444',
    theme: 'Drive, Passion, Ambition, Physical Energy & Action',
    essence: 'Where adrenaline, willpower, athletic drive, and assertive ambition are ignited.',
    whatItBrings: 'Decisiveness, physical stamina, competitive fire, motivation to build or rebuild, and direct action.',
    bestFor: 'Athletic training, starting urgent new initiatives, asserting personal boundaries, and overcoming lethargy.'
  }
];

export interface AngleInfo {
  angle: string;
  shortCode: string;
  description: string;
  impactArea: string;
}

export const ASTRO_ANGLES: AngleInfo[] = [
  {
    angle: 'Midheaven (MC)',
    shortCode: 'MC Line',
    description: 'The highest point in the sky at your birth. Represents your public life, career reputation, legacy, and vocational achievements.',
    impactArea: 'Career, recognition, public status, and professional visibility.'
  },
  {
    angle: 'Ascendant (AC)',
    shortCode: 'AC Line',
    description: 'The eastern horizon at your birth. Represents your identity, physical appearance, personal vitality, and how others perceive your aura.',
    impactArea: 'Personal empowerment, vitality, health, and fresh beginnings.'
  },
  {
    angle: 'Descendant (DC)',
    shortCode: 'DC Line',
    description: 'The western horizon. Governs 1:1 relationships, business partnerships, romantic connections, and contracts.',
    impactArea: 'Love, partnerships, attracting clients, and marriage.'
  },
  {
    angle: 'Imum Coeli (IC)',
    shortCode: 'IC Line',
    description: 'The bottom of the sky. Represents your psychological foundation, home environment, ancestors, and private sanctuary.',
    impactArea: 'Real estate, family, inner peace, emotional security, and home life.'
  }
];
