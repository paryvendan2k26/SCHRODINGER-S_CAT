"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const PRIZES = [
  { rank: "GRAND WINNER", amount: "₹1,00,000", color: "#ffd700", crazy: "Quantum leap! You found the cat alive!", trophy: "/images/t1.png", detail: "Cash + Certificate" },
  { rank: "1ST RUNNER UP", amount: "₹50,000", color: "#00ffff", crazy: "Almost there! You nearly collapsed the wave function!", trophy: "/images/t2.png", detail: "Cash + Certificate" },
  { rank: "2ND RUNNER UP", amount: "₹25,000", color: "#ff00ff", crazy: "Entangled with greatness! You’re a quantum runner!", trophy: "/images/t3.png", detail: "Cash + Certificate" },
  { rank: "3RD RUNNER UP", amount: "₹10,000", color: "#ff6b00", crazy: "Superposition specialist! You’re winner and runner!", trophy: "/images/t4.png", detail: "Cash + Certificate" },
  { rank: "BEST UI/UX", amount: "₹5,000", color: "#ff00ff", crazy: "Your interface is so smooth, even the cat purrs!", trophy: "/images/t4.png", detail: "Track Prize" },
  { rank: "BEST HARDWARE", amount: "₹5,000", color: "#00ffff", crazy: "You built a device that measured the cat’s fate!", trophy: "/images/t4.png", detail: "Track Prize" },
  { rank: "BEST AI/ML", amount: "₹5,000", color: "#ffd700", crazy: "Your AI predicted the cat’s future!", trophy: "/images/t4.png", detail: "Track Prize" },
];

export default function PrizesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const spinRef = useRef(null); // Ref for the 360 spinning
  const tiltRef = useRef(null); // Ref for the interactive tilting

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");

      // 1. CONSTANT 360 SPIN
      if (spinRef.current) {
        gsap.to(spinRef.current, {
          rotation: 360,
          duration: 8, // Adjust speed here (higher = slower)
          repeat: -1,
          ease: "none",
        });
      }

      // 2. INTERACTIVE TILT (Reaction to Prize)
      if (tiltRef.current) {
        const tiltY = (activeIdx - 3) * 10;
        gsap.to(tiltRef.current, {
          y: tiltY,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };
    loadGSAP();
  }, [activeIdx]);

  return (
    <section className="relative py-24 px-4 overflow-hidden" style={{ background: "rgba(5,0,10,0.98)" }}>
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <span className="font-vt323 block tracking-widest mb-2 text-magenta opacity-70">// REWARDS UNIT 03</span>
          <h2 className="font-pixel text-2xl md:text-3xl text-white">REWARDS & <span className="text-gold">PRIZES</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Prizes List */}
          <div className="lg:col-span-4 space-y-3 h-[550px] overflow-y-auto pr-2 custom-scrollbar">
            {PRIZES.map((prize, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`w-full relative p-4 text-left transition-all duration-300 rounded-xl border ${
                  activeIdx === idx 
                    ? "bg-white border-magenta shadow-[0_0_20px_rgba(255,0,255,0.3)] scale-105 z-10" 
                    : "bg-white/5 border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <div className="font-pixel text-[0.55rem] mb-1" style={{ color: activeIdx === idx ? "#ff00ff" : prize.color }}>
                  {prize.rank}
                </div>
                <div className={`font-pixel text-lg ${activeIdx === idx ? "text-black" : "text-white"}`}>
                  {prize.amount}
                </div>
                {activeIdx === idx && (
                   <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_red] animate-ping" />
                )}
              </button>
            ))}
          </div>

          {/* CENTER: Spinning & Tilting Cat */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center min-h-[500px] relative">
            {/* Tilt Wrapper (Responds to mouse) */}
            <div ref={tiltRef} className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Spin Wrapper (Automatic 360) */}
                <div ref={spinRef} className="w-full h-full relative">
                  <Image 
                    src="/images/moneycat.png" 
                    alt="Quantum Cat"
                    fill
                    className="object-contain"
                  />
                </div>
            </div>

            {/* Observation Rings */}
            <div className="absolute w-72 h-72 border border-dashed border-white/20 rounded-full animate-[spin_15s_linear_infinite]" />
            <div className="absolute w-80 h-80 border border-white/5 rounded-full animate-[spin_25s_linear_reverse_infinite]" />
            
            <div className="mt-8 font-vt323 text-magenta tracking-widest text-lg animate-pulse">
              [ STATUS: CAT IS {activeIdx % 2 === 0 ? "ALIVE" : "OBSERVED"} ]
            </div>
          </div>

          {/* RIGHT: Detailed Card (White Style) */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl h-[550px] justify-center relative overflow-hidden">
              <div className="absolute top-6 right-6 w-8 h-8 opacity-20">
                <Image src="/images/t1.png" alt="icon" width={32} height={32} />
              </div>

              <div className="relative w-40 h-40 mb-8">
                <Image 
                  src={PRIZES[activeIdx].trophy} 
                  alt="Trophy" 
                  fill 
                  className="object-contain drop-shadow-xl"
                />
              </div>

              <h3 className="font-pixel text-2xl text-black mb-2">{PRIZES[activeIdx].amount}</h3>
              <p className="font-pixel text-[0.6rem] text-magenta mb-6 tracking-widest">{PRIZES[activeIdx].rank}</p>
              
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 w-full mb-6">
                 <p className="font-vt323 text-gray-600 text-lg leading-tight">
                  {PRIZES[activeIdx].crazy}
                 </p>
              </div>

              <div className="flex gap-4 w-full">
                <div className="flex-1 py-3 border border-gray-200 rounded-xl font-pixel text-[0.5rem] text-gray-400">
                  EST. VALUE<br/>
                  <span className="text-black text-xs">{PRIZES[activeIdx].amount}</span>
                </div>
                <div className="flex-1 py-3 border border-gray-200 rounded-xl font-pixel text-[0.5rem] text-gray-400">
                  REWARD<br/>
                  <span className="text-black text-xs">CERTIFICATE</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ff00ff;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}