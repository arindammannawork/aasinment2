// components/HeroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
// import "./HeroSection.scss";

interface Location {
  country: string;
  city: string;
  flag: string;
}

const HeroSection: React.FC = () => {
  const locations: Location[] = [
    { country: "UAE", city: "Dubai", flag: "🇦🇪" },
    { country: "Singapore", city: "Singapore", flag: "🇸🇬" },
    { country: "India", city: "Bangalore/Mumbai", flag: "🇮🇳" },
    { country: "Thailand", city: "Bangkok", flag: "🇹🇭" },
    { country: "Malaysia", city: "Kuala Lumpur", flag: "🇲🇾" },
    { country: "China", city: "Hong Kong", flag: "🇭🇰" },
    { country: "UK", city: "London", flag: "🇬🇧" },
    { country: "France", city: "Paris", flag: "🇫🇷" },
    { country: "USA", city: "New York/San Francisco", flag: "🇺🇸" },
    { country: "Saudi Arabia", city: "Riyadh", flag: "🇸🇦" },
  ];

  const filters = [
    { icon: "🏛️", label: "University", hasDropdown: true },
    { icon: "📚", label: "Topic", hasDropdown: true },
    { icon: "⏱️", label: "Duration", hasDropdown: true },
    { icon: "💻", label: "Online VS Hybrid", hasDropdown: true },
    { icon: "💰", label: "Cost Range", hasDropdown: true },
  ];

  return (
    <section className="hero-section relative">
      <div className="hero-container">
        {/* Left Content */}
        <div className="left-content">
          <div className="text-content">
            <h1 className="main-heading">
              Learn from the World's <br />
              <span className="highlight"> Top Universities</span>
            </h1>

            <p className="description">
              Access premium courses from Harvard, MIT, Stanford, and other
              prestigious institutions.
            </p>

            <div className="register-course">
              <h3 className="mb-4">register for hybrid course in</h3>
              <div className="flex gap-4 flex-wrap ">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="location  flex items-center gap-2"
                  >
                    <span className="flag">
                      <img src="/images/india.png" alt="" />
                    </span>
                    <span className="country">{location.country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
        </div>

        {/* Right Content */}
        <div className="right-content">
          <div className="image-container">
            <div className="chart-img absolute bottom-20 -left-20 ">
              <img src="/images/img1.webp" alt="" className="h-32 rounded" />
            </div>
            {/* <Image
                src="/images/img1.webp"
                alt="Student with laptop"
                width={400}
                height={500}
                className=""
              /> */}
            {/* </div> */}
          </div>

          {/* Social Links */}
        </div>
      </div>
      <div className="social-links">
        <a href="#" className="social-link">
          LINKEDIN
        </a>
        <a href="#" className="social-link">
          INSTAGRAM
        </a>
        <a href="#" className="social-link">
          TWITTER
        </a>
        <a href="#" className="social-link">
          FACEBOOK
        </a>
      </div>
      <div className="container absolute bottom-0 left-0 right-0 translate-y-1/2">
        <div className="filter-section">
          {filters.map((filter, index) => (
            <button key={index} className="filter-button shadow-md">
              <span className="filter-icon">{filter.icon}</span>
              <span className="filter-label">{filter.label}</span>
              {filter.hasDropdown && <span className="dropdown-icon">↑</span>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
