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
    <div
      ref={ref}
      style={{ padding: "clamp(32px,4vw,56px) clamp(24px,3vw,40px)" }}
    >
      <div
        className="font-display"
        style={{
          fontSize: "clamp(44px, 5.5vw, 76px)",
          fontWeight: 900,
          lineHeight: 1,
          color: "var(--accent)",
        }}
      >
        {count}{suffix}
      </div>
      <div
        style={{
          marginTop: 12,
          color: "var(--muted)",
          fontSize: 13,
          letterSpacing: "0.02em",
          lineHeight: 1.55,
        }}
      >
        {label}
      </div>
    </div>
  );
}
