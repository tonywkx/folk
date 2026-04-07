import { Stat } from "@/app/_components/Stat";
import { STATS } from "@/app/_data/content";

export function StatsSection() {
  return (
    <section>
      <div className="container">
        <div
          className="md:grid-cols-4"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", borderBottom: "1px solid var(--border)" }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.suffix}
              style={{
                borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                borderBottom: i < 2 ? "1px solid var(--border)" : "none",
              }}
              className={i < 3 ? "md:border-r" : ""}
            >
              <Stat {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
