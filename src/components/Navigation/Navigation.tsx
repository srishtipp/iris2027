"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { socials } from "@/lib/socials";
import styles from "./Navigation.module.css";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "HOME" },
  { href: "/events", label: "EVENTS" },
  // { href: "/gallery", label: "GALLERY" },
  { href: "/past", label: "PAST" },
  { href: "/team", label: "TEAM" },
  { href: "/about", label: "ABOUT" },
];

// Desktop: links split on either side of the centre logo
const splitAt = Math.floor(navLinks.length / 2);
const leftLinks = navLinks.slice(0, splitAt);
const rightLinks = navLinks.slice(splitAt);

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setMenuOpen(false);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Escape key + body scroll lock while the overlay is open
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const renderDesktopLink = (link: NavLink) => (
    <Link
      key={link.href}
      href={link.href}
      className={`${styles.crestLink} ${
        pathname === link.href ? styles.active : ""
      }`}
      aria-current={pathname === link.href ? "page" : undefined}
    >
      {link.label}
    </Link>
  );

  return (
    <>
      {/* Desktop: split crest bar (hidden on mobile via CSS) */}
      <header className={styles.crestBar}>
        <nav className={styles.crestNav} aria-label="Main">
          <div className={`${styles.crestSide} ${styles.crestLeft}`}>
            {leftLinks.map(renderDesktopLink)}
          </div>
          <div className={styles.crestSpacer} />
          <div className={`${styles.crestSide} ${styles.crestRight}`}>
            {rightLinks.map(renderDesktopLink)}
          </div>
        </nav>
        <Link href="/" className={styles.crestBadge} aria-label="IRIS 2027 home">
          <Logo height={46} />
        </Link>
      </header>

      {/* Mobile: logo + menu button, full-screen overlay */}
      <div className={styles.mobileBar}>
        <Link href="/" className={styles.mobileLogo} aria-label="IRIS 2027 home">
          <Logo height={34} />
        </Link>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          MENU
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 9h18M3 15h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!menuOpen}
      >
        <div className={styles.overlayTop}>
          <Link href="/" className={styles.mobileLogo} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            <Logo height={34} />
          </Link>
          <button
            ref={closeRef}
            className={styles.menuBtn}
            onClick={closeMenu}
            aria-label="Close menu"
            tabIndex={menuOpen ? 0 : -1}
          >
            CLOSE
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className={styles.overlayNav} aria-label="Mobile">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.overlayLink} ${
                pathname === link.href ? styles.active : ""
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              style={{ "--i": idx } as React.CSSProperties}
            >
              <span className={styles.overlayIndex}>0{idx + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.overlayFoot}>
          <span className={styles.followLabel}>Follow IRIS</span>
          <div className={styles.socialRow}>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label={s.name}
                tabIndex={menuOpen ? 0 : -1}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
