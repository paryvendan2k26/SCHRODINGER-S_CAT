"use client";

import { useEffect, useRef, useState } from "react";

const PRIZES = [
  {
    rank: "🥇 WINNER",
    amount: "₹1,00,000",
    detail: "Cash + Certificate",
    border: "pixel-border-gold",
    glow: "#ffd700",
    delay: 0,
  },
  {
    rank: "🥈 1ST RUNNER UP",
    amount: "₹50,000",
    detail: "Cash + Certificate",
    border: "pixel-border-silver",
    glow: "#c0c0c0",
    delay: 1,
  },
  {
    rank: "🥉 2ND RUNNER UP",
    amount: "₹25,000",
    detail: "Cash + Certificate",
    border: "pixel-border-bronze",
    glow: "#cd7f32",
    delay: 2,
  },
  {
    rank: "4️⃣ 3RD RUNNER UP",
    amount: "₹10,000",
    detail: "Cash + Certificate",
    border: "pixel-border",
    glow: "#ff6b00",
    delay: 3,
  },
  {
    rank: "🎨 BEST UI/UX",
    amount: "₹5,000",
    detail: "Track Prize",
    border: "pixel-border-cyan",
    glow: "#00ffff",
    delay: 4,
  },
  {
    rank: "⚙️ BEST HARDWARE",
    amount: "₹5,000",
    detail: "Track Prize",
    border: "pixel-border",
    glow: "#ff9500",
    delay: 5,
  },
  {
    rank: "🤖 BEST AI/ML",
    amount: "₹5,000",
    detail: "Track Prize",
    border: "pixel-border-pink",
    glow: "#ff00ff",
    delay: 6,
  },
];

