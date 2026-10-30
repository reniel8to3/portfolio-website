import type { Metadata } from 'next';
import { Geist, Geist_Mono, Caveat } from 'next/font/google';
import './globals.css';
import { portfolioData } from '@/data/portfolioData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const caveat = Caveat({
  variable: '--font-handwriting',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
  description: `${portfolioData.personal.shortBio} Explore my creative projects, education, certifications, and skills.`,
  keywords: [
    'Portfolio',
    'Personal Website',
    'Creative Developer',
    'Design',
    'Next.js',
    'React',
    'Tailwind CSS'
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | Creative Portfolio`,
    description: portfolioData.personal.shortBio,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F5E8F5] text-[#222222] antialiased selection:bg-[#F686BD] selection:text-white">
        {children}
      </body>
    </html>
  );
}
