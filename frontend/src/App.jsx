import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 overflow-x-hidden">

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
          <Contact />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-16 sm:mt-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12 text-center">

          <p className="text-slate-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} <span className="text-white font-semibold">DevNexus Agency</span>.
            Built for global standards.
          </p>

        </div>
      </footer>

    </div>
  );
}

export default App;