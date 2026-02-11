"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutImg.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function AboutImg() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const ctx = gsap.context(() => {
      // Reveal animations
      gsap.from(contentRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        scale: 1.1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // Parallax effect on image scroll
      gsap.to(imageRef.current.querySelector("img"), {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMounted]);

  // Handle subtle mouse tilt
  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 992) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / 25;
    const y = (clientY - (top + height / 2)) / 25;

    gsap.to(cardRef.current, {
      rotateY: x,
      rotateX: -y,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, duration: 1 });
  };

  if (!isMounted) return null;

  return (
    <section ref={containerRef} className={styles.aboutImgSection} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Decorative Coordinates */}
      <div className={styles.floatingElement} style={{ top: "10%", left: "5%" }}>COORD: 24.5854° N / 73.7125° E</div>
      <div className={styles.floatingElement} style={{ bottom: "15%", right: "10%" }}>STRUCT_ENG_REF: NV-2025-AWD</div>

      <div className="container">
        <div className={styles.layoutGrid}>
          {/* Content Side */}
          <div ref={contentRef} className={styles.contentSide}>
            <div className={styles.visionaryBox}>
              <span className={styles.label}>Our Visionary</span>
              <h2>
                Under the guidance of
                <span>Mr. Siddharth Sharma</span>
                Nuvosid delivers world-class engineering.
              </h2>
            </div>

            <div ref={cardRef} className={styles.achievementGlass}>
              <div className={styles.awardTitle}>
                <div className={styles.icon}>🥇</div>
                <h4>Year in Infrastructure Award 2025</h4>
              </div>
              <div className={styles.details}>
                <div className={styles.category}>Structural Engineering</div>
                <p className={styles.project}>Iconic Fairmont Udaipur Palace</p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div ref={imageRef} className={styles.imageSide}>
            <div className={styles.showcaseFrame}>
              <img
                src="/assets/about.jpg"
                alt="Achievement Architecture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
