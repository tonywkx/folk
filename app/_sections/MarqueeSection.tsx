const TAGS = [
  "Виртуальные сотрудники",
  "Компьютерное зрение",
  "Автоматизация документов",
  "Речь в текст",
  "Интеграция с СЭД",
  "On-premise LLM",
  "Полевая документация",
  "Контроль безопасности",
];

export function MarqueeSection() {
  return (
    <div style={{ overflow: "hidden", padding: "18px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="anim-marquee" style={{ display: "flex", whiteSpace: "nowrap" }}>
        {[0, 1].map((idx) => (
          <span key={idx} style={{ display: "flex" }} aria-hidden={idx > 0}>
            {TAGS.map((t) => (
              <span key={t} style={{ display: "inline-flex", alignItems: "center" }}>
                <span className="font-mono-custom" style={{ padding: "0 32px", fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em" }}>{t}</span>
                <span style={{ color: "var(--accent)", fontSize: 18, lineHeight: 1 }}>·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
