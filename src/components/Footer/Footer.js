import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <span>© {year} Nuvosid. All rights reserved.</span>
          <span className={styles.dim}>Architecture · Engineering · Construction</span>
        </div>
      </div>
    </footer>
  );
}


