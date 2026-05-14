"use client";

import { useEffect, useState } from "react";

export function CaseFloatButton() {
  const [show, setShow] = useState(false);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const section = document.getElementById("кейс");
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setShow(!isVisible);
      setPassed(rect.bottom < 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
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
      <span
        style={{
          color: "var(--accent)",
          fontSize: 12,
          lineHeight: 1,
          display: "inline-block",
          transition: "transform 0.3s ease",
          transform: passed ? "rotate(180deg)" : "none",
        }}
      >
        ↓
      </span>
    </a>
  );
}
