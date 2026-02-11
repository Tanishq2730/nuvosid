"use client";

import React from 'react';
import styles from './TermsConditions.module.scss';
import { motion } from 'framer-motion';

const TermsConditions = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className={styles.termsContainer}>
            <div className={styles.contentWrapper}>
                <motion.div className={styles.header} {...fadeIn}>
                    <h1>Terms and Conditions of Use</h1>
                    <div className={styles.metaInfo}>
                        <span>Effective Date: 11.02.2026</span>
                        <span>Last Updated: 11.02.2026</span>
                    </div>
                </motion.div>

                <motion.div className={styles.intro} {...fadeIn}>
                    <p>
                        Welcome to Nuvosid. By accessing or using our website located at
                        (www.nuvosid.com) (hereinafter referred to as the &quot;Platform&quot;),
                        you agree to comply with and be bound by the following Terms and Conditions (&quot;Terms&quot;).
                    </p>
                    <div className={styles.highlightBox}>
                        <p>IF YOU DO NOT AGREE TO THESE TERMS, PLEASE DO NOT USE OUR PLATFORM.</p>
                    </div>
                </motion.div>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>01</span> General Provisions</h2>
                    <h3>1.1 Acceptance of Terms</h3>
                    <p>
                        These Terms constitute a legally binding agreement between you (&quot;User,&quot; &quot;Student,&quot; or &quot;Client&quot;)
                        and Nuvosid (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Your use of the Platform,
                        including accessing information, using our consultancy services, or enrolling in the Nuvosid Surpass Academy,
                        signifies your unequivocal acceptance of these Terms.
                    </p>

                    <h3>1.2 Modification of Terms</h3>
                    <p>
                        We reserve the right to modify, update, or replace these Terms at any time without prior notice.
                        Continued use of the Platform following any changes constitutes acceptance of the new Terms.
                    </p>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>02</span> Use of Services & Disclaimers</h2>
                    <h3>2.1 Informational Nature of Services</h3>
                    <p>
                        All descriptions of services (Construction, Consultancy, Engineering, etc.) provided on the Platform
                        are for informational purposes only and do not constitute a binding offer to sell or perform services.
                    </p>
                    <ul>
                        <li>A binding client-contractor relationship is only established upon the signing of a formal, written Service Agreement or Contract.</li>
                        <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
                    </ul>

                    <h3>2.2 No Professional Advice</h3>
                    <p>
                        The content on this Platform (blogs, project case studies, technical articles) is general in nature.
                        It is not a substitute for professional structural, architectural, or legal advice specific to your
                        project&apos;s unique conditions. Reliance on any information provided herein is solely at your own risk.
                    </p>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>03</span> Nuvosid Surpass Academy & Educational Services</h2>
                    <h3>3.1 Collaboration with Surpass Prowess India Pvt. Ltd.</h3>
                    <p>
                        The educational courses and certifications offered via the Nuvosid Surpass Academy are delivered
                        in strategic collaboration with Surpass Prowess India Pvt. Ltd.
                    </p>
                    <ul>
                        <li>By enrolling, you acknowledge that the delivery of content, certification, and data handling may involve this third-party partner.</li>
                        <li>You agree to abide by the academic integrity policies set forth by the Academy.</li>
                    </ul>

                    <h3>3.2 Educational Intent & Software Usage</h3>
                    <ul>
                        <li><strong>No Commercial Rights:</strong> The training provided on software tools (e.g., CAD, BIM, Structural Analysis software) is strictly for educational and skill-development purposes. We do not grant any commercial licenses for the software taught.</li>
                        <li><strong>No Illegal Software:</strong> Nuvosid strictly prohibits software piracy. We do not provide, host, distribute, or sell cracked, pirated, or illegal versions of any software.</li>
                        <li><strong>User Responsibility:</strong> Users are solely responsible for procuring valid, legal licenses for any software they use for practice, assignments, or professional work.</li>
                    </ul>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>04</span> Intellectual Property Rights</h2>
                    <h3>4.1 Company Ownership</h3>
                    <p>
                        Unless otherwise indicated, the Platform is our proprietary property. All source code, databases,
                        functionality, software, website designs, audio, video, text, photographs, and graphics on the
                        Platform (collectively, the &quot;Content&quot;) are owned or controlled by us and are protected
                        by Indian and international copyright and trademark laws.
                    </p>

                    <h3>4.2 Third-Party Intellectual Property</h3>
                    <ul>
                        <li><strong>Client Logos:</strong> Logos and trademarks of our clients and partners displayed on the Platform are the property of their respective owners and are used here for portfolio representation only.</li>
                        <li><strong>Software Brands:</strong> Names of software tools mentioned in Academy courses are trademarks of their respective vendors. Nuvosid claims no ownership over these trademarks.</li>
                    </ul>

                    <h3>4.3 Limited License</h3>
                    <p>
                        You are granted a limited license to access and use the Platform for personal, non-commercial use.
                        You may not reproduce, distribute, display, sell, lease, or otherwise exploit the Content without our
                        express written permission.
                    </p>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>05</span> Limitation of Liability (Strict Clause)</h2>
                    <p>TO THE FULLEST EXTENT PERMITTED BY LAW:</p>
                    <ul>
                        <li><strong>&quot;As Is&quot; Service:</strong> The Platform and our services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without any warranties of any kind, express or implied.</li>
                        <li><strong>No Liability for Damages:</strong> Nuvosid, its directors, employees, partners, and agents shall NOT be liable for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Platform or our services.</li>
                        <li><strong>Educational Outcomes:</strong> We do not guarantee specific employment outcomes, salary increases, or business success resulting from our Consultancy or Academy services.</li>
                    </ul>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>06</span> Indemnification</h2>
                    <p>
                        You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates,
                        and all of our respective officers, agents, partners, and employees, from and against any loss,
                        damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses,
                        made by any third party due to or arising out of your use of the Platform, breach of these Terms,
                        any misuse of software or intellectual property, or your violation of the rights of a third party.
                    </p>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>07</span> Governing Law & Dispute Resolution</h2>
                    <h3>7.1 Jurisdiction</h3>
                    <p>
                        These Terms shall be governed by and defined following the laws of India. You irrevocably
                        consent that the courts of Udaipur, Rajasthan, shall have exclusive jurisdiction to resolve
                        any dispute which may arise in connection with these terms.
                    </p>
                    <h3>7.2 Dispute Resolution</h3>
                    <p>
                        Any dispute arising out of or in connection with this agreement, including any question regarding
                        its existence, validity, or termination, shall be referred to and finally resolved by arbitration
                        in Udaipur, in accordance with the Arbitration and Conciliation Act, 1996.
                    </p>
                </motion.section>

                <motion.div className={styles.footerNote} {...fadeIn}>
                    <h2>Contact Information</h2>
                    <p>
                        In order to resolve a complaint regarding the Platform or to receive further information
                        regarding use of the Platform, please contact us at:
                    </p>
                    <div className={styles.contactDetails}>
                        <p><strong>Nuvosid Registered Office:</strong> 9-A Prem Nagar, Udaipur-313001 (Rajasthan)</p>
                        <p><strong>Email:</strong> <a href="mailto:nuvosid@gmail.com">nuvosid@gmail.com</a></p>
                        <p><strong>Phone:</strong> <a href="tel:+919636043246">+91 9636043246</a></p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsConditions;
