import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#E8DFC8] shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-[#0B1325] text-[#C59E4E] flex items-center justify-center mx-auto shadow-md">
            <Compass className="w-8 h-8 animate-spin-slow" />
          </div>
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wider text-[#C59E4E] uppercase">404 — Page Not Found</span>
            <h1 className="text-3xl font-serif text-[#0B1325]">Cosmic Detour</h1>
            <p className="text-[#4A5568] text-sm leading-relaxed">
              The page or location you are looking for seems to have drifted into another constellation.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0B1325] text-[#FAF8F5] text-sm font-medium hover:bg-[#1A243F] transition-all shadow-md"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
            <Link
              href="/readings"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] text-[#0B1325] border border-[#C59E4E] text-sm font-medium hover:bg-[#F2EBD9] transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Explore Readings
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
