"use client";

import {
  Briefcase,
  Crown,
  Drama,
  Star,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import styles from "./EventCategorySidebar.module.css";
import type { Event, EventCategory } from "./EventsPage";

type CategoryFilter = EventCategory | "All";

interface EventCategorySidebarProps {
  selectedCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  events: Event[];
}

const categories: { value: CategoryFilter; label: string; icon: LucideIcon }[] = [
  { value: "All", label: "All Events", icon: Star },
  { value: "Flagship", label: "Flagship", icon: Crown },
  { value: "Cultural", label: "Cultural", icon: Drama },
  { value: "Management", label: "Management", icon: Briefcase },
  { value: "Sports", label: "Sports", icon: Trophy },
];

export default function EventCategorySidebar({
  selectedCategory,
  onCategoryChange,
  events,
}: EventCategorySidebarProps) {
  return (
    <aside className={styles.sidebar} aria-label="Filter events by type">
      <div className={styles.titleIcon} aria-hidden="true">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
          <path d="M5 8h22M8 16h16M11 24h10" stroke="currentColor" strokeWidth="2" />
          <circle cx="11" cy="8" r="2.5" fill="#171511" stroke="currentColor" strokeWidth="2" />
          <circle cx="21" cy="16" r="2.5" fill="#171511" stroke="currentColor" strokeWidth="2" />
          <circle cx="15" cy="24" r="2.5" fill="#171511" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <h2 className={styles.heading}>FILTER BY TYPE</h2>
      <div className={styles.headingRule} />

      <nav className={styles.options}>
        {categories.map(({ value, label, icon: Icon }) => {
          const count =
            value === "All"
              ? events.length
              : events.filter((event) => event.category === value).length;

          return (
            <button
              key={value}
              type="button"
              aria-label={`${label}: ${count} events`}
              aria-pressed={selectedCategory === value}
              onClick={() => onCategoryChange(value)}
              className={`${styles.option} ${
                selectedCategory === value ? styles.optionActive : ""
              }`}
            >
              <span className={styles.optionIcon} aria-hidden="true">
                <Icon size={23} strokeWidth={2.2} />
              </span>
              <span className={styles.optionLabel}>{label}</span>
              <span className={styles.count}>{String(count).padStart(2, "0")}</span>
            </button>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <img src="/images/irislogo_white.webp" alt="" />
        <span>IRIS &apos;27</span>
      </div>
    </aside>
  );
}
