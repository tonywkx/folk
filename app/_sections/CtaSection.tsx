import { ExternalLink, Mail, Phone } from "lucide-react";
import { CONTACT } from "@/app/_data/content";

export function CtaSection() {
  return (
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
            href={`mailto:${CONTACT.email}`}
            className="font-display hover-opacity"
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
          >
            <Mail size={15} /> НАПИСАТЬ НА ПОЧТУ
          </a>
          <a
            href={CONTACT.telegram}
            className="font-display hover-accent-border-color"
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
          >
            <ExternalLink size={14} /> TELEGRAM
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, color: "var(--muted)", fontSize: 13 }}>
          <a
            href={`mailto:${CONTACT.email}`}
            className="hover-text"
            style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
          >
            <Mail size={13} /> {CONTACT.email}
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="hover-text"
            style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
          >
            <Phone size={13} /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
