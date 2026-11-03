import { ArrowUpRight, CalendarDays, Users } from "lucide-react";
import styles from "./EventItem.module.css";
import type { Event } from "./EventsPage";

interface EventItemProps {
  event: Event;
}

const FESTIVAL_DATE = "16–18 Jan 2026";

export default function EventItem({ event }: EventItemProps) {
  const categoryClass = styles[event.category.toLowerCase()];

  return (
    <article className={styles.eventCard}>
      <div className={styles.imageWrapper}>
        <img
          src={event.image || "/images/irislogo_white.webp"}
          alt={`${event.title} event poster`}
          className={styles.eventImage}
          loading="lazy"
          decoding="async"
        />
        <span className={`${styles.category} ${categoryClass}`}>
          {event.category}
        </span>
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.title}>{event.title}</h2>
        {event.link && (
          <a
            className={styles.eventLink}
            href={event.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${event.title} details`}
          >
            View event <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
        <div className={styles.eventDetails}>
          <span className={styles.detail}>
            <CalendarDays size={15} aria-hidden="true" />
            <span>{event.date || FESTIVAL_DATE}</span>
          </span>
          {event.teamSize && (
            <span className={styles.detail}>
              <Users size={15} aria-hidden="true" />
              <span>{event.teamSize}</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
