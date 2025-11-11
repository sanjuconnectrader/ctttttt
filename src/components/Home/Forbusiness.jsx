import React from "react";
import "./Forbusiness.css";

function Badge({ children }) {
  return (
    <span className="biz-badge" role="note" aria-label="For Businesses">
      <span className="biz-badge__icon" aria-hidden="true">
        {/* briefcase */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M8 7V6a4 4 0 0 1 8 0v1h2.5A2.5 2.5 0 0 1 21 9.5V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9.5A2.5 2.5 0 0 1 5.5 7H8zm2 0h4V6a2 2 0 1 0-4 0v1z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </span>
      {children}
    </span>
  );
}

function IconTrial() {
  return (
    <svg className="biz-icon" viewBox="0 0 24 24" aria-hidden="true">
      {/* gift */}
      <path d="M20 7h-3.17a3 3 0 1 0-4.66-3.5A3 3 0 1 0 7.17 7H4a1 1 0 0 0-1 1v3h18V8a1 1 0 0 0-1-1Zm-9-3a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2Zm6 0a1 1 0 0 1 0 2h-2a1 1 0 1 1 0-2h2ZM3 13v7a2 2 0 0 0 2 2h5v-9H3Zm11 0v9h5a2 2 0 0 0 2-2v-7h-7Z"/>
    </svg>
  );
}
function IconVisibility() {
  return (
    <svg className="biz-icon" viewBox="0 0 24 24" aria-hidden="true">
      {/* eye */}
      <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/>
    </svg>
  );
}
function IconPromos() {
  return (
    <svg className="biz-icon" viewBox="0 0 24 24" aria-hidden="true">
      {/* stacked badges */}
      <path d="M7 7h10v4H7V7Zm-2 6h10v4H5v-4Zm12 0h4v4h-4v-4Z"/>
    </svg>
  );
}
function IconNoContract() {
  return (
    <svg className="biz-icon" viewBox="0 0 24 24" aria-hidden="true">
      {/* document with slash (no contract) */}
      <path d="M14 2H6a2 2 0 0 0-2 2v12.59L3.29 18.3a1 1 0 0 0 1.42 1.4L20.7 3.7A1 1 0 0 0 19.3 2.3L16 5.6V4a2 2 0 0 0-2-2Zm-2 6h2.59L12 10.59V8ZM8 22h10a2 2 0 0 0 2-2V7.41l-2 2V20H9.41l-2 2H8Z"/>
    </svg>
  );
}
function IconLocal() {
  return (
    <svg className="biz-icon" viewBox="0 0 24 24" aria-hidden="true">
      {/* map pin */}
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
    </svg>
  );
}
function IconBoost() {
  return (
    <svg className="biz-icon" viewBox="0 0 24 24" aria-hidden="true">
      {/* trending up */}
      <path d="M3 17h2.59l4.3-4.3 3 3L20.59 8H17V6h6v6h-2V8.41l-6.11 6.1-3-3L6 15.41V17H3Z"/>
    </svg>
  );
}

function Card({ icon, title, children }) {
  return (
    <article className="biz-card">
      <div className="biz-card__iconwrap">{icon}</div>
      <h3 className="biz-card__title">{title}</h3>
      <p className="biz-card__text">{children}</p>
    </article>
  );
}

export default function Forbusiness() {
  return (
    <section className="forbusiness" id="for-businesses" aria-labelledby="biz-title">
      {/* Animated Snowflakes */}
      <div className="biz__snowflakes">
        <div className="biz__snowflake">❄</div>
        <div className="biz__snowflake">❄</div>
        <div className="biz__snowflake">❄</div>
        <div className="biz__snowflake">❄</div>
        <div className="biz__snowflake">❄</div>
        <div className="biz__snowflake">❄</div>
        <div className="biz__snowflake">❄</div>
        <div className="biz__snowflake">❄</div>
      </div>
      
      <div className="biz__holiday-lights"></div>

      <div className="biz-container">
        <div className="biz-head">
          <Badge>For Businesses</Badge>
          <h2 className="biz-title" id="biz-title">
            Join the holiday shopping rush
          </h2>
        </div>

        <div className="biz-grid" role="list">
          <Card icon={<IconTrial />} title="Free Holiday Trial">
            No card required. Start listing your festive business immediately with zero risk.
          </Card>

          <Card icon={<IconVisibility />} title="Festive Visibility">
            Appear based on location first, then customer reputation—no paid advantages.
          </Card>

          <Card icon={<IconPromos />} title="Holiday Promotions">
            Share seasonal bundles, gift cards, and festive discounts with local shoppers.
          </Card>

          <Card icon={<IconNoContract />} title="No Contracts">
            Cancel anytime. Just $37.95/month after the free holiday trial period.
          </Card>

          <Card icon={<IconLocal />} title="Local Holiday Focus">
            Connect with nearby customers who value authentic holiday experiences.
          </Card>

          <Card icon={<IconBoost />} title="Boost Holiday Sales">
            Increase visibility and attract new customers during the magical holiday season.
          </Card>
        </div>
      </div>
    </section>
  );
}