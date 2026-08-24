'use client';

import React, { useState, useRef } from 'react';
import { MapPin, Compass, Info, Check, X, ArrowRight, Eye } from 'lucide-react';

interface PlanetaryLineDef {
  id: string;
  name: string;
  planet: string;
  symbol: string;
  angle: string;
  color: string;
  strokeDash?: string;
  pathD: string;
  tooltipX: number; // percentage
  tooltipY: number; // percentage
  archetype: string;
  shortDescription: string;
  bestFor: string;
  associatedCityId: string;
  associatedCityName: string;
}

interface CityPoint {
  id: string;
  name: string;
  country: string;
  x: number; // percentage on SVG
  y: number; // percentage on SVG
  lineId: string;
  primaryLine: string;
  lineColor: string;
  archetype: string;
  vibe: string;
  lifeImpact: string;
}

const PLANETARY_LINES_MAP: PlanetaryLineDef[] = [
  {
    id: 'sun',
    name: 'Sun Ascendant (AC)',
    planet: 'Sun',
    symbol: '☉',
    angle: 'Ascendant (AC)',
    color: '#D4AF37',
    strokeDash: '8 4',
    pathD: 'M 230 0 C 230 160, 240 340, 230 500',
    tooltipX: 23,
    tooltipY: 32,
    archetype: 'Vitality, Authentic Radiance & Leadership',
    shortDescription: 'Magnifies personal charisma, confidence, physical energy, and creative visibility.',
    bestFor: 'Rebuilding physical vitality, stepping into the spotlight, and owning your true self.',
    associatedCityId: 'santa-fe',
    associatedCityName: 'Santa Fe, USA'
  },
  {
    id: 'venus',
    name: 'Venus Midheaven (MC)',
    planet: 'Venus',
    symbol: '♀',
    angle: 'Midheaven (MC)',
    color: '#E07A5F',
    pathD: 'M 465 0 C 470 170, 460 350, 465 500',
    tooltipX: 46.5,
    tooltipY: 26,
    archetype: 'Public Beauty, Magnetic Charm & Creative Ease',
    shortDescription: 'Brings aesthetic resonance, effortless social magnetism, artistic recognition, and harmony.',
    bestFor: 'Creative careers, public branding, romantic ease, and building supportive sisterhood.',
    associatedCityId: 'lisbon',
    associatedCityName: 'Lisbon, Portugal'
  },
  {
    id: 'mercury',
    name: 'Mercury Midheaven (MC)',
    planet: 'Mercury',
    symbol: '☿',
    angle: 'Midheaven (MC)',
    color: '#10B981',
    strokeDash: '5 3',
    pathD: 'M 495 0 C 505 160, 490 340, 495 500',
    tooltipX: 49.5,
    tooltipY: 20,
    archetype: 'Commerce, Intellectual Spark & Media Flow',
    shortDescription: 'Sharpens mental agility, simplifies book publishing, podcasts, speaking, and networking.',
    bestFor: 'Authors, content creators, digital commerce, negotiations, and fast-paced learning.',
    associatedCityId: 'london',
    associatedCityName: 'London, UK'
  },
  {
    id: 'moon',
    name: 'Moon Ascendant (AC)',
    planet: 'Moon',
    symbol: '☽',
    angle: 'Ascendant (AC)',
    color: '#8E9EB8',
    strokeDash: '3 3',
    pathD: 'M 275 0 C 285 180, 265 360, 275 500',
    tooltipX: 27.5,
    tooltipY: 48,
    archetype: 'Intuitive Healing, Somatic Rest & Nourishment',
    shortDescription: 'Deepens emotional awareness, feminine intuition, restorative sleep, and sensory grounding.',
    bestFor: 'Nervous system regulation, spiritual retreats, emotional release, and deep self-care.',
    associatedCityId: 'costa-rica',
    associatedCityName: 'Costa Rica'
  },
  {
    id: 'jupiter',
    name: 'Jupiter Imum Coeli (IC)',
    planet: 'Jupiter',
    symbol: '♃',
    angle: 'Imum Coeli (IC)',
    color: '#3B82F6',
    strokeDash: '6 3',
    pathD: 'M 770 0 C 780 190, 760 380, 770 500',
    tooltipX: 77,
    tooltipY: 54,
    archetype: 'Soul Sanctuary, Spiritual Expansion & Inner Abundance',
    shortDescription: 'Fosters profound inner peace, sanctuary feelings, philosophical wisdom, and serendipity.',
    bestFor: 'Writing retreats, establishing a soul sanctuary, deep healing, and hosting retreats.',
    associatedCityId: 'bali',
    associatedCityName: 'Bali, Indonesia'
  }
];

