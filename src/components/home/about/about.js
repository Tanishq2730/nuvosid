"use client";
import React, { useEffect, useRef } from "react";
import styles from "./About.module.scss";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Left Image animation
      gsap.from(leftImgRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftImgRef.current,
          start: "top 80%",
        },
      });

      // Right Image animation
      gsap.from(rightImgRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightImgRef.current,
          start: "top 80%",
        },
      });

      // Center content animation
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="mainSection">
        <div className="container">
          <div className="aboutSection">
            <div className="HeadingSection" ref={headingRef}>
              <h1>About Us</h1>
            </div>
            <div className="aboutContent">
              <div className="row">
                <div className="col-md-6 col-12" ref={leftImgRef}>
                  <div className="aboutImage">
                    <img
                      src="/assets/aboutSection1.png"
                      alt="About Us"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="middleSection">
                  <div className="middleSectionContent" ref={contentRef}>
                    <p>
                      Nuvosid is built on the trusted reputation of AVS
                      Engineers Group, a company with over two decades of
                      excellence in architecture and engineering. Our mission is
                      to create sustainable, high-performance spaces through
                      advanced design, construction expertise, and complete
                      project delivery. As we grow, our services now also
                      include turnkey construction execution, professional
                      project management, and specialized education and skills
                      training through Surpass Academy.
                    </p>
                    <Link href="/about" className="btn btn-group knowBtn">
                      Know More
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-12" ref={rightImgRef}>
                  <div className="aboutImage">
                    <img
                      src="/assets/aboutSection2.png"
                      alt="About Us"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
