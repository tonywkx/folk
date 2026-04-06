"use client";

import { useReveal } from "@/app/_hooks/useReveal";
import type { AnimDelay } from "@/app/_data/content";

interface StepItemProps {
  num: string;
  title: string;
  desc: string;
  delay: AnimDelay;
}

export function StepItem({ num, title, desc, delay }: StepItemProps) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`op0 anim-fade-up ${delay} relative`}
      style={{ padding: "clamp(24px,3vw,36px) 0", borderTop: "1px solid var(--border)" }}
    >
      <span
        className="font-display"
        style={{
          fontSize: 72,
          fontWeight: 900,
          color: "var(--border2)",
          position: "absolute",
          top: 16,
          right: 0,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {num}
      </span>
      <div
        className="font-mono-custom"
        style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.12em", marginBottom: 10 }}
      >
        ШАГ {num}
      </div>
      <h4
        className="font-display"
        style={{ fontSize: "clamp(17px, 2vw, 22px)", fontWeight: 700, marginBottom: 10, paddingRight: 80 }}
      >
        {title}
      </h4>
      <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8 }}>{desc}</p>
    </div>
  );
}