const DEMO_CITIES: CityPoint[] = [
  {
    id: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    x: 46.5,
    y: 37,
    lineId: 'venus',
    primaryLine: 'Venus Midheaven (MC)',
    lineColor: '#E07A5F',
    archetype: 'Public Beauty, Artistic Resonance & Magnetic Community',
    vibe: 'Warm, relaxed, highly creative, easy social magnetism',
    lifeImpact: 'A fertile environment for artists, writers, and independent consultants to establish visible, aesthetically pleasing businesses and connect with heart-centered community.'
  },
  {
    id: 'santa-fe',
    name: 'Santa Fe',
    country: 'USA',
    x: 23,
    y: 39,
    lineId: 'sun',
    primaryLine: 'Sun Ascendant (AC)',
    lineColor: '#D4AF37',
    archetype: 'Personal Vitality, Radiance & Authentic Self-Expression',
    vibe: 'High-energy, empowering, grounding in spiritual truth',
    lifeImpact: 'Ignites physical vitality and self-confidence. Excellent for stepping out of hiding, rebuilding health, and embodying your unique creative genius.'
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    x: 77,
    y: 63,
    lineId: 'jupiter',
    primaryLine: 'Jupiter Imum Coeli (IC)',
    lineColor: '#3B82F6',
    archetype: 'Spiritual Sanctuary, Inner Abundance & Soul Roots',
    vibe: 'Expansive peace, spiritual rejuvenation, deep rest',
    lifeImpact: 'Creates a sanctuary feel where your nervous system exhales. Ideal for writing a book, hosting retreats, or healing after chronic burnout.'
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    x: 48,
    y: 30,
    lineId: 'mercury',
    primaryLine: 'Mercury Midheaven (MC)',
    lineColor: '#10B981',
    archetype: 'Commerce, Media Visibility & Intellectual Sharpness',
    vibe: 'Fast-paced, intellectually invigorating, communicative',
    lifeImpact: 'Elevates your publishing, media appearances, podcasts, and commerce. Networking is fluid and conversations spark high-level opportunities.'
  },
  {
    id: 'costa-rica',
    name: 'Costa Rica',
    country: 'Central America',
    x: 27.5,
    y: 52,
    lineId: 'moon',
    primaryLine: 'Moon Ascendant (AC)',
    lineColor: '#8E9EB8',
    archetype: 'Intuitive Reconnection, Somatic Healing & Nourishment',
    vibe: 'Nurturing, lush, deeply connected to natural rhythms',
    lifeImpact: 'Assists in tuning in to intuition and releasing past emotional weight. Highly supportive for self-care retreats and deep restorative sleep.'
  }
];

interface InteractiveMapPreviewProps {
  onCitySelect?: (city: CityPoint) => void;
}

