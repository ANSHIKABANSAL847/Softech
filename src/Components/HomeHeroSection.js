import heroImage from "../images/a.webp";
import Slider from "react-slick";
import c from "../images/c.jpg";
import React from "react";
import { useRef ,useState} from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import { motion} from "framer-motion";
import b from "../images/b.jpg";
//import heroImage from "../images/a.webp";

const HeroSection = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0); // Track active slide index

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex), // Update active slide
  };

  const slides = [
    {
      image: heroImage,
      title: "Empower Your Future with Quality Education",
      text: "Join our institute to master the latest technology with hands-on training and expert guidance.",
      button: "Get Started",
    },
    {
      image: c,
      title: "Achieve Your Goals with Expert Mentorship",
      text: "Learn from industry experts and gain real-world experience with our advanced curriculum.",
      button: "Explore Courses",
    },
    {
      image: b,
      title: "Transform Your Career with In-Demand Skills",
      text: "Stay ahead of the competition with cutting-edge skills and practical knowledge.",
      button: "Join Now",
    },
  ];

  return (
    <Container
      fluid
      className="hero-container mt-5 py-5 text-white position-relative"
      style={{
        background: "linear-gradient(135deg, #1a237e 30%, #0d47a1 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Floating Dots */}
      {[
        { size: 150, top: "10%", left: "5%", duration: 5 },
        { size: 100, bottom: "10%", right: "10%", duration: 6 },
        { size: 80, top: "30%", left: "20%", duration: 4 },
        { size: 60, bottom: "20%", right: "25%", duration: 5.5 },
        { size: 50, top: "15%", right: "15%", duration: 4.5 },
        { size: 70, bottom: "30%", left: "10%", duration: 6.5 },
      ].map((ball, index) => (
        <motion.div
          key={index}
          className="position-absolute rounded-circle"
          style={{
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            background: "rgba(255, 255, 255, 0.2)",
            zIndex: 1, // Ensure dots stay in background
            ...ball,
          }}
          animate={{ x: [0, 20, -20, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: ball.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <Row className="align-items-center text-center text-md-start">
              <Col md={6} className="order-md-2 text-center position-relative">
                <motion.img
                  src={slide.image}
                  alt="Institute"
                  className="img-fluid rounded shadow-lg"
                  style={{
                    maxWidth: "85%",
                    border: "5px solid white",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.4)",
                    borderRadius: "10px",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={activeSlide === index ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </Col>
              <Col md={6} className="order-md-1">
                <motion.h1
                  className="display-4 fw-bold"
                  initial={{ opacity: 0, y: -50 }}
                  animate={activeSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="lead"
                  initial={{ opacity: 0, y: 20 }}
                  animate={activeSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  {slide.text}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={activeSlide === index ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Button variant="warning" className="mt-3 px-4 py-2 fw-bold shadow-lg">
                    {slide.button}
                  </Button>
                </motion.div>
              </Col>
            </Row>
          </div>
        ))}
      </Slider>

      {/* Numbered Slider Navigation */}
      <div className="slider-nav mt-4 d-flex justify-content-center">
        {slides.map((_, index) => (
          <Button
            key={index}
            variant={activeSlide === index ? "warning" : "outline-light"}
            className="mx-2 slider-button"
            onClick={() => sliderRef.current.slickGoTo(index)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </Container>
  );
};


export default HeroSection;

