import React, { useState } from "react";
import "./Whythryft.css";

export default function Whythryft() {
  const [active, setActive] = useState("shopper"); // 'shopper' | 'business'
  const isShopper = active === "shopper";

  // SVG Icons for Toggle Buttons
  const ShopperIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 12V8H4v4h16z" />
      <path d="M12 16v4M8 16v4M16 16v4" />
      <path d="M20 12a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6z" />
      <path d="M16 6a4 4 0 1 0-8 0" />
    </svg>
  );

  const BusinessIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
      <path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />
      <path d="M8 5V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12v3M8 12v3M16 12v3" />
    </svg>
  );

  const ExploreIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const RocketIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 13a8 8 0 0 1 8-8" />
      <path d="M12 5a8 8 0 0 1 8 8" />
      <path d="M12 21a8 8 0 0 0 8-8" />
      <path d="M4 21a8 8 0 0 0 8-8" />
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );

  // SVG Icons for Features
  const ShopperIcons = {
    gift: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="8" width="18" height="14" rx="2" />
        <path d="M12 8V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3M8 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3" />
        <path d="M7 12h10" />
      </svg>
    ),
    map: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    coffee: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    community: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  };

  const BusinessIcons = {
    target: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    trending: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  };

  return (
    <section className="why" id="why-thryft" aria-labelledby="why-title">
      {/* Animated Snowflakes */}
      <div className="why__snowflakes">
        <div className="why__snowflake">❄</div>
        <div className="why__snowflake">❄</div>
        <div className="why__snowflake">❄</div>
        <div className="why__snowflake">❄</div>
        <div className="why__snowflake">❄</div>
        <div className="why__snowflake">❄</div>
        <div className="why__snowflake">❄</div>
        <div className="why__snowflake">❄</div>
      </div>
      
      <div className="why__holiday-lights"></div>

      <div className="why__container">
        <header className="why__header">
          <h2 id="why-title" className="why__title">Why Thryft?</h2>

          <div className="why__role">
            <span className="why__role-label">I Am A</span>
            <div className="why__switch" role="tablist" aria-label="Choose role">
              <button
                role="tab"
                aria-selected={isShopper}
                className={`why__btn why__btn-toggle ${isShopper ? "is-active" : ""}`}
                onClick={() => setActive("shopper")}
              >
                <span className="why__btn-icon">
                  <ShopperIcon />
                </span>
                Shopper
              </button>
              <button
                role="tab"
                aria-selected={!isShopper}
                className={`why__btn why__btn-toggle ${!isShopper ? "is-active" : ""}`}
                onClick={() => setActive("business")}
              >
                <span className="why__btn-icon">
                  <BusinessIcon />
                </span>
                Local Business
              </button>
            </div>
          </div>
        </header>

        {/* Accordion */}
        <div className="why__accordion">
          {/* Shopper panel */}
          <div
            className={`why__panel ${isShopper ? "open" : ""}`}
            role="region"
            aria-labelledby="tab-shopper"
          >
            <div className="why__panel-inner">
              <div className="why__panel-header">
                <h3 className="why__panel-title">For Shoppers</h3>
                <div className="why__panel-image">
                  <img 
                    src="./shopping2.jpg" 
                    alt="People shopping at local Christmas market with festive decorations"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="why__content-grid">
                <div className="why__feature">
                  <div className="why__icon">
                    {ShopperIcons.gift}
                  </div>
                  <div className="why__feature-content">
                    <h4 className="why__feature-title">Discover Local Gems</h4>
                    <p className="why__text">
                      Tired of scrolling past the same big-box chains and struggling to find truly local
                      spots that feel right for your holidays? Find the local gems that deserve your support
                      and bring back that sense of community.
                    </p>
                  </div>
                </div>

                <div className="why__feature">
                  <div className="why__icon">
                    {ShopperIcons.map}
                  </div>
                  <div className="why__feature-content">
                    <h4 className="why__feature-title">Personalized Discovery</h4>
                    <p className="why__text">
                      Thryft shows you nearby restaurants for festive meals, coffee shops for cozy breaks,
                      barbers for fresh looks, boutiques for unique gifts, repair shops for winter fixes,
                      and more – all tailored to your location.
                    </p>
                  </div>
                </div>

                <div className="why__feature">
                  <div className="why__icon">
                    {ShopperIcons.coffee}
                  </div>
                  <div className="why__feature-content">
                    <h4 className="why__feature-title">Exclusive Holiday Deals</h4>
                    <p className="why__text">
                      Enjoy exclusive discounts and specials to save money right away on everything from 
                      holiday wrapping paper to seasonal treats, plus instant access to products, services, 
                      and menus for easy planning and quick decisions.
                    </p>
                  </div>
                </div>

                <div className="why__feature">
                  <div className="why__icon">
                    {ShopperIcons.community}
                  </div>
                  <div className="why__feature-content">
                    <h4 className="why__feature-title">Community Connection</h4>
                    <p className="why__text">
                      While you're discovering these deals, you're also connecting with the businesses run
                      by your neighbors, rediscovering the personal touch that's getting lost in the rush of
                      corporate options. No more settling for impersonal shopping – Thryft keeps it local,
                      simple, and rewarding.
                    </p>
                  </div>
                </div>
              </div>

              <div className="why__cta-section">
                <div className="why__cta-image">
                  <img 
                    src="./shopping.jpg" 
                    alt="Person using mobile app to browse local holiday shopping deals"
                    loading="lazy"
                  />
                </div>
                <div className="why__cta-content">
                  <p className="why__text why__text-cta">
                    Start using Thryft now through our web app to uncover hidden gems near you. The mobile
                    app launches next month for on-the-go access during your busy holiday errands.
                  </p>
                  <div className="why__actions">
                    <a href="#explore" className="why__btn why__btn-ghost">
                      <span className="why__btn-icon">
                        <ExploreIcon />
                      </span>
                      Explore Local Businesses
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business panel */}
          <div
            className={`why__panel ${!isShopper ? "open" : ""}`}
            role="region"
            aria-labelledby="tab-business"
          >
            <div className="why__panel-inner">
              <div className="why__panel-header">
                <h3 className="why__panel-title">For Businesses</h3>
                <div className="why__panel-image">
                  <img 
                    src="./shopping4.jpg" 
                    alt="Local shop owner decorating store for Christmas holiday season"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="why__content-grid">
                <div className="why__feature">
                  <div className="why__icon">
                    {BusinessIcons.target}
                  </div>
                  <div className="why__feature-content">
                    <h4 className="why__feature-title">Get The Recognition You Deserve</h4>
                    <p className="why__text">
                      Frustrated that your hard work and quality get overlooked by shoppers drawn to
                      low-priced big-box options that often fall short on service? Get the recognition you
                      deserve from locals who value what you offer.
                    </p>
                  </div>
                </div>

                <div className="why__feature">
                  <div className="why__icon">
                    {BusinessIcons.calendar}
                  </div>
                  <div className="why__feature-content">
                    <h4 className="why__feature-title">Risk-Free Holiday Trial</h4>
                    <p className="why__text">
                      Reach local customers for free until December 10th – no card details required, so you
                      can test the platform with zero risk. Sign up today and get your listing live instantly
                      to showcase your products or services.
                    </p>
                  </div>
                </div>

                <div className="why__feature">
                  <div className="why__icon">
                    {BusinessIcons.trending}
                  </div>
                  <div className="why__feature-content">
                    <h4 className="why__feature-title">Fair Visibility System</h4>
                    <p className="why__text">
                      After December 10th, it's just $37.95 a month for ongoing visibility. Listings appear
                      based on how close they are to the shopper, prioritizing your neighborhood first, and
                      later by customer reputation to reward great service.
                    </p>
                  </div>
                </div>

                <div className="why__feature">
                  <div className="why__icon">
                    {BusinessIcons.star}
                  </div>
                  <div className="why__feature-content">
                    <h4 className="why__feature-title">No Contracts, Full Control</h4>
                    <p className="why__text">
                      There are no contracts and you can cancel at any time, giving you full control. Every 
                      business follows the same visibility rules, so you compete fairly against other locals, 
                      not giants.
                    </p>
                  </div>
                </div>
              </div>

              <div className="why__cta-section">
                <div className="why__cta-image">
                  <img 
                    src="./shopping2.jpg" 
                    alt="Business owner celebrating successful holiday sales with customers"
                    loading="lazy"
                  />
                </div>
                <div className="why__cta-content">
                  <p className="why__text why__text-cta">
                    Thryft gives small business owners a fair and affordable way to reach local shoppers
                    without paid ads or upgrades – try it risk-free this holiday season to see real holiday
                    boosts in customers and sales.
                  </p>
                  <div className="why__actions">
                    <a href="#list-business" className="why__btn why__btn-ghost">
                      <span className="why__btn-icon">
                        <RocketIcon />
                      </span>
                      List Your Business Free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}