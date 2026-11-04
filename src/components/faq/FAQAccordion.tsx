"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQItem } from "@/data/faqs";
import { Plus, Minus } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(
    () => (items.length > 0 ? items[0].id : null)
  );

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-iris-navy/40 border-iris-sky/40 shadow-lg"
                : "bg-iris-navy/15 border-iris-sky/15 hover:border-iris-sky/30"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-iris-sky"
              >
                <span className="text-base sm:text-lg font-semibold text-iris-white tracking-tight">
                  {item.question}
                </span>
                <span
                  className={`p-2 rounded-full border transition-colors shrink-0 ${
                    isOpen
                      ? "bg-iris-magenta text-iris-white border-iris-magenta"
                      : "bg-iris-navy/60 text-iris-sky border-iris-sky/20"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-sm sm:text-base text-iris-white/75 leading-relaxed border-t border-iris-white/10 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
