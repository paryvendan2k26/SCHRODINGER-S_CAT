# 🐱 Mission: Schrödinger's Cat — Hackathon Website

**36-Hour India's Biggest Student-Led Hackathon**  
SRM University AP, Amaravati • March 27–29, 2026  
₹25,00,000 Total Prize Pool

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + Custom CSS |
| Animations | GSAP 3 (ScrollTrigger, TextPlugin) |
| 3D Background | Three.js r128 |
| Fonts | Press Start 2P, VT323, Rajdhani (Google Fonts) |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # All custom CSS, animations, pixel art styles
│   ├── layout.tsx           # Root layout with Google Fonts
│   └── page.tsx             # Main page assembling all sections
│
└── components/
    ├── StarfieldCanvas.tsx  # Three.js 3000-star background + nebula clusters
    ├── Navbar.tsx           # Sticky pixel navbar (appears on scroll)
    ├── HeroSection.tsx      # Hero with GSAP master timeline + CSS pixel cat
    ├── CountdownSection.tsx # Live countdown to March 27, 2026 9PM IST
    ├── AboutSection.tsx     # Quantum wave SVG + word stagger animation
    ├── PrizesSection.tsx    # Box opening animation + prize card fly-out
    ├── TimelineSection.tsx  # Horizontal scroll timeline (GSAP pin)
    ├── TracksSection.tsx    # Track cards with rotateY flip entrance
    ├── EligibilitySection.tsx # Eligibility + accordion FAQ
    ├── ContactFooter.tsx    # Organizer contacts + footer
    └── SectionDivider.tsx   # SVG draw-on-scroll divider lines
```

---

## Features

### 🎨 Visual
- **Dark cosmic pixel-art** aesthetic throughout
- **Pure black + deep purple + neon orange/cyan/pink** palette
- **CSS grain/noise** overlay for texture depth
- **CSS scan lines** for CRT monitor effect
- **Custom crosshair** cursor
- **CSS pixel art cat** via box-shadows with cyan glowing eyes

### ⚡ Animations
- **Master page load timeline** (9-step sequence)
- **Glitch effect** on "MISSION" heading (on load + on hover)
- **TextPlugin typewriter** for subtitle
- **ScrollTrigger reveals** on every section
- **Three.js starfield** with 3000 stars + 6 nebula clusters
- **Parallax** on mouse move (starfield moves opposite to cursor)
- **Countdown flip** animation on digit changes
- **Word-by-word stagger** in About section
- **Box opening** + **prize card fly-out** in Prizes section
- **Horizontal pinned scroll** timeline on desktop
- **rotateY flip** entrance for track cards
- **SVG stroke-dashoffset** section dividers

### 📱 Responsive
- All grids collapse to single column on mobile
- Timeline switches to vertical layout on mobile
- Font sizes clamp with `clamp()` for fluid scaling
- Touch-friendly button hit areas

---

## Organizers

| Name | Email | Phone |
|------|-------|-------|
| Jayanth Ramakrishnan | jayanth_ramakrishnan@srmap.edu.in | +91 9080866770 |
| Parvendan R | parvendan_r@srmap.edu.in | +91 7904029810 |

---

## Prize Pool

| Prize | Amount |
|-------|--------|
| Winner | ₹1,00,000 |
| 1st Runner Up | ₹50,000 |
| 2nd Runner Up | ₹25,000 |
| 3rd Runner Up | ₹10,000 |
| Best UI/UX | ₹5,000 |
| Best Hardware | ₹5,000 |
| Best AI/ML | ₹5,000 |
| **Total** | **₹25,00,000** |

---

*"The cat is neither alive nor dead — until you build something."*  
**Singularity Lab × SRM University AP**
