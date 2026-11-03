import styles from "./EventsDecorativeBorder.module.css";

const blockPrintPattern = (() => {
  const dotXs = [4, 12, 20, 28, 36, 44];
  const dots = dotXs
    .map((x) => `<circle cx="${x}" cy="3.5" r="1.3"/><circle cx="${x}" cy="32.5" r="1.3"/>`)
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 48 36">
    <rect width="48" height="36" fill="#221B44"/>
    <g fill="#F4B740">${dots}</g>
    <g stroke="#F4B740" stroke-opacity=".5">
      <line x1="0" y1="7.5" x2="48" y2="7.5"/>
      <line x1="0" y1="28.5" x2="48" y2="28.5"/>
    </g>
    <g fill="#EC6A47">
      <ellipse cx="24" cy="13.2" rx="2.4" ry="3.9"/>
      <ellipse cx="24" cy="22.8" rx="2.4" ry="3.9"/>
      <ellipse cx="19.2" cy="18" rx="3.9" ry="2.4"/>
      <ellipse cx="28.8" cy="18" rx="3.9" ry="2.4"/>
    </g>
    <circle cx="24" cy="18" r="2" fill="#F4B740"/>
    <g fill="#93A6F2">
      <path d="M0 14l4 4-4 4-4-4z"/>
      <path d="M48 14l4 4-4 4-4-4z"/>
    </g>
  </svg>`;

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
})();

export default function EventsDecorativeBorder() {
  return (
    <div
      aria-hidden="true"
      className={styles.border}
      style={{ backgroundImage: blockPrintPattern }}
    />
  );
}
