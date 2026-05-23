import Hero from "@/components/cinematic/Hero";
import About from "@/components/cinematic/About";
import Projects from "@/components/cinematic/Projects";
import Skills from "@/components/cinematic/Skills";
import CodingProfiles from "@/components/cinematic/CodingProfiles";
import Contact from "@/components/cinematic/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[var(--accent)] selection:text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CodingProfiles />
      <Contact />
    </main>
  );
}
