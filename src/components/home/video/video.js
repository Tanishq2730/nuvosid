"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        {
          width: "40%",
          borderRadius: "40px",
        },
        {
          width: "100%",
          borderRadius: "0px",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            end: "top 10%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="videoSectionContainer">
      <div className="mainSection" style={{ overflow: "hidden", padding: "100px 0" }}>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div
            ref={videoRef}
            className="videoWrapper"
            style={{
              overflow: "hidden",
              position: "relative",
              aspectRatio: "16/9",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/E7wJTI-1dvQ?autoplay=1&mute=1&loop=1&playlist=E7wJTI-1dvQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
