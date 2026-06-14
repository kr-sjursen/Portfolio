import Hero from "@/components/feature/Hero";
import Projects from "@/components/feature/Projects";
import About from "@/components/feature/About";
import Contact from "@/components/feature/Contact";

export default function Home() {
  return (
    <main id="main" className="u-container">
      <Hero />

      <div className="u-grid pb-16 pt-4">
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}