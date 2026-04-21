"use client";

import { useEffect, useState } from "react";

export function CaseFloatButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const section = document.getElementById("кейс");
    if (!section) return;

    const obs = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0.1 },
    );

    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <a
      href="#кейс"
      aria-label="Посмотреть кейсы"
      style={{
        position: "fixed",
        bottom: 32,
        right: "var(--px)",
        zIndex: 49,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 20px",
        background: "rgba(7,7,7,0.88)",
        border: "1px solid var(--border2)",
        backdropFilter: "blur(20px)",
        textDecoration: "none",
        cursor: "pointer",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(12px)",
        pointerEvents: show ? "auto" : "none",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border2)";
      }}
    >
      <span className="glow-dot" />
      <span className="font-mono-custom" style={{
        fontSize: 11,
        letterSpacing: "0.1em",
        color: "var(--text)",
        whiteSpace: "nowrap",
      }}>
        КЕЙСЫ
      </span>
      <span style={{ color: "var(--accent)", fontSize: 12, lineHeight: 1 }}>↓</span>
    </a>
  );
}
