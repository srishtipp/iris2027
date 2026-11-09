"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Award } from "lucide-react";

export function AboutStory() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="about-iris"
      aria-labelledby="about-story-heading"
      className="py-24 px-6 relative max-w-6xl mx-auto border-t border-iris-violet/30 scroll-mt-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Editorial Left Column */}
        <motion.div {...fadeUp} className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-iris-magenta font-semibold">
              The Festival Experience
            </span>
            <h2
              id="about-story-heading"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-iris-white"
            >
              Where Strategy Meets Culture
            </h2>
          </div>

          <p className="text-base sm:text-lg text-iris-white/80 leading-relaxed">
            Student-organized at the Indian Institute of Management Indore, IRIS brings together the analytical rigor of management education and the energy of college cultural festivities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-iris-navy/25 border-l-2 border-iris-sky border-t border-r border-b border-iris-violet/30 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-iris-sky">
                01 / Management Dimension
              </span>
              <h3 className="text-xl font-bold text-iris-white">
                Business & Leadership
              </h3>
              <p className="text-sm text-iris-white/75 leading-relaxed">
                Case study competitions, strategy simulations, leadership dialogues, and problem-solving challenges designed to test decision-making under pressure.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-iris-purple/20 border-l-2 border-iris-magenta border-t border-r border-b border-iris-violet/30 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-iris-magenta">
                02 / Cultural Dimension
              </span>
              <h3 className="text-xl font-bold text-iris-white">
                Arts & Performance
              </h3>
              <p className="text-sm text-iris-white/75 leading-relaxed">
                Music, dance, dramatics, literary arts, and stage showcases that celebrate creative talent from participating colleges.
              </p>
            </div>

            <div className="sm:col-span-2 p-6 rounded-2xl bg-iris-navy/25 border-l-2 border-[#cdb0e6] border-t border-r border-b border-iris-violet/30 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#cdb0e6]">
                03 / Sports Dimension
              </span>
              <h3 className="text-xl font-bold text-iris-white">
                Sports & Competition
              </h3>
              <p className="text-sm text-iris-white/75 leading-relaxed">
                Inter-college tournaments across indoor and outdoor sports, played on the campus courts, turf, and cricket ground.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Institutional Heritage Card (Replacing media frame entirely) */}
        <motion.div {...fadeUp} className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-iris-violet/40 bg-gradient-to-br from-iris-navy/70 via-iris-navy-deep to-iris-black p-8 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-iris-sky/20 border border-iris-violet/55 flex items-center justify-center text-iris-sky">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-iris-sky">
                  Legacy & Excellence
                </span>
                <h4 className="text-base font-bold text-iris-white">
                  The IRIS Tradition
                </h4>
              </div>
            </div>

            <p className="text-sm text-iris-white/80 leading-relaxed font-sans">
              Hosted at IIM Indore&apos;s scenic Prabandh Shikhar campus, IRIS embodies the institute&apos;s core ethos: empowering future leaders with holistic vision, artistic expression, and unyielding collaborative spirit.
            </p>

            <div className="pt-4 border-t border-iris-violet/30 flex items-center gap-3 text-xs font-mono text-iris-sky">
              <Award className="w-4 h-4 text-iris-magenta shrink-0" />
              <span>Organized entirely by IIM Indore Student Community</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
