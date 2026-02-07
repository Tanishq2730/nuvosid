"use client";
import React, { useState } from "react";
import styles from "./Consultancy.module.scss";
import { motion } from "motion/react";
import Image from "next/image";

const consultancyData = [
    {
        id: 1,
        title: "Structural Design",
        description: "The backbone of safety and stability. Our engineering team ensures your structure stands the test of time and elements. We specialize in complex load analysis and optimizing material efficiency for diverse sectors.",
        image: "/assets/consultancy/service1.png",
        details: [
            {
                title: "High-Rise Building Design",
                content: "Advanced structural systems (shear walls, frame-tube structures) designed to withstand high wind speeds, seismic activity, and vertical gravity loads in tall towers."
            },
            {
                title: "Industrial Shed Design",
                content: "Robust long-span steel truss and portal frame designs optimized for factories, warehouses, and storage units requiring large column-free spaces."
            },
            {
                title: "Industrial Foundation Design",
                content: "Heavy-duty foundation engineering capable of supporting massive machinery, minimizing vibration, and handling dynamic industrial loads."
            },
            {
                title: "Roads & Bridges",
                content: "Infrastructure design including highway alignment, pavement design, and culvert/bridge structural analysis for safe and durable connectivity."
            },
            {
                title: "Pre-Engineered Buildings (PEB)",
                content: "Efficient, lightweight steel structure designs that are engineered for rapid assembly, cost-effectiveness, and flexibility."
            },
            {
                title: "Pre-Fabricated Structures",
                content: "Modular design solutions for off-site manufacturing, ensuring speed, precision, and reduced on-site construction waste."
            }
        ]
    },
    {
        id: 2,
        title: "Architecture Planning & Landscape Design",
        description: "Designing spaces that inspire and endure. We blend aesthetics with functionality to create environments that resonate with their inhabitants and respect their surroundings.",
        image: "/assets/consultancy/service2.png",
        details: [
            {
                title: "Conceptual & Schematic Design",
                content: "Transforming initial ideas into visual concepts and preliminary layouts."
            },
            {
                title: "Master Planning",
                content: "Comprehensive site analysis and zoning strategies for large-scale developments."
            },
            {
                title: "Landscape Architecture",
                content: "Integrating the built environment with nature through sustainable hardscaping, planting schemes, and outdoor living spaces."
            },
            {
                title: "3D Visualization",
                content: "High-fidelity renderings and walkthroughs to visualize the final outcome before construction begins."
            }
        ]
    },
    {
        id: 3,
        title: "MEP Design (Mechanical, Electrical, Plumbing)",
        description: "The nervous system of your building. We design efficient, invisible systems that ensure comfort, safety, and operational sustainability.",
        image: "/assets/consultancy/service3.png",
        details: [
            {
                title: "HVAC Systems",
                content: "Energy-efficient heating, ventilation, and air conditioning planning."
            },
            {
                title: "Electrical Grid & Lighting",
                content: "Comprehensive wiring layouts, power distribution, and architectural lighting design."
            },
            {
                title: "Plumbing & Sanitary",
                content: "Optimized water supply networks, waste management, and fixture planning."
            },
            {
                title: "Fire Fighting Systems",
                content: "Integrated detection and suppression systems to meet strict safety regulations."
            }
        ]
    },
    {
        id: 4,
        title: "Drainage System Designs",
        description: "Advanced water management solutions. We protect your investment from water damage through sophisticated hydraulic engineering and site grading.",
        image: "/assets/consultancy/service4.png",
        details: [
            {
                title: "Stormwater Management",
                content: "Rainwater harvesting, retention ponds, and permeable paving solutions."
            },
            {
                title: "Sewerage & Effluent Treatment",
                content: "Design of sewage treatment plants (STP) and efficient waste disposal networks."
            },
            {
                title: "Site Grading & Flood Mitigation",
                content: "Strategic terrain modification to prevent waterlogging and erosion."
            },
            {
                title: "Urban Drainage",
                content: "Sustainable urban drainage systems (SUDS) for municipal or large-community projects."
            }
        ]
    },
    {
        id: 5,
        title: "Detailing & Drafting Works",
        description: "Bridging the gap between design and fabrication. We provide the high-precision technical drawings that contractors and fabricators need to build with zero error.",
        image: "/assets/consultancy/service5.png",
        details: [
            {
                title: "Structural Shop Drawings",
                content: "Detailed fabrication drawings for steel members, connections, and assemblies."
            },
            {
                title: "Rebar Detailing & Bar Bending Schedules (BBS)",
                content: "Precise reinforcement placement drawings and cutting lists for concrete structures."
            },
            {
                title: "As-Built Drawings",
                content: "Accurate documentation of the building exactly as constructed for future maintenance and records."
            },
            {
                title: "BIM Modeling",
                content: "3D Building Information Modeling to detect clashes between structural and MEP elements before construction."
            },
            {
                title: "Fabrication & Erection Drawings",
                content: "Step-by-step guides for site assembly and component manufacturing."
            }
        ]
    },
    {
        id: 6,
        title: "Project Feasibility Study",
        description: "Data-driven insights for confident investment. Before you commit capital, we provide the analytics to determine if a project is viable, legal, and profitable.",
        image: "/assets/consultancy/service6.png",
        details: [
            {
                title: "Cost-Benefit Analysis",
                content: "Detailed financial projections, budget estimation, and ROI calculations."
            },
            {
                title: "Site Evaluation",
                content: "Assessing geographical, environmental, and topographical constraints."
            },
            {
                title: "Regulatory Due Diligence",
                content: "Investigating zoning laws, land-use restrictions, and permitting requirements."
            },
            {
                title: "Risk Assessment",
                content: "Identifying potential technical, legal, or market hurdles early in the process."
            }
        ]
    },
    {
        id: 7,
        title: "Project Management Consultancy (PMC)",
        description: "Your advocate from concept to keys. We act as the client's representative, ensuring the project stays on time, within budget, and up to quality standards.",
        image: "/assets/consultancy/service7.png",
        details: [
            {
                title: "Construction Supervision",
                content: "On-site monitoring to ensure adherence to drawings and safety protocols."
            },
            {
                title: "Contract Administration",
                content: "Managing vendor contracts, change orders, and dispute resolution."
            },
            {
                title: "Quality Control (QA/QC)",
                content: "Rigorous material testing and workmanship inspections."
            },
            {
                title: "Timeline & Budget Tracking",
                content: "Real-time scheduling and cost control to prevent overruns."
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