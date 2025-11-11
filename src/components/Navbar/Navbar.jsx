import React, { useState, useEffect, useCallback } from "react";
import "./Navbar.css";

export default function ThryftNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [offset, setOffset] = useState(0); // dynamic sticky header height

  // --- compute current header height for proper offset ---
  const computeOffset = useCallback(() => {
    const header = document.querySelector(".th-nav");
    const h = header ? header.getBoundingClientRect().height + 6 : 0; // small buffer
    setOffset(h);
  }, []);

  useEffect(() => {
    computeOffset();
    window.addEventListener("resize", computeOffset);
    return () => window.removeEventListener("resize", computeOffset);
  }, [computeOffset]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { label: "HOME", href: "#home" },
    { label: "WHY THRYFT?", href: "#why-thryft" },
    { label: "FOR SHOPPERS", href: "#for-shoppers" },
    { label: "FOR BUSINESSES", href: "#for-businesses" },
    { label: "ABOUT", href: "#about" },
    { label: "PRICING", href: "#pricing" },
    { label: "MISSION", href: "#mission" },
    { label: "JOIN US", href: "#join" },
  ];

  // ---------- Smooth scroll helper (with sticky offset) ----------
  const smoothScrollTo = useCallback(
    (hash) => {
      if (!hash || hash === "#") return;
      const id = hash.startsWith("#") ? hash.slice(1) : hash;
      const el = document.getElementById(id);
      if (!el) return;

      const top =
        window.pageYOffset + el.getBoundingClientRect().top - (offset || 0);

      window.scrollTo({ top, behavior: "smooth" });
    },
    [offset]
  );

  // Handle in-page anchor clicks (desktop + mobile)
  const onNavClick = (e, href) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(href);
      setOpen(false);
      if (window.history.replaceState) {
        window.history.replaceState(null, "", href);
      } else {
        window.location.hash = href;
      }
    }
  };

  // If page loads with a hash (or hash changes), scroll smoothly to it
  useEffect(() => {
    const handleHashChange = () => {
      if (!window.location.hash) return;
      smoothScrollTo(window.location.hash);
    };

    if (window.location.hash) {
      setTimeout(() => smoothScrollTo(window.location.hash), 0);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [smoothScrollTo]);

  // --- public logo path ---
  // Works with Vite or CRA since the file is in /public
  const LOGO = `${import.meta?.env?.BASE_URL ?? "/"}thryft.png`;

  return (
    <>
      {/* Snow Container */}
      <div className="snow-container" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="snowflake" />
        ))}
      </div>

      <header className={`th-nav ${scrolled ? "th-nav--scrolled" : ""}`}>
        <div className="th-nav__inner">
          <a
            className="th-nav__brand"
            href="#home"
            aria-label="Thryft home"
            onClick={(e) => onNavClick(e, "#home")}
          >
            {/* Image logo only (no text) */}
            <img
              className="th-nav__logo th-nav__logo--img"
              src={LOGO}
              alt="Thryft"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="th-nav__menu" aria-label="Primary navigation">
            {menu.map((item) => (
              <a
                key={item.label}
                className="th-nav__link"
                href={item.href}
                onClick={(e) => onNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`th-nav__toggle ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Mobile Navigation */}
          <nav
            className={`th-nav__menu--mobile ${open ? "is-open" : ""}`}
            aria-label="Mobile navigation"
          >
            <div className="th-nav__mobile-header">
              <span className="th-nav__mobile-title">Menu</span>
              <button
                className="th-nav__mobile-close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <div className="th-nav__mobile-links">
              {menu.map((item) => (
                <a
                  key={item.label}
                  className="th-nav__link--mobile"
                  href={item.href}
                  onClick={(e) => onNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Overlay */}
          <div
            className={`th-nav__overlay ${open ? "is-open" : ""}`}
            onClick={() => setOpen(false)}
          />
        </div>
      </header>
    </>
  );
}
