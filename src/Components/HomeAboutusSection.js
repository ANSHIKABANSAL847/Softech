

import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import { motion} from "framer-motion";
import { FaChalkboardTeacher, FaLaptopCode, FaCertificate, FaBriefcase } from "react-icons/fa";
import b from "../images/b.jpg";

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



  export default AboutUs;

