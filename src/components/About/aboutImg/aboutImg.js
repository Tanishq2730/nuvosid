"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutImg() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          width: "50%",
          borderRadius: "40px",
        },
        {
          width: "100%",
          borderRadius: "0px",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom 30%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="aboutImgAnimationSection">
      <div className="mainSection" style={{ overflow: "hidden", padding: "100px 0" }}>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div
            ref={imageRef}
            className="aboutImgWrapper"
            style={{
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              lineHeight: 0
            }}
          >
            <img
              src="/assets/about.jpg"
              alt="About Us"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
