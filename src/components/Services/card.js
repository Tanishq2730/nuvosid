import React from "react";
import styles from "./Card.module.scss";

const Card = ({ heading, imgSrc, content }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.content}>
        {content &&
          content.split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
      </div>
      {imgSrc && (
        <div className={styles.imgWrap}>
          <img className={styles.img} src={imgSrc} alt={heading} />
        </div>
      )}
    </div>
  );
};

export default Card;
