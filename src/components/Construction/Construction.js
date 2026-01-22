"use client";
import React, { useState } from "react";
import styles from "./Construction.module.scss";
import { motion } from "motion/react";
import Image from "next/image";

const serviceData = [
    {
        id: 1,
        title: "Residential Construction",
        description: "Building dream homes with precision, quality, and a focus on sustainable living. From custom designs to master-planned communities.",
        image: "/assets/construction/service1.png",
        details: [
            {
                title: "Custom Home Building",
                content: "Tailored solutions for your unique lifestyle. We handle everything from foundation to finish, ensuring your vision comes to life."
            },
            {
                title: "Multi-Family Housing",
                content: "Efficient and high-quality construction for apartments and condominiums, maximizing value and comfort."
            },
            {
                title: "Green Building Solutions",
                content: "Eco-friendly construction practices using sustainable materials and energy-efficient designs."
            }
        ]
    },
    {
        id: 2,
        title: "Commercial Construction",
        description: "delivering state-of-the-art commercial spaces that drive business growth. We specialize in offices, retail centers, and industrial facilities.",
        image: "/assets/construction/service2.png",
        details: [
            {
                title: "Office Complexes",
                content: "Modern workspaces designed for productivity and collaboration, featuring smart building technologies."
            },
            {
                title: "Retail & Shopping Centers",
                content: "Attractive and functional retail environments that enhance customer experience and foot traffic."
            },
            {
                title: "Industrial & Warehousing",
                content: "Robust construction for heavy-duty operations, focusing on safety, logistics, and durability."
            }
        ]
    },
    {
        id: 3,
        title: "Renovation & Remodeling",
        description: "Transforming existing spaces into modern masterpieces. We breathe new life into outdated structures with careful planning and execution.",
        image: "/assets/construction/service3.png",
        details: [
            {
                title: "Interior Renovations",
                content: "Complete overhauls of living spaces, kitchens, and bathrooms to reflect contemporary trends."
            },
            {
                title: "Exterior Facelifts",
                content: "Enhancing curb appeal with new siding, roofing, and structural improvements."
            },
            {
                title: "Historic Restoration",
                content: "Preserving the charm of the past while integrating modern amenities and structural structural stability."
            }
        ]
    },
    {
        id: 4,
        title: "Architectural Planning",
        description: "Comprehensive planning and design services that lay the foundation for successful projects. We bridge the gap between vision and reality.",
        image: "/assets/construction/service4.png",
        details: [
            {
                title: "Blueprint & Design",
                content: "Detailed architectural drawings and 3D modeling to visualize every aspect of the project before construction begins."
            },
            {
                title: "Project Management",
                content: "End-to-end management ensuring timelines, budgets, and quality standards are strictly met."
            },
            {
                title: "Permitting & Zoning",
                content: "Navigating complex regulatory landscapes to ensure full compliance and smooth project execution."
            }
        ]
    }
];

const AccordionItem = ({ title, content, isActive, onClick }) => {
    return (
        <div className={`${styles.accordionItem} ${isActive ? styles.active : ""}`}>
            <div className={styles.accordionHeader} onClick={onClick}>
                <span>{title}</span>
                <span className={styles.accordionIcon}>
                    <i className="bi bi-chevron-down"></i>
                </span>
            </div>
            <div className={styles.accordionContent}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default function Construction() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <section className={styles.constructionSection}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    {/* Section header content if needed */}
                </div>

                {serviceData.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={service.id}
                            className={`row ${styles.serviceRow}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Text Side */}
                            <div className={`col-md-6 ${styles.contentSide} ${isEven ? "" : "order-md-2"}`}>
                                <div className={styles.textWrapper}>
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className={styles.decoLine}></span>
                                        <h2 className={styles.heading}>{service.title}</h2>
                                        <p className={styles.description}>{service.description}</p>
                                    </motion.div>

                                    <div className={styles.accordion}>
                                        {service.details.map((detail, idx) => {
                                            const uniqueId = `${service.id}-${idx}`;
                                            return (
                                                <AccordionItem
                                                    key={idx}
                                                    title={detail.title}
                                                    content={detail.content}
                                                    isActive={activeAccordion === uniqueId}
                                                    onClick={() => toggleAccordion(uniqueId)}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className={`col-md-6 ${isEven ? "" : "order-md-1"}`}>
                                <motion.div
                                    className={styles.imageWrapper}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1, duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={800}
                                        height={600}
                                        quality={90}
                                        className="img-fluid"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
