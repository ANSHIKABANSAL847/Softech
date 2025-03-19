//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
//import Contact from './Components/Contact';
//import Courses from './Components/Courses';
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         {/* <Route path="/contact" element={<Contact />} />
         <Route path="/courses" element={<Courses />} /> */}
        {/* <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/services" element={<Meetings />} />
        <Route path="/login" element={<Login />} /> */}  
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;
