import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Redux Toolkit",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "Framer Motion",
  "Socket.io",
  "JWT / Auth",
];

const TechSkills = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="max-w-2xl mb-10 sm:mb-12">
        <h2 className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-[0.3em] mb-3">
          Tech skills
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Stack I build with{" "}
          <span className="text-blue-400">every day.</span>
        </h3>
        <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl">
          Full-stack JavaScript — from polished UIs to APIs, databases and
          production deploys.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 sm:gap-4">
        {skills.map((label, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-xs sm:text-sm font-medium text-slate-200 shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:border-blue-500/40 hover:text-white transition-colors"
          >
            {label}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
