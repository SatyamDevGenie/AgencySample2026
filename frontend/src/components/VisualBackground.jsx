import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const FloatingOrb = ({ position = [0, 0, 0], color = "#3b82f6", scale = 1 }) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.15;
      ref.current.rotation.y = t * 0.25;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={0.4}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

const Scene = () => (
  <>
    <ambientLight intensity={0.6} />
    <directionalLight position={[2, 3, 4]} intensity={0.9} />
    <FloatingOrb position={[-1.4, 0.2, -2]} color="#3b82f6" scale={0.9} />
    <FloatingOrb position={[1.2, -0.3, -2.5]} color="#a855f7" scale={0.7} />
    <FloatingOrb position={[0.1, 0.7, -3]} color="#22c55e" scale={0.6} />
  </>
);

const VisualBackground = ({ className = "" }) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-40 sm:opacity-60 mix-blend-screen ${className}`}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 55 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default VisualBackground;

