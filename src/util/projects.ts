export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  hasImage: boolean;
  image: string;
  projectPath: string;
  caseStudyPath: string;
  featured: boolean;
};

export const projects: ProjectItem[] = [
  {
    slug: "project-1",
    title: "Project 1",
    description: "This is a description of Project 1.",
    stack: ["Tech 1", "Tech 2", "Tech 3"],
    hasImage: true,
    image: "/fallback-image.png",
    projectPath: "/projects/project-1",
    caseStudyPath: "/projects/project-1/case-study",
    featured: true,
  },
  {
    slug: "project-2",
    title: "Project 2",
    description: "This is a description of Project 2.",
    stack: ["Tech 1", "Tech 2", "Tech 3"],
    hasImage: false,
    image: "/projects/project-default.png",
    projectPath: "/projects/project-2",
    caseStudyPath: "/projects/project-2/case-study",
    featured: true,
  },
];