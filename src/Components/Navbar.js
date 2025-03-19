import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { FaChevronDown, FaChevronUp, FaBookOpen, FaVideo, FaFileAlt, FaCheckCircle, FaLaptopCode, FaDatabase, FaShieldAlt, FaCloud } from "react-icons/fa";

const NavigationBar = () => {
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeResource, setActiveResource] = useState("blogs");
  let timeoutId = null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowResourcesMenu(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowResourcesMenu(false);
    }, 300);
  };

  const resourceContent = {
    blogs: {
      title: "Blogs",
      description: "Latest industry insights and news to keep you updated.",
      points: [
        "Expert opinions on trending topics",
        "Latest technology updates",
        "Career guidance and industry insights",
        "Tips and tricks from professionals",
        "Industry news and research findings",
        "Exclusive interviews with experts",
      ],
      icon: <FaBookOpen />,
    },
    guides: {
      title: "Study Guides",
      description: "Comprehensive study guides and learning materials.",
      points: [
        "Step-by-step explanations with examples",
        "Exam preparation strategies",
        "Recommended resources for self-study",
        "PDF downloads for offline learning",
        "Chapter-wise summaries for quick revision",
        "Practice questions with solutions",
      ],
      icon: <FaFileAlt />,
    },
    tutorials: {
      title: "Tutorials",
      description: "Step-by-step video tutorials on various topics.",
      points: [
        "Hands-on learning experience",
        "Real-world project examples",
        "Beginner to advanced level guidance",
        "Interactive coding exercises",
        "Live coding demonstrations",
        "Project-based learning approaches",
      ],
      icon: <FaVideo />,
    },
  };

  return (
    <Navbar expand="lg" className="shadow-lg py-3 bg-dark-blue fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white fs-2">
          InstituteName
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="nav-text">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-text">About Us</Nav.Link>

            <div className="nav-item dropdown-trigger"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}>
              <Nav.Link className="nav-text">
                Courses {showMegaMenu ? <FaChevronUp /> : <FaChevronDown />}
              </Nav.Link>
              {showMegaMenu && (
                <div className="mega-menu show"
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}>
                  <Container>
                    <div className="row">
                      <div className="col-md-3">
                        <h6 className="category-title bg-primary text-white p-2 rounded">Development</h6>
                        <Link to="/courses/web-development" className="menu-item">
                          <FaLaptopCode className="icon" /> Web Development
                        </Link>
                        <Link to="/courses/mobile-app" className="menu-item">
                          <FaLaptopCode className="icon" /> Mobile App Development
                        </Link>
                      </div>
                      <div className="col-md-3">
                        <h6 className="category-title bg-success text-white p-2 rounded">Data & AI</h6>
                        <Link to="/courses/data-science" className="menu-item">
                          <FaDatabase className="icon" /> Data Science
                        </Link>
                        <Link to="/courses/ai-ml" className="menu-item">
                          <FaDatabase className="icon" /> AI & Machine Learning
                        </Link>
                      </div>
                      <div className="col-md-3">
                        <h6 className="category-title bg-danger text-white p-2 rounded">Cyber Security</h6>
                        <Link to="/courses/cyber-security" className="menu-item">
                          <FaShieldAlt className="icon" /> Cyber Security
                        </Link>
                        <Link to="/courses/ethical-hacking" className="menu-item">
                          <FaShieldAlt className="icon" /> Ethical Hacking
                        </Link>
                      </div>
                      <div className="col-md-3">
                        <h6 className="category-title bg-warning text-dark p-2 rounded">Other Courses</h6>
                        <Link to="/courses/cloud-computing" className="menu-item">
                          <FaCloud className="icon" /> Cloud Computing
                        </Link>
                        <Link to="/courses/devops" className="menu-item">
                          <FaCloud className="icon" /> DevOps
                        </Link>
                      </div>
                    </div>
                  </Container>
                </div>
              )}
            </div>

            <div className="nav-item dropdown-trigger" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Nav.Link className="nav-text">Resources {showResourcesMenu ? <FaChevronUp /> : <FaChevronDown />}</Nav.Link>
              {showResourcesMenu && (
                <div className="mega-menu show" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <Container className="d-flex">
                    <div className="side-menu">
                      <h6 className="category-title bg-primary text-white p-2 rounded">Categories</h6>
                      {Object.keys(resourceContent).map((key) => (
                        <div key={key} onClick={() => setActiveResource(key)} className={`menu-item ${activeResource === key ? "active" : ""}`}>
                          {resourceContent[key].icon} {resourceContent[key].title}
                        </div>
                      ))}
                    </div>
                    <div className="content-display p-3 w-100">
                      <h5 className="text-dark fw-bold d-flex align-items-center">
                        {resourceContent[activeResource].icon} &nbsp; {resourceContent[activeResource].title}
                      </h5>
                      <p>{resourceContent[activeResource].description}</p>
                      <ul>
                        {resourceContent[activeResource].points.map((point, index) => (
                          <li key={index} className="d-flex align-items-center"><FaCheckCircle className="text-success me-2" /> {point}</li>
                        ))}
                      </ul>
                    </div>
                  </Container>
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
