"use client";

import { useRef } from "react";
import Image from "next/image";

const PRIZES = [
  { rank: "WINNER", amount: "₹1,00,000", detail: "Cash + Certificate", cat: "/images/cat.png", crazy: "Quantum leap! You broke the box and found the cat alive!", trophy: "/images/t1.png" },
  { rank: "1ST RUNNER UP", amount: "₹50,000", detail: "Cash + Certificate", cat: "/images/cat.png", crazy: "Almost there! You nearly collapsed the wave function!", trophy: "/images/t2.png" },
  { rank: "2ND RUNNER UP", amount: "₹25,000", detail: "Cash + Certificate", cat: "/images/cat.png", crazy: "Entangled with greatness! You’re a quantum runner!", trophy: "/images/t3.png" },
  { rank: "3RD RUNNER UP", amount: "₹10,000", detail: "Cash + Certificate", cat: "/images/cat.png", crazy: "Superposition specialist! You’re both winner and runner!", trophy: "/images/t4.png" },
  { rank: "BEST UI/UX", amount: "₹5,000", detail: "Track Prize", cat: "/images/cat.png", crazy: "Your interface is so smooth, even the cat purrs!", trophy: "/images/t4.png" },
  { rank: "BEST HARDWARE", amount: "₹5,000", detail: "Track Prize", cat: "/images/cat.png", crazy: "You built a device that could measure the cat’s fate!", trophy: "/images/t4.png" },
  { rank: "BEST AI/ML", amount: "₹5,000", detail: "Track Prize", cat: "/images/cat.png", crazy: "Your AI predicted the cat’s future!", trophy: "/images/t4.png" },
];

type Prize = {
  rank: string;
  amount: string;
  detail: string;
  cat: string;
  crazy: string;
  trophy: string;
};

export default function PrizesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="prizes"
      className="relative py-24 px-4"
      style={{ zIndex: 1, background: "rgba(10,0,20,0.92)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="font-vt323 block tracking-widest mb-2"
            style={{ fontSize: "1.2rem", color: "#ff00ff", opacity: 0.7 }}
          >
            {"// SECTION 03"}
          </span>
          <h2
            className="font-pixel"
            style={{ fontSize: "clamp(1rem, 3vw, 2rem)", color: "#ffd700" }}
          >
            REWARDS & PRIZES
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {/* Row 1: Winner */}
          <PrizeCard prize={PRIZES[0]} fullWidth />
          {/* Row 2: 1st runner up */}
          <PrizeCard prize={PRIZES[1]} fullWidth />
          {/* Row 3: 2nd & 3rd runner up */}
          <div className="flex flex-row gap-8 w-full">
            <PrizeCard prize={PRIZES[2]} fullWidth />
            <PrizeCard prize={PRIZES[3]} fullWidth />
          </div>
          {/* Row 4: 3 track prizes */}
          <div className="flex flex-row gap-8 w-full">
            <PrizeCard prize={PRIZES[4]} fullWidth />
            <PrizeCard prize={PRIZES[5]} fullWidth />
            <PrizeCard prize={PRIZES[6]} fullWidth />
          </div>
        </div>
      </div>
    </section>
  );
}

function PrizeCard({ prize, fullWidth }: { prize: Prize; fullWidth?: boolean }) {
  // Determine trophy space size
  const isMainPrize = ["WINNER", "1ST RUNNER UP", "2ND RUNNER UP", "3RD RUNNER UP"].includes(prize.rank);
  return (
    <div
      className={`relative rounded-xl p-6 pixel-border transition-all duration-300 bg-black bg-opacity-80 flex flex-row items-start`}
      style={{
        width: fullWidth ? "100%" : undefined,
        minWidth: fullWidth ? undefined : 220,
        minHeight: 180,
        boxShadow: "0 0 20px #ff00ff",
      }}
    >
      {/* Trophy image space (left side of card) */}
      <div className={isMainPrize ? "min-w-[80px] flex flex-col items-start justify-start mr-4" : "min-w-[48px] flex flex-col items-start justify-start mr-4"}>
        <Image src={prize.trophy} alt="Trophy" width={isMainPrize ? 64 : 32} height={isMainPrize ? 64 : 32} className="mb-2" />
      </div>
      {/* Card content */}
      <div className="flex-1">
        {/* Cat image in corner */}
        <Image
          src={prize.cat}
          alt="Cat"
          width={48}
          height={48}
          className="absolute bottom-2 right-2 w-12 h-12"
        />
        <div
          className="font-pixel text-lg mb-2"
          style={{ color: "#ff00ff" }}
        >
          {prize.rank}
        </div>
        <div className="mt-4">
          <div
            className="font-pixel text-xl mb-2"
            style={{ color: "#ffffff" }}
          >
            {prize.amount}
          </div>
          <div
            className="font-vt323 text-md mb-2"
            style={{ color: "#e8e8ff", opacity: 0.8 }}
          >
            {prize.detail}
          </div>
          <div className="font-vt323 text-sm mt-2" style={{ color: '#ffd700', fontWeight: 600 }}>
            {prize.crazy}
          </div>
        </div>
      </div>
    </div>
  );
}
