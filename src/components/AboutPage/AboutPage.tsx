"use client";

import styles from "./AboutPage.module.css";

const faqs = [
  {
    question: "What is IRIS 2027?",
    answer:
      "IRIS 2027 is the annual cultural and management festival of IIM Indore. It brings together students, industry leaders, and creative minds in one vibrant platform. The festival blends intellectual competitions with performances, networking, and celebrations that define the spirit of campus life.",
  },
  {
    question: "Who can participate in IRIS?",
    answer:
      "Students from colleges and universities across India are encouraged to participate, along with alumni, faculty, and festival enthusiasts. Whether you are interested in business events, cultural showcases, or simply experiencing the energy of a premier B-school fest, IRIS has something for everyone.",
  },
  {
    question: "When and where is the festival held?",
    answer:
      "IRIS is hosted at IIM Indore and is traditionally held in January each year. The event spans multiple days and includes competitions, workshops, guest interactions, and cultural performances, creating a rich and immersive festival experience.",
  },
  {
    question: "Are there events for both management and cultural interests?",
    answer:
      "Yes, IRIS is designed to celebrate both intellectual depth and artistic expression. Management enthusiasts can take part in case studies, strategy games, and entrepreneurial challenges, while cultural lovers can enjoy dance, music, fashion, and creative showcases throughout the festival.",
  },
  {
    question: "How can I stay updated on registrations and announcements?",
    answer:
      "The best way to stay informed is to follow the official IRIS website and social media handles. Regular updates include registration details, event schedules, speaker announcements, rulebooks, and important deadlines so participants never miss out on key information.",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundContainer}>
        <div className={styles.desktopBackground}>
          <img
            src="/images/landing/27THEME.png"
            alt="Edo Mountains"
            className={styles.landingImage}
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
            fetchPriority="high"
          />
        </div>
      </div>

      <div className={styles.aboutHeading}>
        <h1 className={styles.sectionTitle}>About IRIS</h1>
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <p>
            IIM Indore is set to host IRIS 2027, its annual cultural and management festival, in the month of Jan, 2027. Recognized as one of Central India&apos;s premier B-school fests, IRIS attracts over 40,000 participants from across the country, blending intellectual challenges, creative showcases, and industry insights into a dynamic three-day event.
            IRIS 2027 offers a diverse range of competitions and activities designed to engage students across disciplines. Business enthusiasts can put their strategic acumen to the test in various case study challenges and entrepreneurship contests, while creative minds can participate in cultural events spanning fashion, dance, music, and quizzing.
          </p>
        </div>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <h3 className={styles.statNumber}>15+</h3>
          <p className={styles.statLabel}>Years of Legacy</p>
        </div>
        <div className={styles.stat}>
          <h3 className={styles.statNumber}>15K+</h3>
          <p className={styles.statLabel}>Footfall</p>
        </div>
        <div className={styles.stat}>
          <h3 className={styles.statNumber}>200+</h3>
          <p className={styles.statLabel}>Colleges</p>
        </div>
        <div className={styles.stat}>
          <h3 className={styles.statNumber}>40+</h3>
          <p className={styles.statLabel}>Events</p>
        </div>
      </div>

      <div className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <details key={faq.question} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.question}</summary>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
