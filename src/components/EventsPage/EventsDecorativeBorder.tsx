import { useId } from "react";
import styles from "./EventsDecorativeBorder.module.css";

export default function EventsDecorativeBorder() {
  const patternId = `events-border-${useId().replace(/:/g, "")}`;

  return (
    <svg
      className={styles.border}
      width="100%"
      height="100%"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id={patternId}
          width="80"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <rect width="80" height="48" fill="#1d173c" />
          <path d="M0 10.5h80M0 37.5h80" stroke="#d7a936" strokeWidth="1" />
          <g fill="#e9b94f">
            <circle cx="4" cy="6" r="1.5" />
            <circle cx="14" cy="6" r="1.5" />
            <circle cx="24" cy="6" r="1.5" />
            <circle cx="34" cy="6" r="1.5" />
            <circle cx="44" cy="6" r="1.5" />
            <circle cx="54" cy="6" r="1.5" />
            <circle cx="64" cy="6" r="1.5" />
            <circle cx="74" cy="6" r="1.5" />
            <circle cx="4" cy="42" r="1.5" />
            <circle cx="14" cy="42" r="1.5" />
            <circle cx="24" cy="42" r="1.5" />
            <circle cx="34" cy="42" r="1.5" />
            <circle cx="44" cy="42" r="1.5" />
            <circle cx="54" cy="42" r="1.5" />
            <circle cx="64" cy="42" r="1.5" />
            <circle cx="74" cy="42" r="1.5" />
          </g>
          <g fill="#93a6f2">
            <path d="m19 19 5 5-5 5-5-5z" />
            <path d="m61 19 5 5-5 5-5-5z" />
          </g>
          <g fill="#ec6a47">
            <ellipse cx="40" cy="16" rx="3.5" ry="6" />
            <ellipse cx="40" cy="32" rx="3.5" ry="6" />
            <ellipse cx="32" cy="24" rx="6" ry="3.5" />
            <ellipse cx="48" cy="24" rx="6" ry="3.5" />
          </g>
          <circle cx="40" cy="24" r="2.5" fill="#e9b94f" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
