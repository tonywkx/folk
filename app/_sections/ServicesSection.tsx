"use client";

import { ServiceCard } from "@/app/_components/ServiceCard";
import { SERVICES } from "@/app/_data/content";

export function ServicesSection() {
  return (
    <section id="услуги" style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: "clamp(48px,6vw,80px)",
          }}
        >
          <div>
            <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 16 }}>
              {"// УСЛУГИ"}
            </div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              Что мы
              <br />
              <span style={{ color: "var(--accent)" }}>делаем</span>
            </h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 360, lineHeight: 1.8 }}>
            От заказной разработки до ИИ-автоматизации — под конкретный процесс среднего бизнеса,
            без корпоративных сроков и лишних итераций.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          style={{ gap: 1, background: "var(--border)" }}
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.tag} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
