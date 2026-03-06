"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { icon: "⏱", value: "36 Hours",            sub: "Non-stop building" },
  { icon: "👥", value: "3–5 Members/Team",    sub: "Interdisciplinary encouraged" },
  { icon: "🎓", value: "Open to All UG/PG",   sub: "Students across India" },
];

const BODY_WORDS = [
  "A", "36-hour", "national-level,", "student-led", "hackathon", "bringing",
  "together", "innovators,", "developers,", "and", "problem-solvers", "from",
  "across", "India.", "Designed", "to", "simulate", "real-world", "product",
  "development", "—", "teams", "will", "ideate,", "prototype,", "test,", "and",
  "pitch", "within", "a", "single", "weekend.",
];

export default function AboutSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const waveRef     = useRef<SVGPathElement>(null);
  const wordsRef    = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Section fade in
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 0.6,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true, markers: false },
        }
      );

      // Wave draw
      if (waveRef.current) {
        const len = waveRef.current.getTotalLength();
        gsap.set(waveRef.current, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(waveRef.current, {
          strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true, markers: false },
        });
      }

      // Word stagger
      const words = wordsRef.current?.querySelectorAll(".word-span");
      if (words) {
        gsap.fromTo(
          words,
          { opacity: 0, y: 12 },
          {
            opacity: 1, y: 0, stagger: 0.05, duration: 0.4,
            scrollTrigger: { trigger: wordsRef.current, start: "top 75%", once: true, markers: false },
          }
        );
      }

      // Stat boxes
      const boxes = statsRef.current?.querySelectorAll(".stat-box");
      if (boxes) {
        gsap.fromTo(
          boxes,
          { scale: 0.7, opacity: 0, y: 30 },
          {
            scale: 1, opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: "back.out(2)",
            scrollTrigger: { trigger: statsRef.current, start: "top 80%", once: true, markers: false },
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
      style={{
        zIndex: 1,
        background: "rgba(5, 0, 8, 0.9)",
        opacity: 0,
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section title */}
        <div className="text-center mb-16">
          <span
            className="font-vt323 tracking-widest block mb-2"
            style={{ fontSize: "1.2rem", color: "#ff6b00", opacity: 0.7 }}
          >
            // SECTION 02
          </span>
          <h2
            className="font-pixel glow-cyan"
            style={{ fontSize: "clamp(0.8rem, 2.5vw, 1.5rem)", color: "#00ffff" }}
          >
            THE EXPERIMENT
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Quantum wave SVG */}
          <div className="flex flex-col items-center justify-center">
            <div
              className="relative w-full"
              style={{
                background: "rgba(0,255,255,0.03)",
                border: "1px solid rgba(0,255,255,0.1)",
                padding: "2rem",
                maxWidth: "440px",
                margin: "0 auto",
              }}
            >
              <p
                className="font-pixel text-center mb-4"
                style={{ fontSize: "0.5rem", color: "#00ffff", opacity: 0.5 }}
              >
                SUPERPOSITION WAVE
              </p>
              <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                {/* Main wave */}
                <path
                  ref={waveRef}
                  d="M 0 80 C 25 40, 50 40, 75 80 S 125 120, 150 80 S 200 40, 225 80 S 275 120, 300 80 S 350 40, 375 80 S 400 80, 400 80"
                  stroke="#00ffff"
                  strokeWidth="2.5"
                  fill="none"
                  style={{ filter: "drop-shadow(0 0 6px rgba(0,255,255,0.7))" }}
                />
                {/* Dashed second wave */}
                <path
                  d="M 0 80 C 25 120, 50 120, 75 80 S 125 40, 150 80 S 200 120, 225 80 S 275 40, 300 80 S 350 120, 375 80"
                  stroke="#ff00ff"
                  strokeWidth="1.5"
                  strokeDasharray="8 6"
                  fill="none"
                  style={{ filter: "drop-shadow(0 0 4px rgba(255,0,255,0.5))" }}
                  className="wave-flow"
                />
                {/* Node dots */}
                {[75, 150, 225, 300].map((x) => (
                  <circle
                    key={x}
                    cx={x}
                    cy={80}
                    r={4}
                    fill="#ff6b00"
                    style={{ filter: "drop-shadow(0 0 4px #ff6b00)" }}
                  />
                ))}
                {/* Axis */}
                <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              <p
                className="font-vt323 text-center mt-2"
                style={{ fontSize: "1rem", color: "#e8e8ff", opacity: 0.4 }}
              >
                ψ(x,t) — QUANTUM STATE FUNCTION
              </p>
            </div>

            {/* Box label */}
            <div
              className="mt-8 font-pixel text-center"
              style={{
                fontSize: "0.5rem",
                color: "#ff6b00",
                border: "1px solid rgba(255,107,0,0.2)",
                padding: "1rem 1.5rem",
                letterSpacing: "2px",
                maxWidth: "360px",
              }}
            >
              WHERE INNOVATION EXISTS IN<br />
              <span style={{ color: "#00ffff" }}>ALL STATES SIMULTANEOUSLY</span>
            </div>
          </div>

          {/* RIGHT — Text content */}
          <div>
            {/* Body text with word spans */}
            <div ref={wordsRef} className="font-rajdhani leading-relaxed mb-10">
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#c8c8e8", lineHeight: 1.8 }}>
                {BODY_WORDS.map((word, i) => (
                  <span
                    key={i}
                    className="word-span inline-block mr-[0.3em]"
                    style={{ opacity: 0, willChange: "transform, opacity" }}
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>

            {/* Stat boxes */}
            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.value}
                  className="stat-box pixel-border-cyan p-4 text-center"
                  style={{
                    background: "rgba(0,255,255,0.04)",
                    opacity: 0,
                    willChange: "transform, opacity",
                  }}
                >
                  <div style={{ fontSize: "1.8rem" }}>{stat.icon}</div>
                  <div
                    className="font-pixel mt-2"
                    style={{ fontSize: "0.5rem", color: "#00ffff", lineHeight: 1.6 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-rajdhani mt-1"
                    style={{ fontSize: "0.8rem", color: "#e8e8ff", opacity: 0.5 }}
                  >
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
