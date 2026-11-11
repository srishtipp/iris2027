import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { CampusMapSection } from "@/components/campus-map/CampusMapSection";
import { FAQSection } from "@/components/faq/FAQSection";

export const metadata: Metadata = {
  title: "About IRIS 2027 | IIM Indore",
  description:
    "Discover IRIS 2027 at the Indian Institute of Management Indore — cultural and management dimensions, festival figures, an interactive campus map, and FAQs.",
};

/*
 * About page (redesign merged from iris2027-redesign-v10).
 * Renders inside the site layout, so the site Navigation and Footer are used.
 * The redesign's own top header and footer were dropped to avoid doubling them up.
 * The previous page (components/AboutPage) is left in the project, unused.
 */
export default function About() {
  return (
    <div className="relative text-iris-white selection:bg-iris-magenta selection:text-iris-white overflow-x-clip">
      {/* Fixed festival background with a translucent dark veil (same treatment as Events / Team / Past) */}
      <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src="/images/landing/27THEME.png"
          alt=""
          className="hidden md:block absolute inset-0 h-full w-full object-cover blur-[6px] scale-105"
          loading="eager"
          decoding="async"
        />
        <img
          src="/images/landing/27THEME_PORTRAIT.png"
          alt=""
          className="md:hidden absolute inset-0 h-full w-full object-cover blur-[6px] scale-105"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10001] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-iris-sky focus:text-iris-black focus:font-mono focus:text-xs focus:font-semibold"
      >
        Skip to main content
      </a>

      <main id="main-content">
        <div id="about-hero" className="scroll-mt-20">
          <AboutHero />
        </div>
        <AboutStory />
        <CampusMapSection />
        <FAQSection />
      </main>
    </div>
  );
}
