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
      {/* SECTION HEADER */}
      <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
        <h2 className="text-xs sm:text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-3">
          Our Capabilities
        </h2>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white italic tracking-tight">
          VERSATILE SERVICES
        </h3>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {services.map((item, index) => (
          <div
            key={index}
            className="group p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-600/30 hover:bg-slate-900 transition-all duration-300"
          >
            {/* ICON */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
              <item.icon
                className="text-blue-500 group-hover:text-white transition-colors"
                size={22}
              />
            </div>

            {/* TITLE */}
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
              {item.title}
            </h4>

            {/* DESCRIPTION */}
            <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;