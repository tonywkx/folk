"use client";

import { useReveal } from "@/app/_hooks/useReveal";
import { useState, useRef, useEffect } from "react";

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

const CASES = [
  {
    tag: "01 / ВЕБ-ПЛАТФОРМА",
    title: "Платформа заказа 3D-фигурок по рисункам",
    desc: "Мастера принимали заказы через мессенджеры вручную — без структуры, с потерями заявок и неполными данными от клиентов.",
    challenges: [
      "Заказы терялись в переписке без структуры",
      "Клиенты не знали как описать желаемый результат",
      "Ручная обработка каждой заявки занимала 15–20 минут",
    ],
    steps: [
      { num: "01", title: "Canvas-редактор", desc: "Ребёнок рисует скетч прямо в браузере на любом устройстве." },
      { num: "02", title: "Параметры заказа", desc: "Размер, покраска, категория — выбор в один клик без текста." },
      { num: "03", title: "Edge Function", desc: "Supabase обрабатывает и хранит заказ без отдельного сервера." },
      { num: "04", title: "Telegram-уведомление", desc: "Оператор получает фото + все данные мгновенно." },
    ],
    results: [
      { value: "<1 мин", label: "от рисунка\nдо заявки оператору" },
      { value: "0", label: "потерянных заказов\nс момента запуска" },
    ],
  },
  {
    tag: "02 / МОБИЛЬНАЯ РАЗРАБОТКА",
    title: "Мобильное приложение для выездной службы",
    desc: "Крупная корпоративная структура. Распределённая полевая команда, юридически значимые документы, строгие требования к ИБ.",
    challenges: [
      "Акты вручную — до часа на документ",
      "Свободные формулировки и юридические риски",
      "Ручной перенос данных в корпоративные системы",
    ],
    steps: [
      { num: "01", title: "Геолокация", desc: "Адрес и данные объекта подтягиваются автоматически." },
      { num: "02", title: "Голосовой ввод", desc: "ИИ переводит речь в нормативный формат документа." },
      { num: "03", title: "Фото и формы", desc: "Фиксация параметров на месте без свободного ввода." },
      { num: "04", title: "Синхронизация", desc: "PDF по шаблону — и автоматическая выгрузка в системы." },
    ],
    results: [
      { value: "87%", label: "сокращение времени\nна оформление" },
      { value: "6 нед", label: "от встречи\nдо рабочего MVP" },
    ],
  },
] as const;

