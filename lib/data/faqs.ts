export interface FAQItem {
  question: string;
  answer: string;
  category?: 'readings' | 'astrocartography' | 'booking' | 'general';
}

export const FAQS: FAQItem[] = [
  {
    question: 'What is Astrocartography and how does it work?',
    answer: 'Astrocartography is the astrology of location. When you were born, the planets occupied specific positions in the sky. Astrocartography maps your unique birth chart across the globe, drawing lines where planets were rising (Ascendant), culminating (Midheaven), setting (Descendant), or at the nadir (Imum Coeli). Living, working, or traveling near these planetary lines activates their distinct archetypal energies in your life.',
    category: 'astrocartography'
  },
  {
    question: 'Do I need my exact birth time for an accurate reading?',
    answer: 'Yes, an exact birth time (from your birth certificate or official record) is essential for precision in Astrocartography. Because the Earth rotates 1 degree every 4 minutes, an accurate birth time ensures planetary lines are placed within exact geographic mileage of cities you are considering. If you only know an approximate time, please note this during booking, and Julie can discuss rectifying or working within broader planetary themes.',
    category: 'readings'
  },
  {
    question: 'What is the difference between the 60-minute and 120-minute readings?',
    answer: 'The 60-Minute Reading ($333) is ideal if you are deciding between 2 to 4 specific cities or regions, or need clear answers on a specific upcoming move or transition. The 120-Minute Deep Dive ($555) is designed for digital nomads, international relocators, global business expansion, or anyone who wants a comprehensive worldwide scan, latitude parans (crossing lines), and extended intuitive strategy.',
    category: 'readings'
  },
  {
    question: 'Where do readings take place and do I receive a recording?',
    answer: 'All private readings take place live online via Zoom. You will receive a private video link prior to your scheduled time. After our call, you receive a full HD video recording, a downloadable audio file, and a custom personalized written summary report of your planetary lines and key takeaways that you can keep for life.',
    category: 'readings'
  },
  {
    question: 'Can I book a reading if I don’t plan to move immediately?',
    answer: 'Absolutely! Many clients book readings to understand past locations where they’ve lived or traveled (which brings huge validation and emotional healing), to choose vacation or retreat destinations, to source clients remotely along their business lines, or simply to plan for future possibilities 2–5 years down the road.',
    category: 'astrocartography'
  },
  {
    question: 'What if I am feeling stuck and not sure which service I need?',
    answer: 'If you are at a crossroads, we recommend using the interactive "Where Are You Right Now?" guide on this site or scheduling a 60-Minute Reading. In the session, Julie seamlessly blends Astrocartography with psychic intuitive guidance to address whatever is in your highest good.',
    category: 'general'
  },
  {
    question: 'What happens after I complete my booking?',
    answer: 'Immediately upon booking, you will receive a confirmation email with a calendar invite, Zoom link, and a brief intake questionnaire to submit your birth details (Date, Exact Time, and City/Country of birth) along with the top questions or destination cities you wish to focus on.',
    category: 'booking'
  },
  {
    question: 'Can I book a follow-up session later on?',
    answer: 'Yes! Once you have completed a 60 or 120-minute reading, you have access to the Follow-Up Integration Session ($222) whenever you want to evaluate newly emerged destinations, check timing transits, or receive integration coaching as you settle into your new home.',
    category: 'readings'
  }
];
