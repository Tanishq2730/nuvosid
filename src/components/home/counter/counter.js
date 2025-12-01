"use client";
import { useEffect, useRef, useState } from "react";
import data from "@/data/counter.json";

export default function Counter() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countersRef = useRef([]);

  useEffect(() => {
    function animateCount(el, end) {
      let start = 0;
      let duration = 5000; // 2 seconds
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const value = Math.min(Math.floor((progress / duration) * end), end);
        el.innerText = value;
        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          el.innerText = end; // ensure correct end value
        }
      }
      window.requestAnimationFrame(step);
    }

    function onScroll() {
      if (!sectionRef.current || hasAnimated) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger animation when section is at least half in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        countersRef.current.forEach((el, idx) => {
          if (el) animateCount(el, data[idx].number);
        });
        setHasAnimated(true);
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll);
    // Check once if section already visible on mount
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasAnimated]);

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
              <div key={index} className="col-md-3">
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
