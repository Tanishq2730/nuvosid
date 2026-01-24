"use client";
import { useEffect, useRef, useState } from "react";
import data from "@/data/counter.json";

export default function Counter() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countersRef = useRef([]);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        function animateCount(el, end) {
          let obj = { value: 0 };
          gsap.to(obj, {
            value: end,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%", // Animates when top of section hits 80% of viewport
              once: true,
            },
            onUpdate: () => {
              if (el) el.innerText = Math.floor(obj.value);
            },
            onComplete: () => {
              if (el) el.innerText = end;
            }
          });
        }

        countersRef.current.forEach((el, idx) => {
          if (el) animateCount(el, data[idx].number);
        });
      });
    });
  }, []);

  return (
    <div className="mainSection" ref={sectionRef}>
      <div className="container">
        <div className="HeadingSection">
          <h1>
            Building Tomorrow, <br />
            Today with <i>Nuvosid</i>
          </h1>
        </div>
        <div className="counterDetail">
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col-md-3 col-sm-6 col-12">
                <div className="detail">
                  <h1 ref={(el) => (countersRef.current[index] = el)}>0</h1>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
