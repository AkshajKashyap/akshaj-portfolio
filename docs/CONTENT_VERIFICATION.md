# Content Verification

## Public claims and sources

| Claim | Website location | Supporting source | Status | Qualification / limitation |
| --- | --- | --- | --- | --- |
| Akshaj Kashyap is a computer science student at UCSB. | Hero/About/Footer | `docs/WEBSITE_BRIEF.md` | Verified from provided brief | No graduation date, degree detail, or employment claim is added. |
| Portfolio work focuses on experimentation, evaluation, local serving, and ML workflow controls. | Hero/About | The nine audited repositories in `CONTENT_SOURCE_INVENTORY.md` | Verified synthesis | “Local serving” does not mean public or production deployment. |
| Four featured projects span causal inference, graph learning, language-model workflows, and computer vision. | Homepage/Projects intro | `FEATURED_PROJECT_REVIEW.md`; project data and source inventory | Verified | This describes portfolio coverage, not professional specialization. |
| Causal Uplift is a synthetic workflow with a 10,000-row smoke artifact, 201 passing tests, and a hold gate. | Causal Uplift card | `causal-uplift-experimentation-ops/README.md`; `reports/portfolio/verification_0.1.0.md` | Verified | All causal evidence is synthetic; the FastAPI service is local/staging. |
| Molecular GNN compares molecular GNNs on ESOL scaffold splits; GCN mean RMSE is 1.3395 across three seeds. | Molecular GNN card | `reports/portfolio/benchmark_summary.md` | Verified | Metric is ESOL scaffold-split evidence, not a general chemistry-performance claim. |
| LLM Posttraining implements SFT/preference workflow infrastructure; release smoke passed 8 stages with 0 failures and 3 skips. | LLM card | `reports/portfolio/release_0.1.0.md` | Verified | Tiny fixtures and one-step training validate infrastructure, not model-release quality. |
| Plant Disease VisionOps runs a 38-class workflow; clean/test and severe-brightness macro F1 are 0.9838 and 0.3286. | Plant Disease card | `reports/final_project_summary.md` | Verified | These results do not establish field readiness. |
| Contextual Bandit is a synthetic decisioning reference; release verification recorded 57 tests and promotion is hold. | Additional-project card | `reports/portfolio/release_0.1.0.md` | Verified | Not a real-policy quality or launch claim. |
| Feature Store Monitoring uses synthetic demand data; its tracked workflow reported test RMSE 7.948043. | Additional-project card | `reports/portfolio/portfolio_summary.md` | Verified | Local development storage and local serving are not production infrastructure. |
| Feed Ranking uses MIND-small with a train-only chronological holdout; category-affinity NDCG@10 is 0.3552/0.3377. | Additional-project card | `reports/portfolio/portfolio_summary.md` | Verified | Internal-test values are not official MIND benchmark results. |
| Multimodal Retrieval tracked Flickr8k zero-shot CLIP text-to-image R@1/5/10 is 0.5538/0.8160/0.8910. | Additional-project card | `multimodal-retrieval-ops/README.md` | Verified | The project is not production deployed; the Flickr8k source-license status is unresolved in the repo. |
| Agent Reliability Bench has six fully valid tracked task contracts. | Additional-project card | `agent-reliability-bench/README.md` | Verified | No aggregate agent-performance conclusion is claimed. |
| GitHub profile link is `github.com/AkshajKashyap`. | Footer | Git remotes for all audited repositories | Verified | LinkedIn and email are not shown. |
| Project GitHub and documentation links point to audited repositories. | Project cards | Git remotes; package project URLs where present | Verified | Documentation links use the audited repository's current branch and `docs/` or report directory; they are not separate hosted documentation sites. |

## Claims intentionally omitted or still blocked

- Experience, job titles, dates, responsibilities, and research affiliations: no verified source.
- Email address and LinkedIn URL: no verified source.
- Resume link: no PDF exists at `public/documents/resume.pdf` or elsewhere under `/home/akshaj/Building`.
- Individual project demo URLs: no currently usable public demo verified.
- Project screenshots/architecture diagrams in the portfolio: no approved public assets copied into `public/`.
- Open Graph image, profile image decision, and final favicon: pending.
- ResearchOps Agent, Graph Kernel SVM Portfolio, HDFS Log Anomaly Detection, Credit Risk GBDT, Movie Recommender, and Buyer Persona Segmentation: no local sources found.
