"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#hero",      label: "HOME" },
  { href: "#about",     label: "ABOUT" },
  { href: "#prizes",    label: "PRIZES" },
  { href: "#sponsors",  label: "SPONSORS" },
  { href: "#register",  label: "REGISTER" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
      style={{
        background: "rgba(5, 0, 8, 0.92)",
        borderBottom: "1px solid rgba(255, 107, 0, 0.4)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 20px rgba(255, 107, 0, 0.15)",
      }}
    >
      {/* Pixel top accent line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent, #ff6b00 30%, #00ffff 50%, #ff00ff 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Singularity logo space */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-2">
            {/* Place your logo image here */}
            {/* <Image src="/logos/singularity.png" alt="Singularity Logo" width={32} height={32} /> */}
          </div>
          <span
            className="font-pixel text-[0.5rem] tracking-wider"
            style={{ color: "#ff00ff" }}
          >
            ▶ SINGULARITY LAB
          </span>
        </div>

        {/* Nav links */}
        <ul className="flex gap-6 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-pixel text-[0.45rem] tracking-widest transition-all duration-200"
                style={{ color: "#e8e8ff" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#00ffff";
                  (e.target as HTMLElement).style.textShadow = "0 0 10px #00ffff";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#e8e8ff";
                  (e.target as HTMLElement).style.textShadow = "none";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#register"
          className="font-pixel text-[0.45rem] px-3 py-2 transition-all duration-150"
          style={{
            color: "#ff00ff",
            border: "1px solid #ff00ff",
            boxShadow: "2px 2px 0 #ff00ff",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.color = "#ff00ff";
            el.style.borderColor = "#ff00ff";
            el.style.boxShadow = "2px 2px 0 #ff00ff, 0 0 15px rgba(255,0,255,0.4)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.color = "#ff00ff";
            el.style.borderColor = "#ff00ff";
            el.style.boxShadow = "2px 2px 0 #ff00ff";
          }}
        >
          REGISTER
        </a>
      </div>
    </nav>
  );
}
