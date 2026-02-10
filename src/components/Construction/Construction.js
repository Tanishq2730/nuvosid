"use client";
import React, { useState } from "react";
import styles from "./Construction.module.scss";
import { motion } from "motion/react";
import Image from "next/image";

const serviceData = [
    {
        id: 1,
        title: "Industrial Construction",
        description: "Delivering high-performance industrial facilities designed for operational efficiency and safety. From complex manufacturing plants to logistics hubs, we build robust infrastructure that drives productivity.",
        image: "/assets/construction/service1.png",
        details: [
            {
                title: "Manufacturing Plants & Factories",
                content: "We design and construct production facilities with optimized layouts for workflow efficiency, heavy-duty flooring for machinery, and integrated MEP systems to support 24/7 operations."
            },
            {
                title: "Warehousing & Distribution Centers",
                content: "Specializing in large-span Pre-Engineered Buildings (PEB) and high-bay warehousing solutions that maximize storage volume and streamline logistics and supply chain operations."
            },
            {
                title: "Heavy Machinery Foundations",
                content: "Expert engineering of vibration-resistant foundations and reinforced concrete structures capable of supporting heavy industrial equipment, ensuring zero operational downtime."
            }
        ]
    },
    {
        id: 2,
        title: "Commercial Construction",
        description: "Creating modern workspaces and retail environments that elevate business potential. We deliver aesthetically striking and functionally superior commercial structures tailored to your brand’s corporate vision.",
        image: "/assets/construction/service2.png",
        details: [
            {
                title: "Corporate Office Towers",
                content: "Building future-ready workspaces that blend iconic architectural facades with sustainable energy systems and flexible floor plates to enhance employee productivity."
            },
            {
                title: "Retail Complexes & Malls",
                content: "Constructing immersive retail destinations with high-quality finishes, efficient crowd-flow planning, and robust structural longevity to handle high footfall."
            },
            {
                title: "Mixed-Use Developments",
                content: "Seamlessly integrating residential, commercial, and recreational zones into a single cohesive structure, maximizing land value and community convenience."
            }
        ]
    },
    {
        id: 3,
        title: "Hospital Construction",
        description: "Engineering state-of-the-art healthcare facilities where patient well-being meets operational excellence. We specialize in executing complex medical infrastructure that demands absolute precision, hygiene, and regulatory compliance.",
        image: "/assets/construction/service3.png",
        details: [
            {
                title: "Multi-Specialty Hospitals",
                content: "Delivering turnkey hospital infrastructure including sterile Operation Theaters (OTs), ICUs, and patient wards, strictly adhering to NABH and global healthcare construction standards."
            },
            {
                title: "Medical Research Laboratories ",
                content: "Building bio-safe environments with specialized HVAC systems, chemical-resistant surfaces, and containment zones required for sensitive medical research."
            },
            {
                title: "Advanced Diagnostic Centers",
                content: "Constructing specialized facilities with lead shielding and structural reinforcement necessary to house heavy imaging equipment like MRI and CT scanners safely."
            }
        ]
    },
    {
        id: 4,
        title: "Hospitality Construction",
        description: "Crafting world-class hospitality experiences through exquisite structural design and execution. We turn architectural grandeur into reality, delivering luxury resorts and hotels that stand as iconic landmarks.",
        image: "/assets/construction/service4.png",
        details: [
            {
                title: "Luxury Hotels & Resorts",
                content: "Executing intricate architectural designs with premium craftsmanship, from grand lobbies to guest suites, ensuring the structure supports the highest standards of luxury (e.g., Fairmont Palace projects)."
            },
            {
                title: "Boutique Guest Houses",
                content: "Focusing on bespoke construction that highlights unique design elements and intimate atmospheres, perfect for niche hospitality brands."
            },
            {
                title: "Recreational & Leisure Facilities",
                content: "Building structurally sound swimming pools, clubhouses, and landscaped zones that integrate seamlessly with the natural terrain and hotel infrastructure."
            }
        ]
    },
    {
        id: 5,
        title: "Residential Construction",
        description: "Building more than just homes; we create sustainable living ecosystems. From modern high-rise apartments to bespoke private villas, our residential projects prioritize comfort, design, and lasting structural quality.",
        image: "/assets/construction/service5.png",
        details: [
            {
                title: "High-Rise Apartments",
                content: "Using advanced formwork technologies to deliver safe, earthquake-resistant high-rise towers that offer modern amenities and efficient space utilization."
            },
            {
                title: "Private Villas & Townships",
                content: "Constructing expansive master-planned communities and custom luxury villas that reflect personal style while ensuring superior build quality and privacy."
            },
            {
                title: "Green Building Solutions",
                content: "Integrating eco-friendly construction materials, rainwater harvesting, and energy-efficient designs to create homes that are sustainable and cost-effective to run."
            }
        ]
    },
    {
        id: 6,
        title: "Public Sector Construction",
        description: "Strengthening the nation’s backbone with durable public infrastructure. We partner with government bodies to deliver large-scale civic projects—from administrative buildings to transit networks—on time and within budget.",
        image: "/assets/construction/service6.png",
        details: [
            {
                title: "Government Administrative Buildings",
                content: "Constructing secure, durable, and functional civic centers and offices that serve as the operational hubs for public administration."
            },
            {
                title: "Transport Infrastructure (Roads & Bridges) ",
                content: "Executing critical heavy civil works, including flyovers, bridges, and arterial roads designed to withstand heavy traffic loads and environmental stress."
            },
            {
                title: "Civic Amenities & Utilities",
                content: "Building essential community infrastructure such as public parks, water treatment plants, and drainage systems that improve the quality of urban life."
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
        <section className="mainSection">
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
