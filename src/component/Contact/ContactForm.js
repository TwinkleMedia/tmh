import React from "react";
import "./ContactForm.css";
import Heading from "../Heading/Heading";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import contactImg from "../../image/contact-us-img.png";

export default function ContactForm() {
  return (
    <>
      <div className="about " id="about">
        <Breadcrumbs breadheading={"Contact Us"} breadcrumbsLabel={"About"} />
      </div>
      <div className="container container-fluid mt-5 col-12 contact-us overflow-hidden">
        <div className="row">
          <div className="col-12 py-5">
            <Heading headingLabel="Contact Us" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-2 ">
            <h1 className="px-4">Let's Talk!</h1>
            <div className="col-12 contact-img my-2">
              <img src={contactImg} />
            </div>
            <div className="col-12">
              <p className="px-4 mx-2">
                Welcome to Twinkle Media, where innovation meets impact.
                <br />
                <br />
                At Twinkle Media Hub Pvt. Ltd., we're a passionate team of Advertising & Digital Marketing experts fueled by a desire to transform brands.
                <br/><br/> We craft captivating campaigns that tell your Unique Story, Generate Leads, and Drive Measurable results & from strategic planning & stunning creative to data-driven optimization, we empower businesses of all sizes to shine brightly online.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-0 p-2">
            <h3>Send us a message</h3>
            <form className="contact-form">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control bg-light"
                  id="exampleInputPassword1"
                  placeholder="Your Name"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control bg-light"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your e-mail"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control bg-light"
                  id="exampleInputPassword1"
                  placeholder="Subject"
                />
              </div>
              <div class="mb-3">
                <input
                  type="tel"
                  class="form-control bg-light"
                  id="exampleInputPassword1"
                  placeholder="Contact No."
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control bg-light"
                  id="exampleInputPassword1"
                  placeholder="Message"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Allow us to mail you *
                </label>
              </div>
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
              <br/>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
