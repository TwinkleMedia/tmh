import React from 'react'
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";
import AOS from'aos';
import 'aos/dist/aos.css';

function Left() {

  React.useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease',
    });
    AOS.refresh();
  }, []);

  return (
    <>
    <div className="col-12 col-lg-6 mt-5 left_side_details" data-aos-duration="1500" data-aos="fade-right">
    <div className="left_box">
      <h2>Get in touch</h2>
      

      <div className="contact_details">
        <ul className="details_list">
          <li>
            <FaLocationArrow className="cicon" />{" "}
            <Link
              className="details_link"
              to="https://maps.app.goo.gl/AJTkKt8E3jE5atKa9"
              target="_blank"
            >
              Plaza Market, Shop-15, Sec-15, Nerul, Navi Mumbai-400706
            </Link>
          </li>
          <li>
            <CiMail className="cicon" />{" "}
            <Link
              className="details_link"
              to="mailto:info@eksafoodproducts.com"
            >
              info@eksafoodproducts.com
            </Link>
          </li>
          <li>
            {" "}
            <FaPhoneAlt className="cicon" />{" "}
            <Link className="details_link" to="tel:919321020564">
              
              +91 9321020564
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div> 
    </>
  )
}

export default Left
