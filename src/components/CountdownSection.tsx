"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Target: March 27, 2026 09:00 PM IST = March 27 15:30 UTC
const TARGET_DATE = new Date("2026-03-27T15:30:00Z");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const prevRef = useRef<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const digitRefs = {
    days:    [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
    hours:   [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
    minutes: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
    seconds: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
  };

  // ── Compute time left ──
  const compute = () => {
    const diff = TARGET_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };

  // ── GSAP flip on digit change ──
  const flipDigit = async (el: HTMLDivElement | null) => {
    if (!el) return;
    const { gsap } = await import("gsap");
    gsap.fromTo(el, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: "back.out(2)" });
  };

  useEffect(() => {
    setTimeLeft(compute());
    const interval = setInterval(async () => {
      const next = compute();
      const prev = prevRef.current;

      // Trigger flip for changed values
      (["days", "hours", "minutes", "seconds"] as const).forEach((key, ki) => {
        if (next[key] !== prev[key]) {
          digitRefs[key].forEach((r) => flipDigit(r.current));
        }
      });

      prevRef.current = next;
      setTimeLeft(next);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // ── ScrollTrigger reveal ──
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        sectionRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
            markers: false,
          },
        }
      );
    };
    loadGSAP();
  }, []);

  const units = [
    { key: "days" as const,    label: "DAYS",    refs: digitRefs.days    },
    { key: "hours" as const,   label: "HOURS",   refs: digitRefs.hours   },
    { key: "minutes" as const, label: "MINUTES", refs: digitRefs.minutes },
    { key: "seconds" as const, label: "SECONDS", refs: digitRefs.seconds },
  ];

  return (
    <section
      ref={sectionRef}
      id="countdown"
      className="relative min-h-[320px] flex items-center justify-center bg-black bg-opacity-80 overflow-hidden"
      style={{
        zIndex: 1,
        background: "rgba(26, 0, 48, 0.85)",
        borderTop: "2px solid rgba(255,107,0,0.4)",
        borderBottom: "2px solid rgba(255,107,0,0.4)",
        backdropFilter: "blur(4px)",
      }}
    >
      {/* Timer content shifted left */}
      <div className="relative z-10 flex-1 pr-32">
        {/* Title */}
        <h2
          className="font-pixel text-center mb-12"
          style={{
            fontSize: "clamp(0.5rem, 2vw, 0.9rem)",
            color: "#00ffff",
            letterSpacing: "3px",
            textShadow: "0 0 20px rgba(0,255,255,0.5)",
          }}
        >
          ⏳ TIME UNTIL EXPERIMENT BEGINS
        </h2>

        {/* Countdown grid */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {units.map((unit, i) => (
            <div key={unit.key} className="flex items-center gap-4">
              {/* Box */}
              <div
                className="flex flex-col items-center"
                style={{ minWidth: "clamp(70px, 15vw, 120px)" }}
              >
                <div
                  className="pixel-border flex items-center justify-center"
                  style={{
                    width: "clamp(70px, 15vw, 120px)",
                    height: "clamp(70px, 15vw, 120px)",
                    background: "rgba(0,0,0,0.6)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Digit */}
                  <div
                    ref={unit.refs[0]}
                    className="font-pixel countdown-digit"
                    style={{
                      fontSize: "clamp(1.5rem, 5vw, 3rem)",
                      color: "#ffffff",
                      textShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
                      willChange: "transform, opacity",
                    }}
                  >
                    {pad(timeLeft[unit.key])}
                  </div>

                  {/* Corner decorations */}
                  <span className="absolute top-1 left-1 text-[8px]" style={{ color: "#ff6b00", opacity: 0.5 }}>▪</span>
                  <span className="absolute top-1 right-1 text-[8px]" style={{ color: "#ff6b00", opacity: 0.5 }}>▪</span>
                  <span className="absolute bottom-1 left-1 text-[8px]" style={{ color: "#ff6b00", opacity: 0.5 }}>▪</span>
                  <span className="absolute bottom-1 right-1 text-[8px]" style={{ color: "#ff6b00", opacity: 0.5 }}>▪</span>
                </div>

                <span
                  className="font-pixel mt-3 tracking-widest"
                  style={{
                    fontSize: "clamp(0.35rem, 1vw, 0.55rem)",
                    color: "#e8e8ff",
                    opacity: 0.6,
                  }}
                >
                  {unit.label}
                </span>
              </div>

              {/* Separator */}
              {i < units.length - 1 && (
                <div
                  className="font-pixel self-start mt-4"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                    color: "#ff00ff",
                    textShadow: "0 0 10px #ff00ff",
                    animation: "cursorBlink 1s step-end infinite",
                  }}
                >
                  :
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sub label */}
        <p
          className="font-vt323 text-center mt-8 tracking-widest"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#ff9500", opacity: 0.7 }}
        >
          MARCH 27, 2026 — 9:00 PM IST
        </p>
      </div>

      {/* Cat image space on right */}
      <div className="w-1/3 h-1/2 flex items-center justify-end">
        <Image
          src="/images/twocats.png"
          alt="Countdown Cat"
          width={600}
          height={600}
          className="object-contain"
          style={{ zIndex: 2 }}
        />
      </div>
    </section>
  );
}
