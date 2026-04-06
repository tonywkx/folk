"use client";

import { useState } from "react";
import { type LucideIcon } from "lucide-react";
import { useReveal } from "@/app/_hooks/useReveal";
import type { AnimDelay } from "@/app/_data/content";

interface ReasonCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay: AnimDelay;
}

export function ReasonCard({ icon: Icon, title, desc, delay }: ReasonCardProps) {
  const [hov, setHov] = useState(false);
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`op0 anim-fade-up ${delay}`}
      style={{
        padding: "clamp(28px,3.5vw,48px)",
        background: hov ? "var(--bg3)" : "var(--bg2)",
        transition: "background 0.3s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        style={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
          border: "1px solid var(--border2)",
          background: "var(--bg)",
          flexShrink: 0,
        }}
      >
        <Icon size={18} style={{ color: "var(--accent)" }} />
      </div>
      <h4 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{title}</h4>
      <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8 }}>{desc}</p>
    </div>
  );
}