export default function InteractiveMapPreview({ onCitySelect }: InteractiveMapPreviewProps) {
  const [activeCity, setActiveCity] = useState<CityPoint>(DEMO_CITIES[0]);
  const [hoveredLineId, setHoveredLineId] = useState<string | null>(null);
  const [selectedLineId, setSelectedLineId] = useState<string | null>('venus');
  const [tooltipHoverLocked, setTooltipHoverLocked] = useState(false);

  // Active line is either hovered line or selected line
  const activeLineId = hoveredLineId || selectedLineId;
  const activeLineDef = PLANETARY_LINES_MAP.find((l) => l.id === activeLineId);

  const handleSelectCity = (city: CityPoint) => {
    setActiveCity(city);
    setSelectedLineId(city.lineId);
    if (onCitySelect) onCitySelect(city);
  };

  const handleLineClick = (lineId: string) => {
    setSelectedLineId(lineId);
    setTooltipHoverLocked(true);
    const lineDef = PLANETARY_LINES_MAP.find((l) => l.id === lineId);
    if (lineDef) {
      const matchedCity = DEMO_CITIES.find((c) => c.id === lineDef.associatedCityId);
      if (matchedCity) {
        setActiveCity(matchedCity);
        if (onCitySelect) onCitySelect(matchedCity);
      }
    }
  };

  return (
    <div className="bg-[#0B1325] text-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#C59E4E]/40 shadow-2xl relative overflow-hidden">
      
      {/* Map Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            Interactive Astrocartography Exploration
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#FAF8F5] mt-0.5">
            How Planetary Lines Map Across the World
          </h3>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] text-[#D4AF37] font-medium self-start sm:self-auto">
          <Compass className="w-3 h-3 text-[#D4AF37]" />
          <span>Hover or click any planetary line or city</span>
        </div>
      </div>

      {/* Planetary Line Filters / Quick Legend Buttons */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8E9EB8]">
            Major Planetary Lines in this view:
          </span>
          {activeLineDef && (
            <span className="text-[11px] text-[#D4AF37] hidden sm:inline-flex items-center gap-1">
              <span>Active:</span> <strong>{activeLineDef.name}</strong>
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {PLANETARY_LINES_MAP.map((line) => {
            const isActive = activeLineId === line.id;
            return (
              <button
                key={line.id}
                type="button"
                onMouseEnter={() => setHoveredLineId(line.id)}
                onMouseLeave={() => setHoveredLineId(null)}
                onClick={() => handleLineClick(line.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 border cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#0B1325] border-white shadow-md scale-105'
                    : 'bg-white/10 text-[#FAF8F5] border-white/15 hover:bg-white/20'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full flex items-center justify-center text-[9px] font-bold"
                  style={{ backgroundColor: line.color }}
                />
                <span>{line.symbol} {line.planet}</span>
                <span className="text-[10px] opacity-75 font-normal">({line.angle.split(' ')[0]})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Map Stage */}
      <div className="relative w-full h-72 sm:h-88 md:h-[420px] bg-[#0F172A] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center select-none">
        
        {/* Stylized World Continents (SVG paths) & Planetary Lines */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            </pattern>
            {/* Soft Glow Filter for active planetary line */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect width="1000" height="500" fill="url(#grid)" />

          {/* Simplified Continental Outlines */}
          <g opacity="0.35">
            {/* North America */}
            <path
              d="M 120 100 Q 180 80 280 120 Q 320 200 260 250 Q 230 300 180 280 Q 130 220 120 100 Z"
              fill="#1E293B"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* South America */}
            <path
              d="M 270 280 Q 340 300 320 420 Q 280 470 260 410 Q 250 340 270 280 Z"
              fill="#1E293B"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* Europe */}
            <path
              d="M 460 120 Q 520 100 560 140 Q 520 200 470 190 Q 440 160 460 120 Z"
              fill="#1E293B"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* Africa */}
            <path
              d="M 470 200 Q 560 210 580 320 Q 530 420 480 380 Q 450 280 470 200 Z"
              fill="#1E293B"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* Asia */}
            <path
              d="M 570 110 Q 750 90 850 180 Q 820 280 720 270 Q 620 220 570 110 Z"
              fill="#1E293B"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* Australia */}
            <path
              d="M 780 340 Q 880 330 870 410 Q 800 440 760 380 Z"
              fill="#1E293B"
              stroke="#334155"
              strokeWidth="1"
            />
          </g>

          {/* Planetary Astrocartography Lines */}
          {PLANETARY_LINES_MAP.map((line) => {
            const isActive = activeLineId === line.id;
            const isAnyActive = !!activeLineId;

            return (
              <g key={line.id} className="cursor-pointer">
                {/* Wide invisible hitbox for effortless hover and click */}
                <path
                  d={line.pathD}
                  fill="none"
                  stroke="transparent"
                  strokeWidth="28"
                  onMouseEnter={() => setHoveredLineId(line.id)}
                  onMouseLeave={() => setHoveredLineId(null)}
                  onClick={() => handleLineClick(line.id)}
                />

                {/* Visible Glow effect when line is highlighted */}
                {isActive && (
                  <path
                    d={line.pathD}
                    fill="none"
                    stroke={line.color}
                    strokeWidth="8"
                    opacity="0.35"
                    filter="url(#glow)"
                  />
                )}

                {/* Main Rendered Planetary Stroke */}
                <path
                  d={line.pathD}
                  fill="none"
                  stroke={line.color}
                  strokeWidth={isActive ? '3.5' : '1.75'}
                  strokeDasharray={line.strokeDash}
                  opacity={isActive ? 1 : isAnyActive ? 0.35 : 0.8}
                  className="transition-all duration-200"
                  onMouseEnter={() => setHoveredLineId(line.id)}
                  onMouseLeave={() => setHoveredLineId(null)}
                  onClick={() => handleLineClick(line.id)}
                />
              </g>
            );
          })}
        </svg>

        {/* Floating Tooltip for the Active Planetary Line */}
        {activeLineDef && (
          <div
            style={{
              left: `${activeLineDef.tooltipX}%`,
              top: `${activeLineDef.tooltipY}%`,
              transform: `translate(${activeLineDef.tooltipX > 60 ? '-100%' : '12px'}, -50%)`
            }}
            className="absolute z-20 pointer-events-auto max-w-[260px] sm:max-w-[280px] bg-[#0B1325]/95 backdrop-blur-md border border-[#D4AF37]/60 rounded-xl p-3.5 shadow-2xl animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-2 mb-2">
              <div className="flex items-center gap-2">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs"
                  style={{ backgroundColor: activeLineDef.color, color: '#0B1325' }}
                >
                  {activeLineDef.symbol}
                </span>
                <div>
                  <h5 className="font-serif text-xs font-bold text-white leading-tight">
                    {activeLineDef.name}
                  </h5>
                  <span className="text-[10px] text-[#D4AF37] font-medium">
                    {activeLineDef.archetype}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-white/90 leading-relaxed mb-2.5">
              {activeLineDef.shortDescription}
            </p>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
              <span className="text-[#8E9EB8]">Passes near:</span>
              <button
                type="button"
                onClick={() => {
                  const c = DEMO_CITIES.find((ci) => ci.id === activeLineDef.associatedCityId);
                  if (c) handleSelectCity(c);
                }}
                className="font-bold text-[#D4AF37] hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                <span>{activeLineDef.associatedCityName}</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        )}

        {/* City Location Hotspot Markers */}
        {DEMO_CITIES.map((city) => {
          const isSelected = activeCity.id === city.id;
          const isCityLineActive = activeLineId === city.lineId;

          return (
            <div
              key={city.id}
              style={{ left: `${city.x}%`, top: `${city.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
              onClick={() => handleSelectCity(city)}
              onMouseEnter={() => setHoveredLineId(city.lineId)}
              onMouseLeave={() => setHoveredLineId(null)}
            >
              <div className="relative flex items-center justify-center">
                {(isSelected || isCityLineActive) && (
                  <span
                    className="absolute w-7 h-7 rounded-full animate-ping opacity-60"
                    style={{ backgroundColor: city.lineColor }}
                  />
                )}
                <div
                  className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-transform ${
                    isSelected || isCityLineActive ? 'scale-125' : 'group-hover:scale-110'
                  }`}
                  style={{ backgroundColor: city.lineColor }}
                />
              </div>
              <span
                className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap font-bold px-2 py-0.5 rounded-md shadow-md transition-colors ${
                  isSelected || isCityLineActive
                    ? 'bg-[#FAF8F5] text-[#0B1325] ring-2 ring-[#C59E4E]'
                    : 'bg-black/80 text-white/90 group-hover:bg-black'
                }`}
              >
                {city.name}
              </span>
            </div>
          );
        })}

        {/* Quick Instructions / Help Pill */}
        <div className="absolute bottom-3 left-3 bg-[#0B1325]/80 backdrop-blur-xs border border-white/10 px-2.5 py-1 rounded-md text-[10px] text-white/70 hidden sm:flex items-center gap-1.5 pointer-events-none">
          <Info className="w-3 h-3 text-[#D4AF37]" />
          <span>Click any line or city marker to lock insight</span>
        </div>
      </div>

      {/* Selected City & Active Planetary Line Insight Panel */}
      <div className="mt-6 bg-[#111A30] border border-[#C59E4E]/40 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-4 space-y-1.5 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-4">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: activeCity.lineColor }}
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              {activeCity.country}
            </span>
          </div>
          <h4 className="font-serif text-2xl font-bold text-white">
            {activeCity.name}
          </h4>
          <p className="text-xs font-medium text-[#8E9EB8]">
            Line: <span className="text-white font-semibold">{activeCity.primaryLine}</span>
          </p>
        </div>

        <div className="md:col-span-8 space-y-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
              Core Archetype & Feeling:
            </span>
            <p className="text-xs text-white/90 font-medium mt-0.5">
              {activeCity.archetype} ({activeCity.vibe})
            </p>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E9EB8]">
              How it Expresses in Real Life:
            </span>
            <p className="text-xs text-white/80 leading-relaxed mt-0.5">
              {activeCity.lifeImpact}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

