"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Video() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const videoElRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePlay = () => {
    if (videoElRef.current) {
      if (videoElRef.current.paused) {
        // Unmute on manual play to fulfill user's request for sound
        videoElRef.current.muted = false;
        videoElRef.current.play().catch(() => { });
        setIsPlaying(true);
      } else {
        videoElRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // Desktop Animation
      mm.add("(min-width: 800px)", () => {
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
              start: "top 20%",
              end: "bottom 10%",
              scrub: 1,
            },
          }
        );
      });

      // Mobile setup
      mm.add("(max-width: 799px)", () => {
        gsap.set(videoRef.current, {
          width: "95%",
          borderRadius: "20px",
        });
      });

      // Unified Video Playback ScrollTrigger
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 50%",
        onEnter: () => {
          videoElRef.current?.play().catch(() => { });
          setIsPlaying(true);
        },
        onLeave: () => {
          videoElRef.current?.pause();
          setIsPlaying(false);
        },
        onEnterBack: () => {
          videoElRef.current?.play().catch(() => { });
          setIsPlaying(true);
        },
        onLeaveBack: () => {
          videoElRef.current?.pause();
          setIsPlaying(false);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="videoSectionContainer">
      <div className="mainSection" style={{ overflow: "hidden", padding: isMobile ? "40px 0" : "100px 0" }}>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div
            ref={videoRef}
            className="videoWrapper"
            style={{
              overflow: "hidden",
              position: "relative",
              width: isMobile ? "95%" : "40%",
              borderRadius: isMobile ? "20px" : "40px",
              aspectRatio: "16/9",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
          >
            <video
              ref={videoElRef}
              width="100%"
              height="100%"
              loop
              muted
              playsInline
              onClick={togglePlay}
              style={{ position: "absolute", top: 0, left: 0, objectFit: "cover", cursor: "pointer" }}
            >
              <source src="/assets/homevideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Button Overlay */}
            <div
              onClick={togglePlay}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                cursor: "pointer",
                opacity: isPlaying ? 0 : 1,
                visibility: isPlaying ? "hidden" : "visible",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                backgroundColor: "rgba(108, 192, 255, 0.15)",
                backdropFilter: "blur(12px)",
                width: isMobile ? "70px" : "100px",
                height: isMobile ? "70px" : "100px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid rgba(108, 192, 255, 0.4)",
                boxShadow: "0 0 30px rgba(108, 192, 255, 0.2)"
              }}
            >
              <i
                className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}
                style={{
                  fontSize: isMobile ? "2.5rem" : "3.5rem",
                  color: "#fff",
                  textShadow: "0 0 15px rgba(108, 192, 255, 0.8)",
                  marginLeft: isPlaying ? "0" : "5px"
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
