import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutStats } from "@/components/about/AboutStats";
import { CampusMapSection } from "@/components/campus-map/CampusMapSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { SectionNav } from "@/components/shared/SectionNav";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "About - IRIS 2027",
  description: "Discover the story, campus, and spirit of IRIS 2027.",
};

export default function AboutPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-slate-900"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
      <SectionNav />
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <CampusMapSection />
      <FAQSection />
    </main>
  );
}
