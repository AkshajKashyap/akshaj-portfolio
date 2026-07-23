export type ProjectCategory =
  | "Machine Learning Systems"
  | "Applied Machine Learning"
  | "Computer Vision"
  | "Causal Inference"
  | "Graph Machine Learning"
  | "Software Engineering";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  technologies: string[];
  featured: boolean;
  githubUrl: string;
  demoUrl?: string;
  documentationUrl?: string;
  result?: string;
  image?: string;
}
