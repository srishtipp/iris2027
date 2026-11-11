"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Event, EventCategory } from "./EventsPage";
import styles from "./EventCategorySidebar.module.css";

type CategoryFilter = EventCategory | "All";

interface EventCategorySidebarProps {
  selectedCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  events: Event[];
}

const categories: { value: CategoryFilter; code: string; label: string }[] = [
  { value: "All", code: "A", label: "All events" },
  { value: "Flagship", code: "F", label: "Flagship" },
  { value: "Cultural", code: "C", label: "Cultural" },
  { value: "Sports", code: "S", label: "Sports" },
  { value: "Management", code: "M", label: "Management" },
];

export default function EventCategorySidebar({
  selectedCategory,
  onCategoryChange,
  events,
}: EventCategorySidebarProps) {
  const scrollRef = useRef<HTMLElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Show the arrows / edge fades only while there is more to scroll to.
  const updateEdges = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateEdges)
        : null;
    observer?.observe(el);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
      observer?.disconnect();
    };
  }, [updateEdges]);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.max(el.clientWidth * 0.6, 140), behavior: "smooth" });
  };

  return (
    <div
      className={`${styles.wrap} ${canScrollLeft ? styles.canScrollLeft : ""} ${
        canScrollRight ? styles.canScrollRight : ""
      }`}
    >
      <nav
        ref={scrollRef}
        className={styles.filters}
        aria-label="Filter events by category"
      >
        {categories.map(({ value, code, label }) => {
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
              onClick={(e) => {
                onCategoryChange(value);
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  inline: "nearest",
                  block: "nearest",
                });
              }}
              className={`${styles.filter} ${
                selectedCategory === value ? styles.filterActive : ""
              }`}
            >
              <span className={styles.code} aria-hidden="true">
                {code}
              </span>
              <span className={styles.label}>{label}</span>
              <span className={styles.count}>
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </nav>

      {canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll categories left"
          className={`${styles.scrollBtn} ${styles.scrollBtnLeft}`}
          onClick={() => scrollByAmount(-1)}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
      )}
      {canScrollRight && (
        <button
          type="button"
          aria-label="Scroll categories right"
          className={`${styles.scrollBtn} ${styles.scrollBtnRight}`}
          onClick={() => scrollByAmount(1)}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
