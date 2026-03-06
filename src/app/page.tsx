import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import ClientSections from "./ClientSections";

export default function Home() {
  return (
    <>
      {/* ── Sticky navbar (appears on scroll) ── */}
      <Navbar />

      {/* ── Main content ── */}
      <main style={{ position: "relative", zIndex: 1 }}>
        {/* SECTION 1 — Hero */}
        <HeroSection />
        <SectionDivider id="div-1" />
        {/* Client-only sections */}
        <ClientSections />
      </main>
    </>
  );
}
