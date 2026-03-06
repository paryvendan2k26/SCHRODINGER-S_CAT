"use client";

import { useEffect, useRef } from "react";

const TRACKS = [
  {
    icon: "🎨",
    name: "BEST UI/UX",
    prize: "₹5,000",
    desc: "Design the most beautiful, intuitive user experience. Judges look for visual excellence, accessibility, and seamless flow.",
    border: "pixel-border-cyan",
    color: "#00ffff",
    bg: "rgba(0,255,255,0.04)",
  },
  {
    icon: "⚙️",
    name: "BEST HARDWARE",
    prize: "₹5,000",
    desc: "Build something physical, tangible, revolutionary. Bring your circuit boards, sensors, and embedded systems.",
    border: "pixel-border",
    color: "#ff9500",
    bg: "rgba(255,107,0,0.04)",
  },
  {
    icon: "🤖",
    name: "BEST AI/ML",
    prize: "₹5,000",
    desc: "Train, fine-tune, or engineer the future with AI. Deploy models that solve real problems with measurable impact.",
    border: "pixel-border-pink",
    color: "#ff00ff",
    bg: "rgba(255,0,255,0.04)",
  },
];

export default function TracksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(sectionRef.current, { opacity: 0 }, {
        opacity: 1, duration: 0.5,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true, markers: false },
      });

      const cards = cardsRef.current?.querySelectorAll(".track-card-wrap");
      if (cards) {
        gsap.fromTo(
          cards,
          { rotateY: 90, opacity: 0, transformOrigin: "center center" },
          {
            rotateY: 0, opacity: 1,
            stagger: 0.18, duration: 0.8, ease: "back.out(1.5)",
            scrollTrigger: { trigger: cardsRef.current, start: "top 75%", once: true, markers: false },
          }
        );
      }
    };
    loadGSAP();
  }, []);

  return (
    <section
      id="tracks"
      ref={sectionRef}
      className="relative py-24 px-4"
      style={{
        zIndex: 1,
        background: "rgba(5,0,8,0.92)",
        opacity: 0,
      }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <span className="font-vt323 block tracking-widest mb-2"
            style={{ fontSize: "1.2rem", color: "#ff6b00", opacity: 0.7 }}>
          </span>
          <h2 className="font-pixel"
            style={{
              fontSize: "clamp(0.8rem, 2.5vw, 1.5rem)",
              color: "#ff9500",
              textShadow: "0 0 20px rgba(255,107,0,0.5)",
            }}>
            CHOOSE YOUR UNIVERSE
          </h2>
          <p className="font-vt323 mt-3 tracking-widest"
            style={{ fontSize: "1.2rem", color: "#e8e8ff", opacity: 0.5 }}>
            Each path leads to a different quantum outcome.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ perspective: "1000px" }}
        >
          {TRACKS.map((track) => (
            <div
              key={track.name}
              className="track-card-wrap"
              style={{ willChange: "transform, opacity" }}
            >
              <div
                className={`track-card ${track.border} flex flex-col items-center text-center p-8 h-full`}
                style={{ background: track.bg, cursor: "crosshair", minHeight: "320px" }}
              >
                {/* Icon */}
                <div style={{ fontSize: "3rem", filter: `drop-shadow(0 0 12px ${track.color})` }}>
                  {track.icon}
                </div>

                {/* Track name */}
                <div
                  className="font-pixel mt-5"
                  style={{
                    fontSize: "0.65rem",
                    color: track.color,
                    textShadow: `0 0 10px ${track.color}`,
                    letterSpacing: "2px",
                    lineHeight: 1.6,
                  }}
                >
                  {track.name}
                </div>

                {/* Prize */}
                <div
                  className="font-pixel mt-3"
                  style={{ fontSize: "1.1rem", color: "#e8e8ff" }}
                >
                  {track.prize}
                </div>

                {/* Divider */}
                <div
                  className="my-4 w-full"
                  style={{
                    height: "1px",
                    background: `linear-gradient(90deg, transparent, ${track.color}, transparent)`,
                  }}
                />

                {/* Description */}
                <p
                  className="font-rajdhani"
                  style={{ fontSize: "1rem", color: "#c8c8e8", opacity: 0.8, lineHeight: 1.6 }}
                >
                  {track.desc}
                </p>

                {/* Bottom badge */}
                <div
                  className="mt-auto pt-4 font-pixel"
                  style={{ fontSize: "0.4rem", color: track.color, opacity: 0.6, letterSpacing: "2px" }}
                >
                  TRACK PRIZE ▸ {track.prize}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Domain note */}
        <div
          className="mt-10 text-center pixel-border-cyan p-4"
          style={{ background: "rgba(0,255,255,0.03)" }}
        >
          <span className="font-pixel"
            style={{ fontSize: "0.5rem", color: "#00ffff", letterSpacing: "2px" }}>
            PROBLEM DOMAIN:&nbsp;
          </span>
          <span className="font-vt323"
            style={{ fontSize: "1.2rem", color: "#e8e8ff", letterSpacing: "3px" }}>
            BUSINESS SOLUTIONS & ADVANCEMENTS
          </span>
        </div>
      </div>
    </section>
  );
}
