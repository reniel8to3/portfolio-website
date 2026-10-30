'use client';

import { Sparkles, Palette, MousePointerClick, Puzzle, Layers, Camera, Laptop } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-16 md:py-24 relative border-b-2 border-[#1f2328]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Handwritten "about me!" Label */}
        <div className="mb-4">
          <span className="font-handwriting text-2xl sm:text-3xl font-bold text-[#1f2328] -rotate-3 inline-block select-none">
            about me!
          </span>
        </div>

        {/* Center Section: "what's up" Framed Box */}
        <div className="flex justify-center mb-8">
          <div className="px-4 py-1 border-2 border-[#1f2328] bg-white text-xs font-black uppercase tracking-widest text-[#1f2328] shadow-[2px_2px_0px_0px_#1f2328]">
            what&apos;s up
          </div>
        </div>

        {/* Main Content Layout with 2 Taped Polaroids and Center Bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Taped Polaroid */}
          <div className="md:col-span-3 flex justify-center">
            <div className="relative w-44 bg-white p-2.5 pb-6 border-2 border-[#1f2328] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] rotate-[-4deg] hover:rotate-0 transition-transform">
              {/* Top Washi Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 washi-tape-blue rotate-[2deg] z-20" />

              {/* Photo Area */}
              <div className="w-full aspect-square bg-gradient-to-br from-[#F5D2E4] to-[#F5E8F5] border border-[#1f2328]/20 flex flex-col items-center justify-center text-[#733E57] p-2 text-center">
                <Camera className="w-8 h-8 mb-1 text-[#FE5D9F]" />
                <span className="text-[10px] font-mono uppercase font-bold text-[#1f2328]/60">[Photo 01]</span>
              </div>
              <div className="text-center mt-2 font-handwriting text-xs text-[#1f2328]/70">
                2026
              </div>
            </div>
          </div>

          {/* Center Handwritten Bio */}
          <div className="md:col-span-6 text-center px-2">
            <p className="font-handwriting text-xl sm:text-2xl text-[#1f2328] leading-relaxed font-semibold">
              {personal.about.paragraphs[0]}
            </p>
            <div className="my-3 flex items-center justify-center gap-2">
              <span className="inline-flex items-center text-[#FE5D9F]">
                <Sparkles className="w-5 h-5 fill-[#FE5D9F]/20" />
              </span>
              <span className="font-handwriting text-lg text-[#733E57]">
                {personal.about.paragraphs[1]}
              </span>
              <span className="inline-flex items-center text-[#F59E0B]">
                <Palette className="w-5 h-5" />
              </span>
            </div>
          </div>

          {/* Right Taped Polaroid */}
          <div className="md:col-span-3 flex justify-center">
            <div className="relative w-44 bg-white p-2.5 pb-6 border-2 border-[#1f2328] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] rotate-[3deg] hover:rotate-0 transition-transform">
              {/* Top Washi Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 washi-tape-yellow rotate-[-3deg] z-20" />

              {/* Photo Area */}
              <div className="w-full aspect-square bg-gradient-to-br from-[#FEF08A] to-[#BAE6FD] border border-[#1f2328]/20 flex flex-col items-center justify-center text-[#733E57] p-2 text-center">
                <Laptop className="w-8 h-8 mb-1 text-[#0284C7]" />
                <span className="text-[10px] font-mono uppercase font-bold text-[#1f2328]/60">[Workspace]</span>
              </div>
              <div className="text-center mt-2 font-handwriting text-xs text-[#1f2328]/70">
                my workspace
              </div>
            </div>
          </div>
        </div>

        {/* Scalloped Postage Stamp Skill Badges (Exactly from the Reference Image!) */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
          {/* Stamp 1: Interaction Design */}
          <div className="flex items-center gap-2">
            <div className="px-4 py-2 bg-[#FBBF24] border-2 border-[#1f2328] text-[#1f2328] text-xs font-black uppercase tracking-wider rounded-lg shadow-[2px_2px_0px_0px_#1f2328] flex items-center gap-2 rotate-[-1deg]">
              <MousePointerClick className="w-4 h-4 text-[#78350F]" />
              <span>Interaction Design</span>
            </div>
          </div>

          {/* Stamp 2: Prototyping */}
          <div className="flex items-center gap-2">
            <div className="px-4 py-2 bg-[#10B981] border-2 border-[#1f2328] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-[2px_2px_0px_0px_#1f2328] flex items-center gap-2 rotate-[1deg]">
              <Palette className="w-4 h-4" />
              <span>Prototyping</span>
            </div>
          </div>

          {/* Stamp 3: User Research */}
          <div className="flex items-center gap-2">
            <div className="px-4 py-2 bg-[#FE5D9F] border-2 border-[#1f2328] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-[2px_2px_0px_0px_#1f2328] flex items-center gap-2 rotate-[-1.5deg]">
              <Puzzle className="w-4 h-4" />
              <span>User Research</span>
            </div>
          </div>

          {/* Stamp 4: Motion Design */}
          <div className="flex items-center gap-2">
            <div className="px-4 py-2 bg-[#3B82F6] border-2 border-[#1f2328] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-[2px_2px_0px_0px_#1f2328] flex items-center gap-2 rotate-[2deg]">
              <Layers className="w-4 h-4" />
              <span>Motion Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
