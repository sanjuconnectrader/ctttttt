// Hero.jsx
import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home" role="banner" aria-label="Thryft hero">
      {/* Background decorative elements */}
      <div className="hero__decorations">
        <div className="hero__decoration hero__decoration--snowflake-1">❄</div>
        <div className="hero__decoration hero__decoration--snowflake-2">❄</div>
        <div className="hero__decoration hero__decoration--snowflake-3">❄</div>
        <div className="hero__decoration hero__decoration--holly-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3L14 7L18 8L15 11L16 15L12 13L8 15L9 11L6 8L10 7L12 3Z" fill="#D7C6A5" opacity="0.6"/>
          </svg>
        </div>
        <div className="hero__decoration hero__decoration--holly-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3L14 7L18 8L15 11L16 15L12 13L8 15L9 11L6 8L10 7L12 3Z" fill="#D7C6A5" opacity="0.4"/>
          </svg>
        </div>
      </div>

      {/* Left: copy */}
      <div className="hero__copy">
        <div className="hero__badge">
          <span className="hero__badge-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15 9L22 9L16 13L18 20L12 16L6 20L8 13L2 9L9 9L12 2Z" fill="#D7C6A5"/>
            </svg>
          </span>
          Shop Local • Save Local • Support Local
        </div>

        <h1 className="hero__title" aria-label="Shop Local. Save Local. Support Local.">
          <span className="hero__title-line">Shop Local.</span>
          <span className="hero__title-line">Save Local.</span>
          <span className="hero__title-line">Support Local.</span>
        </h1>

        <p className="hero__subtitle">
          Thryft helps people find and support the small businesses that make their town special.
          Keep your money in the community and help local shops grow — especially this holiday season.
        </p>

        <div className="hero__actions" role="group" aria-label="Primary actions">
          <a href="#for-shoppers" className="btn btn--primary" aria-label="Explore Local Businesses">
            <span className="btn__icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M20 12V20H4V12H2V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V12H20Z" fill="currentColor"/>
                <path d="M13 12.67L15.59 10.09L16.66 11.16L12 15.82L7.34 11.16L8.41 10.09L11 12.67V2H13V12.67Z" fill="currentColor"/>
              </svg>
            </span>
            Explore Local Businesses
          </a>

          <a href="#for-businesses" className="btn btn--secondary" aria-label="List Your Business Free">
            <span className="btn__icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9C7.9 1 7 1.9 7 3V19C7 20.1 7.9 21 9 21H12V19H9V3H12V7H17V19H15V21H19C20.1 21 21 20.1 21 19V9H17V3H21V9Z" fill="currentColor"/>
              </svg>
            </span>
            List Your Business Free
          </a>
        </div>

        {/* Trust indicators */}
        <div className="hero__trust" aria-label="Trust indicators">
          <div className="hero__trust-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="#D7C6A5" opacity="0.8"/>
              <path d="M16 8L11 13L8 10" stroke="#430B04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>100% Free for Shoppers</span>
          </div>
          <div className="hero__trust-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="#D7C6A5" opacity="0.8"/>
              <path d="M16 8L11 13L8 10" stroke="#430B04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Verified Local Businesses</span>
          </div>
        </div>
      </div>

      {/* Right: image (hidden on mobile via CSS) */}
      <div className="hero__media">
        <div className="hero__image-container">
          <img
            className="hero__img"
            src="./heroimg.jpg"
            alt="Cozy winter street market with people shopping locally at holiday market"
            loading="eager"
            fetchpriority="high"
          />
          <div className="hero__image-overlay" aria-hidden="true"></div>
          <div className="hero__image-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L15 9L22 9L16 13L18 20L12 16L6 20L8 13L2 9L9 9L12 2Z" fill="#430B04"/>
            </svg>
            Local Holiday Market
          </div>
        </div>
      </div>
    </section>
  );
}
