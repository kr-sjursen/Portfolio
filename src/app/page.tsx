import Hero from "@/components/feature/landing/Hero";
import Projects from "@/components/feature/landing/Projects";
import About from "@/components/feature/landing/About";
import Contact from "@/components/feature/landing/Contact";

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