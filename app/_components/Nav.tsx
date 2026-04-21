"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/app/_data/content";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: "var(--px)",
          borderBottom: "1px solid var(--border)",
          background: "rgba(7,7,7,0.92)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className="font-display" style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em" }}>
            ФОЛК ТЕХ
          </span>
          <span className="glow-dot" />
        </div>

        <div className="hidden md:flex" style={{ alignItems: "center", gap: 40 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-mono-custom hover-text"
              style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.06em" }}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#контакт"
          className="hidden md:flex font-display hover-opacity"
          style={{
            alignItems: "center",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
            background: "var(--accent)",
            color: "var(--bg)",
            padding: "10px 22px",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
        >
          КОНСУЛЬТАЦИЯ
        </a>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 6 }}
        >
          <div style={{ width: 24, height: 2, background: "currentColor", transition: "transform 0.25s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <div style={{ width: 24, height: 2, background: "currentColor", transition: "opacity 0.25s", opacity: menuOpen ? 0 : 1 }} />
          <div style={{ width: 24, height: 2, background: "currentColor", transition: "transform 0.25s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            background: "var(--bg)",
            paddingTop: 64,
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-display"
              style={{ fontSize: 32, fontWeight: 700, color: "var(--text)", textDecoration: "none" }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
