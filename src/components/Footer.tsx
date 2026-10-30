'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-4 sm:px-8 border-t-2 border-[#1f2328] bg-white text-[#1f2328] text-xs">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono font-bold">
          <div className="w-6 h-6 rounded-full bg-[#FE5D9F] text-white flex items-center justify-center">
            <Sparkles className="w-3 h-3" />
          </div>
          <span>© {year} {portfolioData.personal.name}. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 font-mono text-[11px] text-zinc-500">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#FE5D9F] fill-[#FE5D9F]" />
            <span>• Deployed on</span>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#1f2328] underline hover:text-[#FE5D9F]"
            >
              Vercel
            </a>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1 px-3 py-1 bg-white hover:bg-[#1f2328] hover:text-white border-2 border-[#1f2328] text-xs font-black uppercase rounded shadow-xs transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
