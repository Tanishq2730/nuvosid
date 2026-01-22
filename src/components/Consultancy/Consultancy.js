"use client";
import React, { useState } from "react";
import styles from "./Consultancy.module.scss";
import { motion } from "motion/react";
import Image from "next/image";

const consultancyData = [
    {
        id: 1,
        title: "Project Management",
        description: "Expert oversight for complex construction projects. We ensure your project is delivered on time, within budget, and to the highest quality standards.",
        image: "/assets/consultancy/service1.png",
        details: [
            {
                title: "Strategic Planning",
                content: "Detailed roadmap creation, risk assessment, and resource allocation to set your project up for success."
            },
            {
                title: "Cost Control",
                content: "Rigorous budget management and value engineering to maximize ROI without compromising quality."
            },
            {
                title: "Contract Administration",
                content: "Professional handling of all contractual agreements, claims, and disputes."
            }
        ]
    },
    {
        id: 2,
        title: "Cost Consultancy",
        description: "Precise financial management and quantity surveying services. We provide clarity and control over your project's finances.",
        image: "/assets/consultancy/service2.png",
        details: [
            {
                title: "Quantity Surveying",
                content: "Accurate material estimation and cost planning throughout the project lifecycle."
            },
            {
                title: "Feasibility Studies",
                content: "In-depth financial analysis to determine project viability and investment potential."
            },
            {
                title: "Tender Management",
                content: "Streamlined tendering processes to select the best partners and suppliers."
            }
        ]
    },
    {
        id: 3,
        title: "Sustainability Consulting",
        description: "Guiding your project towards a greener future. We help you implement eco-friendly practices and achieve sustainability certifications.",
        image: "/assets/consultancy/service3.png",
        details: [
            {
                title: "Green Building Certifications",
                content: "Assistance with LEED, BREEAM, and other sustainability certification processes."
            },
            {
                title: "Energy Efficiency",
                content: "Analysis and recommendations for optimizing energy consumption and reducing carbon footprint."
            },
            {
                title: "Sustainable Materials",
                content: "Sourcing and selection of environmentally responsible building materials."
            }
        ]
    },
    {
        id: 4,
        title: "Digital Transformation",
        description: "Leveraging technology to revolutionize construction processes. We implement BIM and other digital tools for enhanced efficiency.",
        image: "/assets/consultancy/service4.png",
        details: [
            {
                title: "BIM Implementation",
                content: "Integrating Building Information Modeling for better collaboration and visualization."
            },
            {
                title: "Digital Twin Tech",
                content: "Creating digital replicas of physical assets to optimize performance and maintenance."
            },
            {
                title: "Smart Building Solutions",
                content: "Consulting on the integration of IoT and smart systems for modern facility management."
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

export default function Consultancy() {
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

                {consultancyData.map((service, index) => {
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