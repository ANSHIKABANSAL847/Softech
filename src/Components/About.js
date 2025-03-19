 import  { useRef } from "react";
 import "./Courses.css"; // Updated CSS file

 import b from "../images/b.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {  AnimatePresence } from "framer-motion";
import "./Contact.css"; // Make sure the CSS file is updated
import a from "../images/a.webp";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaCode, FaChartBar, FaShieldAlt, FaRobot, FaCheckCircle } from "react-icons/fa";
import d from "../images/d.jpg";
import f1 from "../images/f1.jpeg";
import f2 from "../images/f2.png";
import d1 from "../images/d1.webp";
import d2 from "../images/d2.jpg";
import d3 from "../images/d3.jpg";
import c1 from "../images/c1.webp";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import a1 from "../images/a1.jpg";
import a2 from "../images/a2.webp";
import a3 from "../images/a3.jpg";

const courses = [
  {
    title: "Full Stack Development",
    desc: "Master front-end and back-end technologies, including React, Node.js, Express, and MongoDB.",
    color: "#007B83",
    icon: <FaCode size={40} />,
    images: [d, f1, f2],
    points: [
      "Learn MERN Stack development",
      "Build real-world projects",
      "Work with REST APIs",
      "Deploy applications"
    ]
  },
  {
    title: "Data Analytics",
    desc: "Gain expertise in data visualization, statistical analysis, and machine learning using Python and SQL.",
    color: "#E67E22",
    icon: <FaChartBar size={40} />,
    images: [d1, d2, d3],
    points: [
      "Master Python and SQL",
      "Learn data visualization",
      "Apply machine learning models",
      "Analyze big data"
    ]
  },
  {
    title: "Cyber Security",
    desc: "Learn ethical hacking, network security, and risk management to protect systems and data.",
    color: "#8B0000",
    icon: <FaShieldAlt size={40} />,
    images: [c1, c2, c3],
    points: [
      "Ethical hacking fundamentals",
      "Network security principles",
      "Risk management strategies",
      "Real-world security case studies"
    ]
  },
  {
    title: "Artificial Intelligence",
    desc: "Explore deep learning, neural networks, and AI model building using Python and TensorFlow.",
    color: "#5C6BC0",
    icon: <FaRobot size={40} />,
    images: [a1, a2, a3],
    points: [
      "Deep learning concepts",
      "Neural network architectures",
      "AI-powered applications",
      "Hands-on TensorFlow projects"
    ]
  }
];

const CourseCard = ({ course, onSelect }) => (
  <Col md={6} lg={3} className="mb-4 d-flex align-items-stretch">
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-100" onClick={() => onSelect(course)}>
      <Card className="p-4 shadow-lg border-0 d-flex flex-column align-items-center" style={{ background: course.color, color: "#fff", borderRadius: "15px", height: "100%" }}>
        {course.icon}
        <Card.Body className="text-center">
          <motion.h4 className="fw-bold text-uppercase" whileHover={{ scale: 1.1 }}>{course.title}</motion.h4>
          <motion.p whileHover={{ scale: 1.05 }}>{course.desc}</motion.p>
        </Card.Body>
      </Card>
    </motion.div>
  </Col>
);

const CourseDetails = ({ course, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % course.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [course]);

  return (
    <motion.div className="mt-5 p-4 shadow-lg" style={{ background: course.color, color: "#fff", borderRadius: "15px" }}
      initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <motion.img key={currentImage} src={course.images[currentImage]} alt={course.title} className="img-fluid rounded"
            style={{ border: "5px solid white", boxShadow: "0px 10px 20px rgba(0,0,0,0.3)", borderRadius: "15px", maxWidth: "500px", height: "300px" }}
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} />
        </Col>
        <Col md={6}>
          <motion.h2 className="fw-bold text-uppercase mb-3" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>{course.title}</motion.h2>
          <p className="fs-5">{course.desc}</p>
          <ul>
            {course.points.map((point, index) => (
              <motion.li key={index} className="fs-5 d-flex align-items-center" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                <FaCheckCircle className="me-2" /> {point}
              </motion.li>
            ))}
          </ul>
          <motion.button className="btn btn-light mt-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onClose}>Close</motion.button>
        </Col>
      </Row>
    </motion.div>
  );
};

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  return (
    <Container fluid className="text-center py-5 mt-5" style={{ background: "#F5F5F5" }}>
      <motion.h2 className="fw-bold mb-4 display-4 text-uppercase" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Our Courses</motion.h2>
      <Row className="justify-content-center">
        {courses.map((course, index) => <CourseCard key={index} course={course} onSelect={setSelectedCourse} />)}
      </Row>
      {selectedCourse && <CourseDetails course={selectedCourse} onClose={() => setSelectedCourse(null)} />}
    </Container>
  );
};





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



const testimonials = [
  {
    id: 1,
    company: "AHH",
    logo: b,
    quote:
      "HROne is highly adaptable, incredibly fast! We can fetch 100+ reports in a click to make informed decisions.",
    name: "Rupali C. Rane",
    position: "Head HR, AHH",
    profile: a,
    rating: 5,
  },
  {
    id: 2,
    company: "WOW",
    logo:b,
    quote:
      "HROne makes payroll error-free and timely. We now take less than 2 days to process payroll and a single click to generate payslips.",
    name: "Smriti Khanna",
    position: "VP HR, Wow Skin Science",
    profile: a,
    rating: 5,
  },
  {
    id: 3,
    company: "Tech Solutions",
    logo: b,
    quote:
      "Using HROne has streamlined our HR processes significantly, making payroll and employee management seamless.",
    name: "Arjun Mehta",
    position: "HR Manager, Tech Solutions",
    profile:a,
    rating: 4,
  },
  {
    id: 4,
    company: "Elite Corp",
    logo: b,
    quote:
      "HROne has reduced manual work for our HR team and improved efficiency in payroll and leave management.",
    name: "Neha Kapoor",
    position: "Director HR, Elite Corp",
    profile: a,
    rating: 5,
  },
  {
    id: 5,
    company: "NextGen Innovations",
    logo: b,
    quote:
      "With HROne, we save hours every month on HR operations, making it an indispensable tool for our company.",
    name: "Rahul Verma",
    position: "HR Lead, NextGen Innovations",
    profile: a,
    rating: 4,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="testimonials-container">
      {/* Left Section (Smiley + Text) */}
      <div className="testimonials-left">
        <div className="smiley">😊</div>
        <div className="title">
          <h1>
            Customer <span className="highlight">Happiness</span> Guaranteed
          </h1>
        </div>
        {/* Arrows Below Text */}
        <div className="arrows">
          <button className="arrow left-arrow" onClick={scrollLeft}>
            ◄
          </button>
          <button className="arrow right-arrow" onClick={scrollRight}>
            ►
          </button>
        </div>
      </div>

      {/* Right Section (Testimonials) */}
      <div className="testimonials-right">
        <div className="testimonials-row" ref={scrollRef}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img
                src={testimonial.logo}
                alt={`${testimonial.company} logo`}
                className="company-logo"
              />
              <blockquote className="quote">{testimonial.quote}</blockquote>
              <div className="testimonial-footer">
                <img
                  src={testimonial.profile}
                  alt={testimonial.name}
                  className="profile-pic"
                />
                <div className="info">
                  <div className="name">{testimonial.name}</div>
                  <div className="position">{testimonial.position}</div>
                  <div className="rating">{"⭐".repeat(testimonial.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const About = () => (
  <>
     
    <Courses />
    <SliderComponent />
 
   <Testimonials />
  </>
);

export default About;



