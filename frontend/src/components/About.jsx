import React from "react";
import { motion } from "framer-motion";

const About = () => {
    const features = [
        "Direct Dev-to-Client Communication",
        "Zero Management Overhead",
        "Global Startup Experience",
    ];

    return (
        <section
            id="about"
            className="py-16 sm:py-20 lg:py-24 bg-slate-900/40 border-y border-white/5"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <h2 className="text-blue-500 font-bold tracking-[0.25em] text-xs sm:text-sm mb-4 uppercase">
                            The Agency
                        </h2>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 sm:mb-6 leading-tight">
                            A Startup Freelance
                            <br className="hidden sm:block" />
                            <span className="text-blue-600">Powerhouse.</span>
                        </h3>

                        <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-5 max-w-xl mx-auto lg:mx-0">
                            We are a collective of independent specialists operating as a
                            unified startup agency. By stripping away corporate overhead, we
                            provide high-velocity execution in design, development, and
                            digital marketing.
                        </p>

                        <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Whether you need a viral video, a high-converting landing page,
                            or a complex full-stack application, we deliver international-
                            grade quality with the agility of a freelance squad.
                        </p>
                    </motion.div>

                    {/* RIGHT CARD */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative p-[2px] bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl"
                    >
                        <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl sm:rounded-[1.4rem]">
                            <h4 className="text-white font-bold text-lg sm:text-xl mb-5">
                                Why Choose Us?
                            </h4>

                            <ul className="space-y-4">
                                {features.map((text, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-slate-300 text-sm sm:text-base"
                                    >
                                        <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;