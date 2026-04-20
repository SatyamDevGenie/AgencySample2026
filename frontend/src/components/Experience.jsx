import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    period: "Jan 2026 – Present",
    title: "Freelance Full Stack Developer",
    company: "Upwork & local clients",
    desc: "Building products end-to-end for international and local businesses — web apps, APIs and integrations.",
  },
  {
    period: "Sep 2024 – Sep 2025",
    title: "Web Developer",
    company: "Hi‑technic Systems and Services",
    desc: "Developed and maintained web applications, collaborating on features, fixes and deployments.",
  },
  {
    period: "Jan 2023 – Jun 2023",
    title: "Full Stack Internship",
    company: "RSTForum",
    desc: "Six-month internship across frontend and backend — real projects, code reviews and team workflows.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/5 bg-slate-950/40"
    >
      <div className="max-w-2xl mb-10 sm:mb-14">
        <h2 className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-[0.3em] mb-3">
          Experience
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Where I&apos;ve{" "}
          <span className="text-blue-400">grown as a developer.</span>
        </h3>
      </div>

      <div className="relative max-w-3xl">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent md:left-[15px]" />

        <ul className="space-y-8 sm:space-y-10">
          {timeline.map((item, i) => (
            <motion.li
              key={item.period}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative pl-10 md:pl-12"
            >
              <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-blue-500 bg-black md:top-2 md:h-3.5 md:w-3.5" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-blue-400">
                {item.period}
              </p>
              <p className="mt-1 text-lg sm:text-xl font-bold text-white">
                {item.title}
              </p>
              <p className="text-sm text-slate-400 font-medium">{item.company}</p>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
