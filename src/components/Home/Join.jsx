import React from "react";
import "./Join.css";

function TButton({ href = "#", children, className = "" }) {
  return (
    <a href={href} className={`th-btn ${className}`}>
      {children}
    </a>
  );
}

export default function Join() {
  return (
    <section id="join" className="join">
      {/* Animated Snowflakes */}
      <div className="join__snowflakes">
        <div className="join__snowflake">❄</div>
        <div className="join__snowflake">❄</div>
        <div className="join__snowflake">❄</div>
        <div className="join__snowflake">❄</div>
        <div className="join__snowflake">❄</div>
        <div className="join__snowflake">❄</div>
        <div className="join__snowflake">❄</div>
        <div className="join__snowflake">❄</div>
      </div>

      <div className="join__container">
        <header className="join__header">
          <p className="join__eyebrow">Join Thryft</p>
          <h2 className="join__title">Shop Local. Save Local. Support Local.</h2>
          <p className="join__lead">
            Thryft connects neighbors with the small businesses that make their town special.
            Shoppers always browse free. Businesses can list for <strong>free until December 10</strong> —
            no card required — then one simple plan at <strong>$37.95/month</strong>.
          </p>
        </header>

        <div className="join__grid">
          {/* Shopper card */}
          <article className="join__card" aria-label="For Shoppers">
            <div className="join__card-body">
              <h3 className="join__card-title">I'm a Shopper</h3>
              <ul className="join__list">
                <li><span className="dot" aria-hidden="true"></span>Find nearby restaurants, coffee, barbers, boutiques & more</li>
                <li><span className="dot" aria-hidden="true"></span>Exclusive local deals & instant access to menus/services</li>
                <li><span className="dot" aria-hidden="true"></span>Keep your money in the community</li>
              </ul>
              <div className="join__actions">
                <TButton href="#explore">Explore Local Businesses</TButton>
              </div>
            </div>
          </article>

          {/* Business card */}
          <article className="join__card" aria-label="For Businesses">
            <div className="join__card-body">
              <h3 className="join__card-title">I'm a Local Business</h3>
              <ul className="join__list">
                <li><span className="dot" aria-hidden="true"></span>Free listing until Dec 10 — go live instantly</li>
                <li><span className="dot" aria-hidden="true"></span>Show products/services, menus, coupons & holiday bundles</li>
                <li><span className="dot" aria-hidden="true"></span>Fair visibility: location first, then reputation</li>
              </ul>
              <div className="join__actions">
                <TButton href="#list">List Your Business Free</TButton>
                <TButton href="#pricing" className="join__btn--ghost">View Pricing</TButton>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}