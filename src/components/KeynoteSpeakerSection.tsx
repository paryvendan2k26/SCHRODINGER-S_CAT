"use client";

import Image from "next/image";

export default function KeynoteSpeakerSection() {
  return (
    <section className="relative py-16 px-4 w-full" style={{ background: 'rgba(10,0,20,0.92)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-vt323 block tracking-widest mb-2" style={{ fontSize: '1.2rem', color: '#ff00ff', opacity: 0.7 }}>KEYNOTE SPEAKER</span>
          <h2 className="font-pixel" style={{ fontSize: 'clamp(1rem, 3vw, 2rem)', color: '#ffd700' }}>Special Guest</h2>
        </div>
        <div className="flex flex-row items-center bg-white rounded-3xl shadow-lg border border-gray-300 p-8 w-full max-w-4xl mx-auto">
          <Image src="/photos/keynote.png" alt="Keynote Speaker" width={120} height={120} className="rounded-full mr-8" />
          <div className="flex-1">
            <div className="font-pixel text-xl mb-2" style={{ color: '#ff00ff' }}>Dr. Quantum Singh</div>
            <div className="font-vt323 text-md mb-2" style={{ color: '#444', opacity: 0.8 }}>
              Renowned quantum physicist, TEDx speaker, and author. Dr. Singh will share insights on innovation, quantum computing, and the future of technology.
            </div>
            <div className="font-vt323 text-sm mt-2" style={{ color: '#ffd700', fontWeight: 600 }}>
              &quot;Unlocking the mysteries of the universe, one qubit at a time.&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
