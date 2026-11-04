import Logo from "@/components/Logo";
import { socials, contactEmail, askUsUrl } from "@/lib/socials";
import styles from "./Footer.module.css";

interface Contact {
  name: string;
  email: string;
  phone: string;
}

interface ContactGroup {
  title: string;
  people: Contact[];
}

const contactGroups: ContactGroup[] = [
  {
    title: "OVERALL COORDINATORS",
    people: [
      { name: "Aditya Singh", email: "p25adityasingh@iimidr.ac.in", phone: "+91 9695003151" },
      { name: "Nikhil Tayade", email: "p25nikhilt@iimidr.ac.in", phone: "+91 7218082560" },
      { name: "Rohini Pal", email: "ph25rohinip@iimidr.ac.in", phone: "+91 8170841618" },
    ],
  },
  {
    title: "CORPORATE RELATIONS",
    people: [
      { name: "G Sharmada", email: "p25gsharmada@iimidr.ac.in", phone: "+91 7708617246" },
      { name: "Nihar Ranjan Parida", email: "p25niharp@iimidr.ac.in", phone: "+91 9893619544" },
    ],
  },
  {
    title: "PARTICIPATION",
    people: [
      { name: "Antra Diksha Khalkho", email: "p25antrak@iimidr.ac.in", phone: "+91 7608000795" },
      { name: "Anushka Mitra", email: "p25anushkam@iimidr.ac.in", phone: "+91 9199562454" },
      { name: "Prem Kumar Udaypuria", email: "p25premu@iimidr.ac.in", phone: "+91 6306179572" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Logo height={64} className={styles.logo} />
          <p>
            India&rsquo;s premier student-run management and cultural festival at
            IIM Indore.
          </p>
          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={s.name}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.contacts}>
          {contactGroups.map((group) => (
            <div key={group.title} className={styles.contactCol}>
              <h4 className={styles.contactTitle}>{group.title}</h4>
              {group.people.map((p) => (
                <div key={p.email} className={styles.person}>
                  <h5>{p.name}</h5>
                  <a href={`mailto:${p.email}`}>{p.email}</a>
                  <a href={`tel:${p.phone.replace(/\s/g, "")}`}>{p.phone}</a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ask}>
        <span className={styles.askTitle}>Have any questions?</span>
        <a href={`mailto:${contactEmail}`} className={styles.askEmail}>
          {contactEmail}
        </a>
        <a
          href={askUsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.askBtn}
        >
          Ask us here
        </a>
      </div>

      <div className={styles.legal}>
        <p>© IRIS 2027. All Rights Reserved. Made by Systems &amp; IT team, IRIS</p>
      </div>
    </footer>
  );
}
