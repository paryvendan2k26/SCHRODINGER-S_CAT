"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const PRIZES = [
  { rank: "GRAND WINNER", amount: "₹1,00,000", detail: "Cash + Certificate", cat: "/images/cat.png", crazy: "Quantum leap! You broke the box and found the cat alive!", trophy: "/images/t1.png" },
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
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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
        <div className="flex flex-row gap-0 w-full overflow-x-auto items-center">
          <div className="flex-shrink-0 mr-6">
            {/* Add your left photo here, e.g.: */}
            {/* <Image src="/images/trophy-left.png" alt="Left Photo" width={80} height={80} className="rounded-full" /> */}
          </div>
          {PRIZES.map((prize, idx) => (
            <TicketPrizeCard
              key={prize.rank}
              prize={prize}
              open={openIdx === idx}
              onTap={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </div>
        <div className="w-full flex justify-center mt-12">
          {/* Add your round thread image here, e.g.: */}
          {/* <Image src="/images/thread.png" alt="Thread" width={120} height={120} className="rounded-full" /> */}
        </div>
      </div>

    </section>
  );
}

function TicketPrizeCard({ prize, open, onTap }: { prize: Prize; open: boolean; onTap: () => void }) {
  return (
    <div
      className={`relative flex flex-row items-center bg-white border border-gray-300 ticket-shadow transition-all duration-300 cursor-pointer ${open ? "z-20 scale-105" : "z-10 scale-100"}`}
      style={{
        minWidth: open ? 340 : 220,
        maxWidth: 420,
        marginLeft: "-32px",
        borderRadius: "48px",
        boxShadow: open ? "0 8px 32px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.08)",
        padding: open ? "32px 24px" : "16px 12px",
        overflow: "visible",
      }}
      onClick={onTap}
    >
      {/* Removed black circles (notched edges) */}
      <div className="flex flex-col items-center justify-center mr-4">
        <Image src={prize.trophy} alt="Trophy" width={open ? 64 : 32} height={open ? 64 : 32} className="mb-2" />
      </div>
      <div className="flex-1">
        <div className="font-pixel text-lg mb-2" style={{ color: "#ff00ff" }}>{prize.rank}</div>
        <div className="font-pixel text-xl mb-2" style={{ color: "#222" }}>{prize.amount}</div>
        <div className="font-vt323 text-md mb-2" style={{ color: "#444", opacity: 0.8 }}>{prize.detail}</div>
        {open && (
          <div className="font-vt323 text-sm mt-2" style={{ color: '#ffd700', fontWeight: 600 }}>
            {prize.crazy}
          </div>
        )}
      </div>
      <Image src={prize.cat} alt="Cat" width={open ? 48 : 32} height={open ? 48 : 32} className="ml-4" />
    </div>
  );
}


