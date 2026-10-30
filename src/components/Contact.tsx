'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, ArrowUpRight, Stamp } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.about.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.about.email}?subject=${encodeURIComponent(
      formState.subject || `Note from ${formState.name} via Portfolio`
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="mb-8">
          <span className="font-handwriting text-2xl font-bold text-[#1f2328] -rotate-1 inline-block select-none">
            say hello
          </span>
          <h2 className="text-3xl font-black text-[#1f2328] tracking-tight uppercase">
            Contact
          </h2>
        </div>

        {/* Postcard Stationery Container */}
        <div className="relative bg-white border-2 border-[#1f2328] p-6 sm:p-10 rounded-xl shadow-[6px_6px_0px_0px_#1f2328]">
          {/* Top Right Postcard Stamp */}
          <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center justify-center w-16 h-20 border-2 border-dashed border-[#FE5D9F] bg-[#FFF0F7] rounded p-1 text-center">
            <Mail className="w-5 h-5 text-[#FE5D9F] mb-1" />
            <span className="text-[9px] font-mono font-bold text-[#FE5D9F] uppercase">AIR MAIL</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Info */}
            <div className="md:col-span-5 space-y-5">
              <h3 className="text-base font-black text-[#1f2328] uppercase tracking-wider">
                Direct Channels
              </h3>

              {/* Email Card with Copy Button */}
              <div className="p-3.5 bg-[#F5E8F5] border border-[#F4BBD3] rounded-md space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1f2328]/70">
                  Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#1f2328] truncate">
                    {personal.about.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded bg-white border border-[#1f2328] hover:bg-[#1f2328] hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#1f2328]">
                <MapPin className="w-4 h-4 text-[#FE5D9F]" />
                <span>{personal.about.location}</span>
              </div>

              {/* Response Time Note */}
              <div className="p-3 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-600 leading-relaxed font-mono">
                Response time: Within 24 hours. Open to full-time roles &amp; freelance projects.
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#1f2328] block mb-2">
                  Online
                </span>
                <div className="flex flex-wrap gap-2">
                  {personal.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-[#1f2328] hover:text-white text-[#1f2328] text-xs font-bold border border-[#1f2328] rounded shadow-2xs transition-colors"
                    >
                      <span>{social.name}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Note Form */}
            <div className="md:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-black text-[#1f2328] uppercase tracking-wider mb-2">
                  Send a Note
                </h3>

                {submitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-400 text-emerald-800 text-xs font-bold rounded flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Email client opened! Hit send to deliver your note.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#1f2328] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 bg-zinc-50 border-2 border-[#1f2328] text-xs font-medium text-[#1f2328] rounded focus:outline-none focus:bg-white focus:border-[#FE5D9F] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1f2328] mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3 py-2 bg-zinc-50 border-2 border-[#1f2328] text-xs font-medium text-[#1f2328] rounded focus:outline-none focus:bg-white focus:border-[#FE5D9F] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#1f2328] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full px-3 py-2 bg-zinc-50 border-2 border-[#1f2328] text-xs font-medium text-[#1f2328] rounded focus:outline-none focus:bg-white focus:border-[#FE5D9F] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#1f2328] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your note here..."
                    className="w-full px-3 py-2 bg-zinc-50 border-2 border-[#1f2328] text-xs font-medium text-[#1f2328] rounded focus:outline-none focus:bg-white focus:border-[#FE5D9F] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1f2328] hover:bg-[#FE5D9F] text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-md shadow-[3px_3px_0px_0px_#FE5D9F] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SEND NOTE</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
