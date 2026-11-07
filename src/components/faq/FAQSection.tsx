"use client";

import { useState, useMemo } from "react";
import {
  FAQ_CATEGORIES,
  FAQCategory,
  PROVISIONAL_FAQ_TOPICS,
  getVerifiedFaqs,
} from "@/data/faqs";
import { FAQAccordion } from "./FAQAccordion";
import { Search, Clock } from "lucide-react";

export function FAQSection() {
  const verifiedFaqs = useMemo(() => getVerifiedFaqs(), []);
  const [activeCategory, setActiveCategory] = useState<FAQCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    return verifiedFaqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [verifiedFaqs, activeCategory, searchQuery]);

  const filteredProvisionalTopics = useMemo(() => {
    return PROVISIONAL_FAQ_TOPICS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch = item.topic.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="faq"
      aria-labelledby="faq-section-heading"
      className="py-24 px-6 relative max-w-5xl mx-auto border-t border-iris-violet/30 scroll-mt-16"
    >
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span className="font-mono text-xs uppercase tracking-widest text-iris-magenta font-semibold">
          Festival Guide
        </span>
        <h2
          id="faq-section-heading"
          className="text-3xl sm:text-5xl font-bold tracking-tight text-iris-white"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-iris-white/70">
          Substantiated festival overview answers. Policy-dependent topics are listed below pending official confirmation.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-sky ${
              activeCategory === "all"
                ? "bg-iris-sky text-iris-black font-bold border-iris-sky"
                : "bg-iris-navy/30 text-iris-white/70 border-iris-violet/35 hover:text-iris-white"
            }`}
          >
            All
          </button>
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-sky ${
                activeCategory === cat.id
                  ? "bg-iris-sky text-iris-black font-bold border-iris-sky"
                  : "bg-iris-navy/30 text-iris-white/70 border-iris-violet/35 hover:text-iris-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-iris-sky/60 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            aria-label="Search frequently asked questions"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-iris-navy/30 border border-iris-violet/35 text-iris-white placeholder:text-iris-white/40 focus:outline-none focus:border-iris-sky"
          />
        </div>
      </div>

      {filteredFaqs.length > 0 ? (
        <FAQAccordion items={filteredFaqs} />
      ) : (
        activeCategory !== "campus" && (
          <div className="p-10 text-center rounded-2xl bg-iris-navy/20 border border-iris-violet/30 text-sm font-mono text-iris-white/60">
            No matching verified questions found for &ldquo;{searchQuery}&rdquo;.
          </div>
        )
      )}

      {/* Increased font size for Policy-Dependent Topics Section */}
      <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-iris-navy/25 border border-iris-violet/35 space-y-6">
        <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono uppercase tracking-wider text-iris-sky font-semibold">
          <Clock className="w-5 h-5 text-iris-magenta shrink-0" />
          <span>Policy-Dependent Topics (Provisional List)</span>
        </div>
        {filteredProvisionalTopics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProvisionalTopics.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl bg-iris-black/60 border border-iris-violet/30 flex flex-col justify-between gap-3 shadow-md"
              >
                <p className="text-sm sm:text-base font-semibold text-iris-white leading-snug">
                  {item.topic}
                </p>
                <span className="text-xs font-mono text-iris-sky/80 px-2.5 py-1 rounded-md bg-iris-navy/50 w-fit border border-iris-violet/35">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center rounded-xl bg-iris-black/40 text-sm font-mono text-iris-white/60">
            No provisional topics match the selected category or search.
          </div>
        )}
      </div>
    </section>
  );
}
