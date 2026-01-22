'use client';
import { motion } from 'motion/react';
import { Presentation, TrendingUp, FileText, Users, ArrowUpRight } from 'lucide-react';
import styles from './How.module.scss';
import clsx from 'clsx';

// We'll define the layout configuration for each item to create the Bento Grid
// Col-span classes are Bootstrap classes
const howData = [
    {
        id: 1,
        title: 'Live Project Based Learning',
        subtitle: 'Gain real-world experience working on active construction projects.',
        icon: Presentation,
        colClass: 'col-lg-7', // Wide card
        variant: styles.cardVariant1,
    },
    {
        id: 2,
        title: 'Continued Career Development',
        subtitle: 'Never stop growing with our lifelong mentorship.',
        icon: TrendingUp,
        colClass: 'col-lg-5', // Narrower card
        variant: styles.cardVariant2,
    },
    {
        id: 3,
        title: 'Practical Assignment',
        subtitle: 'Hands-on tasks that mirror on-site challenges.',
        icon: FileText,
        colClass: 'col-lg-5', // Narrower card
        variant: styles.cardVariant3,
    },
    {
        id: 4,
        title: 'Involvement Of Global Leader',
        subtitle: 'Learn directly from veterans with decades of international experience.',
        icon: Users,
        colClass: 'col-lg-7', // Wide card
        variant: styles.cardVariant4,
    },
];

export default function How() {
    return (
        <section>
            <div className="mainSection">
                <div className="container">
                    <div className={styles.howSection}>
                        <div className={styles.header}>
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                HOW <span className={styles.highlight}>WE DO</span> IT
                            </motion.h2>
                        </div>

                        {/* Bootstrap Row for Grid */}
                        <div className="row g-4">
                            {howData.map((item, index) => (
                                <div key={item.id} className={`col-12 ${item.colClass}`}>
                                    <motion.div
                                        style={{ height: "100%" }}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className={clsx(styles.bentoCard, item.variant)}>
                                            {/* Decorative elements based on variant */}
                                            <div className={styles.glowBlob} style={{ top: '-10%', right: '-10%', background: index % 2 === 0 ? 'blue' : 'purple' }} />

                                            <div className={styles.cardContent}>
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className={styles.iconBox}>
                                                        <item.icon />
                                                    </div>
                                                    {/* Optional arrow for that "card" feel */}
                                                    <ArrowUpRight className="text-muted" style={{ opacity: 0.3 }} />
                                                </div>

                                                <div>
                                                    <h3 className={styles.title}>{item.title}</h3>
                                                    <p className={styles.subtitle}>{item.subtitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
