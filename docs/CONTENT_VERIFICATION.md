# Content Verification

## Published quantitative claims

| Claim | Repository evidence | Qualification retained on site |
| --- | --- | --- |
| CUDA: 21/21 CTest tests, max CPU/CUDA logit error 2.563×10⁻⁵, about 266.8 tokens/s for a 64-token continuation | `cuda-transformer-runtime` README and tracked benchmark/correctness docs | RTX 3050 Laptop GPU; no production or engine-comparison claim |
| Causal uplift: +4.36 percentage points for the frozen all-positive policy | `causal-uplift-experimentation-ops/docs/portfolio_review.md`, `reports/prospective_policy_trial.md`, and staging gate | Synthetic prospective-trial simulation; promotion remains on hold pending real randomized validation |
| Molecular GNN: GCN RMSE 1.3395 ± 0.0738 vs random forest 1.8480 ± 0.0214 | `molecular-gnn-property-ops` model/evaluation docs | Three seeds on an ESOL scaffold split |
| BlockScope: eight-block fixture inspected 819 transactions and receipts, found three strict candidates, and completed exact observed replay plus reliable front-omission experiments for all three | `blockscope` README and `artifacts/evaluation_17000001_17000008.json` | Small, nonrepresentative alpha corpus; no confirmed-attack, intent, wallet-loss, realized-profit, or production claim |
| Matching Engine: cap 16 measured about 3,498 median passive-submit ops/s vs 250 for same-run cap 1 | `matching-engine/docs/network_performance.md` | One WSL2/ext4 host at 16 clients; 14× is a same-run configuration comparison, not a universal deployment result |
| Gridiron: 272 games, 61,156 future-evaluable pairs, and 12/12 primary validation directions agreed with the frozen test direction | `gridiron-spatial-intelligence` README, release report, and checksum-backed evidence manifest | Aggregate evidence is inspectable; full reproduction requires separately authorized NFL competition data |
| Plant Disease: 0.9838 clean macro F1 and 0.3286 under severe darkening | `plant-disease-visionops/reports/final_project_summary.md` | Corruption result is shown beside clean performance |
| LLM Posttraining: 113 tests passed; workflow smoke recorded eight passed, zero failed, and three model-dependent stages skipped | `llm-posttraining-ops/reports/portfolio/release_0.1.0.md` | Tiny fixtures and one-step SFT/DPO validate system wiring, not model-quality improvement |
| MatchStream: all 3,549 events reproduced France 4-3 Argentina; 37.9-44.9 events/s | `matchstream` README, system design, and benchmark notes | Complete local stack; throughput explicitly local |
| Multimodal Retrieval: Flickr8k text-to-image recall@1/5/10 of 0.5538/0.8160/0.8910 | `multimodal-retrieval-ops` README and evaluation docs | Tracked zero-shot CLIP result; no deployment claim |
| Feed Ranking: validation NDCG@10 0.3552 and internal-test NDCG@10 0.3377 | `feed-ranking-ops` README and evaluation reports | MIND-small train-only chronological holdout |
| Contextual Bandit: 57 passing release tests | `contextual-bandit-decision-ops` README and release report | Evidence is synthetic and promotion remains on hold |
| Valorant: 0.6886 log loss vs 0.6931 baseline; 0.2448 Brier vs 0.2500 | `valorant-quant-research` research and robustness reports | Inspected 2024 period; later checks found the advantage weak and unstable |

## Evidence gates and omissions

- Graph Kernel SVM is retained in structured data but not rendered. Its public repository currently exposes `reports/method_notes.md` but not the generated reports needed to inspect the previously published 0.8419, 0.6206, and 0.7605 macro-F1 values.
- BlockScope has a public `v0.1.0` tag and GitHub-recognized MIT license, but no GitHub release. Its README and changelog still incorrectly say that no license was selected, so the site makes no license or open-source claim.
- Scanpy PR #4364 remains open and unmerged as of September 13, 2026. It is not represented as experience or a merged contribution on the site.
- HDFS Log Anomaly Detection, Credit Risk GBDT, Feature Store Monitoring Ops, and private Agent Reliability Bench are not rendered.

## Publication rules

- Repository evidence is the source of truth for projects.
- Metrics retain their split, dataset, hardware, simulation, or local-run context where needed.
- Missing, private, or unreachable repository, demo, and documentation links are omitted rather than represented as placeholders.
- Movie Recommender remains unpublished because its source was not verified.
