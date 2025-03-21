import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { ThemeProvider } from "./Components/ThemeProvider";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavigationBar />
        <div className="theme-switcher-container" style={{ textAlign: "right", padding: "10px" }}>
          <ThemeSwitcher />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;