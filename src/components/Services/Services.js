import Card from "./card";
import styles from "./Services.module.scss";
import services from "@/data/services.json";

export default function Services() {
  return (
    <section>
      <div className="mainSection">
        <div className="container">
          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-md-4 h-100">
                <Card
                  heading={service.title}
                  imgSrc={service.imgSrc}
                  content={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
