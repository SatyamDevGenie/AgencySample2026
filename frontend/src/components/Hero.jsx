import React from "react";
import { motion } from "framer-motion";
import VisualBackground from "./VisualBackground";
import { RESUME_URL, RESUME_FILENAME } from "../resume";

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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 mb-4 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-300">
              Full stack developer · Freelance & contracts
            </p>
          </div>

          <p className="text-xs sm:text-sm font-medium text-blue-400/90 mb-3 tracking-wide">
            Satyam Sawant · React · Node · Product
          </p>

          <h1 className="font-bold tracking-tight text-white text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-snug mb-5 max-w-xl">
            Hi, I&apos;m Satyam —{" "}
            <span className="text-blue-400 font-semibold">full stack developer</span>
            {" "}shipping web apps.
          </h1>

          <p className="text-slate-400 text-base sm:text-[1.05rem] max-w-xl leading-relaxed mb-8 font-normal">
            I design and build end‑to‑end web products — React frontends, Node backends,
            APIs and databases — for startups, agencies and clients worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              href="#contact"
              className="w-full sm:w-auto text-center px-6 py-3 sm:px-7 sm:py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/30"
            >
              Get in touch
            </motion.a>

            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              href={RESUME_URL}
              download={RESUME_FILENAME}
              className="w-full sm:w-auto text-center px-6 py-3 sm:px-7 sm:py-3 border border-white/15 text-slate-200 text-sm font-medium rounded-lg hover:border-white/25 hover:bg-white/5 transition-colors"
            >
              Download resume
            </motion.a>
          </div>
        </motion.div>

        <div className="order-first lg:order-last">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full max-w-md mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/satyam developer.jpeg"
                alt="Satyam Developer"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;