# Project Content Plan

> Superseded: this pre-content collection plan is retained for history. Current selections and verified claims live in `CONTENT_SOURCE_INVENTORY.md`, `CONTENT_VERIFICATION.md`, and `src/data/projects.ts`.

## Publishing rule

The repository currently contains no populated project records, URLs, screenshots, documentation, or verified results. The following inventory is a collection checklist, not approved public copy. Do not publish a field until Akshaj verifies it.

## Required information for every project

Collect the following before publication:

1. Exact title and preferred slug.
2. One-sentence plain-English summary (25–35 words; avoids unexplained acronyms).
3. Problem and intended user/research question.
4. What was built: components, workflow, data pipeline, model, interface, or service.
5. Important technical decisions and the trade-offs behind them.
6. Strongest measurable result, with evaluation context and source; otherwise `No verified result supplied`.
7. Technologies actually used.
8. Verified GitHub, demo, and documentation URLs, or a confirmed unavailable state for each.
9. One screenshot or architecture diagram requirement, alt text, and caption.
10. Scope/ownership, completion state, and rationale for featured/additional/archive/exclude placement.

## Inventory and asset brief

| Project | Proposed placement | Screenshot / diagram to collect | Placement rationale to verify |
| --- | --- | --- | --- |
| Causal Uplift Experimentation Ops | Featured | Experimentation workflow or uplift-evaluation diagram | Candidate flagship causal-inference project; feature only if technical detail and evidence are complete. |
| Molecular GNN Property Ops | Featured | Molecular graph/model pipeline or evaluation figure | Candidate flagship graph-ML project; verify data, model, and result evidence. |
| LLM Posttraining Ops | Featured | Post-training/evaluation workflow or system architecture | Candidate flagship LLM-systems project; verify methods, safety of disclosure, and results. |
| Plant Disease VisionOps | Featured | Model prediction interface or vision pipeline | Candidate applied computer-vision project; verify dataset/evaluation context and build scope. |
| ResearchOps Agent | Additional | Agent workflow diagram or task trace | Keep additional unless it has unusually strong evidence, product maturity, and documentation. |
| Graph Kernel SVM Portfolio | Additional | Kernel comparison/evaluation chart | Keep additional as a focused classical/graph-ML example pending evidence. |
| HDFS Log Anomaly Detection | Additional | Log pipeline or anomaly-results chart | Keep additional pending verified dataset, detection method, and result. |
| Credit Risk GBDT | Additional | Model evaluation/calibration or feature workflow | Keep additional pending responsible-use framing and evaluation detail. |
| Movie Recommender | Additional | Recommendation architecture or UI screenshot | Keep additional unless deployment and rigorous evaluation support stronger placement. |
| Buyer Persona Segmentation | Additional | Segmentation chart or pipeline diagram | Keep additional pending verified data source, method, and actionable outcome. |

For each row, fill every field in **Required information for every project**. “Ops” in a title must not imply production deployment or operational ownership without evidence.

## Objective featured-project rubric

Score each dimension 0–3 using evidence, for a total out of 24. Featured projects normally require at least 17, no zero in relevance or completeness, and a working evidence link.

| Dimension | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| Technical depth | No implementation detail | Basic implementation | Clear nontrivial components/trade-offs | Strong, explainable system/model decisions |
| Distinctiveness | Generic tutorial clone | Common project with minor variation | Specific problem/method | Clearly differentiated problem or approach |
| Target-role relevance | Unrelated | Loosely related | Directly relevant | Strong fit across stated roles |
| Evidence and metrics | None | Claim without context | Contextual result or artifact | Reproducible/contextual metrics and evidence |
| Completeness | Incomplete | Partial prototype | Finished core workflow | Polished, testable, documented end-to-end work |
| Production/deployment maturity | No runnable artifact | Local-only build | Runnable demo/service or robust workflow | Deployed/operational evidence, appropriately scoped |
| Documentation quality | None | Sparse README | Clear setup/design notes | Excellent rationale, reproduction, and visuals |
| Breadth contribution | Duplicates stronger work | Some variation | Fills a portfolio gap | Strengthens ML + software-engineering coverage |

### Placement rules

- **Featured:** passes the rubric and has complete public-safe content.
- **Additional:** credible and useful, but lighter evidence, maturity, or overlap with a featured project.
- **Archived:** historically useful but no longer representative; keep off the homepage.
- **Excluded:** incomplete, unverifiable, redundant, or unsuitable to share publicly.
