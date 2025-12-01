import React, { useState } from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Allservices from "./Mainservices/Allservices";
import { Helmet } from "react-helmet";
import "./Webdev.css"
import { FaSearch, FaPaintBrush, FaRocket, FaTools } from "react-icons/fa";
const demoImages = [
  "./asset/website1.png",
  "./asset/website2.png",
  "./asset/website3.png",
  "./asset/website4.png",
  "./asset/website5.png",
  "./asset/website6.png",
  "./asset/website7.png",
  "./asset/website8.png",
];
const demoLinks = [
  "https://samalaudyog.in/",
  "https://asccindia.in/",
  "https://alittleman.tmhdemo.in/index.php",
  "https://fourknots.tmhdemo.in/products.php",
  "https://easc.tmhdemo.in/",
  "https://meritseducation.com/",
  "https://naumikaadesignstudio.com/",
  "https://aaryandevcon.com/"
];
export default function Webdevlopment() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  const steps = [
    {
      id: 1,
      icon: <FaSearch />,
      title: "Discovery & Planning",
      text: "We start by understanding your goals and audience to define project scope and timelines.",
      color: "#6C63FF",
    },
    {
      id: 2,
      icon: <FaPaintBrush />,
      title: "Design & Development",
      text: "Our team creates stunning designs and develops a fully functional, secure website tailored to your needs.",
      color: "#FF6584",
    },
    {
      id: 3,
      icon: <FaRocket />,
      title: "Testing & Launch",
      text: "Rigorous testing ensures your site is bug-free and optimized before going live.",
      color: "#00C9A7",
    },
    {
      id: 4,
      icon: <FaTools />,
      title: "Maintenance & Support",
      text: "We provide ongoing maintenance to keep your site secure and up to date post-launch.",
      color: "#FFA500",
    },
  ];
  const frames = [1, 2, 3, 4,5,6,7,8];
  return (
    <>
      <Helmet>
        <title>
          Web Design & Development Company in Navi Mumbai, Mumbai - Twinkle
          Media Hub
        </title>
        <link rel="canonical" href="https://www.twinklemediahub.com/websitedevlopment" />

        <meta
          name="description"
          content="Twinkle Media Hub - Best Website Design and Development Company in Navi-Mumbai, Mumbai. Our Web Developers create Responsive Web Design, e-commerce stores, and Microsites with modern UI/UX"
        />
        <meta
          name="keywords"
          content="Web Development Company Mumbai, Mumbai Website Designers, Custom Website Development Mumbai, E-commerce Website Development Mumbai, Responsive Website Design Mumbai, Mobile App Development Mumbai, WordPress Website Development Mumbai, PHP Web Development Mumbai, Website Maintenance Services Mumbai, UI/UX Design Mumbai, SEO Services Mumbai, Content Management System (CMS) Mumbai, Web Application Development Mumbai, Affordable Website Development Mumbai, Professional Website Developers Mumbai, Small Business Website Design Mumbai, Corporate Website Design Mumbai, Landing Page Design Mumbai, Website Redesign Services Mumbai, Website Development Packages Mumbai, website development agency in Mumbai, website design and development company in Mumbai"
        />
        <meta
          property="og:title"
          content="Web Design & Development Company in Navi Mumbai, Mumbai - Twinkle
          Media Hub"
        />
        <meta
          property="og:site_name"
          content="Twinkle Media Hub Services Pvt. Ltd."
        />
        <meta property="og:url" content="https://twinklemediahub.com/websitedevlopment" />
        <meta
          property="og:description"
          content="Twinkle Media Hub - Best Website Design and Development Company in Navi-Mumbai, Mumbai. Our Web Developers create Responsive Web Design, e-commerce stores, and Microsites with modern UI/UX"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="">
        {/* <Breadcrumbs
          breadheading={"Web Development"}
          breadcrumbsLabel={"Web Development"}
        /> */}
        <section className="hero-section" id="webdevSection">
          <div className="hero-content" id="web-content">
            <Allservices
              Serviceh1={"Website Design & Development"}
              Serviceh1span={"Services in Mumbai"}
            // h4para={""}
            />
            {/* <h1>
              Social Media Marketing <br /> Agency In Navi Mumbai
            </h1> */}

            <p className="subtitle">
              Partner with Twinkle Media Hub Pvt Ltd and build a powerful digital foundation today.
            </p>

            <p className="description" id="webdesc">
              Welcome to Twinkle Media Hub Pvt Ltd - Your Trusted Web Development Company in Mumbai At Twinkle Media Hub Pvt Ltd, we specialize in crafting exceptional digital experiences through our expert web development and designing services. Located in the heart of Mumbai, our team of skilled professionals is dedicated to delivering cutting-edge solutions tailored to meet your business needs.
            </p>

            <button className="hero-btn">Get Started</button>
          </div>

          <div className="hero-image" id="webdev">
            <img src='./asset/websiteMockup.png' alt="Mockup" />
          </div>
        </section>
        {/* <Allservices
          Serviceh1={"Website Design & Development "}
          Serviceh1span={"Services in Mumbai"}
          h4para={""}
        /> */}
      </div>
      <div className="container">
        <div className="sw-main-content mt-5">
          {/* <p>
            Welcome to Twinkle Media Hub Pvt Ltd - Your Trusted Web Development
            Company in Mumbai At Twinkle Media Hub Pvt Ltd, we specialize in
            crafting exceptional digital experiences through our expert web
            development and designing services. Located in the heart of Mumbai,
            our team of skilled professionals is dedicated to delivering
            cutting-edge solutions tailored to meet your business needs.
          </p> */}
        </div>

        {/* <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="sw-main-content mt-3">
              <p>
                The Influence of various Social Media platforms is growing day
                by day, Almost every brand is trying their best to reach their
                target audience and have a long-lasting impact on them, but very
                few are successful in tapping the right chords at the right
                platform and at the right time.
              </p>

              <p>
                The Influence of various Social Media platforms is growing day
                by day, Almost every brand is trying their best to reach their
                target audience and have a long-lasting impact on them, but very
                few are successful in tapping the right chords at the right
                platform and at the right time.
              </p>

              <p>
                The Influence of various Social Media platforms is growing day
                by day, Almost every brand is trying their best to reach their
                target audience and have a long-lasting impact on them, but very
                few are successful in tapping the right chords at the right
                platform and at the right time.
              </p>

              <p>
                The Influence of various Social Media platforms is growing day
                by day, Almost every brand is trying their best to reach their
                target audience and have a long-lasting impact on them, but very
                few are successful in tapping the right chords at the right
                platform and at the right time.
              </p>

              <p>
                The Influence of various Social Media platforms is growing day
                by day, Almost every brand is trying their best to reach their
                target audience and have a long-lasting impact on them, but very
                few are successful in tapping the right chords at the right
                platform and at the right time.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img
              src="./asset/img/digitalwebsite.png "
              alt="images-smm"
              className="w-100"
            />
          </div>
        </div> */}

        {/* <h2>Our Services:</h2>
        <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span>
        <div className="sw-main-content mt-3">
          <p>
            <b>Web Development Solutions:</b> As a leading Web Development
            Company in Mumbai, we offer custom-built websites that are robust,
            scalable, and tailored to your specific requirements. Whether you
            need a corporate website, an e-commerce platform, or a web
            application, we have the expertise to deliver.
          </p>

          <p>
            <b>Website Designers in Mumbai:</b> Our Mumbai Website Designers are
            passionate about creating visually stunning designs that captivate
            your audience and enhance user experience. We combine creativity
            with functionality to ensure your website not only looks great but
            also performs seamlessly across all devices.
          </p>

          <p>
            <b>E-commerce Website Development:</b> Drive your online business
            forward with our E-commerce Website Development services in Mumbai.
            We build secure and user-friendly online stores that maximize
            conversions and deliver a seamless shopping experience.
          </p>
          <p>
            <b>Responsive Website Design:</b> Ensure your website looks flawless
            on every device with our Responsive Website Design services in
            Mumbai. We create mobile-friendly websites that adapt effortlessly
            to various screen sizes, boosting user engagement and satisfaction.
          </p>
          <p>
            <b>WordPress Website Development:</b> Harness the power of WordPress
            with our WordPress Website Development services in Mumbai. We create
            feature-rich and easy-to-manage WordPress websites that empower your
            business to thrive online.
          </p>
          <p>
            <b>PHP Web Development:</b> Our PHP Web Development services in
            Mumbai leverage the versatility of PHP to build dynamic and
            interactive websites that meet your unique business objectives.
          </p>
          <p>
            <b>Website Maintenance Services:</b> Keep your website running
            smoothly with our Website Maintenance Services in Mumbai. We offer
            proactive maintenance and support to ensure your website remains
            secure, up-to-date, and optimized for peak performance.
          </p>
          <p>
            <b>UI/UX Design:</b> Deliver intuitive and user-centric experiences
            with our UI/UX Design services in Mumbai. We focus on creating
            interfaces that not only look stunning but also enhance usability
            and customer satisfaction.
          </p>
          <p>
            <b>SEO Services:</b> Boost your online visibility and drive
            qualified traffic with our SEO Services in Mumbai. We employ proven
            strategies to improve your search engine rankings and attract more
            potential customers to your website.
          </p>
          <p>
            <b>Content Management System (CMS):</b> Simplify content management
            with our CMS Solutions in Mumbai. We integrate robust CMS platforms
            that empower you to update content effortlessly and manage your
            digital assets with ease.
          </p>
        </div> */}
        <section class="Webservice">
          <h2>Our Services</h2>
          {/* <p>Mumbai’s fast-paced market demands ads that not only look great but also resonate deeply with the audience. Our team blends creativity, storytelling, and marketing strategy to deliver commercials that leave a lasting impression.</p> */}
          <div class="Webservice-grid">
            <div class="Webservice-card">
              <i class="fa-solid fa-lightbulb"></i>
              <h3>Web Development Solutions</h3>
              <p>As a leading Web Development Company in Mumbai, we offer custom-built websites that are robust, scalable, and tailored to your specific requirements. Whether you need a corporate website, an e-commerce platform, or a web application, we have the expertise to deliver.</p>
            </div>

            <div class="Webservice-card">
              <i class="fa-solid fa-video"></i>
              <h3>Website Designers in Mumbai</h3>
              <p>Our Mumbai Website Designers are passionate about creating visually stunning designs that captivate your audience and enhance user experience. We combine creativity with functionality to ensure your website not only looks great but also performs seamlessly across all devices.</p>
            </div>

            <div class="Webservice-card">
              <i class="fa-solid fa-users"></i>
              <h3>E-commerce Website Development</h3>
              <p>Drive your online business forward with our E-commerce Website Development services in Mumbai. We build secure and user-friendly online stores that maximize conversions and deliver a seamless shopping experience.</p>
            </div>

            <div class="Webservice-card">
              <i class="fa-solid fa-chart-line"></i>
              <h3>Responsive Website Design</h3>
              <p>Ensure your website looks flawless on every device with our Responsive Website Design services in Mumbai. We create mobile-friendly websites that adapt effortlessly to various screen sizes, boosting user engagement and satisfaction.</p>
            </div>
            <div class="Webservice-card">
              <i class="fa-solid fa-chart-line"></i>
              <h3>WordPress Website Development</h3>
              <p> Harness the power of WordPress with our WordPress Website Development services in Mumbai. We create feature-rich and easy-to-manage WordPress websites that empower your business to thrive online.</p>
            </div>
            <div class="Webservice-card">
              <i class="fa-solid fa-chart-line"></i>
              <h3>PHP Web Development</h3>
              <p>Our PHP Web Development services in Mumbai leverage the versatility of PHP to build dynamic and interactive websites that meet your unique business objectives.</p>
            </div>
            <div class="Webservice-card">
              <i class="fa-solid fa-chart-line"></i>
              <h3>Website Maintenance Services</h3>
              <p> Keep your website running smoothly with our Website Maintenance Services in Mumbai. We offer proactive maintenance and support to ensure your website remains secure, up-to-date, and optimized for peak performance.</p>
            </div>
            <div class="Webservice-card">
              <i class="fa-solid fa-chart-line"></i>
              <h3>UI/UX Design</h3>
              <p>Our PHP Web Development services in Mumbai leverage the versatility of PHP to build dynamic and interactive websites that meet your unique business objectives.</p>
            </div>
          </div>
        </section>

        <h3>
          We Offer Creative, Innovative, and SEO-Friendly Website Designing at
          an Affordable Price.
        </h3>
        {/* <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span> */}
        <div className="sw-main-content mt-3 offer">
          <div>
            <p>
              At Twinkle Media Hub Pvt Ltd, we believe in delivering not just
              websites, but digital experiences that captivate and convert. Our
              team follows a meticulous website designing & development agency
              process, ensuring transparency, collaboration, and outstanding
              results for every project.<br />
              We take website design as an art and as one of the best web development companies, we have the skills to design as per your requirement. We know web presence represents your business and brand identity. Our skilled website developers in Mumbai have a high-quality website and mobile application but also develop in such a way that will engage them to reach out to your business so we develop an attractive, professional, and user-friendly website for all businesses.
            </p>
            <button className="serv-btn">Get Quote</button>

          </div>
          <img src="./asset/web1.jpg" alt="webisteDevelopementImage" className="webImg" />
        </div>
        <section className="process-section">
          <h2 className="title">Our Website Designing & Development Process</h2>
          <p className="subtitle">
            Discover how we bring your vision to life with our streamlined approach:
          </p>

          <div className="process-container">
            {steps.map((step) => (
              <div className="process-card" key={step.id}>
                <div className="icon" style={{ backgroundColor: step.color }}>
                  {step.icon}
                </div>
                <h3>{step.id}. {step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>
        {/* <h3>Our Website Designing & Development Process</h3>
        <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto"></span>
        <div className="sw-main-content mt-3">
          <p>
            Discover how we bring your vision to life with our streamlined
            approach:
          </p>
          <p>
            <b>1. Discovery & Planning:</b> We start by understanding your goals
            and audience to define project scope and timelines.
          </p>
          <p>
            <b>2. Design & Development:</b> Our team creates stunning designs
            and develops a functional, secure website tailored to your needs.
          </p>
          <p>
            <b>3. Testing & Launch:</b> Rigorous testing ensures your site is
            bug-free and optimized for performance before we go live.
          </p>
          <p>
            <b>4. Maintenance & Support:</b> We provide ongoing maintenance to
            keep your site secure and up-to-date post-launch.
          </p>
        </div> */}
        <section className="our-work">
          <h2 className="title">Our Work</h2>
          {/* <p className="subtitle">
            Discover how we bring your vision to life with our streamlined approach:
          </p> */}

          <div className="workcards-container">
            {frames.map((frame, i) => (
              <div className="workcard" key={i}>

                <div className="image-wrapper">
                  <img src={demoImages[i]} alt={`Frame ${frame}`} className="scroll-image" />
                </div>

                <button className="visit-btn"><a href={demoLinks[i]} target="_blank" rel="noopener noreferrer">Go To Website</a></button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
