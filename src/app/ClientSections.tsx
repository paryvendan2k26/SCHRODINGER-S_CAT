"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const StarfieldCanvas   = dynamic(() => import("@/components/StarfieldCanvas"),   { ssr: false });
const CountdownSection  = dynamic(() => import("@/components/CountdownSection"),  { ssr: false });
const AboutSection      = dynamic(() => import("@/components/AboutSection"),      { ssr: false });
const PrizesSection     = dynamic(() => import("@/components/PrizesSection"),     { ssr: false });
const TimelineSection   = dynamic(() => import("@/components/TimelineSection"),   { ssr: false });
const TracksSection     = dynamic(() => import("@/components/TracksSection"),     { ssr: false });
const EligibilitySection = dynamic(() => import("@/components/EligibilitySection"), { ssr: false });
const ContactFooter     = dynamic(() => import("@/components/ContactFooter"),     { ssr: false });

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
          {/* SECTION 5 — Timeline */}
          <TimelineSection />
          {/* SECTION 6 — Tracks */}
          <TracksSection />
          {/* SECTION 7 — Eligibility & FAQ */}
          <EligibilitySection />
          {/* SECTION 8 — Contact & Footer */}
          <ContactFooter />
        </Suspense>
      </main>
    </>
  );
}
