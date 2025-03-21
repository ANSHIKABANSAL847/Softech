




import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider"; 


const Courses = () => {
  const { theme } = useTheme(); // Get the current theme
  console.log("Current Theme:", theme);
  // Define different styles based on the theme
  const themeStyles = {
    light: {
      background: "#e0e0e0",
      textColor: "#1a237e",
      cardBackground: (color) => color, // Keep original card colors
      buttonVariant: "light",
    },
    dark: {
      background: "rgb(102, 102, 102)",
      textColor: "#ffffff",
      cardBackground: (color) => color, // Fixed function for dark theme
      buttonVariant:"light",
    },
    darkBlue: {
      background: "rgb(97, 104, 177)",
      textColor: "rgb(250, 249, 243)",
      cardBackground: (color) => color, // Fixed function for darkBlue theme
      buttonVariant: "light",
    },
  };
  

  const courses = [
    { title: "Web Development", desc: "Master front-end and back-end technologies, including React, Node.js, and databases.", color: "#ff9800" },
    { title: "Data Science", desc: "Learn data analysis, machine learning, and AI with Python and R.", color: "#4caf50" },
    { title: "Cyber Security", desc: "Become an ethical hacker and security expert to protect digital assets.", color: "#2196f3" },
    { title: "Cloud Computing", desc: "Get certified in AWS, Azure, and Google Cloud with hands-on labs.", color: "#9c27b0" }
  ];

  return (
    <Container fluid className="text-center py-5" style={{ background: themeStyles[theme].background }}>
      <motion.h2 
        className="fw-bold mb-4 display-4 text-uppercase" 
        style={{ color: themeStyles[theme].textColor }} 
        initial={{ opacity: 0, y: -30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Our Courses
      </motion.h2>
      <Row className="justify-content-center">
        {courses.map((course, index) => (
          <Col md={6} lg={3} key={index} className="mb-4 d-flex align-items-stretch">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              initial={{ opacity: 0, y: 50 }} 
              transition={{ duration: 0.5 }} 
              className="w-100"
            >
              <Card 
                className="p-4 shadow-lg border-0 d-flex flex-column justify-content-between" 
                style={{ 
                  height: "100%", 
                  background: theme === "light" ? course.color : themeStyles[theme].cardBackground(course.color),

                  color: "#fff", 
                  minHeight: "300px" 
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <motion.h4 className="fw-bold text-uppercase" whileHover={{ scale: 1.1 }}>
                    {course.title}
                  </motion.h4>
                  <motion.p whileHover={{ scale: 1.05 }}>
                    {course.desc}
                  </motion.p>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button variant={themeStyles[theme].buttonVariant} style={{ color: course.color }}>
                      Learn More
                    </Button>
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
