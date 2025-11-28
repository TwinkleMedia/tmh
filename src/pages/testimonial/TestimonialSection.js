import React, { useState, useEffect, useRef } from "react";
import "./testimonial.css";
import Heading from "../../component/Heading/Heading";

const testimonials = [
  {
    name: "Rahul Ry",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328b8d4a?crop=faces&fit=crop&w=300&h=300",
    quote:
      "Twinkle Media Hub in Navi Mumbai has transformed my social media presence with their expert content creation and strategic campaigns. Their dedication to understanding my brand sets them apart. Highly recommended!",
  },
  {
    name: "Ankit Barik",
    image: "https://images.unsplash.com/photo-1614282020095-7b3f3e1aee01?crop=faces&fit=crop&w=300&h=300",
    quote:
      "Twinkle Media Hub's team exceeded expectations with outstanding graphic design on a tight timeline, ensuring our success. Thank you for your unparalleled performance and attention to detail.",
    designation: "Mentor of Devlaxmi Fragrance Private Limited",
  },
  {
    name: "Dhiraj Mishra",
    image: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?crop=faces&fit=crop&w=300&h=300",
    quote:
      "Working with Twinkle Media Hub was transformative. Their dedication, creativity, and attention to detail make them an exceptional strategic partner.",
  },
  {
    name: "Adnan Siddiqui",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=faces&fit=crop&w=300&h=300",
    quote:
      "Twinkle Media Hub is precise, professional, punctual, and cooperative. They offer excellent service and productivity at affordable prices, with customized solutions and special offers.",
  },
  {
    name: "Balwinder Singh",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=300&h=300",
    quote:
      "Twinkle Media Hub transformed our digital marketing, helping us reach new heights with engaging content, optimized ad campaigns, and cutting-edge technology.",
  },
  {
    name: "Ivengex Oil",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=300&h=300",
    quote:
      "Twinkle Media Hub Pvt. Ltd. consistently delivers top-notch services with a strong commitment to client satisfaction. Their professional team provides exceptional expertise for a seamless experience.",
  },
  {
    name: "Ghanshyam Vishwakarma",
    image: "https://images.unsplash.com/photo-1619895862022-7e67d4d1c65e?crop=faces&fit=crop&w=300&h=300",
    quote:
      "“Impressed” is an understatement! The Twinkle Media Hub team consistently delivers results beyond expectations, significantly elevating our brand in the online landscape.",
  },
  {
    name: "Sony Chaudhary",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=300&h=300",
    quote:
      "Twinkle FMS Pvt Ltd has a very professional and dedicated team. They boosted our social media posts, maximized our reach to target audiences, and lifted a lot of burden off our shoulders. Highly recommended!",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="testimonial-section container py-5"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="row justify-content-center py-5">
        <Heading headingLabel="Google Reviews" />
      </div>

      <div className="slider-wrapper">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div className="slide" key={index}>
              <div className="card testimonial-card text-center m-auto">
                <div className="card-body">
                  {/* <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-img mb-3"
                  /> */}
                  <img
                    src="asset/img/googlereview.png"
                    alt="Google"
                    className="google-icon mb-2"
                  />
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <h5 className="testimonial-name mt-3">{testimonial.name}</h5>
                  {testimonial.designation && (
                    <p className="testimonial-designation">
                      {testimonial.designation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="dots">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}
