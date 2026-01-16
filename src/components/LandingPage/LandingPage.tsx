"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./LandingPage.module.css";
import CountdownTimer from "./CountdownTimer";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  const sponsorsRef = useRef<HTMLDivElement | null>(null);
  const starsRef = useRef<HTMLDivElement | null>(null);

  const [isPaused, setIsPaused] = useState(false);
  const rafRef = useRef<number | null>(null);

  const [isStarsPaused, setIsStarsPaused] = useState(false);
  const starsRafRef = useRef<number | null>(null);

  const sponsors = [
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s1.png", alt: "HPCL", title: "Trinity Sponsor" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s2.png", alt: "SBI", title: "Banking Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s4.png", alt: "Unstop", title: "Platform Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s5.png", alt: "Business  Standard", title: "Media Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s7.png", alt: "Safexpress", title: "Logistics Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s8.png", alt: "SheKunj", title: "Community Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s13.png", alt: "Indori Chatkare", title: "Partner" },
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
    "https://iris.cdn.jyotirmoysaha.co.in/images/landing/Underground_Authority.webp",
    "https://iris.cdn.jyotirmoysaha.co.in/images/landing/Satv_Live.webp",
    "https://iris.cdn.jyotirmoysaha.co.in/images/landing/Kaustubh_Agarwal.webp"
    ],
    []
  );

  const [proIndex, setProIndex] = useState(0);
  const [proPaused, setProPaused] = useState(false);
  const [posterAR, setPosterAR] = useState<Record<string, number>>({});

  const wrap = (i: number) => (i + proShows.length) % proShows.length;

  useEffect(() => {
    if (proShows.length <= 1) return;
    if (proPaused) return;

    const id = window.setInterval(() => {
      setProIndex((p) => wrap(p + 1));
    }, 2500);

    return () => window.clearInterval(id);
  }, [proPaused, proShows.length]);

  const prevPro = () => setProIndex((p) => wrap(p - 1));
  const nextPro = () => setProIndex((p) => wrap(p + 1));

  return (
    <div className={styles.wrapper}>
      {/* Fixed Parallax Background */}
      <div className={styles.backgroundContainer}>
        <div className={styles.desktopBackground}>
          <img
            src="https://iris.cdn.jyotirmoysaha.co.in/images/landing/bg_landscape.webp"
            alt="Edo Mountains"
            className={styles.landingImage}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
        </div>

        <div className={styles.mobileBackgroundContainer}>
          <img
            src="https://iris.cdn.jyotirmoysaha.co.in/images/landing/bg_portrait.webp"
            alt="Mountains"
            className={styles.mobileMountains}
          />
        </div>

        <div className={styles.logoContainer}>
          <img
            src="https://iris.cdn.jyotirmoysaha.co.in/images/landing/irislogo.png"
            alt="IRIS 2026"
            className={styles.logo}
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
            <div className={styles.irisThemeContainer}>
              <div className={styles.irisThemeWrapper}>
                <h2 className={styles.sectionTitle}>FEST THEME</h2>

                <div className={styles.irisThemeGrid}>
                  <div className={styles.irisThemeImageSide}>
                    <img
                      src="https://iris.cdn.jyotirmoysaha.co.in/images/aboutus/indieverse.jpeg"
                      alt="INDIEVERSE"
                      className={styles.irisThemeFeatureImage}
                    />
                  </div>

                  <div className={styles.irisThemeContentSide}>
                    <p className={styles.irisThemeDescriptionText}>
                      Step into Indieverse - the official theme of IRIS’26! A celebration of India’s rich diversity, where
                      timeless culture, vibrant cinema, and modern innovation unite to showcase the many shades of one
                      nation. Join us at IIM Indore for a dynamic experience that engages students across all disciplines.
                    </p>

                    <div className={styles.buttonGroup}>
                      <a
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

              <section className={styles.proShowsSection}>
                <h2 className={styles.sectionTitle}>PRO SHOWS</h2>

                <div
                  className={styles.proStage}
                  onMouseEnter={() => setProPaused(true)}
                  onMouseLeave={() => setProPaused(false)}
                  onTouchStart={() => setProPaused(true)}
                  onTouchEnd={() => setProPaused(false)}
                >
                  <button
                    type="button"
                    aria-label="Previous pro show"
                    className={`${styles.proArrow} ${styles.proArrowLeft}`}
                    onClick={prevPro}
                  >
                    ‹
                  </button>

                  <div className={styles.proViewport}>
                    {proShows.map((url, index) => {
                      let posKey = "";
                      const len = proShows.length;
                      if (index === proIndex) posKey = "proPosCenter";
                      else if (index === (proIndex + 1) % len) posKey = "proPosRight";
                      else if (index === (proIndex - 1 + len) % len) posKey = "proPosLeft";

                      const isHidden = !posKey;

                      return (
                        <div
                          key={url}
                          className={`${styles.proCard} ${posKey ? styles[posKey] : ""}`}
                          style={{
                            ["--poster" as any]: `url(${url})`,
                            ["--ar" as any]: posterAR[url] ?? 0.75, // fallback ~3:4
                            opacity: isHidden ? 0 : undefined,
                            pointerEvents: isHidden ? "none" : undefined,
                          }}
                        >
                          <div className={styles.proPosterBg} />
                          <div className={styles.proPosterOverlay} />

                          <img
                            className={styles.proPosterImg}
                            src={url}
                            alt={`Pro show ${index + 1}`}
                            onLoad={(e) => {
                              const img = e.currentTarget;
                              if (!img.naturalWidth || !img.naturalHeight) return;
                              const ar = img.naturalWidth / img.naturalHeight;
                              setPosterAR((prev) => (prev[url] ? prev : { ...prev, [url]: ar }));
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    aria-label="Next pro show"
                    className={`${styles.proArrow} ${styles.proArrowRight}`}
                    onClick={nextPro}
                  >
                    ›
                  </button>
                </div>
              </section>

            {/* ASSOCIATIONS */}
            <section className={styles.sponsorsSection}>
              <h2 className={styles.sectionTitle}>ASSOCIATIONS</h2>

              <div className={styles.sponsorsCarousel} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                <button
                  type="button"
                  aria-label="Scroll sponsors left"
                  className={`${styles.sponsorsArrow} ${styles.sponsorsArrowLeft}`}
                  onClick={handlePrev}
                >
                  ‹
                </button>

                <div ref={sponsorsRef} className={styles.sponsorsGrid}>
                  {sponsors.map((s, idx) => (
                    <div key={`${s.alt}-${idx}`} className={styles.sponsorItem}>
                      <div className={styles.sponsorLogoContainer}>
                        <img src={s.src} alt={s.alt} />
                      </div>
                      <p className={styles.sponsorTitle}>{s.title}</p>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  aria-label="Scroll sponsors right"
                  className={`${styles.sponsorsArrow} ${styles.sponsorsArrowRight}`}
                  onClick={handleNext}
                >
                  ›
                </button>
              </div>
            </section>

            {/* PAST GLIMPSES */}
            <section className={styles.glimpsesSection}>
              <h2 className={styles.sectionTitle}>PAST GLIMPSES</h2>
              <div className={styles.treeContainer}>
                <div className={styles.tree}>
                  <iframe
                    className={styles.irisVideoContainer}
                    src="https://www.youtube.com/embed/WcSoz4-ofHo"
                    title="Iris'25 | IIM Indore | Official Recap Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>

            {/* PAST STARS */}
            <section className={styles.pastStarsSection}>
              <h2 className={styles.sectionTitle}>PAST STARS</h2>

              <div className={styles.starsMainRow}>
                <img src="https://iris.cdn.jyotirmoysaha.co.in/images/stars/main1.png" alt="Main Star 1" className={styles.starMainPoster} />
                <img src="https://iris.cdn.jyotirmoysaha.co.in/images/stars/main2.png" alt="Main Star 2" className={styles.starMainPoster} />
              </div>

              <div
                className={styles.starsCarouselRow}
                onMouseEnter={() => setIsStarsPaused(true)}
                onMouseLeave={() => setIsStarsPaused(false)}
              >
                <button
                  type="button"
                  aria-label="Scroll stars left"
                  className={`${styles.starsArrow} ${styles.starsArrowLeft}`}
                  onClick={handlePrevStars}
                >
                  ‹
                </button>

                <div ref={starsRef} className={styles.starsCarouselTrack}>
                  {[
                    "https://iris.cdn.jyotirmoysaha.co.in/images/stars/p1.png",
                    "https://iris.cdn.jyotirmoysaha.co.in/images/stars/p2.png",
                    "https://iris.cdn.jyotirmoysaha.co.in/images/stars/p3.png",
                    "https://iris.cdn.jyotirmoysaha.co.in/images/stars/p4.png",
                    "https://iris.cdn.jyotirmoysaha.co.in/images/stars/p5.png",
                    "https://iris.cdn.jyotirmoysaha.co.in/images/stars/p6.png",
                    "https://iris.cdn.jyotirmoysaha.co.in/images/stars/p7.png",
                    "https://iris.cdn.jyotirmoysaha.co.in/images/stars/p8.png",
                  ].map((src, i) => (
                    <div key={i} className={styles.starPosterItem}>
                      <img src={src} alt={`Star Poster ${i + 1}`} />
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  aria-label="Scroll stars right"
                  className={`${styles.starsArrow} ${styles.starsArrowRight}`}
                  onClick={handleNextStars}
                >
                  ›
                </button>
              </div>
            </section>

            {/* PAST SPEAKERS */}
            <section className={styles.speakersSection}>
              <h2 className={styles.sectionTitle}>PAST SPEAKERS</h2>

              <div className={styles.speakersGrid}>
                <div className={styles.speakerCard}>
                  <img
                    src="https://iris.cdn.jyotirmoysaha.co.in/images/speakers/sp1.png"
                    alt="Rahul Gehani"
                    className={styles.speakerImgRect}
                  />
                  <h3>Rahul Gehani</h3>
                  <p>Partner, Everest Group</p>
                </div>

                <div className={styles.speakerCard}>
                  <img
                    src="https://iris.cdn.jyotirmoysaha.co.in/images/speakers/sp2.png"
                    alt="K Radhakrishnan"
                    className={styles.speakerImgRect}
                  />
                  <h3>K Radhakrishnan</h3>
                  <p>Former Chairman, ISRO</p>
                </div>

                <div className={styles.speakerCard}>
                  <img
                    src="https://iris.cdn.jyotirmoysaha.co.in/images/speakers/sp3.png"
                    alt="Rana Kapoor"
                    className={styles.speakerImgRect}
                  />
                  <h3>Rana Kapoor</h3>
                  <p>Former CEO & MD, Yes Bank</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
