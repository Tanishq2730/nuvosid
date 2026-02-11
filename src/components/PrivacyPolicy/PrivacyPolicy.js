"use client";

import React from 'react';
import styles from './PrivacyPolicy.module.scss';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className={styles.privacyContainer}>
            <div className={styles.contentWrapper}>
                <motion.div className={styles.header} {...fadeIn}>
                    <h1>Privacy Policy & Legal Disclaimer</h1>
                    <div className={styles.metaInfo}>
                        <span>Effective Date: 11.02.2026</span>
                        <span>Last Updated: 11.02.2026</span>
                    </div>
                </motion.div>

                <motion.div className={styles.intro} {...fadeIn}>
                    <p>
                        Welcome to Nuvosid (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our website
                        (www.nuvosid.com), you agree to be bound by the terms of this Privacy Policy and Legal Disclaimer.
                        If you do not agree with these terms, please do not use our website.
                    </p>
                </motion.div>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>01</span> General Disclaimer (Strict No-Liability Clause)</h2>
                    <div className={styles.highlightBox}>
                        <p>PLEASE READ THIS SECTION CAREFULLY.</p>
                    </div>

                    <h3>1.1 No Professional Advice</h3>
                    <p>
                        The content provided on this website—including but not limited to project descriptions, architectural
                        concepts, structural details, educational material, and blog posts—is for general informational
                        purposes only. It does not constitute professional architectural, engineering, structural, or legal advice.
                    </p>
                    <p>
                        While we are a professional consultancy firm, the information on this website should not be relied
                        upon as a substitute for a formal consultation with our qualified engineers or architects. You
                        should not take, or refrain from taking, any action based on the content of this website without
                        seeking professional advice specific to your situation.
                    </p>

                    <h3>1.2 &quot;As Is&quot; Basis</h3>
                    <p>
                        All information, content, and materials on this website are provided on an &quot;AS IS&quot; and
                        &quot;AS AVAILABLE&quot; basis. Nuvosid makes no representations or warranties of any kind, express
                        or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness
                        of any information on the site.
                    </p>

                    <h3>1.3 Limitation of Liability</h3>
                    <p>To the fullest extent permitted by applicable law (including the Information Technology Act, 2000, and applicable international laws):</p>
                    <ul>
                        <li>Nuvosid, its directors, employees, partners, affiliates, and agents shall NOT be held liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to, or use of, or inability to use the website or any information provided herein.</li>
                        <li>This includes, but is not limited to, damages for errors, omissions, interruptions, defects, delays, computer viruses, loss of profits, or loss of data, even if Nuvosid has been advised of the possibility of such damages.</li>
                        <li>We accept no responsibility for any decisions made by you based on the information found on this website.</li>
                    </ul>

                    <h3>1.4 Services Disclaimer</h3>
                    <p>All services mentioned, listed, or described on this website are strictly for informational purposes only and do not constitute a binding offer, commitment, or contract.</p>
                    <ul>
                        <li>The specific scope, availability, and deliverables of any service are subject to a formal written agreement.</li>
                        <li>We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.</li>
                    </ul>

                    <h3>1.5 Image Representation &amp; AI Disclaimer</h3>
                    <p>Visual Content: All images, photographs, 3D renders, and videos displayed on this website are for representation purposes only.</p>
                    <ul>
                        <li>Source of Images: The visual content on this site is a combination of photographs from actual executed projects, conceptual architectural renders, stock photography, and AI-generated imagery.</li>
                        <li>No Warranty: These images are intended solely to visualize design concepts, architectural styles, and potential outcomes. They should not be interpreted as exact replications of final deliverables or guarantees of specific results. Actual project results may vary based on site conditions, client requirements, and regulatory factors.</li>
                    </ul>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>02</span> Information We Collect</h2>
                    <p>We are committed to protecting your privacy. We collect information in the following ways:</p>

                    <h3>2.1 Personal Information (Voluntarily Provided)</h3>
                    <p>We may collect personal information that you voluntarily provide to us when you fill out a &quot;Contact Us&quot; form, enroll in the Nuvosid Surpass Academy, request a consultation, or subscribe to our newsletter.</p>
                    <p><strong>Types of Data:</strong> Name, Email Address, Phone Number, Company Name, and Project Details.</p>

                    <h3>2.2 Non-Personal Information (Automatically Collected)</h3>
                    <p>We may automatically collect non-personal data when you visit our site to improve user experience, including browser type, IP Address, pages visited, and referring website addresses.</p>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>03</span> How We Use Your Information</h2>
                    <p>We use the collected information strictly for legitimate business purposes:</p>
                    <ul>
                        <li><strong>To Provide Services:</strong> To respond to your inquiries, process academy enrollments, and deliver project proposals.</li>
                        <li><strong>To Improve Our Website:</strong> Analyzing user behavior to optimize our content and design.</li>
                        <li><strong>Communication:</strong> To send you updates, newsletters, or promotional material (only if you have opted in).</li>
                    </ul>
                    <div className={styles.highlightBox}>
                        <p>We do NOT sell, trade, or rent your personal identification information to others.</p>
                    </div>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>04</span> External Links Disclaimer</h2>
                    <p>Our website may contain links to third-party websites (e.g., partners like Nikhil Mahashur and Associates, VentOne Engineering, or external news articles).</p>
                    <ul>
                        <li>Nuvosid has no control over the content, privacy policies, or practices of these third-party sites.</li>
                        <li>We assume no responsibility or liability for any content, advertising, products, or other materials available from such sites.</li>
                        <li>Accessing these links is at your own risk.</li>
                    </ul>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>05</span> Intellectual Property Rights</h2>
                    <p>All content on this website, including text, graphics, logos, project images, structural designs, and software, is the property of Nuvosid or its content suppliers and is protected by Indian and International copyright laws.</p>
                    <p>You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the website without express written permission from us.</p>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>06</span> Client Logos &amp; Third-Party Trademarks</h2>
                    <p>The logos, brand names, and trademarks of our clients, partners, and affiliates displayed on this website are the sole property of their respective owners.</p>
                    <ul>
                        <li><strong>Non-Ownership:</strong> Nuvosid claims no ownership of these third-party intellectual property assets.</li>
                        <li><strong>Fair Use for Portfolio:</strong> These logos are used strictly for informational and portfolio purposes to factually represent our project experience and professional relationships.</li>
                        <li><strong>No Implied Endorsement:</strong> The display of these logos does not imply an endorsement, sponsorship, or partnership beyond the specific scope of projects.</li>
                    </ul>
                    <p>If you are a copyright owner and believe your logo is being used improperly, please contact us for immediate resolution.</p>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>07</span> Academy &amp; Educational Services Disclaimer</h2>

                    <h3>7.1 Third-Party Collaboration</h3>
                    <p>The courses, training modules, and certifications provided via the Nuvosid Surpass Academy platform are delivered in strategic collaboration with Surpass Prowess India Pvt. Ltd.</p>
                    <p>By accessing Academy services, you acknowledge that your data and usage are also subject to the Privacy Policy and Terms of Service of Surpass Prowess India Pvt. Ltd.</p>

                    <h3>7.2 Software Usage &amp; Education</h3>
                    <ul>
                        <li><strong>Educational Purpose Only:</strong> The software tools and methodologies taught are the intellectual property of their developers. Training is strictly for educational purposes.</li>
                        <li><strong>No Illegal Software:</strong> Nuvosid does not provide or host pirated or illegal versions of any software. We strictly condemn software piracy.</li>
                        <li><strong>User Responsibility:</strong> Students are solely responsible for obtaining valid licenses for software they use for practice or commercial work.</li>
                        <li><strong>No Commercial Usage:</strong> Nuvosid does not claim commercial rights over the third-party software taught.</li>
                    </ul>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>08</span> Indemnification</h2>
                    <p>You agree to indemnify, defend, and hold harmless Nuvosid and its officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses arising out of or in any way connected with your access to or use of this website or your violation of this Policy.</p>
                </motion.section>

                <motion.section className={styles.section} {...fadeIn}>
                    <h2><span className={styles.number}>09</span> Governing Law &amp; Jurisdiction</h2>
                    <h3>9.1 Exclusive Jurisdiction</h3>
                    <p>This Privacy Policy shall be governed by the Laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts located in Udaipur, Rajasthan, India.</p>
                    <h3>9.2 International Users</h3>
                    <p>If you access this website from a location outside India, you are responsible for compliance with all local laws.</p>
                </motion.section>

                <motion.div className={styles.footerNote} {...fadeIn}>
                    <h2><span className={styles.number}></span> Contact Us</h2>
                    <p>If you have any questions regarding this Privacy Policy or our Legal Disclaimer, please contact us at:</p>
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

export default PrivacyPolicy;
