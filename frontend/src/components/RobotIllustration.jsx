import React from "react";
import { motion } from "framer-motion";

const RobotIllustration = () => {
  return (
    <motion.div
      className="w-full max-w-xs sm:max-w-sm mx-auto"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
    >
      <motion.div
        className="relative rounded-3xl bg-slate-900/70 border border-white/10 px-6 py-6 sm:px-8 sm:py-7 shadow-[0_0_50px_rgba(15,23,42,0.9)]"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -top-3 -left-3 h-10 w-10 rounded-2xl bg-blue-500/30 blur-xl" />
        <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-full bg-purple-500/25 blur-xl" />

        <svg
          viewBox="0 0 220 200"
          className="w-full h-auto relative z-10"
          aria-hidden="true"
        >
          {/* Body */}
          <motion.rect
            x="55"
            y="70"
            rx="18"
            ry="18"
            width="110"
            height="90"
            fill="#020617"
            stroke="#38bdf8"
            strokeWidth="2"
          />

          {/* Head */}
          <motion.rect
            x="70"
            y="30"
            rx="16"
            ry="16"
            width="80"
            height="52"
            fill="#020617"
            stroke="#38bdf8"
            strokeWidth="2"
          />

          {/* Antenna */}
          <line
            x1="110"
            y1="18"
            x2="110"
            y2="30"
            stroke="#38bdf8"
            strokeWidth="2"
          />
          <motion.circle
            cx="110"
            cy="15"
            r="4"
            fill="#38bdf8"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Eyes */}
          <motion.circle
            cx="88"
            cy="52"
            r="7"
            fill="#0f172a"
            stroke="#38bdf8"
            strokeWidth="2"
          />
          <motion.circle
            cx="132"
            cy="52"
            r="7"
            fill="#0f172a"
            stroke="#38bdf8"
            strokeWidth="2"
          />
          <motion.circle
            cx="88"
            cy="52"
            r="3"
            fill="#38bdf8"
            animate={{ y: [0, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="132"
            cy="52"
            r="3"
            fill="#38bdf8"
            animate={{ y: [0, -1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Smile */}
          <path
            d="M88 64 Q110 76 132 64"
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Screen */}
          <rect
            x="68"
            y="82"
            rx="10"
            ry="10"
            width="84"
            height="42"
            fill="#020617"
            stroke="#1e293b"
            strokeWidth="2"
          />
          <motion.rect
            x="73"
            y="87"
            rx="8"
            ry="8"
            width="74"
            height="32"
            fill="url(#screenGradient)"
            opacity="0.9"
          />

          {/* Screen text lines */}
          <line
            x1="82"
            y1="99"
            x2="142"
            y2="99"
            stroke="#e5e7eb"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="82"
            y1="108"
            x2="126"
            y2="108"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Arms */}
          <motion.path
            d="M55 98 Q35 102 30 120"
            stroke="#38bdf8"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={{ rotate: [-4, 4, -4] }}
            style={{ originX: "55px", originY: "98px" }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="28" cy="122" r="4" fill="#38bdf8" />

          <path
            d="M165 98 Q185 102 190 120"
            stroke="#38bdf8"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="192" cy="122" r="4" fill="#38bdf8" />

          {/* Legs */}
          <rect x="86" y="158" width="14" height="18" rx="4" fill="#020617" />
          <rect x="120" y="158" width="14" height="18" rx="4" fill="#020617" />
          <rect x="82" y="173" width="22" height="4" rx="2" fill="#1f2937" />
          <rect x="116" y="173" width="22" height="4" rx="2" fill="#1f2937" />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="screenGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10 mt-4 text-xs sm:text-sm text-slate-300">
          <p className="font-semibold">
            “Hey, I am your freelance build squad. Let&apos;s ship your next launch.”
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RobotIllustration;

