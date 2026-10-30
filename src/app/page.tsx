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
    <div className="min-h-screen py-0 sm:py-8 px-0 sm:px-4 md:px-8 flex justify-center">
      {/* Central Lined Notebook Paper on the Desk Mat */}
      <div className="w-full max-w-5xl notebook-sheet border-x-0 sm:border-2 border-[#1f2328] shadow-2xl relative">
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
