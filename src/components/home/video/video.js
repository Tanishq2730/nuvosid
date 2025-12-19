"use client";
import React from "react";

export default function Video() {
  return (
    <section>
      <div className="mainSection">
        <div className="container">
          <div className="videoSection">
            <div className="videoWrapper">
              <iframe
                width="100%"
                height="715"
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
