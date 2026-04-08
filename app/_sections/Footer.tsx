export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "clamp(20px,3vw,32px) 0" }}>
      <div
        className="container"
        style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span className="font-display" style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.02em" }}>ФОЛК ТЕХ</span>
          <span className="hidden md:inline font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>
            / ИИ-РАЗРАБОТКА ДЛЯ РЕАЛЬНОГО БИЗНЕСА
          </span>
        </div>
        <span className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.06em" }}>
          © {new Date().getFullYear()} ФОЛК ТЕХ
        </span>
      </div>
    </footer>
  );
}
