# Content Verification

## Published quantitative claims

| Claim | Repository evidence | Qualification retained on site |
| --- | --- | --- |
| CUDA: 21/21 CTest tests, max CPU/CUDA logit error 2.563×10⁻⁵, about 266.8 tokens/s for a 64-token continuation | `cuda-transformer-runtime` README and tracked benchmark/correctness docs | RTX 3050 Laptop GPU; no production or engine-comparison claim |
| Causal uplift: +4.36 percentage points, $26,900 simulated net value, 3.36 ROI | `causal-uplift-experimentation-ops/docs/portfolio_review.md` and policy reports | Synthetic prospective randomized trial simulation; real validation required |
| Molecular GNN: GCN RMSE 1.3395 ± 0.0738 vs random forest 1.8480 ± 0.0214 | `molecular-gnn-property-ops` model/evaluation docs | Three seeds on an ESOL scaffold split |
| MatchStream: all 3,549 events reproduced France 4–3 Argentina; 37.9–44.9 events/s | `matchstream` README, system design, and benchmark notes | Complete local stack; throughput explicitly local |
| Plant Disease: 0.9838 clean macro F1 and 0.3286 under severe darkening | `plant-disease-visionops/reports/final_project_summary.md` | Corruption result is shown beside clean performance |
| Valorant: 0.6886 log loss vs 0.6931 baseline; 0.2448 Brier vs 0.2500 | `valorant-quant-research` research/robustness reports | 2024 period was inspected; later checks found the advantage weak and unstable |
| HDFS: 11.2M lines, 2,034 windows, 205 features | `flagship2-log-anomaly` README/artifacts and verified résumé evidence | No unsupported anomaly precision/recall value |
| Graph Kernel SVM: 0.8419 MUTAG, 0.6206 PTC_MR, 0.7605 PROTEINS macro F1 | `graph-kernel-svm` README and reports | Strongest recorded methods across ten splits |
| Credit Risk GBDT: validation threshold 0.09 and 12 passing tests | `credit-risk-gbdt` README/docs/tests | No unsupported deployment or business-impact claim |

Archive claims for LLM Posttraining, Multimodal Retrieval, Feed Ranking, Contextual Bandit, Feature Store, and Agent Reliability remain qualified in `src/data/projects.ts`; synthetic, local, skipped-stage, and non-production limitations are kept with their results.

## Publication rules

- Repository evidence is the source of truth for projects.
- Metrics retain their split, dataset, hardware, simulation, or local-run context where needed.
- Missing, private, or unreachable repository, demo, and documentation links are omitted rather than represented as placeholders.
- Movie Recommender remains unpublished because its source was not verified.
