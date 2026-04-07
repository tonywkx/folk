import { CheckItem } from "@/app/_components/CheckItem";
import { ANIMATION_DELAYS, CHECKS } from "@/app/_data/content";

export function AboutSection() {
  return (
    <section
      id="онас"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "var(--section-py) 0" }}
    >
      <div className="container">
        <div
          className="lg:grid-cols-2"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(48px,6vw,96px)", alignItems: "center" }}
        >
          <div>
            <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 16 }}>
              {"// О НАС"}
            </div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 24 }}
            >
              Небольшая
              <br />
              команда с
              <br />
              <span style={{ color: "var(--accent)" }}>большим</span> толком
            </h2>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, maxWidth: 440 }}>
              Мы не корпорация. Поэтому не тратим ваши деньги на бюрократию и менеджеров менеджеров.
              Каждый человек в команде — это руки, которые делают продукт.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {CHECKS.map((item, i) => (
              <CheckItem key={item} item={item} delay={ANIMATION_DELAYS[i] ?? "d100"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
