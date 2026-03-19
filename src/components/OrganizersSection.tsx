"use client";

import Image from "next/image";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const CORE_TEAM = [
  { name: "Jayanth Ramakrishnan", role: "Event Lead", email: "jayanth_ramakrishnan@srmap.edu.in", photo: "/photos/jayanth.jpeg", linkedin: "#", instagram: "#" },
  { name: "Parvendan R", role: "Event Co-Lead", email: "parvendan_r@srmap.edu.in", photo: "/photos/parvendan.jpeg", linkedin: "#", instagram: "#" },
  { name: "Dr Priyanka", role: "Advisor", email: "priyanka.s@srmap.edu.in", photo: "/photos/priyanka.png", linkedin: "#", instagram: "#" },
  { name: "Abir Krishna Banerjee", role: "Core Team", email: "abirkrishna_banerjee@srmap.edu.in", photo: "/photos/Abir.jpg", linkedin: "#", instagram: "#" },
  { name: "Pradeep", role: "Core Team", email: "prasanpradeep_chalamcharla@srmap.edu.in", photo: "/photos/Pradeep.jpg", linkedin: "#", instagram: "#" },
  { name: "Lokesh K", role: "Core Team", email: "lokesh_k@srmap.edu.in", photo: "/photos/lokesh.jpeg", linkedin: "#", instagram: "#" },
];

export default function OrganizersSection() {
  // Double the team array for the infinite loop
  const duplicatedTeam = [...CORE_TEAM, ...CORE_TEAM];

  return (
    <section className="relative py-24 px-4 w-full overflow-hidden" style={{ background: 'rgba(5,0,8,0.95)' }}>
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="font-vt323 block tracking-widest mb-2" style={{ fontSize: '1.2rem', color: '#ff00ff', opacity: 0.7 }}>// SECTION 08</span>
          <h2 className="font-pixel text-2xl md:text-3xl" style={{ color: '#ffd700' }}>THE ARCHITECTS</h2>
        </div>

        <div className="relative w-full">
          {/* Main Scrolling Track */}
          <div className="flex w-max animate-scroll-x hover:pause">
            {duplicatedTeam.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="relative flex flex-col items-center bg-black/40 border border-white/10 backdrop-blur-sm transition-all duration-300 mx-4 rounded-2xl p-8 min-w-[320px] h-[450px] hover:border-[#ff00ff]/50 group"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              >

                {/* SMALL IMAGE IN TOP RIGHT CORNER */}
                <div className="absolute top-4 right-4 w-10 h-10 z-10">
                  <Image 
                    src="/images/cat.png" // Replace with your small image path
                    alt="Decorative Icon"
                    width={40}
                    height={40}
                    className="object-contain opacity-20 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                {/* LARGER IMAGE CONTAINER */}
                <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-xl border-2 border-white/5 group-hover:border-[#ff00ff]/40 transition-colors">
                  <Image 
                    src={member.photo} 
                    alt={member.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110" 
                  />
                </div>

                {/* TEXT CONTENT */}
                <div className="text-center flex-1 flex flex-col justify-center">
                  <h3 className="font-pixel text-lg mb-2" style={{ color: '#ff00ff' }}>
                    {member.name}
                  </h3>
                  <p className="font-vt323 text-md uppercase tracking-wider mb-6" style={{ color: '#ffffff', opacity: 0.6 }}>
                    {member.role}
                  </p>
                  
                  {/* SOCIALS INCLUDING EMAIL */}
                  <div className="flex justify-center gap-6">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#0077b5] transition-colors">
                      <FaLinkedin size={24} />
                    </a>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#e1306c] transition-colors">
                      <FaInstagram size={24} />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-white/40 hover:text-cyan-400 transition-colors">
                      <FaEnvelope size={24} />
                    </a>
                  </div>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-x {
          display: flex;
          animation: scroll-x 40s linear infinite; /* Adjusted speed for larger cards */
        }

        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}