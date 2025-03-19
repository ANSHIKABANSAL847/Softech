import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-light py-4" style={{ background: "#1a237e" }}>
      <Container>
        <Row className="text-center text-md-start">
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">About Us</h5>
            <p className="small">Empowering students with quality education and skill-based training. Join us to shape your future!</p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/courses" className="text-light text-decoration-none">Courses</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/faq" className="text-light text-decoration-none">FAQs</a></li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p><FaMapMarkerAlt /> Sirsa, Haryana</p>
            <p><FaPhoneAlt /> +91 8168109190</p>
            <p><FaEnvelope /> bansalanshika847@gmail.com</p>
          </Col>
        </Row>

        <hr className="my-3 border-light" />

        {/* Social Media Links */}
        <Row className="text-center">
          <Col>
            <a href="https://www.facebook.com" className="text-light me-3" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20} /></a>
            <a href="https://www.instagram.com" className="text-light me-3" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/in/anshika-bansal-1839b4256/" className="text-light me-3" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20} /></a>
          </Col>
        </Row>
        
        {/* Copyright */}
        <Row className="text-center mt-3">
          <Col>
            <p className="small mb-0">&copy; {new Date().getFullYear()} Your Institute. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
