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




  export default Courses;