export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages and data",
    skills: ["Python", "pandas", "NumPy"],
  },
  {
    title: "Machine learning",
    skills: ["scikit-learn", "PyTorch", "PyTorch Geometric", "Transformers", "TRL"],
  },
  {
    title: "Systems and serving",
    skills: ["FastAPI", "Pydantic", "SQLAlchemy", "Docker", "FAISS"],
  },
];
