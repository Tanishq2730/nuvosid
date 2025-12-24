"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="hero-footer container-fluid d-flex flex-column">
      {/* Center hero text */}
      <section className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center ctaSection">
        <h1 className="hero-title">
          Have a great idea in mind<span className="question">?</span>
        </h1>
        <h2 className="hero-subtitle calligraphy-font">lets make it real</h2>

        <button className="btn btn-light hero-cta-btn d-inline-flex align-items-center">
          Lets Work Together
          <i className="bi bi-arrow-right" />
        </button>
      </section>

      {/* Footer area */}
      <footer className="footer-main">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-12 col-lg-12">
              <Link href="/" className="footerLink">
                <div className="footerlogo">
                  <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    fill
                    position="relative"
                    priority
                  />
                </div>
              </Link>
            </div>

            <div className="col-md-12 col-lg-6 mb-4 mb-md-0">
              {/* <Link href="/" className="footerLink">
                <div className="footerlogo">
                  <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    fill
                    position="relative"
                    priority
                  />
                </div>
              </Link> */}
              <p className="footer-text">
                Sit Amet Consectetur. Sed Semper Nisl Consectetur Iaculis Risus
                Purus Eget Et Ante. Sed At Sollicitudin Nisi Eget. Sit
                Suspendisse Commodo Etiam Dolor
              </p>

              <div className="social-icons d-flex align-items-center mt-3">
                <a href="#" aria-label="LinkedIn">
                  <i className="bi bi-linkedin" />
                </a>
                <a href="#" aria-label="Dribbble">
                  <i className="bi bi-dribbble" />
                </a>
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

            <div className="col-md-6 d-flex flex-column align-items-md-end align-items-start mt-auto">
              <nav className="footer-links mb-3">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Construction</a>
                <a href="#">Consultancy</a>
                <a href="#">Academy</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
              </nav>

              <nav className="footer-links small">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms Of Services</a>
                {/* <a href="#">Cookie Settings</a> */}
              </nav>
            </div>
          </div>

          <div className="footer-bottom text-center mt-4">
            @2025. All Right Reserved by Nuvosid
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          type="button"
          className="back-to-top-btn"
          onClick={handleTop}
          aria-label="Back to top"
        >
          <i className="bi bi-arrow-up" />
        </button>
      )}
    </main>
  );
}
