import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mission: Schrödinger's Cat | SRM University AP",
  description:
    "36-Hour India's Biggest Student-Led Hackathon — March 27–29, 2026. SRM University AP, Amaravati. ₹25,00,000 Prize Pool.",
  keywords: ["hackathon", "SRM University AP", "Schrödinger", "Singularity Lab", "coding competition"],
    icons: {
    icon:"/images/cat.png ",
  },

  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Rajdhani:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
