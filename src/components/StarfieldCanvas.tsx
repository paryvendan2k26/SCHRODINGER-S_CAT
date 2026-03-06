"use client";

import { useEffect, useRef } from "react";

export default function StarfieldCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // ── Dynamic import Three.js (client only) ──
    let THREE: typeof import("three");
    let renderer: import("three").WebGLRenderer;
    let scene: import("three").Scene;
    let camera: import("three").PerspectiveCamera;
    let starField: import("three").Points;
    let nebulaClusters: import("three").Points[] = [];

    const init = async () => {
      THREE = await import("three");

      // Scene
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
      camera.position.z = 500;

      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // ── STARS (3000 particles) ──
      const starCount = 3000;
      const starGeo = new THREE.BufferGeometry();
      const starPos = new Float32Array(starCount * 3);
      const starSizes = new Float32Array(starCount);
      const starColors = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount; i++) {
        starPos[i * 3]     = (Math.random() - 0.5) * 2000;
        starPos[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        starPos[i * 3 + 2] = (Math.random() - 0.5) * 800;

        starSizes[i] = Math.random() * 1.5 + 0.5;

        // Slightly varied colors: white, blue-white, warm
        const colorVariant = Math.random();
        if (colorVariant > 0.85) {
          // Blue-white
          starColors[i * 3]     = 0.8;
          starColors[i * 3 + 1] = 0.9;
          starColors[i * 3 + 2] = 1.0;
        } else if (colorVariant > 0.7) {
          // Warm white
          starColors[i * 3]     = 1.0;
          starColors[i * 3 + 1] = 0.95;
          starColors[i * 3 + 2] = 0.85;
        } else {
          starColors[i * 3]     = 0.9;
          starColors[i * 3 + 1] = 0.9;
          starColors[i * 3 + 2] = 1.0;
        }
      }

      starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
      starGeo.setAttribute("size", new THREE.BufferAttribute(starSizes, 1));
      starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

      const starMat = new THREE.PointsMaterial({
        size: 1.5,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
      });

      starField = new THREE.Points(starGeo, starMat);
      scene.add(starField);

      // ── NEBULA CLUSTERS (6 clusters) ──
      const nebulaDefs = [
        { color: new THREE.Color(0.4, 0.0, 0.6), x: -300, y: 200, z: -100, count: 150 },
        { color: new THREE.Color(1.0, 0.4, 0.0), x: 400,  y: -100, z: -200, count: 120 },
        { color: new THREE.Color(0.2, 0.0, 0.5), x: -500, y: -200, z: -50, count: 180 },
        { color: new THREE.Color(0.8, 0.3, 0.0), x: 200,  y: 300,  z: -150, count: 100 },
        { color: new THREE.Color(0.6, 0.0, 0.8), x: -100, y: -350, z: -80,  count: 140 },
        { color: new THREE.Color(0.0, 0.6, 0.8), x: 500,  y: 100,  z: -120, count: 100 },
      ];

      nebulaDefs.forEach((def) => {
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(def.count * 3);
        const cols = new Float32Array(def.count * 3);

        for (let i = 0; i < def.count; i++) {
          const spread = 80;
          pos[i * 3]     = def.x + (Math.random() - 0.5) * spread;
          pos[i * 3 + 1] = def.y + (Math.random() - 0.5) * spread;
          pos[i * 3 + 2] = def.z + (Math.random() - 0.5) * spread;

          const fade = Math.random() * 0.6 + 0.2;
          cols[i * 3]     = def.color.r * fade;
          cols[i * 3 + 1] = def.color.g * fade;
          cols[i * 3 + 2] = def.color.b * fade;
        }

        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        geo.setAttribute("color", new THREE.BufferAttribute(cols, 3));

        const mat = new THREE.PointsMaterial({
          size: 3,
          sizeAttenuation: true,
          vertexColors: true,
          transparent: true,
          opacity: 0.5,
        });

        const cluster = new THREE.Points(geo, mat);
        scene.add(cluster);
        nebulaClusters.push(cluster);
      });

      // ── PARALLAX on mousemove ──
      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;

      const handleMouse = (e: MouseEvent) => {
        targetX = ((e.clientX / window.innerWidth) - 0.5) * 40;
        targetY = ((e.clientY / window.innerHeight) - 0.5) * 40;
      };
      window.addEventListener("mousemove", handleMouse);

      // ── Resize ──
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize);

      // ── Animation loop ──
      const animate = () => {
        frameRef.current = requestAnimationFrame(animate);

        // Slow star rotation
        starField.rotation.y += 0.0001;
        starField.rotation.x += 0.00005;

        // Nebula gentle drift
        nebulaClusters.forEach((cluster, i) => {
          cluster.rotation.z += 0.0001 * (i % 2 === 0 ? 1 : -1);
        });

        // Smooth parallax
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;
        scene.position.x = currentX;
        scene.position.y = -currentY;

        renderer.render(scene, camera);
      };
      animate();

      // Cleanup stored
      (mountRef.current as any)._cleanup = () => {
        window.removeEventListener("mousemove", handleMouse);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(frameRef.current);
        renderer.dispose();
      };
    };

    init();

    return () => {
      const cleanup = (mountRef.current as any)?._cleanup;
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0, transition: "opacity 1s ease" }}
      id="starfield-canvas"
    />
  );
}
