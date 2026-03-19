"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// ── Floating particle positions (seeded for SSR consistency) ──
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left:     `${((i * 17 + 7) % 100)}%`,
  top:      `${80 + ((i * 13) % 18)}%`,
  color:    i % 3 === 0 ? "#ff6b00" : i % 3 === 1 ? "#00ffff" : "#ff00ff",
  duration: `${5 + ((i * 3) % 8)}s`,
  delay:    `-${(i * 1.2) % 8}s`,
  size:     i % 4 === 0 ? 8 : 4,
}));

export default function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const missionRef  = useRef<HTMLHeadingElement>(null);
  const catRef      = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const prizeRef    = useRef<HTMLDivElement>(null);
  const btnRef      = useRef<HTMLAnchorElement>(null);
  const schroRef    = useRef<HTMLHeadingElement>(null);
  const dividerRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { TextPlugin } = await import("gsap/TextPlugin");
      gsap.registerPlugin(TextPlugin);

      const canvas = document.getElementById("starfield-canvas");
      if (canvas) gsap.to(canvas, { opacity: 1, duration: 1.2, ease: "power2.out" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. MISSION drops in (Solid Pink, No Shadow)
      tl.fromTo(
        missionRef.current,
        { y: -120, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      );

      // 2. Subtle movement glitch (No Glow)
      tl.to(missionRef.current, {
        keyframes: [
          { x: 3, duration: 0.05 },
          { x: -3, duration: 0.05 },
          { x: 0, duration: 0.05 },
        ],
        repeat: 2,
      });

      // 3. SCHRÖDINGER'S CAT fades up
      tl.fromTo(
        schroRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );

      // 4. Divider draws
      tl.fromTo(
        dividerRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power2.inOut" },
        "-=0.2"
      );

      // 5. Subtitle types in
      tl.to(
        subtitleRef.current,
        {
          text: "36-HOUR INDIA'S BIGGEST STUDENT-LED HACKATHON",
          duration: 1.8,
          ease: "none",
        },
        "-=0.1"
      );

      // 6. Prize box bounces in
      tl.fromTo(
        prizeRef.current,
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
        "-=0.3"
      );

      // 7. Button fades in
      tl.fromTo(
        btnRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );
    };

    loadGSAP();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* ── Fixed Images ── */}
      <Image
        src="/images/h1.png"
        alt="hand Right Side"
        width={400}
        height={400}
        className="absolute top-0 right-0 w-1/4 h-auto object-contain pointer-events-none"
        style={{ zIndex: 3 }}
      />

      <Image
        src="/images/c1.png"
        alt="Cat left Side"
        width={400}
        height={400}
        className="absolute bottom-0 left-0 w-1/4 h-auto object-contain pointer-events-none"
        style={{ zIndex: 3 }}
      />

      {/* ── Background gradient overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(45,0,80,0.55) 0%, rgba(5,0,8,0.7) 70%)",
        }}
      />

      {/* ── Floating Particles ── */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            animation: `driftUp ${p.duration} linear ${p.delay} infinite`,
          }}
        />
      ))}

      {/* ── Header badges ── */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
        <span className="flex items-center gap-2 font-pixel text-[0.9rem] tracking-wider opacity-70" style={{ color: "#ffffff" }}>
          <Image src="/logos/Lab.png" alt="Lab Logo" width={40} height={40} className="inline-block w-10 h-10" />
          SINGULARITY STUDENT LAB
        </span>
        <span
          className="font-pixel text-[0.45rem] tracking-wider opacity-70"
          style={{
            color: "#00ffff",
            border: "1px solid rgba(0,255,255,0.3)",
            padding: "4px 8px",
          }}
        >
          EST. 2026
        </span>
      </div>
          
      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-16">

        {/* MISSION: Solid Pink, No Glow */}
        <h1
          ref={missionRef}
          className="font-pixel opacity-0"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            color: "#ff00ff", 
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            textShadow: "none",
            willChange: "transform, opacity",
          }}
        >
          MISSION
        </h1>

        {/* SCHRÖDINGER'S CAT */}
        <h2
          ref={schroRef}
          className="font-pixel glow-cyan mt-2 opacity-0"
          style={{
            fontSize: "clamp(0.8rem, 3vw, 1.8rem)",
            color: "#00ffff",
            letterSpacing: "0.08em",
            willChange: "transform, opacity",
          }}
        >
          SCHRÖDINGER&apos;S CAT
        </h2>

        {/* Pixel divider */}
        <div
          ref={dividerRef}
          className="pixel-divider my-6"
          style={{ maxWidth: "600px", width: "100%", transformOrigin: "left center" }}
        />

        {/* Subtitle (typed by GSAP) */}
        <p
          ref={subtitleRef}
          className="font-vt323"
          style={{
            fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)",
            color: "#e8e8ff",
            letterSpacing: "3px",
            minHeight: "2em",
          }}
        />

        {/* Date */}
        <p
          className="font-rajdhani text-sm tracking-widest mb-6 opacity-70"
          style={{ color: "#e8e8ff" }}
        >
          MARCH 27–29, 2026 &nbsp;•&nbsp; SRM UNIVERSITY AP, AMARAVATI
        </p>

        {/* Prize box */}
        <div
          ref={prizeRef}
          className="pixel-border opacity-0 mb-8 px-8 py-4"
          style={{
            animation: "pulseGlow 2s ease-in-out infinite",
            willChange: "transform, opacity",
          }}
        >
          <span
            className="font-pixel"
            style={{
              fontSize: "clamp(0.6rem, 2vw, 1rem)",
              color: "#ff9500",
              letterSpacing: "2px",
            }}
          >
            ₹25,00,000 TOTAL PRIZE POOL
          </span>
        </div>

        {/* Register button */}
        <a
          id="register"
          ref={btnRef}
          href="https://unstop.com/hackathons/mission-schrodingers-cat-srm-university-srmap-andhra-pradesh-1645488?lb=jL5dS6qk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pixel opacity-0 mb-16"
        >
          ▶ REGISTRATION CLOSED
        </a>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="font-pixel text-[0.35rem]" style={{ color: "#00ffff" }}>
          SCROLL
        </span>
        <div
          className="w-[1px] h-8"
          style={{
            background: "linear-gradient(to bottom, #00ffff, transparent)",
            animation: "pulseGlow 1.5s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}