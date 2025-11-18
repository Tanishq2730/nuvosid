"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Construction" },
    { href: "/services", label: "Consultancy" },
    { href: "/academy", label: "Academy" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`${styles.header}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          {/* Logo and Brand */}
          <Link href="/" className={styles.logoWrapper}>
            <div className={styles.logoContainer}>
              <Image
                src="/assets/logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.href + link.label} className={styles.navItem}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${
                      pathname === link.href ? styles.active : ""
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.menuOpen : ""}`}
        onClick={toggleMenu}
      >
        <nav
          className={`${styles.mobileNav} ${isMenuOpen ? styles.menuOpen : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.href + link.label} className={styles.mobileNavItem}>
                <Link
                  href={link.href}
                  className={`${styles.mobileNavLink} ${
                    pathname === link.href ? styles.active : ""
                  }`}
                  onClick={toggleMenu}
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
