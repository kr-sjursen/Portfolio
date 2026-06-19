import Link from "next/link";
import { projects } from "@/util/projects";
import ProjectCard from "@/components/ui/cards/ProjectCard";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="u-surface p-5 md:p-6"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="t-title text-[clamp(1.2rem,2.1vw,1.6rem)]"
      >
        Projects
      </h2>
      <p className="t-copy u-muted mt-2">
        A selection of work with case-study pages.
      </p>

      <Link href="/projects" className="u-pill mt-4 inline-flex">
        Browse all projects
      </Link>

      <ul className="u-grid mt-4 list-none p-0" aria-label="Featured projects">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} titleTag="h3" />
        ))}
      </ul>
    </section>
  );
}