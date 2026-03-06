"use client";

import React from "react";
import Image from "next/image";
import { FaDiscord, FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactFooter() {
  return (
    <footer className="w-full bg-[#18181a] py-16 px-4 text-white">
      <div className="max-w-4xl mx-auto flex flex-row items-center">
        {/* Left: Photo space (1/3rd width) */}
        <div className="flex-shrink-0 w-1/3 h-full flex items-center justify-center">
          {/* Add your photo here, e.g.: */}
          <Image src="/images/footercat.png" alt="Footer Photo" width={450} height={450} className="rounded-full" />
        </div>
        {/* Right: Footer content (2/3rd width) */}
        <div className="flex-1 pl-12">
          <h2 className="font-pixel text-3xl mb-4" style={{ letterSpacing: '0.04em' }}>JOIN THE COMMUNITY</h2>
          <p className="font-rajdhani text-lg mb-10 text-gray-300">
            Connect with fellow developers, share ideas, and stay updated on the latest hackathon news
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 justify-center">
            <a href="https://discord.com" target="_blank" rel="noopener" className="flex flex-col items-center justify-center bg-[#23232b] rounded-xl border border-gray-700 py-6 px-4 hover:bg-[#31313a] transition">
              <FaDiscord size={32} className="mb-2" />
              <span className="font-rajdhani text-base">Discord</span>
            </a>
 

            <a href="https://www.instagram.com/thesingularity.srmap/" target="_blank" rel="noopener" className="flex flex-col items-center justify-center bg-[#23232b] rounded-xl border border-gray-700 py-6 px-4 hover:bg-[#31313a] transition">
              <FaInstagram size={32} className="mb-2" />
              <span className="font-rajdhani text-base">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/the-singularity-advanced-research-lab-srmap/" target="_blank" rel="noopener" className="flex flex-col items-center justify-center bg-[#23232b] rounded-xl border border-gray-700 py-6 px-4 hover:bg-[#31313a] transition">
              <FaLinkedin size={32} className="mb-2" />
              <span className="font-rajdhani text-base">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