function CaseSlider() {
  const [active, setActive] = useState(0);
  const [animDir, setAnimDir] = useState<"left" | "right">("right");
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = (idx: number) => {
    if (idx === active) return;
    const dir = idx > active ? "right" : "left";
    setAnimDir(dir);
    setVisible(false);
    timerRef.current = setTimeout(() => {
      setActive(idx);
      setVisible(true);
    }, 260);
  };

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const c = CASES[active];

  return (
    <div>
      {/* Табы */}
      <div style={{
        display: "flex",
        gap: 1,
        background: "var(--border)",
        marginBottom: 1,
      }}>
        {CASES.map((item, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            style={{
              flex: 1,
              padding: "clamp(16px,2vw,24px) clamp(20px,2.5vw,32px)",
              background: active === i ? "var(--bg2)" : "var(--bg)",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              transition: "background 0.2s",
              borderTop: active === i ? "2px solid var(--accent)" : "2px solid transparent",
              position: "relative",
            }}
          >
            <div className="font-mono-custom" style={{
              fontSize: 10,
              letterSpacing: "0.12em",
              color: active === i ? "var(--accent)" : "var(--muted)",
              marginBottom: 6,
              transition: "color 0.2s",
            }}>
              {item.tag}
            </div>
            <div className="font-display" style={{
              fontSize: "clamp(12px,1.5vw,15px)",
              fontWeight: 700,
              color: active === i ? "var(--text)" : "var(--muted)",
              lineHeight: 1.3,
              transition: "color 0.2s",
            }}>
              {item.title}
            </div>
          </button>
        ))}
      </div>

      {/* Контент */}
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0)"
          : animDir === "right" ? "translateX(24px)" : "translateX(-24px)",
        transition: "opacity 0.26s ease, transform 0.26s ease",
      }}>
        {/* Описание */}
        <div style={{
          padding: "clamp(24px,3vw,40px)",
          background: "var(--bg2)",
          marginBottom: 1,
        }}>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8, maxWidth: 560 }}>
            {c.desc}
          </p>
        </div>

        {/* Проблема + Решение */}
        <div
          className="lg:grid-cols-2"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 1, background: "var(--border)", marginBottom: 1 }}
        >
          <div style={{ padding: "clamp(24px,3vw,36px)", background: "var(--bg2)" }}>
            <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.12em", marginBottom: 20 }}>
              ПРОБЛЕМА
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {c.challenges.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                  <span style={{ color: "var(--accent)", marginTop: 3, flexShrink: 0 }}>×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ padding: "clamp(24px,3vw,36px)", background: "var(--bg2)", borderTop: "2px solid var(--accent)" }}>
            <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.12em", marginBottom: 24 }}>
              РЕШЕНИЕ
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(16px,2vw,28px)" }}>
              {c.steps.map((step) => (
                <div key={step.num}>
                  <div className="font-display" style={{ fontSize: 22, fontWeight: 900, color: "var(--muted2)", marginBottom: 6, lineHeight: 1 }}>
                    {step.num}
                  </div>
                  <div className="font-display" style={{ fontSize: 12, fontWeight: 700, marginBottom: 5 }}>{step.title}</div>
                  <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Результаты */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--border)" }}>
          {c.results.map((r) => (
            <div
              key={r.label}
              style={{ padding: "clamp(20px,2.5vw,36px)", background: "var(--bg2)" }}
            >
              <div className="font-display" style={{
                fontSize: "clamp(28px,3.5vw,48px)",
                fontWeight: 900,
                color: "var(--accent)",
                lineHeight: 1,
                marginBottom: 8,
              }}>
                {r.value}
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, whiteSpace: "pre-line" }}>
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Навигация */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "clamp(16px,2vw,24px) clamp(24px,3vw,40px)",
        borderTop: "1px solid var(--border)",
        marginTop: 1,
      }}>
        <div style={{ display: "flex", gap: 8 }}>
          {CASES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: active === i ? 28 : 6,
                height: 6,
                borderRadius: 3,
                background: active === i ? "var(--accent)" : "var(--muted2)",
                border: "none",
                cursor: "pointer",
                transition: "width 0.3s ease, background 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: 1 }}>
          <button
            onClick={() => go((active - 1 + CASES.length) % CASES.length)}
            style={{
              width: 40, height: 40,
              background: "var(--bg3)",
              border: "1px solid var(--border2)",
              color: "var(--muted)",
              cursor: "pointer",
              fontSize: 16,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--muted)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border2)"; }}
          >
            ←
          </button>
          <button
            onClick={() => go((active + 1) % CASES.length)}
            style={{
              width: 40, height: 40,
              background: "var(--bg3)",
              border: "1px solid var(--border2)",
              color: "var(--muted)",
              cursor: "pointer",
              fontSize: 16,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--muted)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border2)"; }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export function CaseSection() {
  return (
    <section id="кейс" style={{ padding: "var(--section-py) 0", borderTop: "1px solid var(--border)" }}>
      <div className="container">

        <RevealDiv delay="d100" style={{ marginBottom: "clamp(48px,6vw,80px)" }}>
          <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 16 }}>
            {"// КЕЙСЫ"}
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
            <h2 className="font-display" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Реальные проекты,<br />
              <span style={{ color: "var(--accent)" }}>реальные результаты</span>
            </h2>
          </div>
        </RevealDiv>

        <RevealDiv delay="d200">
          <CaseSlider />
        </RevealDiv>

      </div>
    </section>
  );
}
