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
          <Image src="/photos/rambabu.png" alt="Keynote Speaker" width={120} height={120} className="rounded-full mr-8" />
          <div className="flex-1">
            <div className="font-pixel text-xl mb-2" style={{ color: '#ff00ff' }}>Dr. Rambabu Vasupilli</div>
            <div className="font-vt323 text-md mb-2" style={{ color: '#444', opacity: 0.8 }}>
An entrepreneur, technologist, and career mentor with 20+ years of experience, he has guided thousands of professionals globally. As Founder & CEO of NCPL Group, he focuses on innovation, mentorship, and helping individuals build successful careers in modern digital technologies.            </div>
            <div className="font-vt323 text-sm mt-2" style={{ color: '#ffd700', fontWeight: 600 }}>
              &quot;Building businesses. Mentoring minds. Balancing tradition and innovation.&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
