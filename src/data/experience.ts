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
      "Built injection-aware two-compartment fitting with Python/SciPy, multistart optimization, and optional nonnegative fitted initial states; 7 of 11 experiments have exploratory fits, while 4 remain excluded for unresolved source, timing, or label issues.",
      "Contributing to ongoing SACMES refactoring: reduced its main Python module from 5,268 to 4,834 lines and passed 8 executed regression comparisons, with additional cases skipped.",
    ],
    technologies: ["Python", "NumPy", "pandas", "SciPy"],
  },
  {
    organization: "Sherwood Lab, UC Santa Barbara",
    role: "Undergraduate Researcher",
    kind: "Research",
    dates: "Sept. 2026 – Present",
    location: "Santa Barbara, CA",
    details: [
      "Investigating GPU L2-cache behavior in H200 GEMM workloads to inform selective allocation bypass: deciding which memory requests should allocate cache space.",
      "Built C++ instrumentation in Accel-Sim and Python analysis tools to reconstruct cache-line lifetimes, track sector reuse, and count evictions. Added synthetic trace tests and checks that reconcile request and read-hit counts with simulator statistics.",
      "Automated reproducible H200 simulation runs with recorded simulator versions, configurations, and binary and trace hashes. The analysis separates immediate read hits from requests that arrive while a cache fill is pending.",
      "Currently investigating selective L2 allocation policies using the measured cache behavior, with ongoing work focused on broader workload evaluation and understanding which memory accesses benefit from caching.",
    ],
    technologies: ["C++", "Python", "Accel-Sim 2.0", "GPU Architecture", "Linux"],
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
