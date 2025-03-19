import React from "react";
import { Container, Row, Col ,Accordion} from "react-bootstrap";
import { motion} from "framer-motion";
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

  export default FAQs;