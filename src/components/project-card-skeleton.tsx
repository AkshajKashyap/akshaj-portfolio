type ProjectCardSkeletonProps = {
  featured?: boolean;
  index: number;
};

export function ProjectCardSkeleton({ featured = false, index }: ProjectCardSkeletonProps) {
  return (
    <article className={`rounded-lg border border-dashed border-border bg-surface ${featured ? "grid overflow-hidden md:grid-cols-12" : "p-5"}`}>
      {featured ? <div className="order-2 aspect-video bg-surface-subtle md:order-none md:col-span-5" aria-hidden="true" /> : null}
      <div className={featured ? "p-5 md:col-span-7 md:p-8" : ""}>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-text-muted">{featured ? "Featured project" : "Additional project"} {String(index).padStart(2, "0")}</p>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-text-strong">[Project title pending verification]</h3>
        <p className="mt-3 text-sm leading-6 text-text">[Project summary pending verification]</p>
        {featured ? <p className="mt-4 text-sm leading-6 text-text"><span className="font-semibold text-text-strong">Evidence: </span>[Verified result pending]</p> : null}
        <p className="mt-5 text-xs font-medium text-text-muted">Technologies and links pending verification</p>
      </div>
    </article>
  );
}
