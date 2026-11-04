"use client";

import { useEffect, useState } from "react";
import { Info, Layers, BarChart3, Compass, HelpCircle } from "lucide-react";

const NAV_ITEMS = [
  { id: "about-hero", label: "Hero", icon: Info },
  { id: "about-iris", label: "About", icon: Layers },
  { id: "reference-stats", label: "Figures", icon: BarChart3 },
  { id: "campus-map", label: "Map", icon: Compass },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("about-hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      NAV_ITEMS.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop - 220;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Page section navigation"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] bg-iris-black/90 backdrop-blur-xl px-2.5 sm:px-3.5 py-2 rounded-full border border-iris-sky/25 shadow-2xl flex items-center gap-1 sm:gap-2 overflow-x-auto"
    >
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActiveSection(item.id)}
            aria-current={isActive ? "location" : undefined}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-magenta ${
              isActive
                ? "bg-iris-sky text-iris-black font-semibold"
                : "text-iris-white/75 hover:text-iris-white hover:bg-iris-sky/10"
            }`}
          >
            <Icon className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[11px] sm:text-xs">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
