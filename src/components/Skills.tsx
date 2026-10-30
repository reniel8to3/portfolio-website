'use client';

import { Sparkles, Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const getLevelBadgeClass = (level?: string) => {
    switch (level) {
      case 'Expert':
        return 'text-[#FE5D9F] bg-[#F5E8F5] border-[#F4BBD3] font-bold';
      case 'Advanced':
        return 'text-[#F686BD] bg-[#FFF0F7] border-[#F5D2E4] font-semibold';
      case 'Intermediate':
        return 'text-[#733E57] bg-[#F5E8F5] border-[#F5D2E4] font-medium';
      default:
        return 'text-[#733E57] bg-white border-[#F5D2E4]';
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5E8F5] border border-[#F4BBD3] text-xs font-bold text-[#FE5D9F] mb-3 shadow-xs">
            <span>🪄</span>
            <span>My Creative Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#442233]">
            Skills &amp; Technologies
          </h2>
          <p className="text-[#733E57] text-sm sm:text-base mt-2 max-w-xl">
            The magical tools, frameworks, and design principles I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-7 rounded-3xl bg-white/90 border border-[#F5D2E4] shadow-sm shadow-[#F5D2E4]/40 hover:border-[#F686BD] hover:shadow-md hover:shadow-[#F4BBD3]/30 transition-all duration-300"
            >
              <h3 className="text-base font-extrabold text-[#442233] mb-4 pb-3 border-b border-[#F5E8F5] flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="text-[#FE5D9F]">🌸</span>
                  <span>{category.title}</span>
                </span>
                <span className="text-xs text-[#FE5D9F] font-semibold bg-[#F5E8F5] px-2.5 py-0.5 rounded-full">
                  {category.skills.length} items
                </span>
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF8FA] border border-[#F5D2E4] text-xs font-semibold text-[#442233] hover:border-[#F686BD] hover:bg-white hover:scale-105 transition-all group shadow-2xs"
                  >
                    <Star className="w-3 h-3 text-[#FE5D9F] group-hover:rotate-45 transition-transform fill-[#FE5D9F]/20" />
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full border ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
