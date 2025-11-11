import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  // Works in Vite and CRA since the image is in /public
  const LOGO = `${import.meta?.env?.BASE_URL ?? "/"}thryft.png`;
  // If you prefer CRA style, you can also use:
  // const LOGO = process.env.PUBLIC_URL + "/thryft.png";

  return (
    <footer className="ft" id="footer">
      <div className="ft__inner">
        {/* Brand + tagline */}
        <div className="ft__brand">
          <a href="#home" className="ft__logo" aria-label="Thryft Home">
            <img src={LOGO} alt="Thryft" className="ft__logoImg" />
          </a>
          <p className="ft__tagline">Shop Local. Save Local. Support Local.</p>
        </div>

        {/* Nav columns */}
        <nav className="ft__nav" aria-label="Footer">
          <div className="ft__col">
            <h4 className="ft__title">Explore</h4>
            <ul className="ft__list">
              <li><a href="#home">Home</a></li>
              <li><a href="#why-thryft">Why Thryft?</a></li>
              <li><a href="#for-shoppers">For Shoppers</a></li>
              <li><a href="#for-businesses">For Businesses</a></li>
            </ul>
          </div>

          <div className="ft__col">
            <h4 className="ft__title">Company</h4>
            <ul className="ft__list">
              <li><a href="#about">About</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#join">Join Us</a></li>
            </ul>
          </div>

          {/* CTA buttons */}
          <div className="ft__col ft__cta">
            <h4 className="ft__title">Get Started</h4>
            <div className="ft__actions">
              <a href="#explore" className="th-btn">Explore Local Businesses</a>
              <a href="#join" className="th-btn">List Your Business Free</a>
            </div>
          </div>
        </nav>
      </div>

      <div className="ft__bar">
        <p>© {year} Thryft — Built for local communities.</p>
      </div>
    </footer>
  );
}
