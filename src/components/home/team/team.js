"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./TeamSection.module.scss";
import teamData from "@/data/teamdata.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255,255,255,0.18)",
        backdropFilter: "blur(14px)",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.24)",
        width: "42px",
        height: "42px",
        zIndex: 100,
        left: "10px",
      }}
      onClick={onClick}
    >
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <path
          d="M13 15L8 10L13 5"
          stroke="#c3e5f9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255,255,255,0.18)",
        backdropFilter: "blur(14px)",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.24)",
        width: "42px",
        height: "42px",
        zIndex: 100,
        right: "10px",
      }}
      onClick={onClick}
    >
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <path
          d="M7 5L12 10L7 15"
          stroke="#c3e5f9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// Desktop Settings
const desktopSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  arrows: true,
};

// Mobile Settings
const mobileSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  arrows: true,
};

const Team = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="team">
      <div className="mainSection">
        <div className="container">
          <div className={styles.teamSection}>
            <div className="HeadingSection">
              <h1>Our Core Team</h1>
            </div>

            {/* Desktop Slider */}
            <div className={styles.desktopSlider}>
              <Slider {...desktopSettings}>
                {teamData.map((member, idx) => (
                  <div key={idx} className={styles.slideWrap}>
                    <div className={styles.card}>
                      <div className={styles.imageWrap}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className={styles.cardImg}
                        />
                      </div>
                      <div className={styles.cardBody}>
                        <h5>{member.name}</h5>
                        <p>{member.role}</p>
                        <span>{member.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Mobile Slider */}
            <div className={styles.mobileSlider}>
              <Slider {...mobileSettings}>
                {teamData.map((member, idx) => (
                  <div key={idx} className={styles.slideWrap}>
                    <div className={styles.card}>
                      <div className={styles.imageWrap}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className={styles.cardImg}
                        />
                      </div>
                      <div className={styles.cardBody}>
                        <h5>{member.name}</h5>
                        <p>{member.role}</p>
                        <span>{member.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
