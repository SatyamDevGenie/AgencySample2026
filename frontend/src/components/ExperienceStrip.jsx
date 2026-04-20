import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import RobotIllustration from "./RobotIllustration";

const FloatingPair = () => {
  const group = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = Math.sin(t * 0.8) * 0.15;
      group.current.rotation.y = Math.sin(t * 0.4) * 0.2;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[-0.8, 0, -2]} scale={0.7}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.35}
          metalness={0.4}
          roughness={0.25}
        />
      </mesh>
      <mesh position={[0.9, -0.1, -2.5]} scale={0.6}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.3}
          metalness={0.45}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
};

const ExperienceStrip = () => {
  return (
    <section className="w-full mt-10 sm:mt-14 lg:mt-16 border-t border-white/5 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <Canvas camera={{ position: [0, 0, 4], fov: 55 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[2, 3, 4]} intensity={1} />
            <FloatingPair />
          </Canvas>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-3">
              Clients × Satyam
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-3">
              Experience how I
              <span className="text-blue-400"> ship your product.</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              From MVPs to production apps — I work closely with teams and founders on
              architecture, implementation and delivery.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center md:justify-end gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <motion.div
              className="relative rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 sm:px-5 sm:py-4 flex flex-col items-start gap-3"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-[11px] font-semibold text-white">
                  CL
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs text-slate-200 font-medium">
                    “We want to grow faster and need a team that really gets our product.”
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500 uppercase tracking-[0.22em]">
                    Prospective client
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative flex flex-col items-center gap-3"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <div className="w-32 sm:w-36 md:w-40">
                <RobotIllustration />
              </div>
              <div className="rounded-2xl border border-blue-500/40 bg-blue-600/10 px-4 py-3 sm:px-5 sm:py-4 max-w-xs">
                <p className="text-[11px] sm:text-xs text-slate-50 font-semibold">
                  “Perfect. Let&apos;s design it, build it and launch it — on timelines
                  and pricing that make sense.”
                </p>
                <p className="mt-2 text-[10px] text-blue-300 uppercase tracking-[0.22em]">
                  Satyam Sawant
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceStrip;

