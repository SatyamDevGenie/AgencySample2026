import React from "react";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";

const Contact = () => {
    const team = [
        { name: "Satyam", role: "Full Stack Lead", phone: "+91 98765 43210" },
        { name: "Harsh", role: "Design & Frontend", phone: "+91 98765 43211" },
        { name: "Vedant", role: "Marketing & Outreach", phone: "+91 98765 43212" },
    ];

    return (
        <section
            id="contact"
            className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto"
        >
            {/* HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-20">
                <div className="max-w-xl">
                    <h2 className="text-blue-500 font-bold tracking-[0.3em] text-xs mb-4 uppercase">
                        Contact
                    </h2>

                    <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                        HAVE AN IDEA? <br />
                        <span className="text-slate-700">LET'S TALK.</span>
                    </h3>
                </div>

                <div className="hidden lg:block text-right">
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">
                        Available for global <br /> projects 2026
                    </p>
                </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* EMAIL CARD */}
                <div className="lg:col-span-7 group relative overflow-hidden p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all duration-500">

                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                <Mail className="text-white" size={28} />
                            </div>

                            <h4 className="text-2xl sm:text-3xl font-bold text-black mb-4 italic">
                                Drop us a line
                            </h4>

                            <p className="text-black text-sm sm:text-base max-w-md leading-relaxed">
                                Whether it's a full-scale app or a quick design audit, we're
                                ready to dive in.
                            </p>
                        </div>

                        <a
                            href="mailto:hello@devnexus.agency"
                            className="mt-10 sm:mt-14 inline-flex flex-wrap items-center text-xl sm:text-2xl md:text-3xl font-bold text-black hover:text-blue-500 transition-colors gap-3"
                        >
                            hello@devnexus.agency
                            <ArrowUpRight
                                size={26}
                                className="text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                            />
                        </a>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-600/10 blur-[90px] rounded-full" />
                </div>

                {/* TEAM CARDS */}
                <div className="lg:col-span-5 flex flex-col gap-6">

                    {/* TEAM LIST */}
                    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl flex flex-col justify-between">

                        <h4 className="text-black font-black text-lg sm:text-xl mb-6 uppercase tracking-tight">
                            Direct Lines
                        </h4>

                        <div className="space-y-6">
                            {team.map((member, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-slate-300 font-mono text-xs">
                                            0{i + 1}
                                        </span>

                                        <div>
                                            <p className="text-black font-bold text-base sm:text-lg leading-none">
                                                {member.name}
                                            </p>

                                            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-1">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <a
                                            href={`tel:${member.phone}`}
                                            className="text-black/60 hover:text-black font-mono text-xs sm:text-sm transition-colors"
                                        >
                                            {member.phone}
                                        </a>

                                        <a
                                            href={`https://wa.me/${member.phone.replace(/\D/g, "")}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-slate-100 rounded-full text-slate-400 hover:text-green-500 hover:bg-green-50 transition"
                                        >
                                            <MessageCircle size={18} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* STATUS CARD */}
                    <div className="bg-blue-600 p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex items-center justify-between text-white">
                        <span className="font-bold text-sm sm:text-base">
                            Active internationally.
                        </span>

                        <div className="flex gap-2">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            <div className="w-2 h-2 bg-white/40 rounded-full" />
                            <div className="w-2 h-2 bg-white/40 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;