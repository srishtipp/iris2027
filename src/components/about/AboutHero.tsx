"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Building2, MapPin } from "lucide-react";
import { FESTIVAL_METRICS } from "@/data/stats";

export function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative min-h-[88vh] flex items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Tasteful CSS Background using the official 6-color IRIS palette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(70,32,91,0.65),_rgba(0,0,0,0)_70%)] pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-iris-purple/20 blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Editorial Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-iris-navy/70 border border-iris-violet/40"
          >
            <span className="w-2 h-2 rounded-full bg-iris-magenta" />
            <span className="font-mono text-xs uppercase tracking-widest text-iris-sky">
              IIM Indore · Annual Festival
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="space-y-3"
          >
            <h1
              id="about-hero-heading"
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-iris-white uppercase leading-[0.95]"
            >
              ABOUT{" "}
              <span className="font-saman text-iris-sky font-normal block sm:inline">
                IRIS 2027
              </span>
            </h1>
            <p className="font-langar text-xl sm:text-2xl text-iris-magenta tracking-wide">
              The Cultural & Management Festival of IIM Indore
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="max-w-xl text-base sm:text-lg text-iris-white/80 leading-relaxed"
          >
            IRIS brings together students, thinkers, and performers at the Indian Institute of Management Indore for a celebration of management acumen and artistic expression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <a
              href="#about-iris"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-iris-sky text-iris-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-iris-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-magenta"
            >
              <span>Discover IRIS</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#campus-map"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-iris-navy/50 text-iris-white border border-iris-violet/40 text-xs font-mono uppercase tracking-wider hover:border-iris-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-sky"
            >
              <span>Campus Map</span>
            </a>
          </motion.div>
        </div>

        {/* Right IIM Indore Connecting Slot (Replacing Media Frame entirely) */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 space-y-5"
        >
          <div className="relative rounded-2xl overflow-hidden border border-iris-violet/45 bg-gradient-to-br from-iris-navy/80 via-iris-navy-deep to-iris-purple/50 p-8 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-iris-magenta/20 border border-iris-magenta/40 flex items-center justify-center text-iris-magenta">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-iris-sky">
                  Institutional Host
                </span>
                <h3 className="text-lg font-bold text-iris-white">
                  IIM Indore
                </h3>
              </div>
            </div>

            <p className="text-sm text-iris-white/80 leading-relaxed font-sans">
              Established in 1996, the Indian Institute of Management Indore is a premier institution of national importance. IRIS serves as its flagship annual festival, uniting leadership intellect with cultural vibrancy.
            </p>

            <div className="pt-3 border-t border-iris-violet/30 flex items-center justify-between text-xs font-mono text-iris-sky/90">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-iris-magenta" /> Prabandh Shikhar
              </span>
              <span>193-Acre Hilltop Campus</span>
            </div>
          </div>

          {/* Festival figures */}
          <dl
            aria-label="IRIS at a glance"
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {FESTIVAL_METRICS.map((m) => (
              <div
                key={m.id}
                className="rounded-xl border border-iris-violet/40 bg-iris-navy/45 px-2 py-4 text-center"
              >
                <dt className="sr-only">{m.label}</dt>
                <dd className="text-2xl sm:text-3xl font-extrabold text-iris-white leading-none">
                  {m.metric}
                </dd>
                <p
                  aria-hidden="true"
                  className="mt-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-iris-sky"
                >
                  {m.label}
                </p>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
