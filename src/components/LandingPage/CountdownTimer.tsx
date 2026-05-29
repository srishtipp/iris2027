"use client";

import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // IRIS 2026 target date - update as needed
    const targetDate = new Date("2026-01-16T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.dateCountdown}>
      <div className={styles.timeLeft}>
        <div className={styles.timeBlock}>
          <div className={styles.value}>{timeLeft.days}</div>
          <div className={styles.label}>Days</div>
        </div>

        <div className={styles.separator}>:</div>

        <div className={styles.timeBlock}>
          <div className={styles.value}>{timeLeft.hours}</div>
          <div className={styles.label}>Hours</div>
        </div>

        <div className={styles.separator}>:</div>

        <div className={styles.timeBlock}>
          <div className={styles.value}>{timeLeft.minutes}</div>
          <div className={styles.label}>Minutes</div>
        </div>

        <div className={styles.separator}>:</div>

        <div className={styles.timeBlock}>
          <div className={`${styles.value} ${styles.seconds}`}>{timeLeft.seconds}</div>
          <div className={styles.label}>Seconds</div>
        </div>
      </div>

      <div className={styles.comingSoon}>IRIS 2027 - COMING SOON</div>
    </div>
  );
}
