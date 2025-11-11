import React from "react";
import "./Shoppers.css";

export default function Shoppers() {
  return (
    <section id="for-shoppers" className="shop">
      {/* Animated Background Elements */}
      <div className="shop__holiday-lights"></div>
      <div className="shop__snowflakes">
        <div className="shop__snowflake"></div>
        <div className="shop__snowflake"></div>
        <div className="shop__snowflake"></div>
        <div className="shop__snowflake"></div>
        <div className="shop__snowflake"></div>
        <div className="shop__snowflake"></div>
        <div className="shop__snowflake"></div>
        <div className="shop__snowflake"></div>
        <div className="shop__snowflake"></div>
        <div className="shop__snowflake"></div>
      </div>

      {/* Background Image */}
      <div
        className="shop__bg"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/6530836/pexels-photo-6530836.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
        }}
        aria-hidden="true"
      ></div>

      {/* Overlay */}
      <div className="shop__overlay"></div>

      <div className="shop__container">
        <p className="shop__tag">FOR SHOPPERS</p>

        <h2 className="shop__title">
          Discover Local Gems.
          <br /> Keep It In The Community.
        </h2>

        <p className="shop__text">
          Tired of scrolling past the same big-box chains and struggling to find truly local places
          that feel right? Thryft helps you rediscover shops, cafés, barbers, boutiques, repair
          services and more — right in your own neighborhood.
        </p>

        <p className="shop__text">
          Enjoy exclusive local discounts, seasonal offers, and instant access to menus and services
          so you can make quick decisions. Support real people, real passion, and real community
          impact. No more generic shopping — keep it local, simple, warm, and rewarding.
        </p>

        <p className="shop__note">
          Start browsing now. Our mobile app launches next month for on-the-go holiday shopping.
        </p>

        {/* CTAs */}
        <div className="shop__actions">
          <a href="#explore" className="btn-ghost">
            Explore Local Businesses
          </a>
          <a href="#download" className="btn-ghost btn-ghost--alt">
            Mobile App Soon
          </a>
        </div>
      </div>
    </section>
  );
}