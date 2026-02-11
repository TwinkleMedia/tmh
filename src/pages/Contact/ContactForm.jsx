// src/components/ContactForm.js
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('https://tmhbackend.twinklemediahub.com/',formData);
  }

  return (
    <div className="container contact-container p-3 d-flex justify-content-center blog-card">
      <div className="row">
        <div className="col-md-6" >
          <div className="contact-form">
            <h3 className="form-header text-black">Contact Us</h3>
            <form className="color" onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
              <br />
              <div className="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <br />
              <div className="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter the subject"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    });
                  }}
                />
              </div>
              <br />
              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <br />
              <button type="submit" className="submit-btn btn mb-2">
                <button type="button">
                  <span>Send Message</span>
                </button>
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="contact-details">
            <h3>Get in touch</h3>
            <p>
              <strong>Office Address:</strong>
            </p>
            <a href="#" target="_blank">
              <p>
                Office No.24, Plot 19, Gauri Complex, Sector 11 <br />
                CBD Belapur, Navi Mumbai
                <br />
                Maharashtra 400614
              </p>
            </a>
            <p>
              <strong>Phone:</strong>
            </p>
            <a href="tel:+918976171333">
              <p>(+91) 8976171333</p>
            </a>
            <br />
            <a href="tel:+917900193079">
              <p>(+91) 7900193079</p>
            </a>
            <p>
              <strong>Email:</strong>
            </p>
            <a href="mailto:info@twinklemediahub.com">
              <p className="text-break">info@twinklemediahub.com</p>
            </a>
            <h4 className=" text-center">Follow Us</h4>
            {/* Social Icons */}
            <div className=" text-center">
              <ul
                className="about list-unstyled footer_list flex-row d-flex justify-content-around"
                
              >
                <li>
                  <Link to="/contact" className="footer_links">
                    <FaInstagram size={"1.5em"} />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer_links">
                    <FaYoutube size={"1.5em"} />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer_links">
                    <FaFacebook size={"1.5em"} />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer_links">
                    <IoLogoLinkedin size={"1.5em"} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
