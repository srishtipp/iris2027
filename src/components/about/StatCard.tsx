"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FestivalMetric } from "@/data/stats";

interface StatCardProps {
  stat: FestivalMetric;
  index: number;
}

export function StatCard({ stat, index }: StatCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    sky: "border-iris-violet/45 hover:border-iris-sky bg-iris-navy/35",
    magenta: "border-iris-magenta/35 hover:border-iris-magenta bg-iris-purple/25",
    purple: "border-iris-violet/40 hover:border-iris-sky/60 bg-iris-purple/35",
    navy: "border-iris-violet/35 hover:border-iris-magenta/60 bg-iris-navy-deep/70",
  }[stat.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.08,
      }}
      className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${cardVariants}`}
    >
      <div>
        <span className="font-mono text-xs text-iris-white/50">
          0{index + 1}
        </span>
        <p className="mt-5 text-4xl sm:text-5xl font-black tracking-tight text-iris-white">
          {stat.metric}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-iris-white/10">
        <h3 className="text-base font-bold text-iris-white">{stat.label}</h3>
        <p className="mt-1 text-xs text-iris-white/65 leading-relaxed">
          {stat.context}
        </p>
      </div>
    </motion.article>
  );
}
