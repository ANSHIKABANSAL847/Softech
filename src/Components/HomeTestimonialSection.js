
import React from "react";
import { Container, Row, Col,  Card } from "react-bootstrap";
import { motion} from "framer-motion";

import student1 from "../images/s1.png";
import student2 from "../images/s2.png";

import student3 from "../images/s3.png";
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




  export default Testimonials;