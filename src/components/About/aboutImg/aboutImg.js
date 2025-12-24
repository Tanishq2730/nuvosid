// import styles from "./About.module.scss";

export default function AboutImg() {
  return (
    <section>
      <div className="mainSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <img
              className="aboutImgsection"
                src="/assets/about.jpg"
                alt="About Us"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
