'use client';

import { Database, Cpu, Sparkles, LineChart, User, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b-2 border-[#1f2328]/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Top Annotation: "my name is" */}
        <div className="flex flex-col items-center justify-center mb-6">
          <span className="font-handwriting text-2xl sm:text-3xl text-[#1f2328] font-bold tracking-wide -rotate-2 select-none">
            my name is
          </span>
          <div className="w-16 h-0.5 bg-[#1f2328]/60 mt-0.5 rounded-full" />
          <div className="w-10 h-0.5 bg-[#1f2328]/40 mt-0.5 rounded-full" />
        </div>

        {/* Center Name Box & Tape Stickers */}
        <div className="relative max-w-xl mx-auto mb-16 pt-6 pb-8 px-4">
          {/* Top Left Washi Tape: "SCALABLE PIPELINES" */}
          <div className="absolute -top-3 left-4 sm:left-10 z-20 rotate-[-4deg]">
            <div className="px-3.5 py-1 bg-[#D8F3DC] border border-[#74C69D] text-[#1B4332] text-[11px] font-black uppercase tracking-wider rounded-md shadow-xs flex items-center gap-1.5">
              <Database className="w-3 h-3 text-[#2D6A4F]" />
              <span>SCALABLE PIPELINES</span>
            </div>
          </div>

          {/* Top Right Washi Tape: "SWEAT THE LATENCY" */}
          <div className="absolute -top-3 right-4 sm:right-10 z-20 rotate-[3deg]">
            <div className="px-3.5 py-1 bg-[#FEF08A] border border-[#FACC15] text-[#713F12] text-[11px] font-black uppercase tracking-wider rounded-md shadow-xs flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-[#854D0E]" />
              <span>SWEAT THE LATENCY</span>
            </div>
          </div>

          {/* Main Name Box with Hand-Drawn Pink Frame */}
          <div className="relative z-10 bg-white border-2 border-[#1f2328] p-6 sm:p-8 text-center shadow-[4px_4px_0px_0px_#1f2328]">
            {/* Sketch Outline Overlay */}
            <div className="absolute inset-1 border-2 border-[#FE5D9F] pointer-events-none rounded-xs" />

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-widest text-[#1f2328] uppercase select-all font-mono">
              {personal.name}
            </h1>
          </div>

          {/* Bottom Left Sticky Label with Arrow: "Computer Engineering Grad" */}
          <div className="absolute -bottom-5 left-1 sm:left-6 z-20 flex items-center gap-1.5 rotate-[-2deg]">
            <div className="px-3 py-1 bg-[#FED7AA] border border-[#FB923C] text-[#7C2D12] text-xs font-bold rounded-sm shadow-xs font-handwriting text-base">
              Computer Engineering Grad
            </div>
            <span className="font-handwriting text-lg text-[#1f2328] hidden sm:inline-block">↗</span>
          </div>

          {/* Bottom Right Sticky Label with Arrow: "Big Data Analytics Spec." */}
          <div className="absolute -bottom-5 right-1 sm:right-6 z-20 flex items-center gap-1.5 rotate-[2deg]">
            <span className="font-handwriting text-lg text-[#1f2328] hidden sm:inline-block">↖</span>
            <div className="px-3 py-1 bg-[#BAE6FD] border border-[#38BDF8] text-[#0C4A6E] text-xs font-bold rounded-sm shadow-xs font-handwriting text-base">
              Big Data Analytics Spec.
            </div>
          </div>

          {/* Bottom Center Status Pill */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-white border border-[#1f2328] rounded-full text-[10px] font-bold uppercase tracking-wider text-[#1f2328] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
              <span>{personal.about.availability}</span>
            </div>
          </div>

          {/* Floating Left Circular Hardware/Data Chip Placeholder */}
          <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2">
            <div className="w-14 h-14 rounded-full border-2 border-[#1f2328] bg-white p-0.5 shadow-sm overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#F5D2E4] to-[#F5E8F5]">
              <div className="w-full h-full rounded-full bg-[#FE5D9F]/20 flex items-center justify-center text-[#FE5D9F]">
                <Cpu className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Floating Right Circular Chart/Data Placeholder */}
          <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2">
            <div className="w-14 h-14 rounded-full border-2 border-[#1f2328] bg-white p-0.5 shadow-sm overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#FEF08A] to-[#FED7AA]">
              <div className="w-full h-full rounded-full bg-[#F59E0B]/20 flex items-center justify-center text-[#D97706]">
                <LineChart className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Big Catchphrase Statement with Embedded Vector Icons */}
        <div className="text-center mt-12 mb-8 max-w-2xl mx-auto">
          <p className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1f2328] leading-tight tracking-tight">
            I engineer data systems that{' '}
            <span className="inline-flex items-center align-middle mx-1 p-1 rounded-full bg-[#ECFDF5] border border-[#10B981] text-[#059669]">
              <Database className="w-5 h-5 sm:w-7 sm:h-7" />
            </span>{' '}
            turn raw chaos into clarity.{' '}
            <span className="inline-flex items-center align-middle mx-1 p-1 rounded-full bg-[#FFF0F7] border border-[#FE5D9F] text-[#FE5D9F]">
              <Cpu className="w-5 h-5 sm:w-7 sm:h-7" />
            </span>
          </p>
        </div>

        {/* Contact Me Action Button (Folded Tab Button from Reference) */}
        <div className="flex justify-center mt-6">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-[#1f2328] text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-md shadow-[3px_3px_0px_0px_#FE5D9F] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <div className="w-2.5 h-2.5 bg-[#3B82F6] rounded-xs group-hover:bg-[#FE5D9F] transition-colors" />
            <span>CONTACT ME</span>
          </a>
        </div>
      </div>
    </section>
  );
}
