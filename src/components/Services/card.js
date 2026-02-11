import React from "react";
import Link from "next/link";
import styles from "./Card.module.scss";
import Image from "next/image";

const Card = ({ heading, imgSrc, content, link }) => {
  const CardContent = (
    <div className={styles.card} style={{ cursor: link ? "pointer" : "default" }}>
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
          <Image
            className={styles.img}
            src={imgSrc}
            alt={heading}
            width={500}
            height={400}
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );

  return link ? (
    <Link href={link} style={{ textDecoration: "none" }}>
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
};

export default Card;
