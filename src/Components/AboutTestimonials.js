import  { useRef } from "react";
import b from "../images/b.jpg";
import a from "../images/a.webp";
const testimonials = [
    {
      id: 1,
      company: "AHH",
      logo: b,
      quote:
        "HROne is highly adaptable, incredibly fast! We can fetch 100+ reports in a click to make informed decisions.",
      name: "Rupali C. Rane",
      position: "Head HR, AHH",
      profile: a,
      rating: 5,
    },
    {
      id: 2,
      company: "WOW",
      logo:b,
      quote:
        "HROne makes payroll error-free and timely. We now take less than 2 days to process payroll and a single click to generate payslips.",
      name: "Smriti Khanna",
      position: "VP HR, Wow Skin Science",
      profile: a,
      rating: 5,
    },
    {
      id: 3,
      company: "Tech Solutions",
      logo: b,
      quote:
        "Using HROne has streamlined our HR processes significantly, making payroll and employee management seamless.",
      name: "Arjun Mehta",
      position: "HR Manager, Tech Solutions",
      profile:a,
      rating: 4,
    },
    {
      id: 4,
      company: "Elite Corp",
      logo: b,
      quote:
        "HROne has reduced manual work for our HR team and improved efficiency in payroll and leave management.",
      name: "Neha Kapoor",
      position: "Director HR, Elite Corp",
      profile: a,
      rating: 5,
    },
    {
      id: 5,
      company: "NextGen Innovations",
      logo: b,
      quote:
        "With HROne, we save hours every month on HR operations, making it an indispensable tool for our company.",
      name: "Rahul Verma",
      position: "HR Lead, NextGen Innovations",
      profile: a,
      rating: 4,
    },
  ];
  
const Testimonials = () => {
    const scrollRef = useRef(null);
  
    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
      }
    };
  
    return (
      <div className="testimonials-container">
        {/* Left Section (Smiley + Text) */}
        <div className="testimonials-left">
          <div className="smiley">😊</div>
          <div className="title">
            <h1>
              Customer <span className="highlight">Happiness</span> Guaranteed
            </h1>
          </div>
          {/* Arrows Below Text */}
          <div className="arrows">
            <button className="arrow left-arrow" onClick={scrollLeft}>
              ◄
            </button>
            <button className="arrow right-arrow" onClick={scrollRight}>
              ►
            </button>
          </div>
        </div>
  
        {/* Right Section (Testimonials) */}
        <div className="testimonials-right">
          <div className="testimonials-row" ref={scrollRef}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  className="company-logo"
                />
                <blockquote className="quote">{testimonial.quote}</blockquote>
                <div className="testimonial-footer">
                  <img
                    src={testimonial.profile}
                    alt={testimonial.name}
                    className="profile-pic"
                  />
                  <div className="info">
                    <div className="name">{testimonial.name}</div>
                    <div className="position">{testimonial.position}</div>
                    <div className="rating">{"⭐".repeat(testimonial.rating)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };


  export default Testimonials;