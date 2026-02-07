import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactUs = () => {
  return (
    <div className="mainSection">
      <div className="contact-wrapper">
        <div className="container contact-card-box">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 text-white">
              <h1 className="main-title">
                {/* Get Your Free <br /> Demo Today! */}
                Have a Project in Mind?<br/> Get Expert Advice.
              </h1>

              <p className="sub-text">
                Partnering with forward-thinking companies worldwide to deliver
                excellence.
              </p>

              

              <div className="mt-4">
                <div className="d-flex align-items-start gap-3 mb-2">
                  <i className="bi bi-telephone" />
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+13075550133" className="d-block text-white">
                      +91 9636043246
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3 mb-2">
                  <i className="bi bi-envelope" />
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:contact@nuvosid.com" className="d-block text-white">
                      nuvosid@gmail.com
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <i className="bi bi-geo-alt" />
                  <div>
                    <strong>Address</strong>
                    <span className="d-block">
                      421-425 S.M. LODHA COMPLEX, NEAR COURT CIRCLE,UDAIPUR-313001 ( RAJASTHAN )
                    </span>
                  </div>
                </div>

                <div className="social-icons d-flex align-items-center mt-3">
                  <a href="#" aria-label="LinkedIn">
                    <i className="bi bi-linkedin" />
                  </a>
                  {/* <a href="#" aria-label="Dribbble">
                    <i className="bi bi-dribbble" />
                  </a> */}
                  <a href="#" aria-label="Instagram">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" aria-label="X">
                    <i className="bi bi-twitter-x" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="form-glass">
                <div className="row">
                  <div className="col-6">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="col-6">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      placeholder="Your Last name"
                    />
                  </div>
                </div>

                <label>Your Email</label>
                <input
                  className="form-control"
                  placeholder="debra.holt@example.com"
                />

                <label>Mobile Number</label>
                <input className="form-control" placeholder="(307) 555-0133" />

                <label>Business Name</label>
                <input
                  className="form-control"
                  placeholder="Add Your Business Name"
                />

                <button className="btn btn-light hero-cta-btn align-items-center w-100">Submit Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
