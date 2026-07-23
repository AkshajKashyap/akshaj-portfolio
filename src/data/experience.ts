export type Experience = {
  organization: string;
  role: string;
  kind: "Research" | "Internship" | "Fellowship" | "Contributor work";
  dates: string;
  location?: string;
  details: string[];
  technologies?: string[];
};

export const experience: Experience[] = [
  {
    organization: "PLAXCO Lab",
    role: "Undergraduate Researcher",
    kind: "Research",
    dates: "Aug. 2025 – Present",
    location: "Santa Barbara, CA",
    details: [
      "Processed 44 electrochemical datasets with Python, converting potentiostat outputs into concentration metrics and plots.",
      "Refactored SACMES into reusable analysis code for electrochemical biosensor experiments.",
    ],
    technologies: ["Python"],
  },
  {
    organization: "Techions",
    role: "Technology Intern",
    kind: "Internship",
    dates: "May 2024 – Aug. 2024",
    location: "San Jose, CA",
    details: [
      "Built a computer-vision pipeline to detect vegetation near cellular infrastructure.",
      "Improved detection accuracy by 27% for vegetation-risk screening related to wildfire prevention and network reliability.",
    ],
    technologies: ["Python", "Roboflow", "Depth Estimation", "Segment Anything"],
  },
  {
    organization: "Handshake AI Fellowship",
    role: "AI Evaluation Fellow",
    kind: "Fellowship",
    dates: "Jan. 2026 – Present",
    location: "Remote",
    details: [
      "Completed 20+ rubric-based evaluations of AI-generated image edits, assessing realism and coherence.",
      "Wrote structured justifications to support consistent model-quality assessments.",
    ],
  },
  {
    organization: "PromptShop",
    role: "Software / Prompt Engineering Contributor",
    kind: "Contributor work",
    dates: "Jan. 2026 – Present",
    location: "Remote",
    details: [
      "Designed and iterated five prompt-driven content workflows.",
      "Validated outputs on 30+ structured test cases to improve reliability and reduce repeated manual post-processing.",
    ],
  },
];
