import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion} from "framer-motion";



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



  export default Courses;