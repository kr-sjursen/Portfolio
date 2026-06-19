export type ProjectItem = {
  slug: string;
  title: string;
  projectPath: string;
  description: string;
  stack: string[];

  hasImage: boolean;
  image: string;

  hasCaseStudy: boolean;
  caseStudyPath: string;

  featured: boolean;
};

export const projects: ProjectItem[] = [
  {
    slug: "lore-builder",
    title: "Lore Builder",
    projectPath: "/projects/lore-builder",
    description: "This is a description of Lore Builder.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    hasImage: true,
    image: "/fallback-image.png",

    hasCaseStudy: false,
    caseStudyPath: "/projects/lore-builder/case-study",

    featured: true,
  },
  {
    slug: "project-2",
    title: "Project 2",
    projectPath: "/projects/project-2",
    description: "This is a description of Project 2.",
    stack: ["Tech 1", "Tech 2", "Tech 3"],

    hasImage: false,
    image: "/projects/project-default.png",

    hasCaseStudy: true,
    caseStudyPath: "/projects/project-2/case-study",

    featured: true,
  },
];