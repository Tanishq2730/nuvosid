"use client";

import { useEffect, useRef } from "react";
import testimonials from "@/data/testimonial.json";
// import './testimonials.scss';

const Testimonial = () => {
  const trackRef = useRef(null);

  // Optional: pause on hover
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleEnter = () => {
      track.style.animationPlayState = "paused";
    };
    const handleLeave = () => {
      track.style.animationPlayState = "running";
    };

    track.addEventListener("mouseenter", handleEnter);
    track.addEventListener("mouseleave", handleLeave);

    return () => {
      track.removeEventListener("mouseenter", handleEnter);
      track.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const loopData = [...testimonials, ...testimonials];

  return (
    <div className="mainSection">
      <section className="testimonials-section">
        <div className="testimonials-wrapper">
          <div className="container">
          <div className="HeadingSection">
            <h1>Testimonial</h1>
          </div>
          </div>
          <div className="container-fluid">
            <div className="testimonials-track">
              <div className="testimonials-infinite" ref={trackRef}>
                {loopData.map((item, index) => (
                  <article
                    key={`${item.id}-${index}`}
                    className="testimonial-card"
                  >
                    <p className="testimonial-quote">“{item.quote}”</p>
                    <p className="testimonial-author">{item.author}</p>
                    <p className="testimonial-book">{item.book}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
