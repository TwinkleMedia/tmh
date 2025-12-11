import React from "react";
import Heading from "../../component/Heading/Heading";
import logo from "../../image/brand.webp";

import video from "../../image/text animation.mp4";
import "./About.css";
import { Helmet } from "react-helmet";
import Allservices from "../../component/All-pages/Allservices/Mainservices/Allservices";
export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Twinkle Media Hub Pvt. Ltd.",
    "url": "https://www.twinklemediahub.com",
    "logo": "https://www.twinklemediahub.com/asset/img/brand.webp",
    "sameAs": [
      "https://www.facebook.com/twinklemediahub",
      "https://www.instagram.com/twinklemediahub/",
      "https://www.linkedin.com/company/twinklemediahub/"
    ],
    "description": "Twinkle Media Hub Pvt Ltd is a leading performance-oriented digital marketing company in Navi Mumbai & Mumbai, specializing in SEO, PPC, social media marketing, graphic design, web development, and video production."
  };
  return (
    <>
      <Helmet>

        <title>
          About Us | Best Digital Marketing Company - Twinkle Media Hub Pvt.
          Ltd.
        </title>
        <link rel="canonical" href="https://www.twinklemediahub.com/about" />
        <meta
          name="description"
          content="Twinkle Media Hub, Digital Marketing Company Navi Mumbai, SEO, PPC, Social Media Marketing, Web Development, Graphic Designing, Video Production"
        />
        <meta
          name="keywords"
          content="Twinkle Media Hub Pvt. Ltd., SEO, PPC, Social Media Marketing, Email Marketing, Graphic design, Direct Marketing, Web Development, Video Editing, Email Marketing, Bulk Whatsup Marketing"
        />
        <meta
          property="og:title"
          content="About Us | Best Digital Marketing Company - Twinkle Media Hub Pvt.
          Ltd."
        />
        <meta
          property="og:site_name"
          content="Twinkle Media Hub Pvt. Ltd."
        />
        <meta property="og:url" content="https://twinklemediahub.com/" />
        <meta
          property="og:description"
          content="Twinkle Media Hub Pvt Ltd is a leading digital marketing agency in Navi Mumbai & Mumbai. We specialize in SEO, PPC, Social Media Marketing, Web Development, Graphic Designing, and Video Production."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Twinkle Media Hub Pvt. Ltd." />
        <meta
          name="twitter:description"
          content="Twinkle Media Hub Pvt Ltd is a leading digital marketing agency in Navi Mumbai & Mumbai. We specialize in SEO, PPC, Social Media Marketing, Web Development, Graphic Designing, and Video Production."
        />
        <meta name="twitter:image" content="https://www.twinklemediahub.com/asset/logo.png" />
        <meta name="twitter:site" content="https://x.com/TwinklePvt75836" />
        <meta name="twitter:creator" content="https://x.com/TwinklePvt75836" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {/* <div className="about" id="about">
        <div className="container-fluid">
          <div className="row  position-relative d-flex justify-content-center">
            <div className="col-lg-6 p-lg-2  bg-light m-2">
              <div className="bg-light p-3 pt-5 p-md-5">
                <h1 className="text-uppercase">
                  ELEVATE YOUR BRAND AND GROW YOUR BUSINESS
                </h1>
                <h2 className="text-uppercase gradient-text">
                  TAKE YOUR BUSINESS TO NEXT LEVEL
                </h2>
                <p className="py-3 py-md-5">
                  At <b>Twinkle Media Hub Pvt Ltd.®</b>, we are a passionate team of advertising and digital marketing experts dedicated to transforming businesses into powerful brands. We craft captivating campaigns that tell
                  We create <b>captivating campaigns®</b> that tell your unique story, build stronger connections, generate quality leads, and deliver measurable results. From strategic planning and innovative <b>creativity®</b> to data-driven optimization and <b>performance marketing®</b>, we empower businesses of every size to shine brighter and stand out in the digital world — all with affordable, <b>high-quality solutions®</b>.
                </p>

                <div className="box-experice .gradient-text d-flex mt-10">
                  <h2>
                    <span className="numb-ex fw-bold ">10+</span>
                  </h2>
                  <h2>
                    <span>Years</span>
                    <br />
                    <span className="light-color">Advertising Experice</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-5 p-lg-2  bg-light m-2">
              <div className="bg-light p-2 py-5">
                <video
                  src={video}
                  className="my-4 mb-5"
                  muted
                  autoPlay
                  loop
                  height="480px"
                  width="100%"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section className="hero-section" id="about-section">
        <div className="hero-content aboutContent">
          <Allservices
            Serviceh1={"ELEVATE YOUR BRAND AND GROW YOUR BUSINESS"}
          // Serviceh1span={"TAKE YOUR BUSINESS TO NEXT LEVEL"}
          // h4para={""}
          />
          {/* <h1>
                    Social Media Marketing <br /> Agency In Navi Mumbai
                  </h1> */}

          <p className="description aboutDesc">
            At <b>Twinkle Media Hub Pvt. Ltd.®</b>, we are a leading <a href="/services" title="Digital Marketing Services">digital marketing company in Navi Mumbai</a>, specializing in <a href="/services/seo" title="SEO Services">SEO</a>, <a href="/PayPerClick" title="PPC Campaigns">PPC campaigns</a>, <a href="/socialmediamarketing" title="Social Media Marketing">social media marketing</a>, <a href="/websitedevlopment" title="Web Development Services">web development</a>, and <a href="/GraphicsDesigning" title="Graphic Design Services">graphic designing</a>.
            <br /><br />
            We create <b>captivating campaigns®</b> that tell your unique story, build stronger connections, generate quality leads, and deliver measurable results. From strategic planning and innovative <b>creativity®</b> to data-driven optimization and <b>performance marketing®</b>, we empower businesses of every size to shine brighter and stand out in the digital world — all with affordable, <b>high-quality solutions®</b>.
          </p>

          <button className="hero-btn" onClick={() => window.location.href = "tel:+917900193079"}>Get Started</button>
        </div>

        <div className="hero-image about-hero">
          <img src='./asset/img/digitalwebsite1.png' alt="Twinkle Media Hub - Digital Marketing Agency Navi Mumbai"/>
        </div>
      </section>
    </>
  );
}
