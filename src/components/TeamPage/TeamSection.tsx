"use client";

import TeamMemberCard from "./TeamMemberCard";
import styles from "./TeamSection.module.css";

export interface Social {
  email?: string;
  phone?: string;
  instagram?: string;
  linkedin?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: Social;
}

interface Props {
  title: string;
  members: TeamMember[];
  columns?: number;
}

const TeamSection: React.FC<Props> = ({
  title,
  members,
  columns = 4,
}) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.grid} style={{ "--columns": columns } as React.CSSProperties}>
        {members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
