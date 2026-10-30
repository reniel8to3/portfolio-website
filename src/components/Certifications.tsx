'use client';

import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-16 md:py-24 relative border-b-2 border-[#1f2328]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="mb-8">
          <span className="font-handwriting text-2xl font-bold text-[#1f2328] -rotate-1 inline-block select-none">
            credentials &amp; badges
          </span>
          <h2 className="text-3xl font-black text-[#1f2328] tracking-tight uppercase">
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="relative bg-white border-2 border-[#1f2328] p-5 rounded-lg shadow-[4px_4px_0px_0px_#1f2328] flex flex-col justify-between hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              {/* Corner Stamp Pin */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-8 h-8 rounded-md bg-[#F5E8F5] border border-[#FE5D9F] flex items-center justify-center text-[#FE5D9F]">
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#1f2328]/70">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.issueDate}</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-black text-[#1f2328] mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold text-[#FE5D9F] mb-3">
                  {cert.issuer}
                </p>

                {cert.credentialId && (
                  <div className="text-[10px] font-mono bg-zinc-100 border border-zinc-300 px-2 py-0.5 rounded text-zinc-700 mb-3 inline-block font-semibold">
                    ID: {cert.credentialId}
                  </div>
                )}

                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#F5E8F5] border border-[#F4BBD3] font-medium text-[#1f2328]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-3 border-t border-[#1f2328]/10 mt-auto">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 bg-white hover:bg-[#1f2328] hover:text-white text-[#1f2328] text-xs font-bold border border-[#1f2328] rounded transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
