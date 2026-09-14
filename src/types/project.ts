export type ProjectCategory =
  | "Machine Learning Systems"
  | "ML Systems · GPU Inference"
  | "Applied Machine Learning"
  | "Computer Vision"
  | "Causal Inference"
  | "Causal Inference · Experimentation"
  | "Graph Machine Learning"
  | "ML Research"
  | "Distributed Software Systems"
  | "Software Engineering"
  | "Software Systems"
  | "Blockchain Systems · Execution Research"
  | "Spatial Data Science · Research";

export type HomepagePlacement = "lead" | "major" | "standard" | "additional";

export type ArchiveGroup = "machine-learning" | "ml-systems" | "software-systems";

export type ProjectVisual = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export interface Project {
  slug: string;
  title: string;
  summary: string;
  shortSummary?: string;
  category: ProjectCategory;
  technologies: string[];
  homepagePlacement?: HomepagePlacement;
  archiveGroup: ArchiveGroup;
  githubUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  documentationLabel?: string;
  result?: string;
  visual?: ProjectVisual;
  portfolioVisible?: boolean;
}
