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
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s1_v2.png", alt: "HPCL", title: "Trinity Sponsor" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s2.png", alt: "SBI", title: "Official Banking Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s15.png", alt: "Qoneqt", title: "Community Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s7.png", alt: "Safexpress", title: "Official Logistics Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s16.png", alt: "PNB", title: "Banking Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s12.png", alt: "Denver", title: "Official Fragrance Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s14.png", alt: "Abhibus", title: "Official Travel Partner", link: "https://www.abhibus.com/" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s4.png", alt: "Unstop", title: "Platform Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s6.png", alt: "The Hindu", title: "Official Media Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s17.png", alt: "CBI", title: "Banking Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s5.png", alt: "Business Standard", title: "Official Media Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s8.png", alt: "SheKunj", title: "Community Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s13.png", alt: "Indorichatkare", title: "Social Media Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s18.png", alt: "Wham Energy", title: "Official Caffeine Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s19.png", alt: "A1 Photography", title: "Photography Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s10.png", alt: "Hillary Rhoda", title: "Official Makeup Partner" },
    { src: "https://iris.cdn.jyotirmoysaha.co.in/images/sponsors/s9.png", alt: "Grant Thornton", title: "Partner" },
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
                <h2 className={styles.sectionTitle}>IRIS'26</h2>

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

              
{/* CHIEF GUEST */}
<section className={styles.currentSpeakerSection}>
  <div className={styles.currentSpeakerWrapper}>
    <h2 className={styles.sectionTitle}>CHIEF GUEST</h2>

    <div className={styles.currentSpeakerGrid}>
      {/* LEFT SIDE */}
      <div className={styles.currentSpeakerLeft}>
        <div className={styles.currentSpeakerAvatar}>
          <img
            src="https://iris.cdn.jyotirmoysaha.co.in/images/landing/Malini_Gaur.jpg"
            alt="Malini Laxmansingh Gaur"
            className={styles.currentSpeakerAvatarImg}
          />
        </div>

        <div className={styles.currentSpeakerMeta}>
          <h3 className={styles.currentSpeakerLeftName}>Smt. Malini Laxmansingh Gaur</h3>
          <p className={styles.currentSpeakerLeftRole}>
            MLA <br />
            Indore
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.currentSpeakerRight}>
        <p className={styles.currentSpeakerPara}>
          We are honored to welcome Smt. Malini Laxmansingh Gaur as our Chief Guest for IRIS 2026. A distinguished leader and the Member of Legislative Assembly from Indore, she has been instrumental in the city&apos;s development and its recognition as the cleanest city in India.
        </p>

        <p className={styles.currentSpeakerPara}>
           Her presence adds immense value to our festival, inspiring the youth with her dedication to public service and governance. We look forward to her address and insights.
        </p>
      </div>
    </div>
  </div>
</section>

{/* CURRENT SPEAKER */}
<section className={styles.currentSpeakerSection}>
  <div className={styles.currentSpeakerWrapper}>
    <h2 className={styles.sectionTitle}>SPEAKER</h2>

    <div className={styles.currentSpeakerGrid}>
      {/* LEFT SIDE */}
<div className={styles.currentSpeakerLeft}>
  <div className={styles.currentSpeakerAvatar}>
    <img
      src="https://iris.cdn.jyotirmoysaha.co.in/images/speakers/current-speaker.webp"
      alt="Mr. Ashish Kumar Singh"
      className={styles.currentSpeakerAvatarImg}
    />
  </div>

  <div className={styles.currentSpeakerMeta}>
    <h3 className={styles.currentSpeakerLeftName}>Mr. Ashish Kumar Singh</h3>
    <p className={styles.currentSpeakerLeftRole}>
      Deputy General Manager <br />
      Indore Retail Region, HPCL
    </p>
  </div>
</div>


      {/* RIGHT SIDE */}
      <div className={styles.currentSpeakerRight}>
        <p className={styles.currentSpeakerPara}>
          Mr. Ashish Kumar Singh joined HPCL in 2005 and has worked in the Retail SBU as a Marketing Officer, Sales
          Officer, RE & Analytics, and Regional Manager. Over the last five years, he served in Siliguri and is currently
          posted in Indore.
        </p>

        <p className={styles.currentSpeakerPara}>
          He has worked across locations including Vijayawada, Bangalore, Lucknow, Patna, and Siliguri. He holds an ENG
          degree from NIT Patna, an MBA from UPES, and a certification in Data Analytics from IIM Amritsar. Currently, he
          handles 13 districts of Madhya Pradesh covering 510 retail outlets.
        </p>
      </div>
    </div>
  </div>
</section>

