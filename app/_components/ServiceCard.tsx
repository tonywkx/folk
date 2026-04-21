"use client";

import { useState } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { useReveal } from "@/app/_hooks/useReveal";
import type { AnimDelay } from "@/app/_data/content";

interface ServiceCardProps {
  icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
  items: readonly string[];
  delay: AnimDelay;
}

export function ServiceCard({ icon: Icon, tag, title, desc, items, delay }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`op0 anim-fade-up ${delay} cursor-pointer`}
      style={{
        padding: "clamp(28px,3.5vw,48px)",
        background: hovered ? "var(--bg3)" : "var(--bg2)",
        borderTop: `2px solid ${hovered ? "var(--accent)" : "transparent"}`,
        transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
          background: hovered ? "var(--accent)" : "var(--bg3)",
          border: "1px solid var(--border2)",
          transition: "background 0.3s",
          flexShrink: 0,
        }}
      >
        <Icon size={20} style={{ color: hovered ? "var(--bg)" : "var(--accent)", transition: "color 0.3s" }} />
      </div>

      <div
        className="font-mono-custom"
        style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.12em", marginBottom: 12 }}
      >
        {tag}
      </div>

      <h3
        className="font-display"
        style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}
      >
        {title}
      </h3>

      <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>{desc}</p>

      <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item) => (
          <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 13, color: "var(--text)" }}>
            <span style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }}>→</span>
            {item}
          </li>
        ))}
      </ul>

      <div
        className="font-display"
        style={{
          marginTop: 32,
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 11,
          letterSpacing: "0.08em",
          color: hovered ? "var(--accent)" : "var(--muted)",
          transition: "color 0.3s",
        }}
      >
        УЗНАТЬ БОЛЬШЕ
        <ArrowRight size={12} style={{ transform: hovered ? "translateX(4px)" : "none", transition: "transform 0.3s" }} />
      </div>
    </div>
  );
}
