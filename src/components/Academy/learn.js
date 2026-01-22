import Image from "next/image";

export default function Learn() {
    return (
        <section className="creativeLearnSection">
            {/* Background Decor */}
            <div className="bgBlob blob1"></div>
            <div className="bgBlob blob2"></div>

            <div className="container">
                {/* Basic Header */}
                <div className="row mb-5 text-center">
                    <div className="col-lg-12">
                        <h1 className="sectionTitle">
                            Why <span className="accent">Learn</span> From Us
                        </h1>
                    </div>
                </div>

                {/* Bento-esque Grid Layout */}
                <div className="bentoGrid">

                    {/* Main Card: Industry Ready */}
                    <div className="creativeCard mainFeatured">
                        <div className="cardContent">
                            <div className="cardIcon">
                                <i className="bi bi-rocket-takeoff"></i>
                            </div>
                            <h3>We train you to become <span style={{ color: 'var(--accent-custom)' }}>Industry Ready</span></h3>
                            <p>
                                Experience the shift from theory to reality. By Teaching you how to Work on
                                real-time projects, we bridge the gap between learning and doing.
                                Immerse yourself in hands-on knowledge and practical insights that
                                only real-world exposure can provide.
                            </p>
                        </div>

                        {/* Visual element that floats or interacts */}
                        <div className="floatingImg">
                            <Image src="/assets/academy/about_img.png" alt="Working" width={500} height={500} style={{ objectFit: 'contain' }} />
                        </div>
                    </div>

                    {/* Side Card: Certification */}
                    <div className="creativeCard sideFeatured">
                        <div className="cardIcon">
                            <i className="bi bi-shield-check"></i>
                        </div>
                        <h3>Get Industry <br /> Certification</h3>
                        <p>
                            Distinguish yourself from the crowd. Our certifications are validating your
                            skills and expertise across the Architecture, Engineering, and Construction sectors.
                        </p>
                    </div>

                    {/* Small Feature Tile 1: Real Time */}
                    <div className="creativeCard" style={{ gridColumn: '8 / 11', padding: '30px' }}>
                        <h5 style={{ color: 'white', fontWeight: 700 }}>Real Time <i className="bi bi-clock-history ms-2" style={{ color: 'var(--accent-custom)' }}></i></h5>
                        <small style={{ color: 'var(--text-secondary)' }}>Live project tracking & mentorship.</small>
                    </div>

                    {/* Small Feature Tile 2: Expert Led */}
                    <div className="creativeCard" style={{ gridColumn: '11 / 14', padding: '30px' }}>
                        <h5 style={{ color: 'white', fontWeight: 700 }}>Expert Led <i className="bi bi-person-workspace ms-2" style={{ color: 'var(--accent-custom)' }}></i></h5>
                        <small style={{ color: 'var(--text-secondary)' }}>Train with industry veterans.</small>
                    </div>

                </div>
            </div>
        </section>
    );
}
