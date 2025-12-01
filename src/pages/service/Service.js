import React, { useEffect, useState } from "react";
import "./Service.css";
import Heading from "../../component/Heading/Heading";
import ServiceCard from "../../component/ServiceCard/ServiceCard";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import { Helmet } from "react-helmet";
import Allservices from "../../component/All-pages/Allservices/Mainservices/Allservices";
import { Typewriter } from "react-simple-typewriter";
import ServicesSection from "./ServicesSection";
import './serviceSection.css'
import {
  CommandLineIcon,        // replaces TerminalIcon
  ChartBarIcon,
  CameraIcon,
  GlobeAltIcon,
  PencilIcon,             // replaces PencilAltIcon
  ChatBubbleOvalLeftIcon, // replaces ChatAlt2Icon
  MegaphoneIcon,
  CurrencyDollarIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

export default function Service() {
  const images = [
    "./asset/websiteMockup.png",
    "./asset/ssm.png",
    "./asset/gd.png",
    "./asset/dm.png",
    "./asset/seo.png",
    "./asset/payperclick.png",
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
    <div id="services">
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
        <section className="hero-section serviceHero">
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

            <p className="subtitle" id="subtitle">  
              Partner with Twinkle Media Hub Pvt Ltd and elevate your digital presence today.
            </p>

            <p className="description" id="servDesc">
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
        <div className="row servicesSection">
          <ServicesSection
            url="CommercialAds"
            icon={<CameraIcon className="w-12 h-12 text-blue-500" />}
            heading="Commercial Ads"
            desc="High-quality ads to boost your brand visibility."
          />
          <ServicesSection
            url="socialmediamarketing"
            icon={<ChatBubbleOvalLeftIcon className="w-12 h-12 text-blue-500" />}
            heading="Social Media Marketing (SMM)"
            desc="Engage your audience across social platforms effectively."
          />
          <ServicesSection
            url="websitedevlopment"
            icon={<GlobeAltIcon className="w-12 h-12 text-blue-500" />}
            heading="Web Development"
            desc="Build responsive and professional websites for your business."
          />
          <ServicesSection
            url="seo"
            icon={<ChartBarIcon className="w-12 h-12 text-blue-500" />}
            heading="SEO (Search Engine Optimization)"
            desc="Improve your website ranking on Google and other search engines."
          />
          <ServicesSection
            url="GraphicsDesigning"
            icon={<PencilIcon className="w-12 h-12 text-blue-500" />}
            heading="Graphic Design"
            desc="Creative designs to enhance your brand identity."
          />
          <ServicesSection
            url="bulkWhatsapp"
            icon={<MegaphoneIcon className="w-12 h-12 text-blue-500" />}
            heading="Bulk WhatsApp Marketing"
            desc="Reach your customers directly with targeted WhatsApp campaigns."
          />
          <ServicesSection
            url="Directmarketing"
            icon={<CurrencyDollarIcon className="w-12 h-12 text-blue-500" />}
            heading="Direct Marketing"
            desc="Personalized campaigns to increase conversions and sales."
          />
          <ServicesSection
            url="PayPerClick"
            icon={<CommandLineIcon className="w-12 h-12 text-blue-500" />}
            heading="Pay Per Click"
            desc="Targeted PPC campaigns to maximize ROI."
          />
          <ServicesSection
            url="mediaProduction"
            icon={<VideoCameraIcon className="w-12 h-12 text-blue-500" />}
            heading="Media Production"
            desc="Professional video and audio production services."
          />
        </div>
      </div>

    </div>
  );
}
