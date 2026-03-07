"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ELIGIBILITY = [
  { title: "SCOPE", text: "All UG & PG Students in India" },
  { title: "UNIT", text: "Team Size: 3–5 Members" },
  { title: "HYBRID", text: "Interdisciplinary teams encouraged" },
  { title: "DOMAIN", text: "Business Solutions & Advancements" },
];

const CRITERIA = [
  { phase: "PHASE 01", label: "SCREENING", marks: "40M", color: "#ff6b00", items: ["Technical Implementation", "Feasibility & Innovation", "Problem Relevance"] },
  { phase: "PHASE 02", label: "FINAL", marks: "40M", color: "#00ffff", items: ["Design & UX", "Functionality", "Presentation & Pitch"] },
  { phase: "BONUS", label: "EXTRA", marks: "20M", color: "#ff00ff", items: ["Track Excellence", "Social Impact", "Wow Factor"] },
];

export default function EligibilitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(sectionRef.current, { opacity: 0 }, {
        opacity: 1, duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
      });
    };
    loadGSAP();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-4 overflow-hidden" style={{ background: "rgba(5, 0, 8, 0.95)" }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-l-4 border-orange-500 pl-6">
          <span className="font-vt323 text-orange-500 tracking-[0.3em] uppercase text-sm">// Protocol 06</span>
          <h2 className="font-pixel text-2xl md:text-3xl text-white mt-2 uppercase tracking-tighter">
            Experiment <span className="text-orange-500">Requirements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Eligibility List (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-pixel text-[0.6rem] text-orange-500 mb-6 uppercase tracking-widest">Target Subjects</h3>
            {ELIGIBILITY.map((item, i) => (
              <div key={i} className="group relative p-4 bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                <div className="font-pixel text-[0.5rem] text-orange-500/60 mb-1">{item.title}</div>
                <div className="font-rajdhani text-white text-sm font-semibold">{item.text}</div>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          {/* CENTER: Interactive Evaluation (6 Cols) */}
          <div className="lg:col-span-6 bg-black/40 border border-white/5 p-6 relative">
            <h3 className="font-pixel text-[0.6rem] text-cyan-400 mb-8 uppercase tracking-widest text-center">Scoring Matrices</h3>
            
            <div className="flex justify-between mb-8 border-b border-white/10">
              {CRITERIA.map((c, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTab(i)}
                  className={`pb-4 font-pixel text-[0.55rem] transition-all duration-300 ${activeTab === i ? 'text-white border-b-2' : 'text-white/30 hover:text-white/60'}`}
                  style={{ borderColor: activeTab === i ? CRITERIA[i].color : 'transparent' }}
                >
                  {c.phase}
                </button>
              ))}
            </div>

            <div className="min-h-[200px]">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-pixel text-2xl" style={{ color: CRITERIA[activeTab].color }}>{CRITERIA[activeTab].marks}</span>
                <span className="font-pixel text-xs text-white uppercase tracking-widest">{CRITERIA[activeTab].label}</span>
              </div>
              <ul className="space-y-3">
                {CRITERIA[activeTab].items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 font-rajdhani text-white/70 bg-white/5 p-3 rounded-sm border-l-2" style={{ borderColor: CRITERIA[activeTab].color }}>
                    <span className="text-[0.6rem] opacity-50">0{j+1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Cat Image Space (3 Cols) */}
          <div className="lg:col-span-3 flex items-center justify-center relative min-h-[400px]">
             {/* Replace with your actual Cat PNG */}
             <div className="relative w-full h-full group">
                <Image 
                  src="/images/standingCat.png" 
                  alt="Quantum Cat" 
                  fill
                  className="object-contain filter drop-shadow-[0_0_15px_rgba(255,149,0,0.3)] group-hover:drop-shadow-[0_0_30px_rgba(255,149,0,0.6)] transition-all duration-500"
                />
                {/* Floating UI element effect */}
                <div className="absolute top-1/4 -left-4 font-pixel text-[0.4rem] text-orange-500 animate-pulse bg-black/80 p-1 border border-orange-500">
                  OBSERVER DETECTED
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}