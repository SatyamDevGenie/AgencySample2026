import React from "react";
import { Mail, ArrowUpRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto"
        >
            <motion.div
                className="text-center mb-12 sm:mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-blue-500 font-bold tracking-[0.3em] text-xs mb-3 uppercase">
                    Contact
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                    Have an idea?
                    <span className="block text-slate-400 text-lg sm:text-xl font-normal mt-2">
                        One email or one call is enough to start.
                    </span>
                </h3>
            </motion.div>

            <div className="max-w-3xl mx-auto">
                <motion.div
                    className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/80 px-6 py-7 sm:px-8 sm:py-9 shadow-[0_0_60px_rgba(15,23,42,0.9)]"
                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 blur-[90px] rounded-full" />
                    <div className="absolute -bottom-12 -left-6 w-40 h-40 bg-purple-600/25 blur-[95px] rounded-full" />

                    <div className="relative z-10 flex flex-col gap-6">
                        <motion.div
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.7 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                        >
                            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                                <Mail className="text-white" size={22} />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-semibold tracking-[0.28em] uppercase text-slate-300">
                                    Drop us a line
                                </p>
                                <p className="text-slate-200 text-sm sm:text-base mt-1">
                                    We reply personally within 24 hours, wherever you are in the world.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-white/10 px-3 py-1.5 w-fit"
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                            </span>
                            <motion.span
                                className="text-[11px] sm:text-xs text-slate-100"
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                No forms. Just humans on the other side.
                            </motion.span>
                        </motion.div>

                        <motion.div
                            className="flex flex-col gap-4 pt-2"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.7 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        >
                            <a
                                href="mailto:hello@devnexus.agency"
                                className="inline-flex flex-wrap items-center gap-3 text-lg sm:text-xl md:text-2xl font-semibold text-white hover:text-blue-400 transition-colors break-all"
                            >
                                hello@devnexus.agency
                                <ArrowUpRight
                                    size={22}
                                    className="text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                />
                            </a>

                            <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base text-slate-300">
                                <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1">
                                    <PhoneCall className="w-4 h-4 text-blue-400" />
                                    <a
                                        href="tel:+919876543210"
                                        className="font-medium hover:text-blue-400 transition-colors"
                                    >
                                        +91 98765 43210
                                    </a>
                                </div>
                                <span className="text-xs sm:text-sm text-slate-500">
                                    WhatsApp / Call between 10 AM – 7 PM IST
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;