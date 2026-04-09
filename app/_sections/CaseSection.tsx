"use client";

import { useReveal } from "@/app/_hooks/useReveal";

const CHALLENGES = [
  "Акты вручную — до часа на документ",
  "Свободные формулировки и юридические риски",
  "Ручной перенос данных в корпоративные системы",
];

const SOLUTION_STEPS = [
  { num: "01", title: "Геолокация", desc: "Адрес и данные объекта подтягиваются автоматически." },
  { num: "02", title: "Голосовой ввод", desc: "ИИ переводит речь в нормативный формат документа." },
  { num: "03", title: "Фото и формы", desc: "Фиксация параметров на месте без свободного ввода." },
  { num: "04", title: "Синхронизация", desc: "PDF по шаблону — и автоматическая выгрузка в системы." },
];

const RESULTS = [
  { value: "87%", label: "сокращение времени\nна оформление" },
  { value: "6 нед", label: "от встречи\nдо рабочего MVP" },
];

function RevealDiv({ children, className, style, delay }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: string;
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`op0 anim-fade-up ${delay ?? "d100"} ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}

export function CaseSection() {
  return (
    <section id="кейс" style={{ padding: "var(--section-py) 0", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        {/* Заголовок */}
        <RevealDiv delay="d100">
          <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 16 }}>
            {"// КЕЙС"}
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 32, marginBottom: "clamp(48px,6vw,80px)" }}>
            <h2 className="font-display" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Мобильное приложение<br />
              для <span style={{ color: "var(--accent)" }}>выездной службы</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 360, lineHeight: 1.8 }}>
              Крупная корпоративная структура. Распределённая полевая команда, юридически значимые документы, строгие требования к ИБ.
            </p>
          </div>
        </RevealDiv>

        {/* Проблема + Решение */}
        <div className="lg:grid-cols-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 1, background: "var(--border)", marginBottom: 1 }}>
          <RevealDiv delay="d200" style={{ padding: "clamp(28px,3.5vw,48px)", background: "var(--bg2)" }}>
            <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.12em", marginBottom: 20 }}>
              ПРОБЛЕМА
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {CHALLENGES.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                  <span style={{ color: "var(--accent)", marginTop: 3, flexShrink: 0 }}>×</span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealDiv>

          <RevealDiv delay="d300" style={{ padding: "clamp(28px,3.5vw,48px)", background: "var(--bg2)", borderTop: "2px solid var(--accent)" }}>
            <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.12em", marginBottom: 24 }}>
              РЕШЕНИЕ
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px,2.5vw,32px)" }}>
              {SOLUTION_STEPS.map((step) => (
                <div key={step.num}>
                  <div className="font-display" style={{ fontSize: 24, fontWeight: 900, color: "var(--muted2)", marginBottom: 8, lineHeight: 1 }}>
                    {step.num}
                  </div>
                  <div className="font-display" style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{step.title}</div>
                  <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </RevealDiv>
        </div>

        {/* Результаты */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", background: "var(--border)", gap: 1 }}>
          {RESULTS.map((r, i) => (
            <RevealDiv
              key={r.label}
              delay={["d100", "d200"][i] as string}
              style={{ padding: "clamp(24px,3vw,40px)", background: "var(--bg2)" }}
            >
              <div className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 900, color: "var(--accent)", lineHeight: 1, marginBottom: 10 }}>
                {r.value}
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, whiteSpace: "pre-line" }}>
                {r.label}
              </div>
            </RevealDiv>
          ))}
        </div>

      </div>
    </section>
  );
}
