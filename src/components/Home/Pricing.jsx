import React from "react";
import "./Pricing.css";

export default function Pricing({ onGetStarted }) {
  const handleClick = () => {
    if (typeof onGetStarted === "function") return onGetStarted();
    window.location.assign("/join");
  };

  return (
    <section className="pricing" id="pricing">
      {/* Animated Snowflakes */}
      <div className="pricing__snowflakes">
        <div className="pricing__snowflake">❄</div>
        <div className="pricing__snowflake">❄</div>
        <div className="pricing__snowflake">❄</div>
        <div className="pricing__snowflake">❄</div>
        <div className="pricing__snowflake">❄</div>
        <div className="pricing__snowflake">❄</div>
        <div className="pricing__snowflake">❄</div>
        <div className="pricing__snowflake">❄</div>
      </div>

      <div className="pricing__container">
        <header className="pricing__head">
          <p className="pricing__eyebrow">PRICING</p>
          <h2 className="pricing__title">Simple, fair & built for locals</h2>
          <p className="pricing__sub">
            Free for businesses until <strong>December 10</strong>. After that, one simple plan.
          </p>
        </header>

        <div className="pricing__grid">
          {/* Card 1 — Free until Dec 10 */}
          <article className="pricing__card">
            <div className="pricing__card-body">
              <h3 className="pricing__plan">Free until Dec 10</h3>
              <p className="pricing__price">
                <span className="pricing__amount">$0</span>
                <span className="pricing__per">/now</span>
              </p>
              <ul className="pricing__list">
                <li>A full business profile (products, services, or menu)</li>
                <li>Share coupons and holiday promotions</li>
                <li>Fair visibility — location first, reputation second</li>
                <li>No contracts. Cancel anytime.</li>
              </ul>
              <button className="pricing__btn" onClick={handleClick}>
                Get started
              </button>
            </div>
          </article>

          {/* Card 2 — $37.95 / month */}
          <article className="pricing__card">
            <div className="pricing__badge" aria-hidden="true">Most popular</div>
            <div className="pricing__card-body">
              <h3 className="pricing__plan">Standard</h3>
              <p className="pricing__price">
                <span className="pricing__amount">$37.95</span>
                <span className="pricing__per">/month</span>
              </p>
              <ul className="pricing__list">
                <li>Everything in Free, plus ongoing visibility</li>
                <li>Priority by neighborhood, then reputation</li>
                <li>No ads, upgrades, or pay-to-play boosts</li>
                <li>Transparent, community-first platform</li>
              </ul>
              <button className="pricing__btn" onClick={handleClick}>
                Get started
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}