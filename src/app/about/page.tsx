import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutStats } from "@/components/about/AboutStats";
import { CampusMapSection } from "@/components/campus-map/CampusMapSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { SectionNav } from "@/components/shared/SectionNav";

export const metadata: Metadata = {
  title: "About IRIS 2027 | IIM Indore",
  description:
    "Discover IRIS 2027 at the Indian Institute of Management Indore — cultural and management dimensions, festival figures, campus map, and FAQs.",
};

/*
 * About page (redesign merged from iris2027-redesign-v10).
 * Renders inside the site layout, so the site Navigation and Footer are used.
 * The redesign's own top header and footer were dropped to avoid doubling them up.
 * The previous page (components/AboutPage) is left in the project, unused.
 */
export default function About() {
  return (
    <div className="relative bg-gradient-to-b from-iris-ink via-iris-navy-deep to-iris-ink text-iris-white selection:bg-iris-magenta selection:text-iris-white overflow-x-hidden pb-24">
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10001] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-iris-sky focus:text-iris-black focus:font-mono focus:text-xs focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Floating section dock (Hero / About / Figures / Map / FAQ) */}
      <SectionNav />

      <main id="main-content">
        <div id="about-hero" className="scroll-mt-20">
          <AboutHero />
        </div>
        <AboutStory />
        <AboutStats />
        <CampusMapSection />
        <FAQSection />
      </main>
    </div>
  );
}
