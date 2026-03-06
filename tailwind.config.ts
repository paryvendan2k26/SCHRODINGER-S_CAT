import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pixel-black": "#000000",
        "pixel-dark": "#050008",
        "deep-purple": "#1a0030",
        "mid-purple": "#2d0050",
        "neon-orange": "#ff6b00",
        "bright-orange": "#ff9500",
        "neon-cyan": "#00ffff",
        "bright-cyan": "#00e5ff",
        "neon-pink": "#ff00ff",
        "star-white": "#e8e8ff",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        vt323: ['"VT323"', "monospace"],
        rajdhani: ['"Rajdhani"', "sans-serif"],
      },
      animation: {
        "float-cat": "floatCat 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "drift-up": "driftUp var(--duration, 8s) linear infinite",
        "glitch": "glitch 0.3s steps(1) infinite",
        "scan-line": "scanLine 8s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "cursor-blink": "cursorBlink 1s step-end infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        floatCat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px #ff6b00, 0 0 20px #ff6b00, 0 0 40px #ff6b0066" },
          "50%": { boxShadow: "0 0 20px #ff6b00, 0 0 40px #ff6b00, 0 0 80px #ff6b0099" },
        },
        driftUp: {
          "0%": { transform: "translateY(100vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100px) rotate(360deg)", opacity: "0" },
        },
        glitch: {
          "0%": { textShadow: "2px 0 #00ffff, -2px 0 #ff00ff" },
          "25%": { textShadow: "-2px 0 #00ffff, 2px 0 #ff00ff" },
          "50%": { textShadow: "2px 2px #ff6b00, -2px -2px #00ffff" },
          "75%": { textShadow: "-2px 2px #ff00ff, 2px -2px #ff6b00" },
          "100%": { textShadow: "2px 0 #00ffff, -2px 0 #ff00ff" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "pixel-noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
