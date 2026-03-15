import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import ExperienceStrip from "./components/ExperienceStrip";

function App() {
  return (
    <div className="bg-black min-h-screen text-slate-200 overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex flex-col">

        <section className="w-full">
          <Hero />
        </section>

        <section className="w-full">
          <About />
        </section>

        <section className="w-full">
          <Services />
        </section>

        <section className="w-full">
          <CaseStudies />
        </section>

        <section className="w-full">
          <Contact />
        </section>

        <section className="w-full">
          <ExperienceStrip />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-16 sm:mt-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10">
          <motion.div
            className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Brand + message */}
            <motion.div
              className="flex items-start gap-4 md:gap-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="mt-1 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white flex-shrink-0">
                <span className="text-xs font-black tracking-[0.28em] text-black">
                  DN
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-400">
                  DevNexus Agency
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-md">
                  We are a freelance startup agency that can design, build and ship almost
                  anything you need — at transparent, reasonable rates compared to big
                  MNC expectations.
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              className="flex flex-col items-start md:items-end gap-3 sm:gap-4 text-xs sm:text-sm mt-6 md:mt-0"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              <nav className="flex flex-wrap justify-start md:justify-end gap-x-4 sm:gap-x-6 gap-y-2 text-slate-400">
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
                <a href="#work" className="hover:text-white transition-colors">
                  Work
                </a>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </nav>
              <p className="text-[11px] text-slate-500">
                Ready when you are — share your idea and we&apos;ll send a simple, no‑nonsense plan.
              </p>
              <p className="text-[11px] text-slate-600">
                © {new Date().getFullYear()} DevNexus Agency. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </footer>

    </div>
  );
}

export default App;