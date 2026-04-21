import { Nav } from "@/app/_components/Nav";
import { CaseFloatButton } from "@/app/_components/CaseFloatButton";
import { HeroSection } from "@/app/_sections/HeroSection";
import { MarqueeSection } from "@/app/_sections/MarqueeSection";
import { StatsSection } from "@/app/_sections/StatsSection";
import { ServicesSection } from "@/app/_sections/ServicesSection";
import { HowWeWorkSection } from "@/app/_sections/HowWeWorkSection";
import { AboutSection } from "@/app/_sections/AboutSection";
import { CaseSection } from "@/app/_sections/CaseSection";
import { CtaSection } from "@/app/_sections/CtaSection";
import { Footer } from "@/app/_sections/Footer";

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <ServicesSection />
      <HowWeWorkSection />
      <CaseSection />
      <AboutSection />
      <CtaSection />
      <Footer />
      <CaseFloatButton />
    </div>
  );
}
