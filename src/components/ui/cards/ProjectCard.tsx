import Link from "next/link";
import Image from "next/image";
import type { ProjectItem } from "@/util/projects";
import Button from "@/components/buttons/Button";

type ProjectCardProps = {
  project: ProjectItem;
  titleTag?: "h2" | "h3";
};

export default function ProjectCard({ project, titleTag = "h3" }: ProjectCardProps) {
  const TitleTag = titleTag;

  return (
    <li className="u-surface project-card">
      <div className="relative z-[1] grid gap-4 md:grid-cols-[minmax(0,1fr)_280px] md:grid-rows-[1fr_auto] md:items-stretch">
        <Link
          href={project.projectPath}
          className="flex h-full flex-col gap-2 md:col-start-1 md:row-start-1"
        >
          <TitleTag className="mb-1 leading-[1.3] text-[color:var(--text)]">
            {project.title}
          </TitleTag>

          <ul
            className="m-0 flex list-none flex-wrap items-start gap-2 p-0"
            aria-label={`Tech stack for ${project.title}`}
          >
            {project.stack.map((tech) => (
              <li key={tech} className="u-chip">
                {tech}
              </li>
            ))}
          </ul>

          <p className="t-copy u-muted grow">{project.description}</p>
        </Link>

        <div className="project-media md:col-start-2 md:row-span-2">
          <Link href={project.projectPath} className="block h-full w-full">
            {project.hasImage ? (
              <Image
                src={project.image}
                alt={project.title}
                width={280}
                height={260}
                className="project-image"
              />
            ) : (
              <div
                className="project-image project-image-fallback"
                role="img"
                aria-label={`No preview available for ${project.title}`}
              >
                No preview image yet
              </div>
            )}
          </Link>
        </div>

        <div className="relative z-[1] flex flex-wrap gap-2.5 md:col-start-1 md:row-start-2">
          <Button
            Path={project.projectPath}
            Text="Open project"
          />
          {project.hasCaseStudy && (
            <Button
              Path={project.caseStudyPath}
              Text="Read case study"
            />
          )}
        </div>
      </div>
    </li>
  );
}