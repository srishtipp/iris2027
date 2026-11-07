"use client";

import { useMemo } from "react";
import { getVerifiedMetrics } from "@/data/stats";
import { StatCard } from "./StatCard";
import { BarChart3 } from "lucide-react";

export function AboutStats() {
  const verifiedMetrics = useMemo(() => getVerifiedMetrics(), []);
  const hasVerifiedMetrics = verifiedMetrics.length > 0;

  return (
    <section
      id="reference-stats"
      aria-labelledby="about-stats-heading"
      className="py-20 px-6 relative max-w-6xl mx-auto border-t border-iris-violet/30 scroll-mt-16"
    >
      <div className="max-w-2xl mb-12 space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-iris-sky font-semibold">
          Scale & Reach
        </span>
        <h2
          id="about-stats-heading"
          className="text-3xl sm:text-5xl font-bold tracking-tight text-iris-white"
        >
          Festival Highlights & Figures
        </h2>
        <p className="text-sm sm:text-base text-iris-white/75 leading-relaxed">
          Key metrics reflecting festival participation, collegiate representation, and event scale across IRIS editions.
        </p>
      </div>

      {hasVerifiedMetrics ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verifiedMetrics.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      ) : (
        <div
          role="status"
          aria-live="polite"
          className="rounded-2xl bg-gradient-to-br from-iris-navy/35 via-iris-navy-deep/50 to-iris-purple/20 border border-iris-violet/40 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-iris-navy/70 border border-iris-violet/40 text-xs font-mono uppercase tracking-wider text-iris-sky">
              <BarChart3 className="w-3.5 h-3.5 text-iris-magenta" />
              <span>Festival Statistics</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-iris-white tracking-tight">
              Official festival statistics are not currently available for publication.
            </h3>
            <p className="text-sm sm:text-base text-iris-white/75 leading-relaxed">
              Reference figures are retained in the project configuration and remain unpublished until verified statistics are provided.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full md:w-auto shrink-0">
            {["Legacy", "Footfall", "Colleges", "Events"].map((dimension) => (
              <div
                key={dimension}
                className="px-4 py-3 rounded-xl bg-iris-black/60 border border-iris-violet/30 text-center"
              >
                <span className="block text-[10px] font-mono uppercase tracking-widest text-iris-sky/75">
                  Metric Pillar
                </span>
                <span className="mt-1 block text-sm font-semibold text-iris-white">
                  {dimension}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
