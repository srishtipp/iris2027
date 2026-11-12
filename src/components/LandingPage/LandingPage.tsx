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

  type Highlight = {
    src: string;
    tag: string;
    name: string;
    sub?: string;
  };

  // Left panel: speakers, judges, shows etc. Edit this list to change what scrolls.
  const highlights: Highlight[] = [
    { src: "/images/landing/Malini_Gaur.jpg", tag: "Chief Guest", name: "Smt. Malini Gaur", sub: "MLA, Indore" },
    { src: "/images/speakers/current-speaker.webp", tag: "Speaker", name: "Mr. Ashish Kumar Singh", sub: "HPCL" },
    { src: "/images/landing/Underground_Authority.webp", tag: "Pro Show", name: "Underground Authority" },
    { src: "/images/landing/supply chain judge.jpg", tag: "Judge", name: "Jitendra Das Bairagi", sub: "Grant Thornton" },
    { src: "/images/landing/Satv_Live.webp", tag: "Pro Show", name: "SATV Live" },
    { src: "/images/landing/sonia judge - Laavanya.jpg", tag: "Judge", name: "Sonia Saluja", sub: "Mrs India Intl. 2019" },
    { src: "/images/landing/Kaustubh_Agarwal.webp", tag: "Pro Show", name: "Kaustubh Agarwal" },
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
            src="/images/landing/bg_ls_alt.png"
            alt="Edo Mountains"
            className={styles.landingImage}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* <div className={styles.mobileBackgroundContainer}>
          <img
            src="/images/landing/27THEME_PORTRAIT.png"
            alt="Mountains"
            className={styles.mobileMountains}
            loading="eager"
            decoding="async"
          />
        </div> */}

        {/* Background IRIS logo — commented out: the nav bar already carries the logo. */}
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

            {/* HERO BOTTOM BAR: highlights (left) + sponsors (right) */}
            <div className={styles.heroBottomBar}>
              {/* LEFT: HIGHLIGHTS */}
              <section className={styles.barPanel} aria-label="Highlights">
                <h2 className={styles.barTitle}>Highlights</h2>
                <div className={styles.marquee}>
                  <div className={styles.marqueeTrack}>
                    {[0, 1].map((copy) =>
                      highlights.map((h, idx) => (
                        <div
                          key={`${copy}-${idx}`}
                          className={styles.highlightCard}
                          aria-hidden={copy === 1}
                        >
                          <img
                            src={h.src}
                            alt={copy === 0 ? h.name : ""}
                            className={styles.highlightThumb}
                            loading="lazy"
                            decoding="async"
                          />
                          <div className={styles.highlightText}>
                            <span className={styles.highlightTag}>{h.tag}</span>
                            <span className={styles.highlightName}>{h.name}</span>
                            {h.sub && <span className={styles.highlightSub}>{h.sub}</span>}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </section>

              {/* RIGHT: SPONSORS */}
              <section className={styles.barPanel} aria-label="Sponsors">
                <h2 className={styles.barTitle}>Sponsors</h2>
                <div className={styles.marquee}>
                  <div className={`${styles.marqueeTrack} ${styles.marqueeTrackSlow}`}>
                    {[0, 1].map((copy) =>
                      sponsors.map((s, idx) => {
                        const tile = (
                          <>
                            <span className={styles.barLogoTile}>
                              <img
                                src={s.src}
                                alt={copy === 0 ? s.alt : ""}
                                loading="lazy"
                                decoding="async"
                              />
                            </span>
                            <span className={styles.barLogoLabel}>{s.title}</span>
                          </>
                        );
                        return s.link ? (
                          <a
                            key={`${copy}-${idx}`}
                            href={s.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.barLogoItem}
                            aria-hidden={copy === 1}
                            tabIndex={copy === 1 ? -1 : undefined}
                          >
                            {tile}
                          </a>
                        ) : (
                          <div
                            key={`${copy}-${idx}`}
                            className={styles.barLogoItem}
                            aria-hidden={copy === 1}
                          >
                            {tile}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </section>
            </div>

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
