"use client";

import { useEffect, useRef } from "react";

const STAGES = [
  {
    num: "01",
    icon: "📍",
    title: "ARRIVAL",
    time: "27 MAR • 3:00 PM – 4:01 PM",
    desc: "External and SRM AP students arrive at venue for Registration Verification.",
    highlight: false,
    color: "#ff9500",
  },
  {
    num: "02",
    icon: "🚀",
    title: "INAUGURATION",
    time: "27 MAR • 4:02 PM – 5:00 PM",
    desc: "Event graced by University Officials and Industry Experts. Problem Statement announced.",
    highlight: false,
    color: "#ff00ff",
  },
  {
    num: "03",
    icon: "💻",
    title: "HACKATHON COMMENCES",
    time: "27 MAR 9:00 PM – 29 MAR 8:00 AM",
    desc: "THE 36 HOURS — Builders get started on their Projects. Code. Create. Innovate.",
    highlight: true,
    color: "#00ffff",
  },
  {
    num: "04",
    icon: "📤",
    title: "PROJECT SUBMISSION",
    time: "29 MAR • 9:00 AM – 10:01 AM",
    desc: "Submit project for screening and shortlisting by expert panel.",
    highlight: false,
    color: "#ff9500",
  },
  {
    num: "05",
    icon: "🏆",
    title: "WINNER DECLARATION",
    time: "29 MAR • 10:00 AM – 11:01 AM",
    desc: "Winners announced. Prizes distributed. Glory achieved.",
    highlight: false,
    color: "#ffd700",
  },
];

export default function TimelineSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
        if (isDesktop && trackRef.current && wrapperRef.current) {
          const track = trackRef.current;
          const totalScroll = track.scrollWidth - window.innerWidth;
          gsap.to(track, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top top",
              end: () => `+=${totalScroll}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              markers: false,
            },
          });
          const nodes = track.querySelectorAll(".timeline-node");
          nodes.forEach((node, i) => {
            gsap.fromTo(
              node,
              { scale: 0, opacity: 0 },
              {
                scale: 1, opacity: 1,
                duration: 0.6, ease: "back.out(2)",
                scrollTrigger: {
                  trigger: wrapperRef.current,
                  start: `top+=${i * (totalScroll / nodes.length)} top`,
                  once: true,
                  markers: false,
                  containerAnimation: gsap.to(track, { x: -totalScroll, ease: "none" }),
                },
              }
            );
          });
        } else {
          // Mobile: vertical stagger
          const nodes = document.querySelectorAll(".timeline-node");
          gsap.fromTo(
            nodes,
            { x: -40, opacity: 0 },
            {
              x: 0, opacity: 1, stagger: 0.2, duration: 0.6,
              scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true, markers: false },
            }
          );
        }
      }, sectionRef);
    };
    loadGSAP();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative"
      style={{ zIndex: 1, background: "rgba(5,0,15,0.95)" }}
    >
      {/* Title (outside pinned area) */}
      <div className="py-16 px-4 text-center">
        <span className="font-vt323 block tracking-widest mb-2"
          style={{ fontSize: "1.2rem", color: "#ff6b00", opacity: 0.7 }}>
        </span>
        <h2 className="font-pixel glow-cyan"
          style={{ fontSize: "clamp(0.8rem, 2.5vw, 1.5rem)", color: "#00ffff" }}>
          MISSION TIMELINE
        </h2>
        <p className="font-vt323 mt-3 hidden md:block"
          style={{ fontSize: "1rem", color: "#e8e8ff", opacity: 0.5 }}>
          ← SCROLL RIGHT TO ADVANCE MISSION →
        </p>
      </div>

      {/* ── HORIZONTAL SCROLL WRAPPER (desktop) ── */}
      <div
        ref={wrapperRef}
        className="overflow-hidden"
        style={{ height: "70vh" }}
      >
        <div
          ref={trackRef}
          className="md:flex md:flex-row flex-col items-center h-full"
          style={{
            // desktop: flex row; mobile: column handled by responsive
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "max-content",
            padding: "0 8rem",
            gap: "0",
          }}
        >
          {STAGES.map((stage, i) => (
            <div
              key={stage.num}
              className="timeline-node flex items-center"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Node card */}
              <div
                className="relative flex flex-col"
                style={{
                  width: "clamp(240px, 22vw, 320px)",
                  flexShrink: 0,
                  padding: "2rem",
                  background: stage.highlight
                    ? "rgba(0,255,255,0.06)"
                    : "rgba(5,0,8,0.8)",
                  border: `2px solid ${stage.highlight ? stage.color : "rgba(255,107,0,0.3)"}`,
                  boxShadow: stage.highlight
                    ? `0 0 30px ${stage.color}44, 0 0 60px ${stage.color}22`
                    : "none",
                  animation: stage.highlight ? "pulseGlow 2s ease-in-out infinite" : "none",
                }}
              >
                {/* Stage number */}
                <div
                  className="font-pixel absolute top-2 right-3"
                  style={{ fontSize: "0.5rem", color: stage.color, opacity: 0.5 }}
                >
                  STAGE {stage.num}
                </div>

                <div style={{ fontSize: stage.highlight ? "2.5rem" : "1.8rem" }}>
                  {stage.icon}
                </div>

                <div
                  className="font-pixel mt-3"
                  style={{
                    fontSize: stage.highlight ? "0.65rem" : "0.55rem",
                    color: stage.color,
                    textShadow: `0 0 10px ${stage.color}`,
                    lineHeight: 1.5,
                  }}
                >
                  {stage.title}
                </div>

                <div
                  className="font-vt323 mt-2"
                  style={{ fontSize: "1.1rem", color: "#ff9500", opacity: 0.8 }}
                >
                  {stage.time}
                </div>

                <div
                  className="font-rajdhani mt-3"
                  style={{
                    fontSize: "0.95rem",
                    color: "#e8e8ff",
                    opacity: 0.7,
                    lineHeight: 1.5,
                  }}
                >
                  {stage.desc}
                </div>

                {/* Highlight badge */}
                {stage.highlight && (
                  <div
                    className="mt-3 font-pixel text-center py-1 px-2"
                    style={{
                      fontSize: "0.4rem",
                      color: "#00ffff",
                      border: "1px solid #00ffff",
                      letterSpacing: "2px",
                    }}
                  >
                    ● THE 36 HOURS ●
                  </div>
                )}
              </div>

              {/* Connector line + arrow (not after last) */}
              {i < STAGES.length - 1 && (
                <div
                  className="flex items-center"
                  style={{ width: "6rem", flexShrink: 0 }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "2px",
                      background: `linear-gradient(90deg, ${stage.color}, ${STAGES[i + 1].color})`,
                      borderTop: "2px dashed rgba(255,107,0,0.4)",
                      position: "relative",
                    }}
                  />
                  <span
                    style={{
                      color: STAGES[i + 1].color,
                      fontFamily: "monospace",
                      fontSize: "1.2rem",
                      marginLeft: "-4px",
                    }}
                  >
                    ▶
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical fallback — CSS-only */}
      <style>{`
        @media (max-width: 767px) {
          #timeline [ref] > div {
            flex-direction: column !important;
          }
          .timeline-node {
            flex-direction: column !important;
            width: 100% !important;
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
