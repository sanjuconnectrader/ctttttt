import React from "react";
import "./Forshoppers.css";

function IconGift() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 7h3a2.5 2.5 0 0 0 0-5c-1.8 0-2.9 1.3-3.6 2.6C10.7 3.3 9.6 2 7.8 2a2.5 2.5 0 0 0 0 5h3v2H4v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7h-8V5h3zM7.8 4a.5.5 0 0 1 0 1H7a1 1 0 1 1 0-2c.7 0 1.3.5 1.8 1zM16.2 3a1 1 0 1 1 0 2h-.8a.5.5 0 0 1 0-1c.5 0 1-.4 1-.9zM6 11h5v9H6v-9zm7 9v-9h5v9h-5z"/>
    </svg>
  );
}
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 4.6 7 13 7 13s7-8.4 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
    </svg>
  );
}
function IconDeals() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 12l7.5 9a2 2 0 0 0 3 0L21 12a2 2 0 0 0 0-2.6L14.5 1.9a2 2 0 0 0-3 0L3 9.4A2 2 0 0 0 3 12zm6-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2 6l4-4"/>
    </svg>
  );
}
function IconList() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h2v2H4V6zm4 0h12v2H8V6zM4 11h2v2H4v-2zm4 0h12v2H8v-2zM4 16h2v2H4v-2zm4 0h12v2H8v-2z"/>
    </svg>
  );
}
function IconSmile() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm-3 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6.5 6a5.5 5.5 0 0 0 9 0h-2a3.5 3.5 0 0 1-5 0h-2z"/>
    </svg>
  );
}
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h10V4H7zm4 14h2v2h-2v-2z"/>
    </svg>
  );
}

export default function Forshoppers() {
  return (
    <section className="fs" id="for-shoppers">
      {/* Animated Snowflakes */}
      <div className="fs__snowflakes">
        <div className="fs__snowflake">❄</div>
        <div className="fs__snowflake">❄</div>
        <div className="fs__snowflake">❄</div>
        <div className="fs__snowflake">❄</div>
        <div className="fs__snowflake">❄</div>
        <div className="fs__snowflake">❄</div>
        <div className="fs__snowflake">❄</div>
        <div className="fs__snowflake">❄</div>
      </div>
      
      <div className="fs__holiday-lights"></div>

      <div className="fs__container">
        <div className="fs__pill">
          <IconGift />
          <span>For Shoppers</span>
        </div>

        <h2 className="fs__title">Discover local holiday magic</h2>

        <div className="fs__grid">
          <article className="fs-card">
            <div className="fs-card__icon"><IconGift /></div>
            <h3 className="fs-card__title">Discover Holiday Magic</h3>
            <p className="fs-card__body">
              Find unique local businesses and seasonal specials that bring the holiday spirit to life.
            </p>
          </article>

          <article className="fs-card">
            <div className="fs-card__icon"><IconPin /></div>
            <h3 className="fs-card__title">Festive Finds Nearby</h3>
            <p className="fs-card__body">
              See businesses closest to you first, decorated and ready for the holiday season.
            </p>
          </article>

          <article className="fs-card">
            <div className="fs-card__icon"><IconDeals /></div>
            <h3 className="fs-card__title">Exclusive Holiday Deals</h3>
            <p className="fs-card__body">
              Access special winter discounts and festive bundles available only through Thryft.
            </p>
          </article>

          <article className="fs-card">
            <div className="fs-card__icon"><IconList /></div>
            <h3 className="fs-card__title">Instant Holiday Access</h3>
            <p className="fs-card__body">
              Browse holiday menus, seasonal services, and gift ideas without waiting.
            </p>
          </article>

          <article className="fs-card">
            <div className="fs-card__icon"><IconSmile /></div>
            <h3 className="fs-card__title">Spread Holiday Cheer</h3>
            <p className="fs-card__body">
              Your purchases directly support local families and spread joy in your community.
            </p>
          </article>

          <article className="fs-card">
            <div className="fs-card__icon"><IconPhone /></div>
            <h3 className="fs-card__title">Coming Soon: Mobile App</h3>
            <p className="fs-card__body">
              Full mobile experience launching next month for magical holiday shopping.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}