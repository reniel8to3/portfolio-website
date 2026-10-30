'use client';

import { ArrowUpRight, Sparkles, Database, BarChart2, Activity } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { portfolioData } from '@/data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  const folderColors = [
    {
      tabBg: 'bg-[#3B82F6]',
      tabText: 'text-white',
      cardBg: 'bg-[#18191B]',
      cardText: 'text-white',
      descText: 'text-zinc-300',
      tagBg: 'bg-zinc-800 text-zinc-200 border-zinc-700',
      btnText: 'text-blue-400 hover:text-blue-300',
    },
    {
      tabBg: 'bg-[#FBBF24]',
      tabText: 'text-[#18191B]',
      cardBg: 'bg-[#FBBF24]',
      cardText: 'text-[#18191B]',
      descText: 'text-[#451A03]',
      tagBg: 'bg-[#FEF08A] text-[#713F12] border-[#CA8A04]',
      btnText: 'text-[#18191B] font-bold hover:underline',
    },
    {
      tabBg: 'bg-[#FE5D9F]',
      tabText: 'text-white',
      cardBg: 'bg-white',
      cardText: 'text-[#1f2328]',
      descText: 'text-[#5A2E44]',
      tagBg: 'bg-[#FFF0F7] text-[#FE5D9F] border-[#F5D2E4]',
      btnText: 'text-[#FE5D9F] font-bold hover:underline',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 relative border-b-2 border-[#1f2328]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <span className="font-handwriting text-2xl font-bold text-[#1f2328] -rotate-1 inline-block select-none">
              selected case studies
            </span>
            <h2 className="text-3xl font-black text-[#1f2328] tracking-tight uppercase">
              Big Data &amp; Systems Work
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-[#1f2328]/60 bg-white px-3 py-1 border-2 border-[#1f2328] shadow-xs">
            {projects.length} PROJECTS
          </span>
        </div>

        {/* Stacked Folder Cards (As Seen in Reference Image!) */}
        <div className="space-y-12">
          {projects.slice(0, 3).map((project, idx) => {
            const theme = folderColors[idx % folderColors.length];
            const projectNumber = `PROJECT 0${idx + 1}`;

            return (
              <div key={project.id} className="relative">
                {/* Folder Tab at the Top */}
                <div className="flex items-center">
                  <div
                    className={`inline-flex items-center gap-2 px-5 py-2 text-xs font-black uppercase tracking-wider border-2 border-[#1f2328] border-b-0 rounded-t-lg ${theme.tabBg} ${theme.tabText} shadow-xs z-10`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{projectNumber}</span>
                  </div>
                </div>

                {/* Folder Body Card */}
                <div
                  className={`border-2 border-[#1f2328] p-6 sm:p-8 rounded-b-xl rounded-tr-xl shadow-[6px_6px_0px_0px_#1f2328] ${theme.cardBg} ${theme.cardText} transition-all`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Details */}
                    <div className="md:col-span-6 space-y-4">
                      {/* Category & Status */}
                      <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase opacity-80">
                        <span className="w-2 h-2 rounded-full bg-current" />
                        <span>{project.category} • PIPELINE</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-sm sm:text-base leading-relaxed ${theme.descText}`}>
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2.5 py-0.5 rounded-md font-semibold border ${theme.tagBg}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="pt-4 flex items-center gap-4">
                        <a
                          href={project.liveUrl || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-xs font-black tracking-wider uppercase ${theme.btnText}`}
                        >
                          <span>VIEW CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase opacity-75 hover:opacity-100"
                          >
                            <GithubIcon className="w-4 h-4" />
                            <span>CODE</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Taped Data Mockup Preview */}
                    <div className="md:col-span-6 flex justify-center">
                      <div className="relative w-full max-w-sm bg-white/10 p-3 rounded-lg border border-white/20 shadow-md">
                        {/* Translucent Corner Washi Tapes */}
                        <div className="absolute -top-3 left-6 w-16 h-6 washi-tape rotate-[-4deg] z-20" />
                        <div className="absolute -top-3 right-6 w-16 h-6 washi-tape rotate-[4deg] z-20" />

                        {/* Telemetry / Pipeline Monitor Container */}
                        <div className="w-full aspect-video sm:aspect-4/3 bg-[#111315] rounded-md border border-white/10 p-4 flex flex-col justify-between text-white relative overflow-hidden">
                          {/* Mock UI Header */}
                          <div className="flex items-center justify-between text-[10px] font-mono opacity-80 border-b border-white/10 pb-2">
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span>CLUSTER: ACTIVE (8 NODES)</span>
                            </span>
                            <span className="text-cyan-400">THROUGHPUT: 12.4K MSG/S</span>
                          </div>

                          {/* Mock Visual Content */}
                          <div className="my-auto text-center py-3">
                            <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center text-[#FE5D9F] mb-2 border border-white/20">
                              <Database className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-mono tracking-wider font-bold text-white/90">
                              [{project.title}]
                            </span>
                            <div className="text-[11px] font-mono text-zinc-400 mt-1 flex items-center justify-center gap-1">
                              <Activity className="w-3 h-3 text-emerald-400" />
                              <span>80ms P99 Distributed Latency</span>
                            </div>
                          </div>

                          {/* Mock Footer Balance Bar */}
                          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                            <span className="text-zinc-400">Format: Parquet Lake</span>
                            <span className="font-bold text-emerald-400">Zero Loss (100%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
