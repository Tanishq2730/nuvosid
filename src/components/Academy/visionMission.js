'use client';
import { motion } from 'motion/react';
import { Eye, Target, BicepsFlexed } from 'lucide-react';
import styles from './VisionMission.module.scss';
import clsx from 'clsx';

const data = [
    {
        id: 1,
        title: 'Our Vision',
        description: 'Transforming education by providing industry-aligned skills for career success.',
        icon: Eye,
    },
    {
        id: 2,
        title: 'Our Mission',
        description: 'Bridging the gap between academia and industry through practical skill development.',
        icon: Target,
    },
    {
        id: 3,
        title: 'Our Strength',
        description: 'Our Knowledge and Database of construction Projects along with Instructors having 40+ Years experience in the Industry',
        icon: BicepsFlexed,
    },
];

export default function VisionMission() {
    return (
        <section className="mainSection">
            <div className="container">
                <div className="row g-4">
                    {data.map((item, index) => {
                        // Determine if we should show the separator (show for all except the last one)
                        const showSeparator = index < data.length - 1;

                        return (
                            <div key={item.id} className="col-md-4 position-relative">
                                <motion.div
                                    className={clsx(styles.cardWrapper, !showSeparator && styles.noSeparator)}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div className={styles.card}>
                                        <div className={styles.iconBox}>
                                            <item.icon />
                                        </div>
                                        <h3 className={styles.title}>{item.title}</h3>
                                        <div className={styles.divider} />
                                        <p className={styles.description}>{item.description}</p>
                                    </div>

                                    {/* Vertical Separator Line for Desktop */}
                                    {showSeparator && <div className={styles.separator} />}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
