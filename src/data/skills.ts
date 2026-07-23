export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    title: "Machine learning and data",
    skills: ["PyTorch", "PyTorch Geometric", "scikit-learn", "NumPy", "pandas"],
  },
  {
    title: "Backend and deployment",
    skills: ["FastAPI", "Pydantic", "Docker", "REST APIs", "GitHub Actions"],
  },
  {
    title: "Developer tooling",
    skills: ["Git", "Linux", "Logging", "Monitoring"],
  },
];
