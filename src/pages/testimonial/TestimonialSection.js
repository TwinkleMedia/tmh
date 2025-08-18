import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./testimonial.css";
// import selfImg from '../../image/freeUse.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Heading from "../../component/Heading/Heading";



const testimonials = [
  {
    name: "Rahul Ry",
    image: "path/to/image1.jpg", // Replace with the actual path to the image
    quote: "Twinkle Media Hub in Navi Mumbai has transformed my social media presence with their expert content creation and strategic campaigns. Their dedication to understanding my brand sets them apart. Highly recommended!",
    designation: "",
  },
  {
    name: "Ankit Barik",
    image: "path/to/image2.jpg", // Replace with the actual path to the image
    quote: "Twinkle Media Hub's team exceeded expectations with outstanding graphic design on a tight timeline, ensuring our success. Thank you for your unparalleled performance and attention to detail.",
    designation: "Mentor of Devlaxmi Fragrance Private limited",
  },
  {
    name: "Dhiraj Mishra",
    image: "path/to/image3.jpg", // Replace with the actual path to the image
    quote: "Working with Twinkle Media Hub was transformative. Their dedication, creativity, and attention to detail make them an exceptional strategic partner.",
    designation: "",
  },
  {
    name: "Adnan Siddiqui",
    image: "path/to/image3.jpg", // Replace with the actual path to the image
    quote: "Twinkle Media Hub is precise, professional, punctual, and cooperative. They offer excellent service and productivity at affordable prices, with customized solutions and special offers.",
    designation: "",
  },
  {
    name: "Balwinder Singh",
    image: "path/to/image3.jpg", // Replace with the actual path to the image
    quote: "Twinkle Media Hub transformed our digital marketing, helping us reach new heights with engaging content, optimized ad campaigns, and cutting-edge technology. We're grateful for their positive impact on our brand.",
    designation: "",
  },
  {
    name: "ivengex oil",
    image: "path/to/image3.jpg", // Replace with the actual path to the image
    quote: "Twinkle Media Hub Pvt. Ltd. consistently delivers top-notch services with a strong commitment to client satisfaction. Their professional team provides exceptional expertise for a seamless experience.",
    designation: "",
  },
  {
    name: "Ghanshyam Vishwakarma",
    image: "path/to/image3.jpg", // Replace with the actual path to the image
    quote: "\"Impressed\" is an understatement! The Twinkle Media Hub team consistently delivers results beyond expectations, significantly elevating our brand in the online landscape with their digital marketing expertise..",
    designation: "",
  },
  {
    name: "Sony Chaudhary",
    image: "path/to/image3.jpg", // Replace with the actual path to the image
    quote: "Twinkle FMS Pvt Ltd has a very professional and dedicated team. They boosted our social media posts, maximized our reach to target audiences, and lifted a lot of burden off our shoulders. Highly recommended!",
    designation: "",
  }
];

export default function TestimonialSection() {
  return (
    <div className="testimonial-section container py-5">
      <div className="row justify-content-center py-5">
      <Heading headingLabel="Google Reviews" />
      </div>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index} interval={1000}>
            <div className="card testimonial-card text-center m-auto">
              <div className="card-body">
                <img
                //   src={testimonial.image}
                src='asset/img/google-review.png'
                  alt={testimonial.name}
                  className="testimonial-img mb-3"
                />
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <h5 className="testimonial-name mt-3">{testimonial.name}</h5>
                <br/>
                {/* <p className="testimonial-designation">
                  {testimonial.designation}
                </p> */}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
