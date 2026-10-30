import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen animated-gradient-bg py-0 sm:py-10 px-0 sm:px-4 md:px-8 flex justify-center overflow-x-hidden">
      {/* Floating Animated Mesh Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Orb 1: Cyclamen Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FE5D9F]/40 blur-3xl animate-orb-1" />
        {/* Orb 2: Persian Pink Glow */}
        <div className="absolute top-1/2 -right-28 w-[450px] h-[450px] rounded-full bg-[#F686BD]/40 blur-3xl animate-orb-2" />
        {/* Orb 3: Orchid / Mimi Pink Glow */}
        <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F4BBD3]/50 blur-3xl animate-orb-3" />
        {/* Orb 4: Pale Lavender Sparkle Glow */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#F5E8F5]/60 blur-3xl animate-orb-1" />
      </div>

      {/* Cutting Mat Desk Grid Overlay across the moving gradient */}
      <div className="fixed inset-0 pointer-events-none desk-mat-grid z-0 opacity-80" />

      {/* Central Lined Notebook Paper on the Desk */}
      <div className="relative z-10 w-full max-w-5xl notebook-sheet rounded-none sm:rounded-2xl border-x-0 sm:border-2 border-[#1f2328] overflow-hidden my-auto">
        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
