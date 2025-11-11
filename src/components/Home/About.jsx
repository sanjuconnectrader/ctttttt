import React from "react";
import "./About.css";

export default function About({
  imageUrl = "./christmasshop.jpg", // Cozy winter main street with local shops
  onGetStarted, // optional handler; defaults to navigate to /join
}) {
  const handleClick = () => {
    if (typeof onGetStarted === "function") return onGetStarted();
    window.location.assign("/join");
  };

  return (
    <section className="about" id="about">
      {/* Animated Snowflakes */}
      <div className="about__snowflakes">
        <div className="about__snowflake">❄</div>
        <div className="about__snowflake">❄</div>
        <div className="about__snowflake">❄</div>
        <div className="about__snowflake">❄</div>
        <div className="about__snowflake">❄</div>
        <div className="about__snowflake">❄</div>
        <div className="about__snowflake">❄</div>
        <div className="about__snowflake">❄</div>
      </div>

      <div className="about__container">
        {/* LEFT: Content */}
        <div className="about__text">
          <p className="about__eyebrow">ABOUT THRYFT</p>
          <h2 className="about__title">Fair visibility for local businesses.</h2>

          {/* First two paragraphs (from your About content) */}
          <p className="about__body">
            Thryft was created to help small businesses connect with people who
            live nearby. You shouldn't have to compete with large chains or
            spend extra to show up in your own town.
          </p>
          <p className="about__body">
            Visibility on Thryft is based on location first and reputation
            second. Every business is treated the same. Thryft will always be
            free for shoppers and fair for businesses.
          </p>

          {/* Added two more paragraphs (from your Mission content) */}
          <p className="about__body">
            Small businesses are the heart of every community. They are owned
            and run by people who live and work here and care about what happens
            here.
          </p>
          <p className="about__body">
            Thryft makes it easier for shoppers to find and support local
            businesses, especially during the holiday season.
          </p>

          <button className="about__cta" type="button" onClick={handleClick}>
            Get started
          </button>
        </div>

        {/* RIGHT: Image (matches left column height) */}
        <div className="about__media" aria-hidden="true">
          <img
            className="about__img"
            src={imageUrl}
            alt="Cozy winter main street with local shops"
            width="1200"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <div className="about__image-overlay"></div>
        </div>
      </div>
    </section>
  );
}