"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const waveRef     = useRef<SVGPathElement>(null);
  const wordsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 0.6,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );

      if (waveRef.current) {
        const len = waveRef.current.getTotalLength();
        gsap.set(waveRef.current, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(waveRef.current, {
          strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
        });
      }

      const words = wordsRef.current?.querySelectorAll("p");
      if (words) {
        gsap.fromTo(
          words,
          { opacity: 0, y: 12 },
          {
            opacity: 1, y: 0, stagger: 0.05, duration: 0.4,
            scrollTrigger: { trigger: wordsRef.current, start: "top 75%", once: true },
          }
        );
      }
    };
    loadGSAP();
  }, []);

  return (
  <section
    id="about"
    ref={sectionRef}
    className="relative py-24 px-4"
    style={{ zIndex: 1, background: "rgba(5, 0, 8, 0.9)", opacity: 0 }}
  >
    <div className="max-w-7xl mx-auto">
      
      {/* Section title */}
      <div className="text-center mb-16">
        <span className="font-vt323 tracking-widest block mb-2" style={{ fontSize: "1.2rem", color: "#ff00ff", opacity: 0.7 }}>
          {"// SECTION 02"}
        </span>
        <h2 className="font-pixel" style={{ fontSize: "clamp(0.8rem, 2.5vw, 1.5rem)", color: "#ff00ff" }}>
          THE EXPERIMENT
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
        
        {/* LEFT: The PNG Image (1/4th width) */}
        <div className="flex justify-center items-start h-full">
          <div className="relative w-full h-full lg:h-[600px]">
            <Image 
              src="/images/standingCat.png"
              alt="Quantum Experiment"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT: Wave and Content (3/4ths width) */}
        <div className="lg:col-span-3 flex flex-col gap-12">
          
          {/* Wave */}
          <div
            className="relative w-full"
            style={{
              background: "rgba(0,255,255,0.03)",
              border: "1px solid rgba(0,255,255,0.1)",
              padding: "2rem",
              maxWidth: "100%",
            }}
          >
            <p className="font-pixel text-center mb-4" style={{ fontSize: "0.8rem", color: "#ff00ff", opacity: 0.7 }}>
              SUPERPOSITION WAVE
            </p>
            <svg viewBox="0 0 1200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                ref={waveRef}
                d="M 0 80 C 150 40, 300 40, 450 80 S 600 120, 750 80 S 900 40, 1050 80 S 1200 120, 1200 80"
                stroke="#ff00ff" strokeWidth="4" fill="none"
                style={{ filter: "drop-shadow(0 0 12px rgba(255,0,255,0.7))" }}
              />
              <path
                d="M 0 80 C 150 120, 300 120, 450 80 S 600 40, 750 80 S 900 120, 1050 80 S 1200 40, 1200 80"
                stroke="#00ffff" strokeWidth="2" strokeDasharray="16 12" fill="none"
                style={{ filter: "drop-shadow(0 0 8px rgba(0,255,255,0.5))" }}
                className="wave-flow"
              />
            </svg>
          </div>

          {/* Content Text */}
          <div ref={wordsRef} className="font-rajdhani leading-relaxed">
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#c8c8e8", lineHeight: 1.8 }}>
              Schrodinger Hackathon is a 36-hour national-level, student-led event designed to simulate real-world product development. Teams will ideate, prototype, test, and pitch innovative solutions within a single weekend.
            </p>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "#e8e8ff", marginTop: '2rem', opacity: 0.85 }}>
              Participants will gain hands-on experience, network with industry leaders, and compete for exciting prizes. Join us and be part of the quantum leap in innovation!
            </p>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#ff00ff", marginTop: '1.5rem', fontWeight: 600 }}>
              <span style={{ color: '#00ffff' }}>All states exist simultaneously—</span> Welcome to the superposition of innovation.
            </p>
          </div>

        </div>
      </div>

