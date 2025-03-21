import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Briefcase, BookOpen, Code, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const { theme } = useTheme(); 

  const themeStyles = {
    light: { background: "#ffffff", textColor: "#6a1b9a" },
    dark: { background: "#121212", textColor: "rgb(242, 240, 245)" },
    darkBlue: { background: "#0d47a1", textColor: "#ffffff" },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls]);

  const features = [
    {
      icon: <Briefcase size={40} color="#fff" />,
      title: "Experienced Faculty",
      text: "Learn from industry experts with years of experience.",
      bg: "#ff6b6b",
    },
    {
      icon: <BookOpen size={40} color="#fff" />,
      title: "Industry-Relevant Courses",
      text: "Courses designed to match current industry standards.",
      bg: "#1e88e5",
    },
    {
      icon: <Code size={40} color="#fff" />,
      title: "Hands-on Learning",
      text: "Practical training with real-world projects.",
      bg: "#43a047",
    },
    {
      icon: <CheckCircle size={40} color="#fff" />,
      title: "Placement Assistance",
      text: "Guidance to help you secure job opportunities.",
      bg: "#f39c12",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: themeStyles[theme].background,
        padding: "50px 0", // Maintains spacing without extra height
        width: "100%",
      }}
    >
      <Container>
        <h2
          className="text-center mb-4 fw-bold"
          style={{ color: themeStyles[theme].textColor }}
        >
          Why Choose Us
        </h2>
        <Row ref={ref} className="justify-content-center">
          {features.map((item, index) => (
            <Col md={6} lg={3} key={index} className="mb-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  className="text-center text-white shadow-lg border-0"
                  style={{
                    backgroundColor: item.bg,
                    borderRadius: "15px",
                    minHeight: "230px",
                  }}
                >
                  <Card.Body>
                    <div className="mb-3">{item.icon}</div>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
