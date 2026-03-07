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
                src="/images/standingCat.png" // Path to your PNG
                alt="Quantum Experiment"
                fill
                className="object-contain" // Ensures the whole PNG is visible without cropping
                priority
              />
            </div>
          </div>

          {/* RIGHT: Wave and Content (3/4ths width) */}
          <div className="lg:col-span-3 flex flex-col gap-12">
            
            {/* Wave - Kept exactly as your original code */}
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
      </div>
    </section>
  );
}