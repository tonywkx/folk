"use client";

import { CheckCircle } from "lucide-react";
import { useReveal } from "@/app/_hooks/useReveal";
import type { AnimDelay } from "@/app/_data/content";

interface CheckItemProps {
  item: string;
  delay: AnimDelay;
}

export function CheckItem({ item, delay }: CheckItemProps) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`op0 anim-fade-up ${delay}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "18px 24px",
        border: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      <CheckCircle size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
      <span style={{ fontSize: 14, color: "var(--text)" }}>{item}</span>
    </div>
  );
}
