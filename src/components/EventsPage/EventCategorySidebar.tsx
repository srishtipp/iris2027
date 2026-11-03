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
  return (
    <nav className={styles.filters} aria-label="Filter events by category">
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
            onClick={() => onCategoryChange(value)}
            className={`${styles.filter} ${
              selectedCategory === value ? styles.filterActive : ""
            }`}
          >
            <span className={styles.code} aria-hidden="true">
              {code}
            </span>
            <span className={styles.label}>{label}</span>
            <span className={styles.count}>{String(count).padStart(2, "0")}</span>
          </button>
        );
      })}
    </nav>
  );
}
