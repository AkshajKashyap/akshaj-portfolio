# Content Source Inventory

## Method and scope

This inventory covers the portfolio workspace and sibling Git repositories directly under `/home/akshaj/Building`. Repository names were used only to locate sources; summaries, technologies, metrics, and status statements below are grounded in each repository's README, manifest, tracked report, or Git remote.

| Project | Local repository / remote | Evidence available | Verified technologies | Verified metric / test evidence | Demo or deployment status | Missing information | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Causal Uplift Experimentation Ops | `/home/akshaj/Building/causal-uplift-experimentation-ops` · [remote](https://github.com/AkshajKashyap/causal-uplift-experimentation-ops) | README, `docs/`, architecture/reproducibility docs, 201-test verification transcript, policy reports | Python, NumPy, pandas, scikit-learn, FastAPI, Pydantic | 201 passing tests; smoke regenerated a 10,000-row synthetic experiment | Local/staging FastAPI only; promotion is **hold** | Public visual; real-world validation; demo URL | High |
| Molecular GNN Property Ops | `/home/akshaj/Building/molecular-gnn-property-ops` · [remote](https://github.com/AkshajKashyap/molecular-gnn-property-ops) | README, model card, methodology/architecture docs, benchmark and system-verification reports | Python, PyTorch, PyTorch Geometric, RDKit, scikit-learn, FastAPI, Streamlit | GCN mean ESOL scaffold-split RMSE 1.3395 across seeds 42/43/44; 142 passing tests | API and dashboard verified in local Docker Compose; no public demo confirmed | Public visual/demo URL; exact public deployment status beyond local verification | High |
| LLM Posttraining Ops | `/home/akshaj/Building/llm-posttraining-ops` · [remote](https://github.com/AkshajKashyap/llm-posttraining-ops) | README, architecture/model/evaluation docs, release report, dataset/evaluation reports | Python, PyTorch, Transformers, TRL, PEFT, FastAPI | 113 tests; release smoke: 8 stages passed, 0 failed, 3 model-dependent stages skipped | CPU-compatible reference implementation; no production-trained-model or public demo claim | Public visual/demo URL; representative model-quality result | High |
| Plant Disease VisionOps | `/home/akshaj/Building/plant-disease-visionops` · [remote](https://github.com/AkshajKashyap/plant-disease-visionops) | README, model card, reproducibility/limitations docs, tracked final summary and failure-gallery assets | Python, PyTorch, torchvision, scikit-learn, Streamlit, FastAPI | ResNet18 transfer: clean test macro F1 0.9838; severe brightness-decrease macro F1 0.3286 | Local pipeline; not field-ready and no public demo confirmed | Approved visual export; public demo URL | High |
| Contextual Bandit Decision Ops | `/home/akshaj/Building/contextual-bandit-decision-ops` · [remote](https://github.com/AkshajKashyap/contextual-bandit-decision-ops) | README, architecture/evaluation docs, release report, policy reports | Python, NumPy, pandas, FastAPI | 57 passing tests; synthetic promotion decision **hold** | Staging-only FastAPI service; not a real-policy launch | Public visual/demo URL | High |
| Feature Store Monitoring Ops | `/home/akshaj/Building/feature-store-monitoring-ops` · [remote](https://github.com/AkshajKashyap/feature-store-monitoring-ops) | README, architecture/system-card/operations docs, tracked workflow and monitoring reports | Python, FastAPI, SQLAlchemy, Redis, scikit-learn, pandas | Synthetic-demand workflow test RMSE 7.948043; release gate `warn` | Local FastAPI and local development storage; no production deployment | Public visual/demo URL | High |
| Feed Ranking Ops | `/home/akshaj/Building/feed-ranking-ops` · [remote](https://github.com/AkshajKashyap/feed-ranking-ops) | README, architecture/evaluation docs, portfolio summary, tracked MIND-small fixture | Python, scikit-learn, FastAPI, FAISS, DuckDB | Category-affinity validation/internal-test NDCG@10 0.3552/0.3377 on a train-only chronological holdout | Local serving endpoints; telemetry is local/offline | Public visual/demo URL; official benchmark evaluation | High |
| Multimodal Retrieval Ops | `/home/akshaj/Building/multimodal-retrieval-ops` · [remote](https://github.com/AkshajKashyap/multimodal-retrieval-ops) | README, architecture/model/evaluation docs, tracked JSON/Markdown metrics, release report | Python, CLIP, FAISS, PyTorch, FastAPI | Flickr8k zero-shot CLIP text-to-image R@1/5/10 0.5538/0.8160/0.8910 | Local artifact-bound service; no production deployment | Public visual/demo URL; resolved Flickr8k source-license status | High |
| Agent Reliability Bench | `/home/akshaj/Building/agent-reliability-bench` · [remote](https://github.com/AkshajKashyap/agent-reliability-bench) | README, task manifests, test suite | Python, Docker, PyYAML, pytest | Six task contracts listed as fully valid; invalid infrastructure observations are explicitly excluded | Docker-based local benchmark harness; no hosted product/demo | Public visual/demo URL; aggregate benchmark result suitable for a portfolio metric | Medium-high |

## Provisional candidates not found locally

The following requested candidates had no repository, tracked documentation, report, or source match under `/home/akshaj/Building` at audit time. They are not included in `src/data/projects.ts`.

| Candidate | Local path / source | Status |
| --- | --- | --- |
| ResearchOps Agent | None found | Blocked: no verified source |
| Graph Kernel SVM Portfolio | None found | Blocked: no verified source |
| HDFS Log Anomaly Detection | None found | Blocked: no verified source |
| Credit Risk GBDT | None found | Blocked: no verified source |
| Movie Recommender | None found | Blocked: no verified source |
| Buyer Persona Segmentation | None found | Blocked: no verified source |

## Personal-content inventory

- **GitHub:** `https://github.com/AkshajKashyap` is supported by the audited repository remotes.
- **Email, LinkedIn, resume PDF, profile image, Open Graph image, and project visuals:** no verified local source found; remain pending.
- **Experience:** no verified resume or experience source found; remains omitted from public content.
