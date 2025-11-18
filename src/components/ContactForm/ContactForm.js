"use client";
import { useState } from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! We'll be in touch.");
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required />
      </div>
      <div className={styles.row}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>
      <div className={styles.row}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <button type="submit" className={styles.submit}>Send</button>
      {status && <p className={styles.status}>{status}</p>}
    </form>
  );
}


