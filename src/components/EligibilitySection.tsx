"use client";

import { useEffect, useRef, useState } from "react";

const ELIGIBILITY = [
  { icon: "🌍", text: "Open to ALL UG & PG Students in India" },
  { icon: "👥", text: "Team Size: 3–5 Members" },
  { icon: "🔀", text: "Interdisciplinary teams encouraged" },
  { icon: "💡", text: "Problem Domain: Business Solutions & Advancements" },
];

const CRITERIA = [
  {
    phase: "PHASE 1 — SCREENING",
    marks: "40 MARKS",
    color: "#ff6b00",
    items: [
      "Technical Implementation (15 marks) — Architecture, code quality, use of tech stack",
      "Feasibility & Innovation (15 marks) — Is the idea viable? Is it novel?",
      "Problem Relevance (10 marks) — Does it address a real business need?",
    ],
  },
  {
    phase: "PHASE 2 — FINAL EVALUATION",
    marks: "40 MARKS",
    color: "#00ffff",
    items: [
      "Design & User Experience (15 marks) — Visual quality, usability, accessibility",
      "Functionality (15 marks) — Does it actually work end-to-end?",
      "Presentation & Pitch (10 marks) — Team communication and demo clarity",
    ],
  },
  {
    phase: "BONUS CRITERIA",
    marks: "20 MARKS",
    color: "#ff00ff",
    items: [
      "Track-specific excellence (UI/UX / Hardware / AI-ML)",
      "Social impact or sustainability angle",
      "Wow factor — something the judges didn't expect",
    ],
  },
];

export default function EligibilitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(sectionRef.current, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true, markers: false },
      });

      const boxes = sectionRef.current?.querySelectorAll(".elig-box");
      if (boxes) {
        gsap.fromTo(boxes, { x: -30, opacity: 0 }, {
          x: 0, opacity: 1, stagger: 0.12, duration: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true, markers: false },
        });
      }
    };
    loadGSAP();
  }, []);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
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
        <div className="text-center mb-14">
          <span className="font-vt323 block tracking-widest mb-2"
            style={{ fontSize: "1.2rem", color: "#ff6b00", opacity: 0.7 }}>
            // SECTION 06
          </span>
          <h2 className="font-pixel"
            style={{
              fontSize: "clamp(0.8rem, 2.5vw, 1.5rem)",
              color: "#ff9500",
              textShadow: "0 0 20px rgba(255,107,0,0.5)",
            }}>
            EXPERIMENT REQUIREMENTS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT — Eligibility */}
          <div>
            <h3 className="font-pixel mb-6 glow-orange"
              style={{ fontSize: "0.6rem", color: "#ff9500", letterSpacing: "2px" }}>
              ▸ WHO CAN PARTICIPATE
            </h3>

            <div className="flex flex-col gap-3">
              {ELIGIBILITY.map((item) => (
                <div
                  key={item.text}
                  className="elig-box pixel-border flex items-center gap-4 p-4"
                  style={{ background: "rgba(5,0,8,0.8)", opacity: 0, willChange: "transform, opacity" }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                  <span
                    className="font-rajdhani"
                    style={{ fontSize: "1rem", color: "#e8e8ff", lineHeight: 1.4 }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Registration note */}
            <div
              className="mt-6 p-4 pixel-border-cyan"
              style={{ background: "rgba(0,255,255,0.04)" }}
            >
              <p className="font-pixel mb-2" style={{ fontSize: "0.45rem", color: "#00ffff" }}>
                📌 REGISTRATION
              </p>
              <p className="font-rajdhani" style={{ fontSize: "0.95rem", color: "#c8c8e8", lineHeight: 1.5 }}>
                Register via Unstop platform. Teams must submit a brief project abstract (100–200 words) 
                during registration describing their proposed solution.
              </p>
            </div>
          </div>

          {/* RIGHT — Evaluation accordion */}
          <div>
            <h3 className="font-pixel mb-6 glow-cyan"
              style={{ fontSize: "0.6rem", color: "#00ffff", letterSpacing: "2px" }}>
              ▸ EVALUATION CRITERIA
            </h3>

            <div className="flex flex-col gap-3">
              {CRITERIA.map((c, i) => (
                <div
                  key={c.phase}
                  style={{
                    border: `2px solid ${openIndex === i ? c.color : "rgba(255,107,0,0.3)"}`,
                    background: "rgba(5,0,8,0.8)",
                    transition: "border-color 0.3s",
                    boxShadow: openIndex === i ? `0 0 20px ${c.color}33` : "none",
                  }}
                >
                  {/* Header */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                    style={{ cursor: "crosshair" }}
                  >
                    <div>
                      <div className="font-pixel" style={{ fontSize: "0.5rem", color: c.color, letterSpacing: "1px" }}>
                        {c.phase}
                      </div>
                      <div className="font-vt323 mt-1" style={{ fontSize: "1.1rem", color: "#e8e8ff", opacity: 0.6 }}>
                        {c.marks}
                      </div>
                    </div>
                    <span
                      className="font-pixel transition-transform duration-300"
                      style={{
                        fontSize: "0.7rem",
                        color: c.color,
                        transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                        display: "inline-block",
                      }}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Content */}
                  <div
                    className="accordion-content"
                    style={{
                      maxHeight: openIndex === i ? "400px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                    }}
                  >
                    <ul className="px-4 pb-4 flex flex-col gap-2">
                      {c.items.map((item, j) => (
                        <li
                          key={j}
                          className="font-rajdhani flex items-start gap-2"
                          style={{ fontSize: "0.95rem", color: "#c8c8e8", lineHeight: 1.5 }}
                        >
                          <span style={{ color: c.color, flexShrink: 0 }}>▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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
