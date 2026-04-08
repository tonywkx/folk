"use client";

import { useCountUp } from "@/app/_hooks/useCountUp";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
}

export function Stat({ value, suffix, label }: StatProps) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} style={{ padding: "clamp(28px,4vw,48px) clamp(20px,3vw,36px)" }}>
      <div
        className="font-display"
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 900,
          lineHeight: 1,
          color: "var(--accent)",
          marginBottom: 12,
        }}
      >
        {count}{suffix}
      </div>
      <div
        style={{
          color: "var(--muted)",
          fontSize: 13,
          letterSpacing: "0.02em",
          lineHeight: 1.6,
          whiteSpace: "pre-line",
        }}
      >
        {label}
      </div>
    </div>
  );
}
