


import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaLaptopCode, FaCertificate, FaBriefcase } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";
import b from "../images/b.jpg";

const AboutUs = () => {
  const { theme } = useTheme();
  
  const themeStyles = {
    light: {
      background: "#f8f9fa",
      textColor: "#1a237e",
      borderColor: "#1a237e",
      buttonVariant: "primary",
    },
    dark: {
      background: "rgb(51, 51, 51)",
      textColor: "#ffffff",
      borderColor: "#ffffff",
      buttonVariant: "light",
    },
    darkBlue: {
      background: "rgb(32, 41, 107)",
      textColor: "rgb(250, 249, 243)",
      borderColor: "rgb(250, 249, 243)",
      buttonVariant: "light",
    },
  };

  return (
    <Container fluid className="py-5" style={{ background: themeStyles[theme].background }}>
      <Row className="align-items-center">
        <Col md={6}>
          <motion.img
            src={b}
            alt="About Us"
            className="img-fluid rounded"
            style={{
              border: `5px solid ${themeStyles[theme].borderColor}`,
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
            className="fw-bold mb-3 text-uppercase"
            style={{ color: themeStyles[theme].textColor }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            About <span style={{ color: "#ff9800" }}>Our Institute</span>
          </motion.h2>
          <p className="fs-5" style={{ color: themeStyles[theme].textColor }}>
            We are committed to equipping students with in-demand tech skills through an industry-driven curriculum, hands-on projects, and expert mentorship. Join us and shape your future in the digital world.
          </p>
          
          <Row className="mt-4">
            {[{ icon: <FaChalkboardTeacher />, text: "Expert Trainers", color: "text-primary" },
              { icon: <FaLaptopCode />, text: "Hands-on Learning", color: "text-success" },
              { icon: <FaCertificate />, text: "Industry Certifications", color: "text-warning" },
              { icon: <FaBriefcase />, text: "Placement Assistance", color: "text-danger" }].map((item, index) => (
              <Col md={6} className="mb-3" key={index}>
                <motion.div
                  className="d-flex align-items-center"
                  whileHover={{ scale: 1.1 }}
                  style={{ color: themeStyles[theme].textColor }}>
                  {React.cloneElement(item.icon, { size: 30, className: `${item.color} me-3` })}
                  <span className="fw-bold">{item.text}</span>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div
            className="mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <Button variant={themeStyles[theme].buttonVariant} className="px-4 py-2 fw-bold">
              Learn More
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;