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
  }, []);
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <div id="services">
      <Helmet>
        <title>Best Digital Marketing Services in Mumbai | SEO, PPC, Social Media, Web Development</title>
        <link rel="canonical" href="https://www.twinklemediahub.com/services" />
        <meta
          name="description"
          content="Twinkle Media Hub Pvt. Ltd. delivers top-rated Digital Marketing Services in Mumbai including SEO, PPC, Social Media Marketing, Website Development, Branding, Video Production & Graphic Designing. Boost your online presence with expert strategies."
        />
        <meta
          name="keywords"
          content="Digital Marketing Services Mumbai, SEO Company Mumbai, Social Media Marketing Agency India, PPC Services Mumbai, Web Development Company, Best Digital Marketing Agency in Mumbai, Graphic Design Services, Video Production Agency, Branding Agency India"
        />
        <link rel="canonical" href="https://www.twinklemediahub.com/services" />
        {/* Open Graph (Facebook / LinkedIn) */}
        <meta property="og:title" content="Best Digital Marketing Agency in Mumbai | SEO, PPC, SMM & Web Development" />
        <meta
          property="og:description"
          content="Get premium SEO, PPC, Social Media Marketing, Website Development & Branding Services. Grow your business with strategic and result-driven digital marketing solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.twinklemediahub.com/services" />
        <meta property="og:image" content="https://www.twinklemediahub.com/assets/logo.png" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Twinkle Media Hub – Best Digital Marketing & SEO Services in Mumbai" />
        <meta
          name="twitter:description"
          content="Top SEO, PPC, Social Media, Graphic Design & Website Development services. Your trusted digital marketing partner in India."
        />
        <meta name="twitter:image" content="https://www.twinklemediahub.com/assets/logo.png" />
        {/* Schema Markup (SEO Booster) */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org/",
        "@type": "ProfessionalService",
        "name": "Twinkle Media Hub Pvt. Ltd.",
        "url": "https://www.twinklemediahub.com/services",
        "logo": "https://www.twinklemediahub.com/assets/logo.png",
        "description": "Best Digital Marketing Agency in Mumbai providing SEO, PPC, SMM, Website Development, Branding & Media Production.",
        "sameAs": [
          "https://www.facebook.com/twinklemediahub",
          "https://www.instagram.com/twinklemediahub",
          "https://www.linkedin.com/company/twinklemediahub"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mumbai",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "India"
        }
      }
    `}
        </script>
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
            <img key={currentState} src={images[currentState]} alt="Digital Marketing Services – Twinkle Media Hub" className="slider-Image fadeSlide" />
          </div>
        </section>
        {/* <Allservices
                // Serviceh1={"Social Media Marketing Agency"}
                // Serviceh1span={"In Navi Mumbai"}
                h4para={""}
              /> */}
      </div>
      <Heading headingLabel="Top Digital Marketing Services in Mumbai – SEO, PPC, SMM, Web Development" />
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
          {/* <ServicesSection
            url="Directmarketing"
            icon={<CurrencyDollarIcon className="w-12 h-12 text-blue-500" />}
            heading="Direct Marketing"
            desc="Personalized campaigns to increase conversions and sales."
          /> */}
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
      <div className="service-extra-section container mt-5">
        <h2 className="service-extra-title">
          Why Choose Our Digital Marketing Services in Mumbai?
        </h2>

        <p className="service-extra-text">
          Twinkle Media Hub Pvt. Ltd. is recognized as one of the best Digital Marketing
          Agencies in Mumbai. Our expert team specializes in SEO, Social Media Marketing,
          Website Development, PPC Advertising, Branding, and Media Production — helping
          businesses grow with data-driven strategies and high-performance campaigns.
        </p>

        <h3 className="service-extra-subtitle">Industries We Serve</h3>

        <ul className="industry-list">
          <li>E-commerce</li>
          <li>Real Estate</li>
          <li>Hotels & Hospitality</li>
          <li>Education</li>
          <li>Fitness & Gym</li>
          <li>Corporate & Startups</li>
        </ul>
      </div>

    </div>
  );
}
