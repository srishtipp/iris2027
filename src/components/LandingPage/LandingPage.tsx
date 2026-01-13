"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./LandingPage.module.css";
import CountdownTimer from "./CountdownTimer";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const sponsorsRef = useRef<HTMLDivElement | null>(null);
  const starsRef = useRef<HTMLDivElement | null>(null);
  const [isStarsPaused, setIsStarsPaused] = useState(false);
  const starsRafRef = useRef<number | null>(null);
  const sponsors = [
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s1.png", alt: "HPCL", title: "Trinity Sponsor" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s2.png", alt: "SBI", title: "Banking Partner" },
    //{ src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s3.png", alt: "Lifestyle", title: "Fashion Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s4.png", alt: "Unstop", title: "Platform Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s5.png", alt: "Business  Standard", title: "Media Partner" },
    //{ src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s6.png", alt: "The Hindu", title: "Media Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s7.png", alt: "Safexpress", title: "Logistics Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s8.png", alt: "SheKunj", title: "Community Partner" },
    //{ src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s9.png", alt: "Grant Thornton", title: "Partner" },
    //{ src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s10.png", alt: "Hilary Rhoda", title: "Partner" },
    //{ src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s11.png", alt: "Redbull", title: "Partner" },
    //{ src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s12.png", alt: "Denver", title: "Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s13.png", alt: "Indori Chatkare", title: "Partner" }
  ];
  const SCROLL_STEP = 260; // same scroll step as original
  const scrollToStart = (el: HTMLDivElement) => el.scrollTo({ left: 0, behavior: "smooth" });
  const scrollToEnd = (el: HTMLDivElement) => el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: "smooth" });

  const handlePrev = () => {
    const el = sponsorsRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;

    if (scrollLeft <= 0) {
      // at start → jump to end
      scrollToEnd(el);
    } else {
      el.scrollBy({ left: -SCROLL_STEP, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    const el = sponsorsRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    if (scrollLeft >= maxScroll - 1) {
      // at end → jump back to start
      scrollToStart(el);
    } else {
      el.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
    }
  };

  const [isPaused, setIsPaused] = useState(false);
  // ======= continuous RAF scroll (drop-in replacement) =======
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = sponsorsRef.current;
    if (!el) return;

    let last = performance.now();
    const pixelsPerSecond = 80; // tune speed here

    const tick = (now: number) => {
      const dt = now - last;
      last = now;

      if (!isPaused && el.scrollWidth > el.clientWidth) {
        const px = (pixelsPerSecond * dt) / 1000;
        el.scrollLeft += px;

        const maxScroll = el.scrollWidth - el.clientWidth;

        // If reached very end → jump to start
        if (el.scrollLeft >= maxScroll - 2) {
          el.scrollLeft = 0;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused, sponsors.length]);

  //-------STARS-----------

  const handlePrevStars = () => {
    const el = starsRef.current;
    if (!el) return;
    const { scrollLeft } = el;

    if (scrollLeft <= 0) {
      // at start → jump to end
      scrollToEnd(el);
    } else {
      el.scrollBy({ left: -SCROLL_STEP, behavior: "smooth" });
    }
  };

  const handleNextStars = () => {
    const el = starsRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    if (scrollLeft >= maxScroll - 1) {
      // at end → jump back to start
      scrollToStart(el);
    } else {
      el.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = starsRef.current;
    if (!el) return;

    let last = performance.now();
    const pixelsPerSecond = 80; // adjust to change speed

    const tick = (now: number) => {
      const dt = now - last;
      last = now;

      // only scroll if not paused and there is actually overflow
      if (!isStarsPaused && el.scrollWidth > el.clientWidth) {
        const px = (pixelsPerSecond * dt) / 1000;

        el.scrollLeft = el.scrollLeft + px;

        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 1) {
          // reached end → jump back to start
          el.scrollLeft = 0;
        }
      }

      starsRafRef.current = requestAnimationFrame(tick);
    };

    starsRafRef.current = requestAnimationFrame(tick);

    return () => {
      if (starsRafRef.current) cancelAnimationFrame(starsRafRef.current);
    };
  }, [isStarsPaused]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Fixed Parallax Background */}
      <div className={styles.backgroundContainer}>
        {/* Desktop Background */}
        <div className={styles.desktopBackground}>
          <img
            src="https://iris.cdn.jyotirmoysaha.co.in/images/landing/bg_landscape.webp"
            alt="Edo Mountains"
            className={styles.landingImage}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
        </div>

        {/* Mobile Background */}
        <div className={styles.mobileBackgroundContainer}>
          {/* <img
            src="/svgs/svgs/landing/mobileBackground.svg"
            alt="Background"
            className={styles.mobileBackground}
          /> */}
          <img
            src="https://iris.cdn.jyotirmoysaha.co.in/images/landing/bg_portrait.webp"
            alt="Mountains"
            className={styles.mobileMountains}
          // style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
        </div>

        {/* Logo + Timer - Position Preserved */}
        <div className={styles.logoContainer}>
          <img
            src="https://iris.cdn.jyotirmoysaha.co.in/images/landing/irislogo.png"
            alt="IRIS 2026"
            className={styles.logo}
          />

        </div>
        <div className={styles.countdownContainer}>  <CountdownTimer /></div>

      </div>


      {/* Scrollable Content */}
      <div className={styles.scrollerWrapper}>
        <div className={styles.scroller}>
          <div className={styles.landingContainer}>
            {/* Optional Register Button (uncomment if needed) */}
            {/* <div className={styles.registerBtnContainer}>
              <a href="/register" className={styles.registerBtn}>
                <img
                  src="/svgs/landing/registerBtn.svg"
                  alt="Register"
                  className={styles.desktopRegisterBtn}
                />
                <img
                  src="/svgs/landing/mobileRegisterBtn.svg"
                  alt="Register"
                  className={styles.mobileRegisterBtn}
                />
                <span className={styles.registerBtnText}>Register Now</span>
              </a>
            </div> */}

            {/* --- UPDATED ABOUT US SECTION --- */}
            {/* <div className={styles.bottomContainer}> */}
              <div className={styles.bottomOverlay}></div>
              <div className={styles.irisThemeContainer}>
                <div className={styles.irisThemeWrapper}>

                  <h2 className={styles.sectionTitle}>FEST THEME</h2>

                  <div className={styles.irisThemeGrid}>
                    {/* Left Side: Image (approx 70% width) */}
                    <div className={styles.irisThemeImageSide}>
                      <img
                        // Placeholder: Change this to your desired about image
                        src="https://iris.cdn.jyotirmoysaha.co.in/images/aboutus/indieverse.jpeg"
                        alt="INDIEVERSE"
                        className={styles.irisThemeFeatureImage}
                      />
                    </div>

                    {/* Right Side: Text + Date + Register */}
                    <div className={styles.irisThemeContentSide}>

                      {/* 2 Lines regarding IRIS */}
                      <p className={styles.irisThemeDescriptionText}>
                        Step into Indieverse - the official theme of IRIS’26!
                        A celebration of India’s rich diversity, where timeless culture, vibrant cinema, and modern innovation unite to showcase the many shades of one nation.
                        Join us at IIM Indore for a dynamic experience that engages students across all disciplines.
                      </p>

                      {/* Date Display */}
                      {/* <div className={styles.dateDisplay}>
                        <span className={styles.dateLabel} style={{ fontWeight: 'bold' }}>16<sup>th</sup> - 18<sup>th</sup> January, 2026</span>
                      </div> */}

                      {/* Buttons: Register + Brochure */}
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
            {/* </div> */}

            <section className={styles.sponsorsSection}>
              <h2 className={styles.sectionTitle}>ASSOCIATIONS</h2>

              <div className={styles.sponsorsCarousel} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                {/* Left Arrow */}
                <button
                  type="button"
                  aria-label="Scroll sponsors left"
                  className={`${styles.sponsorsArrow} ${styles.sponsorsArrowLeft}`}
                  onClick={handlePrev}
                >
                  ‹
                </button>

                {/* Scrollable track */}
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

                {/* Right Arrow */}
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

            {/* Foreground Video */}
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

            {/* Past Stars Section */}
            <section className={styles.pastStarsSection}>
            
              <h2 className={styles.sectionTitle}>PAST STARS</h2>

              {/* Row 1 – Two main posters */}
              <div className={styles.starsMainRow}>
                <img src="https://iris.cdn.jyotirmoysaha.co.in/images/stars/main1.png" alt="Main Star 1" className={styles.starMainPoster} />
                <img src="https://iris.cdn.jyotirmoysaha.co.in/images/stars/main2.png" alt="Main Star 2" className={styles.starMainPoster} />
              </div>

              <div className={styles.starsCarouselRow}
                onMouseEnter={() => setIsStarsPaused(true)}
                onMouseLeave={() => setIsStarsPaused(false)}
              >
                {/* Row 2 – Carousel */}
                {/* Left Arrow */}
                <button
                  type="button"
                  aria-label="Scroll stars left"
                  className={`${styles.starsArrow} ${styles.starsArrowLeft}`}
                  onClick={handlePrevStars}
                >
                  ‹
                </button>

                {/* Posters Track */}
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

                {/* Right Arrow */}
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

            <section className={styles.speakersSection}>

              <h2 className={styles.sectionTitle}>PAST SPEAKERS</h2>

              <div className={styles.speakersGrid}>
                {/* Speaker Card */}
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
