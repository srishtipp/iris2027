"use client";

import { useEffect, useState, useRef} from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from 'next/navigation';
import styles from "./GalleryPage.module.css";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={styles.backButton}
      title="Back"
    >
      ←
    </button>
  );
};

export default function GalleryPage() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

    const scrollToPhotos = () => {
    if (photosRef.current) {
      photosRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <div className={styles.wrapper}>
            <BackButton />
      {/* Fixed Parallax Background */}
      <div className={styles.backgroundContainer}>
        {/* Desktop Background */}
        <div className={styles.desktopBackground}>
          <img
            src="/images/landing/bg_landscape.webp"
            alt="Edo Mountains"
            className={styles.landingImage}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
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
            src="/images/landing/bg_portrait.webp"
            alt="Mountains"
            className={styles.mobileMountains}
          // style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            loading="eager"
            decoding="async"
          />
        </div></div>

      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <div className={styles.logoContainer}>
          <img
            src="/images/gallery/decorative/IRIS Black.png" 
            alt="IRIS Logo"
            className={styles.logoImage}
            loading="lazy"
            decoding="async"
          />
          {/* <h1 className={styles.mainTitle}>INDIVERSE</h1>
          <p className={styles.subtitle}>Gallery of Diversity</p> */}
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator} onClick={scrollToPhotos}>
          <ChevronDown size={32} className={styles.chevron} />
          <span className={styles.scrollText}>Explore Gallery</span>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentContainer} ref={photosRef}>
        <div className={styles.categoriesContainer}>
          <h2 className={styles.sectionTitle}>Glimpses of Indiverse</h2>
          <div className={styles.PhotosGrid}>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/Laavanya.avif")}> 
              <img src="/images/gallery/Photos/Laavanya.avif" alt="" loading="lazy" decoding="async" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG1.avif")}>
              <img src="/images/gallery/Photos/IMG1.avif" alt="" loading="lazy" decoding="async" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG2.avif")}>
              <img src="/images/gallery/Photos/IMG2.avif" alt="" loading="lazy" decoding="async" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG3.avif")}>
              <img src="/images/gallery/Photos/IMG3.avif" alt="" loading="lazy" decoding="async" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG4.avif")}>
              <img src="/images/gallery/Photos/IMG4.avif" alt="" loading="lazy" decoding="async" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG5.avif")}>
              <img src="/images/gallery/Photos/IMG5.avif" alt="" loading="lazy" decoding="async" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG6.avif")}>
              <img src="/images/gallery/Photos/IMG6.avif" alt="" loading="lazy" decoding="async" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG7.avif")}>
              <img src="/images/gallery/Photos/IMG7.avif" alt="" loading="lazy" decoding="async" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG8.avif")}>
              <img src="/images/gallery/Photos/IMG8.avif" alt="" loading="lazy" decoding="async" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG7.avif")}>
              <img src="/images/gallery/Photos/IMG7.avif" alt="" loading="lazy" decoding="async" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG7.avif")}>
              <img src="/images/gallery/Photos/IMG7.avif" alt="" loading="lazy" decoding="async" />
            </div>
            <div className={styles.PhotoCard} onClick={() => openModal("/images/gallery/Photos/IMG7.avif")}>
              <img src="/images/gallery/Photos/IMG7.avif" alt="" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged" className={styles.modalImage} loading="lazy" decoding="async" />
          <button className={styles.closeButton} onClick={closeModal}>×</button>
        </div>
      )}
      {/* Footer Section - Add this before closing wrapper div */}

    </div>
  );
}