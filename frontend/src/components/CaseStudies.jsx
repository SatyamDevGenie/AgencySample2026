import React from "react";

const caseStudies = [
  {
    label: "E‑COMMERCE BRAND – INDIA",
    title: "Modern storefront that turns visitors into repeat buyers.",
    result: "Conversion‑focused React shop with smooth checkout and analytics.",
    tag: "E‑commerce UX · performance build",
  },
  {
    label: "PROSPACE – HYBRID OFFICE SAAS",
    title: "AI‑powered desk booking for fast‑moving teams.",
    result:
      "React 19 + TypeScript app with smart desk suggestions and admin control.",
    tag: "MERN · AI integration · B2B product",
  },
  {
    label: "PETSCAN – VET CLINIC PLATFORM",
    title: "Real‑time clinic operating system for pets and doctors.",
    result:
      "Multi‑role dashboards, live updates and AI helpers for appointments.",
    tag: "MERN · sockets · HealthTech",
  },
  {
    label: "BLOGSY – CREATOR GROWTH PLATFORM",
    title: "AI‑assisted blog system for serious content teams.",
    result:
      "Secure MERN stack with AI writing tools, social features and 3D hero.",
    tag: "MERN · AI copy · 3D UI",
  },
];

const CaseStudies = () => {
  return (
    <section
      id="work"
      className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
        <div className="max-w-xl">
          <h2 className="text-xs sm:text-sm font-semibold text-blue-400 tracking-[0.3em] uppercase mb-3">
            Recent Work
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Selected projects
            <br className="hidden sm:block" />
            <span className="text-blue-400">built end to end.</span>
          </h3>
        </div>

        <p className="max-w-md text-slate-400 text-sm sm:text-base">
          E‑commerce, SaaS, healthtech and content platforms — from MVPs to production
          apps for clients in India and abroad.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
        {caseStudies.map((item, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/70 to-slate-950 shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:shadow-[0_24px_60px_rgba(37,99,235,0.55)] hover:border-blue-500/40 hover:from-slate-900 hover:to-slate-950 transition-all duration-300"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.25),_transparent_55%)] transition-opacity duration-500" />

            <div className="relative p-6 sm:p-7 lg:p-8 flex flex-col h-full">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] text-slate-400 uppercase mb-4">
                {item.label}
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 leading-snug">
                {item.title}
              </h4>

              <p className="text-sm text-slate-300 font-medium mb-6">
                {item.result}
              </p>

              <div className="mt-auto text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-300/90">
                {item.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;

