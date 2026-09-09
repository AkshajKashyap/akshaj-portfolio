export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "C++", "TypeScript", "JavaScript", "SQL", "Java"],
  },
  {
    title: "Machine learning and experimentation",
    skills: ["PyTorch", "PyTorch Geometric", "scikit-learn", "causal inference", "graph learning", "evaluation design"],
  },
  {
    title: "Inference and performance",
    skills: ["CUDA", "cuBLAS", "transformer inference", "CMake", "benchmarking", "profiling"],
  },
  {
    title: "Software and data systems",
    skills: ["FastAPI", "PostgreSQL", "Kafka/Redpanda", "Docker", "WebSockets", "GitHub Actions"],
  },
];
