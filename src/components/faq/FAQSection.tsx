import { FAQS } from "@/data/faqs";
import { FAQAccordion } from "./FAQAccordion";

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-section-heading"
      className="py-20 sm:py-24 px-4 sm:px-6 relative max-w-4xl mx-auto border-t border-iris-violet/30 scroll-mt-16"
    >
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
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
          Quick answers about IRIS 2027.
        </p>
      </div>

      <FAQAccordion items={FAQS} />
    </section>
  );
}
