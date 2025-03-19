import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {  AnimatePresence } from "framer-motion";
import "./AboutSlider.css"; // Make sure the CSS file is updated
import a from "../images/a.webp";
import React, { useState } from "react";

import { motion } from "framer-motion";

const slides = [
  {
    title: "SMBs & MSMEs",
    description:
      "As a fellow MSME, we understand the unique challenges of managing your workforce. For MSME and SMBs struggling to run HR operations with inefficient practices, HROne offers a powerful feature-packed SaaS HCM & HRMS that is one of the easiest & highly-adopted software globally.",
  },
  {
    title: "Enterprise Solutions",
    description:
      "For large enterprises, HROne provides a scalable, robust, and secure HR management system, streamlining payroll, attendance, and compliance processes.",
  },
  {
    title: "Startups & Growing Businesses",
    description:
      "Fast-growing startups require flexible solutions. HROne empowers new businesses to manage their workforce effectively and scale HR processes seamlessly.",
  },
];

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">
        Everyone who is obsessed about <span>Building Amazing Workplaces</span> Trusts HROne
      </h2>

      <div className="slider-wrapper">
        {/* Image Section */}
        <div className="slider-image">
          <img src={a} alt="HROne Banner" />
        </div>

        {/* Content Section */}
        <div className="slider-content">
          <button onClick={prevSlide} className="arrow-button left">
            <FaArrowLeft size={20} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="slide-card"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h3>{slides[currentIndex].title}</h3>
              <p>{slides[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>

          <button onClick={nextSlide} className="arrow-button right">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="pagination">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} />
        ))}
      </div>
    </div>
  );
};


export default SliderComponent;