"use client";

import { ReasonCard } from "@/app/_components/ReasonCard";
import { ANIMATION_DELAYS, REASONS } from "@/app/_data/content";

export function WhyNowSection() {
  return (
    <section
      id="whynow"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "var(--section-py) 0",
      }}
    >
      <div className="container">
        <div style={{ marginBottom: "clamp(48px,6vw,80px)" }}>
          <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 16 }}>
            {"// ПОЧЕМУ СЕЙЧАС"}
          </div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.05 }}
          >
            Момент, который нельзя{" "}
            <span style={{ WebkitTextStroke: "1.5px var(--muted2)", color: "transparent" }}>упустить</span>
          </h2>
        </div>
        <div
          className="md:grid-cols-2"
          style={{ display: "grid", gap: 1, background: "var(--border)", gridTemplateColumns: "1fr" }}
        >
          {REASONS.map((r, i) => (
            <ReasonCard key={r.title} {...r} delay={ANIMATION_DELAYS[i] ?? "d100"} />
          ))}
        </div>
      </div>
    </section>
  );
}
