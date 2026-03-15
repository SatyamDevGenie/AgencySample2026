import React from "react";
import { motion } from "framer-motion";
import VisualBackground from "./VisualBackground";
import RobotIllustration from "./RobotIllustration";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-16 sm:pb-20 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.9),_transparent_60%)] pointer-events-none" />
      <VisualBackground />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 mb-4 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-slate-200 uppercase">
              Available for 2026 projects – India & global
            </p>
          </div>

          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.32em] text-blue-300 uppercase mb-4">
            DEVNEXUS AGENCY · PRODUCT · CODE · GROWTH
          </p>

          <h1 className="font-black tracking-tight leading-[1.03] text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6">
            Digital products
            <br className="hidden sm:block" />
            <span className="text-blue-400">that feel premium</span>
            {" "}from day one.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl leading-relaxed mb-8 sm:mb-10">
            We help Indian and international teams launch sharp, conversion‑ready
            websites, apps and brand experiences — with startup speed and
            enterprise polish.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="w-full sm:w-auto text-center px-7 py-3.5 sm:px-8 sm:py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.35)]"
            >
              Book a 20‑min call
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#work"
              className="w-full sm:w-auto text-center px-7 py-3.5 sm:px-8 sm:py-4 border border-white/15 text-slate-100 font-semibold rounded-full hover:border-blue-400/80 hover:text-white transition-all duration-300 bg-slate-900/40"
            >
              View recent work
            </motion.a>
          </div>
        </motion.div>

        <div className="order-first lg:order-last">
          <RobotIllustration />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;