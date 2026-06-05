"use client";

import { useState } from "react";
import styles from "./EventItem.module.css";
import type { Event } from "./EventsPage";

interface EventItemProps {
  event: Event;
}

export default function EventItem({ event }: EventItemProps) {
  const [imgSrc, setImgSrc] = useState(
    event.image || "/images/irislogo_white.webp"
  );

  const handleRegisterClick = () => {
    if (event.link) {
      window.open(event.link, "_blank", "noopener,noreferrer");
    }
  };

  const handleImageError = () => {
    setImgSrc("/images/irislogo_white.webp");
  };

  return (
    <div className={styles.eventCard}>
      <div className={styles.cardFrame}>
        <div className={styles.imageWrapper}>
          {/* Category pill */}

          {/* Poster */}
          <img
            src={imgSrc}
            alt={event.title}
            className={styles.eventImage}
            onError={handleImageError}
            loading="lazy"
            decoding="async"
          />

          {/* Dark overlay + register on hover/tap */}
          <div className={styles.hoverOverlay}>
            <button
              type="button"
              className={styles.registerButton}
              onClick={handleRegisterClick}
              aria-label={`Register for ${event.title}`}
            >
              {/* Register */}
              Details
            </button>
          </div>

          {/* Title strip at bottom */}
          <div className={styles.titleBar}>
            <span className={styles.titleText}>{event.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
