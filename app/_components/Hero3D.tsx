"use client";

import { useEffect, useRef } from "react";

const ACCENT = 0xd4ff4e;
const PARTICLE_COUNT = 260;
const LINK_DISTANCE = 1.15;

export function Hero3D() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");
      if (disposed || !hostRef.current) return;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(host.clientWidth, host.clientHeight);
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.inset = "0";
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, host.clientWidth / host.clientHeight, 0.1, 50);
      camera.position.z = 5.6;

      const group = new THREE.Group();
      scene.add(group);

      // нейросеть: частицы на сферической оболочке + связи между соседями
      const positions = new Float32Array(PARTICLE_COUNT * 3);
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const r = 1.6 + Math.random() * 0.9;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }
      const pointsGeo = new THREE.BufferGeometry();
      pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const pointsMat = new THREE.PointsMaterial({
        color: ACCENT,
        size: 0.025,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });
      group.add(new THREE.Points(pointsGeo, pointsMat));

      const linkPositions: number[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          if (dx * dx + dy * dy + dz * dz < LINK_DISTANCE * LINK_DISTANCE) {
            linkPositions.push(
              positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
              positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2],
            );
          }
        }
      }
      const linesGeo = new THREE.BufferGeometry();
      linesGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linkPositions), 3));
      const linesMat = new THREE.LineBasicMaterial({
        color: ACCENT,
        transparent: true,
        opacity: 0.045,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      group.add(new THREE.LineSegments(linesGeo, linesMat));

      // ядро: двойной wireframe-икосаэдр
      const coreGeo = new THREE.IcosahedronGeometry(0.85, 1);
      const coreMat = new THREE.MeshBasicMaterial({
        color: ACCENT,
        wireframe: true,
        transparent: true,
        opacity: 0.14,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      group.add(core);

      const innerGeo = new THREE.IcosahedronGeometry(0.5, 0);
      const innerMat = coreMat.clone();
      innerMat.opacity = 0.28;
      const inner = new THREE.Mesh(innerGeo, innerMat);
      group.add(inner);

      const mouse = { x: 0, y: 0 };
      const onPointerMove = (e: PointerEvent) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
      };
      window.addEventListener("pointermove", onPointerMove, { passive: true });

      const onResize = () => {
        camera.aspect = host.clientWidth / host.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(host.clientWidth, host.clientHeight);
      };
      window.addEventListener("resize", onResize);

      // рендерим только пока hero в зоне видимости
      let inView = true;
      const io = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; });
      io.observe(host);

      let raf = 0;
      let baseY = 0;
      let mouseY = 0;
      const timer = new THREE.Timer();
      const animate = () => {
        raf = requestAnimationFrame(animate);
        if (!inView) return;
        timer.update();
        const t = timer.getElapsed();

        baseY += 0.0012;
        mouseY += (mouse.x * 0.3 - mouseY) * 0.04;
        group.rotation.y = baseY + mouseY;
        group.rotation.x += (mouse.y * 0.18 - group.rotation.x) * 0.04;

        core.rotation.x = t * 0.18;
        core.rotation.y = -t * 0.24;
        inner.rotation.x = -t * 0.3;
        inner.rotation.z = t * 0.22;

        const pulse = 1 + Math.sin(t * 1.4) * 0.05;
        core.scale.setScalar(pulse);
        inner.scale.setScalar(2 - pulse);

        camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.04;
        camera.position.y += (-mouse.y * 0.3 - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("resize", onResize);
        pointsGeo.dispose();
        pointsMat.dispose();
        linesGeo.dispose();
        linesMat.dispose();
        coreGeo.dispose();
        coreMat.dispose();
        innerGeo.dispose();
        innerMat.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="hero3d-host"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    />
  );
}