{/* ── PROBLEM STATEMENTS ── */}
<div className="mt-8">

  {/* Sub-header */}
  <div className="text-center mb-6">
    <span className="font-vt323 tracking-widest block mb-1" style={{ fontSize: "1.1rem", color: "#00ffff", opacity: 0.7 }}>
      {"// COLLAPSED STATES"}
    </span>
    <h3 className="font-pixel" style={{ fontSize: "clamp(0.7rem, 2vw, 1.2rem)", color: "#00ffff" }}>
      THEME OF Schrodinger's Cat
    </h3>
  </div>

  {/* Cards + Cat Image layout */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">

    {/* LEFT: Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        className="relative p-6 flex flex-col gap-4"
        style={{
          background: "rgba(0,255,255,0.04)",
          border: "1px solid rgba(0,255,255,0.2)",
          transition: "border-color 0.3s, background 0.3s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,0,255,0.6)";
          (e.currentTarget as HTMLDivElement).style.background = "rgba(255,0,255,0.06)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,255,0.2)";
          (e.currentTarget as HTMLDivElement).style.background = "rgba(0,255,255,0.04)";
        }}
      >
        <span aria-hidden style={{ position: "absolute", top: 0, left: 0, width: 18, height: 18, borderTop: "2px solid #ff00ff", borderLeft: "2px solid #ff00ff" }} />
        <span aria-hidden style={{ position: "absolute", bottom: 0, right: 0, width: 18, height: 18, borderBottom: "2px solid #ff00ff", borderRight: "2px solid #ff00ff" }} />
        <span className="font-vt323" style={{ fontSize: "0.9rem", color: "#ff00ff", opacity: 0.6 }}>PS_01</span>
        <h4 className="font-pixel" style={{ fontSize: "clamp(0.55rem, 1.5vw, 0.8rem)", color: "#ff00ff", lineHeight: 1.6 }}>
          SOLUTIONS &amp; ADVANCEMENTS IN BUSINESS
        </h4>
        <p className="font-rajdhani" style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)", color: "#c8c8e8", lineHeight: 1.7, opacity: 0.9 }}>
          Reimagine how modern businesses operate. Build tools, platforms, or processes that drive efficiency, growth, and competitive advantage.
        </p>
        <div className="mt-auto pt-4" style={{ borderTop: "1px solid rgba(0,255,255,0.1)" }}>
          <span className="font-vt323" style={{ fontSize: "0.85rem", color: "#00ffff", opacity: 0.6 }}>[ DOMAIN: BUSINESS &amp; ENTERPRISE ]</span>
        </div>
      </div>
    </div>

    {/* RIGHT: Cat Image — flush, no extra margin */}
    <div className="relative w-full" style={{ height: "500px" }}>
      <Image
        src="/images/lyingcat.png"
        alt="Problem Statements Cat"
        fill
        className="object-contain object-center"
      />
    </div>

  </div>
</div>

{/* ── STATS ── */}
<div className="mt-16">

  {/* Scanline top border */}
  <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #ff00ff, #00ffff, #ff00ff, transparent)", marginBottom: "3rem" }} />

  <div className="flex flex-col gap-8 max-w-2xl mx-auto">

    {/* 1000+ Participants */}
    <div className="relative flex items-center gap-8 px-6 py-5"
      style={{ border: "1px solid rgba(255,0,255,0.15)", background: "rgba(255,0,255,0.03)" }}>
      <span aria-hidden style={{ position: "absolute", top: 0, left: 0, width: 12, height: 12, borderTop: "1.5px solid #ff00ff", borderLeft: "1.5px solid #ff00ff" }} />
      <span aria-hidden style={{ position: "absolute", bottom: 0, right: 0, width: 12, height: 12, borderBottom: "1.5px solid #ff00ff", borderRight: "1.5px solid #ff00ff" }} />

      <div className="relative font-pixel shrink-0" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#ff00ff", lineHeight: 1 }}>
        <span style={{ position: "absolute", top: "2px", left: "2px", color: "#00ffff", opacity: 0.3, userSelect: "none" }} aria-hidden>1000+</span>
        1000+
      </div>

      <div style={{ width: "1px", alignSelf: "stretch", background: "rgba(255,0,255,0.2)" }} />

      <div className="flex flex-col gap-1">
        <span className="font-pixel" style={{ fontSize: "clamp(0.55rem, 1.5vw, 0.75rem)", color: "#ff00ff" }}>
          CATS IN THE BOX
        </span>
        <span className="font-vt323 tracking-widest" style={{ fontSize: "1rem", color: "#c8c8e8", opacity: 0.6 }}>
          // PARTICIPANTS — ALIVE & BUILDING SIMULTANEOUSLY
        </span>
      </div>

      <span className="font-vt323 ml-auto shrink-0" style={{ fontSize: "0.8rem", color: "#ff00ff", opacity: 0.4 }}>
        CAT_01
      </span>
    </div>

    {/* 150+ Volunteers */}
    <div className="relative flex items-center gap-8 px-6 py-5"
      style={{ border: "1px solid rgba(0,255,255,0.15)", background: "rgba(0,255,255,0.03)" }}>
      <span aria-hidden style={{ position: "absolute", top: 0, left: 0, width: 12, height: 12, borderTop: "1.5px solid #00ffff", borderLeft: "1.5px solid #00ffff" }} />
      <span aria-hidden style={{ position: "absolute", bottom: 0, right: 0, width: 12, height: 12, borderBottom: "1.5px solid #00ffff", borderRight: "1.5px solid #00ffff" }} />

      <div className="relative font-pixel shrink-0" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#00ffff", lineHeight: 1 }}>
        <span style={{ position: "absolute", top: "2px", left: "2px", color: "#ff00ff", opacity: 0.3, userSelect: "none" }} aria-hidden>150+</span>
        150+
      </div>

      <div style={{ width: "1px", alignSelf: "stretch", background: "rgba(0,255,255,0.2)" }} />

      <div className="flex flex-col gap-1">
        <span className="font-pixel" style={{ fontSize: "clamp(0.55rem, 1.5vw, 0.75rem)", color: "#00ffff" }}>
          BOX KEEPERS
        </span>
        <span className="font-vt323 tracking-widest" style={{ fontSize: "1rem", color: "#c8c8e8", opacity: 0.6 }}>
          // VOLUNTEERS — GUARDING THE EXPERIMENT
        </span>
      </div>

      <span className="font-vt323 ml-auto shrink-0" style={{ fontSize: "0.8rem", color: "#00ffff", opacity: 0.4 }}>
        CAT_02
      </span>
    </div>

    {/* 30+ Judges */}
    <div className="relative flex items-center gap-8 px-6 py-5"
      style={{ border: "1px solid rgba(255,0,255,0.15)", background: "rgba(255,0,255,0.03)" }}>
      <span aria-hidden style={{ position: "absolute", top: 0, left: 0, width: 12, height: 12, borderTop: "1.5px solid #ff00ff", borderLeft: "1.5px solid #ff00ff" }} />
      <span aria-hidden style={{ position: "absolute", bottom: 0, right: 0, width: 12, height: 12, borderBottom: "1.5px solid #ff00ff", borderRight: "1.5px solid #ff00ff" }} />

      <div className="relative font-pixel shrink-0" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#ff00ff", lineHeight: 1 }}>
        <span style={{ position: "absolute", top: "2px", left: "2px", color: "#00ffff", opacity: 0.3, userSelect: "none" }} aria-hidden>30+</span>
        30+
      </div>

      <div style={{ width: "1px", alignSelf: "stretch", background: "rgba(255,0,255,0.2)" }} />

      <div className="flex flex-col gap-1">
        <span className="font-pixel" style={{ fontSize: "clamp(0.55rem, 1.5vw, 0.75rem)", color: "#ff00ff" }}>
          LID OPENERS
        </span>
        <span className="font-vt323 tracking-widest" style={{ fontSize: "1rem", color: "#c8c8e8", opacity: 0.6 }}>
          // JUDGES — WHO DECIDE IF THE CAT LIVED
        </span>
      </div>

      <span className="font-vt323 ml-auto shrink-0" style={{ fontSize: "0.8rem", color: "#ff00ff", opacity: 0.4 }}>
        CAT_03
      </span>
    </div>

  </div>

  {/* Scanline bottom border */}
  <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #00ffff, #ff00ff, #00ffff, transparent)", marginTop: "3rem" }} />

</div>

    </div>
  </section>
);
}