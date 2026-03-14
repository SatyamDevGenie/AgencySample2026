import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-14 sm:pb-16 md:pb-20 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Heading */}
        <h1 className="font-black tracking-tight leading-[1.05] text-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6">
          We build{" "}
          <span className="text-blue-600">DIGITAL</span>
          <span className="block sm:inline"> REVOLUTIONS</span>
        </h1>

        {/* Sub Text */}
        <p className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          High-performance web applications, startup MVPs, and custom AI
          integrations built for the global market.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">

          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-7 py-3.5 sm:px-8 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300"
          >
            Get Started
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto text-center px-7 py-3.5 sm:px-8 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300"
          >
            Our Services
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;