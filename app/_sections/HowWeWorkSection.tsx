import { StepItem } from "@/app/_components/StepItem";
import { ANIMATION_DELAYS, STEPS } from "@/app/_data/content";

export function HowWeWorkSection() {
  return (
    <section id="подход" style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        <div
          className="lg:grid-cols-2"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(48px,6vw,96px)" }}
        >
          <div>
            <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 16 }}>
              {"// ПОДХОД"}
            </div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 24 }}
            >
              Как мы
              <br />
              <span style={{ color: "var(--accent)" }}>запускаем</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 440, lineHeight: 1.8 }}>
              Никаких полугодовых согласований. Мы запускаем рабочий прототип за 6 недель, затем итеративно
              добавляем всё остальное на основе реальной обратной связи.
            </p>
          </div>
          <div>
            {STEPS.map((s, i) => (
              <StepItem key={s.num} {...s} delay={ANIMATION_DELAYS[i] ?? "d100"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
