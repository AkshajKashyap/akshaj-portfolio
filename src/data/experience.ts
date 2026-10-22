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
      "Processed 44 electrochemical exports spanning 11 datasets, two electrodes, and two methods with Python, converting potentiostat outputs into concentration metrics and plots.",
      "Developing Python scientific computing and modeling workflows; investigating one- and two-compartment concentration models.",
      "Contributing to ongoing SACMES refactoring: reduced its main Python module from 5,268 to 4,834 lines and passed 8 executed regression comparisons, with additional cases skipped.",
    ],
    technologies: ["Python"],
  },
  {
    organization: "Sherwood Lab, UC Santa Barbara",
    role: "Undergraduate Researcher",
    kind: "Research",
    dates: "Sept. 2026 – Present",
    location: "Santa Barbara, CA",
    details: [
      "Project scope: Active GPU Memory and Interconnect.",
      "Research focus: GPU memory hierarchies and interconnects for AI workloads, advised by Professor Tim Sherwood.",
      "Beginning investigation of GPU cache behavior and memory-access patterns using Hebrides, Barra, and Accel-Sim 2.0.",
    ],
  },
  {
    organization: "Stealth Startup",
    role: "Technology Intern",
    kind: "Internship",
    dates: "June 2026 – Sept. 2026",
    location: "San Jose, CA",
    details: [
      "Built a Python computer vision pipeline with Roboflow, Segment Anything, and depth estimation to detect vegetation near cellular infrastructure for wildfire-risk screening.",
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
      "Completed 200+ rubric-based evaluations of AI-generated image edits, assessing realism and coherence.",
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
