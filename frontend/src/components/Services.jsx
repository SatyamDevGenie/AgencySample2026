import React from "react";
import { Video, Layout, Globe, Share2, Code, Layers } from "lucide-react";

const services = [
  {
    title: "Video Editing",
    desc: "High-impact storytelling for social media and brand promos.",
    icon: Video,
  },
  {
    title: "Landing Page Designing",
    desc: "Conversion-optimized layouts designed to turn clicks into customers.",
    icon: Layout,
  },
  {
    title: "Website Development",
    desc: "SEO-friendly, blazing fast business websites that rank.",
    icon: Globe,
  },
  {
    title: "Social Marketing",
    desc: "Strategic growth and content management for modern brands.",
    icon: Share2,
  },
  {
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive UI built with React and Tailwind.",
    icon: Code,
  },
  {
    title: "Full Stack Development",
    desc: "End-to-end complex web apps with robust backend logic.",
    icon: Layers,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-14">
        <div className="max-w-xl">
          <h2 className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-[0.3em] mb-3">
            Services
          </h2>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            One team for{" "}
            <span className="text-blue-400">product, brand & growth.</span>
          </h3>
        </div>

        <p className="max-w-md text-slate-400 text-sm sm:text-base">
          Six core services that cover content, design and code — so you do not
          have to juggle multiple vendors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
        {services.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-slate-900/70 border border-white/5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:shadow-[0_24px_60px_rgba(37,99,235,0.55)] hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col"
          >
            <div className="pointer-events-none absolute inset-px opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_55%)] transition-opacity duration-500" />

            <div className="relative">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
              <item.icon
                className="text-blue-500 group-hover:text-white transition-colors"
                size={22}
              />
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
              {item.title}
            </h4>

            <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed mb-4 flex-1">
              {item.desc}
            </p>

            <div className="flex items-center justify-between text-[11px] text-slate-500 uppercase tracking-[0.22em]">
              <span>Included in retainers</span>
              <span className="group-hover:text-blue-300 transition-colors">
                Senior team only
              </span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;