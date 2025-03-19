import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./HomeHeroSection";
import Testimonials from "./HomeTestimonialSection";
import AboutUs from "./HomeAboutusSection";
import FAQs from "./HomeFaqSection";
import WhyChooseUs from "./HomeWhyUsSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Courses from "./HomeCousesSection"

const Home = () => (
  <>
    <HeroSection />
    <Courses />
    <AboutUs />
    <Testimonials />
    <WhyChooseUs />
    <FAQs />

  </>
);

export default Home;
