// components/FeaturedCourses.tsx
"use client";

import React from "react";
import Image from "next/image";
import "@/style/FeaturedCourses.scss";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  isOnline: boolean;
  rating: number;
  price: number;
  category: string;
}

const FeaturedCourses: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Artificial Intelligence for Leaders",
      description:
        "This course is designed to equip managers with a practical understanding of artificial intelligence and its business applications.",
      image: "/ai-course.jpg",
      location: "Location",
      isOnline: true,
      rating: 4,
      price: 2999,
      category: "AI & Technology",
    },
    {
      id: 2,
      title: "Global Business Strategy",
      description:
        "This course explores strategic decision-making in a global context. It covers international market analysis, competitive positioning.",
      image: "/business-strategy.jpg",
      location: "Location",
      isOnline: true,
      rating: 5,
      price: 1999,
      category: "Business Strategy",
    },
    {
      id: 3,
      title: "Entrepreneurship & Innovation",
      description:
        "This course focuses on the fundamentals of launching and growing innovative ventures. It covers idea generation, business model development.",
      image: "/entrepreneurship.jpg",
      location: "Location",
      isOnline: true,
      rating: 4,
      price: 3999,
      category: "Innovation",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? "filled" : "empty"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="featured-courses">
      <div className="featured-courses-container">
        {/* Header Section */}
        <div className="section-header">
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-subtitle">
            Discover world-class education from renowned universities and
            institutions
          </p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card flex flex-col">
              {/* Course Image */}
              <div className="course-image">
                <Image
                  src={"/images/img1.webp"}
                  alt={course.title}
                  width={400}
                  height={250}
                  className="course-img"
                />
                <div className="course-overlay">
                  <span className="course-category">{course.category}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="course-content">
                <div className="top">
                  <h3 className="course-title">{course.title}</h3>

                  <p className="course-description">{course.description}</p>

                  {/* Course Meta Info */}
                  <div className="course-meta">
                    <div className="meta-item">
                      <span className="location-icon">📍</span>
                      <span className="meta-text">{course.location}</span>
                    </div>
                    <div className="meta-item">
                      <span className="online-icon">💻</span>
                      <span className="meta-text">Online</span>
                    </div>
                  </div>

                  {/* Rating and Price */}
                </div>
                <div className="bottom">
                  <div className="course-footer">
                    <div className="rating-section">
                      <div className="stars">{renderStars(course.rating)}</div>
                    </div>
                    <div className="price-section">
                      <span className="price">${course.price}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="show-details-btn">Show Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
