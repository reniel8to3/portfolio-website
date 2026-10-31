'use client';

import { useState } from 'react';
import { 
  Star, 
  User, 
  LayoutGrid, 
  Sparkles, 
  GraduationCap, 
  Award, 
  Mail, 
  Menu, 
  X,
  CircleDot
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { portfolioData } from '@/data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#', icon: <Star className="w-3.5 h-3.5 fill-current" /> },
    { name: 'ABOUT', href: '#about', icon: <User className="w-3.5 h-3.5" /> },
    { name: 'PROJECTS', href: '#projects', icon: <LayoutGrid className="w-3.5 h-3.5" /> },
    { name: 'LEARNING', href: '#education', icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { name: 'CERTS', href: '#certifications', icon: <Award className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FCFBF7]/95 backdrop-blur-md border-b-2 border-[#1f2328] px-4 sm:px-8 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Brand Dot & Folder Tabs */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-[#FE5D9F] border-2 border-[#1f2328] flex items-center justify-center text-white shadow-xs hover:scale-105 transition-transform"
            aria-label="Home"
          >
            <CircleDot className="w-4 h-4" />
          </a>

          {/* Desktop Folder-Style Tabs */}
          <nav className="hidden md:flex items-center gap-1.5 pl-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-black tracking-wider uppercase border-2 border-[#1f2328] rounded-t-lg transition-all ${
                  idx === 0
                    ? 'bg-[#FE5D9F] text-white shadow-xs'
                    : 'bg-white text-[#1f2328] hover:bg-[#F5E8F5]'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Social Circles & Contact Button */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-[#F686BD] border-2 border-[#1f2328] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-xs"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-[#FE5D9F] border-2 border-[#1f2328] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-xs"
              aria-label="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-black uppercase tracking-wider bg-white hover:bg-[#1f2328] hover:text-white text-[#1f2328] border-2 border-[#1f2328] rounded-md shadow-xs transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Toggle navigation"
          className="md:hidden p-1.5 rounded-md border-2 border-[#1f2328] bg-white text-[#1f2328]"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t-2 border-[#1f2328] space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-xs font-black uppercase tracking-wider text-[#1f2328] hover:bg-[#F5E8F5] rounded-md"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
          <div className="pt-2 border-t border-[#1f2328]/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#F686BD] border-2 border-[#1f2328] flex items-center justify-center text-white"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#FE5D9F] border-2 border-[#1f2328] flex items-center justify-center text-white"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-1 text-xs font-black uppercase tracking-wider bg-[#1f2328] text-white rounded-md"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
