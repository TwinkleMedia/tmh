import React from "react";
import "./contact.css";
import Map from "./Map";
import Left from "./Left";
import Right from "./Right";
import ContactForm from "./ContactForm";
import "./contact.css";
import { Helmet } from "react-helmet";

function Contact() {
  React.useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  return (
    <div className="myContact">
      {/*<Banner name="Contact"/>*/}
      <Helmet>
        <title>
          Contact us - Twinkle Media Hub Sevices in Mumbai, Navi Mumbai
        </title>
        <link rel="canonical" href="https://www.twinklemediahub.com/contact" />

        <meta
          name="description"
          content="Twinkle Media Hub Services is a Digital Marketing agency that provides a wide array of digital solutions. Contact Us to increase your digital presence"
        />
        <meta
          name="keywords"
          content="Twinkle Media Hub Pvt. Ltd., SEO, PPC, Social Media Marketing, Email Marketing, Graphic design, Direct Marketing, Web Development, Video Editing, Email Marketing, Bulk Whatsup Marketing"
        />
        <meta
          property="og:title"
          content="Contact us - Twinkle Media Hub Sevices in Mumbai, Navi Mumbai"
        />
        <meta
          property="og:site_name"
          content="Twinkle Media Hub Services Pvt. Ltd."
        />
        <meta property="og:url" content="https://twinklemediahub.com/contact" />
        <meta
          property="og:description"
          content="Twinkle Media Hub Services is a Digital Marketing agency that provides a wide array of digital solutions. Contact Us to increase your digital presence"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Map />
      <ContactForm />
    </div>
  );
}

export default Contact;