export default function PrizesSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const boxRef      = useRef<HTMLDivElement>(null);
  const lidRef      = useRef<HTMLDivElement>(null);
  const cardsRef    = useRef<HTMLDivElement>(null);
  const [boxOpen, setBoxOpen]   = useState(false);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Section fade in
      gsap.fromTo(sectionRef.current, { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true, markers: false },
      });

      // Box opens at 50% viewport
      ScrollTrigger.create({
        trigger: boxRef.current,
        start: "top 50%",
        once: true,
        markers: false,
        onEnter: () => {
          setBoxOpen(true);

          // Lid rotates
          gsap.to(lidRef.current, {
            rotateX: -110, duration: 0.9, ease: "back.out(1.5)",
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
          });

          // Cards fly in staggered
          const cards = cardsRef.current?.querySelectorAll(".prize-card");
          if (cards) {
            gsap.fromTo(
              cards,
              { y: -80, opacity: 0, scale: 0.5 },
              {
                y: 0, opacity: 1, scale: 1,
                stagger: 0.12, duration: 0.7,
                ease: "elastic.out(1, 0.6)",
                delay: 0.3,
              }
            );
          }
        },
      });
    };
    loadGSAP();
  }, []);

  return (
    <section
      id="prizes"
      ref={sectionRef}
      className="relative py-24 px-4"
      style={{
        zIndex: 1,
        background: "rgba(10, 0, 20, 0.92)",
        opacity: 0,
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-6">
          <span className="font-vt323 block tracking-widest mb-2"
            style={{ fontSize: "1.2rem", color: "#ff6b00", opacity: 0.7 }}>
            // SECTION 03
          </span>
          <h2 className="font-pixel glow-orange"
            style={{ fontSize: "clamp(0.8rem, 2.5vw, 1.5rem)", color: "#ff9500" }}>
            REWARDS & PRIZES
          </h2>
          <p className="font-vt323 mt-3 tracking-widest"
            style={{ fontSize: "1.3rem", color: "#e8e8ff", opacity: 0.6 }}>
            Open the box. Observe the prize.
          </p>
        </div>

        {/* ── Pixel Art Box ── */}
        <div
          ref={boxRef}
          className="flex justify-center my-10"
          style={{ perspective: "600px" }}
        >
          <div style={{ position: "relative", width: 120, height: 120 }}>
            {/* Lid */}
            <div
              ref={lidRef}
              style={{
                position: "absolute",
                top: -24,
                left: -8,
                width: 136,
                height: 32,
                background: "#2d0050",
                border: "2px solid #ff6b00",
                boxShadow: "0 0 12px rgba(255,107,0,0.5)",
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
                zIndex: 2,
              }}
            >
              <div style={{
                position: "absolute", inset: 0,
                background: "repeating-linear-gradient(45deg, rgba(255,107,0,0.1) 0px, rgba(255,107,0,0.1) 4px, transparent 4px, transparent 8px)",
              }} />
            </div>

            {/* Box body */}
            <div style={{
              width: 120, height: 120,
              background: "#1a0030",
              border: "2px solid #ff6b00",
              boxShadow: "0 0 20px rgba(255,107,0,0.4), inset 0 0 20px rgba(255,107,0,0.05)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "0.5rem", color: "#ff9500",
                textAlign: "center", lineHeight: 1.6,
              }}>
                {boxOpen ? "✦ OPEN ✦" : "??\n??"}
              </span>

              {/* Decorative lines */}
              <div style={{
                position: "absolute", inset: 0,
                background: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,107,0,0.04) 10px, rgba(255,107,0,0.04) 11px)",
              }} />
            </div>
          </div>
        </div>

        {/* ── Prize Cards ── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
        >
          {PRIZES.map((prize) => (
            <div
              key={prize.rank}
              className={`prize-card ${prize.border} p-5 flex flex-col items-center text-center`}
              style={{
                background: "rgba(5,0,8,0.8)",
                opacity: 0,
                willChange: "transform, opacity",
              }}
            >
              <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
                {prize.rank.split(" ")[0]}
              </div>
              <div
                className="font-pixel"
                style={{
                  fontSize: "0.45rem",
                  color: prize.glow,
                  textShadow: `0 0 8px ${prize.glow}`,
                  lineHeight: 1.8,
                  letterSpacing: "1px",
                }}
              >
                {prize.rank.replace(prize.rank.split(" ")[0] + " ", "")}
              </div>
              <div
                className="font-pixel mt-3"
                style={{
                  fontSize: "clamp(0.6rem, 1.5vw, 0.9rem)",
                  color: "#e8e8ff",
                  textShadow: `0 0 10px ${prize.glow}`,
                }}
              >
                {prize.amount}
              </div>
              <div
                className="font-rajdhani mt-1 opacity-60"
                style={{ fontSize: "0.85rem", color: "#e8e8ff" }}
              >
                {prize.detail}
              </div>
            </div>
          ))}

          {/* Participation card */}
          <div
            className="prize-card pixel-border-cyan p-5 flex flex-col items-center text-center sm:col-span-2 lg:col-span-4"
            style={{ background: "rgba(5,0,8,0.8)", opacity: 0, willChange: "transform, opacity" }}
          >
            <div style={{ fontSize: "1.4rem" }}>🎖️</div>
            <div className="font-pixel mt-2"
              style={{ fontSize: "0.55rem", color: "#00ffff", textShadow: "0 0 8px #00ffff" }}>
              PARTICIPATION CERTIFICATES
            </div>
            <div className="font-rajdhani mt-1 opacity-60"
              style={{ fontSize: "0.9rem", color: "#e8e8ff" }}>
              Awarded to all teams who complete the hackathon
            </div>
          </div>
        </div>

        {/* Total pool callout */}
        <div className="text-center mt-10">
          <div
            className="inline-block pixel-border px-8 py-3"
            style={{ animation: "pulseGlow 2s ease-in-out infinite" }}
          >
            <span className="font-pixel"
              style={{ fontSize: "clamp(0.55rem, 1.5vw, 0.9rem)", color: "#ff9500" }}>
              ₹25,00,000 TOTAL PRIZE POOL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
