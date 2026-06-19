import { projects } from "@/util/projects";
import ProjectCard from "@/components/ui/cards/ProjectCard";

export default function ProjectsPage() {
  return (
    <main id="main" className="u-container py-8 md:py-12">
      <header className="u-grid mb-6 gap-4 md:mb-8">
        <h1 className="t-title text-[clamp(2rem,5vw,4rem)]">Projects</h1>
        <p className="t-eyebrow u-muted">Selected Work</p>
        <p className="t-copy u-muted max-w-[60ch]">
          A full overview of projects, experiments, and case studies.
        </p>
      </header>

      <ul className="u-grid m-0 list-none p-0" aria-label="All projects">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} titleTag="h2" />
        ))}
      </ul>
    </main>
  );
}