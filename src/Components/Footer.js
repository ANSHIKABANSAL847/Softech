




import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "./ThemeProvider"; // Import the theme provider
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const { theme } = useTheme(); // Get the current theme

  // Define theme styles
  const themeStyles = {
    light: {
      background: "#1a237e",
      textColor: "#fff",
      linkColor: "#fff"
    },
    dark: {
      background: "#121212",
      textColor: "#bbb",
      linkColor: "#bbb"
    },
    darkBlue: {
      background: "#0d47a1",
      textColor: "#c3daf8",
      linkColor: "#c3daf8"
    }
  };

  const currentTheme = themeStyles[theme] || themeStyles.light;

  return (
    <footer className="text-light py-4" style={{ background: currentTheme.background, color: currentTheme.textColor }}>
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
              <li><a href="/about" className="text-decoration-none" style={{ color: currentTheme.linkColor }}>About</a></li>
              <li><a href="/courses" className="text-decoration-none" style={{ color: currentTheme.linkColor }}>Courses</a></li>
              <li><a href="/contact" className="text-decoration-none" style={{ color: currentTheme.linkColor }}>Contact</a></li>
              <li><a href="/faq" className="text-decoration-none" style={{ color: currentTheme.linkColor }}>FAQs</a></li>
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
            <a href="https://www.facebook.com" className="me-3" target="_blank" rel="noopener noreferrer" style={{ color: currentTheme.linkColor }}><FaFacebookF size={20} /></a>
            <a href="https://www.instagram.com" className="me-3" target="_blank" rel="noopener noreferrer" style={{ color: currentTheme.linkColor }}><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/in/anshika-bansal-1839b4256/" className="me-3" target="_blank" rel="noopener noreferrer" style={{ color: currentTheme.linkColor }}><FaLinkedinIn size={20} /></a>
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
