import React, { useState, useEffect } from "react";
import { Code2, Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-black/95 backdrop-blur-md py-4"
            : "bg-transparent py-5"
        } border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer relative z-[60]">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
                isOpen ? "bg-black" : "bg-white"
              }`}
            >
              <Code2
                size={22}
                className={`${isOpen ? "text-white" : "text-black"}`}
              />
            </div>

            <span
              className={`text-lg sm:text-xl font-black tracking-widest ${
                isOpen ? "text-black" : "text-white"
              }`}
            >
              DEVNEXUS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 hover:text-white transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Work With Us
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden relative z-[60] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={30} className="text-black" />
            ) : (
              <Menu size={30} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full pt-28 pb-10 px-6 sm:px-10">
          
          {/* Links */}
          <div className="flex flex-col gap-6">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl sm:text-4xl font-black text-black uppercase transition-all duration-500 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom Contact */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">
              Get in touch
            </p>

            <a
              href="mailto:hello@devnexus.agency"
              className="flex items-center justify-between text-xl sm:text-2xl font-black text-blue-600"
            >
              Email Us
              <ArrowRight size={22} />
            </a>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-black uppercase tracking-widest">
              <span>+91 98765 43210</span>
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Code2, Menu, X, ArrowRight } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // 1. Handle Scroll Effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // 2. Prevent Body Scroll when Mobile Menu is Open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [isOpen]);

//   const links = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Services', href: '#services' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
//           scrolled || isOpen ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
//         } border-b border-white/5`}
//       >
//         <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between">
          
//           {/* Brand Logo - Added relative z-index to stay above overlay */}
//           <div className="flex items-center gap-3 group cursor-pointer relative z-[110]">
//             <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg ${
//               isOpen ? 'bg-black shadow-none' : 'bg-white shadow-white/5'
//             }`}>
//               <Code2 className={`${isOpen ? 'text-white' : 'text-black'} group-hover:text-blue-600 transition-colors`} size={22} />
//             </div>
//             <span className={`text-xl font-black tracking-widest transition-colors duration-300 ${
//               isOpen ? 'text-black' : 'text-white'
//             }`}>
//               DEVNEXUS
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-10">
//             <div className="flex items-center gap-8">
//               {links.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 hover:text-white transition-all duration-300"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//             <a
//               href="#contact"
//               className="px-7 py-3 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
//             >
//               Work With Us
//             </a>
//           </div>

//           {/* Mobile Toggle Button - Forced Z-index to stay on top */}
//           <button
//             className="md:hidden relative z-[110] p-3 rounded-full transition-all duration-300"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? (
//               <X size={30} className="text-black" />
//             ) : (
//               <Menu size={30} className="text-white" />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* --- 100% Fullscreen Mobile Overlay --- */}
//       <div
//         className={`fixed inset-0 w-full h-full bg-white z-[90] transition-transform duration-500 ease-in-out md:hidden ${
//           isOpen ? 'translate-y-0' : '-translate-y-full'
//         }`}
//       >
//         <div className="flex flex-col h-full w-full pt-32 px-10 pb-12 overflow-y-auto">
//           {/* Navigation Links */}
//           <div className="flex flex-col gap-6">
//             {links.map((link, index) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`text-5xl font-black text-black uppercase tracking-tighter transition-all duration-700 ${
//                   isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//                 }`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Bottom Branding / Contact */}
//           <div className="mt-auto pt-10 border-t border-slate-200">
//             <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
//               Get in touch
//             </p>
//             <a
//               href="mailto:hello@devnexus.agency"
//               className="text-2xl font-black text-blue-600 flex items-center justify-between group"
//             >
//               Email Us <ArrowRight size={24} />
//             </a>
            
//             <div className="mt-8 flex flex-wrap gap-5 text-black font-black text-[10px] uppercase tracking-widest">
//               <span>+91 98765 43210</span>
//               <span>Instagram</span>
//               <span>LinkedIn</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;