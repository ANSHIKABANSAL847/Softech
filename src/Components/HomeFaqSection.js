
import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider"; // Import the theme provider

const FAQs = () => {
  const { theme } = useTheme(); // Get the current theme

  // Define styles for different themes
  const themeStyles = {
    light: {
      background: "linear-gradient(135deg,rgb(144, 21, 206),rgb(138, 178, 247))",
      textColor: "#fff",
      accordionBg: "#fff",
      accordionText: "#000",
    },
    dark: {
      background: "rgb(50, 50, 50)",
      textColor: "#fff",
      accordionBg: "rgb(206, 196, 196)",
      accordionText: " dark",
    },
    darkBlue: {
      background: "rgb(2, 28, 46)",
      textColor: "rgb(196, 218, 243)",
      accordionBg: "#0d47a1",
      accordionText: "#fff",
    },
  };

  const currentTheme = themeStyles[theme] || themeStyles.light;

  return (
    <Container
      fluid
      className="py-4"
      style={{ background: currentTheme.background, color: currentTheme.textColor }}
    >
      <motion.h2
        className="fw-bold text-center mb-4 display-5 text-uppercase"
        style={{ color: currentTheme.textColor }}
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
                <Accordion.Item
                  eventKey={index.toString()}
                  className="border-0"
                  style={{ background: currentTheme.accordionBg, color: currentTheme.accordionText }}
                >
                  <Accordion.Header
                    className="fw-bold"
                    style={{ color: currentTheme.accordionText }}
                  >
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body style={{ color: currentTheme.accordionText }}>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQs;
