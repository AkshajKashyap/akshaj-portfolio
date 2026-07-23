# Featured Project Review

## Recommendation

Retain the four provisional featured projects in the agreed order:

1. Causal Uplift Experimentation Ops
2. Molecular GNN Property Ops
3. LLM Posttraining Ops
4. Plant Disease VisionOps

They are the strongest documented combination of causal ML, graph ML, language-model workflow engineering, and computer vision. No replacement is recommended: the additional repositories are credible but would not improve the featured set enough to justify changing the planned four.

Scores are evidence-based comparisons for portfolio selection, not claims of real-world impact. `High` means a tracked README, manifest, reports, and/or verification transcript support the assessment.

| Project | Technical depth | Distinctiveness / role relevance | Evidence / completeness / documentation | SWE & deployment maturity | Redundancy | Decision and rationale |
| --- | --- | --- | --- | --- | --- | --- |
| Causal Uplift Experimentation Ops | High: randomized analysis, uplift evaluation, policy simulation, artifact and monitoring flow | High: causal decisioning is distinct from the other candidates | High: architecture, reports, and 201-test transcript; synthetic limitation explicit | High for local/staging engineering; not production | Low | **Featured.** Strong end-to-end causal workflow with an honest hold gate. |
| Molecular GNN Property Ops | High: scaffold splits, GNN comparison, calibration/applicability context | High: graph molecular regression is distinct | High: model card, benchmark/uncertainty reports, 142-test verification | High: local API, dashboard, Docker Compose checks | Low | **Featured.** Strong graph-ML evidence and a documented experimental protocol. |
| LLM Posttraining Ops | High: SFT, preference tuning, evaluation, serving, monitoring, release gates | High: directly relevant to modern ML systems | High: release report, docs, 113 tests, explicit tiny-fixture limitation | High for reference interfaces; no trained-model quality claim | Low | **Featured.** Broad ML workflow depth without misrepresenting its reference scope. |
| Plant Disease VisionOps | High: audit, deterministic splits, transfer learning, corruptions, failure analysis | High: a distinct computer-vision system | High: final report gives clean and robustness outcomes with limitations | Medium-high: tested CLI pipeline and local apps; no field deployment | Low | **Featured.** Clear experimental evidence and an important robustness limitation. |
| Contextual Bandit Decision Ops | High: OPE, learning policies, gates, observability | High but overlaps with causal decisioning | High: release report and 57 tests; synthetic limitation explicit | High local/staging engineering | Medium-high with Causal Uplift | **Additional.** Good evidence, but overlaps most with the causal featured project. |
| Feature Store Monitoring Ops | High: temporal features, parity, serving, telemetry, drift | High for MLOps | High: tracked workflow/report evidence | High local systems scope; synthetic/local limitations | Medium with LLM/causal operations | **Additional.** Strong systems complement, but an additional card preserves featured breadth. |
| Feed Ranking Ops | High: temporal evaluation, retrieval, LTR, policy selection, serving | High for recommender systems | High: portfolio summary and protocol limitations | High local serving/monitoring scope | Medium with retrieval | **Additional.** Distinct recommender work with clearly qualified internal-holdout metrics. |
| Multimodal Retrieval Ops | High: CLIP, exact/ANN retrieval, artifact serving, monitoring | High for multimodal ML | High: model/evaluation docs and tracked Flickr8k results | High local artifact serving; no production claim | Medium with Plant Disease computer vision | **Additional.** Strong distinct capability, but the featured set already has computer vision. |
| Agent Reliability Bench | Medium-high: task validation, isolated runtime controls, result validity handling | High for software-engineering evaluation tooling | Medium-high: detailed README and tests; no aggregate benchmark claim | High: Docker-oriented harness | Low | **Additional.** A valuable engineering/reliability complement, with evidence handled conservatively. |

## Selection checks

- **Technical depth:** all featured projects include more than a model/script; each has evaluation and operational or reproducibility components.
- **Evidence quality:** reported metrics are tied to source reports and explicitly qualified where synthetic, local, or non-production.
- **Completeness:** each featured repository includes a public README, manifest, documentation, and tracked evidence.
- **Coverage:** together they cover causal inference, graph ML, LLM systems, and vision without artificial variety.
- **No replacement required:** Feature Store Monitoring, Feed Ranking, and Multimodal Retrieval are strong additional projects, not evidence that a provisional featured item is weak.
