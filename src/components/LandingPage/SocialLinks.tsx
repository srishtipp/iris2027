"use client";

import styles from "./SocialLinks.module.css";

interface SocialLink {
  name: string;
  icon: string;
  lamp: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    icon: "/svgs/landing/x.svg",
    lamp: "/svgs/landing/xLamp.svg",
    url: "https://twitter.com/bitsoasis",
  },
  {
    name: "Instagram",
    icon: "/svgs/landing/insta.svg",
    lamp: "/svgs/landing/instaLamp.svg",
    url: "https://instagram.com/bitsoasis",
  },
  {
    name: "LinkedIn",
    icon: "/svgs/landing/linkden.svg",
    lamp: "/svgs/landing/linkdenLamp.svg",
    url: "https://linkedin.com/company/oasis-bits-pilani",
  },
];

export default function SocialLinks() {
  return (
    <div className={styles.socialLinksContainer}>
      {socialLinks.map((link, index) => (
        <div key={link.name} className={styles.socialLinkContainer}>
          {/* Wire decoration */}
          {index > 0 && (
            <img
              src="/svgs/landing/wire.svg"
              alt=""
              className={styles.wire}
              loading="lazy"
              decoding="async"
            />
          )}
          
          {/* Social Link */}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={link.name}
          >
            {/* Icon */}
            <img
              src={link.icon}
              alt={link.name}
              className={styles.socialIcon}
              loading="lazy"
              decoding="async"
            />
            {/* Lamp with glow effect */}
            <img
              src={link.lamp}
              alt=""
              className={styles.socialLamp}
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
