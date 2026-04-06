"use client";

import { ArrowRight, ChevronDown, ExternalLink, Mail, Phone } from "lucide-react";

import { Nav } from "@/app/_components/Nav";
import { Stat } from "@/app/_components/Stat";
import { ServiceCard } from "@/app/_components/ServiceCard";
import { ReasonCard } from "@/app/_components/ReasonCard";
import { StepItem } from "@/app/_components/StepItem";
import { CheckItem } from "@/app/_components/CheckItem";
import { ANIMATION_DELAYS, CHECKS, REASONS, SERVICES, STATS, STEPS } from "@/app/_data/content";

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="grid-bg"
        style={{ minHeight: "100vh", paddingTop: 64, display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <div
          className="anim-glow"
          style={{
            position: "absolute",
            width: 800,
            height: 800,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,255,78,0.05) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="container"
          style={{ paddingTop: "clamp(60px,8vh,120px)", paddingBottom: "clamp(60px,8vh,120px)", position: "relative" }}
        >
          <div
            className="op0 anim-fade-in visible"
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40, animationDelay: "0.05s" }}
          >
            <span className="glow-dot" />
            <span className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em" }}>
              ЗАКАЗНАЯ AI-РАЗРАБОТКА / МОСКВА
            </span>
          </div>

          <h1
            className="op0 anim-fade-up d100 visible font-display"
            style={{ fontSize: "clamp(48px, 8.5vw, 112px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em", maxWidth: 1000 }}
          >
            ИИ, <span style={{ color: "var(--accent)" }}>который</span>
            <br />
            работает,
            <br />
            <span style={{ WebkitTextStroke: "1.5px var(--muted2)", color: "transparent" }}>а не впечатляет</span>
          </h1>

          <div className="accent-line" style={{ width: 80, marginTop: 36, marginBottom: 36 }} />

          <p
            className="op0 anim-fade-up d300 visible"
            style={{ fontSize: "clamp(16px, 1.6vw, 20px)", color: "var(--muted)", maxWidth: 520, lineHeight: 1.8 }}
          >
            Разрабатываем ИИ-системы для госсектора и инфраструктурных компаний. Виртуальные сотрудники,
            компьютерное зрение, автоматизация полевой документации — всё работает в вашем контуре.
          </p>

          <div
            className="op0 anim-fade-up d500 visible"
            style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 48 }}
          >
            <a
              href="#услуги"
              className="font-display"
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.06em",
                background: "var(--accent)",
                color: "var(--bg)",
                padding: "16px 32px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              НАШИ УСЛУГИ <ArrowRight size={14} />
            </a>
            <a
              href="#контакт"
              className="font-display"
              style={{
                fontSize: 12,
                letterSpacing: "0.06em",
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--border2)",
                padding: "16px 32px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.color = "var(--text)"; }}
            >
              ОБСУДИТЬ ПРОЕКТ
            </a>
          </div>

          <div
            className="op0 anim-fade-in d700 visible"
            style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 80, color: "var(--muted)", fontSize: 11, letterSpacing: "0.1em" }}
          >
            <ChevronDown size={14} style={{ animation: "float 2.5s ease-in-out infinite" }} />
            <span className="font-mono-custom">ПРОКРУТИТЕ ВНИЗ</span>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ overflow: "hidden", padding: "18px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="anim-marquee" style={{ display: "flex", whiteSpace: "nowrap" }}>
          {[0, 1].map((idx) => (
            <span key={idx} style={{ display: "flex" }} aria-hidden={idx > 0}>
              {["Виртуальные сотрудники", "Компьютерное зрение", "Автоматизация документов", "Речь в текст", "Интеграция с СЭД", "On-premise LLM", "Полевая документация", "Контроль безопасности", "Мосводоканал"].map((t) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center" }}>
                  <span className="font-mono-custom" style={{ padding: "0 32px", fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em" }}>{t}</span>
                  <span style={{ color: "var(--accent)", fontSize: 18, lineHeight: 1 }}>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section>
        <div className="container">
          <div
            className="md:grid-cols-4"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", borderBottom: "1px solid var(--border)" }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.suffix}
                style={{
                  borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                }}
                className={i < 3 ? "md:border-r" : ""}
              >
                <Stat {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
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
                {/* // УСЛУГИ */}
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
              Три направления, каждое — решённая задача, а не концепция. Внедрено в реальные корпоративные инфраструктуры.
            </p>
          </div>
          <div
            className="md:grid-cols-3"
            style={{ display: "grid", gap: 1, background: "var(--border)", gridTemplateColumns: "1fr" }}
          >
            {SERVICES.map((s) => (
              <ServiceCard key={s.tag} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NOW ── */}
      <section
        id="whynow"
        style={{
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "var(--section-py) 0",
        }}
      >
        <div className="container">
          <div style={{ marginBottom: "clamp(48px,6vw,80px)" }}>
            <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 16 }}>
              {"// ПОЧЕМУ СЕЙЧАС"}
            </div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              Момент, который нельзя{" "}
              <span style={{ WebkitTextStroke: "1.5px var(--muted2)", color: "transparent" }}>упустить</span>
            </h2>
          </div>
          <div
            className="md:grid-cols-2"
            style={{ display: "grid", gap: 1, background: "var(--border)", gridTemplateColumns: "1fr" }}
          >
            {REASONS.map((r, i) => (
              <ReasonCard key={r.title} {...r} delay={ANIMATION_DELAYS[i] ?? "d100"} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section id="подход" style={{ padding: "var(--section-py) 0" }}>
        <div className="container">
          <div
            className="lg:grid-cols-2"
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(48px,6vw,96px)" }}
          >
            <div>
              <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 16 }}>
                {"// ПОДХОД"}
              </div>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 24 }}
              >
                Как мы
                <br />
                <span style={{ color: "var(--accent)" }}>запускаем</span>
              </h2>
              <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 440, lineHeight: 1.8 }}>
                Никаких полугодовых согласований. Мы запускаем рабочий прототип за 6 недель, затем итеративно
                добавляем всё остальное на основе реальной обратной связи.
              </p>
              <div
                style={{
                  marginTop: 40,
                  padding: "clamp(20px,3vw,32px)",
                  border: "1px solid var(--border)",
                  background: "var(--bg2)",
                }}
              >
                <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 12 }}>
                  РЕАЛЬНЫЙ КЕЙС
                </div>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8 }}>
                  Внедрили ИИ-систему мониторинга в{" "}
                  <span style={{ color: "var(--text)" }}>Мосводоканале</span> быстрее, чем крупные корпорации
                  запускали свои презентации. MVP — за 7 недель, пилот с живыми данными — ещё через 5.
                </p>
              </div>
            </div>
            <div>
              {STEPS.map((s, i) => (
                <StepItem key={s.num} {...s} delay={ANIMATION_DELAYS[i] ?? "d100"} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="онас"
        style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "var(--section-py) 0" }}
      >
        <div className="container">
          <div
            className="lg:grid-cols-2"
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(48px,6vw,96px)", alignItems: "center" }}
          >
            <div>
              <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 16 }}>
                {"// О НАС"}
              </div>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: 24 }}
              >
                Небольшая
                <br />
                команда с
                <br />
                <span style={{ color: "var(--accent)" }}>большим</span> толком
              </h2>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, maxWidth: 440 }}>
                Мы не корпорация. Поэтому не тратим ваши деньги на бюрократию и менеджеров менеджеров.
                Каждый человек в команде — это руки, которые делают продукт.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {CHECKS.map((item, i) => (
                <CheckItem key={item} item={item} delay={ANIMATION_DELAYS[i] ?? "d100"} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="контакт"
        style={{ position: "relative", padding: "clamp(80px,12vw,160px) 0", overflow: "hidden", borderTop: "1px solid var(--border)" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, rgba(212,255,78,0.04) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em", marginBottom: 24 }}>
            {"// НАЧАТЬ ПРОЕКТ"}
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px,6.5vw,88px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              maxWidth: 860,
              margin: "0 auto 24px",
            }}
          >
            Расскажите задачу.
            <br />
            Мы скажем <span style={{ color: "var(--accent)" }}>за сколько</span> решим.
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 460, lineHeight: 1.8, margin: "0 auto 56px" }}>
            Бесплатная консультация. Честная оценка сроков и стоимости. Никаких КП на 40 страниц —
            только конкретный разговор о вашей задаче.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 56 }}>
            <a
              href="mailto:hello@tolk.dev"
              className="font-display"
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.06em",
                background: "var(--accent)",
                color: "var(--bg)",
                padding: "18px 36px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <Mail size={15} /> НАПИСАТЬ НА ПОЧТУ
            </a>
            <a
              href="https://t.me/tolk_ai"
              className="font-display"
              style={{
                fontSize: 12,
                letterSpacing: "0.06em",
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--border2)",
                padding: "17px 35px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.color = "var(--text)"; }}
            >
              <ExternalLink size={14} /> TELEGRAM
            </a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, color: "var(--muted)", fontSize: 13 }}>
            <a
              href="mailto:hello@tolk.dev"
              style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              <Mail size={13} /> hello@tolk.dev
            </a>
            <a
              href="tel:+74951234567"
              style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              <Phone size={13} /> +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "clamp(20px,3vw,32px) 0" }}>
        <div
          className="container"
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className="font-display" style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.02em" }}>ТОЛК</span>
            <span className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>
              / ИИ-РАЗРАБОТКА ДЛЯ РЕАЛЬНОГО БИЗНЕСА
            </span>
          </div>
          <span className="font-mono-custom" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} ТОЛК
          </span>
        </div>
      </footer>
    </div>
  );
}
