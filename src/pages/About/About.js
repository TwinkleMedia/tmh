import React from "react";
import Heading from "../../component/Heading/Heading";
import logo from "../../image/brand.webp";

import video from "../../image/text animation.mp4";
import "./About.css";
import { Helmet } from "react-helmet";
export default function About() {
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
          content="A well-known Performance Oriented Digital Marketing Company in Navi Mumbai & Mumbai with core expertise in PPC, SEO, Social Media & Web development, and Graphic Designing Know More!"
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
          content="Twinkle Media Hub Services Pvt. Ltd."
        />
        <meta property="og:url" content="https://twinklemediahub.com/" />
        <meta
          property="og:description"
          content="A well-known Performance Oriented Digital Marketing Company in Navi Mumbai & Mumbai with core expertise in PPC, SEO, Social Media & Web development, and Graphic Designing Know More!"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="about " id="about">
        <Heading headingLabel="About us" />
        <div className="container-fluid">
          <div className="row  position-relative d-flex justify-content-center">
            <div className="col-lg-6 p-lg-2 border bg-light m-2">
              <div className="bg-light p-3 pt-5 p-md-5">
                <h1 className="text-uppercase">
                  ELEVATE YOUR BRAND AND GROW YOUR BUSINESS
                </h1>
                <h2 className="text-uppercase gradient-text">
                  TAKE YOUR BUSINESS TO NEXT LEVEL
                </h2>
                <p className="py-3 py-md-5">
                  At <b>Twinkle Media Hub Pvt. Ltd.</b>, we're a passionate team
                  of Advertising & Digital Marketing experts fueled by a desire
                  to transform brands. We craft captivating campaigns that tell
                  your Unique Story, Generate Leads, and Drive Measurable
                  results & from strategic planning & stunning creative to
                  data-driven optimization, we empower businesses of all sizes
                  to shine brightly online.
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
            <div className="col-lg-5 p-lg-2 border bg-light m-2">
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
      </div>
    </>
  );
}
