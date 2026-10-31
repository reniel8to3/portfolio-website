'use client';

import { Sparkles, Database, Cpu, GitBranch, BarChart3, Server, Laptop } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const renderBadgeIcon = (iconType?: string) => {
    switch (iconType) {
      case 'database':
        return <Database className="w-4 h-4 text-[#78350F]" />;
      case 'cpu':
        return <Cpu className="w-4 h-4" />;
      case 'branch':
        return <GitBranch className="w-4 h-4" />;
      case 'chart':
        return <BarChart3 className="w-4 h-4" />;
      default:
        return <Database className="w-4 h-4" />;
    }
  };

  const badgeStyles = [
    { bg: 'bg-[#FBBF24]', text: 'text-[#1f2328]', rotate: 'rotate-[-1deg]' },
    { bg: 'bg-[#10B981]', text: 'text-white', rotate: 'rotate-[1deg]' },
    { bg: 'bg-[#FE5D9F]', text: 'text-white', rotate: 'rotate-[-1.5deg]' },
    { bg: 'bg-[#3B82F6]', text: 'text-white', rotate: 'rotate-[2deg]' },
  ];

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
            {personal.about.subheader || "[what's up]"}
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
                <Server className="w-8 h-8 mb-1 text-[#FE5D9F]" />
                <span className="text-[10px] font-mono uppercase font-bold text-[#1f2328]/70">
                  {personal.about.photoLeftCaption || "[PHOTO 1 CAPTION]"}
                </span>
              </div>
              <div className="text-center mt-2 font-handwriting text-xs text-[#1f2328]/70">
                {personal.about.photoLeftDate || "[PHOTO 1 DATE/SUBTITLE]"}
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
                <Database className="w-5 h-5" />
              </span>
              <span className="font-handwriting text-lg text-[#733E57]">
                {personal.about.paragraphs[1]}
              </span>
              <span className="inline-flex items-center text-[#F59E0B]">
                <Cpu className="w-5 h-5" />
              </span>
            </div>
            {personal.about.paragraphs[2] && (
              <p className="font-handwriting text-base text-[#1f2328]/80 mt-2">
                {personal.about.paragraphs[2]}
              </p>
            )}
          </div>

          {/* Right Taped Polaroid */}
          <div className="md:col-span-3 flex justify-center">
            <div className="relative w-44 bg-white p-2.5 pb-6 border-2 border-[#1f2328] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] rotate-[3deg] hover:rotate-0 transition-transform">
              {/* Top Washi Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 washi-tape-yellow rotate-[-3deg] z-20" />

              {/* Photo Area */}
              <div className="w-full aspect-square bg-gradient-to-br from-[#FEF08A] to-[#BAE6FD] border border-[#1f2328]/20 flex flex-col items-center justify-center text-[#733E57] p-2 text-center">
                <Laptop className="w-8 h-8 mb-1 text-[#0284C7]" />
                <span className="text-[10px] font-mono uppercase font-bold text-[#1f2328]/70">
                  {personal.about.photoRightCaption || "[PHOTO 2 CAPTION]"}
                </span>
              </div>
              <div className="text-center mt-2 font-handwriting text-xs text-[#1f2328]/70">
                {personal.about.photoRightDate || "[PHOTO 2 DATE/SUBTITLE]"}
              </div>
            </div>
          </div>
        </div>

        {/* Scalloped Postage Stamp Skill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
          {(personal.stampBadges || []).map((badge, idx) => {
            const style = badgeStyles[idx % badgeStyles.length];
            return (
              <div key={idx} className="flex items-center gap-2">
                <div
                  className={`px-4 py-2 ${style.bg} border-2 border-[#1f2328] ${style.text} text-xs font-black uppercase tracking-wider rounded-lg shadow-[2px_2px_0px_0px_#1f2328] flex items-center gap-2 ${style.rotate}`}
                >
                  {renderBadgeIcon(badge.iconType)}
                  <span>{badge.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
