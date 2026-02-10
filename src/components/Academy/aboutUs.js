"use client";
import { motion } from "motion/react";

export default function AboutUs() {
    return (
        <section>
            <div className="mainSection academyAboutSection">
                <div className="container">
                    <motion.div
                        className="elegantContentWrapper"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {/* Elegant Header with center alignment */}
                        <div className="text-center mb-5">
                            <motion.h2
                                className="elegantTitle"
                                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                                whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
                                transition={{ duration: 0.8 }}
                            >
                                ABOUT US
                            </motion.h2>
                            <div className="titleLine"></div>
                        </div>

                        <div className="row align-items-center">
                            {/* Left Side: Creative Video & Stat Composition */}
                            <div className="col-lg-6 mb-5 mb-lg-0 relative">
                                <motion.div
                                    className="creativeVideoContainer"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    style={{ position: "relative", zIndex: 1 }}
                                >
                                    {/* Abstract Background Decoration */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "-20px",
                                            left: "-20px",
                                            width: "99%",
                                            height: "100%",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "24px",
                                            zIndex: -1,
                                            transform: "rotate(-3deg)"
                                        }}
                                    ></div>

                                    {/* Main Video Wrapper */}
                                    <div
                                        style={{
                                            borderRadius: "24px",
                                            overflow: "hidden",
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                                            aspectRatio: "16/9",
                                            position: "relative",
                                            background: "#000",
                                            border: "1px solid rgba(255,255,255,0.05)"
                                        }}
                                    >
                                        <div className="videoOverlay" style={{
                                            position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)", zIndex: 2, pointerEvents: "none"
                                        }}></div>
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/79vZT-2rMLg?si=placeholder&controls=0&rel=0"
                                            title="Academy Intro"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
                                        ></iframe>
                                    </div>

                                    {/* Floating Glass Stat Bar (Creative Element) */}
                                    <motion.div
                                        style={{
                                            marginTop: "-40px",
                                            marginLeft: "20px",
                                            marginRight: "20px",
                                            background: "rgba(20, 20, 20, 0.8)",
                                            backdropFilter: "blur(12px)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "16px",
                                            padding: "20px 30px",
                                            position: "relative",
                                            zIndex: 3,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                                        }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="d-flex align-items-center">
                                            <h3 style={{
                                                fontSize: "3.5rem",
                                                fontWeight: "800",
                                                margin: 0,
                                                lineHeight: 1,
                                                background: "linear-gradient(135deg, #fff 0%, #6cc0ff 100%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent"
                                            }}>40+</h3>
                                            <div style={{ marginLeft: "15px", borderLeft: "1px solid rgba(255,255,255,0.2)", paddingLeft: "15px" }}>
                                                <p style={{ margin: 0, fontSize: "0.9rem", color: "#ccc", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>Years of</p>
                                                <p style={{ margin: 0, fontSize: "1.1rem", color: "#fff", fontWeight: "500" }}>Industry Mastery</p>
                                            </div>
                                        </div>
                                        <div style={{
                                            width: "50px", height: "50px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center"
                                        }}>
                                            <i className="bi bi-award" style={{ fontSize: "1.5rem", color: "#6cc0ff" }}></i>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Right Side: The Narrative */}
                            <div className="col-lg-6 ps-lg-5">
                                <motion.div
                                    className="narrativeText"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                >
                                    <p className="leadText" style={{ fontSize: "1.25rem", color: "#e6e8eb", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                                        Our Skill Development Academy is driven by a team of <span style={{ color: "#fff", fontWeight: "600" }}>seasoned entrepreneurs</span>, consultants, and industry professionals.
                                    </p>
                                    <div style={{ width: "60px", height: "2px", background: "#6cc0ff", marginBottom: "1.5rem" }}></div>
                                    <p className="bodyText" style={{ color: "#b2b9c3", marginBottom: "1.5rem" }}>
                                        We are dedicated to bridging the gap between conventional education and the practical skills demanded by the modern workforce. Through our courses, we empower individuals to excel in their careers, offering insights and expertise that can only be gained from decades of hands-on experience.
                                    </p>
                                    <p className="closingText" style={{ fontStyle: "italic", color: "#888" }}>
                                        Join us to unlock your potential and <span className="highlight" style={{ color: "#6cc0ff", fontStyle: "normal" }}>thrive in the dynamic world of construction.</span>
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
