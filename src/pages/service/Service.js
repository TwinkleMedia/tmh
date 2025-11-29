import React, { useEffect, useState } from "react";
import "./Service.css";
import Heading from "../../component/Heading/Heading";
import TerminalIcon from "@mui/icons-material/Terminal";
import ServiceCard from "../../component/ServiceCard/ServiceCard";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import { Helmet } from "react-helmet";
import Allservices from "../../component/All-pages/Allservices/Mainservices/Allservices";
import { Typewriter } from "react-simple-typewriter";
export default function Service() {
  const images = [
    "./asset/upscaled.png",
    "./asset/websiteMockup.png",
  ]
  const [currentState, setCurrentState] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => (prev + 1) % images.length)
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  return (
    <div id="services" className="">
      <Helmet>
        <title>
          Twinkle Media Hub Services Best for SEO, PPC, Social Media, Website
          Development
        </title>
        <link rel="canonical" href="https://www.twinklemediahub.com/services" />
        <meta
          name="description"
          content="Twinkle Media Hub Pvt. Ltd. -  Best e-commerce Digital Marketing Services with advanced designer consultants at affordable packages for SEO, PPC & Social Media experts. Top professional branding agency to outsource Website Design & Development Companies - India"
        />
        <meta
          name="keywords"
          content="Digital Marketing, SEO, PPC, Social Media Marketing, Email Marketing, Graphic design, Direct Marketing, Web Development, Video Editing, Email Marketing, Bulk WhatsApp marketing,"
        />
        <meta
          property="og:title"
          content="Twinkle Media Hub Services Best for SEO, PPC, Social Media, Website
          Development"
        />
        <meta
          property="og:site_name"
          content="Twinkle Media Hub Services Pvt. Ltd."
        />
        <meta property="og:url" content="https://twinklemediahub.com/services" />
        <meta
          property="og:description"
          content="Twinkle Media Hub Pvt. Ltd. -  Best e-commerce Digital Marketing Services with advanced designer consultants at affordable packages for SEO, PPC & Social Media experts. Top professional branding agency to outsource Website Design & Development Companies - India"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Breadcrumbs breadheading={"Services"} breadcrumbsLabel={"Services"} />
      <div className="smm-hero-section">
        {/* <Breadcrumbs
                breadheading={"Social Media (SMM)"}
                breadcrumbsLabel={"Social Media (SMM)"}
              /> */}
        <section className="hero-section">
          <div className="hero-content">
            <Allservices
              Serviceh1={<>
                Services We Provide <br />
              </>}
              Serviceh1span={<span>
                <Typewriter
                  words={["Social Media Marketing", "Commercial Ads..", "Web Development..", "SEO..", "Graphic Design..", "Media Production..", "Pay Per Click", "And Many More.."]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000} />
              </span>}
            // h4para={""}
            />
            {/* <h1>
                    Social Media Marketing <br /> Agency In Navi Mumbai
                  </h1> */}

            <p className="subtitle">
              Partner with Twinkle Media Hub Pvt Ltd and elevate your digital presence today.
            </p>

            <p className="description">
              As a premier social media marketing agency, we craft impactful digital
              strategies that boost engagement and drive conversions. Our mission is
              to transform your brand’s presence with measurable results.
            </p>

            <button className="hero-btn">Get Started</button>
          </div>

          <div className="hero-image hero-image-slider">
            <img key={currentState} src={images[currentState]} alt="images Slider" className="slider-Image fadeSlide" />
          </div>
        </section>
        {/* <Allservices
                // Serviceh1={"Social Media Marketing Agency"}
                // Serviceh1span={"In Navi Mumbai"}
                h4para={""}
              /> */}
      </div>
      <Heading headingLabel="Best Digital Marketing Agency in Mumbai" />
      <div className="container">
        <div className="row">

          <ServiceCard
            url="CommercialAds"
            icon={<TerminalIcon />}
            heading="Commercial Ads"
            className="textColor"
          ><br /><br />
          </ServiceCard>

          <ServiceCard
            url="socialmediamarketing"
            icon={<TerminalIcon />}
            heading="SOCIAL MEDIA MARKETING (SMM)"
            className="test textColor"
          ><br /><br />
          </ServiceCard>

          <ServiceCard
            url="websitedevlopment"
            icon={<TerminalIcon />}
            heading="WEB DEVELOPMENT"
            className="textColor"
          ><br /><br />
          </ServiceCard>

          <ServiceCard
            url="seo"
            icon={<TerminalIcon />}
            heading="SEO (SEARCH ENGINE OPTIMIZATION)"
            className="textColor"
          ><br /><br />
          </ServiceCard>
          <ServiceCard
            url="GraphicsDesigning"
            icon={<TerminalIcon />}
            heading="GRAPHIC DESIGN"
            className="textColor"
          ><br /><br />
          </ServiceCard>

          <ServiceCard
            url="bulkWhatsapp"
            icon={<TerminalIcon />}
            heading="BULK WHATASPP MARKETING"
            className="textColor"
          ><br /><br />
          </ServiceCard>
          <ServiceCard
            url="Directmarketing"
            icon={<TerminalIcon />}
            heading="DIRECT MARKETING"
            className="textColor"
          ><br /><br />
          </ServiceCard>
          <ServiceCard
            url="PayPerClick"
            icon={<TerminalIcon />}
            heading="PAY PER CLICK"
            className="textColor"
          >
            <br /><br />
          </ServiceCard>
          <ServiceCard
            url="mediaProduction"
            icon={<TerminalIcon />}
            heading="Media Production"
            className="textColor"
          ><br /><br />
          </ServiceCard>
        </div>
      </div>
    </div>
  );
}
