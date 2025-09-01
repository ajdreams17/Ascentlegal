// Server-safe component (no "use client")
import styles from "./ServiceHighlights.module.css";

export default function ServiceHighlights() {
  return (
    <section className={styles.alStats} role="region" aria-labelledby="al-stats-title">
      <h2 id="al-stats-title" className={styles.srOnly}>Service Highlights</h2>

      <div className={styles.alStatsGrid}>
        <div className={styles.alCard}>
          <h3 className={styles.alStat}>
            <span className={styles.alLine1}>Detail-first</span>
            <span className={styles.alLine2}>Legal review process</span>
          </h3>
        </div>

        <div className={styles.alCard}>
          <h3 className={styles.alStat}>
            <span className={styles.alLine1}>Every contract</span>
            <span className={styles.alLine2}>Tailored to you</span>
          </h3>
        </div>

        <div className={styles.alCard}>
          <h3 className={styles.alStat}>
            <span className={styles.alLine1}>Direct access</span>
            <span className={styles.alLine2}>To your attorney</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
