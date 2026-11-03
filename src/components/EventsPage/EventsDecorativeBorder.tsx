import { useId } from "react";
import styles from "./EventsDecorativeBorder.module.css";

export default function EventsDecorativeBorder() {
  const patternPrefix = `events-border-${useId().replace(/:/g, "")}`;
  const desktopPattern = `${patternPrefix}-desktop`;
  const mobilePattern = `${patternPrefix}-mobile`;

  return (
    <svg
      className={styles.border}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id={desktopPattern} width="64" height="24" patternUnits="userSpaceOnUse">
          <rect width="64" height="24" fill="#1d173c" />
          <path d="M0 3.5h64M0 20.5h64" stroke="#d7a936" strokeWidth="1" />
          {[5, 14, 23, 32, 41, 50, 59].map((x) => (
            <g key={x} fill="#e9b94f">
              <circle cx={x} cy="2" r="1.25" />
              <circle cx={x} cy="22" r="1.25" />
            </g>
          ))}
          <path d="m11 12 4-4 4 4-4 4zm34 0 4-4 4 4-4 4z" fill="#93a6f2" />
          <g fill="#ec6a47">
            <ellipse cx="32" cy="7.5" rx="2.5" ry="4" />
            <ellipse cx="32" cy="16.5" rx="2.5" ry="4" />
            <ellipse cx="27.5" cy="12" rx="4" ry="2.5" />
            <ellipse cx="36.5" cy="12" rx="4" ry="2.5" />
          </g>
          <circle cx="32" cy="12" r="1.7" fill="#e9b94f" />
        </pattern>

        <pattern id={mobilePattern} width="44" height="16" patternUnits="userSpaceOnUse">
          <rect width="44" height="16" fill="#1d173c" />
          <path d="M0 2.5h44M0 13.5h44" stroke="#d7a936" strokeWidth="0.8" />
          {[4, 15, 26, 37].map((x) => (
            <g key={x} fill="#e9b94f">
              <circle cx={x} cy="1.5" r="0.8" />
              <circle cx={x} cy="14.5" r="0.8" />
            </g>
          ))}
          <path d="m7 8 2.5-2.5L12 8l-2.5 2.5zm30 0 2.5-2.5L42 8l-2.5 2.5z" fill="#93a6f2" />
          <g fill="#ec6a47">
            <ellipse cx="22" cy="5.2" rx="1.6" ry="2.6" />
            <ellipse cx="22" cy="10.8" rx="1.6" ry="2.6" />
            <ellipse cx="19.2" cy="8" rx="2.6" ry="1.6" />
            <ellipse cx="24.8" cy="8" rx="2.6" ry="1.6" />
          </g>
          <circle cx="22" cy="8" r="1.1" fill="#e9b94f" />
        </pattern>
      </defs>
      <rect className={styles.desktopBand} width="100%" height="100%" fill={`url(#${desktopPattern})`} />
      <rect className={styles.mobileBand} width="100%" height="100%" fill={`url(#${mobilePattern})`} />
    </svg>
  );
}
