'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function isDark() {
  if (typeof document === 'undefined') return false;
  return document.documentElement.dataset.theme === 'dark';
}

const GLOBE_RADIUS = 2.2;
const ARC_COUNT = 40;
const NODE_COUNT = 65;

function randomLat() {
  return (Math.random() - 0.5) * 150;
}
function randomLng() {
  return (Math.random() - 0.5) * 360;
}

function toVec3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function buildArc(start: THREE.Vector3, end: THREE.Vector3, segments = 48) {
  const mid = start
    .clone()
    .add(end)
    .multiplyScalar(0.5)
    .normalize()
    .multiplyScalar(GLOBE_RADIUS * (1.4 + Math.random() * 0.5));
  const curve = new THREE.CatmullRomCurve3([start, mid, end]);
  return curve.getPoints(segments);
}

export function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0.6, 6.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Accent colors (brand — same in both themes)
    const ROSE_GOLD = '#D9A58F';
    const ROSE_GOLD_LIGHT = '#F6D7C3';
    const TITANIUM = '#6B6B6B';

    // Lights
    const ambient = new THREE.AmbientLight(0x404060, 0.15);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(ROSE_GOLD_LIGHT, 1.2);
    key.position.set(3, 4, 5);
    scene.add(key);

    const fill = new THREE.DirectionalLight(TITANIUM, 0.4);
    fill.position.set(-4, 1, -3);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(ROSE_GOLD, 0.6);
    rim.position.set(-2, -1, -4);
    scene.add(rim);

    // Theme-aware colors
    const dark = isDark();
    const sphereColor = new THREE.Color(dark ? '#2A2A2A' : '#E8E4DE');
    const wireColor = new THREE.Color(dark ? '#6B6B6B' : '#C5C0B8');

    // Globe sphere
    const sphereGeom = new THREE.SphereGeometry(GLOBE_RADIUS, 72, 52);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: sphereColor,
      metalness: 0.75,
      roughness: 0.25,
      envMapIntensity: 1.4,
    });
    const globe = new THREE.Mesh(sphereGeom, sphereMat);
    scene.add(globe);

    // Wireframe overlay
    const wireGeom = new THREE.SphereGeometry(GLOBE_RADIUS * 1.002, 28, 18);
    const wireMat = new THREE.MeshStandardMaterial({
      color: wireColor,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const wireframe = new THREE.Mesh(wireGeom, wireMat);
    scene.add(wireframe);

    // Atmosphere glow
    const glowGeom = new THREE.SphereGeometry(GLOBE_RADIUS * 1.15, 36, 28);
    const glowMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);
          vec3 color = mix(vec3(0.557, 0.647, 0.561), vec3(0.851, 0.694, 0.627), intensity * 0.5);
          gl_FragColor = vec4(color, intensity * 0.25);
        }
      `,
      transparent: true,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glow = new THREE.Mesh(glowGeom, glowMat);
    scene.add(glow);

    // Generate nodes
    const nodePositions: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodePositions.push(toVec3(randomLat(), randomLng(), GLOBE_RADIUS));
    }

    // Node dots
    const dotGeom = new THREE.BufferGeometry();
    const dotPositions = new Float32Array(nodePositions.length * 3);
    nodePositions.forEach((v, i) => {
      dotPositions[i * 3] = v.x;
      dotPositions[i * 3 + 1] = v.y;
      dotPositions[i * 3 + 2] = v.z;
    });
    dotGeom.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
    const dotMat = new THREE.PointsMaterial({
      color: ROSE_GOLD_LIGHT,
      size: 0.035,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const dots = new THREE.Points(dotGeom, dotMat);
    scene.add(dots);

    // Node glow halos
    const haloGeom = new THREE.BufferGeometry();
    haloGeom.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
    const haloMat = new THREE.PointsMaterial({
      color: ROSE_GOLD,
      size: 0.075,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const halos = new THREE.Points(haloGeom, haloMat);
    scene.add(halos);

    // Generate arcs
    const arcMeshes: THREE.Line[] = [];
    const used = new Set<number>();
    for (let i = 0; i < ARC_COUNT; i++) {
      let a: number, b: number;
      do {
        a = Math.floor(Math.random() * nodePositions.length);
        b = Math.floor(Math.random() * nodePositions.length);
      } while (a === b || used.has(a * nodePositions.length + b));
      used.add(a * nodePositions.length + b);

      const points = buildArc(nodePositions[a], nodePositions[b]);
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: ROSE_GOLD,
        transparent: true,
        opacity: 0.12 + Math.random() * 0.1,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const line = new THREE.Line(geom, mat);
      scene.add(line);
      arcMeshes.push(line);
    }

    // Resize handler
    const resize = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    resize();
    window.addEventListener('resize', resize);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouse = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const cy = 'touches' in e ? e.touches[0].clientY : e.clientY;
      mouseX = ((cx - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((cy - rect.top) / rect.height - 0.5) * 2;
    };
    const handleMouseLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };
    canvas.addEventListener('mousemove', handleMouse);
    canvas.addEventListener('touchmove', handleMouse, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    let animId: number;
    let time = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      time += 0.005;

      // Auto-rotate
      globe.rotation.y += 0.002;
      wireframe.rotation.y = globe.rotation.y;
      glow.rotation.y = globe.rotation.y;
      dots.rotation.y = globe.rotation.y;
      halos.rotation.y = globe.rotation.y;
      arcMeshes.forEach((m) => (m.rotation.y = globe.rotation.y));

      // Mouse parallax (subtle)
      targetRotX += (mouseY * 0.1 - targetRotX) * 0.02;
      targetRotY += (mouseX * 0.1 - targetRotY) * 0.02;
      globe.rotation.x += targetRotX;
      globe.rotation.z += targetRotY;
      wireframe.rotation.x = globe.rotation.x;
      wireframe.rotation.z = globe.rotation.z;
      glow.rotation.x = globe.rotation.x;
      glow.rotation.z = globe.rotation.z;
      dots.rotation.x = globe.rotation.x;
      dots.rotation.z = globe.rotation.z;
      halos.rotation.x = globe.rotation.x;
      halos.rotation.z = globe.rotation.z;
      arcMeshes.forEach((m) => {
        m.rotation.x = globe.rotation.x;
        m.rotation.z = globe.rotation.z;
      });

      // Subtle node pulsing
      const pulse = 0.4 + Math.sin(time * 2) * 0.15;
      dotMat.opacity = pulse;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouse);
      canvas.removeEventListener('touchmove', handleMouse);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      renderer.dispose();
      sphereGeom.dispose();
      sphereMat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      glowGeom.dispose();
      glowMat.dispose();
      dotGeom.dispose();
      dotMat.dispose();
      haloGeom.dispose();
      haloMat.dispose();
      arcMeshes.forEach((m) => {
        m.geometry.dispose();
        (m.material as THREE.Material).dispose();
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      aria-hidden="true"
    />
  );
}
