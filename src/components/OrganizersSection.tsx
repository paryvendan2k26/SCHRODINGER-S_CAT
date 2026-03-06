"use client";

import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const CORE_TEAM = [
  { name: "Jayanth Ramakrishnan", role: "Event Coordinator", photo: "/photos/jayanth.jpg", linkedin: "https://linkedin.com/in/jayanth", instagram: "https://instagram.com/jayanth" },
  { name: "Parvendan R", role: "Event Coordinator", photo: "/photos/parvendan.jpg", linkedin: "https://linkedin.com/in/parvendan", instagram: "https://instagram.com/parvendan" },
  { name: "Aditi Sharma", role: "Core Team", photo: "/photos/aditi.jpg", linkedin: "https://linkedin.com/in/aditi", instagram: "https://instagram.com/aditi" },
  { name: "Rahul Singh", role: "Core Team", photo: "/photos/rahul.jpg", linkedin: "https://linkedin.com/in/rahul", instagram: "https://instagram.com/rahul" },
  { name: "Priya Patel", role: "Core Team", photo: "/photos/priya.jpg", linkedin: "https://linkedin.com/in/priya", instagram: "https://instagram.com/priya" },
  { name: "Siddharth Rao", role: "Core Team", photo: "/photos/siddharth.jpg", linkedin: "https://linkedin.com/in/siddharth", instagram: "https://instagram.com/siddharth" },
];

export default function OrganizersSection() {
  return (
    <section className="relative py-16 px-4 w-full" style={{ background: 'rgba(10,0,20,0.92)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-vt323 block tracking-widest mb-2" style={{ fontSize: '1.2rem', color: '#ff00ff', opacity: 0.7 }}>CORE TEAM</span>
          <h2 className="font-pixel" style={{ fontSize: 'clamp(1rem, 3vw, 2rem)', color: '#ffd700' }}>Meet the Organizers</h2>
        </div>
        <div className="relative py-4">
          <div className="flex flex-row gap-6 animate-scroll-x">
            {CORE_TEAM.map((member) => (
              <div
                key={member.name}
                className="relative flex flex-row items-center bg-white border border-gray-300 ticket-shadow transition-all duration-300 cursor-pointer rounded-3xl px-6 py-8 min-w-[320px] max-w-[340px] hover:scale-105 hover:z-20 organizer-card"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.08)', transition: 'transform 0.3s', whiteSpace: 'normal' }}
              >
                <Image src={member.photo} alt={member.name} width={64} height={64} className="rounded-full mr-4" />
                <div className="flex-1">
                  <div className="font-pixel text-lg mb-1" style={{ color: '#ff00ff' }}>{member.name}</div>
                  <div className="font-vt323 text-sm mb-2" style={{ color: '#444', opacity: 0.8 }}>{member.role}</div>
                  <div className="flex gap-3 mt-2">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={22} style={{ color: '#0077b5' }} /></a>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram size={22} style={{ color: '#e1306c' }} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-scroll-x {
          display: flex;
          animation: scroll-x 18s linear infinite;
        }
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .organizer-card:hover {
          animation-play-state: paused !important;
        }
        .animate-scroll-x:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
