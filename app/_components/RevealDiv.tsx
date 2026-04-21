"use client";

import { useReveal } from "@/app/_hooks/useReveal";
import type { AnimDelay } from "@/app/_data/content";

interface RevealDivProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: AnimDelay;
}

export function RevealDiv({ children, className, style, delay = "d100" }: RevealDivProps) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`op0 anim-fade-up ${delay}${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </div>
  );
}
