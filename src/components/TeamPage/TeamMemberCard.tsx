"use client";

import styles from "./TeamMemberCard.module.css";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { TeamMember } from "./TeamSection";

interface Props {
  member: TeamMember;
}

const TeamMemberCard: React.FC<Props> = ({ member }) => {
  return (
    <div className={styles.card}>
      <img src={member.image} alt={member.name} className={styles.image} loading="lazy" decoding="async" />

      {/* Always visible */}
      <div className={styles.nameBar}>{member.name}</div>

      {/* Hover content */}
      <div className={styles.overlay}>
        <h3 className={styles.hoveredName}>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>

        {member.bio && <p className={styles.bio}>{member.bio}</p>}

        {member.social && (
          <div className={styles.social}>
            {member.social.email && (
              <a
                href={`mailto:${member.social.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Email ${member.name} via Gmail`}
              >
                <Mail size={16} />
              </a>
            )}
            {member.social.phone && (
              <a href={`tel:${member.social.phone}`} aria-label={`Call ${member.name}`}>
                <Phone size={16} />
              </a>
            )}
            {member.social.instagram && (
              <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram size={16} />
              </a>
            )}
            {member.social.linkedin && (
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
