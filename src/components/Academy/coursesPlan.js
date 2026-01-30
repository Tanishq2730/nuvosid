"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const courseNodes = [
    { title: "Master AutoCAD LT 2023", icon: "bi bi-layers", level: "Beginner to Pro" },
    { title: "Master STAAD PRO.2023", icon: "bi bi-grid-3x3-gap", level: "Structural Mastery" },
    { title: "Estimation & Costing", icon: "bi bi-calculator", level: "Tendering Expert" },
    { title: "Construction Expert", icon: "bi bi-shield-check", level: "QA & QC Specialist" },
];

export default function CoursesPlan() {
    const containerRef = useRef(null);
    const pathRef1 = useRef(null);
    const pathRef2 = useRef(null);
    const pathRef3 = useRef(null);
    const pathRef4 = useRef(null);
    const nodesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Initial State
            gsap.set([pathRef1.current, pathRef2.current, pathRef3.current, pathRef4.current], {
                strokeDasharray: 1000,
                strokeDashoffset: 1000,
            });

            // 2. Timeline for the Reveal
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                }
            });

            // Draw Paths
            tl.to([pathRef1.current, pathRef2.current, pathRef3.current, pathRef4.current], {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.inOut",
                stagger: 0.2
            });

            // 3. Float Animation for Nodes
            nodesRef.current.forEach((node, i) => {
                gsap.from(node, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    delay: 0.5 + (i * 0.2),
                    scrollTrigger: {
                        trigger: node,
                        start: "top 90%",
                    }
                });

                // Continuous floating
                gsap.to(node, {
                    y: "-=10",
                    duration: 2 + Math.random(),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: Math.random()
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="mainSection">
                <section ref={containerRef} className="animatedPathwaySection">
                    {/* Dynamic SVG Connectors */}
                    <svg className="svgConnector" viewBox="0 0 1200 800" preserveAspectRatio="none">
                        {/* Base Paths */}
                        <path ref={pathRef1} d="M150,250 C150,450 600,450 600,600" />
                        <path ref={pathRef2} d="M450,250 C450,450 600,450 600,600" />
                        <path ref={pathRef3} d="M750,250 C750,450 600,450 600,600" />
                        <path ref={pathRef4} d="M1050,250 C1050,450 600,450 600,600" />

                        {/* Animated Energy Flow Paths (Duplicates) */}
                        <path className="energyFlow" d="M150,250 C150,450 600,450 600,600" />
                        <path className="energyFlow" d="M450,250 C450,450 600,450 600,600" />
                        <path className="energyFlow" d="M750,250 C750,450 600,450 600,600" />
                        <path className="energyFlow" d="M1050,250 C1050,450 600,450 600,600" />
                    </svg>

                    <div className="container nodesContainer">
                        {/* Header */}
                        <div className="row mb-5 text-center">
                            <div className="col-lg-12">
                                <h2 className="sectionTitle">
                                    Accelerate Your <span className="accent">Career</span>
                                </h2>
                                <p className="text-secondary">Master industry-standard tools with our expert-led modules.</p>
                            </div>
                        </div>

                        {/* Course Nodes Grid */}
                        <div className="row g-4 justify-content-center">
                            {courseNodes.map((node, index) => (
                                <div className="col-lg-3 col-md-6" key={index}>
                                    <div
                                        className="courseNode"
                                        ref={el => nodesRef.current[index] = el}
                                    >
                                        <div className="nodeIcon">
                                            <i className={node.icon}></i>
                                        </div>
                                        <h3>{node.title}</h3>
                                        <span className="subTitle">{node.level}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Central Subscription Hub */}
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <a
                                    href="https://lms.surpass.academy/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="centralSubscriptionNode"
                                >
                                    <div className="glow"></div>
                                    <div className="price">30000/- <small>only</small></div>
                                    <h2 className="tagline">All In One Subscription Plan</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
