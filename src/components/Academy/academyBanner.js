"use client";
import { motion } from "motion/react";

export default function AcademyBanner() {
    // Generate static random positions for hydration consistency
    const particles = [
        { id: 1, top: "10%", left: "10%", size: 4, duration: 25 },
        { id: 2, top: "20%", left: "80%", size: 6, duration: 30 },
        { id: 3, top: "50%", left: "50%", size: 3, duration: 20 },
        { id: 4, top: "80%", left: "20%", size: 5, duration: 28 },
        { id: 5, top: "70%", left: "90%", size: 4, duration: 32 },
        { id: 6, top: "15%", left: "60%", size: 2, duration: 22 },
        { id: 7, top: "90%", left: "10%", size: 6, duration: 35 },
        { id: 8, top: "40%", left: "5%", size: 3, duration: 26 },
        { id: 9, top: "30%", left: "95%", size: 5, duration: 29 },
        { id: 10, top: "60%", left: "85%", size: 4, duration: 31 },
        { id: 11, top: "5%", left: "40%", size: 2, duration: 24 },
        { id: 12, top: "85%", left: "60%", size: 5, duration: 33 },
        { id: 13, top: "25%", left: "25%", size: 3, duration: 27 },
        { id: 14, top: "75%", left: "35%", size: 4, duration: 30 },
        { id: 15, top: "45%", left: "75%", size: 2, duration: 23 },
    ];

    return (
        <>
        <div className="mainSection">
            <section className="academySection">
            {/* Particle Background */}
            <div className="particleContainer">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="particle"
                        style={{
                            width: p.size,
                            height: p.size,
                            top: p.top,
                            left: p.left,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
                {/* Glow Effects */}
                <div className="glowSpot glowLeft" />
                <div className="glowSpot glowRight" />
            </div>

            <div className="container position-relative z-2">
                <div className="academyBanner">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h5 className="subTitle">ARE YOU READY TO</h5>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="mainTitle">ELEVATE?</h1>
                    </motion.div>

                    <motion.div
                        className="brandImageWrapper"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="glowBehind" />
                        <img src="/assets/surpassLogo.png" alt="Surpass Logo" />
                    </motion.div>

                    <motion.p
                        className="quote"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        “We are a group of consulting <span className="highlight">Architects</span> | <span className="highlight">Engineers</span> | <span className="highlight">Designers</span> | <span className="highlight">Educators</span> & <span className="highlight">Entrepreneurs</span> working together to Make India Skill Driven”
                    </motion.p>
                </div>
            </div>
        </section>
        </div>
        </>
    );
}
