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
                            {/* Left Side: The "40 Years" Statement */}
                            <div className="col-lg-5 mb-5 mb-lg-0">
                                <motion.div
                                    className="statCard"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="glowEffect"></div>
                                    <h3 className="statNumber">40+</h3>
                                    <p className="statLabel">Years of Collective<br />Industry Mastery</p>
                                </motion.div>
                            </div>

                            {/* Right Side: The Narrative */}
                            <div className="col-lg-7">
                                <motion.div
                                    className="narrativeText"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                >
                                    <p className="leadText">
                                        Our Skill Development Academy is driven by a team of seasoned entrepreneurs, consultants, and industry professionals with over 40 years of collective experience in the construction industry.
                                    </p>
                                    <p className="bodyText">
                                        We are dedicated to bridging the gap between conventional education and the practical skills demanded by the modern workforce. Through our courses, we empower individuals to excel in their careers, offering insights and expertise that can only be gained from decades of hands-on experience.
                                    </p>
                                    <p className="closingText">
                                        Join us to unlock your potential and <span className="highlight">thrive in the dynamic world of construction.</span>
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
