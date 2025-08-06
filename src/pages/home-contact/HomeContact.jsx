import React from "react";
import Heading from "../../component/Heading/Heading.js";
import "./home-contact.css";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import ContactForm from '../Contact/ContactForm.jsx';
import axios from 'axios';
export default function HomeContact() {
  
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
    <>
      <div className="container container-fluid mt-5 contact-us-home ">
        <div className="py-5">
          <Heading headingLabel="Contact Us" />
        </div>
        {/* <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12 p-0 p-2">
            <h3>Send us a message</h3>
            <form className="contact-form">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-light"
                  id="exampleInputPassword1"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control bg-light"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your e-mail"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-light"
                  id="exampleInputPassword1"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control bg-light"
                  id="exampleInputPassword1"
                  placeholder="Contact No."
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-light"
                  id="exampleInputPassword1"
                  placeholder="Message"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Allow us to mail you *
                </label>
              </div>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div> */}
        {/* <ContactForm/> */}
        <div className="col-md-8 mx-auto" >
          <div className="contact-form">
            <h3 className="form-header text-black">Contact Us</h3>
            <form className="text-black" onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="name">Name</label>
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
                <label for="email">Email</label>
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
                  placeholder="Enter your message"
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
                  {" "}
                  <span>Submit</span>
                </button>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