{/* JUDGES */}
<section className={styles.judgesSection}>
  <h2 className={styles.sectionTitle}>JUDGES</h2>
  <div className={styles.judgesGrid}>
    {/* Judge 1: Supply Chain Judge */}
    <div className={styles.judgeCard}>
      <img
        src="https://iris.cdn.jyotirmoysaha.co.in/images/landing/supply chain judge.jpg"
        alt="Jitendra Das Bairagi"
        className={styles.judgeImage}
      />
      <div className={styles.judgeNameBar}>
        <h3 className={styles.judgeName}>Jitendra Das Bairagi</h3>
        <p className={styles.judgeRole}>Grant Thornton Bharat LLP</p>
      </div>
      <div className={styles.judgeOverlay}>
        <p className={styles.judgeOverlayDesc}>
          Jitendra Das Bairagi is a Supply Chain and Transformation expert at Grant Thornton Bharat LLP with 11+ years of experience. He has led digital transformation, automation, and process excellence initiatives across BFSI, FMCG, e-commerce, manufacturing, MSMEs, and government sectors, and actively trains professionals in Lean Six Sigma and quality management practices.
        </p>
        <div className={styles.judgeSocials}>
           <a href="https://www.linkedin.com/in/jitendra-das-bairagi-77346b38/" target="_blank" rel="noopener noreferrer" className={styles.judgeSocialLink} aria-label="LinkedIn">
             <Linkedin size={20} />
           </a>
        </div>
      </div>
    </div>

    {/* Judge 2: Sonia Saluja */}
    <div className={styles.judgeCard}>
      <img
        src="https://iris.cdn.jyotirmoysaha.co.in/images/landing/sonia judge - Laavanya.jpg"
        alt="Sonia Saluja"
        className={styles.judgeImage}
      />
      <div className={styles.judgeNameBar}>
        <h3 className={styles.judgeName}>Sonia Saluja</h3>
        <p className={styles.judgeRole}>Mrs India International 2019</p>
      </div>
      <div className={styles.judgeOverlay}>
        <p className={styles.judgeOverlayDesc}>
          Sonia Saluja is a celebrated beauty pageant personality and entrepreneur, crowned Mrs India International 2019 with the Most Talented title. Founder associated with Presto Solutions, she is admired for her modeling, leadership, and creative influence, inspiring women with confidence, grace, and empowerment.        </p>
        <div className={styles.judgeSocials}>
           <a href="https://www.instagram.com/mrsindia_international2019?igsh=MWdseWl0OHlycWZkdw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.judgeSocialLink} aria-label="Instagram">
             <Instagram size={20} />
           </a>
        </div>
      </div>
    </div>

    {/* Judge 3: Vipin Sharma */}
    <div className={styles.judgeCard}>
      <img
        src="https://iris.cdn.jyotirmoysaha.co.in/images/landing/Judge 2.jpg"
        alt="Vipin Sharma"
        className={styles.judgeImage}
      />
      <div className={styles.judgeNameBar}>
        <h3 className={styles.judgeName}>Vipin Sharma</h3>
        <p className={styles.judgeRole}>Founder of UDC (Unique Dance Crew)</p>
      </div>
      <div className={styles.judgeOverlay}>
        <p className={styles.judgeOverlayDesc}>
          Vipin Sharma is the founder of UDC (Unique Dance Crew), a prominent dance collective based in Indore. A passionate choreographer and mentor, he has built UDC into a platform for high-energy performances, professional training, and youth inspiration, fostering creativity and excellence in the performing arts.
        </p>
        <div className={styles.judgeSocials}>
           <a href="https://www.instagram.com/uniquedancecrew.udc?igsh=MTZob3B0cTA0bmJkYQ%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.judgeSocialLink} aria-label="Instagram">
             <Instagram size={20} />
           </a>
        </div>
      </div>
    </div>
  </div>
</section>

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
                            "--poster": `url(${url})`,
                            "--ar": posterAR[url] ?? 0.75, // fallback ~3:4
                            opacity: isHidden ? 0 : undefined,
                            pointerEvents: isHidden ? "none" : undefined,
                          } as React.CSSProperties}
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
                  {sponsors.map((s, idx) => {
                    const content = (
                      <>
                        <div className={styles.sponsorLogoContainer}>
                          <img src={s.src} alt={s.alt} />
                        </div>
                        <p className={styles.sponsorTitle}>{s.title}</p>
                      </>
                    );

                    return s.link ? (
                      <a
                        key={`${s.alt}-${idx}`}
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.sponsorItem}
                        style={{ textDecoration: "none" }}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={`${s.alt}-${idx}`} className={styles.sponsorItem}>
                        {content}
                      </div>
                    );
                  })}
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
