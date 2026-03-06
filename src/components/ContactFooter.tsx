"use client";

import { useEffect, useRef } from "react";

const ORGANIZERS = [
  {
    name: "Jayanth Ramakrishnan",
    role: "Event Coordinator",
    email: "jayanth_ramakrishnan@srmap.edu.in",
    phone: "+91 9080866770",
    icon: "👤",
  },
  {
    name: "Parvendan R",
    role: "Event Coordinator",
    email: "parvendan_r@srmap.edu.in",
    phone: "+91 7904029810",
    icon: "👤",
  },
];

// Small pixel cat for footer (simplified)
const FOOTER_CAT_SHADOW = `
  8px 0 0 2px #111,
  12px 0 0 2px #111,
  20px 0 0 2px #111,
  24px 0 0 2px #111,
  4px 4px 0 2px #111,8px 4px 0 2px #111,12px 4px 0 2px #111,
  16px 4px 0 2px #111,20px 4px 0 2px #111,24px 4px 0 2px #111,28px 4px 0 2px #111,
  4px 8px 0 2px #111,8px 8px 0 2px #00ffff,12px 8px 0 2px #111,
  16px 8px 0 2px #111,20px 8px 0 2px #00ffff,24px 8px 0 2px #111,28px 8px 0 2px #111,
  4px 12px 0 2px #111,8px 12px 0 2px #111,12px 12px 0 2px #111,
  16px 12px 0 2px #111,20px 12px 0 2px #111,24px 12px 0 2px #111,28px 12px 0 2px #111,
  4px 16px 0 2px #111,8px 16px 0 2px #111,12px 16px 0 2px #111,
  20px 16px 0 2px #111,24px 16px 0 2px #111,28px 16px 0 2px #111,
  8px 20px 0 2px #111,12px 20px 0 2px #111,16px 20px 0 2px #111,
  20px 20px 0 2px #111,24px 20px 0 2px #111
`;

export default function ContactFooter() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const cards = sectionRef.current?.querySelectorAll(".contact-card");
      if (cards) {
        gsap.fromTo(cards, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.2, duration: 0.6,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true, markers: false },
        });
      }
    };
    loadGSAP();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative py-20 px-4"
      style={{
        zIndex: 1,
        background: "rgba(0,0,0,0.97)",
        borderTop: "2px solid rgba(255,107,0,0.3)",
      }}
    >
      {/* Pixel star decorations */}
      {["10%","25%","45%","65%","80%","92%"].map((left, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left,
            top: `${10 + (i * 12) % 25}%`,
            color: i % 2 === 0 ? "#ff6b00" : "#00ffff",
            fontSize: "0.5rem",
            opacity: 0.2,
            fontFamily: "monospace",
          }}
        >
          {i % 3 === 0 ? "✦" : i % 3 === 1 ? "◆" : "★"}
        </div>
      ))}

      <div className="max-w-4xl mx-auto">

        {/* Section title */}
        <div className="text-center mb-12">
          <span className="font-vt323 block tracking-widest mb-2"
            style={{ fontSize: "1.2rem", color: "#ff6b00", opacity: 0.7 }}>
            // SECTION 07
          </span>
          <h2 className="font-pixel"
            style={{ fontSize: "clamp(0.7rem, 2vw, 1.1rem)", color: "#ff9500" }}>
            CONTACT MISSION CONTROL
          </h2>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ORGANIZERS.map((org) => (
            <div
              key={org.name}
              className="contact-card pixel-border p-6"
              style={{
                background: "rgba(5,0,8,0.9)",
                opacity: 0,
                willChange: "transform, opacity",
                cursor: "crosshair",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span style={{ fontSize: "2rem" }}>{org.icon}</span>
                <div>
                  <div className="font-pixel" style={{ fontSize: "0.55rem", color: "#ff9500", lineHeight: 1.6 }}>
                    {org.name}
                  </div>
                  <div className="font-vt323" style={{ fontSize: "1rem", color: "#e8e8ff", opacity: 0.5 }}>
                    {org.role}
                  </div>
                </div>
              </div>

              <div className="pixel-border-cyan p-3 mb-3" style={{ background: "rgba(0,255,255,0.03)" }}>
                <a
                  href={`mailto:${org.email}`}
                  className="font-rajdhani block"
                  style={{ fontSize: "0.9rem", color: "#00ffff", wordBreak: "break-all" }}
                >
                  ✉ {org.email}
                </a>
              </div>

              <div className="p-3" style={{ border: "1px solid rgba(255,107,0,0.3)" }}>
                <a
                  href={`tel:${org.phone.replace(/\s/g, "")}`}
                  className="font-rajdhani block"
                  style={{ fontSize: "0.95rem", color: "#ff9500" }}
                >
                  📞 {org.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pixel divider */}
        <div className="pixel-divider mb-12" />

        {/* Footer pixel cat */}
        <div className="flex justify-center mb-8">
          <div
            style={{
              width: "4px",
              height: "4px",
              boxShadow: FOOTER_CAT_SHADOW,
              filter: "drop-shadow(0 0 4px rgba(0,255,255,0.5))",
            }}
          />
        </div>

        {/* Footer text */}
        <div className="text-center space-y-3">
          <p className="font-pixel"
            style={{ fontSize: "clamp(0.4rem, 1.5vw, 0.65rem)", color: "#ff9500" }}>
            MISSION: SCHRÖDINGER&apos;S CAT • MARCH 27–29, 2026
          </p>
          <p className="font-vt323 tracking-widest"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.2rem)", color: "#e8e8ff", opacity: 0.5 }}>
            SINGULARITY LAB × SRM UNIVERSITY AP, AMARAVATI, ANDHRA PRADESH
          </p>
          <p
            className="font-pixel"
            style={{
              fontSize: "clamp(0.35rem, 1.2vw, 0.55rem)",
              color: "#00ffff",
              textShadow: "0 0 10px rgba(0,255,255,0.4)",
              marginTop: "1rem",
              letterSpacing: "2px",
            }}
          >
            "THE CAT IS NEITHER ALIVE NOR DEAD —<br />UNTIL YOU BUILD SOMETHING."
          </p>

          <div className="pt-6 pixel-divider" />

          <p className="font-rajdhani pt-4"
            style={{ fontSize: "0.75rem", color: "#e8e8ff", opacity: 0.2 }}>
            © 2026 Singularity Lab, SRM University AP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
