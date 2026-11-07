import styles from "./Logo.module.css";

/** Official IRIS eye logo (from iris-2027.pages.dev) */
export default function Logo({
  className = "",
  height,
}: {
  className?: string;
  height?: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/nav/logo-eye.webp"
      alt="IRIS 2027"
      width={360}
      height={221}
      className={`${styles.eye} ${className}`}
      style={height ? { height } : undefined}
    />
  );
}
