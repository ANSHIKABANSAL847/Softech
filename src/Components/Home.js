import React from "react";
import { Container, Row, Col, Button, Card ,Accordion,ProgressBar} from "react-bootstrap";
import { motion,useInView ,useAnimationControls,useScroll,useTransform} from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from "lucide-react";
import { useRef ,useEffect,useState} from "react";
import "./Home.css";
import { Briefcase, BookOpen, Code, CheckCircle } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../images/a.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import aboutImage from "../images/a.webp";
import student1 from "../images/s1.png";
import student2 from "../images/s2.png";

import student3 from "../images/s3.png";
import b from "../images/b.jpg";
import c from "../images/c.jpg";

import { FaChalkboardTeacher, FaLaptopCode, FaCertificate, FaBriefcase } from "react-icons/fa";


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






const Courses = () => {
  const courses = [
    { title: "Web Development", desc: "Master front-end and back-end technologies, including React, Node.js, and databases.", color: "#ff9800" },
    { title: "Data Science", desc: "Learn data analysis, machine learning, and AI with Python and R.", color: "#4caf50" },
    { title: "Cyber Security", desc: "Become an ethical hacker and security expert to protect digital assets.", color: "#2196f3" },
    { title: "Cloud Computing", desc: "Get certified in AWS, Azure, and Google Cloud with hands-on labs.", color: "#9c27b0" }
  ];

  return (
    <Container fluid className="text-center py-5" style={{ background: "#e0e0e0" }}>
      <motion.h2 className="fw-bold mb-4 display-4 text-uppercase" style={{ color: "#1a237e" }} initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Our Courses
      </motion.h2>
      <Row className="justify-content-center">
        {courses.map((course, index) => (
          <Col md={6} lg={3} key={index} className="mb-4 d-flex align-items-stretch">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }} className="w-100">
              <Card className="p-4 shadow-lg border-0 d-flex flex-column justify-content-between" style={{ height: "100%", background: course.color, color: "#fff", minHeight: "300px" }}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <motion.h4 className="fw-bold text-uppercase" whileHover={{ scale: 1.1 }}>{course.title}</motion.h4>
                  <motion.p whileHover={{ scale: 1.05 }}>{course.desc}</motion.p>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="light" style={{ color: course.color }}>Learn More</Button>
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};



// Enhanced Testimonials Section
// Enhanced Testimonials Section
const Testimonials = () => {
    const testimonials = [
      {
        name: "Priya Singh",
        image: student1,
        review:
          "Enrolling in this institute was the best decision of my career. The hands-on training, expert guidance, and real-world projects gave me the confidence to work on live industry applications. Highly recommended!",
      },
      {
        name: "Rahul Sharma",
        image: student2,
        review:
          "The instructors here go beyond just teaching—they mentor and guide you every step of the way. The practical assignments and well-structured courses helped me land my first job in a reputed IT company!",
      },
      {
        name: "Ankita Verma",
        image: student3,
        review:
          "A truly outstanding place to learn! The interactive sessions, in-depth coding challenges, and personalized feedback helped me sharpen my skills and build real confidence in software development.",
      },
    ];
  
    return (
      <Container fluid className="py-5" style={{ background: "#f3e5f5" }}>
        <motion.h2
          className="fw-bold text-center mb-5 display-4 text-uppercase"
          style={{ color: "#6a1b9a", position: "relative" }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Student Testimonials
          <div
            style={{
              width: "120px",
              height: "4px",
              background: "#6a1b9a",
              margin: "10px auto",
            }}
          ></div>
        </motion.h2>
  
        <Row className="justify-content-center">
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index} className="mb-4 d-flex align-items-stretch">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-100"
              >
                <Card
                  className="shadow-lg border-0 text-center p-3 h-100"
                  style={{
                    borderRadius: "10px",
                    background: "#fff8e1",
                    height: "270px",
                  }}
                >
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mx-auto mb-3"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "10px", // Square image with slightly rounded edges
                      border: "3px solid #6a1b9a",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  />
                  <Card.Body>
                    <Card.Text
                      className="fw-normal"
                      style={{
                        color: "#000",
                        fontSize: "0.95rem",
                        lineHeight: "1.5",
                      }}
                    >
                      {testimonial.review}
                    </Card.Text>
                    <Card.Title
                      className="fw-bold mt-2"
                      style={{ color: "#6a1b9a", fontSize: "1.1rem" }}
                    >
                      {testimonial.name}
                    </Card.Title>
                    <div
                      style={{
                        width: "60px",
                        height: "3px",
                        background: "#6a1b9a",
                        margin: "8px auto",
                      }}
                    ></div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };


  const AboutUs = () => (
    <Container fluid className="py-5 bg-light">
      <Row className="align-items-center">
        <Col md={6}>
          <motion.img
            src={b}
            alt="About Us"
            className="img-fluid rounded"
            style={{
              border: "5px solid #1a237e",
              boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
              borderRadius: "15px",
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </Col>
        <Col md={6}>
          <motion.h2 
            className="fw-bold text-primary mb-3 text-uppercase"
            style={{ position: "relative", display: "inline-block" }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            About <span style={{ color: "#ff9800" }}>Our Institute</span>
          </motion.h2>
          <p className="text-muted fs-5">
            We are committed to equipping students with in-demand tech skills through an industry-driven curriculum, hands-on projects, and expert mentorship. Join us and shape your future in the digital world.
          </p>
  
          {/* Key Highlights Section */}
          <Row className="mt-4">
            <Col md={6} className="mb-3">
              <motion.div 
                className="d-flex align-items-center"
                whileHover={{ scale: 1.1 }}
              >
                <FaChalkboardTeacher size={30} className="text-primary me-3" />
                <span className="fw-bold">Expert Trainers</span>
              </motion.div>
            </Col>
            <Col md={6} className="mb-3">
              <motion.div 
                className="d-flex align-items-center"
                whileHover={{ scale: 1.1 }}
              >
                <FaLaptopCode size={30} className="text-success me-3" />
                <span className="fw-bold">Hands-on Learning</span>
              </motion.div>
            </Col>
            <Col md={6} className="mb-3">
              <motion.div 
                className="d-flex align-items-center"
                whileHover={{ scale: 1.1 }}
              >
                <FaCertificate size={30} className="text-warning me-3" />
                <span className="fw-bold">Industry Certifications</span>
              </motion.div>
            </Col>
            <Col md={6} className="mb-3">
              <motion.div 
                className="d-flex align-items-center"
                whileHover={{ scale: 1.1 }}
              >
                <FaBriefcase size={30} className="text-danger me-3" />
                <span className="fw-bold">Placement Assistance</span>
              </motion.div>
            </Col>
          </Row>
  
          <motion.div
            className="mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="primary" className="px-4 py-2 fw-bold">Learn More</Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
  

  
  const FAQs = () => (
    <Container fluid className="py-4" style={{ background: "linear-gradient(135deg,rgb(144, 21, 206),rgb(138, 178, 247))", color: "#fff" }}>
      <motion.h2
        className="fw-bold text-center mb-4 display-5 text-uppercase"
        style={{ color: "#fff" }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Frequently Asked Questions
      </motion.h2>
  
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Accordion defaultActiveKey="0" className="shadow-sm rounded">
            {[
              { question: "What courses do you offer?", answer: "We offer Web Development, Data Science, Cyber Security, and Cloud Computing." },
              { question: "Do you provide job assistance?", answer: "Yes, we offer job placement support and career guidance." },
              { question: "Are courses beginner-friendly?", answer: "Yes, our courses are designed for both beginners and advanced learners." },
              { question: "Is there a certificate after completion?", answer: "Yes, all courses include a certification upon successful completion." },
            ].map((faq, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Accordion.Item eventKey={index.toString()} className="border-0">
                  <Accordion.Header className="fw-bold text-dark">{faq.question}</Accordion.Header>
                  <Accordion.Body className="text-muted">{faq.answer}</Accordion.Body>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );


  const WhyChooseUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 }); // Triggers when 20% of the section is visible
    const controls = useAnimationControls();
  
    useEffect(() => {
      if (isInView) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 });
      }
    }, [isInView, controls]);
  
    const features = [
      {
        icon: <Briefcase size={40} color="#fff" />,
        title: "Experienced Faculty",
        text: "Learn from industry experts with years of experience.",
        bg: "#ff6b6b",
      },
      {
        icon: <BookOpen size={40} color="#fff" />,
        title: "Industry-Relevant Courses",
        text: "Courses designed to match current industry standards.",
        bg: "#1e88e5",
      },
      {
        icon: <Code size={40} color="#fff" />,
        title: "Hands-on Learning",
        text: "Practical training with real-world projects.",
        bg: "#43a047",
      },
      {
        icon: <CheckCircle size={40} color="#fff" />,
        title: "Placement Assistance",
        text: "Guidance to help you secure job opportunities.",
        bg: "#f39c12",
      },
    ];
  
    return (
      <Container className="my-5">
        <h2 className="text-center mb-4 fw-bold">Why Choose Us</h2>
        <Row ref={ref} className="justify-content-center">
          {features.map((item, index) => (
            <Col md={6} lg={3} key={index} className="mb-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  className="text-center text-white shadow-lg border-0 d-flex flex-column align-items-center justify-content-center"
                  style={{ backgroundColor: item.bg, borderRadius: "15px", minHeight: "230px" }}
                >
                  <Card.Body>
                    <div className="mb-3">{item.icon}</div>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
const Home = () => (
  <>
    <HeroSection />
    <Courses />
    <AboutUs />
    {/* <OurStory /> */}
    <Testimonials />
    <WhyChooseUs />
    <FAQs />
   
  </>
);

export default Home;
