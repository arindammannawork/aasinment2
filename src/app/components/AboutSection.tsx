// components/AboutSection.tsx
"use client";

import React from "react";
import "@/style/AboutSection.scss";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          <div className="left">
            <img
              src="https://sirius-management.com/assets/images/home_two_new/about_2.png"
              alt=""
            />
          </div>
          <div className="right">
            <div className="section-heading">
              <h3>
                <img src="/images/paper.png" alt="" />
                about us
              </h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="content mt-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                cupiditate aliquid dicta quasi consequatur eveniet. Sed
                blanditiis in magnam deleniti.
              </p>
              <div className="points mt-8">
                <div className="icon">
                  <img src="/images/paper.png" alt="" />
                </div>
                <div className="text-box">
                  <h4>Our Mission</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, voluptatum.
                  </p>
                </div>
              </div>
              <div className="points mt-4">
                <div className="icon">
                  <img src="/images/paper.png" alt="" />
                </div>
                <div className="text-box">
                  <h4>Our Mission</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, voluptatum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
