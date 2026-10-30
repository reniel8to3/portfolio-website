'use client';

import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 md:py-24 relative border-b-2 border-[#1f2328]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="mb-8">
          <span className="font-handwriting text-2xl font-bold text-[#1f2328] -rotate-1 inline-block select-none">
            learning &amp; degrees
          </span>
          <h2 className="text-3xl font-black text-[#1f2328] tracking-tight uppercase">
            Education
          </h2>
        </div>

        {/* Education Study Card with Washi Tape */}
        <div className="relative bg-white border-2 border-[#1f2328] p-6 sm:p-8 rounded-xl shadow-[5px_5px_0px_0px_#1f2328]">
          {/* Top Left Washi Tape */}
          <div className="absolute -top-3 left-8 w-20 h-6 washi-tape-pink rotate-[-3deg] z-20" />

          {education.map((item) => (
            <div key={item.id} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b-2 border-[#1f2328]/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1f2328]">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-bold text-[#FE5D9F] flex items-center gap-2 mt-1">
                    <span>{item.institution}</span>
                    {item.location && (
                      <>
                        <span className="text-[#1f2328]/40">•</span>
                        <span className="text-[#1f2328]/70 text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5E8F5] border border-[#FE5D9F] text-xs font-mono font-bold text-[#1f2328] rounded-md">
                    <Calendar className="w-3 h-3 text-[#FE5D9F]" />
                    <span>{item.startDate} — {item.endDate}</span>
                  </div>
                  {item.gradeOrGpa && (
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FEF08A] border border-[#EAB308] text-xs font-bold text-[#713F12] rounded-md">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.gradeOrGpa}</span>
                    </div>
                  )}
                </div>
              </div>

              {item.description && (
                <p className="text-sm text-[#1f2328]/80 leading-relaxed font-normal">
                  {item.description}
                </p>
              )}

              {/* Coursework & Honors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {item.coursework && item.coursework.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#1f2328] mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#FE5D9F]" />
                      <span>Coursework</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 bg-[#F5E8F5] border border-[#F4BBD3] text-[#1f2328] font-semibold rounded-md"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.achievements && item.achievements.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#1f2328] mb-3 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                      <span>Honors &amp; Milestones</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {item.achievements.map((achieve, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-medium text-[#1f2328]">
                          <span className="text-[#FE5D9F] mt-0.5 font-bold">•</span>
                          <span>{achieve}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
