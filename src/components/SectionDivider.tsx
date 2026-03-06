"use client";

import { useEffect, useRef } from "react";

export default function SectionDivider({ id }: { id?: string }) {
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { strokeDashoffset: 1400 },
          {
            strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 85%",
              once: true,
              markers: false,
            },
          }
        );
      }
    };
    loadGSAP();
  }, []);

  return (
    <div
      id={id}
      className="relative w-full overflow-hidden"
      style={{ height: "30px", zIndex: 1 }}
    >
      <svg
        viewBox="0 0 1400 30"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient definition */}
        <defs>
          <linearGradient id={`divGrad${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="transparent" />
            <stop offset="20%"  stopColor="#ff6b00" />
            <stop offset="50%"  stopColor="#00ffff" />
            <stop offset="80%"  stopColor="#ff00ff" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        <line
          ref={lineRef}
          x1="0" y1="15" x2="1400" y2="15"
          stroke={`url(#divGrad${id})`}
          strokeWidth="1.5"
          strokeDasharray="1400"
          strokeDashoffset="1400"
        />

        {/* Center diamond */}
        <polygon
          points="700,10 706,15 700,20 694,15"
          fill="#00ffff"
          style={{ filter: "drop-shadow(0 0 4px #00ffff)" }}
        />
      </svg>
    </div>
  );
}
