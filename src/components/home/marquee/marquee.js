"use client";
import React from "react";

const Marquee = () => {
  const items = [
    { id: "01", text: "Commercial High-Rise" },
    { id: "02", text: "Large-Scale Infrastructure" },
    { id: "03", text: "Industrial/Mining" },
    { id: "04", text: "Sustainable Residential" },
    { id: "05", text: "Institutional/Education" },
    // { id: "06", text: "Neon Light" },
  ];

  return (
    <div className="mainSection">
      <div className="container-fluid marquee-wrapper">
        <div className="marquee">
          <div className="track">
            {items.map((item, index) => (
              <span key={`${item.id}-${index}`} className="item">
                <sup className="num">{item.id}</sup>
                {item.text}
                <span className="slash"> / </span>
              </span>
            ))}

            {/* Duplicate for infinite loop */}
            {items.map((item, index) => (
              <span key={`dup-${item.id}-${index}`} className="item">
                <sup className="num">{item.id}</sup>
                {item.text}
                <span className="slash"> / </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
