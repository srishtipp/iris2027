"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

interface NavLink {
  href: string;
  label: string;
}

export default function Navigation() {
  const pathname = usePathname();
  
  // Pages with dark backgrounds that need light text
  const darkPages = ["/events", "/team", "/gallery"];
  const isDarkBackground = darkPages.includes(pathname);

  const [isDesktop, setIsDesktop] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  

  const navLinks: NavLink[] = [
    { href: "/", label: "HOME" },
    { href: "/events", label: "EVENTS" },
    // { href: "/gallery", label: "GALLERY" },
    { href: "/team", label: "TEAM" },
    { href: "/about", label: "ABOUT" }
  ];

  // For dark background pages, use light text (#f0ddb4)
  // For home and about pages, use dark text (#382e28)
  const navColor = isDarkBackground 
    ? "#f0ddb4" 
    : "#382e28";

  const toggleSidebar = () => setSidebarOpen((v) => !v);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Desktop Navbar */}
      {isDesktop && (
        <header
          className={`${styles.desktopHeader} ${isDarkBackground ? styles.darkBg : ""}`}
          style={{ "--nav-color": navColor } as React.CSSProperties}
        >
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.desktopLink} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
      )}

      {/* Mobile Navbar */}
      {!isDesktop && (
        <>
          <nav
            className={`${styles.nav} ${
              sidebarOpen ? styles.hideHamburger : ""
            }`}
          >
            <button
              className={styles.hamMenuBtn}
              onClick={toggleSidebar}
              aria-label="Open menu"
            >
              <img
                src="/svgs/landing/moonHam.svg"
                alt="Menu"
                className={styles.moon}
              />
            </button>
          </nav>

          <div
            className={`${styles.sidebarContainer} ${
              sidebarOpen ? styles.sidebarOpen : ""
            }`}
          >
            <div
              className={styles.sidebarOverlay}
              onClick={closeSidebar}
            />

            <aside className={styles.sidebar}>
              <button
                className={styles.sidebarClose}
                onClick={closeSidebar}
                aria-label="Close menu"
              >
                <img
                  src="/svgs/landing/hamX.svg"
                  alt="Close"
                  className={styles.hamX}
                />
              </button>

              <div className={styles.sidebarNav}>
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.sidebarItem} ${
                      pathname === link.href ? styles.active : ""
                    }`}
                    onClick={closeSidebar}
                    style={{ "--i": idx + 1 } as React.CSSProperties}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </aside>
          </div>

          <div
            className={`${styles.wrapper} ${
              sidebarOpen ? styles.mask : ""
            }`}
          />
        </>
      )}
    </>
  );
}
