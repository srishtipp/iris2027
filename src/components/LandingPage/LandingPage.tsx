"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./LandingPage.module.css";
import CountdownTimer from "./CountdownTimer";
import { Linkedin, Instagram } from "lucide-react";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  const sponsorsRef = useRef<HTMLDivElement | null>(null);
  const starsRef = useRef<HTMLDivElement | null>(null);

  const [isPaused, setIsPaused] = useState(false);
  const rafRef = useRef<number | null>(null);

  const [isStarsPaused, setIsStarsPaused] = useState(false);
  const starsRafRef = useRef<number | null>(null);

  type Sponsor = {
    src: string;
    alt: string;
    title: string;
    link?: string;
  };

  const sponsors: Sponsor[] = [
    { src: "/images/sponsors/s1_v2.png", alt: "HPCL", title: "Trinity Sponsor" },
    { src: "/images/sponsors/s2.png", alt: "SBI", title: "Official Banking Partner" },
    { src: "/images/sponsors/s15.png", alt: "Qoneqt", title: "Community Partner" },
    { src: "/images/sponsors/s7.png", alt: "Safexpress", title: "Official Logistics Partner" },
    { src: "/images/sponsors/s16.png", alt: "PNB", title: "Banking Partner" },
    { src: "/images/sponsors/s12.png", alt: "Denver", title: "Official Fragrance Partner" },
    { src: "/images/sponsors/s14.png", alt: "Abhibus", title: "Official Travel Partner", link: "https://www.abhibus.com/" },
    { src: "/images/sponsors/s4.png", alt: "Unstop", title: "Platform Partner" },
    { src: "/images/sponsors/s6.png", alt: "The Hindu", title: "Official Media Partner" },
    { src: "/images/sponsors/s17.png", alt: "CBI", title: "Banking Partner" },
    { src: "/images/sponsors/s5.png", alt: "Business Standard", title: "Official Media Partner" },
    { src: "/images/sponsors/s8.png", alt: "SheKunj", title: "Community Partner" },
    { src: "/images/sponsors/s13.png", alt: "Indorichatkare", title: "Social Media Partner" },
    { src: "/images/sponsors/s18.png", alt: "Wham Energy", title: "Official Caffeine Partner" },
    { src: "/images/sponsors/s19.png", alt: "A1 Photography", title: "Photography Partner" },
    { src: "/images/sponsors/s10.png", alt: "Hillary Rhoda", title: "Official Makeup Partner" },
    { src: "/images/sponsors/s9.png", alt: "Grant Thornton", title: "Partner" },
  ];

  const SCROLL_STEP = 260;
  const scrollToStart = (el: HTMLDivElement) => el.scrollTo({ left: 0, behavior: "smooth" });
  const scrollToEnd = (el: HTMLDivElement) =>
    el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: "smooth" });

  const handlePrev = () => {
    const el = sponsorsRef.current;
    if (!el) return;
    if (el.scrollLeft <= 0) scrollToEnd(el);
    else el.scrollBy({ left: -SCROLL_STEP, behavior: "smooth" });
  };

  const handleNext = () => {
    const el = sponsorsRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= maxScroll - 1) scrollToStart(el);
    else el.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
  };

  useEffect(() => {
    const el = sponsorsRef.current;
    if (!el) return;

    let last = performance.now();
    const pixelsPerSecond = 80;

    const tick = (now: number) => {
      const dt = now - last;
      last = now;

      if (!isPaused && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += (pixelsPerSecond * dt) / 1000;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 2) el.scrollLeft = 0;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused, sponsors.length]);

  const handlePrevStars = () => {
    const el = starsRef.current;
    if (!el) return;
    if (el.scrollLeft <= 0) scrollToEnd(el);
    else el.scrollBy({ left: -SCROLL_STEP, behavior: "smooth" });
  };

  const handleNextStars = () => {
    const el = starsRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= maxScroll - 1) scrollToStart(el);
    else el.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
  };

  useEffect(() => {
    const el = starsRef.current;
    if (!el) return;

    let last = performance.now();
    const pixelsPerSecond = 80;

    const tick = (now: number) => {
      const dt = now - last;
      last = now;

      if (!isStarsPaused && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += (pixelsPerSecond * dt) / 1000;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 1) el.scrollLeft = 0;
      }

      starsRafRef.current = requestAnimationFrame(tick);
    };

    starsRafRef.current = requestAnimationFrame(tick);
    return () => {
      if (starsRafRef.current) cancelAnimationFrame(starsRafRef.current);
    };
  }, [isStarsPaused]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const proShows = useMemo(
    () => [
    "/images/landing/Underground_Authority.webp",
    "/images/landing/Satv_Live.webp",
    "/images/landing/Kaustubh_Agarwal.webp"
    ],
    []
  );

  const [proIndex, setProIndex] = useState(0);
  const [proPaused, setProPaused] = useState(false);
  const [posterAR, setPosterAR] = useState<Record<string, number>>({});

  const wrap = useCallback((i: number) => (i + proShows.length) % proShows.length, [proShows.length]);

  useEffect(() => {
    if (proShows.length <= 1) return;
    if (proPaused) return;

    const id = window.setInterval(() => {
      setProIndex((p) => wrap(p + 1));
    }, 2500);

    return () => window.clearInterval(id);
  }, [proPaused, proShows.length, wrap]);

  const prevPro = () => setProIndex((p) => wrap(p - 1));
  const nextPro = () => setProIndex((p) => wrap(p + 1));

  return (
    <div className={styles.wrapper}>
      {/* Fixed Parallax Background */}
      <div className={styles.backgroundContainer}>
        <div className={styles.desktopBackground}>
          <img
            src="/images/landing/27THEME.png"
            alt="Edo Mountains"
            className={styles.landingImage}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className={styles.mobileBackgroundContainer}>
          <img
            src="/images/landing/27THEME_PORTRAIT.png"
            alt="Mountains"
            className={styles.mobileMountains}
            loading="eager"
            decoding="async"
          />
        </div>

        <div className={styles.logoContainer}>
          <img
            src="/images/landing/irislogo.png"
            alt="IRIS 2026"
            className={styles.logo}
            loading="eager"
            decoding="async"
          />
        </div> 
       <div className={styles.countdownContainer}>
          <CountdownTimer />
        </div>
      </div>   
      {/* Scrollable Content */}
      <div className={styles.scrollerWrapper}>
        <div className={styles.scroller}>
          <div className={styles.landingContainer}>
            <div className={styles.bottomOverlay}></div>

            {/* FEST THEME */}
            {/* <div className={styles.irisThemeContainer}>
              <div className={styles.irisThemeWrapper}>
                <h2 className={styles.sectionTitle}>IRIS&apos;26</h2>

                <div className={styles.irisThemeGrid}>
                  <div className={styles.irisThemeImageSide}>
                    <img
                      src="/images/aboutus/indieverse.jpeg"
                      alt="INDIEVERSE"
                      className={styles.irisThemeFeatureImage}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className={styles.irisThemeContentSide}>
                    <p className={styles.irisThemeDescriptionText}>
                      Step into Indieverse - the official theme of IRIS&apos;26! A celebration of India&apos;s rich diversity, where
                      timeless culture, vibrant cinema, and modern innovation unite to showcase the many shades of one
                      nation. Join us at IIM Indore for a dynamic experience that engages students across all disciplines.
                    </p>

                    <div className={styles.buttonGroup}>
                      {/* <a
                        href="https://unstop.com/college-fests/iris-2026-iim-indores-flagship-fest-indian-institute-of-management-iim-indore-416510"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.newRegisterBtn}
                      >
                        Register Now
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1iOhiOkkYy3hJjm-4EiL-rBNJiQKUthDF/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.brochureBtn}
                      >
                        Fest Brochure
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
