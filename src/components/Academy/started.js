import Image from "next/image";

export default function Started() {
  return (
    <section className="startedSection">
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <h1 className="sectionTitle">
              This is how we <span className="accent">Started!</span>
            </h1>
          </div>
        </div>

        {/* Top Row: Stats & Video side-by-side */}
        <div className="row gx-lg-5 align-items-center">
          <div className="col-lg-7">
            <div className="statsGrid">
              <div className="premiumStatBox">
                <span className="statNum">50+</span>
                <span className="statLabel">Elite Teachers</span>
              </div>
              <div className="premiumStatBox">
                <span className="statNum">100+</span>
                <span className="statLabel">Expert Courses</span>
              </div>
              <div className="premiumStatBox">
                <span className="statNum">1000+</span>
                <span className="statLabel">Global Careers</span>
              </div>
            </div>
          </div>

          <div className="col-lg-5 mt-5 mt-lg-0">
            <div className="premiumVideoWrapper">
              <div className="videoInner">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/79vZT-2rMLg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Full width Message Card */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="messageCard">
              <h3 className="messageTitle">
                Dear Students and <span className="highlight">Learners,</span>
              </h3>

              <div className="messageBody">
                <p>
                  I am delighted to welcome you to Surpass Academy, a place where we strive to exceed
                  boundaries and push the limits of what is possible. At Surpass, we believe that
                  education is not just about acquiring knowledge but also about honing practical
                  skills that can transform your career.
                </p>
                <p>
                  As an entrepreneur and AEC consultant with years of experience, I have seen the gap
                  between conventional education and the skills required in the industry. This
                  realization led me to establish Surpass Academy, where we bridge this gap by providing
                  industry-aligned courses designed to equip you with the skills needed to excel in
                  the field of Architecture, Engineering, and Construction.
                </p>
                <p>
                  At Surpass, we are not just focused on theoretical learning but also on practical
                  application. Our courses are designed to provide you with hands-on experience and
                  real-world insights that can only be gained from years of industry experience.
                  Whether you are looking to enhance your technical skills or seeking motivation
                  to pursue your dreams, Surpass Academy is here to support and guide you every
                  step of the way.
                </p>
                <p>
                  I invite you to join us on this exciting journey of learning and discovery.
                  Together, let's surpass expectations and achieve greatness.
                </p>
              </div>

              <div className="founderBio">
                <div className="founderThumb">
                  <div style={{ background: '#222', width: '100%', height: '100%' }}>
                    <Image src="/assets/sidhart.png" alt="Founder" width={100} height={100} />
                  </div>
                </div>
                <div className="founderMeta">
                  <h4>Siddharth Sharma</h4>
                  <p>Founder & CEO, Surpass Academy</p>
                  <ul>
                    <li>B.Tech Civil Engineering</li>
                    <li>M.Tech Structural, MSc. Interior Design</li>
                    <li>Member FFSC & IIID</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
