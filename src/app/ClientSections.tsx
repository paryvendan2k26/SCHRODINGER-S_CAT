"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";

const StarfieldCanvas   = dynamic(() => import("@/components/StarfieldCanvas"),   { ssr: false });
const CountdownSection  = dynamic(() => import("@/components/CountdownSection"),  { ssr: false });
const AboutSection      = dynamic(() => import("@/components/AboutSection"),      { ssr: false });
const PrizesSection     = dynamic(() => import("@/components/PrizesSection"),     { ssr: false });
const EligibilitySection = dynamic(() => import("@/components/EligibilitySection"), { ssr: false });
const ContactFooter     = dynamic(() => import("@/components/ContactFooter"),     { ssr: false });

// FAQ Section
function FAQSection() {
  return (
    <section className="relative py-24 px-4" style={{ zIndex: 1, background: "rgba(10, 0, 20, 0.92)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-vt323 block tracking-widest mb-2" style={{ fontSize: "1.2rem", color: "#ff6b00", opacity: 0.7 }}>{"// FAQ"}</span>
          <h2 className="font-pixel" style={{ fontSize: "clamp(0.8rem, 2.5vw, 1.5rem)", color: "#ff00ff" }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        <div className="space-y-6">
          <div className="bg-black bg-opacity-40 rounded-xl p-6">
            <h3 className="font-pixel text-lg text-cyan-400 mb-2">Who can participate?</h3>
            <p className="font-rajdhani text-white">All UG/PG students across India are eligible. Interdisciplinary teams are encouraged.</p>
          </div>
          <div className="bg-black bg-opacity-40 rounded-xl p-6">
            <h3 className="font-pixel text-lg text-cyan-400 mb-2">How do I register?</h3>
            <p className="font-rajdhani text-white">Registration details will be announced soon. Stay tuned to the website and social media.</p>
          </div>
          <div className="bg-black bg-opacity-40 rounded-xl p-6">
            <h3 className="font-pixel text-lg text-cyan-400 mb-2">Is there a participation fee?</h3>
            <p className="font-rajdhani text-white">No, participation is free for all eligible students.</p>
          </div>
          <div className="bg-black bg-opacity-40 rounded-xl p-6">
            <h3 className="font-pixel text-lg text-cyan-400 mb-2">Can I join solo?</h3>
            <p className="font-rajdhani text-white">Teams must have 3–5 members. Find collaborators or join the community to form a team.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sponsors Section
function SponsorsSection() {
  const sponsors = [
    { logo: "/logos/title.png" },
    { logo: "/logos/diamond.png" },
    { logo: "/logos/platinum.png" },
    { logo: "/logos/technical.png" },
    { logo: "/logos/community.png" },
    { logo: "/logos/silver.png" },
  ];
  return (
    <section id="sponsors" className="relative py-24 px-4" style={{ zIndex: 1, background: "rgba(5,0,8,0.92)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-pixel" style={{ fontSize: "clamp(1rem, 3vw, 2rem)", color: "#ffd700" }}>Sponsors</h2>
        </div>
        <div className="flex flex-col gap-8 items-center">
          {/* Row 1: 1 sponsor */}
          <div className="flex justify-center gap-8">
            <Image src={sponsors[0].logo} alt="Sponsor logo" width={120} height={120} className="w-32 h-32 object-contain" />
          </div>
          {/* Row 2: 2 sponsors */}
          <div className="flex justify-center gap-8">
            <Image src={sponsors[1].logo} alt="Sponsor logo" width={120} height={120} className="w-32 h-32 object-contain" />
            <Image src={sponsors[2].logo} alt="Sponsor logo" width={120} height={120} className="w-32 h-32 object-contain" />
          </div>
          {/* Row 3: 1 sponsor */}
          <div className="flex justify-center gap-8">
            <Image src={sponsors[3].logo} alt="Sponsor logo" width={120} height={120} className="w-32 h-32 object-contain" />
          </div>
          {/* Row 4: 2 sponsors */}
          <div className="flex justify-center gap-8">
            <Image src={sponsors[4].logo} alt="Sponsor logo" width={120} height={120} className="w-32 h-32 object-contain" />
            <Image src={sponsors[5].logo} alt="Sponsor logo" width={120} height={120} className="w-32 h-32 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Organizers Section
function OrganizersSection() {
  const organizers = [
    { name: "Jayanth Ramakrishnan", role: "Event Coordinator", photo: "/photos/jayanth.jpg" },
    { name: "Parvendan R", role: "Event Coordinator", photo: "/photos/parvendan.jpg" },
    { name: "Aditi Sharma", role: "Core Team", photo: "/photos/aditi.jpg" },
    { name: "Rahul Singh", role: "Core Team", photo: "/photos/rahul.jpg" },
    { name: "Priya Patel", role: "Core Team", photo: "/photos/priya.jpg" },
    { name: "Siddharth Rao", role: "Core Team", photo: "/photos/siddharth.jpg" },
  ];
  return (
    <section className="relative py-24 px-4" style={{ zIndex: 1, background: "rgba(0,0,0,0.97)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-vt323 block tracking-widest mb-2" style={{ fontSize: "1.2rem", color: "#ff6b00", opacity: 0.7 }}>{"// SECTION — ORGANIZERS"}</span>
          <h2 className="font-pixel" style={{ fontSize: "clamp(0.8rem, 2.5vw, 1.5rem)", color: "#ff00ff" }}>
            MEET THE CORE TEAM
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizers.map((org) => (
            <div key={org.name} className="rounded-xl p-6 flex flex-col items-center justify-center pixel-border" style={{ background: "rgba(10,0,20,0.8)", boxShadow: `0 0 20px #ff6b00` }}>
              <Image src={org.photo} alt={org.name + " photo"} width={96} height={96} className="w-24 h-24 rounded-full object-cover mb-4" style={{ filter: "drop-shadow(0 0 8px #ff6b00)" }} />
              <div className="font-pixel text-lg mb-2" style={{ color: "#ff6b00" }}>{org.name}</div>
              <div className="font-vt323 text-sm" style={{ color: "#e8e8ff", opacity: 0.7 }}>{org.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ClientSections() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <StarfieldCanvas />
      </Suspense>
      <main style={{ position: "relative", zIndex: 1 }}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* SECTION 2 — Countdown */}
          <CountdownSection />
          {/* SECTION 3 — About */}
          <AboutSection />
          {/* SECTION 4 — Prizes */}
          <PrizesSection />
          {/* Sponsors Section */}
          <SponsorsSection />
          {/* Eligibility & FAQ */}
          <EligibilitySection />
          <FAQSection />
          {/* Organizers Section */}
          <OrganizersSection />
          {/* Contact & Footer */}
          <ContactFooter />
        </Suspense>
      </main>
    </>
  );
}
