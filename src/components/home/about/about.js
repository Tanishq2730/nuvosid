import styles from "./About.module.scss";

export default function About() {
  return (
    <section>
      <div className="mainSection">
        <div className="container">
          <div className="aboutSection">
            <div className="HeadingSection">
              <h1>About Us</h1>
            </div>
            <div className="aboutContent">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="aboutImage">
                    <img
                      src="/assets/aboutSection1.png"
                      alt="About Us"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="middleSection">
                  <div className="middleSectionContent">
                    <p>
                      Nuvosid is built on the trusted reputation of AVS
                      Engineers Group, a company with over two decades of
                      excellence in architecture and engineering. Our mission is
                      to create sustainable, high-performance spaces through
                      advanced design, construction expertise, and complete
                      project delivery. As we grow, our services now also
                      include turnkey construction execution, professional
                      project management, and specialized education and skills
                      training through Surpass Academy.
                    </p>
                    <button className="btn btn-group knowBtn">Know More</button>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="aboutImage">
                    <img
                      src="/assets/aboutSection2.png"
                      alt="About Us"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
