"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import OrganizersSection from "@/components/OrganizersSection";
import KeynoteSpeakerSection from "@/components/KeynoteSpeakerSection";

const StarfieldCanvas   = dynamic(() => import("@/components/StarfieldCanvas"),   { ssr: false });
const CountdownSection  = dynamic(() => import("@/components/CountdownSection"),  { ssr: false });
const AboutSection      = dynamic(() => import("@/components/AboutSection"),      { ssr: false });
const PrizesSection     = dynamic(() => import("@/components/PrizesSection"),     { ssr: false });
const EligibilitySection = dynamic(() => import("@/components/EligibilitySection"), { ssr: false });
const ContactFooter     = dynamic(() => import("@/components/ContactFooter"),     { ssr: false });

import { useState } from "react";

function FAQSection() {
  const faqs = [
    { q: "Who can participate?", a: "All UG/PG students across India are eligible. Interdisciplinary teams are encouraged." },
    { q: "How do I register?", a: "Registration details will be announced soon via our website and social media." },
    { q: "Is there a fee?", a: "No, participation is completely free for all eligible students." },
    { q: "Can I join solo?", a: "Teams must have 3–5 members. Join our Discord to find teammates!" },
    { q: "What is the duration?", a: "It's a 36-hour non-stop hackathon starting Friday evening." },
    { q: "Is it online?", a: "This is an in-person event. Venue details will be shared soon." },
    { q: "Are meals provided?", a: "Yes, we provide meals, snacks, and plenty of caffeine for the 36 hours." },
    { q: "What should I bring?", a: "Your laptop, chargers, any hardware you need, and personal essentials." },
    { q: "Are there prizes?", a: "Yes! Significant cash prizes and sponsored awards are up for grabs." },
    { q: "Need more help?", a: "Feel free to reach out to our organizers via the contact section below." },
  ];

  return (
    <section className="relative py-24 px-4" style={{ zIndex: 1, background: "rgba(10, 0, 20, 0.92)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-vt323 block tracking-widest mb-2" style={{ fontSize: "1.2rem", color: "#ff6b00", opacity: 0.7 }}>{"// FAQ"}</span>
          <h2 className="font-pixel text-2xl lg:text-3xl" style={{ color: "#ff00ff" }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-black/40 border border-white/5 rounded-lg overflow-hidden transition-all duration-300">
              <summary className="list-none cursor-pointer p-4 flex justify-between items-center hover:bg-white/5">
                <h3 className="font-pixel text-[0.7rem] lg:text-[0.85rem] text-white tracking-tight">
                  {faq.q}
                </h3>
                <span className="text-cyan-400 text-xs transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <div className="p-4 pt-0 border-t border-white/5">
                <p className="font-rajdhani text-white/80 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Hide the default triangle arrow in browsers */
        summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </section>
  );
}
// A reusable Card component to keep your code clean
const LogoCard = ({ src, sizeClass = "w-48 h-24" }) => (
  <div className={`${sizeClass} flex items-center justify-center bg-white border border-white rounded-xl p-4 hover:bg-white transition-all duration-300 shadow-lg`}>
    <Image 
      src={src} 
      alt="Sponsor logo" 
      width={200} 
      height={100} 
      className="max-w-full max-h-full object-contain" 
    />
  </div>
);

function SponsorsSection() {
  const sponsors = [
    { logo: "/logos/ncpl.png" },
    { logo: "/logos/hrud.png" },
    { logo: "/logos/platinum.png" },
    { logo: "/logos/technical.png" },
    { logo: "/logos/interviewbuddy.png" },
    { logo: "/logos/flatlogic.png" },
  ];

  return (
    <section id="sponsors" className="relative py-16 px-4" style={{ zIndex: 1, background: "rgba(5,0,8,0.92)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-4xl" style={{ color: "#ffd700" }}>Sponsors</h2>
        </div>

        <div className="flex flex-col gap-6 items-center">
          {/* Row 1: The Main Sponsor (Extra Large Card) */}
          <div className="flex justify-center">
            <LogoCard src={sponsors[0].logo} sizeClass="w-80 h-40" />
          </div>

          {/* Row 2: Secondary Sponsors (Medium Cards) */}
          <div className="flex flex-wrap justify-center gap-6">
            <LogoCard src={sponsors[1].logo} sizeClass="w-60 h-32" />
            <LogoCard src={sponsors[2].logo} sizeClass="w-60 h-32" />
          </div>

          {/* Row 3: All other Sponsors (Standard Cards) */}
          <div className="flex flex-wrap justify-center gap-6">
            <LogoCard src={sponsors[3].logo} sizeClass="w-52 h-28" />
            <LogoCard src={sponsors[4].logo} sizeClass="w-52 h-28" />
            <LogoCard src={sponsors[5].logo} sizeClass="w-52 h-28" />
          </div>
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
          {/* Keynote Speaker Section */}
          <KeynoteSpeakerSection />
          {/* Sponsors Section */}
          <SponsorsSection />
          {/* Eligibility & FAQ */}
          <EligibilitySection />
          <FAQSection />
          {/* Organizers Section above Footer */}
          <OrganizersSection />
          {/* Contact & Footer */}
          <ContactFooter />
        </Suspense>
      </main>
    </>
  );
}
