import React from "react";
import "./Mission.css";

export default function Mission({
  imageUrl = "./mission.jpg",
  // ^ Snowy landscape with warm cabin lights — tasteful winter vibe
  onGetStarted, // optional handler; defaults to navigating to /join
}) {
  const handleClick = () => {
    if (typeof onGetStarted === "function") return onGetStarted();
    window.location.assign("/join");
  };

  return (
    <section className="mission" id="mission">
      {/* Animated Snowflakes */}
      <div className="mission__snowflakes">
        <div className="mission__snowflake">❄</div>
        <div className="mission__snowflake">❄</div>
        <div className="mission__snowflake">❄</div>
        <div className="mission__snowflake">❄</div>
        <div className="mission__snowflake">❄</div>
        <div className="mission__snowflake">❄</div>
        <div className="mission__snowflake">❄</div>
        <div className="mission__snowflake">❄</div>
      </div>

      <div className="mission__container">
        {/* LEFT: Image */}
        <div className="mission__media" aria-hidden="true">
          <img
            className="mission__img"
            src={imageUrl}
            alt="Winter town scene symbolizing local community support"
            width="1200"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <div className="mission__image-overlay"></div>
        </div>

        {/* RIGHT: Content */}
        <div className="mission__text">
          <p className="mission__eyebrow">OUR MISSION</p>
          <h2 className="mission__title">Shop local. Strengthen community.</h2>

          <p className="mission__body">
            Small businesses are the heart of every community. They are owned and
            run by people who live here and care about what happens here.
          </p>
          <p className="mission__body">
            Thryft makes it easier for shoppers to find and support local
            businesses—especially during the holiday season—while keeping money
            in the neighborhood and helping local shops grow.
          </p>

          <button className="mission__cta" type="button" onClick={handleClick}>
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}