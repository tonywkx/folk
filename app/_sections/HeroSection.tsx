"use client";

import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="grid-bg"
      style={{ minHeight: "100vh", paddingTop: 64, display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <div
        className="anim-glow"
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,255,78,0.05) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="container"
        style={{ paddingTop: "clamp(60px,8vh,120px)", paddingBottom: "clamp(60px,8vh,120px)", position: "relative" }}
      >
        <div
          className="op0 anim-fade-in visible"
          style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40, animationDelay: "0.05s" }}
        >
          <span className="glow-dot" />
          <span className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em" }}>
            ЗАКАЗНАЯ AI-РАЗРАБОТКА
          </span>
        </div>

        <h1
          className="op0 anim-fade-up d100 visible font-display"
          style={{ fontSize: "clamp(48px, 8.5vw, 112px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em", maxWidth: 1000 }}
        >
          ИИ, <span style={{ color: "var(--accent)" }}>который</span>
          <br />
          работает,
          <br />
          <span style={{ WebkitTextStroke: "1.5px var(--muted2)", color: "transparent" }}>а не впечатляет</span>
        </h1>

        <div className="accent-line" style={{ width: 80, marginTop: 36, marginBottom: 36 }} />

        <p
          className="op0 anim-fade-up d300 visible"
          style={{ fontSize: "clamp(16px, 1.6vw, 20px)", color: "var(--muted)", maxWidth: 520, lineHeight: 1.8 }}
        >
          Разрабатываем ИИ-системы для госсектора и инфраструктурных компаний. Виртуальные сотрудники,
          компьютерное зрение, автоматизация полевой документации — всё работает в вашем контуре.
        </p>

        <div
          className="op0 anim-fade-up d500 visible"
          style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 48 }}
        >
          <a
            href="#услуги"
            className="font-display"
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.06em",
              background: "var(--accent)",
              color: "var(--bg)",
              padding: "16px 32px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            НАШИ УСЛУГИ <ArrowRight size={14} />
          </a>
          <a
            href="#контакт"
            className="font-display"
            style={{
              fontSize: 12,
              letterSpacing: "0.06em",
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border2)",
              padding: "16px 32px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.color = "var(--text)"; }}
          >
            ОБСУДИТЬ ПРОЕКТ
          </a>
        </div>

        <div
          className="op0 anim-fade-in d700 visible"
          style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 80, color: "var(--muted)", fontSize: 11, letterSpacing: "0.1em" }}
        >
          <ChevronDown size={14} style={{ animation: "float 2.5s ease-in-out infinite" }} />
          <span className="font-mono-custom">ПРОКРУТИТЕ ВНИЗ</span>
        </div>
      </div>
    </section>
  );
}
