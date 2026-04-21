import { Stat } from "@/app/_components/Stat";
import { STATS } from "@/app/_data/content";

export function StatsSection() {
  return (
    <section>
      <div className="container">
        <div className="stats-grid" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          {STATS.map((s, i) => (
            <div key={s.label} className="stats-cell" data-index={i}>
              <Stat {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
