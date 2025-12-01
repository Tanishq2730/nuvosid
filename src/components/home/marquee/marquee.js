"use client";
import React from "react";
import styles from './Marquee.module.scss';

const Marquee = () => {
  const items = [
    { id: "03", text: "Chic" },
    { id: "01", text: "Endless Summer" },
    { id: "04", text: "Heaven" },
    { id: "03", text: "Classic" },
    { id: "02", text: "Island Adventure" },
    { id: "05", text: "Neon Light" },
  ];

  return (
    <div className="mainSection">
      <div className={`container-fluid ${styles.marqueeWrapper}`}>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {items.map((item, index) => (
              <span key={`${item.id}-${index}`} className={styles.item}>
                <sup className={styles.num}>{item.id}</sup>
                {item.text}
                <span className={styles.slash}> / </span>
              </span>
            ))}

            {/* Duplicate for infinite loop */}
            {items.map((item, index) => (
              <span key={`dup-${item.id}-${index}`} className={styles.item}>
                <sup className={styles.num}>{item.id}</sup>
                {item.text}
                <span className={styles.slash}> / </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
