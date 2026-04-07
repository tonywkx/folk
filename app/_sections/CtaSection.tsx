"use client";

import { ExternalLink, Mail, Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section
      id="контакт"
      style={{ position: "relative", padding: "clamp(80px,12vw,160px) 0", overflow: "hidden", borderTop: "1px solid var(--border)" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(212,255,78,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 24 }}>
          {"// НАЧАТЬ ПРОЕКТ"}
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(36px,6.5vw,88px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            maxWidth: 860,
            margin: "0 auto 24px",
          }}
        >
          Расскажите задачу.
          <br />
          Мы скажем <span style={{ color: "var(--accent)" }}>за сколько</span> решим.
        </h2>
        <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 460, lineHeight: 1.8, margin: "0 auto 56px" }}>
          Бесплатная консультация. Честная оценка сроков и стоимости. Никаких КП на 40 страниц —
          только конкретный разговор о вашей задаче.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 56 }}>
          <a
            href="mailto:tonywk@ya.ru"
            className="font-display"
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.06em",
              background: "var(--accent)",
              color: "var(--bg)",
              padding: "18px 36px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Mail size={15} /> НАПИСАТЬ НА ПОЧТУ
          </a>
          <a
            href="https://t.me/tonywk"
            className="font-display"
            style={{
              fontSize: 12,
              letterSpacing: "0.06em",
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border2)",
              padding: "17px 35px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.color = "var(--text)"; }}
          >
            <ExternalLink size={14} /> TELEGRAM
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, color: "var(--muted)", fontSize: 13 }}>
          <a
            href="mailto:tonywk@ya.ru"
            style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <Mail size={13} /> tonywk@ya.ru
          </a>
          <a
            href="tel:+79127449001"
            style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <Phone size={13} /> +7 912 744 9001
          </a>
        </div>
      </div>
    </section>
  );
}
